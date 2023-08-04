import { styled } from 'styled-components';
import AdCard from '../components/AdCard';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';
import CategoryMenuBar from '../components/CategoryMenuBar';
import QuestionCard from '../components/QuestionCard';
import FloatingButton from '../components/FloatingButton';
import { Divider } from '@mui/material';

const questions: Questions[] = [
  {
    questionId: 1,
    categoryId: 1,
    userName: 'lullu',
    userImg: 'https://picsum.photos/200',
    title: '다들 디자인 시스템 어디서 참고하나요?',
    content: '아무리 찾아봐도.. 어디서 레퍼런스 찾기가 쉽지 않네요ㅜㅜㅜㅜ 어디서 참고하시나요? 아시는 분 알려주세요!',
    questionMark: 10,
    answerNum: 3,
    postTime: new Date('2023-08-04 10:10:10'),
  },
  {
    questionId: 2,
    categoryId: 1,
    userName: 'jane_doe',
    userImg: 'https://picsum.photos/201',
    title: '리액트 vs. 뷰: 초보자에게 더 나은 것은 무엇인가요?',
    content: '웹 개발을 처음 시작하는데 초보자 친화적인 프레임워크로 리액트와 뷰 중 어떤 것을 선택해야 할까요?',
    questionMark: 5,
    answerNum: 7,
    postTime: new Date('2023-08-05 01:30:45'),
  },
  {
    questionId: 3,
    categoryId: 1,
    userName: 'dev_guy',
    userImg: 'https://picsum.photos/203',
    title: '웹사이트 성능 최적화하는 방법은 무엇인가요?',
    content: '내 웹사이트가 느리게 로딩되고 있어요. 성능을 향상시키는 방법이 있을까요? 팁이나 권장 사항이 있나요?',
    questionMark: 8,
    answerNum: 12,
    postTime: new Date('2022-09-02 08:20:55'),
  },
  {
    questionId: 4,
    categoryId: 1,
    userName: 'coding_master',
    userImg: 'https://picsum.photos/204',
    title: '고급 CSS 트릭은 어떤 게 있나요?',
    content: 'CSS 기술을 더욱 발전시키고 싶습니다. 잘 알려지지 않았지만 강력한 CSS 트릭을 공유해 주시겠어요?',
    questionMark: 7,
    answerNum: 9,
    postTime: new Date('2022-11-20 12:05:30'),
  },
  {
    questionId: 5,
    categoryId: 1,
    userName: 'design_guru',
    userImg: 'https://picsum.photos/205',
    title: '주목할만한 일러스트레이션을 만드는 팁은 무엇인가요?',
    content:
      '주목을 끌 수 있는 일러스트레이션을 만들고 싶습니다. 흥미로운 작품을 만드는 데 도움이 되는 조언이나 자료가 있나요?',
    questionMark: 6,
    answerNum: 4,
    postTime: new Date('2022-07-07 17:40:20'),
  },
  {
    questionId: 6,
    categoryId: 1,
    userName: 'data_whiz',
    userImg: 'https://picsum.photos/206',
    title: '데이터 분석을 위한 최상의 방법은 무엇인가요?',
    content:
      '대규모 데이터셋에 뛰어들려고 합니다. 데이터 분석이 견고하고 정확하도록 하기 위한 최상의 방법이 무엇인가요?',
    questionMark: 9,
    answerNum: 11,
    postTime: new Date('2022-12-12 09:15:05'),
  },
  {
    questionId: 7,
    categoryId: 1,
    userName: 'gaming_addict',
    userImg: 'https://picsum.photos/207',
    title: '역대 최고의 RPG 게임은 무엇인가요?',
    content: '롤플레잉 게임(RPG)에 큰 관심이 있습니다. 역대 최고의 RPG 게임 몇 가지를 추천해 주시겠어요?',
    questionMark: 8,
    answerNum: 15,
    postTime: new Date('2022-06-30 22:55:40'),
  },
  {
    questionId: 8,
    categoryId: 1,
    userName: 'travel_lover',
    userImg: 'https://picsum.photos/208',
    title: '남미에서 가볼만한 숨은 보석지는 어디인가요?',
    content: '남미 여행을 계획 중이고 비인기 여행지를 탐험하고 싶습니다. 어떤 곳을 추천해주시나요?',
    questionMark: 7,
    answerNum: 6,
    postTime: new Date('2023-01-05 11:25:50'),
  },
  {
    questionId: 9,
    categoryId: 1,
    userName: 'fitness_enthusiast',
    userImg: 'https://picsum.photos/209',
    title: '운동기구 없이 효과적인 유산소 운동은 무엇인가요?',
    content:
      '유산소 운동 능력을 향상시키고 싶지만 체육관에 가지 못합니다. 기구 없이 집에서 할 수 있는 효과적인 유산소 운동이 어떤 것이 있나요?',
    questionMark: 6,
    answerNum: 8,
    postTime: new Date('2023-04-18 16:30:15'),
  },
];
interface Questions {
  questionId: number;
  categoryId: number;
  userName: string;
  userImg: string;
  title: string;
  content: string;
  questionMark: number;
  answerNum: number;
  postTime: Date;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

export default function Main() {
  return (
    <>
      <Header />
      <Container style={{ paddingTop: '20px' }}>
        <Link to="/category">
          <AdCard />
        </Link>
      </Container>
      <CategoryMenuBar />
      <Container>
        {questions.map((question) => (
          <Link to={`/${question.categoryId}/${question.questionId}`} style={{ margin: 0, padding: 0 }}>
            <QuestionCard question={question} isSummary={true} />
          </Link>
        ))}
      </Container>
      <FloatingButton />
      <MenuBar />
    </>
  );
}
