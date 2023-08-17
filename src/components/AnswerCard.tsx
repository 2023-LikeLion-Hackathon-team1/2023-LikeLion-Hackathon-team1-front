import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PiHeartDuotone } from 'react-icons/pi';
import theme from '../theme';
import { GetAnswerLike } from '../apis/Questions';
import { useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';

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

const Card = styled.div`
  width: 100vw;
  /* min-width: 100vw; */
  /* height: 140px; */
  /* background-color: lightblue; */
  /* border-top: 1px solid black; */
  border-bottom: 1px solid lightgray;
  padding: 15px 30px;
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

const IsChooseMark = styled.div`
  display: flex;
  padding: 7px 10px 5px 10px;
  font-size: 11px;
  color: ${theme.palette.color.sub};
  background-color: ${theme.palette.color.blue2};
  border: 1px solid ${theme.palette.color.sub};
  border-radius: 15px;
`;

const Time = styled.div`
  font-size: 10px;
  color: ${theme.palette.mono.gray3};
`;

const Content = styled.div`
  font-size: 14px;
  color: gray;
  margin: 10px 0px;
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
  gap: 5px;
  color: gray;
`;

export default function AnswerCard({ answer }: { answer: Answer }) {
  const [timeAgo, setTimeAgo] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);
  const [newLikeNum, setNewLikeNum] = useState<number>(0);

  useEffect(() => {
    const currentDate = new Date();
    const createDateTime = new Date(answer.create_date);
    const timeDifference = currentDate.getTime() - createDateTime.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    if (answer?.isLike_active) setIsLiked(true);
    setNewLikeNum(answer?.answer_like_num);

    let timeAgoStr = '';
    if (daysAgo >= 1) {
      const formattedDate = createDateTime.toLocaleDateString('en-US', {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [answer.create_date]);

  const handleLikeClick = async (answer_id: number) => {
    // Toggle the like status
    setIsLiked(!isLiked);
    setNewLikeNum(newLikeNum + (isLiked ? -1 : 1));

    // Call your API here
    // Example: You can use the fetch function to make the API call
    if (!isLiked) {
      // /answer/like/{answer_id}/{member_id}
      try {
        const response = await GetAnswerLike(answer_id, memberId);
        // Handle the API response if needed
        console.log('GetAnswerLike response:', response);
      } catch (error) {
        // Handle errors if needed
        console.error('Error getting answer like:', error);
      }
    }
  };

  return (
    <Card>
      <Profile>
        <ProfileImg src={answer?.answerer_image} />
        <ProfileColumn>
          <ProfileName>{answer?.answerer_name}</ProfileName>
          <Time>{timeAgo}</Time>
        </ProfileColumn>
        {answer?.isQuestioner_selection && <IsChooseMark> 채택 </IsChooseMark>}
      </Profile>
      <Content>{answer?.answer_sentence}</Content>
      <Bottom>
        <Icons>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '5px',
              fontSize: '14px',
              alignContent: 'flex-end',
              color: isLiked ? theme.palette.color.main : 'gray',
            }}
          >
            <PiHeartDuotone
              size="16px"
              onClick={() => handleLikeClick(answer?.answer_id)}
              // style={{ color: isLiked ? theme.palette.color.main : 'gray' }}
            />
            {newLikeNum}
          </div>
        </Icons>
      </Bottom>
    </Card>
  );
}
