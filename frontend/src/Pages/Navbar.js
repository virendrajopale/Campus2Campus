import { Link, useNavigate } from "react-router-dom";
import Connect2Campus from '../Assets/Connect2Campus_.png'
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import Sidebar from "./Sidebar";
const Navbar = ({ role }) => {
  const navigate = useNavigate();
  const isLoggedIn = sessionStorage.getItem('tocken');
  const [opn,setOpn]=useState(false)
  const handleLogout = () => {
    sessionStorage.removeItem('tocken');
    sessionStorage.removeItem('role');
    navigate('/user/login');
  };
console.log(role)
const links=[
  {
  linkTo:"/drives/new",
  rol:["TPO_Admin"] ,
  text:" New Drives"
  },
  
    {
      linkTo:"/drives",
      rol:["Student","TPO_Admin","TPO_Dept_Admin"] ,
      text:"Drives"
      },
      {
        linkTo:"/user/profile",
        rol:["Student"],
        text:"Profile"
        },
        {
          linkTo:"/user/login",
          rol:role ,
          text:"Login"
          },
          {
            linkTo:"/user/signup",
            rol:role ,
            text:"Signup"
            },
            {
              linkTo:"",
              rol:role ,
              text:"LogOut"
              },

]
  return (
    <nav className="bg-black/20 backdrop-blur-md   fixed w-full top-0 z-30 font-sand">
      <div className={" mx-auto flex md:items-center md:justify-between"}>
        
        <div className="logo">
          <Link
            to="/">
            <img className=" h-16 overflow-none animate-pulse" src={Connect2Campus}></img>
          </Link>
        </div>
        <ul className=" md:flex space-x-4">
        
          {isLoggedIn && role === 'TPO_Admin' && (
            <li>
            <Link
              to="/drives/new"

            >
             
              <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'>  New Drives</span>
                  <span className=' absolute left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'> Drives</span>
                </div>
            </Link>
          </li>)}
          <li>
            <Link
              to="/drives"

            >
              
              <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'> Drives</span>
                  <span className=' absolute left-0 text-blue-400 font-bold  translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'> Drives</span>
                </div>
            </Link>
          </li>
          {isLoggedIn && role === 'Student' && (
            <li>
              <Link
                to="/user/profile"
              >
               
                <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'> Profile</span>
                  <span className=' absolute left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'> Profile</span>
                </div>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link
                to="/user/login"

              >
                
                <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'>Login</span>
                  <span className=' absolute left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'>Login</span>
                </div>
              </Link>
            </li>
          )}
          {!isLoggedIn && (
            <li>
              <Link
                to="/user/login"

              >
                

                <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'>Signup</span>
                  <span className=' absolute left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'>Signup</span>
                </div>
              </Link>
            </li>
          )}
          
          {isLoggedIn && (
            
            <li>
              <Link
                onClick={handleLogout}
               
              >
                <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'>Logout</span>
                  <span className='absolute  left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 '>Logout</span>

                </div>
              </Link>
            </li>
          )}
         
        </ul>
        <Link className="hidden md:flex"
                to="/user/contact/TPO" >
                

                <div className=' group overflow-hidden relative cursor-pointer  uppercase leading-6 text-white'>
                  <span className=' inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%] font-Texturina'>Contact</span>
                  <span className=' absolute left-0 text-blue-400 font-bold translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0 font-Texturina'>Contact</span>
                </div>
              </Link>
      </div>


     {/* <div>

     </div> */}
      
    </nav>

  );
};

export default Navbar;