import { fireEvent, render, screen } from "@testing-library/react";

import { useRouter } from "next/navigation";

import NewPostPage from "@/app/post/new/page";

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));

describe("New Post Test", () => {
  const push = jest.fn();
  const back = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();

    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
      back,
    }));

    render(<NewPostPage />);
  });

  test("초기 랜더링 - 제목을 입력할 수 있다.", () => {
    const titleInput = screen.getByTestId("new-post-title");

    expect(titleInput).toBeInTheDocument();
  });
  test("초기 랜더링 - 내용을 입력할 수 있다.", () => {
    const contentInput = screen.getByTestId("new-post-content");

    expect(contentInput).toBeInTheDocument();
  });
  test("초기 랜더링 - 해당 글을 게시할 수 있는 버튼이 있다.", () => {
    const uploadBtn = screen.getByTestId("new-post-upload");

    expect(uploadBtn).toBeInTheDocument();
  });
  test("초기 랜더링 - 해당 글을 취소할 수 있는 버튼이 있다.", () => {
    const cancelBtn = screen.getByTestId("new-post-cancel");
    expect(cancelBtn).toBeInTheDocument();
  });

  test("업로드 버튼을 누르면 게시글 목록('/post/board')로 이동한다.", () => {
    const uploadBtn = screen.getByTestId("new-post-upload");

    fireEvent.click(uploadBtn);

    expect(push).toHaveBeenCalledWith("/post/board");
  });

  test("취소 버튼을 누르면 이전 페이지로 이동한다.", () => {
    const cancelBtn = screen.getByTestId("new-post-cancel");

    fireEvent.click(cancelBtn);

    expect(back).toHaveBeenCalledTimes(1);
  });
});
