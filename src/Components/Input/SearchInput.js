import React, { useState, useEffect } from "react";
import styled from "styled-components";
import search_icon from "../../assets/images/icons/search_icon.png";
import delete_icon from "../../assets/images/icons/delete_icon.png";
import Season from "../Input/Season";

const Form = styled.form`
  height: 66pt;
`;

const SearchContainer = styled.div`
  height: 22pt;
  margin-bottom: 8pt;
  display: flex;
  border-radius: 2pt;
  box-shadow: 1pt 1pt 3pt rgba(0, 0, 0, 0.1), -1pt -1pt 3pt rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  flex-grow: 2;
  padding-left: 6pt;
  border: none;
  &:placeholder {
    color: ${(props) => props.theme.text_lightgrey};
  }
`;

const Button = styled.button`
  border: none;
  background-color: ${(props) => props.theme.main_white};
`;

const Img = styled.div`
  height: 12pt;
  width: 12pt;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center center;
`;

export default () => {
  const [form, setForm] = useState({
    text: "",
    season: "",
  });
  const [searchIcon, setSearchIcon] = useState(true);
  const setText = (e) => {
    setForm({
      ...form,
      text: e.target.value,
    });
  };
  const setTextEmpty = (e) => {
    if (!searchIcon) {
      setForm({
        ...form,
        text: "",
      });
    }
    e.preventDefault();
  };
  const setSeason = (season) => {
    setForm({
      ...form,
      season,
    });
  };
  useEffect(() => {
    if (form.text !== "") {
      setSearchIcon(false);
    } else {
      setSearchIcon(true);
    }
  }, [form.text]);
  return (
    <Form>
      <SearchContainer>
        <Input
          type="text"
          placeholder="과일명을 입력해주세요."
          value={form.text}
          onChange={setText}
        />
        <Button onClick={setTextEmpty}>
          <Img icon={searchIcon ? search_icon : delete_icon} />
        </Button>
      </SearchContainer>
      <Season season={form.season} setSeason={setSeason} />
    </Form>
  );
};
