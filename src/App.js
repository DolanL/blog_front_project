import Container from "@mui/material/Container";

import { Header } from "./components";
import { AddPost, FullPost, Home, Login, Registration } from "./pages";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { meTC } from "./store/auth-reducer/auth-reducer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(meTC());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/posts/:id"} element={<FullPost />} />
          <Route path={"/posts/create"} element={<AddPost />} />
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
