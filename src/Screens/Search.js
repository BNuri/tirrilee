import React from "react";
import styled from "styled-components";
import Header from "../Components/Nav/Header";
import SearchInput from "../Components/Input/SearchInput";

const Container = styled.div``;

const Main = styled.main`
  margin-top: 30pt;
`;

export default () => (
  <Container>
    <Header title="검색하기" />
    <Main>
      <SearchInput></SearchInput>
    </Main>
  </Container>
);
