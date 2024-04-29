import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { addProject } from "../../../redux/Actions/StudentAction";
import { FaProjectDiagram, FaCalendarAlt } from "react-icons/fa";

const AddNote = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [projects, setProjects] = useState({
    title: "",
    description: "",
    start_date: new Date(),
    end_date: new Date(),
  });

  const handleInputChange = (event) => {
    setProjects({ ...projects, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addProject(projects));
    navigate("/user/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center">
            <FaProjectDiagram className="mr-2 text-indigo-600" />
            Add Project
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Title and description must have a minimum length of 5 characters
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className=" text-sm font-medium text-gray-700 flex items-center">
              <FaProjectDiagram className="mr-2 text-indigo-600" />
              Project Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              autoComplete="title"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={projects.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="description" className=" text-sm font-medium text-gray-700 flex items-center">
              <FaProjectDiagram className="mr-2 text-indigo-600" />
              Project Description
            </label>
            <input
              type="text"
              name="description"
              id="description"
              autoComplete="description"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={projects.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="start_date" className=" text-sm font-medium text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-600" />
              Starting Date
            </label>
            <DatePicker
              selected={projects.start_date}
              onChange={(date) => setProjects({ ...projects, start_date: date })}
              dateFormat="dd/MM/yyyy"
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
            />
          </div>
          <div>
            <label htmlFor="end_date" className=" text-sm font-medium text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-600" />
              Ending Date
            </label>
            <DatePicker
              selected={projects.end_date}
              onChange={(date) => setProjects({ ...projects, end_date: date })}
              dateFormat="dd/MM/yyyy"
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
            />
          </div>
          <div>
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;