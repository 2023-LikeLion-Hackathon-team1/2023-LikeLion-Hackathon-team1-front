import { styled } from 'styled-components';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from '../theme';
import EditSlide from './EditSlide';

interface Bookmark {
  bookmarkId: number;
  userId: number;
  title: string;
  itemNum: number;
}

const Card = styled.div`
  width: 100vw;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Num = styled.div`
  font-size: 14px;
  color: ${theme.palette.mono.gray3};
  font-weight: 500;
`;

export default function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  return (
    <>
      <Card>
        <div>
          <Title> {bookmark.title} </Title>
          <Num> {bookmark.itemNum} questions </Num>
        </div>
        {/* <MoreHorizIcon /> */}
        <EditSlide />
      </Card>
    </>
  );
}
