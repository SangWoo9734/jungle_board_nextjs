"use client";

import { useRouter } from "next/navigation";

export default function NewPostPage() {
  const router = useRouter();

  const handleOnClickCancle = () => {
    router.back();
  };
  const handleOnClickUpload = () => {
    router.push("/post/board");
  };
  return (
    <div className="max-w-3xl m-auto px-7 py-5 border-2 rounded-3xl bg-white">
      <h2 className="text-2xl font-bold">NEW POST</h2>
      <div className="max-w-3xl m-auto py-3">
        <input
          type="text"
          data-testid="new-post-title"
          placeholder="제목을 입력하세요."
          className="w-full px-2 py-3 border text-input"
        />
        <textarea
          data-testid="new-post-content"
          className="w-full h-40 px-2 py-3 border text-input"
          placeholder="내용을 입력하세요."
        />
        <div>
          <button
            type="button"
            data-testid="new-post-cancel"
            onClick={handleOnClickCancle}
          >
            취소
          </button>
          <button
            type="button"
            data-testid="new-post-upload"
            onClick={handleOnClickUpload}
          >
            업로드
          </button>
        </div>
      </div>
    </div>
  );
}
