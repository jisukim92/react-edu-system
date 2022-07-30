import { useContext, useMemo } from "react";
import styled from "styled-components";
import MypageSection from "../../elements/MypageSection";
import Light from "../../elements/Light";
import { Context } from "../../context/Context";
import { getClass } from "../../utils/getClass";

const currentDate = new Date();
const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;

export default function Schedule() {


  return (
    <>
      <Light
        top={0}
        left={-1}
        highLightWidth={5.55}
        highLightTop={7.3}
        highLightWidth2={5.55}
        highLightTop2={7.3}
      />
      <MypageSection
        title="일정표"
        subtitle="시험 및 이벤트 일정을 확인하세요."
      >
        <Main>
       
        </Main>
      </MypageSection>
    </>
  );
}

const Main = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 80px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media screen and (max-width: 991px) {
    width: 100%;
  }
  @media screen and (max-width: 668px) {
    height: 51vh;
  }
`;
