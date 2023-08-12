import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface Questions {
  questionId: number;
  categoryId: number;
  userName: string;
  userImg: string;
  title: string;
  content: string;
  questionMark: number;
  answerNum: number;
  postTime: Date;
  isCurious: boolean;
}

interface QuestionCardProps {
  question: Questions;
  isSummary: boolean;
}

const Card = styled.div`
  width: 90vw;
  padding: 20px 20px;
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
  gap: 5px;
  color: gray;
  /* height: 20px; */
  font-size: 12px;
`;

export default function QuestionCard({ question, isSummary }: QuestionCardProps) {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - question.postTime.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeAgoStr = '';
    if (daysAgo >= 1) {
      const formattedDate = question.postTime.toLocaleDateString('en-US', {
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
  }, [question.postTime]);

  return (
    <Card>
      <Profile>
        <ProfileImg src={question.userImg} />
        <ProfileColumn>
          <ProfileName>{question.userName}</ProfileName>
          <Time>{timeAgo}</Time>
        </ProfileColumn>
      </Profile>
      <Title> {question.title} </Title>
      <Content>
        {question.content.length > 29 && isSummary === true ? question.content.slice(0, 29) + '...' : question.content}
      </Content>
      <Bottom>
        <Icons>
          <PsychologyAltOutlinedIcon style={{ width: '16px' }} />
          3
          <ChatBubbleOutlineIcon style={{ width: '16px' }} />4
        </Icons>
      </Bottom>
    </Card>
  );
}
