import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/Nav/Header";
import SearchInput from "../Components/Input/SearchInput";
import Card from "../Components/Card";
import { items } from "../data";
import Navigation from "../Components/Nav/Navigation";

const Container = styled.div``;

const Main = styled.main``;

const Title = styled.h2`
  font-size: 12pt;
  font-weight: 700;
  line-height: 18pt;
  margin-bottom: 8pt;
`;

const Blue = styled.span`
  color: ${(props) => props.theme.main_blue};
`;

const ItemContainer = styled.div`
  display: grid;
  grid-gap: 12pt;
`;

export default () => {
  const [form, setForm] = useState({
    text: "",
    season: "",
  });
  const [result, setResult] = useState(items);
  useEffect(() => {
    if (form.season !== "" && form.text !== "") {
      const filteredItems = items.filter((item) => {
        if (item.name.includes(form.text) && item.season === form.season) {
          return true;
        } else {
          return false;
        }
      });
      setResult(filteredItems);
    } else if (form.season !== "") {
      const filteredItems = items.filter((item) => item.season === form.season);
      setResult(filteredItems);
    } else if (form.text !== "") {
      const filteredItems = items.filter((item) =>
        item.name.includes(form.text)
      );
      setResult(filteredItems);
    }
  }, [form]);
  return (
    <Container>
      <Header title="검색하기" />
      <Main className="withHeaderNav">
        <SearchInput form={form} setForm={setForm} />
        <Title>
          제철과일을 즐겨보세요 <Blue>({result.length}개)</Blue>
        </Title>
        <ItemContainer>
          {result.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </ItemContainer>
      </Main>
      <Navigation />
    </Container>
  );
};
