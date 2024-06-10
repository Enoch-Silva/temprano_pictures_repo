import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import { GlobalStyle } from "../src/styles/GlobalStyle.jsx";

import { AuthProvider } from "./contexts/auth.jsx";

/*
const PrivateRoute = ({ Item }) => {
  const { logged } = useAuth();

  return logged > 0 ? <Item /> : <Login />;
};
*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
