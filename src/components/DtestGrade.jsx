import axios from "axios";
import React, { useCallback, useContext, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MonthlyProgressGraph from "./MonthlyProgressGraph";
import { Context } from "../context/Context";
import { getSubject, getClass } from "../utils";
import { DtestUnitRate } from "../components";
import { groupBy } from "../function";
import { SubjectSelect } from "../elements";

const DtestGrade = ({ pageDtest }) => {
  const [dtestList, setDtestList] = useState([]);
  const [rateList, setRateList] = useState([]);
  const { userInfo } = useContext(Context);
  const [unitSubject, setUnitSubject] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState("");
  const [selectedUnit, setSelectedUnit] = useState("");
  const [progress, setProgress] = useState([]);
  const [loading, setLoading] = useState(false);

  // SubjectSelect 관련 state
  const [selected, setSelected] = useState("");
  const [unitSelected, setUnitSelected] = useState("");

  // 선택 과목
  const subject = getSubject(getClass(userInfo["CLASS_TITLE"])).map(e => e.title);
  // 실제 데이터
  // const id = JSON.parse(sessionStorage.getItem("userId"));

  // 테스트 데이터
  const id = "testuser";

  // title로 받은 과목과 같은 시험의 응시번호 추출
  const filterSubject = (dtestList, subjectTitle) => {
    return dtestList.filter(e => e.TEST_TITLE.includes(subjectTitle));
  };

  // 월별 추이 그래프를 위한 데이터 추출 함수
  const getPointProgress = (testArr, title) => {
    // 선택한 과목에 해당하는 시험 리스트만 필터링
    const sbjList = filterSubject(testArr, title);

    // 필터링한 과목의 가장 첫 시험
    const firstTest = sbjList[sbjList.length - 1];

    let monthArr = [];
    let yearMonth = [];
    // 시험 리스트에서 응시번호만 배열로 따로 만들기(오름차순)
    let exmNumList = sbjList.map(e => e.TEST_NUMBER).sort((a, b) => a - b);
    // 연월 기준으로 하나의 응시번호만 추출
    for (let i of exmNumList) {
      if (yearMonth.every(e => e !== i.slice(0, 6))) {
        yearMonth.push(i.slice(0, 6));
        monthArr.push(i);
      }
    }
    // 월별 과목 평균 API 요청
    testCallback(monthArr);

    // 단원별 정답률 API 요청
    getAnswerRate(firstTest.TEST_NUMBER);
  };

  // 단원별 정답률(누적) 계산
  const calcAndswerRate = (rateArr, unitTitle) => {
    const rate = groupBy(rateArr, "INDEX_NAME_LV1");
    const correctCount = rate[`${unitTitle}`].reduce(function add(
      sum,
      currValue
    ) {
      return sum + Number(currValue.O_COUNT);
    },
    0);
    const totalCount = rate[`${unitTitle}`].reduce(function add(
      sum,
      currValue
    ) {
      return sum + Number(currValue.T_COUNT);
    },
    0);

    setUnitScore(((correctCount / totalCount) * 100).toFixed(1));
  };

  const filterMainTest = testArr => {
    let filterList = [];
    for (let sbj of subject) {
      filterList.push(...testArr.filter(e => e.TEST_TITLE.includes(sbj)));
    }
    return filterList;
  };

  const findLatestSubject = testArr => {
    let filterList = [];
    for (let sbj of subject) {
      filterList.push(...testArr.filter(e => e.TEST_TITLE.includes(sbj)));
      if (filterList.length > 0) {
        return sbj;
      }
    }
  };

  // /correct/{응시번호}/{아이디}
  const getAnswerRate = async exmNum => {
    setLoading(true);
    await axios
      .get(`/correct/${exmNum}/${id}`)
      .then(res => {
        if (res.data.SUCCESS) {
          if (res.data.DATA.length > 0) {
            setRateList(res.data.DATA);
          }
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getResultList = async () => {
    setLoading(true);
    await axios
      .get(`/result-list/${id}`)
      .then(res => {
        if (res.data.SUCCESS) {
          if (res.data.DATA.length > 0) {
            // 주 과목 리스트만 추출
            setDtestList(filterMainTest(res.data.DATA));

            // 과목 초기값 설정
            setSelectedSubject(findLatestSubject(res.data.DATA));

            getPointProgress(res.data.DATA, findLatestSubject(res.data.DATA));
          }
        }
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // 작업 중
  const getDtestAverage = async () => {
    setLoading(true);
  };

  const testCallback = useCallback(tests => {
    setLoading(true);
    try {
      reducePromises(tests, test => {
        return axios.get(`/average/${test}/${id}`);
      }).then(results => {
        setProgress([
          {
            id: "내 점수",
            color: "hsl(203, 100%, 73%)",
            data: results
          }
        ]);
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  });

  const reducePromises = (array, callback) =>
    array.reduce(
      (prevPrms, currElem, index) =>
        prevPrms.then(async prevRes => {
          const currRes = await callback(currElem, index);
          let xLabel = currElem.slice(0, 4) + "." + currElem.slice(4, 6);
          const newPoint = {
            x: xLabel,
            y: parseInt(currRes.data.DATA[0].THIS_MONTH_AVERAGE)
          };
          return [...prevRes, newPoint];
        }),
      Promise.resolve([])
    );

  useEffect(() => {
    getResultList();
  }, []);

  useEffect(() => {
    if (rateList.length > 0) {
      const unitOptions = new Set(rateList.map(e => e.INDEX_NAME_LV1));
      setUnitSubject([...unitOptions]);
      setSelectedUnit([...unitOptions][0]);

      calcAndswerRate(rateList, [...unitOptions][0]);
    }
  }, [rateList]);

  // 달성률 정보
  const [unitScore, setUnitScore] = useState();

  const handleSeleted = sbj => {
    getPointProgress(dtestList, sbj);
    setSelectedSubject(sbj);
    setUnitSelected("");
  };

  const handleUnitSeleted = unit => {
    setSelectedUnit(unit);
    calcAndswerRate(rateList, unit);
  };

  return (
    <>
      {pageDtest ? (
        <SelectDiv>
          <SelectTitle>과목 선택</SelectTitle>
          <SubjectSelect
            options={subject}
            defaultValue={selectedSubject}
            selected={selected}
            setSelected={setSelected}
            handleSeleted={handleSeleted} //이벤트
          />
          <SelectTitle>단원 선택</SelectTitle>
          <SubjectSelect
            options={unitSubject}
            defaultValue={selectedUnit}
            selected={unitSelected}
            setSelected={setUnitSelected}
            handleSeleted={handleUnitSeleted} //이벤트
          />
        </SelectDiv>
      ) : null}
      <GradeDiv>
        <GraphComponent>
          <GraphTitle>{selectedSubject} 성적추이</GraphTitle>
          <Graph className={pageDtest ? "progress" : ""}>
            <MonthlyProgressGraph progress={progress} />
          </Graph>
        </GraphComponent>
        {pageDtest ? (
          <>
            <Border />
            <AnswerComponent>
              <GraphTitle>
                {selectedUnit} 정답률
                <Standard>기준: 누적</Standard>
              </GraphTitle>
              <Graph>
                <DtestUnitRate unitScore={unitScore} />
              </Graph>
            </AnswerComponent>
          </>
        ) : null}
      </GradeDiv>
    </>
  );
};

export default DtestGrade;

const GradeDiv = styled.div`
  width: 100%;
  height: 100%;
  ${props => props.pageDtest && `padding: 0 24px;`}
  display: flex;

  justify-content: center;
  flex-wrap: wrap;

  &:last-child {
    border-right: none;
  }

  @media screen and (max-width: 890px) {
    flex-direction: column;
  }
`;

const GraphComponent = styled.div`
  flex-grow: 1;
  width: 60%;
  height: 340px;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

const Border = styled.hr`
  background-color: #dadada;
  border: none;
  border-radius: 2px;
  width: 2px;
  height: 300px;
  @media screen and (max-width: 890px) {
    width: calc(100vw - 100px);
    height: 2px;
  }
`;

const AnswerComponent = styled.div`
  flex-grow: 1;
  width: 39%;
  height: 320px;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

const SelectDiv = styled.div`
  width: 100%;
  padding: 20px 20px 0 20px;
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
`;

const SelectTitle = styled.div`
  display: none;
  @media screen and (max-width: 428px) {
    font-size: 18px;
    width: 30%;
    height: 43px;
    line-height: 43px;
    display: block;
  }
`;

const GraphTitle = styled.div`
  position: relative;
  font-size: 18px;
  font-weight: 700;
  margin: 20px 0 20px 26px;
`;

const Standard = styled.div`
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  text-align: left;

  right: 15%;
  top: 100%;
`;

const Graph = styled.div`
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  margin: 0 26px;

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #16e4cc;
    border-radius: 10px;
    border: 5px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #f5f5f5;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;
