"use client";
import { useState } from "react";

export default function PostPage({ params }: { params: { postId: number } }) {
  const { postId } = params;
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  return (
    <div>
      <div>
        <h2 data-testid="post-title">Title : {postId}</h2>
        <div>
          <p data-testid="post-user-id">user-id</p>
          <span>|</span>
          <p data-testid="post-count">372794</p>
        </div>
        s
      </div>
      <div>
        <p data-testid="post-content">Content</p>
      </div>
      <div data-testid="post-comment-area">
        <div>
          <input
            type="text"
            placeholder="댓글을 입력해주세요."
            data-testid="post-comment-input"
            onChange={handleCommentContent}
          />
          <button
            type="button"
            data-testid="post-comment-submit"
            className={commentContent == "" ? "" : "disabled"}
          >
            등록
          </button>
        </div>
      </div>
      <div>
        <div data-testid="post-pre">이전글</div>
        <div data-testid="post-next">다음글</div>
      </div>
    </div>
  );
}
