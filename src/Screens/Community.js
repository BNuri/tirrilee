import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/Nav/Header";
import Article from "../Components/Article";
import Navigation from "../Components/Nav/Navigation";
import ButtonRound from "../Components/Input/ButtonRound";
import Card from "../Components/Card";
import ButtonCenter from "../Components/Input/ButtonCenter";
import { roundButtons, items, article2 } from "../data";

const Container = styled.div``;

const Main = styled.main`
  background-color: ${(props) => props.theme.button_lightgrey};
`;

const ButtonRoundContainer = styled.section`
  height: 44pt;
  width: 100%;
  padding: 6pt 16pt;
  margin: 5pt 0;
  background-color: ${(props) => props.theme.main_white};
  display: grid;
  grid-template-columns: repeat(10, 36pt);
  grid-gap: 5pt;
  overflow-x: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TapContainer = styled.section`
  background-color: ${(props) => props.theme.main_white};
  padding-bottom: 28pt;
`;

const Taps = styled.div`
  height: 27pt;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.button_lightgrey};
`;

const Tap = styled.span`
  display: table-cell;
  height: 27pt;
  width: 50pt;
  border-bottom: ${(props) =>
    props.now ? `1px solid ${props.theme.main_blue}` : "none"};
  font-size: 7pt;
  font-weight: ${(props) => (props.now ? "500" : "400")};
  color: ${(props) =>
    props.now ? props.theme.main_blue : props.theme.text_lightgrey};
  line-height: 15pt;
  text-align: center;
  vertical-align: middle;
`;

const CardContainer = styled.div`
  padding: 12pt 6pt;
  display: grid;
  grid-template-columns: repeat(auto-fill, 85pt);
  justify-content: space-evenly;
  row-gap: 12pt;
`;

export default () => {
  const [tab, setTab] = useState(1);
  const [result, setResult] = useState([]);
  const updateTap = (e) => {
    const newTab = e.currentTarget.dataset.tap;
    setTab(parseInt(newTab));
  };
  useEffect(() => {
    const newResult = items.slice(tab);
    setResult(newResult);
  }, [tab]);
  return (
    <Container>
      <Header title="커뮤니티" />
      <Main className="noPadding withHeaderNav">
        <Article {...article2} />
        <ButtonRoundContainer>
          {roundButtons.map((button) => (
            <ButtonRound key={button.title} {...button} />
          ))}
        </ButtonRoundContainer>
        <TapContainer>
          <Taps>
            <Tap now={tab === 1} onClick={updateTap} data-tap={1}>
              탭1
            </Tap>
            <Tap now={tab === 2} onClick={updateTap} data-tap={2}>
              탭2
            </Tap>
            <Tap now={tab === 3} onClick={updateTap} data-tap={3}>
              탭3
            </Tap>
          </Taps>
          <CardContainer>
            {result.map((item) => (
              <Card key={item.id} size={50} {...item} />
            ))}
          </CardContainer>
          <ButtonCenter name="글 작성하기" to={"/community/write"} />
        </TapContainer>
      </Main>
      <Navigation />
    </Container>
  );
};
