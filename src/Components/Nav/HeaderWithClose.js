import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import chevron_left_white from "../../assets/images/icons/chevron_left_white.png";
import close_icon from "../../assets/images/icons/close_icon.png";

const Header = styled.header`
  height: 22pt;
  width: 100%;
  padding: 0 6pt;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.main_white};
  z-index: 5;
`;

const Img = styled.img`
  height: 12pt;
  width: 12pt;
`;

const Title = styled.h1`
  font-size: 8pt;
  font-weight: 700;
  color: ${(props) => props.theme.main_blue};
`;

export default withRouter(({ history, title, closePath }) => (
  <Header>
    <Img src={chevron_left_white} alt="뒤로가기" onClick={history.goBack} />
    <Title>{title}</Title>
    <Link to={closePath}>
      <Img src={close_icon} alt="등록 취소" />
    </Link>
  </Header>
));
