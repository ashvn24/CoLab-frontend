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
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
