import React, { useEffect } from "react";
import styled from "styled-components";
import calendar from "../../assets/images/icons/calendar.png";

const Season = styled.div`
  height: 20pt;
  padding: 5pt 8pt;
  display: inline-block;
  position: relative;
  border: 0.5pt solid ${(props) => props.theme.border_lightgrey};
  border-radius: 10pt;
  background-color: ${(props) => props.theme.main_white};
  font-size: 7pt;
  color: ${(props) => props.theme.text_lightgrey};
  &.selected {
    color: black;
    border: 0.5pt solid ${(props) => props.theme.main_blue};
  }
`;

const Select = styled.button`
  padding: 0;
  color: inherit;
  border: none;
  background-color: ${(props) => props.theme.main_white};
  &:focus {
    min-width: 10pt;
    width: auto;
  }
`;

const Options = styled.div`
  width: 100pt;
  display: none;
  position: absolute;
  bottom: -15pt;
  color: black;
  background-color: ${(props) => props.theme.main_white};
  &.show {
    display: block;
  }
`;

const Option = styled.span`
  margin-right: 4pt;
  cursor: pointer;
`;

const Img = styled.div`
  height: 10pt;
  width: 10pt;
  float: left;
  margin-right: 4pt;
  display: inline-block;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center center;
`;

export default ({ season, setSeason }) => {
  useEffect(() => {
    const outClick = (e) => {
      if (!e.target.matches("#seasonBtn")) {
        const options = document.querySelector("#seasonOptions");
        if (options.classList.contains("show")) {
          toggleOptions();
        }
      }
    };
    window.addEventListener("click", outClick);
    return () => window.removeEventListener("click", outClick);
  }, []);

  const toggleOptions = () => {
    const options = document.querySelector("#seasonOptions");
    options.classList.toggle("show");
  };
  const toggleSelect = (bool) => {
    const select = document.querySelector("#season");
    if (bool) {
      select.classList.add("selected");
    } else {
      select.classList.remove("selected");
    }
  };
  const selectOption = (e) => {
    const text = e.currentTarget.innerText;
    setSeason(text);
    toggleOptions();
    toggleSelect(true);
  };

  return (
    <Season id="season">
      <Img icon={calendar} />
      <Select onClick={toggleOptions} id="seasonBtn">
        {season === "" ? "계절선택" : season}
      </Select>
      <Options id="seasonOptions">
        <Option onClick={selectOption}>봄</Option>
        <Option onClick={selectOption}>여름</Option>
        <Option onClick={selectOption}>가을</Option>
        <Option onClick={selectOption}>겨울</Option>
      </Options>
    </Season>
  );
};
