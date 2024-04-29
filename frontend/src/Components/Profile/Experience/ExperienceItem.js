import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteExperience } from "../../../redux/Actions/StudentAction";

const ExperienceItem = ({ experience,profileid }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteExperience(experience._id));
    };
    const handleEdit=()=>{
        navigate(`/myprofile/updateExperience/${profileid}/${experience._id}`)
    }
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{experience.position}</h3>
                <div className="flex items-center space-x-2">
                    <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={handleEdit}
                        title="Edit Item"
                    >
                        <i className="fa fa-edit" style={{ fontSize: "25px" }} />
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        onClick={handleDelete}
                        title="Delete Item"
                    >
                        <i className="fa fa-trash" style={{ fontSize: "25px" }} />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">Organization:</p>
                    <p className="text-gray-700">{experience.org}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">Start Year:</p>
                    <p className="text-gray-700">{new Date(experience.start_year).toLocaleDateString()}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">End Year:</p>
                    <p className="text-gray-700">{new Date(experience.end_year).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceItem;
