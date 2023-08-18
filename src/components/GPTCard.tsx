import { styled } from 'styled-components';
import theme from '../theme';
import { useRecoilState } from 'recoil';
import { CategoryGPTIdState } from '../store/atom';

interface Igpt {
  num: number;
  name: string;
}

const Cate = styled.div`
  font-size: 14px;
  border: 1px solid ${theme.palette.mono.gray3};
  border-radius: 13px;
  padding: 15px 20px;

  &:hover {
    color: ${theme.palette.color.main};
    border: 1px solid ${theme.palette.color.main};
  }
`;

export default function GPTCard({ gptCategory }: { gptCategory: Igpt }) {
  const [selectGPTcategory, setSelectGPTcategory] = useRecoilState(CategoryGPTIdState);

  const handleClick = (categoryGPTId: number) => {
    setSelectGPTcategory(categoryGPTId);
    console.log(selectGPTcategory);
  };
  return (
    <>
      <Cate onClick={() => handleClick(gptCategory?.num)}>{gptCategory.name}</Cate>
    </>
  ); // Assuming 'Name' is the property you want to access
}
