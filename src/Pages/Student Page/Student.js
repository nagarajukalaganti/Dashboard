import React from 'react'
import '../Student Page/Student.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Details from './Details/Details';
import Studentdetails from './Studentdetails/Studentdetails';

const Student = () => {
  return (
    <>
      <Sidebar />
      <Details />
      <Studentdetails/>
      
    </>
  );
}

export default Student