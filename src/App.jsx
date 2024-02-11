import { Dashboard } from '@mui/icons-material';
import  AdminSignIn from './Pages/Admin/Pages/AdminSignin';
import CreatIndex from './Pages/Creator/CreatIndex';
import Index from './Pages/Editor/Index';
import SignIn from './Pages/User/signin';
import SignUp from './Pages/User/signup';
import './index.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<SignIn/>} />
      <Route path='/signup'  element ={<SignUp/>}/>
      <Route path='/indexEditor' element={<Index/>} />
      <Route path='/indexCreator' element={<CreatIndex/>} />
      <Route path='/adminSignIn' element={<AdminSignIn/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
