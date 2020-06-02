import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import Header from "../Components/Nav/HeaderWithClose";
import Text from "../Components/Input/Text";
import SeasonRound from "../Components/Input/SeasonRound";
import ButtonFixed from "../Components/Input/ButtonFixed";
import img_upload_button from "../assets/images/icons/img_upload_button.png";
import ItemContext from "../contexts/ItemContext";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Main = styled.main`
  max-height: 400pt;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const InputContainer = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 7pt;
  font-weight: 700;
  margin-bottom: 5pt;
`;

const FlexContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Span = styled.span`
  display: inline-block;
  font-size: 7pt;
  margin: 4pt;
`;

const SeasonContainer = styled.div`
  display: flex;
`;

const FileInput = styled.input`
  display: none;
`;

const ImgContainer = styled.div`
  height: 98pt;
  min-width: 175.5pt;
  border-radius: 2pt;
  background-color: ${(props) => props.theme.button_lightgrey};
  background-image: url(${(props) => props.imgPath});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.div`
  height: 32pt;
  width: 32pt;
  background-image: url(${(props) => props.imgPath});
  background-size: cover;
  background-position: center;
`;

export default ({ history }) => {
  const { items, addItem } = useContext(ItemContext);
  const [form, setForm] = useState({
    name: "",
    price: "",
    season: "봄",
    file: "",
    imgPath: "",
    id: uuidv4(),
  });
  const [formFilled, setFormFilled] = useState(false);
  const updateValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const updateSeason = (e) => {
    setForm({
      ...form,
      season: e.target.innerHTML,
    });
  };
  const uploadFile = () => {
    const input = document.querySelector("#fileUpload");
    input.click();
  };
  const updateFile = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setForm({
        ...form,
        file: file,
        imgPath: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  useEffect(() => {
    if (Object.values(form).includes("")) {
      setFormFilled(false);
    } else {
      setFormFilled(true);
    }
  }, [form]);
  const handleSubmit = () => {
    addItem(form);
    history.push("/community");
  };

  return (
    <Container>
      <Header title="글 작성하기" closePath="/community" />
      <Main className="withHeaderBottomButton">
        <InputContainer>
          <Label htmlFor="name">상품명</Label>
          <Text
            type="text"
            placeholder="상품명을 입력해주세요."
            value={form.name}
            name="name"
            onChange={updateValue}
            id="name"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="price">가격</Label>
          <FlexContainer>
            <Text
              type="number"
              placeholder="상품 가격을 입력해주세요."
              value={form.price}
              name="price"
              onChange={updateValue}
              id="price"
            />
            <Span>원</Span>
          </FlexContainer>
        </InputContainer>
        <InputContainer>
          <Label>분류</Label>
          <SeasonContainer>
            <SeasonRound
              title="봄"
              colored={form.season === "봄"}
              name="season"
              onClick={updateSeason}
            />
            <SeasonRound
              title="여름"
              colored={form.season === "여름"}
              name="season"
              onClick={updateSeason}
            />
            <SeasonRound
              title="가을"
              colored={form.season === "가을"}
              name="season"
              onClick={updateSeason}
            />
            <SeasonRound
              title="겨울"
              colored={form.season === "겨울"}
              name="season"
              onClick={updateSeason}
            />
          </SeasonContainer>
        </InputContainer>
        <InputContainer>
          <Label htmlFor="img">사진첨부</Label>
          <FileInput
            id="fileUpload"
            type="file"
            accept="image/jpg,image/png,image/jpeg"
            onChange={updateFile}
          />
          <ImgContainer imgPath={form.imgPath} onClick={uploadFile}>
            <Img imgPath={form.imgPath === "" ? img_upload_button : ""} />
          </ImgContainer>
        </InputContainer>
      </Main>
      <ButtonFixed
        name="등록완료"
        colored={formFilled}
        onClick={handleSubmit}
      />
    </Container>
  );
};
