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

const questions: IQuestion[] = [
  {
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
    is_selection: true,
  },
  {
    question_id: 2,
    category_id: 1,
    questioner_id: 1,
    questioner_name: 'jane_doe',
    questioner_image: 'https://picsum.photos/200/2',
    question_title: '리액트 vs. 뷰: 초보자에게 더 나은 것은 무엇인가요?',
    question_content:
      '웹 개발을 처음 시작하는데 초보자 친화적인 프레임워크로 리액트와 뷰 중 어떤 것을 선택해야 할까요?',
    question_liked_num: 5,
    answer_num: 7,
    create_date: '2022-05-15 15:30:45',
    isLike_active: true,
    is_selection: false,
  },
  {
    question_id: 3,
    category_id: 1,
    questioner_id: 1,
    questioner_name: 'dev_guy',
    questioner_image: 'https://picsum.photos/200/3',
    question_title: '웹사이트 성능 최적화하는 방법은 무엇인가요?',
    question_content:
      '내 웹사이트가 느리게 로딩되고 있어요. 성능을 향상시키는 방법이 있을까요? 팁이나 권장 사항이 있나요?',
    question_liked_num: 8,
    answer_num: 12,
    create_date: '2022-09-02 08:20:55',
    isLike_active: true,
    is_selection: false,
  },
  {
    question_id: 4,
    category_id: 1,
    questioner_id: 3,
    questioner_name: 'coding_master',
    questioner_image: 'https://picsum.photos/200/4',
    question_title: '고급 CSS 트릭은 어떤 게 있나요?',
    question_content: 'CSS 기술을 더욱 발전시키고 싶습니다. 잘 알려지지 않았지만 강력한 CSS 트릭을 공유해 주시겠어요?',
    question_liked_num: 7,
    answer_num: 9,
    create_date: '2022-11-20 12:05:30',
    isLike_active: false,
    is_selection: false,
  },
  {
    question_id: 5,
    category_id: 1,
    questioner_id: 3,
    questioner_name: 'design_guru',
    questioner_image: 'https://picsum.photos/200/5',
    question_title: '주목할만한 일러스트레이션을 만드는 팁은 무엇인가요?',
    question_content:
      '주목을 끌 수 있는 일러스트레이션을 만들고 싶습니다. 흥미로운 작품을 만드는 데 도움이 되는 조언이나 자료가 있나요?',
    question_liked_num: 6,
    answer_num: 4,
    create_date: '2022-07-07 17:40:20',
    isLike_active: false,
    is_selection: true,
  },
  {
    question_id: 6,
    category_id: 1,
    questioner_id: 5,
    questioner_name: 'data_whiz',
    questioner_image: 'https://picsum.photos/200/6',
    question_title: '데이터 분석을 위한 최상의 방법은 무엇인가요?',
    question_content:
      '대규모 데이터셋에 뛰어들려고 합니다. 데이터 분석이 견고하고 정확하도록 하기 위한 최상의 방법이 무엇인가요?',
    question_liked_num: 9,
    answer_num: 11,
    create_date: '2022-12-12 09:15:05',
    isLike_active: true,
    is_selection: true,
  },
  {
    question_id: 7,
    category_id: 1,
    questioner_id: 6,
    questioner_name: 'gaming_addict',
    questioner_image: 'https://picsum.photos/200/7',
    question_title: '역대 최고의 RPG 게임은 무엇인가요?',
    question_content: '롤플레잉 게임(RPG)에 큰 관심이 있습니다. 역대 최고의 RPG 게임 몇 가지를 추천해 주시겠어요?',
    question_liked_num: 8,
    answer_num: 15,
    create_date: '2022-06-30 22:55:40',
    isLike_active: false,
    is_selection: false,
  },
  {
    question_id: 8,
    category_id: 1,
    questioner_id: 9,
    questioner_name: 'travel_lover',
    questioner_image: 'https://picsum.photos/200/8',
    question_title: '남미에서 가볼만한 숨은 보석지는 어디인가요?',
    question_content: '남미 여행을 계획 중이고 비인기 여행지를 탐험하고 싶습니다. 어떤 곳을 추천해주시나요?',
    question_liked_num: 7,
    answer_num: 6,
    create_date: '2023-01-05 11:25:50',
    isLike_active: false,
    is_selection: false,
  },
  {
    question_id: 9,
    category_id: 1,
    questioner_id: 10,
    questioner_name: 'fitness_enthusiast',
    questioner_image: 'https://picsum.photos/200/9',
    question_title: '운동기구 없이 효과적인 유산소 운동은 무엇인가요?',
    question_content:
      '유산소 운동 능력을 향상시키고 싶지만 체육관에 가지 못합니다. 기구 없이 집에서 할 수 있는 효과적인 유산소 운동이 어떤 것이 있나요?',
    question_liked_num: 6,
    answer_num: 8,
    create_date: '2023-04-18 16:30:15',
    isLike_active: false,
    is_selection: false,
  },
];

interface IQuestion {
  question_id: number;
  category_id: number;
  questioner_id: number;
  questioner_name: string;
  questioner_image: string;
  question_title: string;
  question_content: string;
  question_liked_num: number;
  isLike_active: boolean;
  create_date: string;
  answer_num: number | null;
  is_selection: boolean;
}

interface IStyledLinkProps {
  isCurious: boolean;
}

const Bg = styled.div`
  /* background-image: url('./bg.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: 100vh;
  position: fixed;
  z-index: -1; */
  /* height: 100vh;
  background: linear-gradient(to top, green, white); */
  /* overflow: hidden; */
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  gap: 10px;
  /* height: 100vh; */
`;

const CardContainer = styled(Container)`
  background: linear-gradient(to top, ${theme.palette.color.green2}, white);
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
  // const {
  //   isLoading,
  //   data: questions,
  //   refetch,
  // } = useQuery<IQuestion[]>(
  //   ['GetCateQuestion', GetCateQuestion, selectedCategoryId, memberId],
  //   () => GetCateQuestion(selectedCategoryId, memberId).then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       console.log('GetCateQuestion', data);
  //     },
  //   },
  // );
  // console.log('select', selectedCategoryId);
  // useEffect(() => {
  //   refetch();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedCategoryId, memberId]);

  return (
    <>
      {/* <Bg> */}
      <Vector src={vector1} />
      <Header />
      <Container style={{ paddingTop: '10px' }}>
        <AdCard />
      </Container>
      <CategoryMenuBar />
      <CardContainer style={{ marginTop: '5px' }}>
        {questions?.map((question: IQuestion) => (
          <StyledLink to={`question/${question?.question_id}`} isCurious={question?.is_selection}>
            <QuestionCard key={question?.question_id} question={question} isSummary={true} />
          </StyledLink>
        ))}
        <Block />
      </CardContainer>
      <Link to={`/category/${selectedCategoryId}/write/${memberId}`}>
        <FloatingButton />
      </Link>
      {/* <PopUp funding_id={1} /> */}
      {/* <YesNoModal /> */}
      <div style={{ height: '20px' }} />
      {/* <Block /> */}
      {/* <div style={{ position: 'absolute', bottom: '0' }}> */}
      {/* <MenuBar /> */}
      {/* </div> */}
      {/* </Bg> */}
    </>
  );
}
