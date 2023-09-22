import * as React from 'react';
import "../../Components/Courses/Courses.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Graphs from './Graphs/Graphs';
// import { BarChart, Bar } from 'recharts';


function Course() {
    return (
        <>
        
            <div className="hero">
                <div className="course">
                    <div className="english">
                        <h3>English</h3>
                        <div className="english1" id='item'>
                            <div className="para">
                                <p>English Course</p>
                                <p>Progress</p>
                            </div>
                            <div className="para2">
                                <CircularProgressbar value={50} text={"28%"} strokeWidth={5} />
                            </div>
                        </div>
                        <div className="english2">
                            <h5>Modules</h5>
                            <div className="para3">
                                <Box sx={{ width: '75%' }}>
                                    <LinearProgress variant="determinate" value={50} />
                                </Box>
                                <p>4/12</p>
                            </div>
                        </div>
                    </div>
                    <div className="logical">
                        <h3>Logical Reasoning</h3>
                        <div className="english1" id='item'>
                            <div className="para">
                                <p>Logical Reasoning</p>
                                <p>Course Progress</p>
                            </div>
                            <div className="para2">
                                <CircularProgressbar value={100} text={"100%"} strokeWidth={5} />
                            </div>
                        </div>
                        <div className="english2">
                            <h5>Modules</h5>
                            <div className="para3">
                                <Box sx={{ width: '75%' }}>
                                    <LinearProgress variant="determinate" value={100} />
                                </Box>
                                <p>10/10</p>
                            </div>
                        </div>
                    </div>
                    <div className="csep">
                        <h3>CSEP</h3>
                        <div className="english1" id='item'>
                            <div className="para">
                                <p>CSEP Course</p>
                                <p>Progress</p>
                            </div>
                            <div className="para2">
                                <CircularProgressbar value={65} text={"65%"} strokeWidth={5} />
                            </div>
                        </div>
                        <div className="english2">
                            <h5>Modules</h5>
                            <div className="para3">
                                <Box sx={{ width: '75%' }}>
                                    <LinearProgress variant="determinate" value={60} />
                                </Box>
                                <p>6/10</p>
                            </div>
                        </div>
                    </div>
                    <div className="csap">
                        <h3>CSAP</h3>
                        <div className="english1" id='item'>
                            <div className="para">
                                <p>CSAP Course</p>
                                <p>Progress</p>
                            </div>
                            <div className="para2">
                                <CircularProgressbar value={85} text={"85%"} strokeWidth={5} />
                            </div>
                        </div>
                        <div className="english2">
                            <h5>Modules</h5>
                            <div className="para3">
                                <Box sx={{ width: '75%' }}>
                                    <LinearProgress variant="determinate" value={85} />
                                </Box>
                                <p>1/2</p>
                            </div>
                        </div>
                    </div>
                </div>


                <Graphs/>
            </div >
        </>
    );
}
export default Course