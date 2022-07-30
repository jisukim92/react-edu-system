import React from 'react'
import { useContext } from "react";
import { Context } from "../context/Context";
import { setToDoListGraph } from "../context/reducer/action";
import { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { ToDoListGraph0030, ToDoListGraph3060, ToDoListGraph6090, ToDoListGraph90100 } from '../assets';


const ToDoListGraph = () => {
  
  const {completionPercent, dispatch} = useContext(Context)
  const barRef = useRef(null);

  // 달성률을 그래프에 반영
  function progressCircle(per) {
    let RADIUS = 50;
    let CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    let progressBar = per / 100;
    let dashoffset = CIRCUMFERENCE * (1 - progressBar);

    barRef.current.style.strokeDashoffset = dashoffset;
    barRef.current.style.strokeDasharray = CIRCUMFERENCE;
  }

  useEffect(() => {
    if (completionPercent == 0 ) {
      if( localStorage.getItem("completionPercent") != null ) {
        dispatch(setToDoListGraph(Number(localStorage.getItem("completionPercent"))))
      }
    }
    progressCircle(completionPercent);
  }, [completionPercent])

  return (
  <>
  <ToDoGraphContainer>
    <H4>오늘의 TO DO LIST 달성률</H4>
      <CircleProgress>
        <svg
          className="circle_progress"
          width="242"
          height="242"
          viewBox="0 0 120 120"
        >
          <StyledInnerCircle
            className="frame"
            cx="60"
            cy="60"
            r="50"
            strokeWidth="16.5"
          />
          <StyledInnerCircle
            className="bar active"
            ref={barRef}
            cx="60"
            cy="60"
            r="50"
            strokeWidth="16.5"
          />
        </svg>
        <strong className="value">{completionPercent}%</strong>
      </CircleProgress>
      <CheerMessage1  state={completionPercent}>
        <Span1>벌써 포기한거 아니죠?</Span1>
        <Icon1  src={ToDoListGraph0030}/>
      </CheerMessage1>
      <CheerMessage2 state={completionPercent}>
       <Span2> 조금만 더 힘내세요!</Span2>
        <Icon2 src={ToDoListGraph3060}/>
      </CheerMessage2>
      <CheerMessage3  state={completionPercent}>
      <Span3>     얼마 남지 않았어요!</Span3>
        <Icon3 src={ToDoListGraph6090}/>
      </CheerMessage3>
      <CheerMessage4 state={completionPercent}>
      <Span4>    목표에 도달했어요!</Span4>
        <Icon4  src={ToDoListGraph90100}/>
      </CheerMessage4>
      </ToDoGraphContainer>
    </>
  )
}

export default ToDoListGraph

const ToDoGraphContainer = styled.div`
  position: relative;
`

const H4 = styled.h4`
  font-weight: 700;
  font-size: 18px;
  line-height: 27px
  text-align: center;
  color: #363636;
`

const CircleProgress = styled.div`
  position: relative;
  width: 242px;
  height: 242px;
  margin: auto;
  margin-top: 62px;

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
    stroke: #0E0AFF;
  }

  .value {
    color: #0E0AFF;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 234.8px;
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

const CheerMessage1 = styled.h4`
transform: translate(-50%);
left: 50%;
right: 50%;
bottom: 40px;
  
  position: absolute;
  width: 242px;
  height: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #A160FB;
  display: flex;
  display: ${(props) => {
    return  props.state < 30 ? "block" : "none"
  }};
  align-item: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  border-radius: 50px;
`
const CheerMessage2 = styled.h4`
transform: translate(-50%);
left: 50%;
right: 50%;
bottom: 40px;
  position: absolute;
  width: 242px;
  height: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #A160FB;
  display: flex;
  display: ${(props) => {
    return  props.state >= 30 && props.state < 60 ? "block" : "none"
  }};
  align-item: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  border-radius: 50px;
`
const CheerMessage3 = styled.h4`
transform: translate(-50%);
left: 50%;
right: 50%;
bottom: 40px;

  position: absolute;
  width: 242px;
  height: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #A160FB;

  display: ${(props) => {
    return  props.state >= 60 && props.state < 90 ? "block" : "none"
  }};

  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  border-radius: 50px;
`
const CheerMessage4 = styled.h4`
transform: translate(-50%);
left: 50%;
right: 50%;
bottom: 40px;
  position: absolute;
  width: 242px;
  height: 56px;
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  color: #A160FB;
  display: flex;
  display: none;
  display: ${(props) => {
    return  props.state >= 90 ? "block" : ""
  }};
  align-item: center;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.18);
  border-radius: 50px;
`

const Span1 = styled.span`
  position: absolute;
  left: 15px;
  top: 13px;
`
const Span2 = styled.span`
  position: absolute;
  left: 25px;
  top: 13px;
`
const Span3 = styled.span`
  position: absolute;
  left: 25px;
  top: 13px;
`
const Span4 = styled.span`
  position: absolute;
  left: 25px;
  top: 13px;
`

const Icon1 = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`
const Icon2 = styled.img`
  position: absolute;
  top: 12px;
  right: 20px;
`
const Icon3 = styled.img`
  position: absolute;
  top: 12px;
  right: 20px;
`
const Icon4 = styled.img`
  position: absolute;
  top: 12px;
  right: 22px;
`


/**
 const Span = styled.span`
  position: absolute;
  left: 15px;
  top: 13px;
`

const Icon = styled.img`
  position: absolute;
  top: 12px;
  right: 12px;
`

 */