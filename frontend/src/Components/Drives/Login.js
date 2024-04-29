import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/Actions/UserAction';
import { useNavigate } from 'react-router-dom';
import { IoLogInOutline } from 'react-icons/io5';
import toast from 'react-hot-toast';

const Login = (props) => {
  const dispatch = useDispatch();
  const { loading, error, status } = useSelector((state) => state.users);
  const [invalidcred, setinvalidcred] = useState(false);
  const [formData, setFormData] = useState({
    role: props.role,
    reg_no: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
//  useEffect(()=>{

//    setFormData({role:props.role})
//  },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
   
   if(props.role=="Student"){ 
    if( formData.reg_no==='' )
     {
    return  toast.error("Please Fill All Informaion")
    }
  }
  if(props.role!="Student"){ 
   if( formData.email==='' )
    {
   return  toast.error("Please Fill All Informaion")
   }}
     if( formData.password==='' )
     {
    return  toast.error("Please Fill All Informaion")
    }
     else {
      dispatch(login(formData))
        .unwrap()
        .then((data) => {
          sessionStorage.setItem('tocken', data.tocken);
          sessionStorage.setItem('user', data.user);
          sessionStorage.setItem('role', data.role);
          console.log(sessionStorage.getItem('user'));
          navigate('/drives');
        })
        .catch((err) => {
          if (err.status !== 200) {
            sessionStorage.setItem('tocken', '');
            sessionStorage.setItem('user', '');
            setinvalidcred(true);
            toast.error("Invalid User")
            console.log('User not found. Please check your credentials.');
          } else {
            console.log('An error occurred. Please try again later.');
          }
        });
    }
  };

  return (
    <>
    {/* <div className="flex justify-center items-center   ">
    
    <div className="max-w-3xl w-full  bg-white/30 backdrop-blur-sm mb-12  p-4 outline rounded-lg shadow-md"> */}
        
        <div>

        <h2 className="text-2xl text-white text-center font-bold mb-6">Login</h2>
        </div>
        {/* {error && <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">{error.message}</div>} */}
        <form onSubmit={handleSubmit}
                    className="flex flex-col  justify-center gap-4 text-white w-full"
>
          {/* <div className="mb-4 text-white">
            <label htmlFor="role" className="block font-bold mb-2">
              Role:
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className=" d mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
            >
              <option value="">Select Role</option>
              <option value="Student">Student</option>
              <option value="Admin">Admin</option>
              <option value="TPO_Dept_Admin">TPO Dept Admin</option>
            </select>
          </div> */}
          <div>

          {formData.role === 'Student' && (
            <div className="mb-4">
              <label htmlFor="reg_no" className="block text-white  font-bold mb-2">
                Registration Number:
              </label>
              <input
                type="text"
                id="reg_no"
                name="reg_no"
                value={formData.reg_no}
                onChange={handleChange}
                placeholder='21141261'
                autoComplete='off'
                className=" text-white mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
                />
            </div>
          )}
          {(props.role === 'Admin' || formData.role === 'TPO_Dept_Admin') && (
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                // autoComplete='off'
                value={formData.email}
                onChange={handleChange}
                placeholder='example@gmail.com'
                className=" text-white mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
              />
            </div>
          )}
          <div className="mb-6">
            <label htmlFor="password" className="block text-white  font-bold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              autoComplete='off'
              value={formData.password}
              onChange={handleChange}
              className=" text-white mt-1 pl-2 bg-black/20 focus:ring-indigo-500 focus:border-indigo-500 block w-full border shadow-sm sm:text-sm border-gray-300 rounded-md py-3"
            />
          </div>
         
          <button   disabled={loading}
                  type="submit" className=" text-white col-span-2 relative inline-flex bg-gray-500/90 hover:bg-green-600/100 items-center justify-center p-2 
                  w-full py-2 overflow-hidden font-medium text-black-600 transition duration-300 ease-out border-2 border-black-500 rounded-md shadow-md group">
                  <span className="absolute inset-0 flex  items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease">
                    <IoLogInOutline size={30} className="text-bold" />
                  </span>
                  <span className="absolute   flex items-center justify-center w-full h-full text-black-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Login
                  </span>
                  <span className="relative invisible">Login</span>
                </button>

          </div>
        </form>
     
    {/* </div>
    </div> */}
    
      
    </>
  );
};

export default Login;