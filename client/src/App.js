import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login, Signup, Admin, Shop, Cart, CheckoutSuccess, Summary, Products, CreateProduct, Users, Orders, AboutUs, Visit, Gallery, Contact, Favourites, Checkout} from "./pages";
import Home from "./pages/Home";



function App() {
  return (
      <div className="App custom-bg-color">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/visit" element={<Visit />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-success/:orderId" element={<CheckoutSuccess />} />
          <Route path="/admin" element={<Admin />}>
              <Route path="summary" element={<Summary />} />
              <Route path="products" element={<Products />}>
                <Route path="create-product" element={<CreateProduct />} />
              </Route>
              <Route path="users" element={<Users />} />
              <Route path="orders" element={<Orders />} />
            </Route>
         {/*<Route path="*" element={<NotFound />} /> */}  
        </Routes>
      </div>
  );
}

export default App;
