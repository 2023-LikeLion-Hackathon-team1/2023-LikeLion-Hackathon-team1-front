import { styled } from 'styled-components';
import SubHeader from '../components/SubHeader';
import Divider from '@mui/material/Divider';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

export default function WriteQuestion() {
  return (
    <>
      <SubHeader title="카테고리" />
      <Form>
        <Divider light style={{ width: '100%', margin: '10px 0' }} />
        <TitleInput placeholder="제목" />
        <Divider light style={{ width: '100%' }} />
        <ContentInput placeholder="궁금한 질문을 이곳에 적어보세요." style={{ height: '50vh' }} />
      </Form>
    </>
  );
}
