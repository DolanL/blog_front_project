import Container from "@mui/material/Container";

import { Header } from "./components";
import { Home, FullPost, Registration, AddPost, Login } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "@types/react";
import { setPostsTC } from "./store/posts-reducer/posts-reducer";
import { useAppDispatch } from "./store/store";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setPostsTC);
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/posts/:id"} element={<FullPost />} />
          <Route path={"/add-post"} element={<AddPost />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Registration />} />
          {/*<FullPost />*/}
          {/*<AddPost />*/}
          {/*<Login />*/}
          {/*<Registration />*/}
        </Routes>
      </Container>
    </>
  );
}

export default App;
