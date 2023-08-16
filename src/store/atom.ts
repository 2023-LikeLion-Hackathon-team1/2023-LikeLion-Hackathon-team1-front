import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'localStorage', //원하는 key 값 입력
  storage: localStorage,
});

export const CategoryState = atom({
  key: 'CategoryState',
  default: '전체',
});

export const CategoryIdState = atom({
  key: 'CategoryIdState',
  default: 101,
});

export const IsLoginState = atom({
  key: 'IsLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const MemberIdState = atom({
  key: 'MemberIdState',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
