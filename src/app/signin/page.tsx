"use client";
import { useRouter } from "next/navigation";

import { useUserInfoStore } from "@/providers/UserInfoProvider";

import { PiSignInBold } from "react-icons/pi";
import Button from "@/components/Button";

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
      <div className="sm:w-3/5 max-w-xl m-auto p-10 border rounded-2xl shadow-xl bg-white transition-all">
        <div className="w-14 h-14 m-auto my-5 rounded-full flex justify-center items-center bg-red-500">
          <PiSignInBold className="text-white font-bold text-xl" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-center">SIGN IN</h2>
        <div className="flex flex-col">
          <input
            id="user_id"
            type="text"
            placeholder="ID"
            className="text-input"
            data-testid="signin-id"
          />
          <input
            id="user_password"
            type="password"
            placeholder="Password"
            className="text-input"
            data-testid="signin-password"
          />
        </div>
        <div className="flex gap-3 mt-5">
          <Button
            variant="warning"
            size="full"
            onClick={handleOnClickSingUpBtn}
          >
            Sign Up
          </Button>
          <Button
            variant="primary"
            size="full"
            onClick={handleOnClickSingInBtn}
          >
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
}
