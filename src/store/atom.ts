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

export const CategoryGPTIdState = atom({
  key: 'CategoryGPTIdState',
  default: 0,
});

export const IsLoginState = atom({
  key: 'IsLoginState',
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const MemberIdState = atom({
  key: 'MemberIdState',
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

export const gptList = atom({
  key: 'gptList',
  default: null,
});

export const postTitle = atom<string | null>({
  key: 'postTitle',
  default: null,
});

export const postContent = atom<string | null>({
  key: 'postContent',
  default: null,
});
