import "../Sidebar/Sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import { Link } from "react-router-dom";


const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <div className="container1">
                    <div className="top">
                        <img src={require("../../Assets/careerpedia logo.png")} alt="" />
                        <hr />
                    </div>
                    <div className="center">
                        <div className="centeritem">
                            <Link to='/Profile' id="text">
                                <img src={require("../../Assets/loginimg.png")} alt="" />
                                <p>Katie pena</p>
                            </Link>
                        </div>


                        {/* <a href=""><img src={require("../../Assets/loginimg.png")} alt="" /><h1>Katie pena</h1></a> */}

                        {/* <Link><img src={require("../../Assets/loginimg.png")} alt="" />Katie pena</Link> */}
                    </div>
                    <div className="bottom">
                        <ul>
                            <li>
                                <Link to='/Home' id="stud">
                                    <DashboardIcon />
                                    <span>Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Student' id="stud">
                                    <PersonIcon />
                                    <span>Student</span>
                                </Link>
                            </li>
                            <li>
                                <Link to='/Job' id="stud">
                                    <WorkIcon />
                                    <span>Jobs</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

            </div >
        </>
    )
}

export default Sidebar