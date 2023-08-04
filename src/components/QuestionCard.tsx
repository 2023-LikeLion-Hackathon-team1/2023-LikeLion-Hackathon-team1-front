import { useEffect, useState } from 'react';
import { styled } from 'styled-components';

import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

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
}

interface QuestionCardProps {
  question: Questions;
  isSummary: boolean;
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

const Response = styled.div`
  display: flex;
  gap: 5px;
  color: gray;
  font-size: 12px;
`;
const Answer = styled.div``;

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
        {question.content.length > 30 && isSummary === true ? question.content.slice(0, 30) + '...' : question.content}
      </Content>
      <Bottom>
        <Icons>
          <PsychologyAltOutlinedIcon />
          <ChatBubbleOutlineIcon />
          <BookmarkBorderOutlinedIcon />
        </Icons>
        <Response>
          <Answer>{`궁금해요 ${question.questionMark}개`} </Answer>
          <Answer>{`답변 ${question.answerNum}개`} </Answer>
        </Response>
      </Bottom>
    </Card>
  );
}
