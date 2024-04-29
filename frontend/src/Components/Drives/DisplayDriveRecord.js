import { useContext, useEffect, useState } from "react";
import Spinner from "../../Spinner/Spinner";

import { useParams } from "react-router-dom";
import Row from "./row";

import { useDispatch, useSelector } from "react-redux";
import { getStudsOfDrive } from "../../redux/Actions/DriveAction";
import { fetchProfileByID } from "../../redux/Actions/StudentAction";
const DriveRecord_cnt = (props) => {
    const { drives,students } = useSelector(state=>state.drives);
    const params = useParams();
    // console.log("length "+DriveStu.length);
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getStudsOfDrive())
    })
    return (
        <>
            {/* <div className="container">
                <p>Company Name: <spam>{curDrive.CompanyName}</spam></p>
                <p>JobTitle: <spam>{curDrive.JobTitle}</spam></p>
                <p>JobDescription: <spam>{curDrive.JobDescription}</spam></p>
                <p>Package: <spam>{curDrive.Package}</spam></p>
                <p>ExpectedOpening: <spam>{curDrive.ExpectedOpening}</spam></p>
                <p>EligibilityCriteria: <spam>{curDrive.EligibilityCriteria}</spam></p>
            </div> */}
            <div className="container">
                <h4>Selected Students</h4>
                <table>
                    <tr>
                        <th>Sr no</th>
                        <th>Name</th>
                        <th>10th Percentage</th>
                        <th>12th percentage</th>
                        <th>Btech CGPA</th>
                        <th>Year</th>
                        <th>Placed</th>
                    </tr>
                    {students && students.map((stu, index) => <Row stu={stu} index={index + 1}/>)}

                </table>
            </div>
        </>
    )
}


const DriveRecord = () => {
    // const { fetchCurDrive, curDrive, fetchprofile, loading, fetchInterestedStu, setloading,setDriveStu,fetchEligibleStu,fetchSelectedStu } = useContext(TpoAdminContext);
    const { students } = useSelector(state=>state.drives);
    const params = useParams();
    // const [loaddata, setloaddata] = useState(true);
    const [Students, setStudents] = useState([]);
    // setDriveStu([]);
    const dispatch=useDispatch()
    useEffect(() => {
        // console.log(params.category);
        // setDriveStu([]);
        // setloading(true);
        // fetchProfileByID();
        // fetchCurDrive(params.id);
        fetchProfileByID(params.id);
        // setloading(false);
    }, []);

    return (
        <>
           
             <DriveRecord_cnt />
        </>
    )
}

export default DriveRecord;