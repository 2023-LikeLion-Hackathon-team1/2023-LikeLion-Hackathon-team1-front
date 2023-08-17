import { useParams } from 'react-router-dom';
import { GetmarksList } from '../apis/Questions';
import SubHeader from '../components/SubHeader';
import { useQuery } from 'react-query';
import { styled } from 'styled-components';
import BookmarkQuestionCard from '../components/BookmarkQuestionCard';
import MenuBar from '../components/MenuBar';

interface Iscrap {
  scrap_id: number;
  scrapFolderId: number;
  questionId: number;
  scrap_memo: string | null;
  question_info: QuestionInfo[];
}

interface QuestionInfo {
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
  is_selection: boolean | null;
  questioner_image: string;
}

interface RouteParams {
  bookmarkfoldId: string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  gap: 10px;
`;

export default function BookMarkDetail() {
  const { bookmarkfoldId } = useParams<RouteParams>();

  const scrapfoldIdNumber = parseInt(bookmarkfoldId, 10);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, data: scrapQuestionList } = useQuery<Iscrap[]>(
    ['GetmarksList', GetmarksList],
    () => GetmarksList(scrapfoldIdNumber).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetmarksList', data);
      },
    },
  );
  // GetmarksList;

  return (
    <>
      <SubHeader title="스크랩" />
      <Container>
        {(scrapQuestionList as Iscrap[])?.map((scrap: Iscrap) => (
          <BookmarkQuestionCard key={scrap?.scrap_id} scrap={scrap} />
        ))}
      </Container>
      <MenuBar />
    </>
  );
}
