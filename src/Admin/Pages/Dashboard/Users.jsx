import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { listUserslist } from '../../../Server/Admin/AdminUsers';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import { Avatar, Chip, Switch } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import { UserStatus } from '../../../Server/Admin/UserStatus';
import Loading from '../../../Pages/Components/Loading/Loading';

const AllUsers = () => {

  const [listUsers, setListUsers] = useState([])

  const [Error, setError] = useState('')
  if (Error){
    toast.error(Error, {
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

  const [UserStatusChange, setUserStatusChange] = useState('')

  if(UserStatusChange){
    toast.info(UserStatusChange, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setUserStatusChange('')
  }

  const{ access } = useSelector((state) => state.AdminToken)

  const [loading, setLoading] = useState(false)
  

  useEffect(() => {
    
    fetchUsers();
    
  }, [setUserStatusChange,setLoading]);
  


  const fetchUsers = async ()=>{

    try {
      setLoading(true)
      const res = await listUserslist()
      console.log(res);
      if (res.status===200){
        setListUsers(res.data)
        setLoading(false)
      }else{
        setError(res.message)
      }

    } catch (error) {
      setError(error)
    }
    finally{
      setLoading(false)
    }
  }

  const handleToggle =async (id) =>{
    setLoading(true)
    try {
      const status = await UserStatus(id)
      if (status.status===200){
        setUserStatusChange('Staus Updated')
        setLoading(false)
      }else{
        setError(status.message)
      }
    } catch (error) {
      setError(error)
    }finally{
      setLoading(false)
    }
  
  }
  if(loading){
    return <div className="bg-white bg-opacity-20 flex justify-center items-center h-screen">
        <Loading />
    </div>
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <ToastContainer/>
        <Card>
        <CardHeader variant="gradient" color="gray" className="mb-8 p-6">
          <Typography variant="h6" color="black">
            Users Table
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["User", "Role", "status", "Joined", "Block/Unblock"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              { listUsers.map(
                ({ img, username, email, role, is_active, date_joined,id }, key) => {
                  const className = `py-3 px-5 ${
                    key === listUsers.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={email}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {username}
                            </Typography>
                            <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {role}
                        </Typography>
                        
                      </td>
                      <td className={className}>

                      <Chip label={is_active ? "Active":"Inactive"}
                       color={is_active ? "success":"primary"} />
                        
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {date_joined}
                        </Typography>
                      </td>
                      <td className={className}>
                      {is_active ? <Switch  defaultChecked  onChange={()=>handleToggle(id)}/>:<Switch  onChange={()=>handleToggle(id)}/>}
                         
                        
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  )
}

export default AllUsers
