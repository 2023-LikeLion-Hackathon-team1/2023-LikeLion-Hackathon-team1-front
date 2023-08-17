/* eslint-disable @typescript-eslint/no-unused-vars */
import { Link } from 'react-router-dom';
import BookmarkCard from '../components/BookmarkCard';
import SubHeader from '../components/SubHeader';
import FloatingButton from '../components/FloatingButton';
import MenuBar from '../components/MenuBar';
import { useQuery } from 'react-query';
import { GetBookmarkList } from '../apis/Questions';
import { useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';
import { styled } from 'styled-components';

interface IBookmark {
  scrap_folder_id: number;
  scrap_folder_name: string;
  scrap_question_num: number;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
  gap: 10px;
`;

export default function Bookmark() {
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  const { isLoading, data: bookmarkList } = useQuery<IBookmark[]>(
    ['GetBookmarkList', GetBookmarkList],
    () => GetBookmarkList(memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetBookmarkList', data);
      },
    },
  );

  return (
    <>
      <SubHeader title="스크랩 보기" />
      <Container>
        {(bookmarkList as IBookmark[])?.map((bookmark: IBookmark) => (
          <Link to={`/bookmark/${bookmark.scrap_folder_id}`}>
            <BookmarkCard key={bookmark?.scrap_folder_id} bookmark={bookmark} />
          </Link>
        ))}
      </Container>
      <MenuBar />
    </>
  );
}
