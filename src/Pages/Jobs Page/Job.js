import React from 'react'
import '../Jobs Page/Job.css';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../Jobs Page/Header/Header'
import Jobtable from './Jobdetails/Jobtable';

const Job = () => {
  return (
    <>
      <Sidebar />
      <Header/>
      <Jobtable/>
    </>


  )
}

export default Job