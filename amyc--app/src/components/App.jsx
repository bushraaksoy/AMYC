import "../styles/App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../Pages/unauth/Login"; // -------unauthenticated pages
import ResetPass from "../Pages/unauth/ResetPass"; //  |
import Home from "../Pages/unauth/Home"; //           |
import Contact from "../Pages/unauth/Contact"; //     |
import About from "../Pages/unauth/About"; // ________|
import Dashboard from "../Pages/Auth/Dashboard"; // ------------------authenticated pages
import SchoolRegistration from "../Pages/Auth/SchoolRegistration"; // |
import UserManagement from "../Pages/Auth/UserManagement"; //         |
import MasjidManagement from "../Pages/Auth/MasjidManagement"; //     |
import Logs from "../Pages/Auth/Logs"; //           __________________|
import { LoginContext } from "../Context/LoginContext";
import { ToastContainer } from "react-toastify";

function App() {
  const [isAuthenticated, setIsAuth] = useState(() => {
    const savedAuth = JSON.parse(localStorage.getItem("isAuth"));
    return savedAuth || false;
  });

  useEffect(() => {
    const savedAuth = JSON.parse(localStorage.getItem("isAuth")) || false;
    setIsAuth(savedAuth);
  }, []);

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  return (
    <LoginContext.Provider value={{ isAuthenticated, setIsAuth }}>
      <div className="App">
        <Routes>
          {isAuthenticated ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route
                path="/school-registration"
                element={<SchoolRegistration />}
              />
              <Route path="/user-management" element={<UserManagement />} />
              <Route path="/masjid-management" element={<MasjidManagement />} />
              <Route path="/logs" element={<Logs />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ResetPass />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ResetPass />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </>
          )}
        </Routes>
      </div>
      <ToastContainer />
    </LoginContext.Provider>
  );
}

export default App;
