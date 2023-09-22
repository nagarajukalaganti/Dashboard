import React from 'react'
import '../Admin Profile/Profile.css'
import Headernav from './HeaderNavbar/Headernav'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Profiledetails from './Profile Details/Profiledetails'

const Profile = () => {
  return (
    <>
    <Sidebar/>
    <Headernav/>
    <Profiledetails/>
    </>
  )
}

export default Profile