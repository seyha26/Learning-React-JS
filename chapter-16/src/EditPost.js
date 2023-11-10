import React, { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";
import { useStoreActions, useStoreState } from "easy-peasy";

const EditPost = () => {
  const editTitle = useStoreState((state) => state.editTitle);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const editBody = useStoreState((state) => state.editBody);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const getPostById = useStoreState((state) => state.getPostById);
  const editPost = useStoreActions((actions) => actions.editPost);
  const navigate = useNavigate();
  const { id } = useParams();
  const post = getPostById(id);

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    editPost({ id, title: editTitle, body: editBody, datetime });

    navigate("/");
  };

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditBody, setEditTitle]);

  return (
    <main className="NewPost">
      {editTitle ? (
        <>
          <h2>Edit Post</h2>
          <form className="newPostForm" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title: </label>
            <input
              id="postTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post: </label>
            <textarea
              id="postBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
            />
            <button type="submit" onClick={() => handleEdit(post.id)}>
              Submit
            </button>
          </form>
        </>
      ) : (
        <>
          <h1>Post not found.</h1>
          <p>Well, that's disappointed.</p>
          <p>
            <Link to="/">Visit our Homepage.</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
