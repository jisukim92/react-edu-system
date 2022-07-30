import { useContext, useEffect } from "react";
import styled from "styled-components";
import { Context } from "../../context/Context";
import {
  DtestGrade,
  HealthSummary,
  MyFeedback,
  ToDoListGraph
} from "../../components/";
import { useNavigate } from "react-router-dom";
import ProfileUser from "../../components/ProfileUser";
import { getDateTimes, getInBodyData } from "../../context/reducer/action";
import { RightArrow } from "../../assets";

const Profile = () => {
  const { dispatch, dateTimes } = useContext(Context);
  const navigate = useNavigate();
  // const id = JSON.parse(sessionStorage.getItem('userId'))

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
    <Page>
      <H2>마이페이지</H2>
      <ProfileContainer>
        <ProfileUser />
      </ProfileContainer>
      <Swap>
        <MonthGradeGraphContainer>
          <Arrow
            src={RightArrow}
            onClick={() => {
              navigate("/report/daily");
            }}
          />
          <DtestGrade pageDtest={false} />
        </MonthGradeGraphContainer>
        <ToDoGraphContainer>
          <ToDoListGraph />
            <Arrow
            src={RightArrow}
            onClick={() => {
              navigate("/health");
            }}
          />
        </ToDoGraphContainer>
      </Swap>
      <InbodySummaryContainer>
        <HealthSummary>
          <DtestGrade pageDtest={false} />
        </HealthSummary>
      </InbodySummaryContainer>
      <MyFeedbackContainer>
        <MyFeedback />
      </MyFeedbackContainer>
    </Page>
  );
};

const Page = styled.div`
  width: 100%;
  padding: 60px 24px 60px 20px;
  background-color: #ffffff;
  @media screen and (max-width: 890px) {
    padding: 30px 20px 30px 20px;
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
    margin-bottom: 30px;
    font-size: 20px;
  }
`;

const ProfileContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 24px 30px 24px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
`;

const Swap = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 20px;
  @media screen and (max-width: 890px) {
    display: block;
  }
`;
const MonthGradeGraphContainer = styled.div`
  width: 50%;
  border: 1px solid #dadada;
  border-radius: 16px;
  margin-right: 20px;
  position: relative;

  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;
const Arrow = styled.img`
  cursor: pointer;
  display: block;
  position: absolute;
  top: 22px;
  right: 26px;
  z-index: 1;
`;
const ToDoGraphContainer = styled.div`
  position: relative;
  width: 50%;
  padding: 20px 24px 30px 24px;
  margin-bottom: 0;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`;
const InbodySummaryContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  padding: 20px 24px 30px 24px;
  box-sizing: border-box;
  border: 1px solid #dadada;
  border-radius: 16px;
`;
const MyFeedbackContainer = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding: 20px 34px 37px 24px;
  border: 1px solid #dadada;
  border-radius: 16px;
`;
export default Profile;
