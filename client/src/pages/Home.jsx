import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from '../components/Navbar';
import 'tailwindcss/tailwind.css'; 
import '../index.css';
import ProductCard from "../components/ProductCard";
import ProductCarousel from "../components/ProductCarousel";
import { productsApi, useGetAllProductsQuery } from "../features/productsApi";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [showToast, setShowToast] = useState(true); // Dodajemo state za prikazivanje toast-a
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
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    navigate("/signup");
  };

  useEffect(() => {
    if (showToast) { // Prikazivanje toast-a samo jednom pri montiranju komponente
      toast(`Hello ${username}`, {
        position: "top-right",
      });
      setShowToast(false); // Postavljamo showToast na false da se više ne prikazuje toast
    }
  }, [username, showToast]);

  const products = [
    { name: "Nike Air MX Super 5000", image: "https://link-to-image.com", price: 249 }
    // Ovdje dodajte proizvode koje želite prikazati u karticama
    // Npr. { name: "Nike Air MX Super 5000", image: "https://link-to-image.com", price: 249 },
    // Isto tako možete proslijediti različite propertije za svaki proizvod, ovisno o vašim potrebama.
  ];

  return (
  
    <div className="h-screen flex flex-col bg-#efefef">
      <Navbar/>
      <div class="home_page">
        
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
                  key={product.id}
                  name={product.name}
                  desc={product.desc}
                  price={product.price}
                  image={product.image}
                />
             )}
            </div>
            </>
          )}

          <Link to="/wines" className="text-indigo-500">SHOP NOW</Link>

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
      <ToastContainer />
    </div>
    
  );
};

export default Home;
