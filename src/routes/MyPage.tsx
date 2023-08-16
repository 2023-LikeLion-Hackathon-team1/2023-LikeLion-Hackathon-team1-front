import { FunctionComponent } from 'react';
import styled from 'styled-components';
import SubHeader from '../components/SubHeader';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function MyPage() {
  return (
    <>
      <SubHeader title="마이페이지" />
      <Page>
        {/* <TitleInput placeholder="키워드를 입력하세요." /> */}
        {/* TODO:: 여기에 질문 카드 넣기~~!! */}
      </Page>
    </>
  );
}
