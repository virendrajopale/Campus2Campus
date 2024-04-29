import { useDispatch } from "react-redux";
import { acceptRegistrationRequest, rejectRegistrationRequest } from "../../redux/Actions/UserAction";
import { IoIosCheckmarkCircleOutline, IoIosCloseCircleOutline } from 'react-icons/io';
import { FcApproval,FcCancel,FcBusinessman,FcCalendar,FcContacts,FcDepartment,FcDiploma2 } from "react-icons/fc";
const RequestItem = (props) => {
    const { req } = props;
    const dispatch= useDispatch()
    const id=req._id;

    const acceptReq = () => {
        try {
            dispatch(acceptRegistrationRequest(id))
        } catch(err) {
            console.log(err);
        }
    }

    const rejectReq = () => {
        try {
            dispatch(rejectRegistrationRequest(id))
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <div className="bg-white/30 text-white  backdrop-blur-lg shadow-lg rounded-lg p-6 grid grid-cols-6 gap-1">
        <div className=" col-span-1 flex flex-col justify-center items-center hover:scale-105 duration-300">
        <FcBusinessman size={100}/>
            <p className="text-lg font-semibold mb-4 ">{req.name}</p>

        </div>
        

            <p className=" flex flex-col justify-center items-center gap-2 font-thin hover:scale-105 duration-300">
            <FcContacts size={60}/>
            <span className="font-semibold text-gray-600">Registration No:</span> {req.reg_no}
            </p>
            <p className=" flex flex-col justify-center items-center font-thin hover:scale-105 duration-300">
            <FcDepartment size={60}/>
            <span className="font-semibold text-gray-600">Department:</span> {req.dept}</p>
            <p className=" flex flex-col justify-center items-center font-thin hover:scale-105 duration-300">
            <FcDiploma2 size={60}/>
            <span className="font-semibold text-gray-600">Year of Study:</span> {req.year}</p>
            <p className=" flex flex-col justify-center items-center font-thin hover:scale-105 duration-300">
            <FcCalendar size={60}/>
            <span className="font-semibold text-gray-600">Date of Birth:</span> {`${new Date(req.dob).getDate()}/${new Date(req.dob).getMonth()}/${new Date(req.dob).getFullYear()}`}</p>
        
            <div className="mt-4 flex justify-center col-span-1 items-center flex-col gap-4">
                <button className=" border hover:border-green-600  text-white px-4 py-2 rounded-md flex w-32  items-center  " onClick={acceptReq}>
                    <FcApproval className="mr-2" />
                    Accept
                </button>
                <button className=" border hover:border-red-600 text-white px-4 py-2 rounded-md flex w-32 items-center" onClick={rejectReq}>
                    <FcCancel className="mr-2" />
                    Reject
                </button>
            </div>
        </div>
    )
}

export default RequestItem;
