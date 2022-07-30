import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, EffectCoverflow } from "swiper";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

import carbon_close from "../assets/carbon_close.svg";

const BigSlide = ({
  count,
  i,
  setI,
  select,
  setSelect,
  modalOne,
  modalTwo,
  modalThree
}) => {
  const [modalSize, setModalSize] = useState(0);

  const check = () => {
    let x = 0;
    if (modalOne == true) {
      x = x + 1;
    }
    if (modalTwo == true) {
      x = x + 1;
    }
    if (modalThree == true) {
      x = x + 1;
    }
    setModalSize(x);
  };

  useEffect(() => {
    check();
  }, [modalOne, modalTwo, modalThree]);

  SwiperCore.use([Pagination, EffectCoverflow]);

  return (
    <>
      <SwiperContainer select={select}>
        <Close onClick={() => setSelect(false)}>
          <img src={carbon_close} alt="carbon_close" />
        </Close>
      </SwiperContainer>
      <SwiperWrap select={select} modalSize={modalSize}>
        <BigSlideStyled
          className="mySwiper"
          slidecount={9}
          initialSlide={i}
          slidesOffsetBefore={0}
          effect={"coverflow"}
          slidesPerView={3}
          spaceBetween={-300}
          centeredSlides={true}
          grabCursor={true}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          coverflowEffect={{
            slideShadows: true,
            rotate: 0,
            stretch: 0,
            depth: 800,
            modifier: 1
          }}
          observer={true}
          observeParents={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 0
            },
            680: {
              slidesPerView: 3,
              spaceBetween: -300
            },
            891: {
              slidesPerView: 3,
              spaceBetween: -300
            },
            1011: {
              slidesPerView: 3,
              spaceBetween: -370
            },
            1227: {
              slidesPerView: 3,
              spaceBetween: -385
            }
          }}
        >
          <SwiperSlideWrap>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.01</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.02</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.03</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
            <SwiperSlide>
              <SlideContent>
                <Date>2022.00.00</Date>
                <Text>
                  이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면
                  수업에 도움이됩니다. 이번 수업 진도가 변경되었습니다.
                  <br /> - 경찰 / 이준호교수 -
                </Text>
              </SlideContent>
            </SwiperSlide>
          </SwiperSlideWrap>
        </BigSlideStyled>
      </SwiperWrap>
    </>
  );
};

const SwiperContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 16px;

  position: absolute;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100%;

  display: ${props => {
    return props.select == true ? "block" : "none";
  }};
  z-index: ${props => {
    return props.select == true ? "99" : "0";
  }};
`;
const SwiperWrap = styled.div`
  position: absolute;
  transform: translate(-50%);
  left: 50%;
  right: 50%;
  z-index: 100;

  @media only screen and (min-width: 0px) and (max-width: 679px) {
    width: 85%;
  }
  @media only screen and (min-width: 680px) and (max-width: 890px) {
    width: 600px;
  }
  @media only screen and (min-width: 891px) and (max-width: 1226px) {
    width: 85%;
  }
  @media only screen and (min-width: 1227px) {
    width: 784px;
  }

  display: ${props => {
    return props.select == true ? "block" : "none";
  }};
  z-index: ${props => {
    return props.select == true ? "99" : "0";
  }};
  margin-top: ${props => {
    return props.modalSize == 1 ? "60px" : "";
  }};
  margin-top: ${props => {
    return props.modalSize == 2 ? "160px" : "";
  }};
  margin-top: ${props => {
    return props.modalSize == 3 ? "240px" : "";
  }};
`;

const SwiperSlideWrap = styled.div``;

const BigSlideStyled = styled(Swiper)`
  .swiper-wrapper {
    height: 350px;
  }

  .swiper-slide ::-webkit-scrollbar {
    display: none;
  }

  .swiper-slide {
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    background: #dadada;
    color: #363636;
    height: 315px;
    border-radius: 14px;
    padding: 30px;
    display: flex;
    filter: blur(1.3px);
    width: 80%;

    @media only screen and (min-width: 0px) and (max-width: 400px) {
      filter: blur(0);
    }

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide-active {
    background-color: #fcfcfc;
    z-index: 1;
    filter: blur(0);
  }

  .swiper-pagination {
    background: #c7c7c7;
    height: 10px;
    width: 70%;
    margin-bottom: -10px;
    margin-left: 15%;
    border-radius: 4px;
    z-index: 99;
    display: flex;
    justify-content: space-between;
  }

  .swiper-pagination-bullet {
    width: ${props => `calc(${props.slidecount} * 30px)`};
    height: 10px;
    border-radius: 4px;
    background: #c7c7c7;
  }

  .swiper-pagination-bullet-active {
    background: #ffffff;
  }
`;

const SlideContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  line-height: 30px;
  flex-direction: column;
  margin: auto;
  color: #363636;
`;

const Date = styled.div`
  position: absolute;
  top: 20px;
`;

const Text = styled.div`
  padding-top: 20px;
`;

const Close = styled.span`
  display: flex;
  position: absolute;
  right: 0;
  margin-right: 10px;
  margin-top: 10px;
`;

export default BigSlide;
