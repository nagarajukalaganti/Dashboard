import React from 'react'
import '../HeaderNavbar/Headernav.css'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Headernav = () => {
  return (
    <div className="profile-information">
        <h1><ArrowBackIosIcon id="arrow" />College Admin Profile</h1>
      <div id="notification"><NotificationsNoneIcon/></div>
    </div>
  )
}

export default Headernav