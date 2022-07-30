import React from "react";
import LineGraph from "./LineGraph";
import styled from "styled-components";

const MonthlyProgressGraph = ({ progress }) => {
  // [과목별 성적 추이]
  // 월 평균 API 이용
  // 응시번호 리스트에 있는 응시번호를 통해 과목별 월 데이터를 구한다
  // 응시한 달의 평균을 구할 수 있다
  // x: 월, y:평균
  if (progress.length === 0) return;
  return (
    <MonthlyProgress>
      <ProgressGraph>
        <LineGraph progress={progress} />
      </ProgressGraph>
    </MonthlyProgress>
  );
};

export default MonthlyProgressGraph;

const MonthlyProgress = styled.div`
  width: 530px;
  height: 100%;
  border-radius: 10px;
  position: relative;
`;

const ProgressGraph = styled.div`
  width: 100%;
  min-width: 454px;
  height: calc(100% - 10px);
  position: absolute;
  left: 0;
`;
