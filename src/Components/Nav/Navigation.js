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
  padding: 2px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${(props) => props.theme.main_white};
  box-shadow: 0pt -1pt 3pt ${(props) => props.theme.border_lightgrey};
  z-index: 10;
`;

const UList = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

const List = styled.li`
  color: ${(props) =>
    props.now ? props.theme.main_blue : props.theme.text_lightgrey};
  font-weight: ${(props) => (props.now ? "700" : "400")};
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  height: 16pt;
  width: 16pt;
`;

const Span = styled.span`
  font-size: 5pt;
  line-height: 6pt;
`;

export default withRouter(({ location: { pathname } }) => (
  <Nav>
    <UList>
      <List now={pathname === "/main"}>
        <StyledLink to="/main">
          <Img
            src={pathname === "/main" ? home_select : home_disabled}
            alt="홈"
          />
          <Span>홈</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/search"}>
        <StyledLink to="/search">
          <Img
            src={pathname === "/search" ? search_select : search_disabled}
            alt="검색"
          />
          <Span>검색</Span>
        </StyledLink>
      </List>
      <List>
        <StyledLink to="#">
          <Img src={request_disabled} alt="액션기능" />
          <Span>액션기능</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/community"}>
        <StyledLink to="/community">
          <Img
            src={
              pathname === "/community" ? community_select : community_disabled
            }
            alt="커뮤니티"
          />
          <Span>커뮤니티</Span>
        </StyledLink>
      </List>
      <List now={pathname === "/mypage"}>
        <StyledLink to="/mypage">
          <Img
            src={pathname === "/mypage" ? mypage_select : mypage_disabled}
            alt="마이페이지"
          />
          <Span>마이페이지</Span>
        </StyledLink>
      </List>
    </UList>
  </Nav>
));
