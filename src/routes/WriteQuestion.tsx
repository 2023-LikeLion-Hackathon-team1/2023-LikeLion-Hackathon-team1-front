/* eslint-disable @typescript-eslint/no-unused-vars */
import { styled } from 'styled-components';
import Divider from '@mui/material/Divider';
import { useEffect, useState } from 'react';
import theme from '../theme';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { CategoryIdState, MemberIdState, gptList, postContent, postTitle } from '../store/atom';
import Button from '@mui/material/Button';
import { useRecoilState } from 'recoil';
import SubHeader from '../components/SubHeader';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  font-size: 20px;

  &:focus {
    outline: none;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border: none;
  font-size: 14px;

  &:focus {
    outline: none;
  }
`;

const BottomBar = styled.div<BottomBarProps>`
  position: fixed;
  bottom: ${(props) => props.keyboardHeight}px; // Use a prop for keyboard height
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 20px 40px;
  height: 70px;
  border-top: 1px solid #ccc;
`;

interface BottomBarProps {
  keyboardHeight: number;
}

export default function WriteQuestion() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const history = useHistory();
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [title, setTitle] = useRecoilState(postTitle);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState('');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(CategoryIdState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [memberId, setMemberId] = useRecoilState(MemberIdState);
  // const [gptCateList, setGptCateList] = useState([]);
  const [gptCateList, setGptCateList] = useRecoilState(gptList);
  const [atomTitle, setAtomTitle] = useRecoilState(postTitle);
  const [atomContent, setAtomContent] = useRecoilState(postContent);
  // let responseData = null;
  // const [selectedImage, setSelectedImage] = useState<string | null>(null); // Specify the type for selectedImage

  const submitQuestion = async () => {
    console.log('submit!');
    console.log(title);
    console.log('con', content);
    try {
      const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/v1/chat-gpt`, {
        question: content,
      });

      // responseData = response.data;
      setGptCateList(response.data);
      setAtomTitle(title);
      setAtomContent(content);

      console.log(response.data);
      // setGptCateList(response.data);
      console.log('r?', gptCateList);
    } catch (error) {
      console.error('Error:', error);
    }

    return gptCateList;
  };

  // ...

  // useEffect(() => {
  //   console.log(gptCateList); // Log the updated gptCateList value when it changes
  // }, [gptCateList]);

  useEffect(() => {
    const handleResize = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.clientHeight;
      const diff = windowHeight - documentHeight;
      setKeyboardHeight(diff);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   // Add type annotation for event
  //   const file = event.target.files?.[0]; // Use optional chaining to access files property
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setSelectedImage(reader.result as string); // Cast reader.result to string
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  return (
    <>
      <SubHeader title="질문하기" />
      <Form>
        <Divider light style={{ width: '100%', margin: '10px 0' }} />
        <TitleInput placeholder="제목" onChange={handleTitleChange} />
        <Divider light style={{ width: '100%' }} />
        <ContentInput
          placeholder="궁금한 질문을 이곳에 적어보세요."
          onChange={handleContentChange}
          style={{ height: '50vh' }}
        />
        {/* {selectedImage && <SmallImg src={selectedImage} alt="Selected" />} */}

        <BottomBar keyboardHeight={keyboardHeight}>
          {/* <label htmlFor="image-upload">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              style={{ display: 'none' }}
              onChange={handleImageChange}
            />
            <CameraAltTwoToneIcon style={{ color: theme.palette.color.main }} />
          </label> */}
          <div />
          <Link to="/gpt">
            <Button variant="text" onClick={submitQuestion}>
              등록
            </Button>
          </Link>
        </BottomBar>
      </Form>
    </>
  );
}
