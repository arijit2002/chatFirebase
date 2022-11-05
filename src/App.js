import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./style.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" index element={<Login />} />
          <Route path="register" index element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
