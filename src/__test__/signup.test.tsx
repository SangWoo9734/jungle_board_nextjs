import { fireEvent, render, screen } from "@testing-library/react";

import SignUpPage from "../app/signup/page";

import { useRouter } from "next/navigation";

// useRouter 모킹
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("Sign Up Page Test", () => {
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
    render(<SignUpPage />);
  });

  test("초기 랜더링 - 사용자 ID 입력 필드가 존재한다.", () => {
    const userId = screen.getByTestId("signup-id");

    expect(userId).toBeInTheDocument();
  });

  test("초기 랜더링 - 패스워드 입력 필드가 존재한다.", () => {
    const password = screen.getByTestId("signup-password");
    expect(password).toBeInTheDocument();
  });

  test("초기 랜더링 - 패스워드 확인 필드가 존재한다.", () => {
    const passwordCheck = screen.getByTestId("signup-password-check");

    expect(passwordCheck).toBeInTheDocument();
  });

  test("초기 랜더링 - 회원가입 버튼이 존재한다.", () => {
    const signUpBtn = screen.getByRole("button", { name: /Sign Up/i });

    expect(signUpBtn).toBeInTheDocument();
  });

  test("초기 랜더링 - 돌아가기 버튼이 존재한다.", () => {
    const backBtn = screen.getByText(/Back/i);

    expect(backBtn).toBeInTheDocument();
  });

  test("사용자는 ID를 입력할 수 있다.", () => {
    const userId = screen.getByTestId("signup-id") as HTMLInputElement;

    fireEvent.change(userId, { target: { value: "Jungle" } });

    expect(userId.value).toBe("Jungle");
  });

  test("사용자는 패스워드를 입력할 수 있다.", () => {
    const password = screen.getByTestId("signup-password") as HTMLInputElement;

    fireEvent.change(password, { target: { value: "abc123" } });

    expect(password.value).toBe("abc123");
  });

  test("사용자는 패스워드 확인를 입력할 수 있다.", () => {
    const passwordCheck = screen.getByTestId(
      "signup-password-check"
    ) as HTMLInputElement;

    fireEvent.change(passwordCheck, { target: { value: "abc123" } });

    expect(passwordCheck.value).toEqual("abc123");
  });

  test("비밀번호와 비밀번호 확인 후 경우에 따라 다르게 표현", () => {
    const password = screen.getByTestId("signup-password");
    const password_check = screen.getByTestId("signup-password-check");

    fireEvent.change(password, { target: { value: "zxcv8430" } });
    fireEvent.change(password_check, { target: { value: "zxcv8430" } });

    expect(password).toHaveClass("password-same");
    expect(password_check).toHaveClass("password-same");

    fireEvent.change(password, { target: { value: "abc" } });
    fireEvent.change(password_check, { target: { value: "843" } });

    expect(password).toHaveClass("password-wrong");
    expect(password_check).toHaveClass("password-wrong");
  });

  test("돌아가기 버튼을 누르는 경우 '/sign-in'으로 이동", () => {
    const button = screen.getByRole("button", { name: "Back" });
    fireEvent.click(button);

    expect(push).toHaveBeenCalledWith("/signin");
  });
});
