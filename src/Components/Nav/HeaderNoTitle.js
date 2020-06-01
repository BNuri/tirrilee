import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import tirrilee_logo from "../../assets/images/tirrilee_logo.png";
import search_icon from "../../assets/images/icons/search_icon.png";

const Header = styled.header`
  height: 22pt;
  width: 100%;
  padding: 4pt 6pt;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.main_white};
  z-index: 5;
`;

const Logo = styled.img`
  height: 11pt;
  width: 35pt;
`;

const Search = styled.img`
  height: 12pg;
  width: 12pt;
`;

export default () => (
  <Header>
    <Link to="/main">
      <Logo src={tirrilee_logo} alt="로고" />
    </Link>
    <Link to="/search">
      <Search src={search_icon} alt="검색" />
    </Link>
  </Header>
);
