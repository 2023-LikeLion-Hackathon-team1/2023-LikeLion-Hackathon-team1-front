/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components';
import AdCard from '../components/AdCard';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import { Link } from 'react-router-dom';
import CategoryMenuBar from '../components/CategoryMenuBar';
import QuestionCard from '../components/QuestionCard';
import FloatingButton from '../components/FloatingButton';
import theme from '../theme';
import { useQuery } from 'react-query';
import { GetCateQuestion } from '../apis/Questions';
import vector1 from '../imgs/vector1.png';
import { useRecoilState } from 'recoil';
import { CategoryIdState, MemberIdState } from '../store/atom';
import { useEffect } from 'react';

interface IQuestion {
  question_id: number;
  category_id: number;
  questioner_id: number;
  question_title: string;
  question_content: string;
  question_liked_num: number;
  isLike_active: boolean;
  create_date: string;
  answer_num: number | null;
  questioner_name: string;
  is_selection: boolean;
  questioner_image: string;
}

interface IStyledLinkProps {
  isCurious: boolean;
}

const Bg = styled.div`
  background-image: url('./bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  gap: 10px;
`;

const Vector = styled.img`
  position: absolute;
  width: 70px;
  top: 130px;
  right: 0;
`;

const Block = styled.div`
  width: 100%;
  height: 50px;
`;

const StyledLink = styled(Link)<IStyledLinkProps>`
  display: inline-block;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 30px;
  margin-top: 10px;
  ${({ isCurious }) =>
    isCurious
      ? `
        background-image: linear-gradient(#ffffff, #ffffff),
          linear-gradient(to right, ${theme.palette.color.main}, ${theme.palette.color.sub});
        background-origin: border-box;
        background-clip: content-box, border-box;
      `
      : `
        border: 2px solid ${theme.palette.mono.gray4};
      `}
`;

export default function Main() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(CategoryIdState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    isLoading,
    data: questions,
    refetch,
  } = useQuery<IQuestion[]>(
    ['GetCateQuestion', GetCateQuestion, selectedCategoryId, memberId],
    () => GetCateQuestion(selectedCategoryId, memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetCateQuestion', data);
      },
    },
  );
  console.log('select', selectedCategoryId);
  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategoryId, memberId]);

  return (
    <Bg>
      <Vector src={vector1} />
      <Header />
      <Container style={{ paddingTop: '10px' }}>
        <AdCard />
      </Container>
      <CategoryMenuBar />
      <Container style={{ marginTop: '5px' }}>
        {(questions as IQuestion[])?.map((question: IQuestion) => (
          <StyledLink to={`question/${question?.question_id}`} isCurious={question?.is_selection}>
            <QuestionCard key={question?.question_id} question={question} isSummary={true} />
          </StyledLink>
        ))}
      </Container>
      <Link to={`/category/${selectedCategoryId}/write/${memberId}`}>
        <FloatingButton />
      </Link>
      {/* <PopUp funding_id={1} /> */}
      {/* <YesNoModal /> */}
      <div style={{ height: '20px' }} />
      <Block />
      <MenuBar />
    </Bg>
  );
}
