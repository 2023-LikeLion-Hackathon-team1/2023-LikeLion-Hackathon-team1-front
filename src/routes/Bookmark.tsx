import { Link } from 'react-router-dom';
import BookmarkCard from '../components/BookmarkCard';
import SubHeader from '../components/SubHeader';
import FloatingButton from '../components/FloatingButton';
import MenuBar from '../components/MenuBar';

const bookmarks: IBookmark[] = [
  {
    bookmarkId: 1,
    userId: 1,
    title: '프론트엔드',
    itemNum: 3,
  },
  {
    bookmarkId: 2,
    userId: 1,
    title: 'UX/UI 참고',
    itemNum: 2,
  },
  {
    bookmarkId: 3,
    userId: 1,
    title: 'IT 개발 꿀팁',
    itemNum: 8,
  },
  {
    bookmarkId: 4,
    userId: 1,
    title: '레퍼런스',
    itemNum: 5,
  },
];
interface IBookmark {
  bookmarkId: number;
  userId: number;
  title: string;
  itemNum: number;
}

export default function Bookmark() {
  return (
    <>
      <SubHeader title="스크랩 보기" />
      {bookmarks.map((bookmark) => (
        <BookmarkCard bookmark={bookmark} />
      ))}
      <Link to={`/category`}>
        <FloatingButton />
      </Link>
      <MenuBar />
    </>
  );
}
