import React, { useCallback, useContext, useEffect, useState } from "react";
import axios from "axios";
import { Calendar } from "react-calendar";
import moment from "moment";
import "../css/calendar.css";
import styled from "styled-components";
import DtestDaily from "./DtestDaily";
import { Context } from "../context/Context";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/right.png";

const DtestCalendar = () => {
  const { dtestList } = useContext(Context);
  const [value, onChange] = useState(new Date());
  const [month, setMonth] = useState({ date: new Date() });
  const [dailyPoint, setDailyPoint] = useState([]);
  const [point, setPoint] = useState({});
  const [loading, setLoading] = useState(false);

  // 실제 데이터
  // const id = JSON.parse(sessionStorage.getItem("userId"));

  // 테스트 데이터
  const id = "testuser";

  const testCallback = useCallback(tests => {
    const filterTest = tests.filter(
      e => e.TEST_NUMBER.slice(0, 6) === moment(month.date).format("YYYYMM")
    );
    try {
      reducePromises(filterTest, test => {
        return axios.get(`/comparison/${test.TEST_NUMBER}/${id}`);
      }).then(results => {
        setDailyPoint(results);
        if (results.length > 0) {
          setPoint(results[0]);
        }
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  });

  const reducePromises = (array, callback) =>
    array.reduce(
      (prevPrms, currElem, index) =>
        prevPrms.then(async prevRes => {
          const currRes = await callback(currElem, index);
          const newMonthDate = {
            date: currRes.data.DATA[0].TEST_ACTUAL_DATE_YMD,
            desc: currRes.data.DATA[0].DESCRIPTION,
            myPoint: parseInt(currRes.data.DATA[0].TEST_SUBJECT_POINT),
            topPoint: currRes.data.DATA[0].TEST_SUBJECT_POINT_TOP10P
          };
          return [...prevRes, newMonthDate];
        }),
      Promise.resolve([])
    );

  // 일별 점수 표시
  const handleDailyPoint = date => {
    if (dailyPoint.length > 0) {
      const test = dailyPoint.find(
        point => point.date === moment(date).format("YYYY-MM-DD")
      );
      if (test) {
        setPoint(test);
      }
    }
  };

  // 일별 점수 출력
  const getTileContent = ({ date, view }) => {
    if (view !== "month") {
      return null;
    }

    if (dailyPoint.length > 0) {
      const test = dailyPoint.find(
        point => point.date === moment(date).format("YYYY-MM-DD")
      );
      if (test) {
        return <Point>{`${test.myPoint}점`}</Point>;
      }
    }

    return <Point>-</Point>;
  };

  const handleMonthDate = (e, move) => {
    if (!loading) {
      if (move === "prev") {
        setMonth({ date: moment(month.date).subtract(1, "months") });
      } else if (move === "next") {
        setMonth({ date: moment(month.date).add(1, "months") });
      }
      setLoading(true);
    }
  };

  useEffect(() => {
    testCallback(dtestList);
  }, []);

  useEffect(() => {
    testCallback(dtestList);
  }, [month]);

  return (
    <MonthCanlendar>
      <GradeDiv>
        <CalendarStyled
          value={value}
          minDetail="month"
          maxDetail="month"
          onClickDay={(value, event) => handleDailyPoint(value)}
          formatDay={(locale, date) => (
            <DailyStyle>{moment(date).format("DD")}</DailyStyle>
          )}
          tileContent={getTileContent}
          showNeighboringMonth={false}
          formatMonthYear={(locale, date) => (
            <MonthStyle>{moment(date).format("M" + "월")}</MonthStyle>
          )}
          calendarType={"US"}
          prevLabel={
            <LeftArrow
              className="month prev"
              onClick={e => handleMonthDate(e, "prev")}
            ></LeftArrow>
          }
          nextLabel={
            <RightArrow
              className="month next"
              onClick={e => handleMonthDate(e, "next")}
            ></RightArrow>
          }
          prev2Label={null}
          next2Label={null}
          tileClassName="tile"
        />
      </GradeDiv>
      <GradeDiv>
        <DtestDaily seletedDayPoint={point} />
      </GradeDiv>
    </MonthCanlendar>
  );
};

export default DtestCalendar;

const GradeDiv = styled.div`
  flex-grow: 1;
  width: 50%;
  height: 100%;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;

const MonthCanlendar = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #fff;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 890px) {
    width: 100%;
    flex-direction: column;
  }
`;

const CalendarStyled = styled(Calendar)`
  margin: auto;
  padding: 20px 20px 20px 20px;
  border: 0px;
  border-radius: 10px;

  .react_calendar {
    border: none;
  }

  .react-calendar__month-view__weekdays {
    color: #aaa;
  }
  .react-calendar__tile {
    height: 80px;
    width: 100px;
    padding: 0;
    &:hover {
      background-color: #fff;
    }
  }
  .react-calendar__tile > abbr {
    width: 100%;
    text-align: center;
    background-color: #f5f5f5;
  }
  .react-calendar__tile > abbr > div {
    height: 30px;
    width: 100%;
    text-align: center;
    line-height: 30px;
  }
  .tile {
    background-color: #fff;
    height: 60px;
    &:hover {
      background-color: #fff;
    }
  }
  .react-calendar__tile:enabled:hover {
    background-color: #fff;
  }

  .react-calendar__tile:enabled:focus {
    background-color: #f5f5f5;
    color: #0e0aff;
    font-size: 14px;
    font-weight: 700;

    &:hover {
      background-color: #f5f5f5;
    }
    & > abbr > div {
      color: #fff;
      background-color: #0e0aff;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      margin: auto;
      text-align: center;
      line-height: 30px;
    }
  }
  .react-calendar__tile--now {
    background-color: #f5f5f5;
    &:hover {
      background-color: #f5f5f5;
    }
    & > abbr > div {
      color: #fff;
      background-color: #16e4cc;
      border-radius: 50%;
      height: 30px;
      width: 30px;
      margin: auto;
      text-align: center;
      line-height: 30px;
    }
    & > div {
      background-color: #fff;
      font-size: 14px;
      color: #0e0aff;
      font-weight: 700;
    }
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background-color: #f5f5f5;
  }
  .react-calendar__tile--hasActive {
    background-color: #f5f5f5;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    & > abbr {
      background-color: #f5f5f5;
    }
  }
  .react-calendar__tile--active {
    color: black;
    & > abbr {
      background-color: #f5f5f5;
    }
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background-color: #f5f5f5;
    & > abbr {
      background-color: #f5f5f5;
    }
  }
  .react-calendar__navigation__label {
    font-size: 20px;
    font-weight: 700;
    &:disabled {
      background: none;
    }
  }

  .react-calendar__navigation__arrow {
    height: 1px;
    :hover {
      background: none;
    }
  }
`;

const Point = styled.div`
  height: 30px;
  width: 100%;
  padding-top: 7px;
  background-color: #fff;
`;

//#0e0aff
const DailyStyle = styled.div`
  background-color: #f5f5f5;
  margin: auto 0;
  &:focus {
    background-color: blue;
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
