import React from "react";
import Feed from "./Feed";
import { useStoreState } from "easy-peasy";

const Home = ({ isLoading, fetchError }) => {
  const searchResults = useStoreState((state) => state.searchResults);
  return (
    <main className="Home">
      {isLoading ? (
        <p>Loading...</p>
      ) : fetchError ? (
        <p style={{ color: "red" }}>{fetchError}</p>
      ) : searchResults.length ? (
        <Feed searchResults={searchResults} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No posts to display.</p>
      )}
    </main>
  );
};

export default Home;
