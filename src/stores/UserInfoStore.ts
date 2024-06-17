import { createStore } from "zustand";

export type UserInfoState = {
  id: string;
};

export type UserInfoActions = {
  setUserId: (arg: string) => void;
};

export type UserInfoStore = UserInfoState & UserInfoActions;

export const initUserInfoStore = (): UserInfoState => {
  return { id: "" };
};

export const defaultUserInfo: UserInfoState = {
  id: "",
};

export const createUserInfoStore = (
  initState: UserInfoState = defaultUserInfo
) => {
  return createStore<UserInfoStore>()((set) => ({
    ...initState,
    setUserId: (id: string) => {
      console.log(id);
      return set((state) => ({ id }));
    },
  }));
};
