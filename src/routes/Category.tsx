import { useState } from 'react';
import styled from 'styled-components';
import theme from '../theme';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { GetAllCategory } from '../apis/Questions';

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
interface ICategories {
  id: number;
  name: string;
}

interface BigCategory {
  big3_category_id: number;
  name: string;
  categoryList: SubCategory[];
}

interface SubCategory {
  category_id: number;
  name: string;
}

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
  color: ${theme.palette.color.main};
`;

const SubTitle = styled.div`
  font-size: 16px;
  color: ${theme.palette.mono.gray3};
`;

const ButtonsContainer = styled.div`
  margin-top: 40px;
`;

const CategoryButton = styled.button<CategoryButtonProps>`
  margin: 5px;
  padding: 10px 20px;
  font-size: 14px;
  background-color: ${(props) => (props.isSelected ? '#ffffff' : '#ffffff')};
  color: black;
  border: ${(props) => (props.isSelected ? `1px solid ${theme.palette.color.main}` : '1px solid lightgray')};
  border-radius: 100px;
  cursor: pointer;
`;

const SubCategoryButton = styled(CategoryButton)`
  background-color: ${(props) => (props.isSelected ? theme.palette.color.green4 : '#ffffff')};
  color: ${(props) => (props.isSelected ? theme.palette.color.main : 'black')};
  border: ${(props) => (props.isSelected ? `none` : '1px solid lightgray')};
`;

const SubCategoryButtons = styled.div``;

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
  background-color: ${theme.palette.color.green2};
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
  const member_id = 1; // TODO 임시로 1로 설정
  // const [isLoading, data] = useQuery<ICategories[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  const { isLoading, data: categoryList } = useQuery<BigCategory[]>(
    ['GetAllQuestion', GetAllCategory],
    () => GetAllCategory().then((response) => response.data),
    {
      onSuccess: (data) => {
        console.log('GetAllCategory', data);
      },
    },
  );

  const handleCategoryClick = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter((id) => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const handleSubCategoryClick = (category: string, id: number) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    console.log(selectedCategories);
    sendDataToServer(id);
  };

  const sendDataToServer = async (id: number) => {
    try {
      const response = await axios.get(`http://localhost:8080/category/like/${id}/${member_id}`);
      console.log('API response:', response.data);
      // Handle successful API response here
    } catch (error) {
      console.error('Error sending data to server:', error);
      // Handle error here
    }
    // /category/like/{category_id}/{member_id}
    console.log(`서버로 전송할 데이터: ${id}`);
  };

  return (
    <Page>
      <Slide>
        <Container>
          <Title>관심사를 취미를 선택해주세요</Title>
          <SubTitle> 맞춤 카테고리를 형성하기 위함입니다. </SubTitle>
          {/* <ButtonsContainer>
            {categoryList.map((category) => (
              <CategoryButton
                key={category.id}
                isSelected={selectedCategories.includes(category.name)}
                onClick={() => handleCategoryClick(category.name, category.id)}
              >
                {category.name}
              </CategoryButton>
            ))}
          </ButtonsContainer> */}
          <ButtonsContainer>
            {(categoryList as BigCategory[])?.map((bigCategory: BigCategory) => (
              <div key={bigCategory.big3_category_id}>
                <CategoryButton
                  isSelected={expandedCategories.includes(bigCategory.big3_category_id)}
                  onClick={() => handleCategoryClick(bigCategory.big3_category_id)}
                >
                  {bigCategory.name}
                </CategoryButton>
                {expandedCategories.includes(bigCategory.big3_category_id) && (
                  <SubCategoryButtons>
                    {bigCategory.categoryList.map((subCategory) => (
                      <SubCategoryButton
                        key={subCategory.category_id}
                        isSelected={selectedCategories.includes(subCategory.name)}
                        onClick={() => handleSubCategoryClick(subCategory.name, subCategory.category_id)}
                      >
                        {subCategory.name}
                      </SubCategoryButton>
                    ))}
                  </SubCategoryButtons>
                )}
              </div>
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
