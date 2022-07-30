import { React, useState, useEffect, useMemo, useContext } from "react";
import { InBodyDataCard, InBodyGraph } from "../components";
import styled from "styled-components";
import { graphLegend } from "../assets/";
import { Context } from "../context/Context";
import { DataCardSkeleton } from "../elements";
import { newDateInbody } from "../utils";

export default function BodyConditionContent() {
  const [activeCard, setActiveCard] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [graphRange, setGraphRange] = useState([]);
  const {
    isLoading,
    previousDate,
    dateTimes,
    bodyConditionData,
    bodyConditionData1,
    bodyConditionData2,
    bodyConditionData3,
    bodyConditionData4
  } = useContext(Context);

  // 처음 refresh할때 weightData값만 null로 반영이되서 memo를 사용해서 값을 저장
  // 몸무게 관련 그래프에 넘겨줄 값들
  const weightData = useMemo(
    () => [
      {
        x: newDateInbody(dateTimes[4]),
        y: bodyConditionData4.Weight ?? 0
      },
      {
        x: newDateInbody(dateTimes[3]),
        y: bodyConditionData3.Weight ?? 0
      },
      {
        x: newDateInbody(dateTimes[2]),
        y: bodyConditionData2.Weight ?? 0
      },
      {
        x: newDateInbody(dateTimes[1]),
        y: bodyConditionData1.Weight ?? 0
      },
      {
        x: newDateInbody(dateTimes[0]),
        y: bodyConditionData.Weight ?? 0
      }
    ],
    [
      bodyConditionData,
      bodyConditionData1,
      bodyConditionData2,
      bodyConditionData3,
      bodyConditionData4
    ]
  );

  // 위에 저장한 weightData usememo값이 로딩되도록 설정
  useEffect(() => {
    if (weightData) {
      pushGraphData();
    }
  }, [weightData]);

  // activeCard값이 눌릴때마다 graphData를 실행
  useEffect(() => {
    pushGraphData();
  }, [activeCard]);

  // activeCard의 id값을 배정해줌과 동시에 누를때마다 graphData넘기기
  const updateActiveCard = (e, id) => {
    e.preventDefault();
    setActiveCard(id);
    pushGraphData();
  };

  // activeCard값에 따라 그래프에 주는 data값 설정
  const pushGraphData = () => {
    switch (activeCard) {
      case 0:
        setGraphData(weightData);
        setGraphRange(weightRange);
        break;
      case 1:
        setGraphData(smmData);
        setGraphRange(smmRange);
        break;
      case 2:
        setGraphData(bfmData);
        setGraphRange(bfmRange);
        break;
      case 3:
        setGraphData(slmData);
        setGraphRange(slmRange);
        break;
    }
  };

  const weightRange = {
    min: "30",
    max: "120",
    upper: bodyConditionData.UpperLimit_WeightNormalRange ?? 0,
    lower: bodyConditionData.LowerLimit_WeightNormalRange ?? 0
  };

  // 골격근량 데이터 가공자료
  const smmData = [
    {
      x: newDateInbody(dateTimes[4]),
      y: bodyConditionData4.SMM_SkeletalMuscleMass
    },
    {
      x: newDateInbody(dateTimes[3]),
      y: bodyConditionData3.SMM_SkeletalMuscleMass
    },
    {
      x: newDateInbody(dateTimes[2]),
      y: bodyConditionData2.SMM_SkeletalMuscleMass
    },
    {
      x: newDateInbody(dateTimes[1]),
      y: bodyConditionData1.SMM_SkeletalMuscleMass
    },
    {
      x: newDateInbody(dateTimes[0]),
      y: bodyConditionData.SMM_SkeletalMuscleMass
    }
  ];

  const smmRange = {
    min: "10",
    max: "70",
    upper: bodyConditionData.UpperLimit_SMMNormalRange ?? 0,
    lower: bodyConditionData.LowerLimit_SMMNormalRange ?? 0
  };

  // 체지방량 가공자료
  const bfmData = [
    { x: newDateInbody(dateTimes[4]), y: bodyConditionData4.BFM_BodyFatMass },
    { x: newDateInbody(dateTimes[3]), y: bodyConditionData3.BFM_BodyFatMass },
    { x: newDateInbody(dateTimes[2]), y: bodyConditionData2.BFM_BodyFatMass },
    { x: newDateInbody(dateTimes[1]), y: bodyConditionData1.BFM_BodyFatMass },
    { x: newDateInbody(dateTimes[0]), y: bodyConditionData.BFM_BodyFatMass }
  ];

  const bfmRange = {
    min: "0",
    max: "60",
    upper: bodyConditionData.UpperLimit_BFMNormalRange ?? 0,
    lower: bodyConditionData.LowerLimit_BFMNormalRange ?? 0
  };

  // 근육량 가공자료
  const slmData = [
    { x: newDateInbody(dateTimes[4]), y: bodyConditionData4.SLM_SoftLeanMass },
    { x: newDateInbody(dateTimes[3]), y: bodyConditionData3.SLM_SoftLeanMass },
    { x: newDateInbody(dateTimes[2]), y: bodyConditionData2.SLM_SoftLeanMass },
    { x: newDateInbody(dateTimes[1]), y: bodyConditionData1.SLM_SoftLeanMass },
    { x: newDateInbody(dateTimes[0]), y: bodyConditionData.SLM_SoftLeanMass }
  ];

  const slmRange = {
    min: "20",
    max: "100",
    upper: bodyConditionData.UpperLimit_SLMNormalRange ?? 0,
    lower: bodyConditionData.LowerLimit_SLMNormalRange ?? 0
  };

  return (
    <>
      <DataCardContainer
        children={
          isLoading || !dateTimes.length ? (
            <>
              <DataCardSkeleton />
              <DataCardSkeleton />
              <DataCardSkeleton />
              <DataCardSkeleton />
            </>
          ) : (
            <>
              <InBodyDataCard
                active={0 === activeCard}
                onClick={e => updateActiveCard(e, 0)}
                category="몸무게(kg)"
                measurement="kg"
                amount={Number(bodyConditionData.Weight ?? 0)}
                highStandard={Number(
                  bodyConditionData.UpperLimit_WeightNormalRange ?? 0
                )}
                lowStandard={Number(
                  bodyConditionData.LowerLimit_WeightNormalRange ?? 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(bodyConditionData1.Weight ?? 0)}
              ></InBodyDataCard>
              <InBodyDataCard
                active={1 === activeCard}
                onClick={e => updateActiveCard(e, 1)}
                category="골격근량(kg)"
                measurement="kg"
                amount={Number(bodyConditionData.SMM_SkeletalMuscleMass ?? 0)}
                highStandard={Number(
                  bodyConditionData.UpperLimit_SMMNormalRange ?? 0
                )}
                lowStandard={Number(
                  bodyConditionData.LowerLimit_SMMNormalRange ?? 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(
                  bodyConditionData1.SMM_SkeletalMuscleMass ?? 0
                )}
              ></InBodyDataCard>
              <InBodyDataCard
                active={2 === activeCard}
                onClick={e => updateActiveCard(e, 2)}
                category="체지방량(kg)"
                measurement="kg"
                amount={Number(bodyConditionData.BFM_BodyFatMass ?? 0)}
                highStandard={Number(
                  bodyConditionData.UpperLimit_BFMNormalRange ?? 0
                )}
                lowStandard={Number(
                  bodyConditionData.LowerLimit_BFMNormalRange ?? 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(
                  bodyConditionData1.BFM_BodyFatMass ?? 0
                )}
              ></InBodyDataCard>
              <InBodyDataCard
                active={3 === activeCard}
                onClick={e => updateActiveCard(e, 3)}
                category="근육량(kg)"
                measurement="kg"
                amount={Number(bodyConditionData.SLM_SoftLeanMass ?? 0)}
                highStandard={Number(
                  bodyConditionData.UpperLimit_SLMNormalRange ?? 0
                )}
                lowStandard={Number(
                  bodyConditionData.LowerLimit_SLMNormalRange ?? 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(
                  bodyConditionData1.SLM_SoftLeanMass ?? 0
                )}
              ></InBodyDataCard>
            </>
          )
        }
      />
      <GraphLegend src={graphLegend} />

      <InBodyGraph data={graphData} range={graphRange}></InBodyGraph>
    </>
  );
}

const DataCardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 250px;

  @media screen and (max-width: 980px) {
    overflow-x: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #aaaaaa;
    border-radius: 10px;
    border: 5px solid transparent;
  }
  ::-webkit-scrollbar-track {
    background-color: #dadada;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }
`;

const GraphLegend = styled.img`
  float: right;
  width: 246px;
  margin: 20px 0 16px 0;
  @media screen and (max-width: 550px) {
    float: left;
  }
`;
