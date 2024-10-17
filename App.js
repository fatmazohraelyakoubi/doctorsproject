import React from 'react';
import Layout from './Components/layout/Layout';
import LayoutDoctor from './Components/doctordashbord/LayoutDoctor';
import { Route, Routes } from 'react-router-dom';
import DashbordD from './Components/doctordashbord/Dashbordpages/DashbordD';
import Profile from './Components/doctordashbord/Dashbordpages/Profile';
import Ordenance from './Components/doctordashbord/Dashbordpages/Ordenance';
import Patients from './Components/doctordashbord/Dashbordpages/Patients';
function App() {
  return (
    <>

   
   <Routes>
    <Route path='/' element={<Layout/>}/>
    <Route path='/Latyout' element={<LayoutDoctor/>}>
    <Route index      element={<DashbordD/>}/>
    <Route path='das' element={<DashbordD/>}/>
    <Route path='pf' element={<Profile/>}/>
    <Route path='or' element={<Ordenance/>}/>
    <Route path='pt' element={<Patients/>}/>
    </Route>

   </Routes>
     
        
    </>
  );
}

export default App;