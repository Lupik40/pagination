import React from "react";
import IPost from "../../types/IPost";
import "./styles.scss";

interface IPostItemParams {
  item: IPost;
}

const PostItem: React.FC<IPostItemParams> = ({ item }) => {
  return (
    <li className="item">
      <h2>{item.title}</h2>
      <p>{item.body}</p>
    </li>
  );
};

export default PostItem;
