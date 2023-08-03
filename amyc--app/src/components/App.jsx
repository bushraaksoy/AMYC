import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
// unauthenticated pages
import Login from "../Pages/unauth/Login";
import ResetPass from "../Pages/unauth/ResetPass";
import Home from "../Pages/unauth/Home";
import Contact from "../Pages/unauth/Contact";
import About from "../Pages/unauth/About";
// authenticated pages
import Dashboard from "../Pages/Auth/Dashboard";
import SchoolRegistration from "../Pages/Auth/SchoolRegistration";
import UserManagement from "../Pages/Auth/UserManagement";
import MasjidManagement from "../Pages/Auth/MasjidManagement";
import Logs from "../Pages/Auth/Logs";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(userData);

  let auth = true;
  if (!auth) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ResetPass />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
  } else
    return (
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/school-registration" element={<SchoolRegistration />} />
          <Route path="/user-management" element={<UserManagement />} />
          <Route path="/masjid-management" element={<MasjidManagement />} />
          <Route path="/logs" element={<Logs />} />
          {/* unauth */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ResetPass />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    );
}

export default App;
