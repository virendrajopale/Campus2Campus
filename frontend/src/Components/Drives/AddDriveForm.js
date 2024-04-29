import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createDrive } from "../../redux/Actions/DriveAction";
import { FaProjectDiagram, FaCalendarAlt, FaPlus } from "react-icons/fa";
import { GoOrganization } from "react-icons/go";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { MdDescription, MdMonetizationOn } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { MdOutlineOpenInBrowser } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useForm, useFieldArray,Controller } from "react-hook-form";
import { FcCheckmark, FcPlus } from "react-icons/fc";
import { FaCheck, FaIndianRupeeSign } from "react-icons/fa6";
import { BiInfoCircle } from "react-icons/bi";
import { IoBriefcaseOutline } from "react-icons/io5";
import { PiSubtitlesBold, PiSubtitlesLight } from "react-icons/pi";
import toast from 'react-hot-toast';
import {Button,FormControl,InputLabel,MenuItem,Select} from "@mui/material";
import { color } from "framer-motion";
const AddDriveForm = () => {
  const { register, control, handleSubmit,watch,setValue } = useForm();
  const dispatch = useDispatch();
  const selectedOptions = watch("EligibleYears", []);
  const [que, setQue] = useState("");
  const [yeardata, setyearData] = useState("");

  const handleOptionChange = (selectedOptions) => {
    setValue("EligibleYears", selectedOptions); // Update selected options in form state
  };

  const navigate = useNavigate();
  const { fields, append, remove } = useFieldArray({
    // name: "Questions",
    name: "EligibleYears",
    control,
  });

  const onSubmit = (data) => {
    console.log(data);
    dispatch(createDrive())
    .unwrap()
    .then(()=>{

      navigate("/AllDrives");
    })
    .catch((err)=>{
      toast.error("Please Fill All The Details Carefully")
    })
  };
const years=[
  {
    label:"First Year",
     value:1,
  },
  {
    label:"Second Year",
     value:2,
  },
  {
    label:"Third Year",
     value:3,
  },
  {
    label:"Fourth Year",
     value:4,
  }
];

const departments=[
  {
    label:"Electronics and Telecommunication",
     value:1,
  },
  {
    label:"Information Technology",
     value:2,
  },
  {
    label:"Mechanical Engineering",
     value:3,
  },
  {
    label:"Electrical Engineering",
     value:4,
  },
  {
    label:"Civil Engineering",
     value:5,
  }
]
  return (
    <div className="flex justify-center items-center h-full p-2 ">
      <div className="max-w-3xl w-full space-y-8 bg-white/30 backdrop-blur-sm  p-8 outline rounded-lg shadow-md">
        <h2 className="text-center text-3xl text-white font-extrabold  flex items-center justify-center">
          <HiUserGroup className="mr-2 text-indigo-600" />
          Add Placement Drive
        </h2>
        <p className="mt-2 text-center text-sm text-white">
          Company name, job title, and description must have a minimum length of
          5 characters
        </p>
        <form
          className="sm:grid sm:grid-cols-2 flex flex-col justify-center gap-4 text-white"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="off"
        >
         
          <div>
            <div>
              <label
                htmlFor="CompanyName"
                className=" font-medium font-2xl flex items-center"
              >
                <GoOrganization className="mr-2 text-indigo-600" />
                Company 
              </label>
              <input
                {...register("CompanyName")}
                type="text"
                name="CompanyName"
                id="CompanyName"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20  focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
           
            <div>
              <label
                htmlFor="JobTitle"
                className=" font-medium  flex items-center"
              >
                <PiSubtitlesBold className="mr-2 text-indigo-600" />
                Job Title
              </label>
              <input
                {...register("JobTitle")}
                type="text"
                name="JobTitle"
                id="JobTitle"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
            <div>
              <label
                htmlFor="JobDescription"
                className=" font-medium flex items-center"
              >
                <IoBriefcaseOutline className="mr-2 text-indigo-600" />
                Job Role
              </label>
              <input
                {...register("JobDescription")}
                type="text"
                name="JobDescription"
                id="JobDescription"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
            <div className=" text-white">
            <label
                htmlFor="EligibleDepartments"
                className=" font-medium  flex items-center"
              >
                <BiInfoCircle className="mr-2 text-indigo-600" />
                Eligibility Year
              </label>
              <Controller
            name="EligibleDepartments"
            control={control}
            type="text"
            defaultValue={[]}
             
            render={({ field }) => (
              <FormControl sx={{width:'21rem', color:"white"}}>
                             <InputLabel id="EligibleDepartments" className="text-white">Eligible Departments </InputLabel>

                <Select
                  {...field}
                  labelId="EligibleDepartments"
                  label="EligibleDepartments"
                  multiple
                  defaultValue={[]}
                  className=" text-white"
                >
                  {departments.map((dept) => (
                    <MenuItem value={dept.label} key={dept.value} className="bg-white/20">
                      {dept.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          
            </div>
          </div>
        
          <div>
          
            <div>
              <label
                htmlFor="Package"
                className=" font-medium  flex items-center"
              >
                <FaIndianRupeeSign className="mr-2 text-indigo-600" />
                Package
              </label>
              <input
                {...register("Package")}
                type="text"
                name="Package"
                id="Package"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
            <div>
              <label
                htmlFor="ExpectedOpening"
                className=" font-medium  flex items-center"
              >
                <GoOrganization className="mr-2 text-indigo-600" />
                Expected Openings
              </label>
              <input
                {...register("ExpectedOpening")}
                type="text"
                name="ExpectedOpening"
                id="ExpectedOpening"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>

            <div>
              <label
                htmlFor="EligibilityCriteria"
                className=" font-medium  flex items-center"
              >
                <BiInfoCircle className="mr-2 text-indigo-600" />
                Eligibility Criteria
              </label>
              <input
                {...register("EligibilityCriteria")}
                type="text"
                name="EligibilityCriteria"
                id="EligibilityCriteria"
                autoComplete="off"
                required
                className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
            <div>
            <label
                htmlFor="EligibleYears"
                className=" font-medium  flex items-center"
              >
                <BiInfoCircle className="mr-2 text-indigo-600" />
                Eligibility Year
              </label>
              <Controller
            name="EligibleYears"
            control={control}
            type="text"
            defaultValue={[]}

            render={({ field }) => (
              <FormControl sx={{width:'21rem'}}>
                             <InputLabel id="EligbleYears">Eligible Years</InputLabel>

                <Select
                  {...field}
                  labelId="EligibleYears"
                  label="EligibleYears"
                  multiple
                  defaultValue={[]}
                >
                  {years.map((yrs) => (
                    <MenuItem value={yrs.label} key={yrs.value}>
                      {yrs.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
          
            </div>
          </div>
          {/* Additional Questions */}
          <div className="col-span-2">
            <div className="overflow-y-auto max-h-64">
              {fields.map((field, index) => (
                <div className="flex justify-center items-center gap-2" key={field.id}>
                  <input
                    type="text"
                    {...register(`Questions.${index}.que`)}
                    className="mt-1 pl-2 bg-black/20 focus:ring-indigo-500 border focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  />
                  <button
                    type="button"
                    className="cursor-pointer mt-1 focus:ring-indigo-500 border focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md p-3"
                    onClick={() => remove(index)}
                  >
                    <FaPlus size={20} className="rotate-45 hover:scale-110 duration-200 hover:text-red-600" />
                  </button>
                </div>
              ))}
            </div>
            <button
              type="button"
              onClick={() => append({ que: "Questions Here" })}
              className="mt-2   relative inline-flex items-center justify-center p-2 w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-green-400 duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <FaPlus size={30} />
              </span>
              <span className="absolute bg-black/20 flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Add Question
              </span>
              <span className="relative invisible">Add Question</span>
            </button>
          </div>
          <button
            type="submit"
            className="col-span-2 relative inline-flex bg-blue-900/90 items-center justify-center p-2 w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
          >
            <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
              <FaCheck size={30} className="text-bold" />
            </span>
            <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
              Submit Drive
            </span>
            <span className="relative invisible">Submit Drive</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDriveForm;
