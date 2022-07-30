import React, { useContext, useState } from "react";
import styled from "styled-components";
import { IncorrectNote, DtestGrade, DtestFeedback } from "../components";
import { Context } from "../context/Context";

export default function Dtest() {
  const { userInfo } = useContext(Context);

  return (
    <Page>
      <TITLE>진도별 테스트</TITLE>
      <CheerMessage>김철수님의 합격을 응원합니다.</CheerMessage>
      <CheerMessage className="mobile">
        김철수님의
        <br />
        합격을 응원합니다.
      </CheerMessage>
      <AverageContainer>
        <GraphDiv>
          <DtestGrade pageDtest={true} />
        </GraphDiv>
      </AverageContainer>
      <AverageContainer>
        <IncorrectNote />
      </AverageContainer>
      <AverageContainer>
        <DtestFeedback />
      </AverageContainer>
    </Page>
  );
}

const GraphDiv = styled.div`
  width: 100%;
`;

const Page = styled.div`
  width: 100%;
  padding: 60px 24px 37px 20px;
  background-color: #ffffff;
  @media screen and (max-width: 890px) {
    padding-top: 30px;
  }
`;

const TITLE = styled.h1`
  color: #363636;
  font-size: 24px;
  font-weight: 900;
  line-height: 32px;
  margin-bottom: 30px;

  @media screen and (max-width: 890px) {
    font-size: 20px;
  }
`;

const CheerMessage = styled.h2`
  color: #0e0aff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 30px;

  &.mobile {
    display: none;
  }

  @media screen and (max-width: 890px) {
    display: none;

    &.mobile {
      font-size: 24px;
      margin-bottom: 30px;
      display: block;
      width: 375px;
      line-height: 38.4px;
    }
  }
`;
const AverageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
  overflow: hidden;
`;
