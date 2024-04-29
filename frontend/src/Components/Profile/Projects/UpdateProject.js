import { useContext, useEffect, useState } from "react";
import {useNavigate, useParams} from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";
import { updateProject } from "../../../redux/Actions/StudentAction";
const UpdateProject=()=>{
    const navigate=useNavigate();

    const {project}=useSelector(state=>state.profile);

    const {id}=useParams();


    // var p1={title:"",description:"",start_date:"",end_date:""};
    var p1=project && project.projects && project.projects.find((project)=>project._id===id);
   
    const [projects,setproject]=useState({
        title:p1?.title,
        description:p1?.description,
        start_date:p1?.start_date,
        end_date:p1?.end_date,
    });
    const handle_change=(event)=>{
        setproject({...projects,[event.target.name]:event.target.value});
        // console.log();
    }

    // useEffect(()=>{
    //     p1=projects.find((project)=>project._id=id);
    //     setproject(p1);
    // })
    const dispatch=useDispatch()
    const updateForm=()=>{
        // console.log(project)
        dispatch(updateProject({id,projects}));
        navigate('/user/profile')
    }
    return (
        <>
            <form style={{marginTop:"80px",marginLeft:"50px"}}>
            <h2>Add Project</h2>
            <h6>Title and description must have minimum length of 5 characters</h6>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Project Title</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" value={projects?.title} onChange={handle_change}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Project description</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" value={projects?.description} name="description" onChange={handle_change}/>
                </div>
                <div className="mb-3" style={{"width":"500px"}}>
                    <label for="exampleInputPassword1" className="form-label">Starting Date</label>
                    <input type="Date" className="form-control" id="exampleInputPassword1" value={projects?.start_date} name="start_date" onChange={handle_change}/>
                </div>
                <div className="mb-3" style={{"width":"500px"}}>
                    <label for="exampleInputPassword1" className="form-label">Ending Date</label>
                    <input type="Date" className="form-control" id="exampleInputPassword1" value={projects?.end_date} name="end_date" onChange={handle_change}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={updateForm}>Submit</button>
            </form>
        </>
    )
}

export default UpdateProject;