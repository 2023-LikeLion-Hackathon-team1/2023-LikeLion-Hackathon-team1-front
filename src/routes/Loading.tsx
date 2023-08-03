import styled from 'styled-components';
import theme from '../theme';

const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  max-width: 390px;
  background-color: lightgray;
`;

const Slide = styled.div`
  padding: 30px;
  border-radius: 25px 25px 0 0;
  position: absolute;
  bottom: 0;
  height: 85vh;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${theme.palette.mono.gray3};
`;

export default function Category() {
  return (
    <Page>
      <Slide>
        <Container>
          <Title>잠시만 기다려주세요!</Title>
          <SubTitle> lullu님만을 위한 질문 페이지를 보여드릴게요. </SubTitle>
        </Container>
      </Slide>
    </Page>
  );
}
