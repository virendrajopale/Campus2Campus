import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEducation } from "../../../redux/Actions/StudentAction";
import { FaGraduationCap, FaUniversity, FaCalendarAlt, FaPercentage } from "react-icons/fa";

const AddEducation = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [education, setEducation] = useState({
    title: "",
    school: "",
    start_year: "",
    end_year: "",
    percentage: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // For CGPA/percentage, ensure the value is not negative and not greater than 100
    if (name === "percentage") {
      if (value === "" || (parseFloat(value) >= 0 && parseFloat(value) <= 100)) {
        setEducation({ ...education, [name]: value });
      }
    } else {
      setEducation({ ...education, [name]: value });
    }
  };

  const handleSubmit = () => {
    dispatch(addEducation(education));
    navigate("/user/profile");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900 flex items-center justify-center">
            <FaGraduationCap className="mr-2 text-indigo-600" />
            Add Education
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Title and description must have a minimum length of 5 characters
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaGraduationCap className="mr-2 text-indigo-600" />
              Education Level
            </label>
            <select
              name="title"
              id="title"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={education.title}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Education Level</option>
              <option value="PhD">PhD</option>
              <option value="Post Graduation">Post Graduation</option>
              <option value="Graduation">Graduation</option>
              <option value="Intermediate (12th)">Intermediate (12th)</option>
              <option value="High School (10th)">High School (10th)</option>
            </select>
          </div>
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaUniversity className="mr-2 text-indigo-600" />
              School/College/University
            </label>
            <input
              type="text"
              name="school"
              id="school"
              autoComplete="school"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={education.school}
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
              value={education.start_year}
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
              value={education.end_year}
              onChange={handleInputChange}
              placeholder="Enter Ending Year"
              min={1900}
              max={new Date().getFullYear() + 5}
            />
          </div>
          <div>
            <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 flex items-center">
              <FaPercentage className="mr-2 text-indigo-600" />
              Overall Percentage/CGPA
            </label>
            <input
              type="number"
              name="percentage"
              id="percentage"
              min="0"
              max="100"
              required
              className="mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              value={education.percentage}
              onChange={handleInputChange}
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

export default AddEducation;