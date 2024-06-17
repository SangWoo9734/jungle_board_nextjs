"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { PiSignInBold } from "react-icons/pi";

export default function SignUpPage() {
  const router = useRouter();
  const [isPasswordSame, setIsPassWordSame] = useState<Boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setIsPassWordSame(e.target.value === passwordCheck);
  };

  const handlePasswordCheckChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPasswordCheck(e.target.value);
    setIsPassWordSame(e.target.value === password);
  };

  const passwordStyle =
    passwordCheck == ""
      ? ""
      : isPasswordSame
      ? "password-same"
      : "password-wrong";

  return (
    <div className="h-full relative flex justify-center itemts-center">
      <div className="m-auto p-10 border rounded-2xl shadow-xl">
        <div className="w-10 h-10 m-auto my-5 rounded-full flex justify-center items-center bg-blue-500">
          <PiSignInBold className="text-white font-bold" />
        </div>
        <h2 className="mb-4 text-3xl font-bold text-center">SIGN UP</h2>
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
            className={`${passwordStyle} text-input`}
            onChange={handlePasswordChange}
          />
          <input
            id="user_password_check"
            type="password"
            placeholder="Password Check"
            className={`${passwordStyle} text-input`}
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
          />
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              router.push("/signin");
            }}
          >
            Back
          </button>
          <button type="button">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
