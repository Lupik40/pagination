import React, { useEffect, useState } from "react";
import getPosts from "../../services/getPosts";
import Loader from "../Loader";
import Pagination from "../Pagination";
import PostsList from "../PostsList";
import IPost from "../../types/IPost";

const AppContent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loadPosts, setLoadPosts] = useState(true);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts([...posts, ...response.data]);
      })
      .finally(() => setLoadPosts(false));
  }, [loadPosts]);

  const onNext = () => {
    setLoadPosts(true);
  };

  return (
    <h1>
      {posts.length > 0 ? (
        <Pagination onNext={onNext} className={"posts"}>
          <PostsList list={posts} />
        </Pagination>
      ) : (
        <Loader />
      )}
    </h1>
  );
};

export default AppContent;
