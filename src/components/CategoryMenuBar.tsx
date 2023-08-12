import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useRecoilState } from 'recoil';
import { CategoryState } from '../store/atom';

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
  background-color: ${(props) => (props.isSelected ? theme.palette.color.green4 : '#ffffff')};
  border: ${(props) => (props.isSelected ? 'none' : `1px solid ${theme.palette.mono.gray4}`)};
  color: ${(props) => (props.isSelected ? theme.palette.color.main : theme.palette.mono.gray2)};
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
  const [choose, setChoose] = React.useState('업로드');
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setChoose(event.target.value as string);
  };

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
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
              backgroundColor: theme.palette.mono.white,
              border: `1px solid ${theme.palette.color.main}`,
              color: theme.palette.color.main,
              borderRadius: '100px',
              fontSize: '12px',
            }}
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 'none !important' },
              '& .MuiSvgIcon-root': {
                color: theme.palette.color.main,
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

      {/* <p>선택된 카테고리: {choose}</p>
      <p>선택된 카테고리: {selectedCategory}</p> */}
    </>
  );
}
