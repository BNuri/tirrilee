import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/Nav/Header";
import Text from "../Components/Input/Text";
import ButtonFixed from "../Components/Input/ButtonFixed";

const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const SubTitle = styled.h2`
  font-size: 8pt;
  font-weight: 500;
  margin: 0 auto;
`;

const InputContainer = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 7pt;
  font-weight: 700;
  margin-bottom: 5pt;
`;

export default () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    nickname: "",
    phone: "",
  });
  const [formFilled, setFormFilled] = useState(false);
  const updateValue = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (Object.values(form).includes("")) {
      setFormFilled(false);
    } else {
      setFormFilled(true);
    }
  }, [form]);
  const handleSubmit = () => {};

  return (
    <Container className="withHeaderBottomButton">
      <Header title="회원가입" />
      <SubTitle>가입 정보를 입력해주세요:)</SubTitle>
      <InputContainer>
        <Label htmlFor="email">이메일</Label>
        <Text
          type="text"
          placeholder="이메일을 입력해주세요."
          value={form.email}
          name="email"
          onChange={updateValue}
          id="email"
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="password">비밀번호</Label>
        <Text
          type="password"
          placeholder="숫자,영문,특수문자 포함 12자"
          value={form.password}
          name="password"
          onChange={updateValue}
          id="password"
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="nickname">닉네임</Label>
        <Text
          type="text"
          placeholder="티릴리에서 사용할 닉네임을 입력해주세요."
          value={form.nickname}
          name="nickname"
          onChange={updateValue}
          id="nickname"
        />
      </InputContainer>
      <InputContainer>
        <Label htmlFor="phone">연락처</Label>
        <Text
          type="number"
          placeholder='"-"제외, 숫자만 입력해주세요.'
          value={form.phone}
          name="phone"
          onChange={updateValue}
          id="phone"
        />
      </InputContainer>
      <ButtonFixed
        name="가입완료"
        colored={formFilled}
        onClick={handleSubmit}
      />
    </Container>
  );
};
