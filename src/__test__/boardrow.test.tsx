import { fireEvent, render, screen } from "@testing-library/react";

import { useRouter } from "next/navigation";

import BoardRow from "@/app/postboard/components/BoardRow";

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

describe("Board Row Component Test", () => {
  beforeEach(() => {
    render(
      <BoardRow
        title={mockRowData.title}
        content={mockRowData.content}
        userId={mockRowData.userId}
        postId={mockRowData.postId}
        upload={mockRowData.upload}
        count={mockRowData.count}
      />
    );
  });

  test("초기 랜더링 -  제목을 포함하고 있다.", () => {
    const rowTitle = screen.getByTestId("row-title");

    expect(rowTitle).toBeInTheDocument();
  });

  test("초기 랜더링 -  요약된 내용을 보여주고 있다.", () => {
    const rowContent = screen.getByTestId("row-content");

    expect(rowContent).toBeInTheDocument();
  });

  test("초기 랜더링 -  조회수를 포함하고 있다.", () => {
    const rowCount = screen.getByTestId("row-count");

    expect(rowCount).toBeInTheDocument();
  });

  test("초기 랜더링 -  작성 일자를 포함하고 있다.", () => {
    const rowDate = screen.getByTestId("row-date");

    expect(rowDate).toBeInTheDocument();
  });

  test("초기 랜더링 -  작성자의 id를 포함하고 있다.", () => {
    const rowUserId = screen.getByTestId("row-user-id");

    expect(rowUserId).toBeInTheDocument();
  });

  test("게시글 행을 클릭하면 해당 게시글의 상세 페이지로 이동한다.", () => {
    const push = jest.fn();

    // useRouter의 타입을 올바르게 설정하여 모킹
    (useRouter as jest.Mock).mockImplementation(() => ({
      push,
    }));

    render(
      <BoardRow
        title={mockRowData.title}
        content={mockRowData.content}
        userId={mockRowData.userId}
        postId={mockRowData.postId}
        upload={mockRowData.upload}
        count={mockRowData.count}
      />
    );

    const row = screen.getByTestId("row");

    fireEvent.click(row);

    expect(push).toHaveBeenCalledWith(`/post/${mockRowData.postId}`);
  });
});
