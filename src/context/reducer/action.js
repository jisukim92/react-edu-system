import axios from "axios";
export const setData = data => ({
  type: "LOAD_DATA",
  payload: data
});

export const setLoadDtestList = data => ({
  type: "LOAD_DTEST_DATA",
  payload: data
});

export const setLoading = isLoad => ({
  type: "SET_LOADING",
  payload: isLoad
});

export const setLogin = isLogin => ({
  type: "SET_LOGIN",
  payload: isLogin
});

export const setError = error => ({
  type: "SET_ERROR",
  payload: error
});

export const setUserInfo = userInfo => ({
  type: "SET_USERINFO",
  payload: userInfo
});

export const LogOut = () => {
  sessionStorage.clear();
  return {
    type: "LOGOUT"
  };
};

// 인바디 관련
export const setDateTimes = dateTimes => ({
  type: "SET_DATETIMES",
  payload: dateTimes
});
export const setPreviousDate = previousDate => ({
  type: "SET_PREVIOUSDATE",
  payload: previousDate
});

export const setObesityData = obesityData => ({
  type: "SET_OBESITYDATA",
  payload: obesityData
});
export const setObesityData1 = obesityData1 => ({
  type: "SET_OBESITYDATA1",
  payload: obesityData1
});
export const setObesityData2 = obesityData2 => ({
  type: "SET_OBESITYDATA2",
  payload: obesityData2
});
export const setObesityData3 = obesityData3 => ({
  type: "SET_OBESITYDATA3",
  payload: obesityData3
});
export const setObesityData4 = obesityData4 => ({
  type: "SET_OBESITYDATA4",
  payload: obesityData4
});

export const setBodyCompositionData = bodyCompositionData => ({
  type: "SET_BODYCOMPOSITIONDATA",
  payload: bodyCompositionData
});
export const setBodyCompositionData1 = bodyCompositionData1 => ({
  type: "SET_BODYCOMPOSITIONDATA1",
  payload: bodyCompositionData1
});
export const setBodyCompositionData2 = bodyCompositionData2 => ({
  type: "SET_BODYCOMPOSITIONDATA2",
  payload: bodyCompositionData2
});
export const setBodyCompositionData3 = bodyCompositionData3 => ({
  type: "SET_BODYCOMPOSITIONDATA3",
  payload: bodyCompositionData3
});
export const setBodyCompositionData4 = bodyCompositionData4 => ({
  type: "SET_BODYCOMPOSITIONDATA4",
  payload: bodyCompositionData4
});

export const setBodyConditionData = bodyConditionData => ({
  type: "SET_BODYCONDITIONDATA",
  payload: bodyConditionData
});
export const setBodyConditionData1 = bodyConditionData1 => ({
  type: "SET_BODYCONDITIONDATA1",
  payload: bodyConditionData1
});
export const setBodyConditionData2 = bodyConditionData2 => ({
  type: "SET_BODYCONDITIONDATA2",
  payload: bodyConditionData2
});
export const setBodyConditionData3 = bodyConditionData3 => ({
  type: "SET_BODYCONDITIONDATA3",
  payload: bodyConditionData3
});
export const setBodyConditionData4 = bodyConditionData4 => ({
  type: "SET_BODYCONDITIONDATA4",
  payload: bodyConditionData4
});
// 투두리스트 그래프 관련
export const setToDoListGraph = completionPercent => ({
  type: "SET_TODOLIST_GRAPH",
  payload: completionPercent
});

export const loadData = () => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const id = JSON.parse(sessionStorage.getItem("userId"));
  const data = await fetch(
    ``
  )
    .then(res => res.json())
    .then(data => data.result)
    .catch(error => console.log(error));

  if (!data.length) {
    navigate("/noresult");
    return;
  }

  const groups = data.reduce((groups, list) => {
    const date = list["응시년월"];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(list);
    return groups;
  }, {});

  const 응시월 = Object.keys(groups);

  const 응시내역 = 응시월.reduce((group, key) => {
    groups[key].forEach(grade => {
      const 응시년월 = key;
      if (!group[응시년월]) {
        group[응시년월] = {};
      }

      const 시험명 = grade["시험명"];
      if (!group[응시년월][시험명]) {
        group[응시년월][시험명] = [];
      }
      group[응시년월][시험명].push(grade);
    });

    return group;
  }, {});

  const 년월 = 응시월.reduce((group, yymm) => {
    const [year, month] = yymm.match(/.{1,4}/g);

    if (!group[year]) {
      group[year] = [];
    }

    group[year].push(month);
    return group;
  }, {});

  const 년 = Object.keys(년월);
  dispatch(setData({ 응시월, 응시내역, 년월, 년 }));
  dispatch(setLoading(false));
};

