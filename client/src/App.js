import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Signup, Admin } from "./pages";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Wines from "./pages/Wines";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/wines" element={<Wines />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
  );
}

export default App;
