import styled from 'styled-components';
import theme from '../theme';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { CategoryIdState, CategoryState } from '../store/atom';

const categoryList: BigCategory[] = [
  {
    big3_category_id: 1,
    categoryList: [
      { category_id: 1, name: '일반 개발' },
      { category_id: 2, name: '웹 개발' },
      { category_id: 3, name: 'Javascript' },
      { category_id: 4, name: 'React' },
      { category_id: 5, name: 'Vue.js' },
      { category_id: 6, name: 'Angular' },
      { category_id: 7, name: 'Java' },
      { category_id: 8, name: 'Python' },
      { category_id: 9, name: 'PHP' },
      { category_id: 10, name: 'Infra Structure' },
      { category_id: 11, name: 'Database' },
      { category_id: 12, name: 'Android' },
      { category_id: 13, name: 'iOS' },
      { category_id: 14, name: 'Git' },
      { category_id: 15, name: '빅데이터, AI, 머신러닝' },
    ],
    name: '개발',
  },
  {
    big3_category_id: 2,
    categoryList: [
      { category_id: 16, name: '일반 기획' },
      { category_id: 17, name: '서비스 기획' },
      { category_id: 18, name: '전략 기획' },
      { category_id: 19, name: '프로덕트 관리' },
      { category_id: 20, name: '데이터 분석' },
    ],
    name: '기획',
  },
  {
    big3_category_id: 3,
    categoryList: [
      { category_id: 21, name: '일반 디자인' },
      { category_id: 22, name: '인스퍼레이션' },
      { category_id: 23, name: 'UI/UX' },
      { category_id: 24, name: '코딩하는 디자이너' },
      { category_id: 25, name: '브랜드 디자인' },
      { category_id: 26, name: '타이포그래피' },
      { category_id: 27, name: '디자인 리소스' },
    ],
    name: '디자인',
  },
];

// ------------ interface
interface CategoryButtonProps {
  isSelected: boolean;
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

const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
`;

// ------------ style
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

const SubCategoryButtons = styled.div``;

const SubCategoryButton = styled(CategoryButton)`
  background-color: ${(props) => (props.isSelected ? theme.palette.color.green4 : '#ffffff')};
  color: ${(props) => (props.isSelected ? theme.palette.color.main : 'black')};
  border: ${(props) => (props.isSelected ? `none` : '1px solid lightgray')};
`;

export default function CategoryPart() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedCategories, setExpandedCategories] = useState<number[]>([]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategory, setSelectedCategory] = useRecoilState(CategoryState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedCategoryId, setSelectedCategoryId] = useRecoilState(CategoryIdState);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // const { isLoading, data: categoryList } = useQuery<BigCategory[]>(
  //   ['GetAllQuestion', GetAllCategory],
  //   () => GetAllCategory().then((response) => response.data),
  //   {
  //     onSuccess: (data) => {
  //       console.log('GetAllCategory', data);
  //     },
  //   },
  // );

  const handleCategoryClick = (categoryId: number) => {
    if (expandedCategories.includes(categoryId)) {
      setExpandedCategories(expandedCategories.filter((id) => id !== categoryId));
    } else {
      setExpandedCategories([...expandedCategories, categoryId]);
    }
  };

  const handleSubCategoryClick = (category: string, categoryId: number) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((item) => item !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    console.log(categoryId, selectedCategories);
    // sendDataToServer(categoryId);

    setSelectedCategory(category);
    setSelectedCategoryId(categoryId);
  };

  return (
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
  );
}
