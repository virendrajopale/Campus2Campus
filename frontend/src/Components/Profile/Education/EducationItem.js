import React from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteEducation } from '../../../redux/Actions/StudentAction';
import { FaEdit, FaTrash } from 'react-icons/fa';

const NoteItem = ({ education,profileid }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteEducation(education._id));
    };
// console.log(education._id)
    const handleEdit = () => {
        navigate(`/myprofile/updateEducation/${profileid}/${education._id}`);
    };

    return (
        <div className=" p-4 rounded-lg shadow-neumorphic">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{education.title}</h3>
                <div className="flex items-center space-x-2">
                    <button
                        className="text-indigo-600 hover:text-indigo-800 focus:outline-none"
                        onClick={handleEdit}
                        title="Edit Item"
                    >
                        <FaEdit className="w-6 h-6" />
                    </button>
                    <button
                        className="text-red-600 hover:text-red-800 focus:outline-none"
                        onClick={handleDelete}
                        title="Delete Item"
                    >
                        <FaTrash className="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2 ">
                <div className=" rounded-lg  p-4 shadow-neumorphic">
                    <p className="text-gray-700 font-semibold">School/College/University:</p>
                    <p className="text-gray-700">{education.school}</p>
                </div>
                <div className=" rounded-lg shadow-neumorphic p-4">
                    <p className="text-gray-700 font-semibold">Percentage/CGPA:</p>
                    <p className="text-gray-700">{education.percentage}</p>
                </div>
                <div className=" rounded-lg shadow-neumorphic p-4">
                    <p className="text-gray-700 font-semibold">Start Year:</p>
                    <p className="text-gray-700">{new Date(education.start_year).getFullYear()}</p>
                </div>
                <div className=" rounded-lg shadow-neumorphic p-4">
                    <p className="text-gray-700 font-semibold">End Year:</p>
                    <p className="text-gray-700">{new Date(education.end_year).getFullYear()}</p>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
