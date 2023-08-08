import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';

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

const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Page = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  background-color: lightgray;
`;

const Slide = styled.div`
  padding: 30px;
  border-radius: 25px 25px 0 0;
  position: absolute;
  bottom: 0;
  height: 85vh;
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
`;

const Title = styled.div`
  font-size: 22px;
  margin-bottom: 10px;
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${theme.palette.mono.gray3};
`;

const ButtonsContainer = styled.div`
  margin-top: 40px;
`;

interface CategoryButtonProps {
  isSelected: boolean;
}

// interface ICategories {
//   id: number;
//   name: string;
// }

const CategoryButton = styled.button<CategoryButtonProps>`
  margin: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${(props) => (props.isSelected ? '#F2F2F2' : '#ffffff')};
  color: black;
  border: ${(props) => (props.isSelected ? 'none' : '1px solid lightgray')};
  border-radius: 100px;
  cursor: pointer;

  /* &:hover {
    background-color: #45a049;
    color: #ffffff;
  } */
`;

const Result = styled.div`
  margin-top: 30px;
`;

const SelectButton = styled.button`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  height: 50px;
  margin: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${theme.palette.mono.gray2};
  color: white;
  border-radius: 16px;
  border: none;
  cursor: pointer;
`;

const Count = styled.span`
  position: absolute;
  right: 10%;
  font-size: 14px;
`;

export default function Category() {
  // const [isLoading, data] = useQuery<ICategories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleCategoryClick = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    // sendDataToServer(category);
  };

  // const sendDataToServer = (category: string) => {
  //   // 여기에 서버로 데이터를 보내는 로직을 구현합니다.
  //   // 예를 들어, fetch API를 사용하여 데이터를 보낼 수 있습니다.
  //   // 서버에서 해당 카테고리에 대한 처리를 진행합니다.
  //   console.log(`서버로 전송할 데이터: ${category}`);
  // };

  return (
    <Page>
      <Slide>
        <Container>
          <Title>관심사를 취미를 선택해주세요</Title>
          <SubTitle> 맞춤 카테고리를 형성하기 위함입니다. </SubTitle>
          <ButtonsContainer>
            {categoryList.map((category) => (
              <CategoryButton
                isSelected={selectedCategories.includes(category.name)}
                onClick={() => handleCategoryClick(category.name)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </ButtonsContainer>
          <Result>
            <Link to="/">
              <SelectButton>
                다음
                <Count> {selectedCategories.length === 0 ? '' : `${selectedCategories.length}개`} </Count>
              </SelectButton>
            </Link>
          </Result>
        </Container>
      </Slide>
    </Page>
  );
}
