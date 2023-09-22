
import './App.css';
import Home from './Pages/Home Page/Home';
import Job from './Pages/Jobs Page/Job';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Student from './Pages/Student Page/Student';
import Profile from './Pages/Admin Profile/Profile';



function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Student" element={<Student/>} />
          <Route path="/Job" element={<Job />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
