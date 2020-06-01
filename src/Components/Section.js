import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.section`
  padding-left: 6pt;
  background-color: ${(props) => props.theme.main_white};
  margin: 5pt 0;
`;

const Header = styled.header`
  padding: 12pt 6pt 12pt 0;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h3`
  font-size: 8pt;
  font-weight: 700;
`;

const More = styled(Link)`
  font-size: 6pt;
  color: ${(props) => props.theme.text_mediumgrey};
`;

export default ({ title, moreLink, children }) => (
  <Container>
    <Header>
      <Title>{title}</Title>
      <More to={moreLink}>더보기></More>
    </Header>
    {children}
  </Container>
);
