import { getPostList } from "@/api/post";
import { useQuery } from "@tanstack/react-query";

// const useGetPostList = () => {
//   const { data, isLoading, error } = useQuery({
//     queryKey: ["post-list"],
//     queryFn: getPostList,
//   });

//   console.log(data);

//   return {
//     data,
//     isLoading,
//     error,
//   };
// };

const useGetPostList = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
    },
  };

  const response = await fetch(
    "https://cb40-118-34-210-95.ngrok-free.app/question/list",
    options
  )
    .then((response) => response.json())
    .catch((err) => console.error(err));

  return response;
};

export default useGetPostList;
