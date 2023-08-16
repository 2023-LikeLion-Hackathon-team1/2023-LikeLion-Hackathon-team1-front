import axios from 'axios';

export const BASE_URL = 'http://localhost:8080';
// http://27.96.134.196:8080/

export const GetCateQuestion = async (categoryId: number, memberId: number) => {
  const response = await axios.get(`${BASE_URL}/questions/questions-list-inCategory/${categoryId}/${memberId}`);
  return response;
};

export const OneQuestion = async () => {
  const response = await axios.post(`${BASE_URL}/questions`);
  return response;
};

export const GetAllCategory = async () => {
  const response = await axios.get(`${BASE_URL}/category/category-list`);
  return response;
};

export const GetMyCategory = async (memberId: number) => {
  const response = await axios.get(`${BASE_URL}/category/category-list/${memberId}`);
  return response;
};

// export const GetRespone = async (q_id: number) => {
//     const response = await axios.get(`http://localhost:8080/category/category-list/${id}`);
//     return response;
//   };

// /answer/answer-list-inQuestion/{question_id}/{member_id}
