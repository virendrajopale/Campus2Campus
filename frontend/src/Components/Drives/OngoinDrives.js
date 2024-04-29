import { useContext, useEffect } from "react"

import stucontext from "../../context/stucontext"
import Spinner from "../../Spinner/Spinner"
import DriveItem from './DriveItem';
import { useSelector } from "react-redux"
import { getAllDrives } from "../../redux/Actions/DriveAction"

const Drives_cnt = () => {
    const { drives,profile } = useSelector(state=>state.drives);
    // console.log(profile);
    return (
        <>
          
            <div className="ReqCnt container">
                <h4>Ongoing Drives</h4>
                {drives.map((ele) => <DriveItem Drive={ele} />)}
            </div>
        </>
    )
}
const OngoingDrives = () => {
    const { drives} = useSelector(state=>state.drives);
    useEffect(() => {
        // setloading(true);
        // fetchprofile();
        getAllDrives();
    }, []);

    return (
        <>
          
            {/* {profile.student._id=='' ? <Spinner /> : <Drives_cnt />} */}
        </>
    )
}
export default OngoingDrives;