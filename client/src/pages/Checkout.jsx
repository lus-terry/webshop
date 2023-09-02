import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import SmallCart from "../components/SmallCart";
import { createOrder } from "../features/CheckoutSlice";
import '../index.css';


const Checkout = () => {

  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [cookies, removeCookie] = useCookies([]);
  const [orderId, setOrderId] = useState("");
  const [generatedId, setGeneratedId] = useState("");
  const [oreder, setOrde] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      console.log("Response data:", data);
      
      const { status, user, userId, role } = data;

      setUsername(user);
      setUserId(userId);
      
      localStorage.setItem('userId', userId);
  

      if (!status) {
        removeCookie("token");
        navigate("/login");
      } else {
        
        console.log("user logged");
      }
    };
    verifyCookie();
  }, );



    const navigate = useNavigate();
    const dispatch = useDispatch();
     const cart = useSelector((state) => state.cart);


    const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    postalCode: "",
    phone: "",
  });


    const { firstName, lastName, company, address, apartment, city, country, postalCode, phone } = inputValue;
    const handleOnChange = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e) => {
  e.preventDefault();

  const newOrder = {
    username: username,
    userId: userId,
    products: cart.cartItems.map((cartItem) => ({
      productId: cartItem._id,
      productName: cartItem.name,
      productPrice: cartItem.price,
      quantity: cartItem.cartTotalQuantity,
      subtotal: cartItem.price * cartItem.cartTotalQuantity,
    })),
    total: cart.cartTotalAmount,
    shipping: {
      firstName,
      lastName,
      company,
      address,
      apartment,
      city,
      country,
      postalCode,
      phone,
    },
    delivery_status: "pending",
    payment_status: "pending", // Promijenite ako imate logiku plaćanja
  };

  try {
    const { payload: generatedId } = await dispatch(createOrder(newOrder));
 
    console.log("vraceni generated id:", generatedId);
    
    setGeneratedId(generatedId);


    toast.success("Your order was successful!");

    navigate(`/checkout-success/${generatedId}`);
  } catch (error) {
    // Obrada greške ako se dogodi
    console.error(error);
  }
};



    return (

            <div className="login-page flex items-center h-screen gap-10" >
            <Navbar/>


            <div className="p-10 flex gap-5 w-screen px-20">

           
        
   

         <div className="form_container_checkout flex flex-col  w-1/2 p-6 bg-white rounded-lg shadow-md">
         
        <div className="text-2xl mb-4 text-center">Checkout</div>
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div className="flex flex-col text-center py-2 ">
            Shipping address
            <div className="flex flex-row ">
            <input
              type="text"
              name="firstName"
              value={firstName}
              placeholder="First name"
              onChange={handleOnChange}
              className="custom-input w-1/2"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              placeholder="Last name"
              onChange={handleOnChange}
              className="custom-input w-1/2"
            />
            </div>

            <input
              type="text"
              name="company"
              value={company}
              placeholder="Company (optional)"
              onChange={handleOnChange}
              className="custom-input"
            />

            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={handleOnChange}
              className="custom-input"
            />

            <input
              type="text"
              name="apartment"
              value={apartment}
              placeholder="Apartment, suite, etc. (optional)"
              onChange={handleOnChange}
              className="custom-input"
            />

            <input
              type="text"
              name="city"
              value={city}
              placeholder="City"
              onChange={handleOnChange}
              className="custom-input"
            />

            <div className="flex flex-row">



            <select 
                name="country"
                value={country}
                className="custom-input w-1/2"
                >
                <option value="" disabled selected>Select Country</option>
                <option value="Croatia">Croatia</option>
                {/* Add more options here */}
            </select>
            <input
              type="text"
              name="postalCode"
              value={postalCode}
              placeholder="Postal code"
              onChange={handleOnChange}
              className="custom-input w-1/2"
            />
            </div>

            <input
              type="phone"
              name="phone"
              value={phone}
              placeholder="Phone (optional)"
              onChange={handleOnChange}
              className="custom-input"
            />
            
          </div>
          
          <div className="items-center justify-center">
            <button
              type="submit"
              className="submit_button"
            >
              ORDER
            </button>
          </div>
        
         <div className="items-center">
         
        </div>
         
          
        </form>
        
        <ToastContainer />
      </div>
        
      <div className="form_container_checkout flex flex-col w-1/2 p-6 bg-white rounded-lg shadow-md">
        <div className="text-2xl mb-4 text-center">Cart</div>
        <SmallCart/>

      </div>

        </div>
   

      
    </div>










  
    );
};

export default Checkout;
