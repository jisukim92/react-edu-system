import { rest } from "msw";

export const handlers = [
  /* 1번 api */
  rest.get("/result-list/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_KEY: "4235",
            TEST_NUMBER: "20220610083837.551",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-06-10",
            TEST_ACTUAL_DATE_YMD: "2022-06-10"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4214",
            TEST_NUMBER: "20220531081655.284",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-31",
            TEST_ACTUAL_DATE_YMD: "2022-05-31"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4201",
            TEST_NUMBER: "20220527085424.783",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-27",
            TEST_ACTUAL_DATE_YMD: "2022-05-27"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4198",
            TEST_NUMBER: "20220525084453.443",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-25",
            TEST_ACTUAL_DATE_YMD: "2022-05-25"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4197",
            TEST_NUMBER: "20220524082518.331",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-24",
            TEST_ACTUAL_DATE_YMD: "2022-05-24"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4185",
            TEST_NUMBER: "20220520085033.256",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-20",
            TEST_ACTUAL_DATE_YMD: "2022-05-20"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4182",
            TEST_NUMBER: "20220518083458.569",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-18",
            TEST_ACTUAL_DATE_YMD: "2022-05-18"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4181",
            TEST_NUMBER: "20220517084606.040",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-17",
            TEST_ACTUAL_DATE_YMD: "2022-05-17"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4167",
            TEST_NUMBER: "20220512085119.588",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-12",
            TEST_ACTUAL_DATE_YMD: "2022-05-12"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4165",
            TEST_NUMBER: "20220511083729.394",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-11",
            TEST_ACTUAL_DATE_YMD: "2022-05-11"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4164",
            TEST_NUMBER: "20220510083433.231",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-10",
            TEST_ACTUAL_DATE_YMD: "2022-05-10"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4150",
            TEST_NUMBER: "20220506085033.352",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-06",
            TEST_ACTUAL_DATE_YMD: "2022-05-06"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4147",
            TEST_NUMBER: "20220505082241.440",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-05",
            TEST_ACTUAL_DATE_YMD: "2022-05-05"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4145",
            TEST_NUMBER: "20220504083104.587",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-05-04",
            TEST_ACTUAL_DATE_YMD: "2022-05-04"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4073",
            TEST_NUMBER: "20220412091030.178",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-04-12",
            TEST_ACTUAL_DATE_YMD: "2022-04-12"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4049",
            TEST_NUMBER: "20220406092117.085",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-04-06",
            TEST_ACTUAL_DATE_YMD: "2022-04-06"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4020",
            TEST_NUMBER: "20220401091003.720",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-04-01",
            TEST_ACTUAL_DATE_YMD: "2022-04-01"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4015",
            TEST_NUMBER: "20220331084538.302",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-31",
            TEST_ACTUAL_DATE_YMD: "2022-03-31"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "4013",
            TEST_NUMBER: "20220330093520.955",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-30",
            TEST_ACTUAL_DATE_YMD: "2022-03-30"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3981",
            TEST_NUMBER: "20220323092212.208",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-23",
            TEST_ACTUAL_DATE_YMD: "2022-03-23"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3980",
            TEST_NUMBER: "20220322091804.100",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-22",
            TEST_ACTUAL_DATE_YMD: "2022-03-22"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3952",
            TEST_NUMBER: "20220318085728.657",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-18",
            TEST_ACTUAL_DATE_YMD: "2022-03-18"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3945",
            TEST_NUMBER: "20220316082049.152",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-16",
            TEST_ACTUAL_DATE_YMD: "2022-03-16"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3944",
            TEST_NUMBER: "20220315082100.391",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-15",
            TEST_ACTUAL_DATE_YMD: "2022-03-15"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3916",
            TEST_NUMBER: "20220311084413.269",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-11",
            TEST_ACTUAL_DATE_YMD: "2022-03-11"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3909",
            TEST_NUMBER: "20220309082316.683",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-09",
            TEST_ACTUAL_DATE_YMD: "2022-03-09"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3908",
            TEST_NUMBER: "20220308082843.604",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-08",
            TEST_ACTUAL_DATE_YMD: "2022-03-08"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3882",
            TEST_NUMBER: "20220305082630.683",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-05",
            TEST_ACTUAL_DATE_YMD: "2022-03-05"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3881",
            TEST_NUMBER: "20220304082415.608",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-04",
            TEST_ACTUAL_DATE_YMD: "2022-03-04"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3876",
            TEST_NUMBER: "20220303081937.750",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-03",
            TEST_ACTUAL_DATE_YMD: "2022-03-03"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3873",
            TEST_NUMBER: "20220301082049.197",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-03-01",
            TEST_ACTUAL_DATE_YMD: "2022-03-01"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3839",
            TEST_NUMBER: "20220223082524.398",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-23",
            TEST_ACTUAL_DATE_YMD: "2022-02-23"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3838",
            TEST_NUMBER: "20220222083531.482",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-22",
            TEST_ACTUAL_DATE_YMD: "2022-02-22"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3794",
            TEST_NUMBER: "20220217082054.010",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-17",
            TEST_ACTUAL_DATE_YMD: "2022-02-17"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3792",
            TEST_NUMBER: "20220216085549.696",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-16",
            TEST_ACTUAL_DATE_YMD: "2022-02-16"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3791",
            TEST_NUMBER: "20220215080714.538",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-15",
            TEST_ACTUAL_DATE_YMD: "2022-02-15"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3763",
            TEST_NUMBER: "20220212091114.272",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-12",
            TEST_ACTUAL_DATE_YMD: "2022-02-12"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3762",
            TEST_NUMBER: "20220211083026.121",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-11",
            TEST_ACTUAL_DATE_YMD: "2022-02-11"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3755",
            TEST_NUMBER: "20220209082342.200",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-09",
            TEST_ACTUAL_DATE_YMD: "2022-02-09"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3697",
            TEST_NUMBER: "20220208084821.289",
            TEST_TITLE: "경찰학진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-08",
            TEST_ACTUAL_DATE_YMD: "2022-02-08"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3721",
            TEST_NUMBER: "20220204083351.549",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-02-04",
            TEST_ACTUAL_DATE_YMD: "2022-02-04"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3699",
            TEST_NUMBER: "20220127081729.616",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-27",
            TEST_ACTUAL_DATE_YMD: "2022-01-27"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3708",
            TEST_NUMBER: "20220126084829.292",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-26",
            TEST_ACTUAL_DATE_YMD: "2022-01-26"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3696",
            TEST_NUMBER: "20220125082745.788",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-25",
            TEST_ACTUAL_DATE_YMD: "2022-01-25"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3663",
            TEST_NUMBER: "20220122081929.507",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-22",
            TEST_ACTUAL_DATE_YMD: "2022-01-22"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3662",
            TEST_NUMBER: "20220121081536.479",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-21",
            TEST_ACTUAL_DATE_YMD: "2022-01-21"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3657",
            TEST_NUMBER: "20220120081156.854",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-20",
            TEST_ACTUAL_DATE_YMD: "2022-01-20"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3655",
            TEST_NUMBER: "20220119081932.908",
            TEST_TITLE: "경찰학진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-19",
            TEST_ACTUAL_DATE_YMD: "2022-01-19"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3654",
            TEST_NUMBER: "20220118080825.368",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-18",
            TEST_ACTUAL_DATE_YMD: "2022-01-18"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3625",
            TEST_NUMBER: "20220114081132.133",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-14",
            TEST_ACTUAL_DATE_YMD: "2022-01-14"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3620",
            TEST_NUMBER: "20220113080847.939",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-13",
            TEST_ACTUAL_DATE_YMD: "2022-01-13"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3619",
            TEST_NUMBER: "20220112080616.236",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-12",
            TEST_ACTUAL_DATE_YMD: "2022-01-12"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3612",
            TEST_NUMBER: "20220111080510.964",
            TEST_TITLE: "경찰학개론 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-11",
            TEST_ACTUAL_DATE_YMD: "2022-01-11"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3579",
            TEST_NUMBER: "20220108081149.506",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-08",
            TEST_ACTUAL_DATE_YMD: "2022-01-08"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3577",
            TEST_NUMBER: "20220107081237.165",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-07",
            TEST_ACTUAL_DATE_YMD: "2022-01-07"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3572",
            TEST_NUMBER: "20220106083024.742",
            TEST_TITLE: "헌법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-06",
            TEST_ACTUAL_DATE_YMD: "2022-01-06"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3571",
            TEST_NUMBER: "20220105080828.532",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-05",
            TEST_ACTUAL_DATE_YMD: "2022-01-05"
          },
          {
            TEST_TYP: "02",
            TEST_KEY: "3569",
            TEST_NUMBER: "20220104081709.123",
            TEST_TITLE: "경찰학 진도별테스트",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-01-04",
            TEST_ACTUAL_DATE_YMD: "2022-01-04"
          }
        ]
      })
    );
  }),
  rest.post("MockDateTimesAPI", (req, res, ctx) => {
    return res(
      ctx.json([
        "20220601170838",
        "20220605171222",
        "20220610171719",
        "20220615173323",
        "20220620131817",
        "20220625173248",
        "20220630171617",
        "20220705163439",
        "20220710164854",
        "20220715171958",
        "20220720073257",
        "20220725063323",
        ""
      ])
    );
  }),
  rest.post("MockInBodyDataAPI1", (req, res, ctx) => {
    return res(
      ctx.json({
        "BMI(BodyMassIndex)": "60",
        "PBF(PercentBodyFat)": "9",
        "WHR(Waist-HipRatio)": "0.89",
        ObesityDegree: "120",
        "LowerLimit(BMINormalRange)": "18.5",
        "UpperLimit(BMINormalRange)": "25",
        "LowerLimit(PBFNormalRange)": "10",
        "UpperLimit(PBFNormalRange)": "20",
        "LowerLimit(WHRNormalRange)": "0.8",
        "UpperLimit(WHRNormalRange)": "0.9",
        "LowerLimit(ObesityDegreeNormalRange)": "90",
        "UpperLimit(ObesityDegreeNormalRange)": "110",
        Weight: "52.5",
        "SMM(SkeletalMuscleMass)": "32.9",
        "BFM(BodyFatMass)": "28.8",
        "SLM(SoftLeanMass)": "35",
        "LowerLimit(WeightNormalRange)": "58.3",
        "UpperLimit(WeightNormalRange)": "78.9",
        "LowerLimit(BFMNormalRange)": "8.2",
        "UpperLimit(BFMNormalRange)": "16.5",
        "LowerLimit(SMMNormalRange)": "29.4",
        "UpperLimit(SMMNormalRange)": "43",
        "LowerLimit(SLMNormalRange)": "49.6",
        "UpperLimit(SLMNormalRange)": "60.6",
        "TBW(TotalBodyWater)": "42.7",
        Protein: "18.9",
        Minerals: "3.51",
        "LowerLimit(TBWNormalRange)": "38.6",
        "UpperLimit(TBWNormalRange)": "47.2",
        "LowerLimit(MineralsNormalRange)": "3.57",
        "UpperLimit(MineralsNormalRange)": "4.37",
        "LowerLimit(ProteinNormalRange)": "10.4",
        "UpperLimit(ProteinNormalRange)": "12.6"
      })
    );
  }),
  rest.post("MockInBodyDataAPI2", (req, res, ctx) => {
    return res(
      ctx.json({
        "BMI(BodyMassIndex)": "55",
        "PBF(PercentBodyFat)": "19",
        "WHR(Waist-HipRatio)": "0.59",
        ObesityDegree: "150",
        "LowerLimit(BMINormalRange)": "18.5",
        "UpperLimit(BMINormalRange)": "25",
        "LowerLimit(PBFNormalRange)": "10",
        "UpperLimit(PBFNormalRange)": "20",
        "LowerLimit(WHRNormalRange)": "0.8",
        "UpperLimit(WHRNormalRange)": "0.9",
        "LowerLimit(ObesityDegreeNormalRange)": "90",
        "UpperLimit(ObesityDegreeNormalRange)": "110",
        Weight: "51.5",
        "SMM(SkeletalMuscleMass)": "34.9",
        "BFM(BodyFatMass)": "30.8",
        "SLM(SoftLeanMass)": "30",
        "LowerLimit(WeightNormalRange)": "58.3",
        "UpperLimit(WeightNormalRange)": "78.9",
        "LowerLimit(BFMNormalRange)": "8.2",
        "UpperLimit(BFMNormalRange)": "16.5",
        "LowerLimit(SMMNormalRange)": "29.4",
        "UpperLimit(SMMNormalRange)": "36",
        "LowerLimit(SLMNormalRange)": "49.6",
        "UpperLimit(SLMNormalRange)": "60.6",
        "TBW(TotalBodyWater)": "42.7",
        Protein: "18.9",
        Minerals: "3.51",
        "LowerLimit(TBWNormalRange)": "38.6",
        "UpperLimit(TBWNormalRange)": "47.2",
        "LowerLimit(MineralsNormalRange)": "3.57",
        "UpperLimit(MineralsNormalRange)": "4.37",
        "LowerLimit(ProteinNormalRange)": "10.4",
        "UpperLimit(ProteinNormalRange)": "12.6"
      })
    );
  }),
  rest.post("MockInBodyDataAPI3", (req, res, ctx) => {
    return res(
      ctx.json({
        "BMI(BodyMassIndex)": "50",
        "PBF(PercentBodyFat)": "29",
        "WHR(Waist-HipRatio)": "0.79",
        ObesityDegree: "140",
        "LowerLimit(BMINormalRange)": "18.5",
        "UpperLimit(BMINormalRange)": "25",
        "LowerLimit(PBFNormalRange)": "10",
        "UpperLimit(PBFNormalRange)": "20",
        "LowerLimit(WHRNormalRange)": "0.8",
        "UpperLimit(WHRNormalRange)": "0.9",
        "LowerLimit(ObesityDegreeNormalRange)": "90",
        "UpperLimit(ObesityDegreeNormalRange)": "110",
        Weight: "50.5",
        "SMM(SkeletalMuscleMass)": "36.9",
        "BFM(BodyFatMass)": "32.8",
        "SLM(SoftLeanMass)": "25",
        "LowerLimit(WeightNormalRange)": "58.3",
        "UpperLimit(WeightNormalRange)": "78.9",
        "LowerLimit(BFMNormalRange)": "8.2",
        "UpperLimit(BFMNormalRange)": "16.5",
        "LowerLimit(SMMNormalRange)": "29.4",
        "UpperLimit(SMMNormalRange)": "36",
        "LowerLimit(SLMNormalRange)": "49.6",
        "UpperLimit(SLMNormalRange)": "60.6",
        "TBW(TotalBodyWater)": "42.7",
        Protein: "18.9",
        Minerals: "3.51",
        "LowerLimit(TBWNormalRange)": "38.6",
        "UpperLimit(TBWNormalRange)": "47.2",
        "LowerLimit(MineralsNormalRange)": "3.57",
        "UpperLimit(MineralsNormalRange)": "4.37",
        "LowerLimit(ProteinNormalRange)": "10.4",
        "UpperLimit(ProteinNormalRange)": "12.6"
      })
    );
  }),
  rest.post("MockInBodyDataAPI4", (req, res, ctx) => {
    return res(
      ctx.json({
        "BMI(BodyMassIndex)": "45",
        "PBF(PercentBodyFat)": "39",
        "WHR(Waist-HipRatio)": "0.69",
        ObesityDegree: "130",
        "LowerLimit(BMINormalRange)": "18.5",
        "UpperLimit(BMINormalRange)": "25",
        "LowerLimit(PBFNormalRange)": "10",
        "UpperLimit(PBFNormalRange)": "20",
        "LowerLimit(WHRNormalRange)": "0.8",
        "UpperLimit(WHRNormalRange)": "0.9",
        "LowerLimit(ObesityDegreeNormalRange)": "90",
        "UpperLimit(ObesityDegreeNormalRange)": "110",
        Weight: "49.5",
        "SMM(SkeletalMuscleMass)": "38.9",
        "BFM(BodyFatMass)": "34.8",
        "SLM(SoftLeanMass)": "22",
        "LowerLimit(WeightNormalRange)": "58.3",
        "UpperLimit(WeightNormalRange)": "78.9",
        "LowerLimit(BFMNormalRange)": "8.2",
        "UpperLimit(BFMNormalRange)": "16.5",
        "LowerLimit(SMMNormalRange)": "29.4",
        "UpperLimit(SMMNormalRange)": "36",
        "LowerLimit(SLMNormalRange)": "49.6",
        "UpperLimit(SLMNormalRange)": "60.6",
        "TBW(TotalBodyWater)": "42.7",
        Protein: "18.9",
        Minerals: "3.51",
        "LowerLimit(TBWNormalRange)": "38.6",
        "UpperLimit(TBWNormalRange)": "47.2",
        "LowerLimit(MineralsNormalRange)": "3.57",
        "UpperLimit(MineralsNormalRange)": "4.37",
        "LowerLimit(ProteinNormalRange)": "10.4",
        "UpperLimit(ProteinNormalRange)": "12.6"
      })
    );
  }),
  rest.post("MockInBodyDataAPI5", (req, res, ctx) => {
    return res(
      ctx.json({
        "BMI(BodyMassIndex)": "40",
        "PBF(PercentBodyFat)": "49",
        "WHR(Waist-HipRatio)": "1.18",
        ObesityDegree: "120",
        "LowerLimit(BMINormalRange)": "18.5",
        "UpperLimit(BMINormalRange)": "25",
        "LowerLimit(PBFNormalRange)": "10",
        "UpperLimit(PBFNormalRange)": "20",
        "LowerLimit(WHRNormalRange)": "0.8",
        "UpperLimit(WHRNormalRange)": "0.9",
        "LowerLimit(ObesityDegreeNormalRange)": "90",
        "UpperLimit(ObesityDegreeNormalRange)": "110",
        Weight: "48.5",
        "SMM(SkeletalMuscleMass)": "42.9",
        "BFM(BodyFatMass)": "36.8",
        "SLM(SoftLeanMass)": "20",
        "LowerLimit(WeightNormalRange)": "58.3",
        "UpperLimit(WeightNormalRange)": "78.9",
        "LowerLimit(BFMNormalRange)": "8.2",
        "UpperLimit(BFMNormalRange)": "16.5",
        "LowerLimit(SMMNormalRange)": "29.4",
        "UpperLimit(SMMNormalRange)": "36",
        "LowerLimit(SLMNormalRange)": "49.6",
        "UpperLimit(SLMNormalRange)": "60.6",
        "TBW(TotalBodyWater)": "42.7",
        Protein: "18.9",
        Minerals: "3.51",
        "LowerLimit(TBWNormalRange)": "38.6",
        "UpperLimit(TBWNormalRange)": "47.2",
        "LowerLimit(MineralsNormalRange)": "3.57",
        "UpperLimit(MineralsNormalRange)": "4.37",
        "LowerLimit(ProteinNormalRange)": "10.4",
        "UpperLimit(ProteinNormalRange)": "12.6"
      })
    );
  }),

  /* 3번 단원별 정답률 api */
  rest.get("/comparison/20220610083837.551/testuser", (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_KEY: "4235",
            TEST_NUMBER: "20220610083837.551",
            TEST_TITLE: "형사법 진도별 TEST",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE_YMD: "2022-06-10",
            TEST_ACTUAL_DATE_YMD: "2022-06-10",
            TEST_SUBJECT_CODE: 33,
            DESCRIPTION: "형사법(진도별)",
            TEST_SUBJECT_POINT: "90.00",
            TEST_SUBJECT_POINT_TOP10P: 100,
            TEST_SUBJECT_POINT_RIVAL: 75.63
          }
        ]
      })
    );
  }),

  /* 6번 단원별 정답률 api */
  rest.get("/correct/20220610083837.551/testuser", (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-05-06T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-05",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_01",
            INDEX_NAME_LV1: "형법총론",
            O_COUNT: "27",
            T_COUNT: 30,
            O_RATE: "90.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-06-10T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-06",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_02",
            INDEX_NAME_LV1: "형법각론",
            COR_COUNT: "9",
            T_COUNT: 10,
            O_RATE: "90.0"
          }
        ]
      })
    );
  }),
  rest.get("/correct/20220107081237.165/testuser", (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-01-07T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-01",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_01",
            INDEX_NAME_LV1: "형법총론",
            O_COUNT: "33",
            T_COUNT: 50,
            O_RATE: "66.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-03-11T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-03",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_01",
            INDEX_NAME_LV1: "형법총론",
            O_COUNT: "19",
            T_COUNT: 20,
            O_RATE: "95.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-05-06T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-05",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_01",
            INDEX_NAME_LV1: "형법총론",
            O_COUNT: "27",
            T_COUNT: 30,
            O_RATE: "90.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-02-04T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-02",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_02",
            INDEX_NAME_LV1: "형법각론",
            O_COUNT: "23",
            T_COUNT: 30,
            O_RATE: "76.7"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-04-01T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-04",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_02",
            INDEX_NAME_LV1: "형법각론",
            O_COUNT: "4",
            T_COUNT: 10,
            O_RATE: "40.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-06-10T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-06",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_02",
            INDEX_NAME_LV1: "형법각론",
            O_COUNT: "9",
            T_COUNT: 10,
            O_RATE: "90.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-03-04T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-03",
            TEST_SUBJECT_CODE: 33,
            SUBJECT_NAME: "형사법(진도별)",
            INDEX_LV1: "33_03",
            INDEX_NAME_LV1: "형소법",
            O_COUNT: "18",
            T_COUNT: 20,
            O_RATE: "90.0"
          }
        ]
      })
    );
  }),
  rest.get("/correct/20220106083024.742/testuser", (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-01-06T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-01",
            TEST_SUBJECT_CODE: 34,
            SUBJECT_NAME: "헌법(진도별)",
            INDEX_LV1: "34_01",
            INDEX_NAME_LV1: "헌법",
            O_COUNT: "18",
            T_COUNT: 40,
            O_RATE: "45.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-02-17T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-02",
            TEST_SUBJECT_CODE: 34,
            SUBJECT_NAME: "헌법(진도별)",
            INDEX_LV1: "34_01",
            INDEX_NAME_LV1: "헌법",
            O_COUNT: "7",
            T_COUNT: 10,
            O_RATE: "70.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-03-03T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-03",
            TEST_SUBJECT_CODE: 34,
            SUBJECT_NAME: "헌법(진도별)",
            INDEX_LV1: "34_01",
            INDEX_NAME_LV1: "헌법",
            O_COUNT: "14",
            T_COUNT: 20,
            O_RATE: "70.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-05-05T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-05",
            TEST_SUBJECT_CODE: 34,
            SUBJECT_NAME: "헌법(진도별)",
            INDEX_LV1: "34_01",
            INDEX_NAME_LV1: "헌법",
            O_COUNT: "14",
            T_COUNT: 20,
            O_RATE: "70.0"
          }
        ]
      })
    );
  }),
  rest.get("/correct/20220104081709.123/testuser", (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-01-04T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-01",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_01",
            INDEX_NAME_LV1: "총론",
            O_COUNT: "73",
            T_COUNT: 80,
            O_RATE: "91.3"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-02-08T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-02",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_01",
            INDEX_NAME_LV1: "총론",
            O_COUNT: "31",
            T_COUNT: 40,
            O_RATE: "77.5"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-03-08T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-03",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_01",
            INDEX_NAME_LV1: "총론",
            O_COUNT: "59",
            T_COUNT: 70,
            O_RATE: "84.3"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-04-06T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-04",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_01",
            INDEX_NAME_LV1: "총론",
            O_COUNT: "19",
            T_COUNT: 20,
            O_RATE: "95.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-05-04T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-05",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_01",
            INDEX_NAME_LV1: "총론",
            O_COUNT: "71",
            T_COUNT: 80,
            O_RATE: "88.8"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-02-22T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-02",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_02",
            INDEX_NAME_LV1: "각론",
            O_COUNT: "13",
            T_COUNT: 20,
            O_RATE: "65.0"
          },
          {
            TEST_TYP: "02",
            TEST_ID: "testuser",
            TEST_NAME: "김철수",
            RELEASE_DATE: "2022-03-01T00:00:00.000Z",
            RELEASE_DATE_YM: "2022-03",
            TEST_SUBJECT_CODE: 19,
            SUBJECT_NAME: "경찰학개론",
            INDEX_LV1: "19_02",
            INDEX_NAME_LV1: "각론",
            O_COUNT: "8",
            T_COUNT: 10,
            O_RATE: "80.0"
          }
        ]
      })
    );
  }),

  /* 9번 월 평균 점수 api */
  rest.get("/average/20220610083837.551/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "90"
          }
        ]
      })
    );
  }),

  rest.get("/average/20220531081655.284/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "80"
          }
        ]
      })
    );
  }),

  rest.get("/average/20220525084453.443/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "91"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220524082518.331/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "75"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220520085033.256/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "80"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220518083458.569/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "65"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220517084606.040/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "70"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220512085119.588/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "85"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220511083729.394/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "90"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220510083433.231/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "96"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220506085033.352/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220505082241.440/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "65"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220504083104.587/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220412091030.178/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "85"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220406092117.085/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "91"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220406092117.085/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "65"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220406092117.085/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "46"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220401091003.720/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "55"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220331084538.302/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "87"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220330093520.955/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "88"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220323092212.208/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "95"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220322091804.100/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220318085728.657/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "68"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220316082049.152/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "73"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220315082100.391/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "57"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220311084413.269/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "89"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220309082316.683/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "88"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220308082843.604/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220305082630.683/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "86"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220304082415.608/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "91"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220303081937.750/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "84"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220301082049.197/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220223082524.398/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "68"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220222083531.482/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220217082054.010/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "85"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220216085549.696/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "96"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220215080714.538/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220212091114.272/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "68"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220211083026.121/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "88"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220209082342.200/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "96"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220208084821.289/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "78"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220204083351.549/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220127081729.616/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "96"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220126084829.292/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220125082745.788/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "86"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220122081929.507/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "67"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220121081536.479/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "91"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220120081156.854/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "95"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220119081932.908/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "87"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220118080825.368/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "77"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220114081132.133/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "45"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220113080847.939/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "68"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220112080616.236/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "88"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220111080510.964/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "90"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220108081149.506/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "86"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220107081237.165/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "76"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220106083024.742/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "54"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220105080828.532/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "86"
          }
        ]
      })
    );
  }),
  rest.get("/average/20220104081709.123/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            THIS_MONTH_AVERAGE: "78"
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/testNumList/testuser", async (req, res, ctx) => {
    return res(
      ctx.json({
    DATA: [
      {
        TEST_NUM: "1",
        TEST_TITLE: "경찰학",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "2",
        TEST_TITLE: "형사법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "3",
        TEST_TITLE: "헌법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "4",
        TEST_TITLE: "경찰학",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "5",
        TEST_TITLE: "형사법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "6",
        TEST_TITLE: "헌법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "7",
        TEST_TITLE: "경찰학",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "8",
        TEST_TITLE: "형사법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "9",
        TEST_TITLE: "헌법",
        TEST_ID: "testuser"
      },
      {
        TEST_NUM: "10",
        TEST_TITLE: "경찰학",
        TEST_ID: "testuser"
      }
    ]
  })
  );
}),
  rest.get("/dummydata/odab-note/test_num=1", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "경찰학",
            TEST_ANSWER: "2",
            TEST_QUESTION:
              "1. 경찰의 분류에 대한 설명으로 가장 적절하지 않은 것은?",
            TEST_EXAMPLE:
              "① 행정경찰과 사법경찰: 경찰의 목적에 따라 구분하며, 프랑스의 ｢죄와 형벌법전｣(｢경죄처벌법전｣)에서 이와 같은 구분을 최초로 법제화하였다.|② 협의의 행정경찰과 보안경찰: 다른 행정작용에 부수하느냐의 여부에 따라 구분하며, 협의의 행정경찰은 경찰활동의 능률성과 기동성을 확보할 수 있고 보안경찰은 지역 실정을 반영한 경찰조직의 운영과 관리가 가능하다.|③ 평시경찰과 비상경찰: 위해의 정도와 담당기관에 따라 구분하며, 평시경찰은 평온한 상태 하에서 일반경찰법규에 의하여 보통경찰기관이 행하는 경찰작용이고 비상경찰은 비상사태 발생이나 계엄선포 시 군대가 일반치안을 담당하는 경우이다.|④ 질서경찰과 봉사경찰: 경찰서비스의 질과 내용에 따라 구분하며, ｢경범죄 처벌법｣ 위반자에 대한 통고처분은 질서경찰의 영역에, 교통정보의 제공은 봉사경찰의 영역에 해당한다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=2", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "형사법",
            TEST_ANSWER: "1",
            TEST_QUESTION: "1. 형사소송법의 적용범위에 관한 다음 설명 중 가장 적절하지 않은 것은?(다툼이 있으면 판례에 의함)",
            TEST_EXAMPLE:
              "① 미합중국 국적을 가진 미합중국 군대의 군속인 피고인이 범행 당시 10년 넘게 대한민국에 머물면서 한국인 아내와 결혼하여 가정을 마련하고 직장 생활을 하는 등 생활근거지를 대한민국에 두고 있었던 경우에도 미합중국 군대의 군속에 관한 형사재판권 관련 조항이 적용될 수 있다.|② 캐나다 시민권자인 피고인이 캐나다에서 위조사문서를 행사하였다는 내용으로 기소된 사안에서, 피고인의 행위에 대하여는 우리나라에 재판권이 없다.|③ 국회의원의 면책특권 대상이 되는 행위는 국회의 직무수행에 필수적인 국회의원의 국회 내에서의 직무상 발언과 표결이라는 의사표현행위 자체에만 국한되지 아니하고 이에 통상적으로 부수하여 행하여지는 행위까지 포함하며, 그와 같은 부수행위인지 여부는 구체적인 행위의 목적·장소·태양 등을 종합하여 개별적으로 판단하여야 한다.|④ 항소심이 신법 시행을 이유로 구법이 정한 바에 따라 적법하게 진행된 제1심의 증거조사절차 등을 위법하다고 보아 그 효력을 부정하고 다시 절차를 진행하는 것은 허용되지 아니하며, 다만 이미 적법하게 이루어진 소송행위의 효력을 부정하지 않는 범위 내에서 신법의 취지에 따라 절차를 진행하는 것은 허용된다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=3", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "헌법",
            TEST_ANSWER: "4",
            TEST_QUESTION: "1. 합헌적 법률해석에 대한 설명으로 가장 적절한 것은?(다툼이 있는 경우 판례에 의함)",
            TEST_EXAMPLE:
              "① 합헌적 법률해석이란 법률이 외형상 위헌적으로 보일 경우라도 그것이 헌법의 정신에 맞도록 해석될 여지가 조금이라도 있는 한 이를 쉽사리 위헌이라고 판단해서는 안 된다는 헌법의 해석 지침을 말한다.|② 합헌적 법률해석은 독일연방헌법재판소 판례를 통하여 처음 행해졌다.|③ 합헌적 법률해석은 규범통제의 과정에서만 문제되며, 규범통제를 확립하는 기능을 한다.|④ 합헌적 법률해석은 인권보장상 폐해를 가져오는 경우도 있다"
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=4", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "경찰학",
            TEST_ANSWER: "4",
            TEST_QUESTION: "2.｢경찰청 공무원 행동강령｣에 대한 내용으로 가장 적절하지 않은 것은?",
            TEST_EXAMPLE:
              "① 공무원은 직무를 수행함에 있어 지연·혈연·학연·종교 등을 이유로 특정인에게 특혜를 주어서는 아니 된다.|② 공무원은 상급자가 자기 또는 타인의 부당한 이익을 위하여 공정한 직무수행을 현저하게 해치는 지시를 하였을 때에는 그 사유를 그 상급자에게 소명하고 지시에 따르지 아니하거나 제23조에 따라 지정된 공무원 행동강령에 관한 업무를 담당하는 공무원(이하 “행동강령책임관”이라 한다)과 상담할 수 있다.|③ 공무원은 정치인이나 정당 등으로부터 부당한 직무수행을 강요받거나 청탁을 받은 경우에는 소속 기관의 장에게 보고하거나 행동강령책임관과 상담한 후 처리하여야 한다.|④ 공무원은 ｢범죄수사규칙｣ 제15조에 따른 경찰관서 내 수사 지휘에 대한 이의제기와 관련하여 행동강령책임관에게 상담을 요청하여야 한다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=5", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "형사법",
            TEST_ANSWER: "4",
            TEST_QUESTION: "2. 고소와 관련한 다음 설명 중 가장 적절하지 않은 것은? (다툼이 있으면 판례에 의함)",
            TEST_EXAMPLE:
              "① 친고죄에서 고소는 서면뿐만 아니라 구술로도 할 수 있고, 다만 구술에 의한 고소를 받은 검사 또는 사법경찰관은 조서를 작성하여야 하지만 그 조서가 독립된 조서일 필요는 없다.|② 고소권자가 비친고죄로 고소한 사건을 검사가 친고죄로 구성하여 공소를 제기하였다면 공소장 변경절차를 거쳐 공소사실이 비친고죄로 변경되지 아니하는 한, 법원으로서는 친고죄에서 소송조건이 되는 고소가 유효하게 존재하는지를 직권으로 조사·심리하여야 하고, 만일 그 공소사실에 대하여 피고인과 공범관계에 있는 자에 대한 적법한 고소취소가 있다면 그 고소취소의 효력은 피고인에 대하여도 미친다.|③ 친고죄의 공범 중 그 일부에 대하여 제1심 판결이 선고된 후에는 제1심 판결을 선고하기 이전의 다른 공범자에 대하여 고소취소를 할 수 없고 고소의 취소가 있더라도 그 효력이 발생하지 않는다.|④ 형사소송법 제230조 제1항 규정에서 범인을 알게 된다 함은 통상인의 입장에서 보아 고소권자가 고소를 할 수 있을 정도로 범죄사실과 범인을 아는 것을 의미하고, 여기서 범죄사실을 안다는 것은 고소권자가 친고죄에 해당하는 범죄의 피해가 있었다는 사실관계에 관하여 미필적 인식이 있음을 말한다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=6", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "헌법",
            TEST_ANSWER: "3",
            TEST_QUESTION: "3. 우리 헌정사에 대한 설명으로 가장 적절한 것은?",
            TEST_EXAMPLE:
              "① 제헌헌법에서는 심의기관인 국무원을 두었으며, 대통령이 국무원의 의장이었다.|② 1952년 헌법에는 국무총리제를 폐지하고 국무위원에 대한 개별적 불신임제를 채택하였다.|③ 1962년의 제5차 개헌은 국회의 의결 없이 국가재건최고회의가 의결하여 국민투표로 확정하였으나, 이는 제2공화국 헌법의 헌법개정절차에 따른 개정이 아니었다.|④ 1987년 제9차 개헌에서는 근로자의 적정임금 보장, 재외국민 보호의무 규정을 신설하고 형사보상청구권을 피의자까지 확대 인정하였다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=7", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "경찰학",
            TEST_ANSWER: "3",
            TEST_QUESTION: "4.｢행정권한의 위임 및 위탁에 관한 규정｣에 대한 내용으로 가장 적절하지 않은 것은?",
            TEST_EXAMPLE:
              "① 위임이란 법률에 규정된 행정기관의 장의 권한 중 일부를 그 보조기관 또는 하급행정기관의 장이나 지방자치단체의 장에게 맡겨 그의 권한과 책임 아래 행사하도록 하는 것을 말한다.|② 위임 및 위탁기관은 수임 및 수탁기관의 수임 및 수탁사무 처리에 대하여 지휘·감독하고, 그 처리가 위법하거나 부당하다고 인정될 때에는 이를 취소하거나 정지시킬 수 있다.|③ 수임 및 수탁사무의 처리에 관한 책임은 수임 및 수탁기관에 있으므로, 위임 및 위탁기관의 장은 그에 대한 감독책임을 지지 않는다.|④ 위임 및 위탁기관은 위임 및 위탁사무 처리의 적정성을 확보하기 위하여 필요한 경우에는 수임 및 수탁기관의 수임 및 수탁사무 처리 상황을 수시로 감사할 수 있다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=8", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "형사법",
            TEST_ANSWER: "3",
            TEST_QUESTION: "3. 피의자신문에 관한 다음 설명 중 가장 적절한 것은?(다툼이 있으면 판례에 의함)",
            TEST_EXAMPLE:
              "① 수사기관이 피의자의 진술을 영상녹화 하는 경우에는 반드시 피의자 내지 변호인의 동의를 받아야 하고, 피의자가 아닌 자의 진술을 영상녹화 하는 경우에는 미리 영상녹화 사실을 고지하면 되고 그의 동의를 요하지는 않는다.|② 피의자가 변호인의 참여를 원한다는 의사를 명백하게 표시하였음에도 수사기관이 정당한 사유 없이 변호인을 참여하게 하지 아니한 채 피의자를 신문하여 작성한 피의자신문조서라도 증거능력 자체가 부정되는 것은 아니나, 증명력이 낮게 평가될 수밖에 없다.|③ 피의자와 동석한 신뢰관계에 있는 사람이 피의자를 대신하여 진술한 부분이 조서에 기재되어 있다면 그 부분은 피의자의 진술을 기재한 것이 아니라 동석한 사람의 진술을 기재한 조서에 해당하므로, 그 사람에 대한 진술조서로서의 증거능력을 취득하기 위한 요건을 충족하지 못하는 한 이를 유죄의 증거로 사용할 수 없다.|④ 검사 또는 사법경찰관은 피의자 또는 그 변호인·법정대리인·배우자·직계친족·형제자매의 신청에 따라 변호인을 피의자와 접견하게 하거나 정당한 사유가 없는 한 피의자에 대한 신문에 참여하게 할 수 있다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=9", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "헌법",
            TEST_ANSWER: "2",
            TEST_QUESTION: "4. 국적에 대한 설명으로 가장 적절하지 않은 것은?(다툼이 있는 경우 판례에 의함)",
            TEST_EXAMPLE:
              "① 외국인이 대한민국 국민인 배우자와 적법하게 혼인한 후 3년이 지나더라도 혼인한 상태로 대한민국에 1년 이상 계속하여 주소가 없는 경우에는 간이귀화의 요건을 충족하지 못한다.|② 외국 국적 포기의무를 이행하지 아니하여 대한민국 국적을 상실한 자가 1년 내에 그 외국국적을 포기한 때는 법무부장관의 허가를 얻어 대한민국 국적을 재취득할 수 있다.|③ 직계존속이 외국에서 영주할 목적 없이 체류한 상태에서 출생한 자는 병역의무 이행과 관련하여 병역면제처분을 받은 경우 국적 이탈 신고를 할 수 있다.|④ 대한민국 국적을 상실한 자는 국적을 상실한 때부터 대한민국의 국민만이 누릴 수 있는 권리를 누릴 수 없는데 이 권리 중 대한민국의 국민이었을 때 취득한 것으로서 양도할 수 있는 것은 그 권리와 관련된 법령에서 따로 정한 바가 없으면 3년 내에 대한민국의 국민에게 양도하여야 한다."
          }
        ]
      })
    );
  }),

  rest.get("/dummydata/odab-note/test_num=10", async (req, res, ctx) => {
    return res(
      ctx.json({
        SUCCESS: true,
        ERROR: null,
        DATA: [
          {
            TEST_TITLE: "경찰학",
            TEST_ANSWER: "4",
            TEST_QUESTION: "6.｢위해성 경찰장비의 사용기준 등에 관한 규정｣에 대한 내용으로 가장 적절하지 않은 것은?",
            TEST_EXAMPLE:
              "① 경찰관은 범인·주취자 또는 정신착란자의 자살 또는 자해기도를 방지하기 위하여 필요한 때에는 수갑·포승 또는 호송용포승을 사용할 수 있다.|② 경찰관은 총기 또는 폭발물을 가지고 대항하는 경우를 제외하고는 14세 미만의 자 또는 임산부에 대하여 권총 또는 소총을 발사하여서는 아니 된다.|③ 경찰관은 최루탄발사기로 최루탄을 발사하는 경우 30도 이상의 발사각을 유지하여야 하고, 가스차·살수차 또는 특수진압차의 최루탄발사대로 최루탄을 발사하는 경우에는 15도 이상의 발사각을 유지하여야 한다.|④ 경찰청장은 신규 도입 장비에 대한 안전성 검사를 실시한 후 3개월 이내에 안전성 검사 결과보고서를 국무회의에 제출하여야 한다."
          }
        ]
      })
    );
  }),


rest.get("/profile/20220727/testuser", async (req, res, ctx) => {
      return res(
        ctx.json({
          SUCCESS: true,
          ERROR: null,
        DATA: {
          PICTURE: "/src/assets/user_photo.jpg"
        }
      })
    );
  }),

  rest.post("/login", async (req, res, ctx) => {
    const {api_key, user_id, user_pw} = JSON.parse(req.body)

    if (api_key == "test" && user_id == "testuser" && user_pw == "1234") {

    return res(
      ctx.json({
        success: "true",
        ERROR: null,
      result: [{
CLASS_TITLE: "경찰",
      }]
    })
  );
    }
}),
  

];

