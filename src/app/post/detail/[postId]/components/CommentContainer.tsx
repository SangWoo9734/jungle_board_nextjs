"use client";
import InputField from "@/components/Input";
import CommentRow from "./CommentRow";
import Button from "@/components/Button";
import { useState } from "react";
import { Comment } from "@/api/type";

interface CommentContainerProps {
  comments: Comment[];
}

export default function CommentContainer({ comments }: CommentContainerProps) {
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };
  return (
    <div data-testid="post-comment-area">
      <div>
        {comments.length > 0 ? (
          <>
            {comments.map((comment: Comment, index) => (
              <CommentRow
                id={comment.id}
                userId={comment.author.username}
                content={comment.content}
                upload={comment.createDate}
                idx={index}
              />
            ))}
          </>
        ) : (
          <div className="my-7 px-2">댓글이 없습니다.</div>
        )}
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
