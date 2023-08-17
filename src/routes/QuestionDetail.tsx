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

  const { isLoading, data: question } = useQuery<IOneQuestion>(
    ['OneQuestion', questionIdNumber, memberId],
    () => OneQuestion(questionIdNumber, memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetAllCategory', data);
      },
    },
  );

  const questionCardForm: IQuestion = convertToIQuestion(question as IOneQuestion);

  return (
    <>
      <SubHeader title="질문하기" />
      <Question>
        <QuestionCard question={questionCardForm} isSummary={false} />
      </Question>
      <AnswerList>
        {(question?.answerList as Answer[])?.map((answer: Answer) => (
          <AnswerCard key={answer?.answer_id} answer={answer} />
        ))}
      </AnswerList>
      <AnswerText />
    </>
  );
}
