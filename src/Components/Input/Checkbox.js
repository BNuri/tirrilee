import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 6px 0px;
`;

const Checkbox = styled.input`
  display: none;
  &:checked + span {
    background-color: ${(props) => props.theme.main_blue};
    border-color: ${(props) => props.theme.main_blue};
  }
  &:checked + span:after {
    display: block;
  }
`;

const Label = styled.label`
  position: relative;
  padding-left: 15pt;
  font-size: 6pt;
  color: ${(props) => props.theme.text_grey};
  vertical-align: middle;
`;

const Check = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 10pt;
  width: 10pt;
  border: 0.5pt solid ${(props) => props.theme.border_lightgrey};
  border-radius: 1pt;
  :after {
    content: "";
    position: absolute;
    display: none;
    left: 2.5pt;
    top: 1.5pt;
    width: 2pt;
    height: 4.5pt;
    border: solid ${(props) => props.theme.main_white};
    border-width: 0 1.1pt 1.1pt 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default (props) => (
  <Container>
    <Label>
      <Checkbox type="checkbox" {...props} />
      <Check />
      {props.text}
    </Label>
  </Container>
);
