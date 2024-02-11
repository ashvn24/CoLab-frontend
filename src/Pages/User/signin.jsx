import React, { useCallback, useState } from 'react';
import google from '../../../Assets/google.svg'
import sign from '../../../Assets/sign.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { ValidationError } from 'yup';
import { loginSchema } from '../../../Utils/LoginValidation';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../Store/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [error, setError] = useState('')

  if (error){
    toast.error(error, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setError('')
  }

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit =async (e)=>{
    e.preventDefault()
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if(isFormValid){
      
      try {
        await loginSchema.validate(formData)
        const {  email, password } = formData;
        const response = await dispatch(loginUser({ email, password }))


        if (response.payload.error === 'Authentication Failed') {
          setError('Invalid Credential');
      } else {
          setError('');
          navigateBasedOnRole(response)
      }
  
      } catch (error) {
        if (error instanceof ValidationError){
          setError(error.message)
          console.log('catch',error);
        }
      }
    }else{
      setError('fill all fields')
      console.log('error');
    }
  }

  const navigateBasedOnRole = useCallback((response) => {
    const role = response.payload.user;
    const destination = role === 'Editor' ? '/indexEditor' : '/indexCreator';
    navigate(destination); // Assuming `navigate()` is a function for navigation
}, [navigate]);



  return (
    <div className="flex items-center justify-center min-h-screen">
      <ToastContainer/>
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <form onSubmit={(e)=>handleSubmit(e)}>
          <div className="py-4">
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
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              {/* <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span> */}
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <button type='submit' className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
            Sign in
          </button>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
            <img src={google} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          </form>
          <div className="text-center text-gray-400">
            Don't have an account?
            <span className="font-bold text-black"><Link to={'/signup'}>Sign up for free</Link> </span>
          </div>
        </div>
        {/* right side */}
        <div className="relative">
          <img
            src={sign}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
          {/* text on image  */}
          
        </div>
      </div>
    </div>
  );
}

export default SignIn;
