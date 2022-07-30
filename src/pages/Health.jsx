import { React, useContext, useEffect } from "react";
import { Context } from "../context/Context";
import styled from "styled-components";
import { InBodyMain, Todolist, TrainerFeedback } from "../components/";
import { getDateTimes, getInBodyData } from "../context/reducer/action";

const Health = () => {
  const { dispatch, dateTimes } = useContext(Context);
  // const id = JSON.parse(sessionStorage.getItem('userId'))

  // ! 나중에 action에서 id 세팅하면 'silver'이놈 필요없음
  // ! 나중에 위에 id const로 밑에 silver 바꾸면됩
  // dateTimes에 값이 없으니 get DateTimes를 실행해라 (datetimes값 가져오는 함수)
  //datetimes.length가 고로 0이 아니게 될테니 그때에는 getinBodyData를 실행해라
  useEffect(() => {
    if (dateTimes.length !== 0) {
      dispatch(getInBodyData("testUser", dateTimes));
    } else {
      dispatch(getDateTimes("testUser"));
    }
  }, [dateTimes]);

  return (
    <Page>
      <H2>나의 건강</H2>
      <ToDoContainer>
        <Todolist />
      </ToDoContainer>
      <InbodyContainer>
        <InBodyMain></InBodyMain>
      </InbodyContainer>
      <TrainerFeedbackContainer>
        <TrainerFeedback />
      </TrainerFeedbackContainer>
    </Page>
  );
};

export default Health;

const Page = styled.div`
  width: 100%;
  padding: 60px 24px 60px 20px;
  background-color: #ffffff;
  @media screen and (max-width: 890px) {
    padding-top: 30px;
    padding-left: 20px;
    padding-bottom: 30px;
  }
`;

const H2 = styled.h2`
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 900;
  font-size: 24px;
  line-height: 160%;
  color: #363636;

  @media screen and (max-width: 890px) {
    font-size: 20px;
    margin-bottom: 30px;
  }
`;
const ToDoContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 20px 24px 30px 24px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
  margin-bottom: 20px;
`;
const InbodyContainer = styled.div`
  width: 100%;
  padding: 20px 24px 30px 24px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
  margin-bottom: 20px;
`;
const TrainerFeedbackContainer = styled.div`
  width: 100%;
  padding: 20px 24px 30px 24px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
`;
