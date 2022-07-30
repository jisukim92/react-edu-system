import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

const DtestUnitRate = ({ unitScore }) => {
  const barRef = useRef(null);

  // 달성률이 바뀔 때 마다 progressCircle 함수 실행
  useEffect(() => {
    progressCircle(unitScore);
  }, [unitScore]);

  // 달성률을 그래프에 반영
  function progressCircle(per) {
    let RADIUS = 54;
    let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    let progressBar = per / 100;
    let dashoffset = CIRCUMFERENCE * (1 - progressBar);

    barRef.current.style.strokeDashoffset = dashoffset;
    barRef.current.style.strokeDasharray = CIRCUMFERENCE;
  }

  return (
    <>
      <CircleProgress>
        <StyldSvg
          className="circle_progress"
          width="220"
          height="220"
          viewBox="0 0 120 120"
        >
          <StyledInnerCircle
            className="frame"
            cx="60"
            cy="60"
            r="54"
            strokeWidth="12"
          />
          <StyledInnerCircle
            className="bar active"
            ref={barRef}
            cx="60"
            cy="60"
            r="54"
            strokeWidth="12"
          />
        </StyldSvg>
        <strong className="value">{unitScore}점</strong>
      </CircleProgress>
    </>
  );
};

export default DtestUnitRate;

const CircleProgress = styled.div`
  position: relative;
  width: 220px;
  height: 220px;
  margin: auto;

  .circle_progress {
    transform: rotate(-90deg);
  }
  .frame,
  .bar {
    fill: none;
  }
  .frame {
    stroke: #e6e6e6;
  }
  .bar {
    stroke: #16e4cc;
    stroke-linecap: round;
  }

  .value {
    color: #16e4cc;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    font-size: 24px;
    font-weight: 700;
    line-height: 220px;
  }

  @media screen and (min-width: 890px) and (max-width: 990px) {
    width: 170px;
    height: 170px;
    .value {
      line-height: 170px;
    }
  }
`;

const StyldSvg = styled.svg`
  @media screen and (min-width: 890px) and (max-width: 990px) {
    width: 170px;
    height: 170px;
  }
`;

const circlePulse = keyframes`
0% {
  stroke-dasharray: 80 ${2 * Math.PI * 54};
}
`;

const StyledInnerCircle = styled.circle`
  &.active {
    animation: ${circlePulse} 2s ease;
  }
`;
