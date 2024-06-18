import { act, fireEvent, render, screen } from "@testing-library/react";
import { useRouter } from "next/navigation";

import { UserInfoStoreContext } from "@/providers/UserInfoProvider";
import { createUserInfoStore } from "@/stores/UserInfoStore";

import Header from "@/components/Header";

const mockStore = createUserInfoStore({
  id: "testUser",
});

jest.mock("../providers/UserInfoProvider", () => ({
  ...jest.requireActual("../providers/UserInfoProvider"),
  useUserInfoStore: jest.fn((selector) => selector(mockStore.getState())),
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const renderHeader = () => {
  return render(
    <UserInfoStoreContext.Provider value={mockStore}>
      <Header />
    </UserInfoStoreContext.Provider>
  );
};

describe("Header Test", () => {
  test("초기 랜더링 - 로그인 되어있는 경우 로그인한 사용자의 정보( 사용자 ID )가 보인다.", () => {
    renderHeader();

    const userIdElement = screen.getByTestId("header-info");

    expect(userIdElement).toHaveTextContent("testUser 님, 환영합니다.");
  });

  test("초기 랜더링 - 로그인이 되어있지 않은 경우 '로그인이 필요합니다.'문구가 보인다.", async () => {
    const { rerender } = renderHeader();

    let userIdElement = screen.getByTestId("header-info");
    // Mocking 상태를 로그아웃 상태로 변경
    await act(async () => {
      mockStore.setState({ id: "" });
    });

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <Header />
      </UserInfoStoreContext.Provider>
    );

    screen.getByTestId("header-info");

    expect(userIdElement).toHaveTextContent("로그인이 필요합니다.");
  });

  test("초기 랜더링 - 로그인 상태일 경우 로그아웃 버튼이 존재하고, 로그인 상태가 아닐 경우 로그인 버튼이 존재한다.", async () => {
    const { rerender } = renderHeader();

    let logoutBtn = screen.queryByTestId("header-signout");
    let loginBtn = screen.queryByTestId("header-signin");

    expect(loginBtn).toBeNull();
    expect(logoutBtn).toBeInTheDocument();

    // Mocking 상태를 로그아웃 상태로 변경
    // Mocking 상태를 로그아웃 상태로 변경
    await act(async () => {
      mockStore.setState({ id: "" });
    });

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <Header />
      </UserInfoStoreContext.Provider>
    );

    logoutBtn = screen.queryByTestId("header-signout");
    loginBtn = screen.queryByTestId("header-signin");

    expect(loginBtn).toBeInTheDocument();
    expect(logoutBtn).toBeNull();
  });

  test("로그아웃 버튼을 누르면 로그인 버튼으로 바뀐다.", () => {
    const { rerender } = renderHeader();

    let logoutBtn = screen.getByRole("button", { name: "Sign Out" });
    expect(logoutBtn).toBeInTheDocument();

    // Mocking 상태를 로그아웃 상태로 변경
    fireEvent.click(logoutBtn);

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <Header />
      </UserInfoStoreContext.Provider>
    );

    let loginBtn = screen.getByRole("button", { name: "Sign In" });
    expect(loginBtn).toBeInTheDocument();
  });

  test("로그인 버튼을 누르면 '/sign-in' 페이지로 이동한다.", () => {
    const push = jest.fn();

    // useRouter의 타입을 올바르게 설정하여 모킹
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
      prefetch: jest.fn(),
      route: "/",
      pathname: "/",
      query: {},
      asPath: "/",
    }));

    mockStore.setState({ id: "" });

    render(
      <UserInfoStoreContext.Provider value={mockStore}>
        <Header />
      </UserInfoStoreContext.Provider>
    );

    const signinBtn = screen.getByRole("button", { name: "Sign In" });

    fireEvent.click(signinBtn);

    expect(push).toHaveBeenCalledWith("/signin");
  });
});
