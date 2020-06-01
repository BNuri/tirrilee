import React from "react";
import styled from "styled-components";
import heart_disabled from "../assets/images/icons/heart_disabled_line_white.png";
import star from "../assets/images/icons/star_fill.png";

const Card = styled.section`
  height: ${(props) =>
    props.size === 75 ? "118.5pt" : props.size === 50 ? "106.5pt" : "138.5pt"};
  width: ${(props) =>
    props.size === 75 ? "144.5pt" : props.size === 50 ? "85pt" : "175.7pt"};
  position: relative;
  border-radius: 2pt;
  background-color: ${(props) => props.theme.main_white};
  > div:nth-child(2) {
    height: ${(props) =>
      props.size === 75 ? "82.5pt" : props.size === 50 ? "60pt" : "100pt"};
  }
  > div:nth-child(3) {
    height: ${(props) =>
      props.size === 75 ? "36pt" : props.size === 50 ? " 46.5pt" : "38.5pt"};
  }
  h3,
  h4 {
    font-size: ${(props) =>
      props.size === 75 ? "8pt" : props.size === 50 ? "7pt" : "9pt"};
  }
`;

const Like = styled.img`
  height: 12pt;
  width: 12pt;
  position: absolute;
  top: 4pt;
  right: 4pt;
  z-index: 1;
`;

const Img = styled.div`
  width: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 2pt 2pt 0 0;
`;

const Info = styled.div`
  width: 100%;
  padding: 5pt 6pt;
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 0 0 2pt 2pt;
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.main_white};
  box-shadow: 1pt 1pt 3pt ${(props) => props.theme.border_lightgrey},
    -1pt 0pt 3pt ${(props) => props.theme.border_lightgrey};
`;

const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${(props) => (props.size === 50 ? "flex-start" : "center")};
  &:first-child {
    span {
      line-height: ${(props) => (props.size === 50 ? 0 : "11.5pt")};
    }
  }
  &:nth-child(2) {
    align-items: flex-end;
    justify-content: ${(props) =>
      props.size === 50 ? "space-between" : "center"};
  }
`;

const Title = styled.h3`
  line-height: 15pt;
  font-weight: 500;
`;

const MoreInfo = styled.span``;

const Span = styled.span`
  font-size: 6pt;
  color: ${(props) => props.theme.text_mediumgrey};
  line-height: 11.5pt;
`;

const Star = styled.img`
  height: 6pt;
  width: 6pt;
  margin-left: 3pt;
  margin-right: 2pt;
`;

const Price = styled.h4`
  line-height: 15pt;
  color: ${(props) => props.theme.main_blue};
  font-weight: 700;
`;

export default ({ size, name, price, season, imgPath, rating, seller, id }) => (
  <Card size={size}>
    <Like src={heart_disabled} alt="좋아요" />
    <Img src={imgPath} />
    <Info>
      <InfoColumn size={size}>
        <Title>{name}</Title>
        <MoreInfo>
          <Span>{season}</Span>
          <Star src={star} />
          <Span>{rating}점</Span>
        </MoreInfo>
      </InfoColumn>
      <InfoColumn size={size}>
        <Span>{seller}</Span>
        <Price>{price}원</Price>
      </InfoColumn>
    </Info>
  </Card>
);
