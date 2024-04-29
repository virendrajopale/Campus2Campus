import React from 'react'
import { useNavigate, Link } from "react-router-dom";
import { LiaUserEditSolid } from "react-icons/lia";

const PopUp = (props) => {
    const navigate = useNavigate();

    const gotToProfile = () => {
        navigate('/user/profile');
    }

    if (!props.popup) return null;
    return (
        <div className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm
        flex justify-center items-center h-screen '>
            <div className='bg-white rounded-sm flex flex-col gap-4 justify-center items-center'>
                {/* <LiaUserEditSolid size={50} /> */}

                <div>
                    
                {props.children}
                </div>
                <button onClick={() => props.setPopup(!props.popup)} className='bg-gray-500 text-white text-center shadow-neumorphic hover:bg-gray-600 font-semibold p-2 w-20 rounded-sm focus:outline-none'>
                    OK
                </button>
            </div>
        </div>
    );
}

export default PopUp;
