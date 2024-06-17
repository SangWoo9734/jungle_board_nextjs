import { useRouter } from "next/navigation";

interface BoardRowType {
  title: string;
  content: string;
  userId: string;
  upload: string;
  postId: number;
  count: number;
}

export default function BoardRow(props: BoardRowType) {
  const { title, content, userId, upload, postId, count } = props;
  const router = useRouter();

  const handleOnClickRow = () => {
    router.push(`/post/${postId}`);
  };

  return (
    <div data-testid="row" onClick={handleOnClickRow}>
      <h5 data-testid="row-title">{title}</h5>
      <p data-testid="row-content">{content}</p>
      <div>
        <p data-testid="row-user-id">{userId}</p>
        <p data-testid="row-date">{upload}</p>
        <p data-testid="row-count">{count}</p>
      </div>
    </div>
  );
}
