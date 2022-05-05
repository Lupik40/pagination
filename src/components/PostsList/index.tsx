import React from "react";
import PostItem from "../PostItem";
import IPost from "../../types/IPost";

interface IPostsListParams {
  list: IPost[];
}

const PostsList: React.FC<IPostsListParams> = ({ list }) => {
  return (
    <ul>
      {list.map((item) => (
        <PostItem item={item} key={Math.random()} />
      ))}
    </ul>
  );
};

export default PostsList;
