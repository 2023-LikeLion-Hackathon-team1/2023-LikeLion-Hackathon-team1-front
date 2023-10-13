/* eslint-disable @typescript-eslint/no-unused-vars */
import { useParams } from 'react-router-dom';
import SubHeader from '../components/SubHeader';
import QuestionCard from '../components/QuestionCard';
import { styled } from 'styled-components';
import AnswerCard from '../components/AnswerCard';
import AnswerText from '../components/AnswerText';
import theme from '../theme';
import { useQuery } from 'react-query';
import { OneQuestion } from '../apis/Questions';
import { useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';

const OneQuestionForm: IOneQuestion = {
  question_id: 1,
  category_id: 1,
  questioner_id: 1,
  questioner_name: 'lullu',
  questioner_image: 'https://picsum.photos/200/1',
  question_title: '다들 디자인 시스템 어디서 참고하나요?',
  question_content:
    '아무리 찾아봐도.. 어디서 레퍼런스 찾기가 쉽지 않네요ㅜㅜㅜㅜ 어디서 참고하시나요? 아시는 분 알려주세요!',
  question_liked_num: 10,
  answer_num: 3,
  create_date: '2021-10-10 10:10:10',
  isLike_active: false,
  answerList: [
    {
      answer_id: 1,
      question_id: 1,
      question_sentence: '디자인 시스템 참고 자료 추천해주세요!',
      answerer_name: '김철수',
      answer_sentence: '저는 개인적으로 ABC 디자인 가이드를 추천드립니다.',
      answer_like_num: 5,
      isActive: true,
      isQuestioner_selection: false,
      isLike_active: false,
      create_date: '2021-10-11 11:11:11',
      answerer_image: 'https://picsum.photos/200/2',
    },
    {
      answer_id: 2,
      question_id: 1,
      question_sentence: '디자인 참고 자료는 어디서 보나요?',
      answerer_name: '이영희',
      answer_sentence: 'XYZ 디자인 사이트가 괜찮더라고요.',
      answer_like_num: 7,
      isActive: true,
      isQuestioner_selection: true,
      isLike_active: true,
      create_date: '2021-10-12 12:12:12',
      answerer_image: 'https://picsum.photos/200/3',
    },
    {
      answer_id: 3,
      question_id: 1,
      question_sentence: '디자인 레퍼런스 추천 부탁드려요!',
      answerer_name: '박지훈',
      answer_sentence: 'DEF 디자인 툴을 사용해보세요. 많은 정보가 있습니다.',
      answer_like_num: 3,
      isActive: false,
      isQuestioner_selection: false,
      isLike_active: false,
      create_date: '2021-10-13 13:13:13',
      answerer_image: 'https://picsum.photos/200/4',
    },
    {
      answer_id: 4,
      question_id: 1,
      question_sentence: '디자인 가이드북 추천 부탁드립니다.',
      answerer_name: '최은경',
      answer_sentence: 'GHI 디자인 포털이 최근에 인기있는 것 같아요.',
      answer_like_num: 6,
      isActive: true,
      isQuestioner_selection: false,
      isLike_active: true,
      create_date: '2021-10-14 14:14:14',
      answerer_image: 'https://picsum.photos/200/5',
    },
    {
      answer_id: 5,
      question_id: 1,
      question_sentence: '디자인 리소스 추천해주세요!',
      answerer_name: '윤다솜',
      answer_sentence: 'JKL 디자인 아카이브에 다양한 리소스가 있습니다.',
      answer_like_num: 4,
      isActive: false,
      isQuestioner_selection: true,
      isLike_active: false,
      create_date: '2021-10-15 15:15:15',
      answerer_image: 'https://picsum.photos/200/6',
    },
  ],
};

interface IOneQuestion {
  question_id: number;
  category_id: number;
  questioner_id: number;
  questioner_name: string;
  question_title: string;
  question_content: string;
  question_liked_num: number;
  isLike_active: boolean;
  create_date: string;
  answer_num: number;
  questioner_image: string;
  answerList: Answer[];
}

interface IQuestion {
  question_id: number;
  category_id: number;
  questioner_id: number;
  question_title: string;
  question_content: string;
  question_liked_num: number;
  isLike_active: boolean;
  create_date: string;
  answer_num: number;
  questioner_name: string;
  is_selection: boolean;
  questioner_image: string;
}

interface Answer {
  answer_id: number;
  question_id: number;
  question_sentence: string;
  answerer_name: string;
  answer_sentence: string;
  answer_like_num: number;
  isActive: boolean;
  isQuestioner_selection: boolean;
  isLike_active: boolean;
  create_date: string;
  answerer_image: string;
}

function convertToIQuestion(oneQuestion: IOneQuestion): IQuestion {
  return {
    question_id: oneQuestion?.question_id,
    category_id: oneQuestion?.category_id,
    questioner_id: oneQuestion?.questioner_id,
    question_title: oneQuestion?.question_title,
    question_content: oneQuestion?.question_content,
    question_liked_num: oneQuestion?.question_liked_num,
    isLike_active: oneQuestion?.isLike_active,
    create_date: oneQuestion?.create_date,
    answer_num: oneQuestion?.answer_num,
    questioner_name: oneQuestion?.questioner_name,
    is_selection: false,
    questioner_image: oneQuestion?.questioner_image,
  };
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
  const { questionId } = useParams<RouteParams>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  const questionIdNumber = parseInt(questionId, 10);

  // const { isLoading, data: question } = useQuery<IOneQuestion>(
  //   ['OneQuestion', questionIdNumber, memberId],
  //   () => OneQuestion(questionIdNumber, memberId).then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       console.log('GetAllCategory', data);
  //     },
  //     refetchInterval: 500,
  //   },
  // );

  const questionCardForm: IQuestion = convertToIQuestion(OneQuestionForm as IOneQuestion);

  return (
    <>
      <SubHeader title="질문하기" />
      <Question>
        <QuestionCard question={questionCardForm} isSummary={false} />
      </Question>
      <AnswerList>
        {(OneQuestionForm?.answerList as Answer[])?.map((answer: Answer) => (
          <AnswerCard key={answer?.answer_id} answer={answer} />
        ))}
      </AnswerList>
      <AnswerText />
    </>
  );
}
