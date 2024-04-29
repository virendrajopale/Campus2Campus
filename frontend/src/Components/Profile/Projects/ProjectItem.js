import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../redux/Actions/StudentAction';

const ProjectItem = ({ project,profileid }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleDelete = () => {
        dispatch(deleteProject(project._id));
    };
const handleEdit=()=>{
    navigate(`/myProfile/updateProject/${profileid}/${project._id}`)
}
    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <div className="flex items-center space-x-2">
                    <button
                        className="text-blue-500 hover:text-blue-700 focus:outline-none"
                        onClick={handleEdit}
                        title="Edit Item"
                    >
                        <i className="fa fa-edit" style={{ fontSize: '25px' }}></i>
                    </button>
                    <button
                        className="text-red-500 hover:text-red-700 focus:outline-none"
                        onClick={handleDelete}
                        title="Delete Item"
                    >
                        <i className="fa fa-trash" style={{ fontSize: '25px' }}></i>
                    </button>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">Description:</p>
                    <p className="text-gray-700">{project.description}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">Start date:</p>
                    <p className="text-gray-700">{new Date(project.start_date).toLocaleDateString()}</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-4">
                    <p className="text-gray-700 font-semibold">End date:</p>
                    <p className="text-gray-700">{new Date(project.end_date).toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    );
}

export default ProjectItem;
