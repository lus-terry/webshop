import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast } from "react-toastify";
import Navbar from '../components/Navbar';
import 'tailwindcss/tailwind.css'; 
import '../index.css';
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../features/productsApi";


const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [toastDisplayed, setToastDisplayed] = useState(false);
  const {data, error, isLoading} = useGetAllProductsQuery();


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
      const { status, user, role } = data;
      setUsername(user);
      if (!status) {
        removeCookie("token");
        navigate("/login");
      } else if (!toastDisplayed) { // Check if the toast has not been displayed
        toast.success(`Hello ${user}! Welcome to the homepage.`);
        
        setToastDisplayed(true); // Set the flag to true
      }
    };
    verifyCookie();
  }, );

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

 



  return (
  
    <>
      <Navbar/>
      
      <div className="content_container">
        
        <h4>
          Welcome <span>{username}</span>
        </h4>
        <button onClick={Logout}>LOGOUT</button>

        <div className="parent_div ">
        
        {/* Dodajte 5 div-ova koji su "responsive" */}
        <div className="child_div ">
          <div className="w-1/2 text-center">bla bla o nama</div>
          <div className="w-1/2 text-center">slika</div>
        </div>
        
        <div className="child_div flex-col ">

          
          {isLoading ? (
            <p>Loading...</p>
           ) : error ? (
          <p>An error occured </p>
           ) : ( 
            <>
           
              <div className="flex " > 
                {data?.map(product => 
                  <ProductCard
                  key = {product.id}
                  product = {product}
                />
                )}
              </div>
            </>
          )}
          
          <button onClick={() => navigate("/shop")}>shop</button>
          <Link to="/shop" className="text-indigo-500">SHOP NOW</Link>

        </div>
        
        <div className="child_div">
          VISIT
        </div>
        
        <div className="child_div">
          GALLERY
        </div>
        
        <div className="child_div">
          CONTACT
        </div>

        </div>
      </div>
   

    </>
    
  );
};

export default Home;
