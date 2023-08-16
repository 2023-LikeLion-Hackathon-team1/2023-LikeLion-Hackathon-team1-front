import { atom } from 'recoil';

export const CategoryState = atom({
  key: 'CategoryState',
  default: '전체',
});

export const CategoryIdState = atom({
  key: 'CategoryIdState',
  default: 101,
});
