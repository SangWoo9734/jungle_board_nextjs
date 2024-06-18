import { fireEvent, render, screen } from "@testing-library/react";

import { UserInfoStoreContext } from "@/providers/UserInfoProvider";
import { createUserInfoStore } from "@/stores/UserInfoStore";

import { useRouter } from "next/navigation";

import PostBoardPage from "@/app/post/board/page";

const mockStore = createUserInfoStore({
  id: "testUser",
});

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

jest.mock("../providers/UserInfoProvider", () => ({
  ...jest.requireActual("../providers/UserInfoProvider"),
  useUserInfoStore: jest.fn((selector) => selector(mockStore.getState())),
}));

describe("Post Test", () => {
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
        <PostBoardPage />
      </UserInfoStoreContext.Provider>
    );
  });

  test("초기 랜더링 - 글쓰기 버튼이 보인다.", () => {
    const writeBtn = screen.getByTestId("board-post-new");

    expect(writeBtn).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글 영역이 존재한다.", () => {
    const postList = screen.getByTestId("board-post-list");

    expect(postList).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글의 총 개수가 보인다.", () => {
    const postList = screen.getByTestId("board-post-length");

    expect(postList).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글이 없는 경우 '게시글이 없습니다.' 문구가 보인다.", () => {});

  test("'새 글 쓰기' 버튼을 누르면 게시글 작성 페이지('/post/new')로 이동한다.", () => {
    const writeBtn = screen.getByTestId("board-post-new");

    fireEvent.click(writeBtn);

    expect(push).toHaveBeenCalledWith("/post/new");
  });
});
