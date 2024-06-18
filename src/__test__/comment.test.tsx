import { act, render, screen } from "@testing-library/react";

import { UserInfoStoreContext } from "@/providers/UserInfoProvider";
import { createUserInfoStore } from "@/stores/UserInfoStore";

import Comment from "@/components/Comment";

const mockCommentData = {
  id: 1234,
  userId: "psu8430",
  content:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, veritatis cupiditate? Reiciendis deserunt saepe autem possimus, officia unde sit laboriosam, ipsam facere repellat dolor perspiciatis tempora similique corporis esse. At?",
  upload: "2024/05/06",
  idx: 3,
};

const mockStore = createUserInfoStore({
  id: "testUser",
});

jest.mock("../providers/UserInfoProvider", () => ({
  ...jest.requireActual("../providers/UserInfoProvider"),
  useUserInfoStore: jest.fn((selector) => selector(mockStore.getState())),
}));

const renderComment = () => {
  return render(
    <UserInfoStoreContext.Provider value={mockStore}>
      <Comment
        id={mockCommentData.id}
        userId={mockCommentData.userId}
        content={mockCommentData.content}
        upload={mockCommentData.upload}
        idx={mockCommentData.idx}
      />
    </UserInfoStoreContext.Provider>
  );
};

describe("Comment Component Test", () => {
  test("초기 랜더링 - 작성자 id가 보인다.", () => {
    renderComment();

    const commentUserId = screen.getByTestId("comment-user-id");

    expect(commentUserId).toBeInTheDocument();
  });

  test("초기 랜더링 - 댓글 내용이 보인다.", () => {
    renderComment();

    const commentUserId = screen.getByTestId("comment-content");

    expect(commentUserId).toBeInTheDocument();
  });

  test("초기 랜더링 - 댓글 작성 날짜가 보인다.", () => {
    renderComment();

    const commentUpload = screen.getByTestId("comment-upload");

    expect(commentUpload).toBeInTheDocument();
  });

  test("초기 랜더링 - 작성자와 현재 사용자의 ID가 동일할 경우 삭제 버튼이 보이고, 다를 경우 보이지 않는다.", async () => {
    const { rerender } = renderComment();

    // TODO:
    let commentDeletBtn = screen.queryByTestId("comment-delete");

    expect(commentDeletBtn).not.toBeInTheDocument();

    await act(async () => {
      mockStore.setState({ id: mockCommentData.userId });
    });

    rerender(
      <UserInfoStoreContext.Provider value={mockStore}>
        <Comment
          id={mockCommentData.id}
          userId={mockCommentData.userId}
          content={mockCommentData.content}
          upload={mockCommentData.upload}
          idx={mockCommentData.idx}
        />
      </UserInfoStoreContext.Provider>
    );

    commentDeletBtn = screen.queryByTestId("comment-delete");

    expect(commentDeletBtn).toBeInTheDocument();
  });
});
