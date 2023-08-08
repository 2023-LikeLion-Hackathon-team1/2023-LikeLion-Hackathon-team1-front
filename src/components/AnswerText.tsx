// import * as React from 'react';
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from 'styled-components';
import theme from '../theme';

const AnswerType = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 70px;
  background-color: white;
  padding: 15px 30px;
  border-top: 1px solid ${theme.palette.mono.gray1};
`;

const StyledTextField = styled(TextField)`
  && {
    border-radius: 100px;
    background-color: ${theme.palette.mono.gray1};
  }
  .MuiInputLabel-root {
    display: none; /* Hide the label */
  }
`;

const Block = styled.p`
  display: flex;
  height: 70px;
  background-color: white;
`;

export default function AnswerText() {
  return (
    <>
      <Block />
      <AnswerType>
        <StyledTextField
          fullWidth
          label="답변 작성하기"
          id="fullWidth"
          sx={{
            '& fieldset': { border: 'none' },
          }}
          size="small"
        />
      </AnswerType>
    </>
  );
}
