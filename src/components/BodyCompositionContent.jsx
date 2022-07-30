import { React, useState, useEffect, useContext } from "react";
import { InBodyDataCard, InBodyGraph } from "../components";
import { graphLegend } from "../assets/";
import styled from "styled-components";
import { Context } from "../context/Context";
import { DataCardSkeleton } from "../elements";
import { newDateInbody } from "../utils";

export default function BodyCompositionContent({}) {
  const [activeCard, setActiveCard] = useState(0);
  const [graphData, setGraphData] = useState([]);
  const [graphRange, setGraphRange] = useState([]);
  const {
    isLoading,
    previousDate,
    dateTimes,
    bodyCompositionData,
    bodyCompositionData1,
    bodyCompositionData2,
    bodyCompositionData3,
    bodyCompositionData4
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
        setGraphData(tbwData);
        setGraphRange(tbwRange);
        break;
      case 1:
        setGraphData(proteinData);
        setGraphRange(proteinRange);
        break;
      case 2:
        setGraphData(mineralData);
        setGraphRange(mineralRange);
        break;
    }
  };

  // 체수분 관련 그래프에 넘겨줄 값들
  const tbwData = [
    {
      x: newDateInbody(dateTimes[4]),
      y: bodyCompositionData4.TBW_TotalBodyWater
    },
    {
      x: newDateInbody(dateTimes[3]),
      y: bodyCompositionData3.TBW_TotalBodyWater
    },
    {
      x: newDateInbody(dateTimes[2]),
      y: bodyCompositionData2.TBW_TotalBodyWater
    },
    {
      x: newDateInbody(dateTimes[1]),
      y: bodyCompositionData1.TBW_TotalBodyWater
    },
    {
      x: newDateInbody(dateTimes[0]),
      y: bodyCompositionData.TBW_TotalBodyWater
    }
  ];

  // upper/lower 값이 처음에 undefined로 넘어가서 조건부로 넘기
  const tbwRange = {
    min: "0",
    max: "80",
    upper: bodyCompositionData.UpperLimit_TBWNormalRange,
    lower: bodyCompositionData.LowerLimit_TBWNormalRange
  };

  // 단백질 데이터 가공자료
  const proteinData = [
    { x: newDateInbody(dateTimes[4]), y: bodyCompositionData4.Protein },
    { x: newDateInbody(dateTimes[3]), y: bodyCompositionData3.Protein },
    { x: newDateInbody(dateTimes[2]), y: bodyCompositionData2.Protein },
    { x: newDateInbody(dateTimes[1]), y: bodyCompositionData1.Protein },
    { x: newDateInbody(dateTimes[0]), y: bodyCompositionData.Protein }
  ];

  const proteinRange = {
    min: "0",
    max: "25",
    upper: bodyCompositionData.UpperLimit_ProteinNormalRange,
    lower: bodyCompositionData.LowerLimit_ProteinNormalRange
  };

  // 무기질 가공자료
  const mineralData = [
    { x: newDateInbody(dateTimes[4]), y: bodyCompositionData4.Minerals },
    { x: newDateInbody(dateTimes[3]), y: bodyCompositionData3.Minerals },
    { x: newDateInbody(dateTimes[2]), y: bodyCompositionData2.Minerals },
    { x: newDateInbody(dateTimes[1]), y: bodyCompositionData1.Minerals },
    { x: newDateInbody(dateTimes[0]), y: bodyCompositionData.Minerals }
  ];

  const mineralRange = {
    min: "0",
    max: "15",
    upper: bodyCompositionData.UpperLimit_MineralsNormalRange,
    lower: bodyCompositionData.LowerLimit_MineralsNormalRange
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
            </>
          ) : (
            <>
              <InBodyDataCard
                active={0 === activeCard}
                onClick={e => updateActiveCard(e, 0)}
                bodyCompositionData={bodyCompositionData}
                category="체수분(liter)"
                measurement="liter"
                amount={Number(bodyCompositionData.TBW_TotalBodyWater)}
                highStandard={Number(
                  bodyCompositionData.UpperLimit_TBWNormalRange
                )}
                lowStandard={Number(
                  bodyCompositionData.LowerLimit_TBWNormalRange
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(
                  bodyCompositionData1.TBW_TotalBodyWater
                )}
              ></InBodyDataCard>
              <InBodyDataCard
                active={1 === activeCard}
                onClick={e => updateActiveCard(e, 1)}
                bodyCompositionData={bodyCompositionData}
                category="단백질(kg)"
                measurement="kg"
                amount={Number(bodyCompositionData.Protein)}
                highStandard={Number(
                  bodyCompositionData.UpperLimit_ProteinNormalRange
                )}
                lowStandard={Number(
                  bodyCompositionData.LowerLimit_ProteinNormalRange
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(bodyCompositionData1.Protein)}
              ></InBodyDataCard>
              <InBodyDataCard
                active={2 === activeCard}
                onClick={e => updateActiveCard(e, 2)}
                bodyCompositionData={bodyCompositionData}
                category="무기질(kg)"
                measurement="kg"
                amount={Number(bodyCompositionData.Minerals)}
                highStandard={Number(
                  bodyCompositionData.UpperLimit_MineralsNormalRange
                )}
                lowStandard={Number(
                  bodyCompositionData.LowerLimit_MineralsNormalRange
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(bodyCompositionData1.Minerals)}
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
