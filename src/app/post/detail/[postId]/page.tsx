"use client";
import { useState } from "react";
import { FaUser } from "react-icons/fa";

import Comment from "@/components/Comment";

export default function PostPage({ params }: { params: { postId: number } }) {
  const { postId } = params;
  const [commentContent, setCommentContent] = useState("");

  const handleCommentContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCommentContent(e.target.value);
  };

  return (
    <div className="max-w-3xl m-auto p-3">
      <div className="px-7 py-5 border-2 rounded-3xl bg-white">
        <div>
          <h2 className="text-2xl font-bold" data-testid="post-title">
            Title : {postId}
          </h2>
          <div className="flex justify-end text-sm text-gray-400">
            <div className="flex items-center">
              <FaUser className="mx-1" />
              <p data-testid="post-user-id">user-id</p>
            </div>
            <span className="mx-4">|</span>
            <p data-testid="post-count">372794 회</p>
          </div>
        </div>
        <div>
          <p className="my-5" data-testid="post-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non et
            sequi quod expedita sed rem odit asperiores repudiandae. Vitae unde
            ratione sunt! Porro necessitatibus et deserunt aut, veritatis
            distinctio dolorum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Non et sequi quod expedita sed rem odit asperiores
            repudiandae. Vitae unde ratione sunt! Porro necessitatibus et
            deserunt aut, veritatis distinctio dolorum.
          </p>
        </div>
        <hr className="my-5 bg-white" />
        <div data-testid="post-comment-area">
          <div>
            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={1}
            />

            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={2}
            />

            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={3}
            />

            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={4}
            />

            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={5}
            />

            <Comment
              id={12323}
              userId={"zxcv8403"}
              content={"잘봤습니다. 잘봤습니다. 잘봤습니다. 잘봤습니다."}
              upload={"2024/04/04"}
              idx={6}
            />
          </div>
          <div className="flex gap-4 mt-5 ">
            <input
              type="text"
              placeholder="댓글을 입력해주세요."
              className="flex-1 px-4 py-2 rounded-lg border"
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
      </div>
      <div className="my-4 px-7 py-3 border-2 rounded-3xl bg-white">
        <div data-testid="post-pre">이전글 : </div>
        <hr className="my-3" />
        <div data-testid="post-next">다음글 : </div>
      </div>
    </div>
  );
}
