import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import SignIn from "../pages/SignIn"
import Cantact from "../pages/Cantact"
import Doctors from "../doctors/Doctors"
import DoctorsDetails from "../doctors/DoctorsDetails"
import Services from "../pages/Services"

const Routers = () => {
  return (
  
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/SignIn" element={<SignIn/>}/>
    <Route path="/Cantact" element={<Cantact/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Doctors" element={<Doctors/>}/>
    <Route path="/DoctorsDetails" element={<DoctorsDetails/>}/>
</Routes>
  )
}

export default Routers
