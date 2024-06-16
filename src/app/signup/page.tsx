"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <div>
      <h2>Sign Up</h2>
      <div>
        <div>
          <label htmlFor="user_id">ID</label>
          <input id="user_id" type="text" />
        </div>
        <div>
          <label htmlFor="user_password">PW</label>
          <input
            id="user_password"
            type="password"
            className={passwordStyle}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="user_password_check">PW CHECK</label>
          <input
            id="user_password_check"
            type="password"
            className={passwordStyle}
            value={passwordCheck}
            onChange={handlePasswordCheckChange}
          />
        </div>
      </div>
      <div>
        <button
          type="button"
          onClick={() => {
            router.push("/sign-in");
          }}
        >
          Back
        </button>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
}
