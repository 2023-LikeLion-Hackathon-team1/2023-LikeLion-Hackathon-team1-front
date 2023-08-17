import styled from 'styled-components';
import theme from '../theme';
import GoogleButton from '../auth/GoogleButton';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [showSplash, setShowSplash] = useState(true);
  const history = useHistory();
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      history.push('/first/signUp/AddName'); // Redirect to '/first/signUp' after 3 seconds
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [history]);
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
