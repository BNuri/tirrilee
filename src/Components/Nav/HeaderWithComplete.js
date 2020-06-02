import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import back_button_grey from "../../assets/images/icons/back_button_grey.png";

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

const Complete = styled.span`
  font-size: 7pt;
  color: ${(props) => props.theme.main_blue};
`;

export default withRouter(({ history, handleSubmit }) => (
  <Header>
    <Img src={back_button_grey} alt="뒤로가기" onClick={history.goBack} />
    <Complete onClick={handleSubmit}>완료</Complete>
  </Header>
));
