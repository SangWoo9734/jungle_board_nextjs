import { getPostDetail } from "@/api/post";
import { Post } from "@/api/type";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

// const useGetPostDetail = ({ id }: { id: number }) => {
//   // const { data, isLoading, error } = useQuery<Post, AxiosError>({
//   //   queryKey: ["post", id],
//   //   queryFn: () => getPostDetail(id),
//   // });

//   const { data, isLoading, error } = useQuery<Post, AxiosError>({
//     queryKey: ["post", id],
//     queryFn: () => getPostDetail(id),
//   });

//   return {
//     data,
//     isLoading,
//     error,
//   };
// };

const useGetPostDetail = async ({ id }: { id: number }) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    `https://cb40-118-34-210-95.ngrok-free.app/question/detail/${id}`,
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};

export default useGetPostDetail;
