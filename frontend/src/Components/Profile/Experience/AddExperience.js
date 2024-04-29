import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addExperience } from "../../../redux/Actions/StudentAction";
import { FaBriefcase, FaCalendarAlt } from "react-icons/fa";

const AddExperience = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [exp, setExp] = useState({
    position: "",
    org: "",
    start_year: "",
    end_year: "",
  });

  const handleInputChange = (event) => {
    setExp({ ...exp, [event.target.name]: event.target.value });
  };

  const handleSubmit = () => {
    dispatch(addExperience(exp));
    navigate("/user/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center">
            <FaBriefcase className="mr-2 text-indigo-600" />
            Add Experience
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Position and organization must have a minimum length of 5 characters
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaBriefcase className="mr-2 text-indigo-600" />
              Position of Responsibility
            </label>
            <input
              type="text"
              name="position"
              id="position"
              autoComplete="position"
              required
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={exp.position}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="org" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaBriefcase className="mr-2 text-indigo-600" />
              Organization
            </label>
            <input
              type="text"
              name="org"
              id="org"
              autoComplete="org"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={exp.org}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="start_year" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-600" />
              Starting Year
            </label>
            <input
              type="number"
              name="start_year"
              id="start_year"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={exp.start_year}
              onChange={handleInputChange}
              placeholder="Enter Starting Year"
              min={1900}
              max={new Date().getFullYear() + 1}
            />
          </div>
          <div>
            <label htmlFor="end_year" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaCalendarAlt className="mr-2 text-indigo-600" />
              Ending Year (completed or expecting to complete)
            </label>
            <input
              type="number"
              name="end_year"
              id="end_year"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={exp.end_year}
              onChange={handleInputChange}
              placeholder="Enter Ending Year"
              min={1900}
              max={new Date().getFullYear() + 5}
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

export default AddExperience;