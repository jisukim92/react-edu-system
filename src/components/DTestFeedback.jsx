import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Calendar } from "react-calendar";
import moment from "moment";
import "react-calendar/dist/Calendar.css";

import oedot_05 from "../assets/oedot_05.svg";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/right.png";

const Container = styled.div`
  height: 360px;
  overflow: scroll;
  padding: 20px 24px 30px 24px;

  ::-webkit-scrollbar {
    display: none;
  }
`;
const Menu = styled.div`
  border-bottom: solid 1px #dadada;
  margin-bottom: 10px;
`;

const Who = styled.div`
  padding-right: 10px;
  display: flex;
  width: 400px;
`;

const WhoBox = styled.span`
  width: 100%;
  margin-right: 5%;
  cursor: pointer;
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 5px;
  font-size: 18px;
  text-align: center;
  color: #606060;

  color: ${props => {
    if (props.active === true) {
      return "#0e0aff";
    }
  }};
  font-weight: ${props => {
    if (props.active === true) {
      return "700";
    }
  }};
  &:nth-of-type(1) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
  &:nth-of-type(2) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
  &:nth-of-type(3) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
`;

const DateCalendarBox1 = styled.div`
  width: 140px;
  float: right;
  display: flex;

  @media screen and (max-width: 890px) {
    display: none;
  }
`;

const DC2Box = styled.div`
  display: flex;
  width: 156px;
  height: 46px;
  border-radius: 16px;
  background-color: #f5f5f5;
  justify-content: center;
  align-items: center;
  padding-top: 13px;

  visibility: hidden;
  @media screen and (max-width: 890px) {
    visibility: visible;
  }
`;

const DateCalendarBox2 = styled.div`
  width: 100%;
  height: 45px;
  float: left;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DateBox = styled.div`
  font-size: 18px;
  height: 30px;
  color: #363636;
`;
const CalendarIcon = styled.div`
  margin-left: 10px;
  margin-top: -6px;
  float: right;
`;
const CalendarBox = styled.div`
  position: absolute;
  width: 270px;
  right: 40px;
  margin-top: 20px;
  z-index: 100;
  visibility: ${props => (props.calendar ? "visible" : "hidden")};

  @media screen and (max-width: 890px) {
    right: 0;
    left: 40px;
    margin-top: 80px;
  }
`;

const Calendar1 = styled(Calendar)`
  padding: 10px;
  width: 270px;
  height: 100%;
  border-radius: 16px;
  text-decoration: none;
  border: solid 1px #dadada;

  abbr {
    text-decoration: none;
  }

  .react-calendar__tile {
    color: #363636;
  }

  .react-calendar__month-view__weekdays {
    color: #aaaaaa;
    text-decoration: none;
  }

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #0e0aff;
    color: #ffffff;
    border-radius: 50%;
  }
  .react-calendar__tile--now {
    background: #0e0aff;
    color: #ffffff;
    border-radius: 50%;
  }
`;

const MonthStyle = styled.div`
  color: #000;
  font-size: 20px;
`;
const LeftArrow = styled.div`
  background-image: url(${leftArrow});
  background-size: 30px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
`;
const RightArrow = styled.div`
  background-image: url(${rightArrow});
  background-size: 30px;
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
`;

const TextBox = styled.div`
  display: flex;
  padding: 15px 20px;

  @media screen and (min-width: 890px) {
    margin-top: -45px;
  }
`;
const Text = styled.ul`
  color: #363636;
`;
const TextDisc = styled.li`
  font-size: 14px;
  list-style-type: disc;
`;

const TextLine = styled.li`
  margin-bottom: 15px;
  font-size: 18px;
  margin-top: -14px;
`;

export default function DtestFeedback() {
  const [value, onChange] = useState(new Date());
  const [menuTab, setMenuTab] = useState(0);
  const [calendar, setCalendar] = useState(false);

  const showCalendar = () => {
    setCalendar(calendar => !calendar);
  };

  return (
    <>
      <Container>
        <CalendarBox calendar={calendar}>
          <Calendar1
            onChange={onChange}
            value={value}
            formatDay={(locale, date) => moment(date).format("DD")}
            showNeighboringMonth={false}
            formatMonthYear={(locale, date) => (
              <MonthStyle>{moment(date).format("M" + "월")}</MonthStyle>
            )}
            calendarType={"US"}
            prevLabel={<LeftArrow />}
            nextLabel={<RightArrow />}
            prev2Label={null}
            next2Label={null}
          />
        </CalendarBox>
        <Menu>
          <DateCalendarBox1>
            <DateBox>
              {moment(value).format("YYYY. MM. DD")}
              <CalendarIcon onClick={() => showCalendar()}>
                <img src={oedot_05} alt="oedot_05" />
              </CalendarIcon>
            </DateBox>
          </DateCalendarBox1>
          <Who>
            <WhoBox
              active={0 === menuTab}
              onClick={() => {
                setMenuTab(0);
              }}
            >
              교수님 피드백
            </WhoBox>
            <WhoBox
              active={1 === menuTab}
              onClick={() => {
                setMenuTab(1);
              }}
            >
              지도교사 피드백
            </WhoBox>
          </Who>
        </Menu>
        <DC2Box>
          <DateCalendarBox2>
            <DateBox>
              {moment(value).format("YYYY. MM. DD")}
              <CalendarIcon onClick={() => showCalendar()}>
                <img src={oedot_05} alt="oedot_05" />
              </CalendarIcon>
            </DateBox>
          </DateCalendarBox2>
        </DC2Box>
        <TextBox>
          <Text>
            <TextDisc />
            <TextLine> 시험에 필요한 서류 00/00 제출해주세요. </TextLine>
            <TextDisc />
            <TextLine> 시험에 필요한 서류 00/00 제출해주세요. </TextLine>
            <TextDisc />
            <TextLine> 시험에 필요한 서류 00/00 제출해주세요. </TextLine>
          </Text>
        </TextBox>
      </Container>
    </>
  );
}
