"use client";

import { useRouter } from "next/navigation";

import Button from "@/components/Button";
import InputField from "@/components/Input";

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
      <div className="max-w-3xl m-auto py-3 [&>*]:my-2">
        <InputField
          type="text"
          placeholder="제목"
          data-testid="new-post-title"
        />
        {/* TODO: */}
        <textarea
          data-testid="new-post-content"
          className="w-full h-40 px-2 py-3 border text-input"
          placeholder="내용을 입력하세요."
        />
        <div className="flex justify-end gap-3 mt-4">
          <Button
            variant="warning"
            size="fit"
            onClick={handleOnClickCancle}
            data-testid="new-post-cancel"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            size="fit"
            onClick={handleOnClickUpload}
            data-testid="new-post-upload"
          >
            Upload
          </Button>
        </div>
      </div>
    </div>
  );
}
