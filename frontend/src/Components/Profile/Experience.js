import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaBriefcase, FaAngleDown, FaAngleUp } from "react-icons/fa";
import ExperienceItem from "./Experience/ExperienceItem";

const Experience = ({ experience,profileid }) => {
  const navigate = useNavigate();
  const [showItems, setShowItems] = useState(false);
  const experienceRef = useRef(null);

  const handleAddExperience = () => {
    navigate("/myprofile/addExperience");
  };

  const toggleItems = () => {
    setShowItems(!showItems);
  };

  return (
    <div className=" rounded-lg p-6 ">
      <div className="grid grid-cols-3 gap-4 items-center mb-6">
        <h3 className="text-2xl font-bold flex items-center col-span-1">
          <FaBriefcase className="text-indigo-600 mr-2" />
          Experience
        </h3>
        <div className="flex justify-center col-span-1">
          <button
            type="button"
            className="bg-gradient-to-r from-gray-300 to-gray-200 hover:bg-gradient-to-r hover:from-gray-200 hover:to-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg flex items-center focus:outline-none focus:ring focus:ring-gray-300 shadow-md"
            onClick={handleAddExperience}
          >
            <FaPlus className="text-gray-700" />
          </button>
        </div>
        <div className="flex justify-end col-span-3 md:col-span-1">
          
        </div>
      </div>
      <div
        className="flex gap-4  items-center justify-center" >
        {experience &&
          experience.Experience &&
          experience.Experience.map((exp, index) => (
            <ExperienceItem key={index} experience={exp} profileid={profileid}/>
          ))}
      </div>
    </div>
  );
};

export default Experience;
