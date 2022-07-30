import { React, useEffect } from "react";
import styled, { css } from "styled-components";
import { getStandard, compareAmount } from "../utils";

export default function InBodyDataCard({
  category,
  amount,
  previousDate,
  yesterdayAmount,
  highStandard,
  lowStandard,
  measurement,
  onClick,
  active,
  activeCard
}) {
  return (
    <>
      <DataCard
        onClick={onClick}
        activeCard={activeCard}
        active={active}
        amount={amount}
        highStandard={highStandard}
        lowStandard={lowStandard}
      >
        <Title>{category}</Title>
        <Info active={active}>{amount}</Info>
        <Standard
          amount={amount}
          highStandard={highStandard}
          lowStandard={lowStandard}
        >
          {getStandard(amount, highStandard, lowStandard)}
        </Standard>
        <Previous>{previousDate}일 검사보다 </Previous>
        <Compare>{compareAmount(amount, yesterdayAmount, measurement)}</Compare>
      </DataCard>
    </>
  );
}

const DataCard = styled.div`
  cursor: pointer;
  display: block;
  width: 20vw;
  min-width: 146.83px;
  height: 220px;
  margin-right: 20px;
  &:last-of-type {
    margin-right: 0px;
  }
  box-sizing: border-box;
  border-radius: 16px;
  border: 1px solid #0e0aff;
  border: ${props =>
    props.amount > props.highStandard ? "1px solid #a160fb" : ""};

  border: ${props =>
    props.amount < props.lowStandard ? " 1px solid #363636" : ""};

  border-width: ${props => {
    if (props.active === true) {
      return "6px";
    }
  }};

  @media screen and (max-width: 890px) {
    flex-shrink: 0;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 300;
  margin: 1rem auto 1rem;
  color: #363636;
  font-size: 1rem;
  text-align: center;
`;

const Info = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
  ${props => {
    if (props.active === true) {
      return "font-size: 2.5rem; line-height:70%";
    }
  }};
`;

const Standard = styled.section`
  border-radius: 20px;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  width: 80%;
  height: 40px;
  margin: auto;
  margin-bottom: 0.6875rem;
  text-align: center;
  padding-top: 12px;
  background: #0e0aff;
  background: ${props => (props.amount > props.highStandard ? " #a160fb" : "")};
  background: ${props => (props.amount < props.lowStandard ? " #363636" : "")};
`;

const Previous = styled.span`
  display: block;
  margin: 1rem auto 0.75rem;
  font-style: normal;
  font-weight: 400;
  font-size: 0.9rem;
  text-align: center;
`;

const Compare = styled.span`
  display: block;
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  text-align: center;
`;
