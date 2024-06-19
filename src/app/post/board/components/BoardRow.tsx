"use client";
import { UserInfo } from "@/api/type";
import { useUserInfoStore } from "@/providers/UserInfoProvider";
import { useRouter } from "next/navigation";
import { FaUser } from "react-icons/fa";

interface BoardRowType {
  id: number;
  subject: string;
  content: string;
  createDate: string;
  answerList: any[];
  author: UserInfo;
  modifyDate: string | null;
}

export default function BoardRow(props: BoardRowType) {
  const { subject, content, author, createDate, id } = props;
  const { id: userId } = useUserInfoStore((state) => state);
  const router = useRouter();

  const handleOnClickRow = () => {
    router.push(`/post/detail/${id}`);
  };

  return (
    <div
      className="relative my-4 p-4 border rounded-lg container-shadow cursor-pointer hover:bg-slate-50 bg-white"
      data-testid="row"
      onClick={handleOnClickRow}
    >
      <h5 className="mb-2 text-xl font-bold" data-testid="row-title">
        {subject}
      </h5>
      <p className="mb-2 text-overflow" data-testid="row-content">
        {content}
      </p>
      <div className="flex text-sm text-gray-400">
        <div className="flex items-center">
          <FaUser className="mr-2" />
          <p className="mr-3" data-testid="row-user-id">
            {author.username}
          </p>
        </div>
        <span>|</span>
        <p className="mx-3" data-testid="row-date">
          {createDate}
        </p>
        <span>|</span>
        {/* <p className="ml-3" data-testid="row-count">
          {count.toLocaleString("ko-kr")} 회
        </p> */}
      </div>
      {author.username == userId && (
        <div
          className="absolute top-3 right-3 px-2 py-1 rounded bg-blue-500 text-white text-xs"
          data-testid="row-badge"
        >
          MY
        </div>
      )}
    </div>
  );
}
