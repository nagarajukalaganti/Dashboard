import React from 'react'
import '../../Student Page/Details/Details.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';


const Details = () => {
  return (
    <>
    <div className="homecontainer">
      <h1>Students</h1>
      <div className="input">
        <h4>Try search</h4>
        <SearchIcon/>
      </div>
      <div id="notification"><NotificationsNoneIcon/></div>
     </div>
    </>
  )
};

export default Details