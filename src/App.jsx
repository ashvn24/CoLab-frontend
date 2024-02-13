import SignIn from './Pages/User/signin';
import SignUp from './Pages/User/signup';
import Index from './Editor/Index';
import AdminSignIn from './Admin/Pages/Auth/AdminSignin';
import DashboardLayout from './Admin/Components/Layouts/Dashboard';
import './index.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import CreatorIndex from './Creator/Components/Layouts/CreatorIndex';
// import Home from './Admin/Pages/Dashboard/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<SignIn/>} />
      <Route path='/signup'  element ={<SignUp/>}/>
      <Route path='/indexEditor/*' element={<Index/>} />
      <Route path='/indexCreator/*' element={<CreatorIndex/>} />
      <Route path='/adminSignIn' element={<AdminSignIn/>} />
      {/* <Route path='/dashboard' element={<Home/>} /> */}
      <Route path='/dashboard/*' element={<DashboardLayout/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
