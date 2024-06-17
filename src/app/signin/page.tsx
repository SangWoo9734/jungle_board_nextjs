"use client";
import { useRouter } from "next/navigation";

import { useUserInfoStore } from "@/providers/UserInfoProvider";

import { PiSignInBold } from "react-icons/pi";

export default function SignInPage() {
  const { setUserId } = useUserInfoStore((state) => state);
  const router = useRouter();

  const handleOnClickSingUpBtn = () => {
    router.push("/signup");
  };

  const handleOnClickSingInBtn = () => {
    //TODO: 로그인 로직
    router.push("/");
  };

  return (
    <div className="h-full relative flex justify-center itemts-center">
      <div className="m-auto p-10 border rounded-2xl shadow-xl">
        <div className="w-10 h-10 m-auto my-5 rounded-full flex justify-center items-center bg-red-500">
          <PiSignInBold className="text-white font-bold" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-center">SIGN IN</h2>
        <div className="flex flex-col">
          <input
            id="user_id"
            type="text"
            placeholder="ID"
            className="text-input"
          />
          <input
            id="user_password"
            type="password"
            placeholder="Password"
            className="text-input"
          />
        </div>
        <div>
          <button
            type="button"
            onClick={handleOnClickSingUpBtn}
            className="btn-primary"
          >
            Sign Up
          </button>
          <button type="button" onClick={handleOnClickSingInBtn}>
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}
