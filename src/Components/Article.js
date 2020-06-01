import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Article = styled.article`
  height: 90pt;
  width: 100%;
  padding: 10pt;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${(props) => props.path});
  background-size: cover;
  background-position: center center;
  position: absolute;
  top: 22pt;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.h6`
  font-size: 16pt;
  font-weight: 700;
  color: ${(props) => props.theme.main_white};
  line-height: 15pt;
`;

const Button = styled(Link)`
  display: block;
  height: 16pt;
  width: 50pt;
  border-radius: 2pt;
  font-size: 6pt;
  font-weight: 500;
  color: ${(props) => props.theme.main_white};
  background-color: ${(props) => props.theme.main_blue};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ({ backImg, title, link, buttonTitle }) => (
  <Article path={backImg}>
    <Title>{title}</Title>
    <Button to={link}>{buttonTitle}</Button>
  </Article>
);
