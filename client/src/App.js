import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Signup, Admin, Shop, Cart} from "./pages";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </div>
  );
}

export default App;
