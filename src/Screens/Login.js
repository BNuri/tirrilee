import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Text from "../Components/Input/Text";
import Checkbox from "../Components/Input/Checkbox";
import Button from "../Components/Input/Button";
import tirrilee_logo from "../assets/images/tirrilee_logo.png";

const Container = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.img`
  height: 30pt;
  width: 90pt;
  margin: 0 auto 16pt auto;
`;

const ButtonContainer = styled.div`
  margin-top: 26pt;
`;

const AContainer = styled.div`
  margin: 10pt auto;
  color: ${(props) => props.theme.text_lightgrey};
`;

const A = styled(Link)`
  font-size: 6pt;
  margin-right: 5pt;
  &:not(:first-child):before {
    content: "|";
    margin-right: 5pt;
  }
`;

const TermContainer = styled.div`
  padding: 0 25pt;
  margin: 0 auto;
`;

const Term = styled.span`
  font-size: 5.5pt;
  color: ${(props) => props.theme.text_lightgrey};
  line-height: 7.5pt;
`;

const TermColored = styled(Link)`
  color: ${(props) => props.theme.main_blue};
`;

export default () => {
  const [form, setForm] = useState({
    id: "",
    password: "",
    stayLogin: false,
  });
  const setText = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const setCheck = () => {
    setForm({
      ...form,
      stayLogin: !form.stayLogin,
    });
  };
  const handleSubmit = () => {};
  return (
    <Container>
      <Logo src={tirrilee_logo} alt="티릴리 로고" />
      <Text
        placeholder="아이디  메일주소"
        type="text"
        name="id"
        value={form.id}
        onChange={setText}
      />
      <Text
        placeholder="비밀번호"
        type="password"
        name="password"
        value={form.password}
        onChange={setText}
      />
      <Checkbox
        text="로그인 상태 유지하기"
        checked={form.stayLogin}
        onChange={setCheck}
      />
      <ButtonContainer>
        <Button
          type="submit"
          name="로그인"
          colored={true}
          onClick={handleSubmit}
        />
        <Link to="/join">
          <Button name="회원가입" colored={false} />
        </Link>
      </ButtonContainer>
      <AContainer>
        <A to="#">아이디 찾기</A>
        <A to="#">비밀번호 찾기</A>
      </AContainer>
      <TermContainer>
        <Term>
          회원가입 없이 카카오톡 계정만으로 바로 이용 가능합니다.
          <br />
          로그인 시,{" "}
          <TermColored to="#">이용약관 및 개인정보처리방침 동의</TermColored>로
          간주됩니다.
        </Term>
      </TermContainer>
    </Container>
  );
};
