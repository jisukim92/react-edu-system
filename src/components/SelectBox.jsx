import styled from "styled-components";
import { selectIcon } from "../assets";

const SelectBox = props => {
  if (!props.options.length) return;
  return (
    <SubjectSelect
      key={props.defaultValue}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {props.options.map(option => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </SubjectSelect>
  );
};

export default SelectBox;

const SubjectSelect = styled.select`
  font-family: "Pretendard", "Noto Sans KR", "Roboto", "Arial", sans-serif;
  min-width: 140px;
  height: 43px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 16px;
  border: none;
  font-size: 16px;
  font-weight: 400;
  padding-left: 17px;
  padding-right: 40px;
  -webkit-appearance: none;
  appearance: none;
  -moz-appearance: none;
  background-image: url(${selectIcon});
  background-repeat: no-repeat;
  background-size: 15px 15px;
  background-position: calc(100% - 17px);
  @media screen and (max-width: 376px) {
    width: calc(70% - 24px);
    height: 43px;
    margin-right: 0;
  }
`;
