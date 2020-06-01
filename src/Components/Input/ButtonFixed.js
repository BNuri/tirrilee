import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 24pt;
  width: 100%;
  color: ${(props) =>
    props.colored ? props.theme.main_white : props.theme.text_lightgrey};
  font-size: 7pt;
  font-weight: 500;
  line-height: 11.5pt;
  background-color: ${(props) =>
    props.colored ? props.theme.main_blue : props.theme.button_lightgrey};
  position: fixed;
  bottom: 0;
  left: 0;
`;

export default ({ name, colored }) => <Button colored={colored}>{name}</Button>;
