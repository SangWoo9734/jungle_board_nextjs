import PostPage from "@/app/post/detail/[postId]/page";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Post Test", () => {
  beforeEach(() => {
    render(<PostPage params={{ postId: 1 }} />);
  });

  test("초기 랜더링 - 제목이 보인다.", () => {
    const postTitle = screen.getByTestId("post-title");

    expect(postTitle).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글 본문이 보인다.", () => {
    const postContent = screen.getByTestId("post-content");

    expect(postContent).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글 조회수가 보인다.", () => {
    const postCount = screen.getByTestId("post-count");

    expect(postCount).toBeInTheDocument();
  });

  test("초기 렌더링 - 게시글 작성자가 보인다.", () => {
    const postUser = screen.getByTestId("post-user-id");

    expect(postUser).toBeInTheDocument();
  });

  test("초기 렌더링 - 댓글 영역이 존재한다.", () => {
    const postComment = screen.getByTestId("post-comment-area");

    expect(postComment).toBeInTheDocument();
  });

  test("초기 렌더링 - 댓글을 입력할 수 있는 입력란이 존재한다.", () => {
    const postCommentInput = screen.getByTestId("post-comment-input");

    expect(postCommentInput).toBeInTheDocument();
  });

  test("초기 렌더링 - 댓글 '등록' 버튼이 존재한다.", () => {
    const postCommentSubmit = screen.getByTestId("post-comment-submit");

    expect(postCommentSubmit).toBeInTheDocument();
  });

  test("댓글 입력란에 텍스트를 입력하는 경우 '등록'버튼이 활성화 된다.", () => {
    const postCommentInput = screen.getByTestId("post-comment-input");
    const postCommentSubmit = screen.getByTestId("post-comment-submit");

    fireEvent.change(postCommentInput, { target: { value: "GOOD" } });

    expect(postCommentSubmit).toHaveClass("disabled");
  });

  test("이전 포스트의 제목이 보인다.", () => {
    const postComment = screen.getByTestId("post-next");

    expect(postComment).toBeInTheDocument();
  });

  test("다음 포스트의 제목이 보인다.", () => {
    const postComment = screen.getByTestId("post-pre");

    expect(postComment).toBeInTheDocument();
  });
});
