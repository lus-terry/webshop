import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import '../index.css';
import { Button } from "semantic-ui-react";

const Signup = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    username: "",
  });
  const { email, password, username } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-right",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
      username: "",
    });
  };

  return (
    <div className="login-page flex items-center justify-center h-screen" style={{ backgroundImage: `url(https://res.cloudinary.com/dnqsbxztj/image/upload/v1679954835/InSylvis/Untitled_design_xxfkzk.png)`, backgroundSize: 'cover' }}>
    <div className="form_container w-full max-w-md p-6 bg-white rounded-lg shadow-md">
    <div className="text-2xl mb-4 text-center">Signup Account</div>
      <form onSubmit={handleSubmit} className="space-y-4">
      
        <div>
        <label htmlFor="email" className="block font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleOnChange}
              className="custom-input"
            />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-gray-700">
              Username
            </label>
            <input
               type="text"
            name="username"
            value={username}
            placeholder="Enter your username"
              onChange={handleOnChange}
              className="custom-input"
            />
        </div>
        <div>
        <label htmlFor="password" className="block font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleOnChange}
              className="custom-input"
            />
        </div>
        <div className="items-center">
            <Button
              type="submit"
              className="submit_button"
            >
              Submit
            </Button>
          </div>
         <div className="items-center">
         <span className="flex items-center justify-even gap-2">
            <div>Already have an account?</div><div className="p-1"><Link to="/login" className="custom-details-color hover:font-bold">Login</Link></div> 
          </span>
         </div>
          
        </form>
      <ToastContainer />
    </div>
    </div>
  );
};

export default Signup;