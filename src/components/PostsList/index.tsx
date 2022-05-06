import React from "react";
import IPost from "../../types/IPost";
import PostItem from "../PostItem";
import "./styles.scss";

interface IPostsListParams {
  list: IPost[];
}

const PostsList: React.FC<IPostsListParams> = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item) => (
        <PostItem item={item} key={Math.random()} />
      ))}
    </ul>
  );
};

export default PostsList;
