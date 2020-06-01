import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  height: 24pt;
  width: 24pt;
  border-radius: 50%;
  margin-bottom: 2pt;
  background-image: url(${(props) => props.path});
  background-size: cover;
  background-position: center;
`;

const Title = styled.span`
  font-size: 6pt;
  color: ${(props) => props.theme.text_lightgrey};
`;

export default ({ title, imgPath, link }) => (
  <Button to={link}>
    <Img path={imgPath} />
    <Title>{title}</Title>
  </Button>
);
