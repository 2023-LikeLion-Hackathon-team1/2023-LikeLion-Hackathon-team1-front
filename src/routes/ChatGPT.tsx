/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components';
import theme from '../theme';
import GPTCard from '../components/GPTCard';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CategoryGPTIdState, MemberIdState, gptList, postContent, postTitle } from '../store/atom';
import Loading from './Loading';
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
  align-items: flex-start;
  background-color: white;
`;

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
  color: ${theme.palette.color.main};
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${theme.palette.mono.gray3};
`;

const CateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 30px;
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

interface Igpt {
  num: number;
  name: string;
}

export default function ChatGPT() {
  const [gptCateList, setGptCateList] = useRecoilState(gptList);
  const [selectGPTcategory, setSelectGPTcategory] = useRecoilState(CategoryGPTIdState);
  const [memberId, setMemberId] = useRecoilState(MemberIdState);
  const [atomTitle, setAtomTitle] = useRecoilState(postTitle);
  const [atomContent, setAtomContent] = useRecoilState(postContent);

  console.log(gptCateList);
  const handlePost = async () => {
    const response = await axios
      .post(`${process.env.REACT_APP_BASE_URL}/questions/${selectGPTcategory}/${memberId}`, {
        questionTitle: atomTitle,
        questionContent: atomContent,
      })
      .then((response) => console.log('log', response));

    setGptCateList(null);
  };

  //   const submitQuestion = async () => {
  //     // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //     // const response = await axios
  //     //   .post(`${process.env.REACT_APP_BASE_URL}/questions/${selectedCategoryId}/${memberId}`, {
  //     //     // /questions/{category_id}/{questioner_member_id}
  //     //     questionTitle: title,
  //     //     questionContent: content,
  //     //     // 여기에 필요한 다른 데이터도 추가 가능
  //     //   })
  //     //   .then((response) => console.log(response.data));

  //     // /api/v1/chat-gpt
  //     console.log('submit!');
  //     // const response = await axios
  //     //   .post(`${process.env.REACT_APP_BASE_URL}/api/v1/chat-gpt}`, {
  //     //     // /questions/{category_id}/{questioner_member_id}
  //     //     question: content,
  //     //     // 여기에 필요한 다른 데이터도 추가 가능
  //     //   })
  //     //   .then((response) => console.log('log', response));

  //     console.log('home?');
  //     // return response;
  //   };

  return (
    <>
      <Page>
        <Slide>
          <Container>
            <Title>카테고리를 자동으로 추천해드려요.</Title>
            <SubTitle> 여러분의 관심사를 이해하고, 맞춤형 콘텐츠를 제공하기 위한 것입니다. </SubTitle>
            <CateContainer>
              {gptCateList === null ? (
                <></> //<Loading /> // 로딩 상태를 표시할 컴포넌트를 넣어주세요
              ) : (
                (gptCateList as Igpt[])?.map((gpt: Igpt) => <GPTCard key={gpt?.num} gptCategory={gpt} />)
              )}
            </CateContainer>

            <Result>
              <Link to="/">
                <SelectButton onClick={handlePost}>등록</SelectButton>
              </Link>
            </Result>
          </Container>
        </Slide>
      </Page>
    </>
  );
}
