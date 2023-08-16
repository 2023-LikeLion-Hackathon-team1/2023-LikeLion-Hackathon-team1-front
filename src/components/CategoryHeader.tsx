import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import theme from '../theme';
import { CategoryState } from '../store/atom';
import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import { GetMyCategory } from '../apis/Questions';
import { useQuery } from 'react-query';

interface Icategory {
  id: number;
  name: string;
}

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { isLoading, data: categoryList } = useQuery<Icategory[]>(
    ['GetMyCategory', GetMyCategory],
    () => GetMyCategory(1).then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetMyCategory', data);
      },
    },
  );

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
            {(categoryList as Icategory[])?.map((item: Icategory) => (
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
