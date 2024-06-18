"use client";

import { useRouter } from "next/navigation";
import { useUserInfoStore } from "@/providers/UserInfoProvider";

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
        <button
          type="button"
          onClick={handleOnClickSignOutBtn}
          data-testid="header-signout"
        >
          Sign Out
        </button>
      ) : (
        <button
          type="button"
          onClick={handleOnClickSignInBtn}
          data-testid="header-signin"
        >
          Sign In
        </button>
      )}
    </div>
  );
}
