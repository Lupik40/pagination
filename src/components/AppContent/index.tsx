import React, { useEffect, useState } from "react";
import getPosts from "../../services/getPosts";
import IPost from "../../types/IPost";
import Pagination from "../Pagination";
import PostsList from "../PostsList";
import Loader from "../Loader";

const AppContent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [page, setPage] = useState(0);

  const uploadPosts = async () => {
    const response = await getPosts(page + 1);
    setPosts([...posts, ...response.data]);
    setPage((prev) => prev + 1);
  };

  useEffect(() => {
    uploadPosts();
  }, []);

  return (
    <div>
      {posts.length > 0 ? (
        <Pagination onNext={uploadPosts} className={"posts"}>
          <PostsList list={posts} />
        </Pagination>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default AppContent;
