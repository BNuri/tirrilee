import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 20pt;
  padding: 6.5pt 10.5pt;
  margin: 3pt;
  border-radius: 10pt;
  font-size: 7pt;
  color: ${(props) =>
    props.colored ? props.theme.main_blue : props.theme.text_lightgrey};
  border: ${(props) =>
    props.colored
      ? `0.5pt solid ${props.theme.main_blue}`
      : `0.5pt solid ${props.theme.border_lightgrey}`};
  box-shadow: ${(props) =>
    props.colored ? `0px 0.5px 2px ${props.theme.main_blue}` : "none"};
`;

export default (props) => <Container {...props}>{props.title}</Container>;
