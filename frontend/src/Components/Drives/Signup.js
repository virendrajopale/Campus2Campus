import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
import toast from 'react-hot-toast';
import { generateOTP, registerStudent, verifyotp } from "../../redux/Actions/UserAction";
import { useDispatch, useSelector } from "react-redux";
import { FaRegistered } from "react-icons/fa";
import { IoLogInOutline } from "react-icons/io5";
import { GoNumber } from "react-icons/go";
import { LuCheckSquare } from "react-icons/lu";
const Signup = (props) => {
  const [invalidcred, setinvalidcred] = useState(false);
  const [regSuccess, setregSuccess] = useState(false);
  const [OTP, setOTP] = useState();
  const [verifiedOTP, setVerifiedOTP] = useState(false);
  const [OtpMsg, setOtpMsg] = useState("");
  const [emailVerify, setemailVerify] = useState(false);
  const [optbtn, setOtpbtn] = useState(false);
  const [user, setuser] = useState({ reg_no: 0, name: "", email: "", mob_no: 0, dob: "", dept: "", year: "", password: "" });
  // const {urlHead}=useContext(LoadContext)
  const { message, status } = useSelector(state => state.users)
  const handle_change = (e) => {
    setuser({ ...user, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate();

  const dispatch = useDispatch()
  const submitUser = () => {
    console.log('hii')
    dispatch(registerStudent(user));
    setregSuccess(true);
    // navigate('/')
  }
  const GenerateOTP = async () => {
     dispatch(generateOTP(user.email))
    .unwrap()
    .then(()=>{
     console.log("hii")
    
       setOtpbtn(true)
       toast.success("OTP Has Been Sent To Your Email Address")
      })
      .catch((err)=>{
      toast.error("Incorrect Email Address")
   
    })
    
  }

  const VerifyOTP = async () => {
     dispatch(verifyotp({ email: user.email, otp: OTP }))
     .unwrap()
     .then(()=>{
      console.log("hii")
        setVerifiedOTP(true);
        toast.success("OTP Verified")
     })
     .catch((err)=>{
      console.log(err)
      toast.err("Wrong OTP")
     })
    // setOtpMsg(message);
    // if (status === 200) {
    // }
  }
  console.log(verifiedOTP)
  return (
    <>
    {/* <div className="flex justify-center items-center   ">
      <div className="max-w-3xl w-full  bg-white/30 backdrop-blur-sm   p-4 outline rounded-lg shadow-md"> */}

          {/* {invalidcred && (
              <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 mb-4" role="alert">
                <p className="font-bold">This registration number is already registered</p>
                <p>Kindly login instead.</p>
              </div>
            )}
            {regSuccess && (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                <p className="font-bold">Details sent for approval</p>
                <p>Your account will be created upon further approval.</p>
              </div>
            )} */}

          <div className=" col-span-2 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">Register with Your Registration Number</h2>
            {/* <p className=" mb-6">Select your department correctly as the account will be approved by your department admin.</p> */}

          </div>
          <form onSubmit={submitUser}
            className="grid grid-cols-2  justify-center gap-4 text-white"
          >
            <div className="col-span-1 w-full text-white">


              <div className="mb-4">
                <label htmlFor="reg_no" className="block  font-bold mb-2">
                  Registration No
                </label>
                <input
                  type="number"
                  id="reg_no"
                  name="reg_no"
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                  pattern="[0-9]+" min="0"
                  required
                    autoComplete='off'
                />
              </div>

              <div className="mb-4">
                <label htmlFor="name" className="block  font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                    autoComplete='off'
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="email" className="block  font-bold mb-2">
                   Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  autoComplete='off'
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                />
              </div>

              <div className="mt-3 flex flex-col items-center justify-center gap-6">
                {/* <button
                        className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-500 ease-in-out"
                        type="button"
                        onClick={GenerateOTP}
                    >
                        Generate OTP
                    </button> */}
                <button
                  type="button" className="col-span-2 relative inline-flex bg-gray-500/90 hover:bg-green-600/100 items-center justify-center p-2 w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
                  onClick={GenerateOTP}>
                  <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <GoNumber size={30} className="text-bold" />
                  </span>
                  <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Generate OTP
                  </span>
                  <span className="relative invisible">Generate OTP</span>
                </button>

                {optbtn && (
                  <div className={`w-full flex flex-col gap-8 transition duration-500 ease-in-out`}>
                    <input
                      type="text"
                      className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                      name="OTP"
                      required
                        autoComplete='off'
                      value={OTP}
                      onChange={(e) => setOTP(e.target.value)}
                    />
                    {/* <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                      onClick={VerifyOTP}
                    >
                      Submit
                    </button> */}
                    <button
                  type="button" className="col-span-2 relative inline-flex bg-blue-900/90 items-center justify-center p-2 w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
                  onClick={VerifyOTP}>
                  <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <LuCheckSquare size={30} className="text-bold" />
                  </span>
                  <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                    Submit OTP
                  </span>
                  <span className="relative invisible">Submit OTP</span>
                </button>
                  </div>
                )}
              </div>
            </div>
            <div className=" col-span-1 w-fill ">

              


   
            {verifiedOTP &&  <div className="mb-4">
                <label htmlFor="mob_no" className="block  font-bold mb-2">
                  Mobile Number
                </label>
                <input
                  type="number"
                  id="mob_no"
                  name="mob_no"
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                  pattern="[0-9]+" min="0"
                />
                {/* <p className="text-gray-600 mt-1">We'll never share your mobile number with anyone else.</p> */}
              </div>}


              <div className="mb-4">
                <label htmlFor="password" className="block  font-bold mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                />
              </div>
              <div className="mb-4">
                <label htmlFor="dob" className="block  font-bold mb-2">
                  Date of Birth
                </label>


                <input
                  type="date"
                  id="dob"
                  name="dob"
               
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                  required
                    autoComplete='off'
                />

              </div>

              <div className="mb-6">
                <label htmlFor="year" className="block  font-bold mb-2">
                  Year Of Study
                </label>
                <select
                  // type="date"
                  id="year"
                  name="year"
                  required
                    autoComplete='off'
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                >
                  <option value="">Year of Study</option>
                  <option value="First Year">First Year</option>
                  <option value="Second Year">Second Year</option>
                  <option value="Third Year">Third Year</option>
                  <option value="Final Year">Final Year</option>

                </select>
              </div>
              <div className="mb-6">
                <label htmlFor="dept" className="block  font-bold mb-2">
                  Department
                </label>
                <select
                  // type="date"
                  id="dept"
                  name="dept"
                  required
                    autoComplete='off'
                  className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                  onChange={handle_change}
                >
                  <option value="">Select Department</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Electrical Engineering">Electrical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Electronics and Telecommunication">Electronics and Telecommunication</option>
                </select>
              </div>
              
            </div>
            {/* <button
              className="bg-blue-500 col-span-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              // onClick={submitUser}
            >
              Register
            </button> */}
            <button
              type="submit"
              className="col-span-2 relative inline-flex  bg-gray-500/90 hover:bg-green-600/100 items-center justify-center p-2 w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group"
            >
              <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                <IoLogInOutline size={30} className="text-bold" />
              </span>
              <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Register
              </span>
              <span className="relative invisible">Register</span>
            </button>
          </form>
          
        {/* </div>
      </div> */}
    </>
  )
}
export default Signup;