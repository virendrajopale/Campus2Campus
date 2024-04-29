import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaGraduationCap, FaAngleDown, FaAngleUp } from "react-icons/fa";

import EducationItem from "./Education/EducationItem";

const Education = ({ education,profileid,setPopup,popup }) => {
  const navigate = useNavigate();
  const [showItems, setShowItems] = useState(false);
  const educationRef = useRef(null);

  const handleAddEducation = () => {
    navigate("/myprofile/addEducation");
  };

  const toggleItems = () => {
    setShowItems(!showItems);
    // setPopup(!popup)
   
  };

  return (
    <div className=" rounded-lg p-6 overflow-x-auto h-fit">
      <div className="grid grid-cols-2 gap-4 items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center col-span-1">
          <FaGraduationCap className="text-indigo-600 mr-2" />
          Education
        </h3>
        <div className="flex justify-center col-span-1">
          <button
            type="button"
            className="bg-gradient-to-r from-gray-300 to-gray-200 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 text-gray-800
             font-semibold py-2 px-4 rounded-lg flex items-center focus:outline-none focus:ring focus:ring-gray-300 shadow-md"
            onClick={handleAddEducation}
          >
            <FaPlus className="text-gray-700" />
          </button>
        </div>
        
      </div>
      <div
        className={`flex gap-4  items-center justify-center`}
        ref={educationRef} >
        {education &&
          education.educations &&
          education.educations.map((edu, index) => (
            <EducationItem profileid={profileid} key={index} education={edu} />
          ))}
      </div>
    </div>
  );
};

export default Education;
