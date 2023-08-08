import { useEffect, useState } from 'react';
import { styled } from 'styled-components';
import theme from '../theme';

interface Alarm {
  alarmId: number;
  questionId: number;
  userId: number;
  alarmUserId: number;
  alarmUserName: string;
  alarmUserImg: string;
  alarmType: 'like' | 'choose' | 'curious';
  questionTitle: string;
  postTime: Date;
}

interface AlarmCardProps {
  alarm: Alarm;
}

const Card = styled.div`
  width: 100vw;
  padding: 15px 30px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ProfileRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
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
  color: ${theme.palette.mono.gray2};
`;

const Content = styled.div`
  font-size: 14px;
  color: gray;
  margin: 10px 0px;
`;

const Text = styled.div`
  font-size: 12px;
  margin-top: 5px;
  color: ${theme.palette.mono.gray2};
`;

export default function AlarmCard({ alarm }: AlarmCardProps) {
  const [timeAgo, setTimeAgo] = useState<string>('');

  useEffect(() => {
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - alarm.postTime.getTime();
    const hoursAgo = Math.floor(timeDifference / (1000 * 60 * 60));
    const minutesAgo = Math.floor(timeDifference / (1000 * 60));
    const daysAgo = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    let timeAgoStr = '';
    if (daysAgo >= 1) {
      const formattedDate = alarm.postTime.toLocaleDateString('en-US', {
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
  }, [alarm.postTime]);
  return (
    <>
      <Card>
        <Profile>
          <ProfileImg src={alarm.alarmUserImg} />
          <Content>
            <ProfileRow>
              <ProfileName>{alarm.alarmUserName}</ProfileName>
              <Time>{timeAgo}</Time>
            </ProfileRow>
            <Text>
              {alarm.alarmType === 'like' && '회원님의 답변을 좋아요를 눌렀습니다. '}
              {alarm.alarmType === 'choose' && '회원님의 답변을 채택하였습니다. '}
              {alarm.alarmType === 'curious' && '회원님의 점심 메뉴 추천 글에 궁금해요를 눌렀습니다. '}
            </Text>
          </Content>
        </Profile>
      </Card>
    </>
  );
}
