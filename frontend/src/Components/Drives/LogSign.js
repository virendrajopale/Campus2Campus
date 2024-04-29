import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import Login from "./Login";
import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
const LogSign = ({role}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };
  const delay = ms => new Promise(res => setTimeout(res, ms));
  const run=()=>{
    delay(5000)
  }
  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="max-w-3xl w-full h-full">
        <ReactCardFlip
          isFlipped={isFlipped}
          flipDirection="horizontal"
          containerStyle={{ "margin-top": "30px" }}
        >
            <div className="flex justify-center items-center bg-black/30 text-white  backdrop-blur-lg shadow-lg rounded-lg  ">
      <div className="max-w-3xl w-full    p-4  ">

            <Login role={role}/>
         
        <div className=" flex justify-center items-center gap-2 my-2 text-xl text-white animate-pulse    p-4 outline rounded-lg shadow-m">
          <p>New Here.. Register Yourself?</p>{" "}
          <a className=" text-blue-700 cursor-pointer" onClick={handleClick}>
            {" "}
            Sign Up
          </a>
        </div>

          </div>
          </div>

          {/* <div> */}
          <div className="flex justify-center items-center bg-white/30 text-white  backdrop-blur-lg shadow-lg rounded-lg  ">
      <div className="max-w-3xl w-full   p-4  ">

            <Signup />
        
        <div className=" flex justify-center items-center gap-2 my-2 text-xl text-white animate-pulse    p-4 outline rounded-lg shadow-m">
          <p>Already Have Account?</p>{" "}
          <a className=" text-blue-700 cursor-pointer" onClick={handleClick}>
            {" "}
            Log In
          </a>
        </div>
 
          </div>
          </div>
        </ReactCardFlip>
      </div>
      
    </div>
  );
};

export default LogSign;
