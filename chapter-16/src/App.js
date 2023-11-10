import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import EditPost from "./EditPost";
import useAxiosFetch from "./hooks/useAxiosFetch";
import { useStoreActions } from "easy-peasy";
import { useEffect } from "react";

function App() {
  const setPosts = useStoreActions((actions) => actions.setPosts);
  const { data, isLoading, fetchError } = useAxiosFetch(
    "http://localhost:3500/posts"
  );

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts]);
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav />
      {/* <Router> */}
      <Routes>
        <Route
          path="/"
          element={<Home isLoading={isLoading} fetchError={fetchError} />}
        />
        <Route path="/post" element={<NewPost />} />
        <Route path="/edit/:id" element={<EditPost />} />
        <Route path="/post/:id" element={<PostPage />} />
        <Route path="/about" element={<About />} />
        <Route path="*" Component={Missing} />
      </Routes>
      {/* </Router> */}

      <Footer />
    </div>
  );
}

export default App;
