import axios from 'axios';

export const GetAllQuestion = async () => {
  const response = await axios.get(`http://localhost:8080/questions`);
  return response;
};

export const OneQuestion = async () => {
  const response = await axios.post(`http://localhost:8080/questions`);
  return response;
};

export const GetAllCategory = async () => {
  const response = await axios.get(`http://localhost:8080/category/category-list`);
  return response;
};

export const GetMyCategory = async (id: number) => {
  id = 1;
  const response = await axios.get(`http://localhost:8080/category/category-list/${id}`);
  return response;
};

// export const GetRespone = async (q_id: number) => {
//     const response = await axios.get(`http://localhost:8080/category/category-list/${id}`);
//     return response;
//   };

// /answer/answer-list-inQuestion/{question_id}/{member_id}
