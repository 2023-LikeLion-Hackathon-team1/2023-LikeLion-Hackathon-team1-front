// import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const addCardContent = {
  title: '쿼리 사용설명서',
  description: '쿼리가 처음이신가요? 사용 방법을 알려드릴게요:)',
};

const Card = styled.div`
  overflow-x: hidden;
  width: 90%;
  min-width: 350px;
  height: 130px;
  border-radius: 30px;
  padding: 20px;
  /* background-color: white; */
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Desc = styled.div`
  font-size: 13px;
`;

export default function AdCard() {
  return (
    <Card>
      <Title> {addCardContent.title} </Title>
      <Desc> {addCardContent.description} </Desc>
    </Card>
  );
}
