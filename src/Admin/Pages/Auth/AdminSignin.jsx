import { Input, Typography, Button } from "@material-tailwind/react";
//   import { Link } from "react-router-dom";
import pattern from "../../Assets/Image/pattern.png";
import { useState } from "react";
import { loginSchema } from "../../../../Utils/LoginValidation";
import { useDispatch } from "react-redux";
import { LoginAdmin } from "../../../Store/adminAuthSlice";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function AdminSignIn() {

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [errorr, setErrorr] = useState('')

  if(errorr){
    toast.error(errorr, {
      position: "bottom-left",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setErrorr('')
  }

  const handleChange = (e)=>{
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handlesubmit =async(e) =>{
    e.preventDefault()
    const isFormValid = Object.values(formData).every(value => value.trim() !== '');
    if (isFormValid){
      try {
        await loginSchema.validate(formData)
        const {  email, password } = formData;

        const Response = await dispatch(LoginAdmin({ email, password }))

        if (Response.payload.error === 'Authentication Failed') {
          setErrorr('Invalid Credential');
      } else {
          setErrorr('');
          navigate('/dashboard/home')
          
      }
      } catch (error) {
        setErrorr(error.message)
      }
    }else{
      setErrorr('fill all fields')
    }
  }

  return (
    <div className="p-10 bg-white h-full lg:h-full  items-center ">
       <ToastContainer/>
      <section className=" flex">
        <div className="ml-11 w-2/5 h-2/5 hidden lg:block">
          <img src={pattern} className="w-full object-cover rounded-3xl " />
        </div>
        <div className="w-full lg:w-3/5 flex flex-col items-center justify-center">
          <div className="text-center">
            <Typography variant="h2" className="font-bold mb-4">
              CoLab
            </Typography>
            <Typography
              variant="paragraph"
              className="text-lg font-normal"
            >
              Enter your email and password to Signin as Admin.
            </Typography>
          </div>
          <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2" onSubmit={(e)=>handlesubmit(e)}>
            <div className="mb-1 flex flex-col gap-6">
              <Typography
                variant="small"
                className="-mb-3 font-medium"
              >
                Your email
              </Typography>
              <Input
                size="lg"
                placeholder="    name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="email"
                value={formData.email}
                onChange={(e)=>handleChange(e)}
              />
              <Typography
                variant="small"
                className="-mb-3 font-medium"
              >
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="     ********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="password"
                onChange={(e)=>handleChange(e)}
              />
              <button type="submit" className="bg-black w-full h-10 mt-5 rounded-md items-center text-white font-bold">
                signin
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default AdminSignIn;
