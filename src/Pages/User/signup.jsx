import React, { useState } from 'react';
import google from '../../../Assets/google.svg';
import sign from '../../../Assets/sign.jpg'
import Otp from './otp'
import { Link,  useNavigate } from 'react-router-dom';
import { userSchema } from '../../../Utils/SignupVal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ValidationError } from 'yup';
import { UserRegister } from '../../Server/User/UserReg';
import { VerifyUser } from '../../Server/User/VerifyOtp';
import Loading from '../Components/Loading/Loading';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    role: 'Editor',
    password: '',
    confirmPassword: ''
  });

  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState(false)
  const [otpError, setSetOtpError] = useState('')
  if(otpError){
    toast.error(otpError, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setSetOtpError('')
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if(isFormValid){
      try {
        setLoading(true)
        await userSchema.validate(formData)
        console.log('dtaa',formData);
        const { username, email, role, password } = formData;
        const registrationResponse = await UserRegister(username, email, role, password )
        if(registrationResponse==='Email already exists'||  registrationResponse === 'Username already exists'){
          setLoading(false)
          setSetOtpError(registrationResponse)
          
        }else{
          
          setOtp(true)
          setLoading(false)
          console.log(otp);
        }
        setSetOtpError(registrationResponse);

        
      } catch (error) {
        if (error instanceof ValidationError) {
          setSetOtpError(error.message)
      } else {
        setSetOtpError('Something went wrong, please try again');
      }
        
      }
     
    }
    else{
      setSetOtpError('fill all fields')
    }
    
    
  }


  // otp handle here

  const onOtpSubmit=(otp)=>{
    console.log('success');
    VerifyUser(otp).then(verify=>{
      console.log('verifymsg',verify);
      if(verify.message==='account created'){
        console.log('signin complete/user added');
        navigate('/')
      }else if(verify.message==="code is invalid"){
        setSetOtpError('Invalid OTP');
      }else{
        setSetOtpError(verify.message);
      }
    })
  }

  if (loading) {
    return <div className="bg-white bg-opacity-10 flex justify-center items-center h-screen">
    <Loading />
</div>
}
  return (
    
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer/>
      {!otp?<div className="relative flex flex-col m-6 space-y-5 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 w-2/3">
       
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14 w-full">
          <span className="mb-3 text-4xl font-bold">Welcome to CoLab</span>
          <span className="font-light text-gray-400 mb-8">
            Please enter your details
          </span>
          <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="mb-4">
            <span className="mb-2 text-md">Username</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="username"
              id="username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="py-4 flex items-center">
            <div className="w-2/3 pr-4">
              <span className="mb-2 text-md">Email</span>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
              <span className="mb-2 text-md">Role</span>
              <select
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                name="role"
                id="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="editor">Editor</option>
                <option value="creator">Creator</option>
              </select>
            </div>
          </div>
          <div className="py-4 flex items-center">
            <div className="w-3/5 pr-4">
              <span className="mb-2 text-md">Password</span>
              <input
                type="password"
                name="password"
                id="password"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="w-2/5">
              <span className="mb-2 text-md">Confirm Password</span>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-4">
              {/* <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span> */}
            </div>
            <span className="font-bold text-md">Forgot password?</span>
          </div>
          <button type='submit'  className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300"
          >
            Sign up
          </button>
           
          </form>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Have an account?
            <span className="font-bold text-black"><Link to={'/'}>Sign in</Link> </span>
          </div>
        </div>
        {/* right side */}
        <div className="relative w-full md:w-1/2">
          <img
            src={sign}
            alt="img"
            className="w-full h-full rounded-r-2xl md:block object-cover"
          />
          {/* text on image  */}
          {/* <div className="absolute bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
            <span className="text-white text-xl">
              We've been using Untitle to kick<br />start every new project
              and can't <br />imagine working without it.
            </span>
          </div> */}
        </div>
      </div>:
      <div>
        <Otp length={4} onOtpSubmit={onOtpSubmit}/>
        </div>
      }
    </div>
  );
}

export default Signup;
