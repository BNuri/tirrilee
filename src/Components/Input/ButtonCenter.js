import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import writing_white_icon from "../../assets/images/icons/writing_white_icon.png";

const Button = styled(Link)`
  height: 20pt;
  width: 70pt;
  margin: 0 auto;
  border-radius: 10pt;
  background-color: ${(props) => props.theme.main_blue};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.img`
  height: 12pt;
  width: 12pt;
  margin-right: 5pt;
`;

const Span = styled.span`
  font-size: 6pt;
  line-height: 10pt;
  color: ${(props) => props.theme.main_white};
`;

export default ({ name, to }) => (
  <Button to={to}>
    <Icon src={writing_white_icon} alt="글작성 아이콘" />
    <Span>{name}</Span>
  </Button>
);
