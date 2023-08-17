import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { styled } from 'styled-components';

const Div = styled.div`
  position: relative;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  text-align: left;
  font-size: 40px;
  font-family: var(--font-avenir);
`;

const Container = styled.div`
  position: absolute;
  top: 394px;
  left: 90px;
  width: 217px;
  height: 55px;
`;

const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  font-weight: 900;
  background: linear-gradient(180deg, #2ce477, rgba(44, 228, 119, 0));
  /* -webkit-background-clip: text; */
  -webkit-text-fill-color: transparent;
`;

export default function Splash() {
  const [showSplash, setShowSplash] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
      history.push('/first/signUp'); // Redirect to '/first/signUp' after 3 seconds
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [history]);

  if (showSplash) {
    return (
      <Div>
        <Container>
          <Title>CurioQuest</Title>
        </Container>
      </Div>
    );
  }

  return null; // Don't render anything once showSplash is false
}
