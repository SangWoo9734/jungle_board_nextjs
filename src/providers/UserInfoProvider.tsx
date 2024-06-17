"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import {
  type UserInfoStore,
  createUserInfoStore,
  initUserInfoStore,
} from "@/stores/UserInfoStore";

export type UserInfoStoreApi = ReturnType<typeof createUserInfoStore>;

export const UserInfoStoreContext = createContext<UserInfoStoreApi | undefined>(
  undefined
);

export interface UserInfoStoreProviderProps {
  children: ReactNode;
}

export const UserInfoStoreProvider = ({
  children,
}: UserInfoStoreProviderProps) => {
  const storeRef = useRef<UserInfoStoreApi>();

  if (!storeRef.current) {
    storeRef.current = createUserInfoStore(initUserInfoStore());
  }

  return (
    <UserInfoStoreContext.Provider value={storeRef.current}>
      {children}
    </UserInfoStoreContext.Provider>
  );
};

export const useUserInfoStore = <T,>(
  selector: (store: UserInfoStore) => T
): T => {
  const userInfoStoreContext = useContext(UserInfoStoreContext);

  if (!userInfoStoreContext) {
    throw new Error(`useCounterStore must be used within UserInfoStoreContext`);
  }

  return useStore(userInfoStoreContext, selector);
};
