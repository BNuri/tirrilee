import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import home_disabled from "../../assets/images/nav/home_disabled.png";
import home_select from "../../assets/images/nav/home_select.png";
import search_disabled from "../../assets/images/nav/search_disabled.png";
import search_select from "../../assets/images/nav/search_select.png";
import request_disabled from "../../assets/images/nav/request_disabled.png";
import community_disabled from "../../assets/images/nav/community_disabled.png";
import community_select from "../../assets/images/nav/community_select.png";
import mypage_disabled from "../../assets/images/nav/mypage_disabled.png";
import mypage_select from "../../assets/images/nav/mypage_select.png";

const Nav = styled.nav`
  height: 28pt;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.main_white};
`;

const UList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const List = styled.li`
  color: ${(props) =>
    props.now ? props.theme.main_blue : props.theme.text_lightgrey};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.div`
  height: 16pt;
  width: 16pt;
  background-image: url(${(props) => props.icon});
  background-size: cover;
  background-position: center center;
`;

const Span = styled.span`
  font-size: 5pt;
`;

export default withRouter(({ location: { pathname } }) => (
  <Nav>
    <UList>
      <List now={pathname === "/main"}>
        <StyledLink to="/main">
          <Img icon={pathname === "/main" ? home_select : home_disabled} />
          <Span>홈</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/search"}>
        <StyledLink to="/search">
          <Img
            icon={pathname === "/search" ? search_select : search_disabled}
          />
          <Span>검색</Span>
        </StyledLink>
      </List>
      <List>
        <StyledLink to="#">
          <Img icon={request_disabled} />
          <Span>액션기능</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/community"}>
        <StyledLink to="/community">
          <Img
            icon={
              pathname === "/community" ? community_select : community_disabled
            }
          />
          <Span>커뮤니티</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/mypage"}>
        <StyledLink to="/mypage">
          <Img
            icon={pathname === "/mypage" ? mypage_select : mypage_disabled}
          />
          <Span>마이페이지</Span>
        </StyledLink>
      </List>
    </UList>
  </Nav>
));
