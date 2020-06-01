import React, { useState } from "react";
import styled from "styled-components";
import Header from "../Components/Nav/HeaderWithComplete";
import Navigation from "../Components/Nav/Navigation";
import { user } from "../data";

const Container = styled.div``;

const Main = styled.main``;

const ImageContainer = styled.div`
  height: 82pt;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border-bottom: 0.3pt solid ${(props) => props.theme.button_lightgrey};
`;

const Image = styled.div`
  height: 40pt;
  width: 40pt;
  border-radius: 50%;
  background-image: url(${(props) => props.imgPath});
  background-size: cover;
  background-position: center;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadButton = styled.button`
  height: 16pt;
  width: 50pt;
  border-radius: 4pt;
  font-size: 6pt;
  color: ${(props) => props.theme.main_blue};
  background-color: ${(props) => props.theme.button_lightgrey};
  border: none;
`;

const InputContainer = styled.div`
  margin: 16pt 6pt 0pt 6pt;
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  display: inline-block;
  width: 37pt;
  font-size: 7pt;
`;

const Input = styled.input`
  width: 100%;
  padding: 4pt 2pt;
  outline: 0;
  border-width: 0 0 1pt;
  border-color: ${(props) => props.theme.button_lightgrey};
  color: ${(props) => props.theme.text_grey};
`;

export default () => {
  const [form, setForm] = useState(user);
  const updateValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
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
        profilePath: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };
  const handleSubmit = () => {};

  return (
    <Container>
      <Header handleSubmit={handleSubmit} />
      <Main className="noPadding withHeaderNav">
        <ImageContainer>
          <Image imgPath={form.profilePath} />
          <FileInput
            id="fileUpload"
            type="file"
            accept="image/jpg,image/png,image/jpeg"
            onChange={updateFile}
          />
          <UploadButton onClick={uploadFile}>프로필 변경</UploadButton>
        </ImageContainer>
        <InputContainer>
          <Label htmlFor="name">이름</Label>
          <Input
            type="text"
            defaultValue={form.name}
            name="name"
            onChange={updateValue}
            id="name"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="email">이메일</Label>
          <Input
            type="text"
            defaultValue={form.email}
            name="email"
            onChange={updateValue}
            id="email"
          />
        </InputContainer>
        <InputContainer>
          <Label htmlFor="description">소개</Label>
          <Input
            type="text"
            defaultValue={form.description}
            name="description"
            onChange={updateValue}
            id="description"
          />
        </InputContainer>
      </Main>
      <Navigation />
    </Container>
  );
};
