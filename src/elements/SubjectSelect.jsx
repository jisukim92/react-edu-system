import React, { useEffect, useRef } from "react";
import { useState } from "react";
import styled from "styled-components";
import { selectIcon } from "../assets";

const SubjectSelect = ({
  options,
  defaultValue,
  selected,
  setSelected,
  handleSeleted
}) => {
  if (options.length === 0) return;
  const [isActive, setIsActive] = useState(false);
  const selectRef = useRef(null);

  const handleSelect = option => {
    setSelected(option);
    setIsActive(false);
    handleSeleted(option);
  };

  const handleClickOutside = ({ target }) => {
    if (isActive && !selectRef.current.contains(target)) setIsActive(false);
  };

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isActive]);

  return (
    <Dropdown className="selectBox" ref={selectRef}>
      <div className="selected" onClick={() => setIsActive(!isActive)}>
        <div>{selected === "" ? defaultValue : selected}</div>
        <img src={selectIcon} alt="selectBox" />
      </div>
      {isActive && (
        <div className="content">
          {options.map(option => {
            return (
              <div
                key={option}
                onClick={e => handleSelect(option)}
                className="item"
              >
                {option}
              </div>
            );
          })}
        </div>
      )}
    </Dropdown>
  );
};

export default SubjectSelect;

const Dropdown = styled.div`
  min-width: 140px;
  width: 160px;
  height: 43px;
  margin-right: 10px;
  margin-bottom: 10px;
  background-color: #f5f5f5;
  border-radius: 16px;
  position: relative;

  border: none;
  font-size: 16px;
  font-weight: 400;
  padding-left: 17px;
  padding-right: 10px;

  .selected {
    padding: 10px 5px;
    height: 43px;
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-between;
  }

  .content {
    position: absolute;
    top: 100%;
    left: 0;
    padding: 10px;
    background-color: #f5f5f5;
    border-radius: 16px;
    font-weight: 500;
    color: #333;
    width: 100%;
    z-index: 1;
  }

  .item {
    padding: 10px;
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
      color: #0e0aff;
    }
  }
`;
