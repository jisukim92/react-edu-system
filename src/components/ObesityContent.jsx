import { React, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { InBodyDataCard, InBodyGraph } from "../components";
import { graphLegend } from "../assets";
import { Context } from "../context/Context";
import { DataCardSkeleton } from "../elements";
import { newDateInbody } from "../utils";

export default function ObesityContent({}) {
  const [activeCard, setActiveCard] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [graphRange, setGraphRange] = useState([]);
  const {
    isLoading,
    previousDate,
    dateTimes,
    obesityData,
    obesityData1,
    obesityData2,
    obesityData3,
    obesityData4
  } = useContext(Context);

  useEffect(() => {
    pushGraphData();
  }, [activeCard]);

  const updateActiveCard = (e, id) => {
    e.preventDefault();
    setActiveCard(id);
    pushGraphData();
  };

  const pushGraphData = () => {
    switch (activeCard) {
      case 0:
        setGraphData(bmiData);
        setGraphRange(bmiRange);
        break;
      case 1:
        setGraphData(pbfData);
        setGraphRange(pbfRange);
        break;
      case 2:
        setGraphData(whrData);
        setGraphRange(whrRange);
        break;
      case 3:
        setGraphData(obdData);
        setGraphRange(obdRange);
        break;
    }
  };

  // 체질량 관련 그래프에 넘겨줄 값들
  const bmiData = [
    {
      x: newDateInbody(dateTimes[4]),
      y: obesityData4.BMI_BodyMassIndex
    },
    {
      x: newDateInbody(dateTimes[3]),
      y: obesityData3.BMI_BodyMassIndex
    },
    {
      x: newDateInbody(dateTimes[2]),
      y: obesityData2.BMI_BodyMassIndex
    },
    {
      x: newDateInbody(dateTimes[1]),
      y: obesityData1.BMI_BodyMassIndex
    },
    {
      x: newDateInbody(dateTimes[0]),
      y: obesityData.BMI_BodyMassIndex
    }
  ];

  // upper/lower 값이 처음에 undefined로 넘어가서 조건부로 넘기
  const bmiRange = {
    min: "0",
    max: "60",
    upper: obesityData.UpperLimit_BMINormalRange ?? 0,
    lower: obesityData.LowerLimit_BMINormalRange ?? 0
  };

  // 체지방률 데이터 가공자료
  const pbfData = [
    { x: newDateInbody(dateTimes[4]), y: obesityData4.PBF_PercentBodyFat },
    { x: newDateInbody(dateTimes[3]), y: obesityData3.PBF_PercentBodyFat },
    { x: newDateInbody(dateTimes[2]), y: obesityData2.PBF_PercentBodyFat },
    { x: newDateInbody(dateTimes[1]), y: obesityData1.PBF_PercentBodyFat },
    {
      x: newDateInbody(dateTimes[0]),
      y: Number(obesityData.PBF_PercentBodyFat)
    }
  ];

  const pbfRange = {
    min: "0",
    max: "60",
    upper: obesityData.UpperLimit_PBFNormalRange ?? 0,
    lower: obesityData.LowerLimit_PBFNormalRange ?? 10
  };

  // 복부지방률 가공자료
  const whrData = [
    { x: newDateInbody(dateTimes[4]), y: obesityData4.WHR_Waist_HipRatio },
    { x: newDateInbody(dateTimes[3]), y: obesityData3.WHR_Waist_HipRatio },
    { x: newDateInbody(dateTimes[2]), y: obesityData2.WHR_Waist_HipRatio },
    { x: newDateInbody(dateTimes[1]), y: obesityData1.WHR_Waist_HipRatio },
    { x: newDateInbody(dateTimes[0]), y: obesityData.WHR_Waist_HipRatio }
  ];

  const whrRange = {
    min: "0.5",
    max: "1.2",
    upper: obesityData.UpperLimit_WHRNormalRange
      ? obesityData.UpperLimit_WHRNormalRange
      : 0,
    lower: obesityData.LowerLimit_WHRNormalRange
      ? obesityData.LowerLimit_WHRNormalRange
      : 0
  };

  // 비만도 가공자료
  const obdData = [
    { x: newDateInbody(dateTimes[4]), y: obesityData4.ObesityDegree },
    { x: newDateInbody(dateTimes[3]), y: obesityData3.ObesityDegree },
    { x: newDateInbody(dateTimes[2]), y: obesityData2.ObesityDegree },
    { x: newDateInbody(dateTimes[1]), y: obesityData1.ObesityDegree },
    { x: newDateInbody(dateTimes[0]), y: obesityData.ObesityDegree }
  ];

  const obdRange = {
    min: "50",
    max: "150",
    upper: obesityData.UpperLimit_ObesityDegreeNormalRange
      ? obesityData.UpperLimit_ObesityDegreeNormalRange
      : 0,
    lower: obesityData.LowerLimit_ObesityDegreeNormalRange
      ? obesityData.LowerLimit_ObesityDegreeNormalRange
      : 0
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
                obesityData={obesityData}
                category="체질량지수(index)"
                measurement="index"
                amount={Number(obesityData.BMI_BodyMassIndex)}
                highStandard={Number(obesityData.UpperLimit_BMINormalRange)}
                lowStandard={Number(obesityData.LowerLimit_BMINormalRange)}
                previousDate={previousDate}
                yesterdayAmount={Number(obesityData1.BMI_BodyMassIndex)}
              ></InBodyDataCard>
              <InBodyDataCard
                active={1 === activeCard}
                onClick={e => updateActiveCard(e, 1)}
                obesityData={obesityData}
                category="체지방률(%)"
                measurement="%"
                amount={Number(obesityData.PBF_PercentBodyFat)}
                highStandard={Number(obesityData.UpperLimit_PBFNormalRange)}
                lowStandard={Number(obesityData.LowerLimit_PBFNormalRange)}
                previousDate={previousDate}
                yesterdayAmount={Number(obesityData1.PBF_PercentBodyFat)}
              ></InBodyDataCard>
              <InBodyDataCard
                active={2 === activeCard}
                onClick={e => updateActiveCard(e, 2)}
                obesityData={obesityData}
                category="복부지방률(ratio)"
                measurement="ratio"
                amount={Number(obesityData.WHR_Waist_HipRatio)}
                highStandard={Number(obesityData.UpperLimit_WHRNormalRange)}
                lowStandard={Number(obesityData.LowerLimit_WHRNormalRange)}
                previousDate={previousDate}
                yesterdayAmount={Number(obesityData1.WHR_Waist_HipRatio)}
              ></InBodyDataCard>
              <InBodyDataCard
                active={3 === activeCard}
                onClick={e => updateActiveCard(e, 3)}
                obesityData={obesityData}
                category="비만도(%)"
                measurement="%"
                amount={Number(obesityData.ObesityDegree)}
                highStandard={Number(
                  obesityData.UpperLimit_ObesityDegreeNormalRange
                )}
                lowStandard={Number(
                  obesityData.LowerLimit_ObesityDegreeNormalRange
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(obesityData1.ObesityDegree)}
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
  margin: 20px 20px 16px 0;
  @media screen and (max-width: 375px) {
    float: left;
  }
`;
