import BoardRow from "./components/BoardRow";
import BoardHeader from "./components/BoardHeader";

const mockData = [
  {
    title: "Title 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 2",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu843fda0",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8ds430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 3",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "abc123",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 4",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "avad",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 5",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "testUser",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 6",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu84fsdfa30",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 7",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 8",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 9",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
  {
    title: "Title 10",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum quo harum aliquid placeat? Reprehenderit adipisci fugiat repellendus accusamus laudantium blanditiis, cumque architecto voluptas vel magnam aliquid quasi cupiditate temporibus recusandae!",
    userId: "psu8430",
    upload: "2024/05/05",
    postId: 123123,
    count: 1231231,
  },
];

export default function PostBoardPage() {
  return (
    <div className="max-w-3xl m-auto px-5 pb-5">
      <BoardHeader boardLength={mockData.length} />
      <hr className="py-1" />
      <div data-testid="board-post-list">
        {mockData.map((data, index) => {
          return <BoardRow key={index} {...data} />;
        })}
      </div>
    </div>
  );
}
