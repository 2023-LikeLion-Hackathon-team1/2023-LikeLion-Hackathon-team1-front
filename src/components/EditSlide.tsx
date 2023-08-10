import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import LogoImg from '../imgs/logo.png';

const Buy = styled.button`
  font-size: 16px;
  width: 350px;
  height: 50px;
  background-color: #6314e7;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 5px;
`;

const PopUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 350px;
`;

const PopLogo = styled.img`
  width: 50px;
`;

const PopText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default function EditSlide() {
  const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = () => {
    setOpen(false);
  };

  // const button = document.querySelector('#your-button-id');
  const postBacker = async () => {
    try {
      //   const response = axios.post(`http://localhost:8080/backer/15/${props.funding_id}`, {
      //     fund_num: 1,
      //   });
      setOpen(true);

      //   console.log(response); // 응답 확인 (선택사항)
    } catch (error) {
      console.error(error);
      // 에러 처리
    }
  };

  return (
    <div>
      <MoreHorizIcon onClick={postBacker} />
      {/* <Buy onClick={postBacker}> 이 프로젝트 후원하기</Buy> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          <PopUpContainer>
            <PopLogo src={LogoImg} />
            <PopText>
              예약 구매가 완료되었습니다.
              <br />
              프로젝트에 후원해주셔서 감사합니다.
            </PopText>
          </PopUpContainer>
        </DialogTitle>
        <DialogActions sx={{ display: 'flex', justifyItems: 'center' }}>
          <Button onClick={handleClose} autoFocus sx={{ backgroundColor: 'red' }}>
            펀딩 계속하기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
