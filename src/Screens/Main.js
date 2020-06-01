import React from "react";
import styled from "styled-components";
import HeaderNoTitle from "../Components/Nav/HeaderNoTitle";
import Navigation from "../Components/Nav/Navigation";
import { article1, items } from "../data";
import Article from "../Components/Article";
import Section from "../Components/Section";
import Card from "../Components/Card";

const Container = styled.div``;

const Main = styled.main`
  background-color: ${(props) => props.theme.button_lightgrey};
`;

const GridMContainer = styled.div`
  padding-bottom: 12pt;
  display: grid;
  grid-template-columns: repeat(10, 144.5pt);
  grid-gap: 5pt;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TableContainer = styled.table`
  width: 100%;
  font-size: 7pt;
  font-weight: 500;
`;

const Tr = styled.tr`
  &:not(:first-child) {
    border-top: 0.3pt solid ${(props) => props.theme.border_lightgrey};
  }
`;

const Category = styled.td`
  width: 20%;
  padding: 8pt 0;
  color: ${(props) => props.theme.main_blue};
`;

const Title = styled.td`
  width: 80%;
  padding: 8pt 0;
  color: ${(props) => props.theme.text_mediumgrey};
`;

const GridSContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 85pt);
  grid-gap: 12pt 5pt;
`;

export default () => (
  <Container>
    <HeaderNoTitle />
    <Main className="noPadding withHeaderNav">
      <Article {...article1} />
      <Section title="카드M_Section" moreLink="/main">
        <GridMContainer>
          {items.map((item) => (
            <Card key={item.id + "m"} size={75} {...item} />
          ))}
        </GridMContainer>
      </Section>
      <Section title="게시판_Section" moreLink="/main">
        <TableContainer>
          <tbody>
            {items.map((item) => (
              <Tr key={item.id + "t"}>
                <Category>{item.season}</Category>
                <Title>{item.name}</Title>
              </Tr>
            ))}
          </tbody>
        </TableContainer>
      </Section>
      <Section title="카드S_Section" moreLink="/main">
        <GridSContainer>
          {items.map((item) => (
            <Card key={item.id} size={50} {...item} />
          ))}
        </GridSContainer>
      </Section>
    </Main>
    <Navigation />
  </Container>
);
