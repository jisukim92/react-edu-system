import moment from "moment";
import React from "react";
import styled from "styled-components";

const DtestDaily = ({ seletedDayPoint }) => {
  return (
    <Main>
      <PointComponent>
        <p className="date">
          {moment(seletedDayPoint.date).format("YYYY. MM. DD")}
        </p>
        <h2 className="subject">{seletedDayPoint.desc}</h2>
        <div className="label">
          <svg width="16" height="4">
            <rect width="16" height="4" fill="#A160FB" />
          </svg>
          내 점수
          <svg width="16" height="4">
            <rect width="16" height="4" fill="#DADADA" />
          </svg>
          상위10%
        </div>
        {seletedDayPoint.myPoint ? (
          <>
            <MyPoint
              point={seletedDayPoint?.myPoint}
            >{`${seletedDayPoint?.myPoint}점`}</MyPoint>
            <TopPoint point={seletedDayPoint?.topPoint}>
              {`${seletedDayPoint?.topPoint}점`}
            </TopPoint>
          </>
        ) : (
          <NoResult>해당하는 데이터가 없습니다</NoResult>
        )}
      </PointComponent>
      <LectureButton
        href="http://campus.kpa.co.kr/andong/html/examineeReference.html"
        target="_blank"
      >
        강의자료 다운받기
      </LectureButton>
    </Main>
  );
};

export default DtestDaily;

const PointComponent = styled.div`
  position: relative;
`;

const NoResult = styled.div`
  position: absolute;
  top: 220px;
  left: 85px;
`;

const Main = styled.div`
  margin: auto;
  width: 371px;
  height: 465px;
  text-align: center;
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  .date {
    padding-top: 50px;
    font-weight: 300;
  }
  .subject {
    padding-top: 10px;
    font-size: 20px;
    font-weight: 400;
  }
  .label {
    padding-top: 10px;
    width: 100%;
    text-align: center;
    line-height: 16px;
  }
  & > div > div {
    position: absolute;
    border-radius: 50%;
    text-align: center;
    transition: 0.7s;
  }
`;

const MyPoint = styled.div`
  color: #a160fb;
  font-size: 24px;
  font-weight: 700;
  background-color: rgba(161, 96, 251, 0.3);
  width: ${({ point }) => `calc(50px + ${point ? point : 50}px)`};
  height: ${({ point }) => `calc(50px + ${point ? point : 50}px)`};
  line-height: ${({ point }) => `calc(50px + ${point}px)`};
  right: 182px;
  top: 190px;
  transition: 0.3s;
`;
const TopPoint = styled.div`
  color: #6c6767;

  font-size: 24px;
  font-weight: 700;
  background-color: rgba(217, 217, 217, 0.4);
  width: ${({ point }) => `calc(50px + ${point ? point : 50}px)`};
  height: ${({ point }) => `calc(50px + ${point ? point : 50}px)`};
  line-height: ${({ point }) => `calc(50px + ${point}px)`};
  right: 55px;
  top: 160px;
  transition: 0.3s;
`;

const LectureButton = styled.a`
  cursor: pointer;
  display: block;
  width: 305px;
  height: 56px;
  color: #fff;
  line-height: 56px;
  text-align: center;
  background-color: #0e0aff;
  border: none;
  border-radius: 50px;
  position: absolute;
  bottom: 30px;
  left: 35px;
`;
