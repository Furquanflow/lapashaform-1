import React, { useState, useEffect } from "react";

//Router Dom
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//Local Components
import LapashaRoutes from "./routes/LapashaRoutes";
import SideNavbar from "./admin panel/side navbar/SideNavbar"
import Login from "./pages/Login";
import Register from "./pages/Register"


//Css
import "./App.css";

//Axios
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";


const App = () => {

  const [pdfCount, setPdfCount] = useState(0)
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [authentication, setAuthentication] = useState("")
  const [userId, setUserId] = useState("")
  const [updateData, setUpdateData] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const [formShow, setFormShow] = useState(false)

  const navigate = useNavigate();

  let authAdminFunc = e => {
    let { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  const loungeGrillEditFunc = async (e, countPdf, id) => {
    e.preventDefault()
    // setPdfCount(countPdf)
    setFormShow(true)
    setUserId(countPdf)
    setUpdateData(true)
    navigate("/eligibilityverification");
  };

  const naraCafeEditFunc = (e, countPdf, id) => {
    e.preventDefault()
    // setPdfCount(countPdf)
    setUserId(countPdf)
    setUpdateData(true)
    navigate("/eligibilityverification");
  };

  const patioEditFunc = (e, countPdf, id) => {
    e.preventDefault()
    // setPdfCount(countPdf)
    setUserId(countPdf)
    setUpdateData(true)
    navigate("/eligibilityverification");
  
  };
  console.log(userId);

  let authAdminEmail = auth.email;
  let authAdminPassword = auth.password;
  let authAdminName = auth.name;

  const onAdminLoginClick = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/admin/login`,
        {
          authAdminEmail,
          authAdminPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const data = response.data;
      if (data.token) {
        setAuthenticToken(data.token)
        // localStorage.setItem("token", data);
        alert("Login successful");
        navigate("/admin/lounge");
      } else {
        alert("Please check your username and password");
      }
    } catch (error) {
      if (error.response) {
        console.error("Server Error:", error.response.data);
      } else if (error.request) {
        console.error("Network Error:", error.request);
      } else {
        console.error("Error:", error.message);
      }
    }
  };

  const onAdminRegister = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/admin/register`,
        {
          authAdminName,
          authAdminEmail,
          authAdminPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 201) {
        alert("Registration successful. Please log in.");
        navigate("/admin/login");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };


  
  const setAuthenticToken = token => {
    setAuthentication(token);
    localStorage.setItem("admin-token", token);
  };

  const getAdminToken = () => {
    return localStorage.getItem("admin-token");
  };

  React.useEffect(() => {
    setAuthentication(localStorage.getItem("admin-token"))
  }, [])
  

  return (
    <>
      <LapashaRoutes authenticationToken={authentication} updateShow={updateShow} updateToShow={setUpdateShow} dataUpdate={updateData} idUser={userId} pdfCount={pdfCount} formShow={formShow} />
      {/*Nested Routes*/}
      <Routes>
        <Route path="/admin/*" element={<SideNavbar adminUserToken={getAdminToken} getAdminTokenFunc={getAdminToken} loungeGrillEditFunc={loungeGrillEditFunc} naraCafeFunc={naraCafeEditFunc} patioFunc={patioEditFunc} adminPass={authentication} />} />
        <Route
          path="/admin"
          element={<Navigate replace to="/admin/login" />}
        />
        <Route path="/admin/login" element={<Login onLogin={onAdminLoginClick} authFunc={authAdminFunc} registerPage={"/admin/register"} email={authAdminEmail}
          password={authAdminPassword} />} />
        <Route path="/admin/register" element={<Register registerForm={onAdminRegister}
          authFunc={authAdminFunc}
          email={authAdminEmail}
          password={authAdminPassword}
          userName={authAdminName} />} />
      </Routes>
    </>
  )
};

export default App;
