import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../../Jobs Page/Header/Header.css';


const Header = () => {
  return (
    <>
     <div className="homecontainer">
      <h1>
      <ArrowBackIosIcon id="arrow" />
        Jobs</h1>
      <div id="notification"><NotificationsNoneIcon/></div>
     </div>
    </>
  )
}

export default Header