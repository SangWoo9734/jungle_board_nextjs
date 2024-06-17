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
    <div>
      <input
        type="text"
        data-testid="new-post-title"
        placeholder="제목을 입력하세요."
      />
      <input
        type="text"
        data-testid="new-post-content"
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
  );
}
