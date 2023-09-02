import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import '../../index.css';
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideNav";


const Admin = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);

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
      const { status, } = data;
   
      if (!status) {
        removeCookie("token");
        navigate("/login");
      }
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);


  return (
    <>
      
        <Navbar/>
        <Sidebar/>
        <div className="content_container_admin">
        
        <div className="flex flex-col items-center justify-center text-center " >
        
          <Outlet  />
      
        </div>
        </div>
            

       
  
     
    </>
  );
};

export default Admin;