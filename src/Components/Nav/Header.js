import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import back_button_grey from "../../assets/images/icons/back_button_grey.png";

const Header = styled.header`
  height: 22pt;
  width: 100%;
  padding: 5pt 6pt;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${(props) => props.theme.main_white};
  z-index: 5;
`;

const BackButton = styled.img`
  height: 12pt;
  width: 12pt;
`;

const Title = styled.h1`
  font-size: 8pt;
  font-weight: 700;
  margin: 0 auto;
  color: ${(props) => props.theme.main_blue};
`;

export default withRouter(({ history, title, onlyTitle = false }) => (
  <Header>
    {onlyTitle ? (
      ""
    ) : (
      <BackButton
        src={back_button_grey}
        alt="뒤로가기"
        onClick={history.goBack}
      />
    )}
    <Title>{title}</Title>
  </Header>
));
