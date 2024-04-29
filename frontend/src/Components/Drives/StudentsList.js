import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getStudsOfDrive } from '../../redux/Actions/DriveAction';
import { resetDriveState } from '../../redux/Slices/DriveSlice';
import { useParams } from 'react-router-dom';

const StudentsList = () => {
    const dispatch = useDispatch();
    const { loading, error, students } = useSelector((state) => state.drives);
    const { id } = useParams();

    useEffect(() => {
        dispatch(getStudsOfDrive(id));
       
    }, [dispatch, id]);

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (error) {
        return <div className="text-white">Error: {error}</div>;
    }

    return (
        <div className="text-white">
            <table className='min-w-full divide-y divide-white'>
                <thead className="bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Registration Number</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Year</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Placed</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Ckeck</th>
                    </tr>
                </thead>
                <tbody className="bg-gray-700 divide-y divide-white">
                    {students && students.map((student, index) => (
                        <tr key={index}>
                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.reg_no}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.email}</td>

                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.dept}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.year}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{student.profile.placed ? 'Yes' : 'No'}</td>
                            <td>
                              <button onClick={()=>dispatch()}>Yes</button>
                              <button>No</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsList;