export const tryLogin = userData => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const { id, pw } = userData;

  try {
    const response = await fetch(
      "/login",
      {
        method: "POST",
        body: JSON.stringify({
          api_key: "test",
          user_id: id,
          user_pw: pw
        })
      }
    ).then(res => res.json());

    if (response.success === "true") {
      sessionStorage.setItem("userId", JSON.stringify(id));
      dispatch(setLogin(true));
      dispatch(setUserInfo(response.result[0]));
      navigate("/report/daily");
      return;
    } else {
      dispatch(setError(response.msg));
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error));
    dispatch(setLoading(false));
  }
};

// *Axios Post할때 보내는 값
const headers = {
  "API-KEY": import.meta.env.VITE_INBODY_API_KEY,
  Account: import.meta.env.VITE_INBODY_ACCOUNT
};
axios.defaults.headers.post = null;

// *상세 정보를 받기 위해 필요한 날짜를 받는 요청
export const getDateTimes = UserID => async (dispatch, state, navigate) => {
  dispatch(setLoading(true));

  const response = await axios
    .post(
      "MockDateTimesAPI",
      {
        UserID: UserID
      },
      { headers }
    )
    .then(function (response) {
      // dispatch(setLoading(false));
      // 필요한 Date Times 형식이 내림차순이라 역방향으로 저장하는 값
      // *그리고 필요한 Date Times가 최근 5개라서 5개만 저장
      const newDateTimes = response.data
        .filter(i => i.length !== 0)
        .sort((a, b) => b - a)
        .filter((e, i) => i < 5);
      dispatch(setDateTimes(newDateTimes));

      // * '(바로전날짜)검사보다 늘었어요'. 에 집어넣을 **일 값 저장
      dispatch(setPreviousDate(newDateTimes[1].slice(6, 8)));
    })
    .catch(() => {
      dispatch(setLoading(true));
    });
};

