import { styled } from 'styled-components';
import SubHeader from '../components/SubHeader';
import AlarmCard from '../components/AlarmCard';

const alarmList: IAlarm[] = [
  {
    alarmId: 1,
    questionId: 1,
    userId: 1,
    alarmUserId: 2,
    alarmUserName: 'lullu',
    alarmUserImg: 'https://picsum.photos/220',
    alarmType: 'like',
    questionTitle: '이거 어떻게 해야하나요?',
    postTime: new Date('2023-08-08T10:00:00'),
  },
  {
    alarmId: 2,
    questionId: 1,
    userId: 1,
    alarmUserId: 3,
    alarmUserName: 'adsfa',
    alarmUserImg: 'https://picsum.photos/221',
    alarmType: 'choose',
    questionTitle: '이거 어떻게 해야하나요?',
    postTime: new Date('2023-08-08T11:30:00'),
  },
  {
    alarmId: 3,
    questionId: 1,
    userId: 1,
    alarmUserId: 4,
    alarmUserName: 'doctor01',
    alarmUserImg: 'https://picsum.photos/222',
    alarmType: 'curious',
    questionTitle: '이거 어떻게 해야하나요?',
    postTime: new Date('2023-08-08T12:45:00'),
  },
];

interface IAlarm {
  alarmId: number;
  questionId: number;
  userId: number;
  alarmUserId: number;
  alarmUserName: string;
  alarmUserImg: string;
  questionTitle: string;
  alarmType: 'like' | 'choose' | 'curious';
  postTime: Date;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0px;
`;

export default function Alarm() {
  return (
    <>
      <SubHeader title="알림보기" />
      <Container>
        {alarmList.map((alarm) => (
          //   <Link to={`/${.categoryId}/${question.questionId}`} style={{ margin: 0, padding: 0 }}>
          <AlarmCard alarm={alarm} />
          //   </Link>
        ))}
      </Container>
    </>
  );
}
