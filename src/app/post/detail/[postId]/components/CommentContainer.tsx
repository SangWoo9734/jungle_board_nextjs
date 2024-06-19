import InputField from "@/components/Input";
import CommentRow from "./CommentRow";
import Button from "@/components/Button";
import { useState } from "react";

export default function CommentContainer() {
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };
  return (
    <div data-testid="post-comment-area">
      <div>
        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={1}
        />

        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={2}
        />

        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={3}
        />

        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={4}
        />

        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={5}
        />

        <CommentRow
          id={12323}
          userId={"zxcv8403"}
          content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
          upload={"2024/04/04"}
          idx={6}
        />
      </div>
      <div className="flex gap-4 mt-5 ">
        <InputField
          type="text"
          placeholder="댓글을 입력해주세요."
          data-testid="post-comment-input"
          onChange={handleCommentContent}
        />
        <Button
          disabled={commentContent == ""}
          data-testid="post-comment-submit"
        >
          POST
        </Button>
      </div>
    </div>
  );
}
