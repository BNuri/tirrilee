import React from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 22pt;
  width: 100%;
  padding: 0px 6pt;
  margin: 2px 0px;
  border: 0.5pt solid ${(props) => props.theme.border_lightgrey};
  border-radius: 2pt;
  color: ${(props) => props.theme.main_lightgrey};
  font-size: 7pt;
`;

export default (props) => <Input {...props} />;
