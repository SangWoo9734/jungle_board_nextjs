"use client";

import { useUserInfoStore } from "@/providers/UserInfoProvider";

interface CommentType {
  id: number;
  userId: string;
  content: string;
  upload: string;
}

export default function Comment(props: CommentType) {
  const { id } = useUserInfoStore((state) => state);
  const { userId, content, upload } = props;

  return (
    <div>
      <div>
        <div>
          <h5 data-testid="comment-user-id">{userId}</h5>
          <p data-testid="comment-upload">{upload}</p>
        </div>
        <p data-testid="comment-content">c{content}</p>
      </div>
      {id == userId && (
        <div>
          <button data-testid="comment-delete">삭제</button>
        </div>
      )}
    </div>
  );
}
