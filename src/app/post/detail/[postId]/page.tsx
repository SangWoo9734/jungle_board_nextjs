import { FaUser } from "react-icons/fa";
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";

import CommentContainer from "./components/CommentContainer";
import useGetPostDetail from "@/hooks/apis/useGetPost";

export default async function PostPage({
  params,
}: {
  params: { postId: number };
}) {
  const { postId } = params;

  const response = await useGetPostDetail({ id: postId });

  return (
    <div className="max-w-3xl m-auto p-3">
      <div className="px-7 py-5 border-2 rounded-3xl bg-white">
        <div>
          <h2 className="text-2xl font-bold" data-testid="post-title">
            {response.subject}
          </h2>
          <div className="flex justify-end text-sm text-gray-400">
            <div className="flex items-center">
              <FaUser className="mx-1" />
              <p data-testid="post-user-id">{response.author.username}</p>
            </div>
            <span className="mx-4">|</span>
            <p data-testid="post-count">{response.createDate}</p>
          </div>
        </div>
        <div>
          <p className="my-5" data-testid="post-content">
            {response.content}
          </p>
        </div>
        <hr className="my-5 bg-white" />
        <CommentContainer comments={response.answerList} />
      </div>
      <div className="flex justify-between items-center my-4 px-7 py-3 border-2 rounded-3xl bg-white">
        <a
          className="flex gap-3 items-center"
          href={`/post/detail/${parseInt(`${postId}`) - 1}`}
          data-testid="post-pre"
        >
          <FaRegHandPointLeft />
          <span>이전글</span>
        </a>
        <a
          className="flex gap-3 items-center"
          href={`/post/detail/${parseInt(`${postId}`) + 1}`}
          data-testid="post-next"
        >
          <span>다음글</span>
          <FaRegHandPointRight />
        </a>
      </div>
    </div>
  );
}
