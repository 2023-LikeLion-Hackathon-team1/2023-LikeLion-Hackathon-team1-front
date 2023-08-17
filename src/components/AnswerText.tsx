import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import theme from '../theme';
import { AiOutlineSend } from 'react-icons/ai';
import { BASE_URL } from '../apis/Questions';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { RecoilState, useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';

const AnswerType = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  background-color: white;
  padding: 15px 30px;
  border-top: 1px solid ${theme.palette.mono.gray4};
`;

const Gray = styled.div`
  display: flex;
  border-radius: 100px;
  background-color: ${theme.palette.mono.gray4};
  width: 100%;
  align-items: center;
`;

const StyledTextField = styled(TextField)`
  .MuiInputLabel-root {
    display: none; /* Hide the label */
  }
`;

const Block = styled.p`
  display: flex;
  height: 70px;
  background-color: white;
`;

interface RouteParams {
  questionId: string;
}

export default function AnswerText() {
  const { questionId } = useParams<RouteParams>();
  const [answer, setAnswer] = useState('');
  const [memberId, setMemberId] = useRecoilState(MemberIdState);

  const handleAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const handleSendClick = async () => {
    // TODO: Perform the post operation using 'answer' variable
    const response = await axios.post(
      `${BASE_URL}/answer/${questionId}/${memberId}`, // 템플릿 리터럴 사용
      {
        answer_sentence: answer, // answer 변수 사용
      },
    );
    // Clear the answer
    setAnswer('');
    return response;
  };

  return (
    <>
      <Block />
      <AnswerType>
        <Gray>
          <StyledTextField
            fullWidth
            label="답변 작성하기"
            id="fullWidth"
            placeholder="답변을 작성해주세요"
            sx={{
              '& fieldset': { border: 'none' },
            }}
            size="small"
            value={answer}
            onChange={handleAnswerChange}
          />
          <AiOutlineSend onClick={handleSendClick} style={{ marginRight: '15px', color: 'gray' }} />
          {/* <div style={{width:}}/> */}
        </Gray>
      </AnswerType>
    </>
  );
}
