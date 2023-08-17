import { styled } from 'styled-components';
// import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import theme from '../theme';
import EditSlide from './EditSlide';
import { Link } from 'react-router-dom';

interface IBookmark {
  scrap_folder_id: number;
  scrap_folder_name: string;
  scrap_question_num: number;
}

const Card = styled.div`
  width: 90vw;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border: 1px solid ${theme.palette.mono.gray4};
  border-radius: 10px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.1);
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

export default function BookmarkCard({ bookmark }: { bookmark: IBookmark }) {
  return (
    <>
      <Card>
        <Link to={`/bookmark/${bookmark.scrap_folder_id}`}>
          <div style={{ width: '70vw' }}>
            <Title> {bookmark?.scrap_folder_name} </Title>
            <Num> {bookmark?.scrap_question_num} questions </Num>
          </div>
        </Link>
        <EditSlide />
      </Card>
    </>
  );
}
