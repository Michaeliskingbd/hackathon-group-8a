import React from 'react'

import Instructors from './pages/Instructors';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Resources from './pages/Resources';
import Courses from './pages/Courses';
import JobPage from './pages/JobPage';
import Form from './pages/Form';
import NoticeBoard from './pages/NoticeBoard';
import Assignment from './pages/Assignment';

import Contact from './pages/Contact';




const App = () => {
  return (
    
   <Routes>
    <Route path='/instructor' element={<Instructors />} />
    <Route path='/contact' element={<Contact />}/>

    
     



    {/* //Dashboard */}
     <Route path="/" element={<Layout />}>
   <Route index element={<Home />} /> 
   <Route path='/dashboard' element={<Dashboard />} />
   <Route path='/DashboardProfile' element={<Profile />} /> 
    <Route path='/DashboardResources' element={<Resources />} /> 
     <Route path='/DashboardCourses' element={<Courses />} /> 
     <Route path='/DashboardJob' element={<JobPage />} /> 
      <Route path='/form' element={<Form />} /> 
      <Route path='/notice' element={<NoticeBoard />} /> 
      <Route path='/assignment' element={<Assignment />} />
     
  
   </Route>

   </Routes> 
  
     

 
    
   
  )
}

export default App;