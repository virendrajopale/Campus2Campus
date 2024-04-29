import { useContext, useEffect } from "react"


import RequestItem from './RequestItem';
import './Requests.css'
import { useDispatch, useSelector } from "react-redux"
import { fetchAllStudents, fetchRegistrationRequests } from "../../redux/Actions/UserAction";

const Requests_cnt = () => {
    const{reqUsers}= useSelector(state=>state.users)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchRegistrationRequests())
       
    },[dispatch])
    return (
        <>
            <div className=" m-2 ">
                <h4 className="text-center p-4 text-2xl text-white border rounded-lg animate-pulse flex flex-col">Pending Registration Requests</h4>
                {reqUsers && reqUsers.map((ele,index) => <RequestItem key={index} req={ele} />)}
            </div>
        </>
    )
}
const Requests = () => {
   
    return (
        <>
           
            <Requests_cnt />
           
        </>
    )
}
export default Requests;