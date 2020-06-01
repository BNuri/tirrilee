import React from "react";
import styled from "styled-components";
import Article from "../Components/Article";
import Navigation from "../Components/Nav/Navigation";
import { article2 } from "../data";

const Container = styled.main``;

export default () => (
  <Container>
    <Article {...article2} />
    <Navigation />
  </Container>
);
