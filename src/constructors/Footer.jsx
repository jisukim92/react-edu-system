import { useEffect } from "react";
import styled from "styled-components";
import { footer_logo } from "../assets";

export default function Footer() {
  return (
    <Foot>
      <FooterLogo src={footer_logo} alt="NAVLOGO" />
      <Box1>
        <Ceo>대표</Ceo>
        <Name>전중훤</Name>

        <Tel>TEL</Tel>
        <PhoneNumber>054-823-9112</PhoneNumber>
      </Box1>
      <Box2>
        <Address>주소</Address>
        <AddressContent>경상북도 안동시 임하면 건동길 34</AddressContent>

        <Fax>FAX</Fax>
        <FaxNumber>054-823-7781</FaxNumber>
      </Box2>
      <Box3>
        <Corperation>법인</Corperation>
        <CorperationContent>
          <Now>에듀해시글로벌파트너스㈜ 안동지사</Now>
          <Past>(구)김재규 공무원기숙학원</Past>
        </CorperationContent>

        <Email>E-MAIL</Email>
        <EmailContent>support@eduhashglobal.com</EmailContent>
      </Box3>
      <Box4>
        <BuisnessMan>사업자번호</BuisnessMan>
        <BuisnessManNumber>463-85-01056</BuisnessManNumber>
        <Line />
        <Declaration>
          통신판매업
          <div className="secondContent">신고번호</div>
        </Declaration>
        <DeclarationContent>2021-경북안동-0002</DeclarationContent>
        <Line />
        <Registration>학원등록번호</Registration>
        <RegistrationNumber>110111-3171678</RegistrationNumber>
      </Box4>
      <Box5>
        <Copyright>
          {" "}
          © 2022. 에듀해시글로벌파트너스㈜ 안동지사. All rights reserved.
        </Copyright>
      </Box5>
    </Foot>
  );
}

const Foot = styled.footer`
  width: 100%;
  background-color: #f5f5f5;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 160%;
  @media screen and (max-width: 890px) {
    height: 379px;
  }
`;

const FooterLogo = styled.img`
  display: none;
  @media screen and (max-width: 890px) {
    display: block;
    position: absolute;
    left: 47px;
    bottom: 325px;
  }
`;

const Box1 = styled.div`
  display: flex;
  margin-top: 33px;
  margin-left: 70px;
`;
const Ceo = styled.div`
  width: 40px;
  color: #363636;
  @media screen and (max-width: 890px) {
    width: 150px;
    position: absolute;
    left: 45px;
    bottom: 286px;
    letter-spacing: 43.5px;
  }
`;
const Name = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 286px;
  }
`;
const Tel = styled.div`
  width: 55px;
  color: #363636;
  margin-left: 100px;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 75px;
    margin-left: 0px;
    left: 47px;
    bottom: 199.74px;
    letter-spacing: 19.5px;
  }
`;
const PhoneNumber = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 199.74px;
  }
`;
const Box2 = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 70px;
`;
const Address = styled.div`
  width: 40px;
  color: #363636;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 150px;
    left: 45px;
    bottom: 262.91px;
    letter-spacing: 43.5px;
  }
`;
const AddressContent = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 262.91px;
  }
`;
const Fax = styled.div`
  width: 55px;
  color: #363636;
  margin-left: 100px;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 75px;
    margin-left: 0px;
    left: 47px;
    bottom: 175.83px;
    letter-spacing: 19.5px;
  }
`;
const FaxNumber = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 175.83px;
  }
`;
const Box3 = styled.div`
  display: flex;
  margin-top: 8px;
  margin-left: 70px;
`;
const Corperation = styled.div`
  width: 40px;
  color: #363636;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 150px;
    left: 45px;
    bottom: 239px;
    letter-spacing: 43.5px;
  }
`;
const CorperationContent = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 34px;
    bottom: 10px;
  }
`;
const Now = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 86px;
    bottom: 227.74px;
  }
`;
const Past = styled.div`\
width: 175px;
color: #AAAAAA;
font-weight: 400;
@media screen and (max-width: 890px) {
  position: absolute;
  left: 86px;
  bottom: 209.66px;
}
`;
const Email = styled.div`
  width: 55px;
  color: #363636;
  margin-left: 100px;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 75px;
    margin-left: 0px;
    left: 47px;
    bottom: 153.74px;
    letter-spacing: 4.4px;
  }
`;
const EmailContent = styled.div`
  width: 175px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 153.74px;
  }
`;
const Box4 = styled.div`
  display: flex;
  margin-top: 24px;
  margin-left: 70px;
`;
const BuisnessMan = styled.div`
  width: 75px;
  color: #363636;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 47px;
    bottom: 129.83px;
    letter-spacing: 2.6px;
  }
`;
const BuisnessManNumber = styled.div`
  width: 107px;
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 129.83px;
  }
`;
const Declaration = styled.div`
  display: flex;
  width: 105px;
  color: #363636;
  margin-left: 25px;
  @media screen and (max-width: 890px) {
    display: block;
    position: absolute;
    margin-left: 0px;
    left: 47px;
    bottom: 94.23px;
    width: 75px;
    height: 31px;
    text-align: justify;
    letter-spacing: 2.6px;

    .secondContent {
      position: absolute;
      letter-spacing: 6.9px;
      bottom: 0px;
    }
  }
`;
const DeclarationContent = styled.div`
  width: 125px;
  color: #606060;
  font-weight: 400;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 103.53px;
  }
`;
const Registration = styled.div`
  width: 75px;
  color: #363636;
  margin-left: 25px;
  @media screen and (max-width: 890px) {
    position: absolute;
    margin-left: 0px;
    left: 47px;
    bottom: 73.39px;
    width: 65px;
  }
`;
const RegistrationNumber = styled.div`
  font-weight: 400;
  color: #606060;
  @media screen and (max-width: 890px) {
    position: absolute;
    left: 120px;
    bottom: 73.39px;
  }
`;
const Line = styled.div`
  width: 0px;
  height: 11px;
  border: 0.5px solid #dadada;
  margin: auto 0;
  @media screen and (max-width: 890px) {
    display: none;
  }
`;
const Box5 = styled.div`
  margin-top: 24px;
`;
const Copyright = styled.div`
  margin-left: 70px;
  color: #aaaaaa;
  font-weight: 400;
  margin-bottom: 15px;
  @media screen and (max-width: 890px) {
    position: absolute;
    width: 170px;
    margin-bottom: 0px;
    margin-left: 0;
    left: 47px;
    bottom: 30.47px;
  }
`;
