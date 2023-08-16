import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import { PiHeartDuotone } from 'react-icons/pi';
import theme from '../theme';

interface Answers {
  categoryId: number;
  questionId: number;
  answerId: number;
  userName: string;
  userImg: string;
  content: string;
  postTime: Date;
  likeNum: number;
  isChoose: boolean;
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

export default function AnswerCard({ answer }: { answer: Answers }) {
  const [timeAgo, setTimeAgo] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false); // Ne

  useEffect(() => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - answer.postTime.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeAgoStr = '';
    if (daysAgo >= 1) {
      const formattedDate = answer.postTime.toLocaleDateString('en-US', {
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
  }, [answer.postTime]);

  const handleLikeClick = () => {
    // Toggle the like status
    setIsLiked(!isLiked);

    // Call your API here
    // Example: You can use the fetch function to make the API call
    if (!isLiked) {
      fetch('your_api_endpoint_here', {
        method: 'POST', // or 'GET' depending on your API
        // ... (other necessary options)
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the API response if needed
        })
        .catch((error) => {
          // Handle errors if needed
        });
    }
  };

  return (
    <Card>
      <Profile>
        <ProfileImg src={answer.userImg} />
        <ProfileColumn>
          <ProfileName>{answer.userName}</ProfileName>
          <Time>{timeAgo}</Time>
        </ProfileColumn>
        {answer.isChoose && <IsChooseMark> 채택 </IsChooseMark>}
      </Profile>
      <Content>{answer.content}</Content>
      <Bottom>
        <Icons>
          <PiHeartDuotone
            size="16px"
            onClick={handleLikeClick}
            style={{ color: isLiked ? theme.palette.color.main : 'gray' }}
          />
        </Icons>
        {/* <Response>
          <Like>{`좋아요 ${answer.likeNum}개`} </Like>
          <Like>{`답변 ${answer.likeNum}개`} </Like>
        </Response> */}
      </Bottom>
    </Card>
  );
}
// /answer/like/{answer_id}/{member_id}
