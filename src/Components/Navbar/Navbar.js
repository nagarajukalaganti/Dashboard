import "../Navbar/Navbar.css"
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const Navbar = () => {
  return (
    <>
     <div className="homecontainer">
      <h1>College Admin</h1>
      <div id="notification"><NotificationsNoneIcon/></div>
     </div>
    </>
  )
}

export default Navbar