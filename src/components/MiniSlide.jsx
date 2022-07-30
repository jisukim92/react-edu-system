import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/swiper-bundle.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";

const MiniSlide = ({ setI, select, setSelect }) => {
  const handleSlide = num => {
    console.log("slide", num);
    setSelect(true);
    setI(num);
  };

  SwiperCore.use([Pagination]);

  return (
    <StyledMiniSwiper
      breakpoints={{
        0: {
          slidesPerView: 2
        },
        680: {
          slidesPerView: 3
        }
      }}
      pagination={{ clickable: true }}
      grabCursor={true}
      spaceBetween={15}
      modules={[Pagination]}
    >
      <SwiperWrap>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다. <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
        <SwiperSlide onClick={() => setSelect(true)}>
          <Text>
            이번 수업 진도가 변경되었습니다. 11p - 20p 내용 읽어보고 오면 수업에
            도움이됩니다.
            <br /> - 경찰 / 이준호교수 -
          </Text>
        </SwiperSlide>
      </SwiperWrap>
    </StyledMiniSwiper>
  );
};

const StyledMiniSwiper = styled(Swiper)`
  height: 220px;
  width: 100%;

  .swiper-slide {
    overflow: scroll;

    ::-webkit-scrollbar {
      display: none;
    }

    border-radius: 16px;
    padding: 15px;
    height: 160px;
    background-color: #f5f5f5;

    margin-top: 15px;
    text-align: left;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.448rem;
    text-align: left;

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

  .swiper-pagination {
    background: #f5f5f5;
    height: 10px;
    width: 101%;
    margin-bottom: -10px;
    margin-left: -3px;
    display: flex;
    justify-content: space-between;
  }

  .swiper-pagination-bullet {
    width: 100px;
    height: 10px;
    border-radius: 10px;
    background: #f5f5f5;
  }

  .swiper-pagination-bullet-active {
    background: #a160fb;
    border-radius: 10px;
  }
`;
const Text = styled.div`
  margin: auto;
`;
const SwiperWrap = styled.div``;

export default MiniSlide;
