import { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';
import axios from 'axios';

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
  overflow: hidden;
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
  background-color: white;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${theme.palette.color.main};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
`;

const Input = styled.input`
  padding: 8px;
  border: none;
  border-radius: 8px;
  width: 100%;
`;

const Result = styled.div`
  margin-top: 30px;
`;

const SelectButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 50px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${theme.palette.color.green2};
  color: white;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

export default function AddName() {
  const [name, setName] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.patch(`${process.env.REACT_APP_BASE_URL}/members/${memberId}/update-name`, {
        newName: name,
      });

      if (response.status !== 200) {
        throw new Error('API request failed');
      }

      console.log('Name submitted:', name);

      // Add your next steps here
      // For example:
      // updateLocalState(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      // This block will run regardless of success or failure
      // You can perform any cleanup or final actions here
    }
  };

  return (
    <Page>
      <Slide>
        <Container>
          <Title>만나서 반가워요 :) </Title>
          <Title> 어떻게 불러드리면 될까요?</Title>
          <Form onSubmit={handleSubmit}>
            <Input
              type="text"
              placeholder="5글자 이내로 입력해주세요."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form>
          <Result>
            <Link to="/first/signUp/addName/category">
              <SelectButton>다음</SelectButton>
            </Link>
          </Result>
        </Container>
      </Slide>
    </Page>
  );
}
