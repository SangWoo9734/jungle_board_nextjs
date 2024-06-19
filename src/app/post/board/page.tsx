import BoardRow from "./components/BoardRow";
import BoardHeader from "./components/BoardHeader";
import useGetPostList from "@/hooks/apis/useGetPostList";
import { Post } from "@/api/type";
import { useQuery } from "react-query";
import { getPostList } from "@/api/post";

export default async function PostBoardPage() {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: ["post-list"],
  //   queryFn: getPostList,
  // });
  const response = await useGetPostList();

  return (
    <div className="max-w-3xl m-auto px-5 pb-5">
      <BoardHeader boardLength={response.content.length} />
      <hr className="py-1" />
      <div data-testid="board-post-list">
        {response.content.map((data: Post, index: number) => {
          return <BoardRow key={index} {...data} />;
        })}
      </div>
    </div>
  );
}
