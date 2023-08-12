import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import theme from '../theme';
import { CategoryState } from '../store/atom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

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

const Header = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 10px;
`;

export default function CategoryHeader() {
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);
  const handleGoBack = () => {
    window.history.back(); // 뒤로가기 기능 실행
  };

  const handleChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedCategory(event.target.value as string);
  };

  return (
    <>
      <Header>
        <ArrowBackIosNewRoundedIcon onClick={handleGoBack} style={{ color: `${theme.palette.color.main}` }} />
        <FormControl sx={{ m: 1, minWidth: 'fit-content' }} size="small">
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={selectedCategory}
            onChange={handleChange}
            style={{
              width: 'fit-content',
              height: '40px',
              backgroundColor: theme.palette.mono.white,
              // border: `1px solid ${theme.palette.color.main}`,
              //   color: theme.palette.color.main,
              borderRadius: '100px',
              fontSize: '14px',
            }}
            sx={{
              boxShadow: 'none',
              '.MuiOutlinedInput-notchedOutline': { border: 'none !important' },
              //   '& .MuiSvgIcon-root': {
              //     color: theme.palette.color.main,
              //   },
            }}
          >
            {categoryList.map((item) => (
              <MenuItem
                value={item.name}
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
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <div />
      </Header>
    </>
  );
}
