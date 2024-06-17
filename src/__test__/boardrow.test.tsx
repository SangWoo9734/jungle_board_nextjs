import { act, fireEvent, render, screen } from "@testing-library/react";

import { useRouter } from "next/navigation";

import { UserInfoStoreContext } from "@/providers/UserInfoProvider";
import { createUserInfoStore } from "@/stores/UserInfoStore";

import BoardRow from "@/app/post/board/components/BoardRow";

const mockRowData = {
  title: "Row title",
  content: "This is content",
  userId: "psu8430",
  postId: 5,
  upload: "2024/05/05",
  count: 2324,
};

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

const mockStore = createUserInfoStore({
  id: "psu8430",
});

jest.mock("../providers/UserInfoProvider", () => ({
  ...jest.requireActual("../providers/UserInfoProvider"),
  useUserInfoStore: jest.fn((selector) => selector(mockStore.getState())),
}));

const renderBoardRow = () => {
  return render(
    <UserInfoStoreContext.Provider value={mockStore}>
      <BoardRow
        title={mockRowData.title}
        content={mockRowData.content}
        userId={mockRowData.userId}
        postId={mockRowData.postId}
        upload={mockRowData.upload}
        count={mockRowData.count}
      />
    </UserInfoStoreContext.Provider>
  );
};

describe("Board Row Component Test", () => {
  test("초기 랜더링 -  제목을 포함하고 있다.", () => {
    renderBoardRow();
    const rowTitle = screen.getByTestId("row-title");

    expect(rowTitle).toBeInTheDocument();
  });

  test("초기 랜더링 -  요약된 내용을 보여주고 있다.", () => {
    renderBoardRow();
    const rowContent = screen.getByTestId("row-content");

    expect(rowContent).toBeInTheDocument();
  });

  test("초기 랜더링 -  조회수를 포함하고 있다.", () => {
    renderBoardRow();
    const rowCount = screen.getByTestId("row-count");

    expect(rowCount).toBeInTheDocument();
  });

  test("초기 랜더링 -  작성 일자를 포함하고 있다.", () => {
    renderBoardRow();
    const rowDate = screen.getByTestId("row-date");

    expect(rowDate).toBeInTheDocument();
  });

  test("초기 랜더링 -  작성자의 id를 포함하고 있다.", () => {
    renderBoardRow();
    const rowUserId = screen.getByTestId("row-user-id");

    expect(rowUserId).toBeInTheDocument();
  });

  test("게시글 행을 클릭하면 해당 게시글의 상세 페이지로 이동한다.", () => {
    const { rerender } = renderBoardRow();
    const push = jest.fn();

    // useRouter의 타입을 올바르게 설정하여 모킹
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <BoardRow
          title={mockRowData.title}
          content={mockRowData.content}
          userId={mockRowData.userId}
          postId={mockRowData.postId}
          upload={mockRowData.upload}
          count={mockRowData.count}
        />
      </UserInfoStoreContext.Provider>
    );

    const row = screen.getByTestId("row");

    fireEvent.click(row);

    expect(push).toHaveBeenCalledWith(`/post/${mockRowData.postId}`);
  });

  test("초기 랜더링 - 내 게시물인 경우 'My' 뱃지가 보인다.", async () => {
    const { rerender } = renderBoardRow();

    let badge = screen.queryByTestId("row-badge");

    expect(badge).toBeInTheDocument();

    await act(async () => {
      mockStore.setState({ id: "testUser" });
    });

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <BoardRow
          title={mockRowData.title}
          content={mockRowData.content}
          userId={mockRowData.userId}
          postId={mockRowData.postId}
          upload={mockRowData.upload}
          count={mockRowData.count}
        />
      </UserInfoStoreContext.Provider>
    );

    badge = screen.queryByTestId("row-badge");

    expect(badge).not.toBeInTheDocument();
  });
});
