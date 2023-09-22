import React from 'react';
import "../Home Page/Home.css";
import Sidebar from '../../Components/Sidebar/Sidebar';
import Navbar from '../../Components/Navbar/Navbar';
import Courses from '../../Components/Courses/Courses';


const Home = () => {
    return (
        <>
        <scrollToTop/>
            <div className="home">
                <Sidebar />
                <div className="home2">
                    <Navbar />
                    <div className="home3">
                        <Courses />
                    </div>

                </div>
            </div >
            <scrollToTop/>
        </>


    )
}

export default Home