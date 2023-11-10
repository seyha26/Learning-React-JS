import React, { useContext } from "react";
import Feed from "./Feed";
import DataContext from "./context/DataContext";

const Home = () => {
  const { isLoading, posts, fetchError } = useContext(DataContext);
  return (
    <main className="Home">
      {isLoading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p style={{ color: "red" }}>{fetchError}</p>
      ) : posts.length ? (
        <Feed />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
