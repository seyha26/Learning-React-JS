import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useStoreActions, useStoreState } from "easy-peasy";
const PostPage = () => {
  const deletePost = useStoreActions((actions) => actions.deletePost);
  const getPostById = useStoreState((state) => state.getPostById);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = getPostById(id);

  return (
    <main className="PostPage">
      <article className="post">
        {post ? (
          <>
            <h2>{post.title}</h2>
            <p className="postDate">{post.datetime}</p>
            <p className="postBody">{post.body}</p>
            <Link to={`/edit/${id}`}>
              <button className="editButton">Edit Post</button>
            </Link>
            <button
              className="deleteButton"
              onClick={() => {
                deletePost(post.id);
                navigate("/");
              }}
            >
              Delete Post
            </button>
          </>
        ) : (
          <>
            <h2>Post Not Found.</h2>
            <p>Well, that's disappointed.</p>
            <p>
              <Link to="/">Visit our HomePage</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PostPage;
