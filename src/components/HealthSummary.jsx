import { React, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InBodyDataCard } from "../components";
import styled from "styled-components";
import { Context } from "../context/Context";
import { RightArrow } from "../assets/";
import { DataCardSkeleton } from "../elements";
import { getDateTimes, getInBodyData } from "../context/reducer/action";
const HealthSummary = () => {
  const navigate = useNavigate();
  const {
    dispatch,
    isLoading,
    dateTimes,
    previousDate,
    bodyCompositionData,
    bodyCompositionData1,
    obesityData,
    obesityData1,
    bodyConditionData,
    bodyConditionData1
  } = useContext(Context);

  // ! 나중에 action에서 id 세팅하면 'silver'이놈 필요없음
  // dateTimes에 값이 없으니 get DateTimes를 실행해라 (datetimes값 가져오는 함수)
  //datetimes.length가 고로 0이 아니게 될테니 그때에는 getinBodyData를 실행해라
  useEffect(() => {
    if (dateTimes.length !== 0) {
      dispatch(getInBodyData("silverburgh1", dateTimes));
    } else {
      dispatch(getDateTimes("silverburgh1"));
    }
  }, [dateTimes]);
  return (
    <>
      <HeaderContainer>
        <Title>인바디검사 요약</Title>
        <Arrow
          src={RightArrow}
          onClick={() => {
            navigate("/health");
          }}
        />
      </HeaderContainer>

      <DataCardContainer
        children={
          isLoading || !previousDate ? (
            <>
              <DataCardSkeleton />
              <DataCardSkeleton />
              <DataCardSkeleton />
            </>
          ) : (
            <>
              <InBodyDataCard
                category="몸무게(kg)"
                measurement="kg"
                amount={Number(bodyConditionData.Weight || 0)}
                highStandard={Number(
                  bodyConditionData.UpperLimit_WeightNormalRange || 0
                )}
                lowStandard={Number(
                  bodyConditionData.LowerLimit_WeightNormalRange || 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(bodyConditionData1.Weight || 0)}
              ></InBodyDataCard>
              <InBodyDataCard
                obesityData={obesityData}
                category="체질량지수(index)"
                measurement="index"
                amount={Number(obesityData.BMI_BodyMassIndex || 0)}
                highStandard={Number(
                  obesityData.UpperLimit_BMINormalRange || 0
                )}
                lowStandard={Number(obesityData.LowerLimit_BMINormalRange || 0)}
                previousDate={previousDate}
                yesterdayAmount={Number(obesityData1.BMI_BodyMassIndex || 0)}
              ></InBodyDataCard>
              <InBodyDataCard
                bodyCompositionData={bodyCompositionData || 0}
                category="체수분(liter)"
                measurement="liter"
                amount={Number(bodyCompositionData.TBW_TotalBodyWater || 0)}
                highStandard={Number(
                  bodyCompositionData.UpperLimit_TBWNormalRange || 0
                )}
                lowStandard={Number(
                  bodyCompositionData.LowerLimit_TBWNormalRange || 0
                )}
                previousDate={previousDate}
                yesterdayAmount={Number(
                  bodyCompositionData1.TBW_TotalBodyWater || 0
                )}
              ></InBodyDataCard>
            </>
          )
        }
      />
    </>
  );
};

export default HealthSummary;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  /* border: 1px solid pink; */
`;

const Title = styled.span`
  display: block;
  font-weight: 700;
  font-size: 1.125rem;
  /* border: 1px solid yellow; */
`;

const Arrow = styled.img`
  cursor: pointer;
  /* border: 1px solid blue; */
`;

const DataCardContainer = styled.div`
  margin-top: 2.125rem;
  display: flex;
  /* border: 1px solid black; */
  & div {
    margin-right: 1.875rem;
    height: 245px;
  }

  & h1 {
    margin: 1.25rem auto 1.25rem;
  }

  & p {
    font-size: 2.75rem;
  }
  & section {
    height: 44px;
    padding-top: 14px;
    font-size: 1rem;
  }

  @media screen and (max-width: 890px) {
    overflow-x: auto;
    justify-content: center;
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
