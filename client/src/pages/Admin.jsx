import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Navbar from "../components/Navbar";
import '../index.css';

const Admin = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState("");
  const [showToast, setShowToast] = useState(true); // Dodajemo state za prikazivanje toast-a

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

  const handleLogout = () => {
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

  return (
    <>
      <div className="admin_page">
        <Navbar/>
        <button onClick={handleLogout}>LOGOUT</button>
      </div>
      <ToastContainer />
    </>
  );
};

export default Admin;
