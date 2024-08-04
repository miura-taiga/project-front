import { atom } from 'recoil';

export const loggedInState = atom<boolean>({
  key: 'loggedInState', // ユニークなキー
  default: false, // 初期値
});
