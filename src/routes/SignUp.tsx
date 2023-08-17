import styled from 'styled-components';
import theme from '../theme';
import GoogleButton from '../auth/GoogleButton';

const Div = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 844px;
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

export default function SignUp() {
  return (
    <Div>
      <Container>
        <Title>CurioQuest</Title>
        <SubTitle> 하루 한 질문, </SubTitle>
        <SubTitle> 더 나은 업무 능력을 위한 첫걸음 </SubTitle>
      </Container>
      <LoginButton>
        <GoogleButton />
      </LoginButton>
    </Div>
  );
}
