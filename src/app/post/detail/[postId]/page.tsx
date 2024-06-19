import { FaUser } from "react-icons/fa";

import CommentContainer from "./components/CommentContainer";

export default function PostPage({ params }: { params: { postId: number } }) {
  const { postId } = params;

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
        <CommentContainer />
      </div>
      <div className="my-4 px-7 py-3 border-2 rounded-3xl bg-white">
        <div data-testid="post-pre">이전글 : </div>
        <hr className="my-3" />
        <div data-testid="post-next">다음글 : </div>
      </div>
    </div>
  );
}
