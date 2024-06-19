import { fireEvent, render, screen } from "@testing-library/react";

import { useRouter } from "next/navigation";

import { UserInfoStoreContext } from "@/providers/UserInfoProvider";
import { createUserInfoStore } from "@/stores/UserInfoStore";

import SignInPage from "../app/(auth)/signin/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockStore = createUserInfoStore({
  id: "testUser",
});

jest.mock("../providers/UserInfoProvider", () => ({
  ...jest.requireActual("../providers/UserInfoProvider"),
  useUserInfoStore: jest.fn((selector) => selector(mockStore.getState())),
}));

describe("Login Page Test", () => {
  const push = jest.fn();

  beforeEach(() => {
    // useRouter의 타입을 올바르게 설정하여 모킹
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
      prefetch: jest.fn(),
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
    }));

    render(
      <UserInfoStoreContext.Provider value={mockStore}>
        <SignInPage />
      </UserInfoStoreContext.Provider>
    );
  });

  test("초기 랜더링 - 사용자 ID 입력 필드가 존재한다.", () => {
    const userId = screen.getByTestId("signin-id");

    expect(userId).toBeInTheDocument();
  });

  test("초기 랜더링 - 패스워드 입력 필드가 존재한다.", () => {
    const password = screen.getByTestId("signin-password");

    expect(password).toBeInTheDocument();
  });

  test("초기 랜더링 - 로그인 버튼이 존재한다.", () => {
    const signInBtn = screen.getByRole("button", { name: /Sign In/i });

    expect(signInBtn).toBeInTheDocument();
  });

  test("초기 랜더링 - 회원가입 버튼이 존재한다.", () => {
    const signUpBtn = screen.getByText(/Sign Up/i);

    expect(signUpBtn).toBeInTheDocument();
  });

  test("sign up 버튼 클릭시 회원가입 페이지(/sign-in) 페이지로 이동한다.", () => {
    const signupBtn = screen.getByRole("button", { name: "Sign Up" });

    fireEvent.click(signupBtn);

    expect(push).toHaveBeenCalledWith("/signup");
  });

  test("sign in 버튼 클릭시 홈('/') 회면으로 이동한다.", () => {
    const signinBtn = screen.getByRole("button", { name: "Sign In" });

    fireEvent.click(signinBtn);

    expect(push).toHaveBeenCalledWith("/");
  });
});
