import { useParams } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import QuestionCard from '../components/QuestionCard';
import { styled } from 'styled-components';
import AnswerCard from '../components/AnswerCard';
import AnswerText from '../components/AnswerText';
import theme from '../theme';

// const questions: Questions[] = [
//   {
//     questionId: 1,
//     categoryId: 1,
//     userName: 'lullu',
//     userImg: 'https://picsum.photos/200',
//     title: '다들 디자인 시스템 어디서 참고하나요?',
//     content: '아무리 찾아봐도.. 어디서 레퍼런스 찾기가 쉽지 않네요ㅜㅜㅜㅜ 어디서 참고하시나요? 아시는 분 알려주세요!',
//     questionMark: 10,
//     answerNum: 3,
//     postTime: new Date('2023-08-04 10:10:10'),
//     isCurious: true,
//   },
//   {
//     questionId: 2,
//     categoryId: 1,
//     userName: 'jane_doe',
//     userImg: 'https://picsum.photos/201',
//     title: '리액트 vs. 뷰: 초보자에게 더 나은 것은 무엇인가요?',
//     content: '웹 개발을 처음 시작하는데 초보자 친화적인 프레임워크로 리액트와 뷰 중 어떤 것을 선택해야 할까요?',
//     questionMark: 5,
//     answerNum: 7,
//     postTime: new Date('2023-08-05 01:30:45'),
//     isCurious: false,
//   },
//   {
//     questionId: 3,
//     categoryId: 1,
//     userName: 'dev_guy',
//     userImg: 'https://picsum.photos/203',
//     title: '웹사이트 성능 최적화하는 방법은 무엇인가요?',
//     content: '내 웹사이트가 느리게 로딩되고 있어요. 성능을 향상시키는 방법이 있을까요? 팁이나 권장 사항이 있나요?',
//     questionMark: 8,
//     answerNum: 12,
//     postTime: new Date('2022-09-02 08:20:55'),
//     isCurious: false,
//   },
//   {
//     questionId: 4,
//     categoryId: 1,
//     userName: 'coding_master',
//     userImg: 'https://picsum.photos/204',
//     title: '고급 CSS 트릭은 어떤 게 있나요?',
//     content: 'CSS 기술을 더욱 발전시키고 싶습니다. 잘 알려지지 않았지만 강력한 CSS 트릭을 공유해 주시겠어요?',
//     questionMark: 7,
//     answerNum: 9,
//     postTime: new Date('2022-11-20 12:05:30'),
//     isCurious: true,
//   },
//   {
//     questionId: 5,
//     categoryId: 1,
//     userName: 'design_guru',
//     userImg: 'https://picsum.photos/205',
//     title: '주목할만한 일러스트레이션을 만드는 팁은 무엇인가요?',
//     content:
//       '주목을 끌 수 있는 일러스트레이션을 만들고 싶습니다. 흥미로운 작품을 만드는 데 도움이 되는 조언이나 자료가 있나요?',
//     questionMark: 6,
//     answerNum: 4,
//     postTime: new Date('2022-07-07 17:40:20'),
//     isCurious: true,
//   },
//   {
//     questionId: 6,
//     categoryId: 1,
//     userName: 'data_whiz',
//     userImg: 'https://picsum.photos/206',
//     title: '데이터 분석을 위한 최상의 방법은 무엇인가요?',
//     content:
//       '대규모 데이터셋에 뛰어들려고 합니다. 데이터 분석이 견고하고 정확하도록 하기 위한 최상의 방법이 무엇인가요?',
//     questionMark: 9,
//     answerNum: 11,
//     postTime: new Date('2022-12-12 09:15:05'),
//     isCurious: false,
//   },
//   {
//     questionId: 7,
//     categoryId: 1,
//     userName: 'gaming_addict',
//     userImg: 'https://picsum.photos/207',
//     title: '역대 최고의 RPG 게임은 무엇인가요?',
//     content: '롤플레잉 게임(RPG)에 큰 관심이 있습니다. 역대 최고의 RPG 게임 몇 가지를 추천해 주시겠어요?',
//     questionMark: 8,
//     answerNum: 15,
//     postTime: new Date('2022-06-30 22:55:40'),
//     isCurious: true,
//   },
//   {
//     questionId: 8,
//     categoryId: 1,
//     userName: 'travel_lover',
//     userImg: 'https://picsum.photos/208',
//     title: '남미에서 가볼만한 숨은 보석지는 어디인가요?',
//     content: '남미 여행을 계획 중이고 비인기 여행지를 탐험하고 싶습니다. 어떤 곳을 추천해주시나요?',
//     questionMark: 7,
//     answerNum: 6,
//     postTime: new Date('2023-01-05 11:25:50'),
//     isCurious: true,
//   },
//   {
//     questionId: 9,
//     categoryId: 1,
//     userName: 'fitness_enthusiast',
//     userImg: 'https://picsum.photos/209',
//     title: '운동기구 없이 효과적인 유산소 운동은 무엇인가요?',
//     content:
//       '유산소 운동 능력을 향상시키고 싶지만 체육관에 가지 못합니다. 기구 없이 집에서 할 수 있는 효과적인 유산소 운동이 어떤 것이 있나요?',
//     questionMark: 6,
//     answerNum: 8,
//     postTime: new Date('2023-04-18 16:30:15'),
//     isCurious: false,
//   },
// ];

