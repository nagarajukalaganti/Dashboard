import React from 'react'
import '../Jobdetails/Jobtable.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import img from '../../../Assets/img.jpeg';
import img2 from '../../../Assets/img2.jpeg';
import img3 from '../../../Assets/img3.jpeg';
import img4 from '../../../Assets/img4.jpeg';
import img5 from '../../../Assets/img5.jpeg';
import img6 from '../../../Assets/img6.jpeg';
import img7 from '../../../Assets/img7.jpeg';
import img8 from '../../../Assets/img8.jpeg';
import img9 from '../../../Assets/img9.jpeg';


// function createData(Profile,CandidateName,CompanyName,JobRole,Salary,Status) {
//   return { Profile,CandidateName,CompanyName,JobRole,Salary,Status};
// }

const rows = [
  {
    img: img,
    CondidateName: "Jenny",
    CompanyName: "Intertico",
    JobRole: "UI Designer",
    Salary: "$8,000",
    status: "Selected",
  },
  {
    img: img2,
    CondidateName: "Lester Holland",
    CompanyName: "Agoda",
    JobRole: "UI Designer",
    Salary: "$7,000",
    status: "Rejected",
  },
  {
    img: img3,
    CondidateName: "Richard Gregory",
    CompanyName: "RoadGee",
    JobRole: "QA Tester",
    Salary: "$6,000",
    status: "Selected",
  },
  {
    img: img4,
    CondidateName: "Dean Ortega",
    CompanyName: "The Hill",
    JobRole: "Graphic Design",
    Salary: "$5,000",
    status: "Rejected",
  },
  {
    img: img5,
    CondidateName: "Eugene Griffith",
    CompanyName: "Intertico",
    JobRole: "React Developer",
    Salary: "$4,000",
    status: "Selected",
  },
  {
    img: img6,
    CondidateName: "Christian Allen",
    CompanyName: "Agoda",
    JobRole: "UI Designer",
    Salary: "$2,000",
    status: "Rejected",
  },
  {
    img: img7,
    CondidateName: "James Wikins",
    CompanyName: "RoadGee",
    JobRole: "QA Tester",
    Salary: "$2,000",
    status: "Selected",
  },
  {
    img: img8,
    CondidateName: "Tommy Massey",
    CompanyName: "The Hill",
    JobRole: "UI Designer",
    Salary: "$2,000",
    status: "Rejected",
  },
  {
    img: img9,
    CondidateName: "Max Allison",
    CompanyName: "Intertico",
    JobRole: "UI Designer",
    Salary: "$2,000",
    status: "Selected",
  },
];

const Jobtable = () => {
  return (
    <>
      <div className="jobinformation">
        <div className="container3">
          <h3>All Candidates</h3>
          <div className="container1A">
            <select name="" id="text3">
              <option value="All">All</option>
              <option value="Design">Design</option>
              <option value="Development">Development</option>
              <option value="Testing">Testing</option>
            </select>
          </div>
        </div>

        <div className="container4">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 400 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className='tablecell'>Profile</TableCell>
                  <TableCell className='tablecell'>Candidate Name</TableCell>
                  <TableCell className='tablecell'>Company Name</TableCell>
                  <TableCell className='tablecell'>Job Role</TableCell>
                  <TableCell className='tablecell'>Salary</TableCell>
                  <TableCell className='tablecell'>Status</TableCell>
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
                    <TableCell className='tablecell'>{row.CondidateName}</TableCell>
                    <TableCell className='tablecell'>{row.CompanyName}</TableCell>
                    <TableCell className='tablecell'>{row.JobRole}</TableCell>
                    <TableCell className='tablecell'>{row.Salary}</TableCell>
                    <TableCell className='tablecell'>
                      <span className={`status ${row.status}`}>{row.status}</span>
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

export default Jobtable