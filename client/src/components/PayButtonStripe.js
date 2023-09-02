import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";


const PayButton = ({ cartItems }) => {

    const [cookies, removeCookie] = useCookies([]);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  
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

      setUserId(userId);

      
    
  

      if (!status) {
        removeCookie("token");
        navigate("/login");
      } 
      
    };
    verifyCookie();
  }, );

 
  const handleCheckout = () => {
    if (userId) {
      axios
        .post("http://localhost:4000/stripe/create-checkout-session", {
          cartItems,
          user: userId,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.href = res.data.url;
          }
        })
        .catch((err) => console.log(err.message));
    } else {
      console.log("User is undefined");
    }
  };

  return (
    <>
      <Button   onClick={() => handleCheckout()} > Checkout</Button>
    </>
  );
};

export default PayButton;