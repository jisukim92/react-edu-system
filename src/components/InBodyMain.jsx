import { React, useState } from "react";
import styled from "styled-components";
import { InBodyTabContent } from "../components";

export default function InBodyMain() {
  const [menuTab, setMenuTab] = useState(0);

  return (
    <>
      <Title>인바디 검사 결과</Title>
      <Menu>
        <MenuButton
          active={0 === menuTab}
          onClick={() => {
            setMenuTab(0);
          }}
        >
          신체상태
        </MenuButton>
        <MenuButton
          active={1 === menuTab}
          onClick={() => {
            setMenuTab(1);
          }}
        >
          비만진단
        </MenuButton>
        <MenuButton
          active={2 === menuTab}
          onClick={() => {
            setMenuTab(2);
          }}
        >
          체성분
        </MenuButton>
      </Menu>
      <InBodyTabContent menuTab={menuTab} />
    </>
  );
}

const Title = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 160%;
  margin-bottom: 34px;
  // padding: 2% 3% 1%;
`;
const Menu = styled.div`
  width: 100%;
  margin-bottom: 34px;
  height: 36px;
  display: flex;
  padding-right: 50%;
  border-bottom: solid 1px #dadada;
  @media screen and (max-width: 890px) {
    padding-right: 20%;
    margin-bottom: 20px;
  }
`;

const MenuButton = styled.div`
  cursor: pointer;
  width: 100%;
  color: #606060;
  font-weight: 400;
  font-size: 18px;
  text-align: center;
  color: ${props => {
    if (props.active === true) {
      return "#0e0aff";
    }
  }};
  font-weight: ${props => {
    if (props.active === true) {
      return "700";
    }
  }};
  &:nth-of-type(1) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
  &:nth-of-type(2) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
  &:nth-of-type(3) {
    border-bottom: ${props => {
      if (props.active === true) {
        return "solid 4px #0e0aff";
      }
    }};
  }
`;
