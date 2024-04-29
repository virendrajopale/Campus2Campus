import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaPlus,
  FaProjectDiagram,
  FaAngleDown,
  FaAngleUp,
  FaHome,
} from "react-icons/fa";
import { HiArrowRight, HiOutlineUserGroup } from "react-icons/hi";
import { MdArrowDownward, MdArrowForward, MdArrowUpward, MdDashboard } from "react-icons/md";
import { GoGitPullRequest } from "react-icons/go";
import { BsClipboardPlus } from "react-icons/bs";
import { SlArrowLeft, SlArrowRight, SlGraduation, SlGrid, SlNote, SlOrganization, SlPeople } from "react-icons/sl";
import { BiUserX } from "react-icons/bi";

import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";
import { DefaultAccordion } from "../redux/Slices/Accordian";
import { PiStudentLight } from "react-icons/pi";

const Sidebar = () => {
  const [showItems, setShowItems] = useState(false);
  const [open, setOpen] = useState(false);
  const [accOpn, setAccOpnn] = useState(0);
  const handleSidebar=()=>{
    setOpen(!open)
  }
  const handleOpen = (value) => {

    setAccOpnn(accOpn === value ? 0 : value)};
  const allyear = [
    {
      year: "first",
      text: "First Year",
    },
    {
      year: "second",
      text: "Second Year",
    },
    {
      year: "third",
      text: "Third Year",
    },
    {
      year: "final",
      text: "Final Year",
    },
  ];

 const links=[
    
 ]
  return (
    <div className=" md:flex hidden">
      {/* ${open?"w-12":"w-42"}  */}
      {
        <div
          className={` bg-blue-950/30 backdrop-blur-md h-screen z-20 text-white pt-20 pl-4 pr-2 relative  ${
            open ? "w-full " : "w-1/3"
          } ease-in-out duration-500`}
        >
          <div className=" absolute bottom-2 -right-3 bg-white   rounded-full ">
            <button
              className=" p-2 text-black  "
              type="button"
              onClick={()=>{handleSidebar();setAccOpnn(0)}}
            //   onClick={()=>setAccOpnn(1)}
            >
              {open ? <SlArrowLeft /> : <SlArrowRight />}
            </button>
          </div>
          <div className=" flex flex-col gap-y-4 ">
          
              
          <Link className=" flex gap-x-4 items-center cursor-pointer active:text-red-500 focus:text-red-500 focus:scale-110 duration-200"  to={"/"}
                >
              <span
               
              >
                <SlGrid size={20} />
              </span>
              <h1
                className={` origin-left overflow-hidden  font-medium duration-300 ${
                  open && "scale-110"}`}
              >
              
                Dashboard
              </h1>
            </Link>

              
        
          
            <Link className="flex gap-x-4 items-center cursor-pointer active:text-red-500 focus:text-red-500 focus:scale-110 duration-200"  to={"/PendingRequests"}
                >
              <span
               
              >
                <SlPeople size={20} />
              </span>
              <h1
                className={` origin-left overflow-hidden  font-medium duration-300 ${
                  open && "scale-110"}`}
              >
              
                Requests
              </h1>
            </Link>
            <Link className="flex gap-x-4 items-center cursor-pointer  active:text-red-500 focus:text-red-500 focus:scale-110 duration-200"  to={"/drives/new"}
                >
              <span
               
              >
                <SlNote size={20} />
              </span>
              <h1
                className={` origin-left overflow-hidden  font-medium duration-300 ${
                  open && "scale-110"}`}
              >
              
                New
              </h1>
            </Link>
            <Link className="flex gap-x-4 items-center cursor-pointer  active:text-red-500 focus:text-red-500 focus:scale-110 duration-200"  to={"/drives"}
                >
              <span
              >
                <SlOrganization size={20} />
              </span>
              <h1
                className={` origin-left overflow-hidden  font-medium duration-300 ${
                  !open && "scale-110"}`}
              >
                New
              </h1>
            </Link>
            <Link  className="flex gap-x-4  items-center cursor-pointer overflow-hidden  active:text-red-500 focus:text-red-500 focus:scale-110 duration-200 "  to={"/allstudents"}>
            <div className="flex flex-col ">

        <div  className="flex justify-start gap-x-4 ">
        <SlGraduation size={20} />
        <p className={`flex items-center gap-1 `} onClick={() => handleOpen(1)}>

        Students
       {/* {!accOpn ? <MdArrowDownward className="animate-bounce"/>:<MdArrowUpward/>} */}
       <MdArrowDownward className={`transition-transform ${accOpn?" rotate-180":"rotate-0 animate-bounce "} duration-400 `}/>
        </p> 
            
        </div>
            <Accordion open={accOpn === 1} className=" flex flex-col" >
        <AccordionBody className=" flex flex-col text-white items-center gap-y-2  active:text-red-500 focus:text-red-500 focus:scale-110 duration-200">
         {
            allyear.map((yr,index)=>(
               <Link to={`/allstudents/${yr.year}`} className="textwehite  hover:scale-105 pl-3 self-center duration-300  active:text-red-500 focus:text-red-500 focus:scale-110 duration-200 ">{yr.text}</Link>
            ))
         }
        </AccordionBody>
      </Accordion>
            </div>
            </Link>
          </div>
          <>
         
          </>
            
         
        </div>
      }
    </div>
  );
};

export default Sidebar;
