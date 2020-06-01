import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 20pt;
  width: 100%;
  margin: 2px 0px;
  border-radius: 2pt;
  border: 0.5pt solid ${(props) => props.theme.main_blue};
  color: ${(props) =>
    props.colored ? props.theme.main_white : props.theme.main_blue};
  background-color: ${(props) =>
    props.colored ? props.theme.main_blue : props.theme.main_white};
  font: 6pt;
  font-weight: 700;
`;

export default ({ name, colored }) => <Button colored={colored}>{name}</Button>;
