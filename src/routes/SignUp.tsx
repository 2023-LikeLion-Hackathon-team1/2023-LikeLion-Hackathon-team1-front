import styled from 'styled-components';
import theme from '../theme';
import GoogleButton from '../auth/GoogleButton';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { IsLoginState } from '../store/atom';
// import { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';

const Div = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: left;
  font-size: 40px;
  font-family: var(--font-avenir);
  overflow: hidden;
`;

const Container = styled.div`
  position: absolute;
  top: 150px;
  left: 50px;
  width: 300px;
  height: 55px;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 10px;
  color: ${theme.palette.color.main};
`;

const SubTitle = styled.div`
  font-size: 18px;
  color: ${theme.palette.mono.gray2};
  margin-bottom: 10px;
`;

const LoginButton = styled.div`
  position: absolute;
  bottom: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NotGoogleButton = styled.button`
  font-size: 14px;
  color: ${theme.palette.mono.gray2};
  margin-bottom: 10px;
  width: 300px;
  height: 50px;
  border: 1px solid ${theme.palette.color.green2};
  background-color: white;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SignUp() {
  const setLogin = useSetRecoilState(IsLoginState);
  // const [memberId, setMemberId] = useRecoilState(MemberIdState);

  const Login = () => {
    setLogin(true);
    // setMemberId(memberId);
  };

  return (
    <Div>
      <Container>
        <Title>CurioQuest</Title>
        <SubTitle> 하루 한 질문, </SubTitle>
        <SubTitle> 더 나은 업무 능력을 위한 첫걸음 </SubTitle>
      </Container>
      <LoginButton>
        {/* <GoogleButton /> */}
        <Link to="/first/signUp/addName">
          <NotGoogleButton onClick={Login}>시작하기</NotGoogleButton>
        </Link>
      </LoginButton>
    </Div>
  );
}
