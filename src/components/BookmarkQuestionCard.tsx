import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import theme from '../theme';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

interface ScrapInfo {
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

const Card = styled.div`
  width: 90vw;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 20px;
  border: 1px solid ${theme.palette.mono.gray4};
  box-shadow: '0px 8px 15px rgba(128, 128, 128, 0.2)';
  border-radius: 30px;
  display: flex;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`;

const ProfileImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProfileName = styled.div`
  font-size: 14px;
  font-weight: bold;
`;

const Time = styled.div`
  font-size: 10px;
  color: gray;
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin-top: 15px;
`;

const Content = styled.div`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
  line-height: 1.5;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  color: gray;
  /* height: 20px; */
  font-size: 12px;
`;

const Memos = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
`;

const Icon = styled.div`
  color: ${theme.palette.color.main};
`;

const Memo = styled.div``;

export default function BookmarkQuestionCard({ scrap }: { scrap: ScrapInfo }) {
  // const [memberId, setMemberId] = useRecoilState(MemberIdState);
  const [timeAgo, setTimeAgo] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false); // TODO:: 좋아요 기능 구현
  const [isBooked, setIsBooked] = useState<boolean>(false); // TODO:: 북마크 기능 구현

  useEffect(() => {
    const currentDate = new Date();
    const createDate = new Date(scrap?.question_info[0].create_date); // 배열의 첫 번째 아이템 사용
    const timeDifference = currentDate.getTime() - createDate.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeAgoStr = '';
    if (daysAgo >= 1) {
      const formattedDate = createDate.toLocaleDateString('en-US', {
        month: '2-digit',
        day: '2-digit',
      });
      timeAgoStr = formattedDate.replace(/\//g, '/');
    } else if (hoursAgo >= 1) {
      timeAgoStr = `${hoursAgo}시간 전`;
    } else {
      timeAgoStr = `${minutesAgo}분 전`;
    }

    setTimeAgo(timeAgoStr);
  }, [scrap?.question_info[0].create_date]);

  return (
    <Card>
      <div>
        <Memos>
          <Icon>|</Icon>
          <Memo>{scrap.scrap_memo === null ? '' : scrap.scrap_memo}</Memo>
        </Memos>
        <Profile>
          <ProfileImg src={scrap?.question_info[0].questioner_image || undefined} />
          <ProfileColumn>
            <ProfileName>{scrap?.question_info[0].questioner_name}</ProfileName>
            <Time>{timeAgo}</Time>
          </ProfileColumn>
        </Profile>
        <Title>{scrap?.question_info[0].question_title}</Title>
      </div>
      <MoreHorizIcon style={{ color: `${theme.palette.color.main}` }} />
    </Card>
  );
}
