import React from 'react';
import { useForm } from 'react-hook-form';
import {useDispatch,useSelector} from 'react-redux'
import { createDrive } from '../../redux/Actions/DriveAction';

function NewDrive() {
    const { register, handleSubmit, errors } = useForm();
    const dispatch=useDispatch();
    const onSubmit =  (formData) => {
        dispatch(createDrive(formData))
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" name="CompanyName" placeholder="Company Name" {...register("CompanyName")} />
            <input type="text" name="JobTitle" placeholder="Job Title" {...register(("JobTitle"))} />
            <input type="text" name="JobDescription" placeholder="Job Description" {...register("JobDescription",{ required: true })} />
            <input type="text" name="Package" placeholder="Job Package" {...register("Package",{ required: true })} />

            
            <input type="text" name="ExpectedOpening" placeholder="Job ExpectedOpening" {...register("ExpectedOpening",{ required: true })} />

            
            <input type="text" name="EligibilityCriteria" placeholder="Job EligibilityCriteria" {...register("EligibilityCriteria",{ required: true })} />
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default NewDrive;
