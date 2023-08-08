import { styled } from 'styled-components';
import SubHeader from '../components/SubHeader';
import MenuBar from '../components/MenuBar';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 90%;
  height: 36px;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid lightgray;
  border-radius: 100px;
  font-size: 14px;
  color: lightgray;

  ::placeholder {
    color: lightgray;
  }

  &:focus {
    outline: none;
    border-color: dodgerblue;
    color: black;
  }
`;

export default function SearchCategory() {
  return (
    <>
      <SubHeader title="카테고리" />
      <Page>
        <TitleInput placeholder="키워드를 입력하세요." />
        {/* TODO:: 여기에 질문 카드 넣기~~!! */}
      </Page>
      <MenuBar />
    </>
  );
}
