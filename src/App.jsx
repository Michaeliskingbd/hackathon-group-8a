import React from 'react'
import Instruct from './Components/Instruct';
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




const App = () => {
  return (
    <div>
    {/* <Instructors />

   <Routes>
     <Route path="/" element={<Layout />}>
   <Route index element={<Home />} /> 
   <Route path='/dash' element={<Dashboard />} />
   <Route path='/profile' element={<Profile />} /> 
    <Route path='/resources' element={<Resources />} /> 
     <Route path='/courses' element={<Courses />} /> 
     <Route path='/job' element={<JobPage />} /> 
      <Route path='/form' element={<Form />} /> 
      <Route path='/notice' element={<NoticeBoard />} /> 
      <Route path='/assignment' element={<Assignment />} />
     
  
   </Route>

   </Routes> */}
   
      
     
    </div>
  )
}

export default App;