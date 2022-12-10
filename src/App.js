import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./routes/Home";
import Genre from "./routes/Genre";
import Detail from "./routes/Detail";
import Nav from "./components/Nav";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        <Route path={"/Genre"} element={<Genre />} />
        <Route path={"/Detail/:id"} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
