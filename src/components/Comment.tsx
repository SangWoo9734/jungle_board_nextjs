"use client";

import { useUserInfoStore } from "@/providers/UserInfoProvider";

interface CommentType {
  id: number;
  userId: string;
  content: string;
  upload: string;
  idx: number;
}

export default function Comment(props: CommentType) {
  const { id } = useUserInfoStore((state) => state);
  const { userId, content, upload, idx } = props;

  return (
    <div
      className={`my-3 p-2 border-t border-b border-gray-200 ${
        idx % 2 ? "bg-gray-50" : "bg-white"
      }`}
    >
      <div>
        <div className="flex justify-between">
          <h5 className="text-sm font-bold" data-testid="comment-user-id">
            {userId}
          </h5>
          <p className="text-xs" data-testid="comment-upload">
            {upload}
          </p>
        </div>
        <p className="py-3" data-testid="comment-content">
          {content}
        </p>
      </div>
      {id == userId && (
        <button className="text-gray-300 text-xs" data-testid="comment-delete">
          삭제
        </button>
      )}
    </div>
  );
}
