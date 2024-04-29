
import { useDispatch, useSelector } from "react-redux";
import {useNavigate, useParams } from "react-router-dom";


const Applicationform_cnt = () => {
    const { profile,ApplyDrive } = useContext(stucontext);
    const navigate=useNavigate();
    const params=useParams();
    const {drive}=useSelector(state=>state.drive)
    
    const handleSubmit=()=>{
     
    }
    return (
        <>
            <form className="container" style={{ marginTop: "100px" }}>
                <div className="container">
                    <h2>Application Form</h2>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
                        <input type="text" className="form-control" disabled="true" value= {profile.student.name}/>
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" aria-describedby="emailHelp" disabled="true" value= {profile.student.email} />
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
                        <input type="Number" className="form-control" aria-describedby="emailHelp" disabled="true" value= {profile.student.mob_no} />
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">10th Percentage</label>
                        <input type="Number" className="form-control" aria-describedby="emailHelp" disabled="true" value= {profile.education[0].percentage} />
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">12th/Diploma Percentage</label>
                        <input type="Number" className="form-control" aria-describedby="emailHelp" disabled="true" value= {profile.education[1].percentage} />
                    </div>

                    <div>
                        <label htmlFor="exampleInputEmail1" className="form-label">Btech CGPA</label>
                        <input type="Number" className="form-control" aria-describedby="emailHelp" disabled="true" value= {profile.education[2].percentage} />
                    </div>
                    <button className="btn btn-primary" type="button" onClick={()=>{ApplyDrive(params.id); navigate('/')}}>Submit</button>
                </div>
            </form>
        </>
    )
}
const Applicationform = () => {
    const { profile, fetchprofile } = useContext(stucontext);
    const params = useParams();
    useEffect(() => {
        fetchprofile();
    }, [])
    return (
        <>
            <Header />
            <Navbar />
            {profile.student._id == '' ? <Spinner /> : <Applicationform_cnt />}
        </>
    )
}

export default Applicationform;