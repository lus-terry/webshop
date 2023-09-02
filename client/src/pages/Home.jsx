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
import text from "../components/Texts"
import { Button } from "semantic-ui-react";
import ProductCardHomePage from "../components/ProductCardHomePage";
import { useSelector } from "react-redux";



const Home = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [userId, setUserId] = useState("");
  const googleMapsUrl = "https://www.google.hr/maps/dir/''/in+sylvis+vina/@45.1814456,13.7978012,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x477cb04e3446e4d9:0x702e92e3308b55d5!2m2!1d13.867841!2d45.181467";

 
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
      console.log("Response data:", data);
      
      const { status, user, userId, role } = data;

      setUsername(user);
      setRole(role);
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





  return (
  
    <>
      <Navbar/>
    <div className="content_container">

    
      
      <div className="h-400px">

      </div>

        <div className="custom-text-color">
              {role === '1' ? (
              <div className="flex flex-col items-center " style={{ letterSpacing: '0.3em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Welcome admin
                <button className="button_special razmaknut_text text-base" onClick={() => navigate("/admin/summary")} style={{ width: '400px' }}>
                  ADMIN PANEL
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center " style={{ letterSpacing: '0.3em', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                Welcome {username}
              </div>
            )}
        </div>
   

        <div className="parent_div ">
        
        {/* Dodajte 5 div-ova koji su "responsive" */}
        <div className="child_div items-center custom-bg-color">
          <div className="w-1/2 text-center flex flex-col  items-center custom-bg-color">
          <div className="w-4/5 items-right text-left custom-bg-color">
          <div className="razmaknuti_text custom-bg-color pb-5">ABOUT US</div>
            <div className=" pb-5 obican_text custom-bg-color normal-case">
              {text.aboutUsShort }

            
            </div>
            <Button className="razmaknut_text text-base" onClick={() => navigate("/aboutUs") } style={{width: '300px'}}>Find out more</Button>
 
          </div>
          </div>
   
          
          
     
          
          
          <div className="w-1/2 text-center">
          <img
            className="h-100  object-cover"
            src="https://res.cloudinary.com/lus-terry/image/upload/v1693072361/275790152_699286514831796_230813501338605570_n_oys7n8.jpg"
            alt="aboutUs"
          />
          </div>
        </div>
        

        
        <div className="child_div flex-col p-5  gap-4" style={{height: '700px'}}>
          <div className="razmaknuti_text custom-bg-color ">OUR WINES</div>

          
          {isLoading ? (
            <p>Loading...</p>
           ) : error ? (
          <p>An error occured </p>
           ) : ( 
            <>
           
              <div className="flex " > 
                {data?.map(product => 
                  <ProductCardHomePage
                  key = {product._id}
                  product = {product}
                />
                )}
              </div>
            </>
          )}
          
          <Button className="razmaknut_text text-base" onClick={() => navigate("/shop") } style={{width: '500px'}}>EXPLORE MORE</Button>
     
        </div>
        {/*
        <div className="child_div relative">
        <div className="w-4/6 h-500px overflow-hidden ">
        <img
            className="w-full h-auto transform -translate-y-50px"
            src="https://res.cloudinary.com/lus-terry/image/upload/v1692986960/webShop/219947670_4243206002434746_8364436056942375805_n_p9btn0.jpg"
            alt="visitUs"
          />
          <Button className="absolute bottom-0 right-0 ">Visit us</Button>
        </div>
        
        </div>
        
        <div className="child_div">
          GALLERY
        </div>
        */}
 
        <div className="child_div flex flex-col gap-1 obican_text normal-case text-left items-left pb-5 " style={{height: '350px' , borderTop: '1.5px solid #657140'}}>
       
                  <div className=" razmaknut_text uppercase custom-bg-color text-left pb-5 text-2xl">
                    Visit us
                  </div>
                  <div className="text-left ">

                  Turčinovići 81, Sv. Petar u Šumi 52404

                  <br/>
                  
                  How to find us?   
                  <br/>
                  <div className="text-center">
                  <a className="underline uppercase" href={googleMapsUrl} target="_self">
                  Otvori Google Maps
                </a>
                  


                  </div>
                         <br/>
                  insylvisvina@gmail.com
                  <br/>
                  
                  <div className="flex "> 
                  GSM:
                  <a href="tel:+385989475313">+385 98 9475 313</a> /{" "}
                  <a href="tel:+385998744262">+385 99 8744 262</a> 
                  </div>
                  
              
                
          
              </div>
                  </div>
     
  
        </div>
      </div>
   
 
    </>
    
  );
};

export default Home;
