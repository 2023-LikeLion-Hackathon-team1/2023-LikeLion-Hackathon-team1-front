import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
<<<<<<< Updated upstream
import InputLabel from '@mui/material/InputLabel';
// import Box from '@mui/material/Box';
=======
>>>>>>> Stashed changes
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const categoryList = [
  { id: 1, name: '🍒 디자인' },
  { id: 2, name: '💻 IT' },
  { id: 3, name: '🍳 요리' },
  { id: 4, name: '💪 운동' },
  { id: 5, name: '📘 자기계발' },
  { id: 6, name: '🇬🇧 영어' },
  { id: 7, name: '👗 패션' },
  { id: 8, name: '🎵 음악' },
  { id: 9, name: '🍔 음식' },
  { id: 10, name: '💄 뷰티' },
  { id: 11, name: '🎮 게임' },
];

interface CategoryButtonProps {
  isSelected: boolean;
}

const CategoryMenuBarWrapper = styled.div`
  display: flex;
  padding: 5px 0px;
  overflow-x: auto;
  width: 100%;
  align-items: center;

  /* 스크롤바 스타일 */
  ::-webkit-scrollbar {
    width: 0; /* 스크롤바 너비를 0으로 설정하여 스크롤바를 숨김 */
    background-color: transparent; /* 스크롤바 배경을 투명으로 설정하여 숨김 */
  }

  ::-webkit-scrollbar-thumb {
    background-color: transparent; /* 스크롤바 썸네일 색상을 투명으로 설정하여 숨김 */
  }
`;

const CategoryButton = styled.div<CategoryButtonProps>`
  padding: 8px 15px;
  margin-right: 10px;
<<<<<<< Updated upstream
  color: ${(props) => (props.isSelected ? theme.palette.green.main : 'black')};
  background-color: ${(props) => (props.isSelected ? theme.palette.green.lightgreen : '#ffffff')};
  border: ${(props) => (props.isSelected ? 'none' : '1px solid lightgray')};
=======
  background-color: ${(props) => (props.isSelected ? theme.palette.color.green4 : '#ffffff')};
  border: ${(props) => (props.isSelected ? 'none' : `1px solid ${theme.palette.mono.gray4}`)};
  color: ${(props) => (props.isSelected ? theme.palette.color.main : theme.palette.mono.gray2)};
>>>>>>> Stashed changes
  border-radius: 100px;
  cursor: pointer;
  height: 40px;
  font-size: 12px;
  min-width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function CategoryMenuBar() {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    // sendDataToServer(category);
  };

  const [choose, setChoose] = React.useState('업로드'); // 기본값을 30으로 설정

  // const handleChange = (event: SelectChangeEvent) => {
  //   setChoose(event.target.value);
  // };
  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setChoose(event.target.value as string);
  };

  return (
    <>
      <CategoryMenuBarWrapper>
        <FormControl sx={{ m: 1, minWidth: 'fit-content' }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={choose}
            onChange={handleChange}
            style={{
              width: 'fit-content',
              height: '40px',
<<<<<<< Updated upstream
              // backgroundColor: theme.palette.mono.gray2,
              border: `1px solid ${theme.palette.green.main}`,
              color: theme.palette.green.main,
=======
              backgroundColor: theme.palette.mono.white,
              border: `1px solid ${theme.palette.color.main}`,
              color: theme.palette.color.main,
>>>>>>> Stashed changes
              borderRadius: '100px',
              fontSize: '12px',
            }}
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 'none !important' },
<<<<<<< Updated upstream
              '.MuiSvgIcon-root ': {
                fill: `${theme.palette.green.main}`,
=======
              '& .MuiSvgIcon-root': {
                color: theme.palette.color.main,
>>>>>>> Stashed changes
              },
            }}
          >
            <MenuItem
              value="업로드"
              sx={{
                fontSize: '12px',
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.color.green4}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette.color.green4}`,
                  },
                },
              }}
            >
              업로드순
            </MenuItem>
            <MenuItem
              value="조회수"
              sx={{
                fontSize: '12px',
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.color.green4}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette.color.green4}`,
                  },
                },
              }}
            >
              조회수순
            </MenuItem>
            <MenuItem
              value="궁금해요"
              sx={{
                fontSize: '12px',
                '&.Mui-selected': {
                  backgroundColor: `${theme.palette.color.green4}`,
                  '&:hover': {
                    backgroundColor: `${theme.palette.color.green4}`,
                  },
                },
              }}
            >
              궁금해요순
            </MenuItem>
          </Select>
        </FormControl>

        {categoryList.map((category) => (
          <CategoryButton
            key={category.id}
            isSelected={selectedCategory === category.name}
            onClick={() => handleCategoryClick(category.name)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </CategoryMenuBarWrapper>
      {/* <p>선택된 카테고리: {selectedCategory}</p> */}
    </>
  );
}
