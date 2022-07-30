import React from "react";
import {
  BodyConditionContent,
  BodyCompositionContent,
  ObesityContent
} from "../components";

export default function InBodyTabContent({ menuTab }) {
  return [
    //* 신체상태 누르면 보여지는 부분
    <BodyConditionContent></BodyConditionContent>,

    //* 비만진단 누르면 보여지는부분
    <ObesityContent></ObesityContent>,

    //* 체성분 누르면 보여지는 부분
    <BodyCompositionContent></BodyCompositionContent>
  ][menuTab];
}
