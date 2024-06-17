"use client";
import { useRouter } from "next/navigation";

import { useUserInfoStore } from "@/providers/UserInfoProvider";

export default function SignInPage() {
  const { setUserId } = useUserInfoStore((state) => state);
  const router = useRouter();

  const handleOnClickSingUpBtn = () => {
    router.push("/sign-up");
  };

  const handleOnClickSingInBtn = () => {
    //TODO: 로그인 로직
    router.push("/");
  };

  return (
    <div>
      <h2>SIGN IN</h2>
      <div>
        <div>
          <label htmlFor="user_id">ID : </label>
          <input id="user_id" type="text" />
        </div>

        <div>
          <label htmlFor="user_password">PW : </label>
          <input id="user_password" type="password" />
        </div>
      </div>
      <div>
        <button type="button" onClick={handleOnClickSingUpBtn}>
          Sign Up
        </button>
        <button type="button" onClick={handleOnClickSingInBtn}>
          Sign In
        </button>
      </div>
    </div>
  );
}
