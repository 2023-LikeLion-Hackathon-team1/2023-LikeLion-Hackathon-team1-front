/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styled from 'styled-components';
import axios from 'axios';
import { useState } from 'react';
import { Divider } from '@mui/material';
import theme from '../theme';
import { useParams } from 'react-router-dom';
import { GetBookmarkList } from '../apis/Questions';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { MemberIdState } from '../store/atom';
import { FiBookmark } from 'react-icons/fi';

interface ScrapFolder {
  id: number;
  title: string;
}

interface IBookmark {
  scrap_folder_id: number;
  scrap_folder_name: string;
  scrap_question_num: number;
}

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
  align-items: flex-start;
  justify-content: center;
  /* height: 200px;
  width: 350px; */
  /* width: 288px; */
  /* height: 292px; */
  flex-shrink: 0;
  border-radius: 16px;
  /* background: var(--white, #fff); */
  /* box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.1); */
`;

const PopLogo = styled.img`
  width: 50px;
`;

const PopText = styled.div`
  text-align: center;
  margin-top: 20px;
`;

const Title = styled.div`
  color: var(--black, #1a1c19);
  text-align: center;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%; /* 16px */
`;

const Sub = styled.div`
  color: var(--grey-2-sub, #8d948c);
  font-family: SUIT;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
`;

const Tag = styled.div`
  color: var(--grey-2-sub, #8d948c);
  font-family: Noto Sans CJK KR;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  margin: 5px;
`;

const NewTag = styled(Tag)`
  color: ${theme.palette.color.main};
`;

interface RouteParams {
  questionId: string;
}

export default function PopUp(props: any) {
  const [open, setOpen] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);
  const { questionId } = useParams<RouteParams>();
  const [selectedFolders, setSelectedFolders] = useState<number>();
  const questionIdNumber = parseInt(questionId, 10);
  const [isBooked, setIsBooked] = useState<boolean>(false); // TODO:: 북마크 기능 구현

  const { isLoading, data: bookmarkList } = useQuery<IBookmark[]>(
    ['GetBookmarkList', GetBookmarkList],
    () => GetBookmarkList(memberId).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetBookmarkList', data);
      },
    },
  );

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  const handleClose = async () => {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/scrap/${selectedFolders}/${questionId}`);

    // /scrap/{scrap_folder_id}/{question_id}
    setOpen(false);
    setIsBooked(true);
    return response;
  };

  // const button = document.querySelector('#your-button-id');
  const postBook = async () => {
    // try {
    //   // const response = axios.post(`http://localhost:8080/backer/15/${props.funding_id}`, {
    //   //   fund_num: 1,
    //   // });
    setOpen(true);
    //   // console.log(response); // 응답 확인 (선택사항)
    // } catch (error) {
    //   console.error(error);
    //   // 에러 처리
    // }
  };

  // const [scrapFolders, setScrapFolders] = useState<ScrapFolder[]>([
  //   { id: 1, title: '스크랩 폴더 1' },
  //   { id: 2, title: '스크랩 폴더 2' },
  //   { id: 3, title: '스크랩 폴더 3' },
  //   // ...더 많은 스크랩 폴더 데이터
  // ]);

  // const toggleFolder = (folderId: number) => {
  //   setSelectedFolders((prevSelected) => {
  //     if (prevSelected.includes(folderId)) {
  //       return prevSelected.filter((id) => id !== folderId);
  //     } else {
  //       return [...prevSelected, folderId];
  //     }
  //   });
  // };
  const toggleFolder = (folderId: number) => {
    setSelectedFolders(folderId);
    console.log(selectedFolders);
  };

  const handlePost = () => {
    // 선택한 폴더를 서버에 전송하고 게시(post) 동작 수행
    console.log('Selected Folders:', selectedFolders);
    // 여기에서 실제로 서버에 선택한 폴더를 전송하고 게시(post) 동작을 수행할 수 있습니다.
  };

  const handleAddScrap = async (folderId: number) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/scrap/${folderId}/${questionIdNumber}`);
      console.log('API response:', response.data);
      // Handle successful API response here
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle error here
    }
    // console.log(`서버로 전송할 데이터: ${categoryId}`);
  };

  return (
    <div>
      {/* <Buy onClick={postBacker}> 이 프로젝트 후원하기</Buy> */}
      {/* <div style={{ display: 'flex', alignItems: 'flex-end' }} onClick={handleBookedClick}> */}
      <FiBookmark size="16px" onClick={postBook} style={{ color: isBooked ? theme.palette.color.main : 'gray' }} />
      {/* <div style={{ display: 'flex', alignItems: 'flex-end' }} onClick={handleBookedClick}> */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        maxWidth="md"
      >
        <DialogTitle id="alert-dialog-title">
          <PopUpContainer>
            {/* <PopLogo src={LogoImg} />
            <PopText>
              예약 구매가 완료되었습니다.
              <br />
              프로젝트에 후원해주셔서 감사합니다.
            </PopText> */}

            <Title>질문을 스크랩합니다!</Title>
            <Sub> 필요한 순간에 손쉽게 정보를 찾고 활용할 수 있습니다. </Sub>
            <NewTag> 태그 추가 </NewTag>
            <Divider />
            {(bookmarkList as IBookmark[])?.map((folder: IBookmark) => (
              <>
                <Divider style={{ width: '100%' }} />
                <div key={folder?.scrap_folder_id} onClick={() => handleAddScrap(folder?.scrap_folder_id)}>
                  <Tag onClick={() => toggleFolder(folder?.scrap_folder_id)}>
                    {folder?.scrap_folder_name} {folder?.scrap_question_num}
                    {/* {selectedFolders.includes(folder?.scrap_folder_id) ? '✔' : ''} */}
                    {selectedFolders === folder?.scrap_folder_id && '✔'}
                  </Tag>
                </div>
                {/* <Divider style={{ width: '100%' }} /> */}
              </>
            ))}
            {/* <div>
              <button onClick={handlePost}>선택 완료</button>
            </div> */}
          </PopUpContainer>
        </DialogTitle>
        <DialogActions sx={{ display: 'flex', justifyItems: 'center' }}>
          <Button onClick={handleClose} autoFocus sx={{ backgroundColor: 'white', color: 'gray' }}>
            선택 완료
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
