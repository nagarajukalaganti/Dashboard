import React from 'react'
import '../Studentdetails/Studentdetails.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import { CircularProgressbar } from "react-circular-progressbar";
import img from "../../../Assets/img.jpeg"
import img2 from "../../../Assets/img2.jpeg"
import img3 from "../../../Assets/img3.jpeg"
import img4 from "../../../Assets/img4.jpeg"
import img5 from "../../../Assets/img5.jpeg"
import img6 from "../../../Assets/img6.jpeg"
import img7 from "../../../Assets/img7.jpeg"
import img8 from "../../../Assets/img8.jpeg"
import img9 from "../../../Assets/img9.jpeg"
// import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';



const rows = [
    {
        img: img,
        StudentName: "James",
        Course: "Design",
        EmailId: "james@gmail.com",
        Level: "10",
        Progress:<CircularProgress variant="determinate" value={85} />,
    },
    {
        img: img2,
        StudentName: "Lester",
        Course: "Development",
        EmailId: "lester75@gmail.com",
        Level: "8",
        Progress: <CircularProgress variant="determinate" value={85} />,
    },
    {
        img: img3,
        StudentName: "richard Gregory",
        Course: "Testing",
        EmailId: "gregory@gmail.com",
        Level: "8",
        Progress:<CircularProgress variant="determinate" value={85} />,
    },
    {
        img: img4,
        StudentName: "dean Ortega",
        Course: "Design",
        EmailId: "d.ortega@gmail.com",
        Level: "7",
        Progress:<CircularProgress variant="determinate" value={85} />,
    },
    {
        img: img5,
        StudentName: "Eugene Griffith",
        Course: "GRE",
        EmailId: "eugene.g@gmail.com",
        Level: "6",
        Progress: <CircularProgress variant="determinate" value={85} />,
    },
    {
        img: img6,
        StudentName: "Christian Allen",
        Course: "TOFEL",
        EmailId: "christian@ya.io",
        Level: "5",
        Progress: <CircularProgress variant="determinate" value={75} />,
    },
    {
        img: img7,
        StudentName: "James Wilkins",
        Course: "Development",
        EmailId: "i.wilkins@gmail.com",
        Level: "4",
        Progress: <CircularProgress variant="determinate" value={75} />,
    },
    {
        img: img8,
        StudentName: "Tommy Massey",
        Course: "Testing",
        EmailId: "tommy@gmail.com",
        Level: "4",
        Progress: <CircularProgress variant="determinate" value={75} />,
    },
    {
        img: img9,
        StudentName: "Max Allison",
        Course: "Testing",
        EmailId: "max-allison@pochta.io",
        Level: "3",
        Progress: <CircularProgress variant="determinate" value={75} />,
    },

];
const Studentdetails = () => {
    return (
        <>

            <div className="Student-information">
                <div className="container6">
                    <h3>All Candidates</h3>
                    <div className="container1A">
                        <select name="" id="text3">
                            <option value="All">CSEP</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                        </select>
                        <select name="" id="text3">
                            <option value="All">CSAP</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                        </select>
                    </div>
                </div>
                <div className="container7">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell className='tablecell'>Profile</TableCell>
                                    <TableCell className='tablecell'>Student Name</TableCell>
                                    <TableCell className='tablecell'>Course</TableCell>
                                    <TableCell className='tablecell'>Email Id</TableCell>
                                    <TableCell className='tablecell'>Level</TableCell>
                                    <TableCell className='tablecell'>Progress</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                        key={rows.img}>
                                        <TableCell className='tablecell'>
                                            <img src={row.img} alt="" />
                                            {rows.Profile}
                                        </TableCell>
                                        <TableCell className='tablecell'>{row.StudentName}</TableCell>
                                        <TableCell className='tablecell'>{row.Course}</TableCell>
                                        <TableCell className='tablecell'>{row.EmailId}</TableCell>
                                        <TableCell className='tablecell'>{row.Level}</TableCell>
                                        <TableCell className='tablecell'>
                                            {/* <Stack spacing={2} direction="row">
                                                <CircularProgress variant="determinate" value={75} />
                                            </Stack> */}
                                            {row.Progress}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    )
}

export default Studentdetails