const questions: IQuestion[] = [
  {
    question_id: 1,
    question_title: 'First Question',
    question_content: 'This is the first question.',
    questioner_id: 1,
    create_date: '2023-08-16T00:00:00',
    questionLikeCount: 1,
    imageUrls: [],
    userImage: null,
  },
];
interface IQuestion {
  question_id: number;
  question_title: string;
  question_content: string;
  questioner_id: number;
  create_date: string;
  questionLikeCount: number;
  imageUrls: string[];
  userImage: string | null;
}

const answers: Answers[] = [
  {
    categoryId: 1,
    questionId: 1,
    answerId: 1,
    userName: 'gaming_addict',
    userImg: 'https://picsum.photos/210',
    content: '이런거 아닐까요? 이런건 어떠세요? 추천드립니다.',
    postTime: new Date('2021-06-30 22:55:40'),
    likeNum: 5,
    isChoose: false,
  },
  {
    categoryId: 1,
    questionId: 1,
    answerId: 2,
    userName: 'user123',
    userImg: 'https://picsum.photos/211',
    content: '그럴 수도 있어요. 다만 조심하세요.',
    postTime: new Date('2022-03-15 08:30:20'),
    likeNum: 3,
    isChoose: false,
  },
  {
    categoryId: 2,
    questionId: 3,
    answerId: 3,
    userName: 'expert1',
    userImg: 'https://picsum.photos/212',
    content: '성능 최적화를 위한 방법으로...',
    postTime: new Date('2022-09-28 17:45:10'),
    likeNum: 10,
    isChoose: true,
  },
  {
    categoryId: 3,
    questionId: 4,
    answerId: 4,
    userName: 'designer007',
    userImg: 'https://picsum.photos/213',
    content: '이런 CSS 트릭을 사용해보세요...',
    postTime: new Date('2022-11-05 14:10:55'),
    likeNum: 7,
    isChoose: false,
  },
  {
    categoryId: 4,
    questionId: 5,
    answerId: 5,
    userName: 'artlover',
    userImg: 'https://picsum.photos/214',
    content: '일러스트레이션 작업을 할 때 주의할 점은...',
    postTime: new Date('2022-12-20 09:30:25'),
    likeNum: 6,
    isChoose: false,
  },
];

interface Answers {
  categoryId: number;
  questionId: number;
  answerId: number;
  userName: string;
  userImg: string;
  content: string;
  postTime: Date;
  likeNum: number;
  isChoose: boolean;
}

interface RouteParams {
  categoryId: string;
  questionId: string;
}

const Question = styled.div`
  display: flex;
  border-bottom: 1px solid ${theme.palette.mono.gray3};
`;

const AnswerList = styled.div``;

export default function QuestionDetail() {
  const { categoryId, questionId } = useParams<RouteParams>();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const categoryIdNumber = parseInt(categoryId, 10);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const questionIdNumber = parseInt(questionId, 10);

  // const { isLoading, data: categoryList } = useQuery<IQuestion[]>(
  //   ['GetAllQuestion', GetAllCategory],
  //   () => GetAllCategory().then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       console.log('GetAllCategory', data);
  //     },
  //   },
  // );

  return (
    <>
      <SubHeader title="질문하기" />
      <Question>
        <QuestionCard question={questions[0]} isSummary={false} />
      </Question>
      <AnswerList>
        {answers.map((answer) => (
          <AnswerCard key={answer.answerId} answer={answer} />
        ))}
      </AnswerList>
      <AnswerText />
    </>
  );
}
