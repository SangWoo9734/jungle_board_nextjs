"use client";

import { useRouter } from "next/navigation";
import Button from "@/components/Button";
import { FaBook } from "react-icons/fa";

interface BoardHeaderProps {
  boardLength: number;
}

export default function BoardHeader({ boardLength }: BoardHeaderProps) {
  const router = useRouter();

  const handleNewPostBtn = () => {
    router.push("/post/new");
  };
  return (
    <div className="px-1 py-2 flex justify-between items-center">
      <p data-testid="board-post-length">
        총<span className="text-xl font-bold text-red-400">{boardLength}</span>
        개
      </p>

      <Button
        variant="primary"
        size="fit"
        onClick={handleNewPostBtn}
        data-testid="board-post-new"
      >
        <FaBook className="mr-2" />
        NEW POST
      </Button>
    </div>
  );
}
