import React from "react";
import styled from "styled-components";
import { LogOut } from "../context/reducer/action";
import { useContext, useEffect, useState } from "react";
import { Context } from "../context/Context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import oedot_07 from "../assets/oedot_07.svg";
import oedot_06 from "../assets/oedot_06.svg";

const ProfileUser = () => {
  const { userInfo, dispatch } = useContext(Context);
  const navigate = useNavigate();

  if (!userInfo) return null;

  const [imgUrl, setImgUrl] = useState("");

  const id = JSON.parse(sessionStorage.getItem("userId"));

  const getPhotourl = async () => {
    try {
      const reponse = await axios
        .get(`/profile/20220727/testuser`)
        .then(res => {
          setImgUrl(res.data.DATA.PICTURE);
          console.log(res);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPhotourl();
  }, []);

  return (
    <>
      <Info>
        <IconBox>
          <Setting>
            <a href="" target="_blank">
              <img src={oedot_07} alt="oedot_07" />
            </a>
          </Setting>
          <LogOutLink
            onClick={e => {
              e.preventDefault();
              dispatch(LogOut());
              navigate("/");
            }}
          >
            <img src={oedot_06} alt="oedot_06" />
          </LogOutLink>
        </IconBox>

        <Contents>
          <PhotoBox>
            <UserPhoto>
              <UPhoto imgUrl={imgUrl}></UPhoto>
            </UserPhoto>
          </PhotoBox>

          <TextBox>
            <NameBox>
              <Name>
                김철수 님
                <NameLine />
              </Name>
            </NameBox>
            <InfoText>
              <InfoLine />
              <InfoTextLine>
                <InfoTitle>휴대폰</InfoTitle>
                <InfoPersonal>010-1122-3344</InfoPersonal>
              </InfoTextLine>
              <InfoTextLine>
                <InfoTitle>주소</InfoTitle>
                <InfoPersonal>서울특별시 강남구 미양빌딩 </InfoPersonal>
              </InfoTextLine>
              <InfoTextLine>
                <InfoTitle>생년월일</InfoTitle>
                <InfoPersonal>2000년 5월 5일</InfoPersonal>
              </InfoTextLine>
            </InfoText>
          </TextBox>
        </Contents>
      </Info>
    </>
  );
};

const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconBox = styled.div`
  display: flex;
  justify-content: right;
`;

const Setting = styled.a`
  padding-right: 10px;
  cursor: pointer;
`;

const LogOutLink = styled.a`
  cursor: pointer;
`;

const Contents = styled.div`
  display: flex;
  @media screen and (max-width: 670px) {
    flex-direction: column;
  }
`;

const PhotoBox = styled.div`
  display: flex;
  margin-top: -20px;

  @media screen and (max-width: 670px) {
    margin: auto;
  }
`;

const UserPhoto = styled.div`
  display: flex;
  width: 224px;
  height: 224px;
  border-radius: 100%;
  overflow: hidden;

  @media screen and (max-width: 670px) {
    width: 150px;
    height: 150px;
  }
`;

const UPhoto = styled.img`
  background: url(${props => {
      return props.imgUrl;
    }})
    no-repeat;
  width: 100%;
  background-size: cover;
`;

const TextBox = styled.div`
  flex-direction: column;
  display: flex;
  float: right;
  width: 100%;
  margin-left: 25px;
  @media screen and (max-width: 670px) {
    align-items: center;
    margin-left: 0px;
  }
`;

const NameBox = styled.div`
  display: flex;
  height: 54px;

  text-align: center;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  color: #363636;

  @media screen and (max-width: 670px) {
    width: 100%;
    margin-top: 15px;
    font-size: 24px;
  }
`;
const Name = styled.div`
  width: 125px;

  @media screen and (max-width: 670px) {
    width: 100%;
  }
`;

const NameLine = styled.hr`
  background-color: #0e0aff;
  border: none;
  border-radius: 2px;
  height: 2px;

  @media screen and (max-width: 670px) {
    visibility: hidden;
  }
`;

const InfoLine = styled.hr`
  background-color: #0e0aff;
  border: none;
  border-radius: 2px;
  height: 2px;
  visibility: hidden;
  width: 100%;

  @media screen and (max-width: 670px) {
    visibility: visible;
    margin-bottom: 20px;
  }
`;

const InfoText = styled.div`
  flex-direction: column;
  height: 100%;
  float: right;
  margin-top: 20px;
  color: #363636;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;
  display: flex;

  @media screen and (max-width: 670px) {
    visibility: visible;
    margin-top: -20px;
    font-size: 14px;
  }
`;

const InfoTextLine = styled.div`
  margin-bottom: 5px;
  display: flex;
`;

const InfoTitle = styled.div`
  min-width: 100px;
  max-width: 100px;
  color: #363636;
  display: block;
`;

const InfoPersonal = styled.span`
  color: #606060;
`;

export default ProfileUser;
