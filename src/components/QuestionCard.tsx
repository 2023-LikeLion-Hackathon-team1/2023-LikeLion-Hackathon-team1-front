import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import { BsChat } from 'react-icons/bs';
import { BiCircle } from 'react-icons/bi';
import { FiBookmark } from 'react-icons/fi';
import theme from '../theme';

// interface Questions {
//   questionId: number;
//   categoryId: number;
//   userName: string;
//   userImg: string;
//   title: string;
//   content: string;
//   questionMark: number;
//   answerNum: number;
//   postTime: Date;
//   isCurious: boolean;
// }

interface IQuestion {
  question_id: number;
  question_title: string;
  question_content: string;
  questioner_id: number;
  create_date: string;
  questionLikeCount: number;
  imageUrls: string[];
  userImage: string | null;
}

interface QuestionCardProps {
  // question: Questions;
  question: IQuestion;
  isSummary: boolean;
}

const Card = styled.div<{ isSummary: boolean }>`
  width: 90vw;
  height: 145px;
  padding: 20px 20px;
  background-color: ${(props) => (props.isSummary ? 'rgba(255, 255, 255, 0.8)' : 'transparent')};
  box-shadow: ${(props) => (props.isSummary ? '0px 8px 15px rgba(128, 128, 128, 0.2)' : 'none')};
  border-radius: 30px;
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
  gap: 10px;
  color: gray;
  /* height: 20px; */
  font-size: 12px;
`;

export default function QuestionCard({ question, isSummary }: QuestionCardProps) {
  const [timeAgo, setTimeAgo] = useState<string>('');
  const [isLiked, setIsLiked] = useState<boolean>(false); // TODO:: 좋아요 기능 구현
  const [isBooked, setIsBooked] = useState<boolean>(false); // TODO:: 북마크 기능 구현

  useEffect(() => {
    const currentDate = new Date();
    const createDate = new Date(question.create_date);
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
  }, [question.create_date]);

  const handleLikeClick = () => {
    // Toggle the like status
    setIsLiked(!isLiked);

    // Call your API here to handle like post
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

  const handleBookedClick = () => {
    // Toggle the like status
    setIsBooked(!isBooked);

    // Call your API here to handle like post
    // Example: You can use the fetch function to make the API call
    // if (!isLiked) {
    //   fetch('your_api_endpoint_here', {
    //     method: 'POST', // or 'GET' depending on your API
    //     // ... (other necessary options)
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       // Handle the API response if needed
    //     })
    //     .catch((error) => {
    //       // Handle errors if needed
    //     });
    // }
  };

  const userName = '김철수'; // TODO:: 유저 이름 받아오기

  return (
    <Card isSummary={isSummary}>
      <Profile>
        <ProfileImg src={question?.userImage || undefined} />
        <ProfileColumn>
          <ProfileName>{userName}</ProfileName>
          <Time>{timeAgo}</Time>
        </ProfileColumn>
      </Profile>
      <Title> {question.question_title} </Title>
      <Content>
        {question.question_content.length > 29 && isSummary === true
          ? question.question_content.slice(0, 29) + '...'
          : question.question_content}
      </Content>
      <Bottom>
        <Icons>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              gap: '5px',
              cursor: 'pointer',
              color: isLiked ? theme.palette.color.main : 'gray',
              fontWeight: isLiked ? 'bold' : 'normal',
            }}
            onClick={handleLikeClick}
          >
            <BiCircle size="16px" style={{ color: isLiked ? theme.palette.color.main : 'gray' }} />{' '}
            {question.questionLikeCount}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: '5px' }}>
            <BsChat size="16px" /> {question.questionLikeCount}
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-end' }} onClick={handleBookedClick}>
            {isSummary === false && (
              <FiBookmark size="16px" style={{ color: isBooked ? theme.palette.color.main : 'gray' }} />
            )}
          </div>
        </Icons>
      </Bottom>
    </Card>
  );
}
