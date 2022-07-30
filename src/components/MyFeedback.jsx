import React, { useEffect, useRef, useState } from "react";
import styled from 'styled-components'

import {BigSlide, MiniSlide} from "../components";
import {arrow_up_for_mypage, arrow_down_for_mypage} from "../assets";

const MyFeedback = () => {

    const [modalOne, setModalOne] = useState(true);
    const [modalTwo, setModalTwo] = useState(false);
    const [modalThree, setModalThree] = useState(false);

    const [count, setCount] = useState(0);
    const [i, setI] = useState(0);
    const [select, setSelect] = useState(false);

    useEffect(()=>{
    }, [count])

return (
    <>
    <BigSlide count = {count} i= {i} setI= {setI} select={select} setSelect={setSelect} modalOne={modalOne} modalTwo={modalTwo} modalThree={modalThree} />
        <Container>
            <Title>나의 피드백</Title>
                <Box>
                    <WhoBox>
                        <Who>교수님 피드백</Who>
                        <ModalArrow onClick={() => { setModalOne(!modalOne);}}>
                        <img src={modalOne ? arrow_up_for_mypage : arrow_down_for_mypage} alt="arrow_up_down"/> 
                        </ModalArrow>
                        {modalOne ? <MiniSlide setI={setI} select={select} setSelect={setSelect} /> : null}
                    </WhoBox>

                    <WhoBox>
                        <Who>지도교사 피드백</Who>
                        <ModalArrow onClick={() => { setModalTwo(!modalTwo);}}>
                        <img src={modalTwo ? arrow_up_for_mypage : arrow_down_for_mypage} alt="arrow_up_down"/> 
                        </ModalArrow>
                        {modalTwo ? <MiniSlide setI={setI} select={select} setSelect={setSelect} /> : null}
                    </WhoBox>

                    <WhoBox>
                        <Who>트레이너 피드백</Who>
                        <ModalArrow onClick={() => { setModalThree(!modalThree);}}>
                        <img src={modalThree ? arrow_up_for_mypage : arrow_down_for_mypage} alt="arrow_up_down"/>  
                        </ModalArrow>
                        {modalThree ? <MiniSlide setI={setI} select={select} setSelect={setSelect} /> : null}
                    </WhoBox>
                </Box>
        </Container>
    </>
)}


const Container = styled.div`
    width: 100%;
`
const Title = styled.span`
    color: #363636;
    font-weight: 500;
    font-size: 18px;
`
const Box = styled.div`
    margin-top: 40px;
`
const WhoBox = styled.div`
    margin-right: 20px;
    margin-left: 5px;
    margin-bottom: 35px;
`
const Who = styled.span`
    color: #606060;
    font-size: 18px;
`
const ModalArrow = styled.span`
    float: right;
`



export default MyFeedback
