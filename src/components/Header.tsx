"use client";

import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/providers/UserInfoProvider";

import Button from "./Button";

export default function Header() {
  const router = useRouter();
  const { id, setUserId } = useUserInfoStore((state) => state);

  const handleOnClickSignOutBtn = () => {
    setUserId("");
  };

  const handleOnClickSignInBtn = () => {
    router.push("/signin");
  };

  return (
    <div className="w-screen flex justify-between items-center p-3 mb-4 shadow-md bg-white">
      <div data-testid="header-info" className="font-bold">
        {id != "" ? `${id} 님, 환영합니다.` : "로그인이 필요합니다."}
      </div>

      {id != "" ? (
        <Button
          variant="warning"
          size="fit"
          onClick={handleOnClickSignOutBtn}
          data-testid="header-signout"
        >
          Logout
        </Button>
      ) : (
        <Button
          variant="primary"
          size="fit"
          onClick={handleOnClickSignInBtn}
          data-testid="header-signin"
        >
          Sign In
        </Button>
      )}
    </div>
  );
}