export const getInBodyData =
  (UserID, dateTimes) => async (dispatch, state, navigate) => {
    dispatch(setLoading(true));
    axios
      .all([
        axios.post(
          "MockInBodyDataAPI1",
          {
            UserID: UserID,
            Datetimes: dateTimes[0]
          },
          { headers }
        ),
        axios.post(
          "MockInBodyDataAPI2",
          {
            UserID: UserID,
            Datetimes: dateTimes[1]
          },
          { headers }
        ),
        axios.post(
          "MockInBodyDataAPI3",
          {
            UserID: UserID,
            Datetimes: dateTimes[2]
          },
          { headers }
        ),
        axios.post(
          "MockInBodyDataAPI4",
          {
            UserID: UserID,
            Datetimes: dateTimes[3]
          },
          { headers }
        ),
        axios.post(
          "MockInBodyDataAPI5",
          {
            UserID: UserID,
            Datetimes: dateTimes[4]
          },
          { headers }
        )
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5) => {
          dispatch(setLoading(false));
          //* 제일 최신 비만진단 데이터 저장
          const userObesityData = {
            BMI_BodyMassIndex: res1.data["BMI(BodyMassIndex)"],
            PBF_PercentBodyFat: res1.data["PBF(PercentBodyFat)"],
            WHR_Waist_HipRatio: res1.data["WHR(Waist-HipRatio)"],
            ObesityDegree: res1.data.ObesityDegree,
            LowerLimit_BMINormalRange: res1.data["LowerLimit(BMINormalRange)"],
            UpperLimit_BMINormalRange: res1.data["UpperLimit(BMINormalRange)"],
            LowerLimit_PBFNormalRange: res1.data["LowerLimit(PBFNormalRange)"],
            UpperLimit_PBFNormalRange: res1.data["UpperLimit(PBFNormalRange)"],
            LowerLimit_WHRNormalRange: res1.data["LowerLimit(WHRNormalRange)"],
            UpperLimit_WHRNormalRange: res1.data["UpperLimit(WHRNormalRange)"],
            LowerLimit_ObesityDegreeNormalRange:
              res1.data["LowerLimit(ObesityDegreeNormalRange)"],
            UpperLimit_ObesityDegreeNormalRange:
              res1.data["UpperLimit(ObesityDegreeNormalRange)"]
          };

          //* 제일 최신 신체상태 데이터 저장
          const userBodyCondition = {
            Weight: res1.data.Weight,
            SMM_SkeletalMuscleMass: res1.data["SMM(SkeletalMuscleMass)"],
            BFM_BodyFatMass: res1.data["BFM(BodyFatMass)"],
            SLM_SoftLeanMass: res1.data["SLM(SoftLeanMass)"],
            LowerLimit_WeightNormalRange:
              res1.data["LowerLimit(WeightNormalRange)"],
            UpperLimit_WeightNormalRange:
              res1.data["UpperLimit(WeightNormalRange)"],
            LowerLimit_SMMNormalRange: res1.data["LowerLimit(SMMNormalRange)"],
            UpperLimit_SMMNormalRange: res1.data["UpperLimit(SMMNormalRange)"],
            LowerLimit_BFMNormalRange: res1.data["LowerLimit(BFMNormalRange)"],
            UpperLimit_BFMNormalRange: res1.data["UpperLimit(BFMNormalRange)"],
            LowerLimit_SLMNormalRange: res1.data["LowerLimit(SLMNormalRange)"],
            UpperLimit_SLMNormalRange: res1.data["UpperLimit(SLMNormalRange)"]
          };

          //* 제일 최신 체성분 데이터 저장
          const userBodyComposition = {
            TBW_TotalBodyWater: res1.data["TBW(TotalBodyWater)"],
            Protein: res1.data.Protein,
            Minerals: res1.data.Minerals,
            LowerLimit_TBWNormalRange: res1.data["LowerLimit(TBWNormalRange)"],
            LowerLimit_ProteinNormalRange:
              res1.data["LowerLimit(ProteinNormalRange)"],
            LowerLimit_MineralsNormalRange:
              res1.data["LowerLimit(MineralsNormalRange)"],
            UpperLimit_TBWNormalRange: res1.data["UpperLimit(TBWNormalRange)"],
            UpperLimit_ProteinNormalRange:
              res1.data["UpperLimit(ProteinNormalRange)"],
            UpperLimit_MineralsNormalRange:
              res1.data["UpperLimit(MineralsNormalRange)"]
          };
          //* 잘보면뒤에1 붙임
          const userObesityData1 = {
            BMI_BodyMassIndex: res2.data["BMI(BodyMassIndex)"],
            PBF_PercentBodyFat: res2.data["PBF(PercentBodyFat)"],
            WHR_Waist_HipRatio: res2.data["WHR(Waist-HipRatio)"],
            ObesityDegree: res2.data.ObesityDegree,
            LowerLimit_BMINormalRange: res2.data["LowerLimit(BMINormalRange)"],
            UpperLimit_BMINormalRange: res2.data["UpperLimit(BMINormalRange)"],
            LowerLimit_PBFNormalRange: res2.data["LowerLimit(PBFNormalRange)"],
            UpperLimit_PBFNormalRange: res2.data["UpperLimit(PBFNormalRange)"],
            LowerLimit_WHRNormalRange: res2.data["LowerLimit(WHRNormalRange)"],
            UpperLimit_WHRNormalRange: res2.data["UpperLimit(WHRNormalRange)"],
            LowerLimit_ObesityDegreeNormalRange:
              res2.data["LowerLimit(ObesityDegreeNormalRange)"],
            UpperLimit_ObesityDegreeNormalRange:
              res2.data["UpperLimit(ObesityDegreeNormalRange)"]
          };
          //* 잘보면뒤에1 붙임
          const userBodyCondition1 = {
            Weight: res2.data.Weight,
            SMM_SkeletalMuscleMass: res2.data["SMM(SkeletalMuscleMass)"],
            BFM_BodyFatMass: res2.data["BFM(BodyFatMass)"],
            SLM_SoftLeanMass: res2.data["SLM(SoftLeanMass)"],
            LowerLimit_WeightNormalRange:
              res2.data["LowerLimit(WeightNormalRange)"],
            UpperLimit_WeightNormalRange:
              res2.data["UpperLimit(WeightNormalRange)"],
            LowerLimit_SMMNormalRange: res2.data["LowerLimit(SMMNormalRange)"],
            UpperLimit_SMMNormalRange: res2.data["UpperLimit(SMMNormalRange)"],
            LowerLimit_BFMNormalRange: res2.data["LowerLimit(BFMNormalRange)"],
            UpperLimit_BFMNormalRange: res2.data["UpperLimit(BFMNormalRange)"],
            LowerLimit_SLMNormalRange: res2.data["LowerLimit(SLMNormalRange)"],
            UpperLimit_SLMNormalRange: res2.data["UpperLimit(SLMNormalRange)"]
          };
          //* 잘보면뒤에1 붙임
          const userBodyComposition1 = {
            TBW_TotalBodyWater: res2.data["TBW(TotalBodyWater)"],
            Protein: res2.data.Protein,
            Minerals: res2.data.Minerals,
            LowerLimit_TBWNormalRange: res2.data["LowerLimit(TBWNormalRange)"],
            LowerLimit_ProteinNormalRange:
              res2.data["LowerLimit(ProteinNormalRange)"],
            LowerLimit_MineralsNormalRange:
              res2.data["LowerLimit(MineralsNormalRange)"],
            UpperLimit_TBWNormalRange: res2.data["UpperLimit(TBWNormalRange)"],
            UpperLimit_ProteinNormalRange:
              res2.data["UpperLimit(ProteinNormalRange)"],
            UpperLimit_MineralsNormalRange:
              res2.data["UpperLimit(MineralsNormalRange)"]
          };
          const userObesityData2 = {
            BMI_BodyMassIndex: res3.data["BMI(BodyMassIndex)"],
            PBF_PercentBodyFat: res3.data["PBF(PercentBodyFat)"],
            WHR_Waist_HipRatio: res3.data["WHR(Waist-HipRatio)"],
            ObesityDegree: res3.data.ObesityDegree,
            LowerLimit_BMINormalRange: res3.data["LowerLimit(BMINormalRange)"],
            UpperLimit_BMINormalRange: res3.data["UpperLimit(BMINormalRange)"],
            LowerLimit_PBFNormalRange: res3.data["LowerLimit(PBFNormalRange)"],
            UpperLimit_PBFNormalRange: res3.data["UpperLimit(PBFNormalRange)"],
            LowerLimit_WHRNormalRange: res3.data["LowerLimit(WHRNormalRange)"],
            UpperLimit_WHRNormalRange: res3.data["UpperLimit(WHRNormalRange)"],
            LowerLimit_ObesityDegreeNormalRange:
              res3.data["LowerLimit(ObesityDegreeNormalRange)"],
            UpperLimit_ObesityDegreeNormalRange:
              res3.data["UpperLimit(ObesityDegreeNormalRange)"]
          };
          const userBodyCondition2 = {
            Weight: res3.data.Weight,
            SMM_SkeletalMuscleMass: res3.data["SMM(SkeletalMuscleMass)"],
            BFM_BodyFatMass: res3.data["BFM(BodyFatMass)"],
            SLM_SoftLeanMass: res3.data["SLM(SoftLeanMass)"],
            LowerLimit_WeightNormalRange:
              res3.data["LowerLimit(WeightNormalRange)"],
            UpperLimit_WeightNormalRange:
              res3.data["UpperLimit(WeightNormalRange)"],
            LowerLimit_SMMNormalRange: res3.data["LowerLimit(SMMNormalRange)"],
            UpperLimit_SMMNormalRange: res3.data["UpperLimit(SMMNormalRange)"],
            LowerLimit_BFMNormalRange: res3.data["LowerLimit(BFMNormalRange)"],
            UpperLimit_BFMNormalRange: res3.data["UpperLimit(BFMNormalRange)"],
            LowerLimit_SLMNormalRange: res3.data["LowerLimit(SLMNormalRange)"],
            UpperLimit_SLMNormalRange: res3.data["UpperLimit(SLMNormalRange)"]
          };
          const userBodyComposition2 = {
            TBW_TotalBodyWater: res3.data["TBW(TotalBodyWater)"],
            Protein: res3.data.Protein,
            Minerals: res3.data.Minerals,
            LowerLimit_TBWNormalRange: res3.data["LowerLimit(TBWNormalRange)"],
            LowerLimit_ProteinNormalRange:
              res3.data["LowerLimit(ProteinNormalRange)"],
            LowerLimit_MineralsNormalRange:
              res3.data["LowerLimit(MineralsNormalRange)"],
            UpperLimit_TBWNormalRange: res3.data["UpperLimit(TBWNormalRange)"],
            UpperLimit_ProteinNormalRange:
              res3.data["UpperLimit(ProteinNormalRange)"],
            UpperLimit_MineralsNormalRange:
              res3.data["UpperLimit(MineralsNormalRange)"]
          };
          const userObesityData3 = {
            BMI_BodyMassIndex: res4.data["BMI(BodyMassIndex)"],
            PBF_PercentBodyFat: res4.data["PBF(PercentBodyFat)"],
            WHR_Waist_HipRatio: res4.data["WHR(Waist-HipRatio)"],
            ObesityDegree: res4.data.ObesityDegree,
            LowerLimit_BMINormalRange: res4.data["LowerLimit(BMINormalRange)"],
            UpperLimit_BMINormalRange: res4.data["UpperLimit(BMINormalRange)"],
            LowerLimit_PBFNormalRange: res4.data["LowerLimit(PBFNormalRange)"],
            UpperLimit_PBFNormalRange: res4.data["UpperLimit(PBFNormalRange)"],
            LowerLimit_WHRNormalRange: res4.data["LowerLimit(WHRNormalRange)"],
            UpperLimit_WHRNormalRange: res4.data["UpperLimit(WHRNormalRange)"],
            LowerLimit_ObesityDegreeNormalRange:
              res4.data["LowerLimit(ObesityDegreeNormalRange)"],
            UpperLimit_ObesityDegreeNormalRange:
              res4.data["UpperLimit(ObesityDegreeNormalRange)"]
          };
          const userBodyCondition3 = {
            Weight: res4.data.Weight,
            SMM_SkeletalMuscleMass: res4.data["SMM(SkeletalMuscleMass)"],
            BFM_BodyFatMass: res4.data["BFM(BodyFatMass)"],
            SLM_SoftLeanMass: res4.data["SLM(SoftLeanMass)"],
            LowerLimit_WeightNormalRange:
              res4.data["LowerLimit(WeightNormalRange)"],
            UpperLimit_WeightNormalRange:
              res4.data["UpperLimit(WeightNormalRange)"],
            LowerLimit_SMMNormalRange: res4.data["LowerLimit(SMMNormalRange)"],
            UpperLimit_SMMNormalRange: res4.data["UpperLimit(SMMNormalRange)"],
            LowerLimit_BFMNormalRange: res4.data["LowerLimit(BFMNormalRange)"],
            UpperLimit_BFMNormalRange: res4.data["UpperLimit(BFMNormalRange)"],
            LowerLimit_SLMNormalRange: res4.data["LowerLimit(SLMNormalRange)"],
            UpperLimit_SLMNormalRange: res4.data["UpperLimit(SLMNormalRange)"]
          };
          const userBodyComposition3 = {
            TBW_TotalBodyWater: res4.data["TBW(TotalBodyWater)"],
            Protein: res4.data.Protein,
            Minerals: res4.data.Minerals,
            LowerLimit_TBWNormalRange: res4.data["LowerLimit(TBWNormalRange)"],
            LowerLimit_ProteinNormalRange:
              res4.data["LowerLimit(ProteinNormalRange)"],
            LowerLimit_MineralsNormalRange:
              res4.data["LowerLimit(MineralsNormalRange)"],
            UpperLimit_TBWNormalRange: res4.data["UpperLimit(TBWNormalRange)"],
            UpperLimit_ProteinNormalRange:
              res4.data["UpperLimit(ProteinNormalRange)"],
            UpperLimit_MineralsNormalRange:
              res4.data["UpperLimit(MineralsNormalRange)"]
          };
          const userObesityData4 = {
            BMI_BodyMassIndex: res5.data["BMI(BodyMassIndex)"],
            PBF_PercentBodyFat: res5.data["PBF(PercentBodyFat)"],
            WHR_Waist_HipRatio: res5.data["WHR(Waist-HipRatio)"],
            ObesityDegree: res5.data.ObesityDegree,
            LowerLimit_BMINormalRange: res5.data["LowerLimit(BMINormalRange)"],
            UpperLimit_BMINormalRange: res5.data["UpperLimit(BMINormalRange)"],
            LowerLimit_PBFNormalRange: res5.data["LowerLimit(PBFNormalRange)"],
            UpperLimit_PBFNormalRange: res5.data["UpperLimit(PBFNormalRange)"],
            LowerLimit_WHRNormalRange: res5.data["LowerLimit(WHRNormalRange)"],
            UpperLimit_WHRNormalRange: res5.data["UpperLimit(WHRNormalRange)"],
            LowerLimit_ObesityDegreeNormalRange:
              res5.data["LowerLimit(ObesityDegreeNormalRange)"],
            UpperLimit_ObesityDegreeNormalRange:
              res5.data["UpperLimit(ObesityDegreeNormalRange)"]
          };
          const userBodyCondition4 = {
            Weight: res5.data.Weight,
            SMM_SkeletalMuscleMass: res5.data["SMM(SkeletalMuscleMass)"],
            BFM_BodyFatMass: res5.data["BFM(BodyFatMass)"],
            SLM_SoftLeanMass: res5.data["SLM(SoftLeanMass)"],
            LowerLimit_WeightNormalRange:
              res5.data["LowerLimit(WeightNormalRange)"],
            UpperLimit_WeightNormalRange:
              res5.data["UpperLimit(WeightNormalRange)"],
            LowerLimit_SMMNormalRange: res5.data["LowerLimit(SMMNormalRange)"],
            UpperLimit_SMMNormalRange: res5.data["UpperLimit(SMMNormalRange)"],
            LowerLimit_BFMNormalRange: res5.data["LowerLimit(BFMNormalRange)"],
            UpperLimit_BFMNormalRange: res5.data["UpperLimit(BFMNormalRange)"],
            LowerLimit_SLMNormalRange: res5.data["LowerLimit(SLMNormalRange)"],
            UpperLimit_SLMNormalRange: res5.data["UpperLimit(SLMNormalRange)"]
          };
          const userBodyComposition4 = {
            TBW_TotalBodyWater: res5.data["TBW(TotalBodyWater)"],
            Protein: res5.data.Protein,
            Minerals: res5.data.Minerals,
            LowerLimit_TBWNormalRange: res5.data["LowerLimit(TBWNormalRange)"],
            LowerLimit_ProteinNormalRange:
              res5.data["LowerLimit(ProteinNormalRange)"],
            LowerLimit_MineralsNormalRange:
              res5.data["LowerLimit(MineralsNormalRange)"],
            UpperLimit_TBWNormalRange: res5.data["UpperLimit(TBWNormalRange)"],
            UpperLimit_ProteinNormalRange:
              res5.data["UpperLimit(ProteinNormalRange)"],
            UpperLimit_MineralsNormalRange:
              res5.data["UpperLimit(MineralsNormalRange)"]
          };
          dispatch(setObesityData(userObesityData));
          dispatch(setBodyConditionData(userBodyCondition));
          dispatch(setBodyCompositionData(userBodyComposition));
          dispatch(setObesityData1(userObesityData1));
          dispatch(setBodyConditionData1(userBodyCondition1));
          dispatch(setBodyCompositionData1(userBodyComposition1));
          dispatch(setObesityData2(userObesityData2));
          dispatch(setBodyConditionData2(userBodyCondition2));
          dispatch(setBodyCompositionData2(userBodyComposition2));
          dispatch(setObesityData3(userObesityData3));
          dispatch(setBodyConditionData3(userBodyCondition3));
          dispatch(setBodyCompositionData3(userBodyComposition3));
          dispatch(setObesityData4(userObesityData4));
          dispatch(setBodyConditionData4(userBodyCondition4));
          dispatch(setBodyCompositionData4(userBodyComposition4));
        })
      )
      .catch(() => {
        dispatch(setLoading(true));
      });
  };
