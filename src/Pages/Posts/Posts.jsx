import React from "react";
import { useParams } from "react-router-dom";
import { Loading } from "../../Components";

export const Posts = () => {
  const {userId} = useParams();

  const [posts, setPost] = React.useState({
    isLoading: true,
    isError: false,
    data: [],
  });

  React.useEffect(() => {
    fetch(`http://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then((res) => res.json())
      .then((data) =>
        setPost({
          ...posts,
          isLoading: false,
          data: data,
        })
      )
      .catch((err) =>
        setPost({
          isError: err,
          isLoading: false,
        })
      );
  }, []);

  return (
    <div>
      <h1>Posts</h1>

      {posts.isLoading && <Loading />}
      {posts.isError && <strong>Error..</strong>}

      {posts.data.length > 0 && (
        <ul>
          {posts.data.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.body}</p> <br />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
