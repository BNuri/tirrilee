import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "../Components/Nav/Header";
import Navigation from "../Components/Nav/Navigation";
import edit_icon from "../assets/images/icons/edit_icon.png";
import like_icon from "../assets/images/icons/like_icon.png";
import writing_icon from "../assets/images/icons/writing_icon.png";
import cart_icon from "../assets/images/icons/cart_icon.png";
import chevron_right_gray from "../assets/images/icons/chevron_right_gray.png";
import { user } from "../data";

const Container = styled.div``;

const Main = styled.main`
  background-color: ${(props) => props.theme.button_lightgrey};
  color: ${(props) => props.theme.text_brown};
`;

const MyContainer = styled.section`
  height: 112pt;
  width: 100%;
  margin-bottom: 5pt;
  background-color: ${(props) => props.theme.main_white};
`;

const Profile = styled.div`
  padding: 12pt 8pt 14pt 8pt;
  display: flex;
  align-items: flex-start;
  border-bottom: 0.3pt solid ${(props) => props.theme.button_lightgrey};
`;

const ProfileImg = styled.div`
  height: 40pt;
  width: 40pt;
  border-radius: 50%;
  background-image: url(${(props) => props.imgPath});
  background-size: cover;
  background-position: center;
`;

const ProfileInfo = styled.div`
  margin-left: 10pt;
`;

const Name = styled.h2`
  font-size: 10pt;
  font-weight: 700;
  margin-bottom: 6pt;
`;

const Desc = styled.span`
  color: ${(props) => props.theme.text_mediumgrey};
  font-size: 7pt;
  line-height: 11pt;
`;

const MyUl = styled.ul`
  height: 46pt;
  display: flex;
`;

const MyLi = styled.li`
  width: 100%;
  margin: 3pt;
  &:not(:first-child) {
    border-left: 0.3pt solid ${(props) => props.theme.button_lightgrey};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  span {
    font-size: 7pt;
    font-weight: 700;
    &:not(:first-child) {
      font-size: 8pt;
      color: ${(props) => props.theme.main_blue};
    }
  }
`;

const ConfigContainer = styled.ul`
  background-color: ${(props) => props.theme.main_white};
`;

const Config = styled.li`
  height: 32pt;
  display: flex;
  align-items: center;
  font-size: 8pt;
  &:not(:first-child) {
    border-top: 0.3pt solid ${(props) => props.theme.button_lightgrey};
  }
`;

const IconM = styled.img`
  heigth: 16pt;
  width: 16pt;
  margin-right: 8pt;
  margin-left: 6pt;
`;

const IconS = styled.img`
  height: 12pt;
  width: 12pt;
  position: absolute;
  right: 6pt;
`;

export default () => (
  <Container>
    <Header title="마이 페이지" onlyTitle={true} />
    <Main className="noPadding withHeaderNav">
      <MyContainer>
        <Profile>
          <ProfileImg imgPath={user.profilePath} />
          <ProfileInfo>
            <Name>{user.name}</Name>
            <Desc>{user.description}</Desc>
          </ProfileInfo>
          <Link to="/mypage/edit">
            <IconS src={edit_icon} />
          </Link>
        </Profile>

        <MyUl>
          <MyLi>
            <span>구매</span>
            <span>{user.sellCnt}</span>
          </MyLi>
          <MyLi>
            <span>판매</span>
            <span>{user.buyCnt}</span>
          </MyLi>
          <MyLi>
            <span>성향</span>
            <span>{user.season}</span>
          </MyLi>
        </MyUl>
      </MyContainer>
      <ConfigContainer>
        <Config>
          <IconM src={like_icon} />
          <span>좋아요 목록</span>
          <IconS src={chevron_right_gray} />
        </Config>
        <Config>
          <IconM src={writing_icon} />
          <span>내가 작성한 글</span>
          <IconS src={chevron_right_gray} />
        </Config>
        <Config>
          <IconM src={cart_icon} />
          <span>주문배송조회</span>
          <IconS src={chevron_right_gray} />
        </Config>
      </ConfigContainer>
    </Main>
    <Navigation />
  </Container>
);
