import React, { useState, useEffect } from "react";

//Router Dom
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//Local Components
import LapashaRoutes from "./routes/LapashaRoutes";
import SideNavbar from "./admin panel/side navbar/SideNavbar"
import Login from "./pages/Login";
import Register from "./pages/Register"
import AdminEligibilityVerificationView from "./pages/AdminEligibilityVerificationView"


//Css
import "./App.css";

//Axios
import axios from "axios";

//Server Url
let baseUrl = "http://3.144.216.200:8000";


const App = () => {

  const [pdfCount, setPdfCount] = useState(0)
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [authentication, setAuthentication] = useState("")
  // const [userId, setUserId] = useState("")
  const [userId, setUserId] = useState(() => {
    localStorage.getItem("UserId");});
  const [updateData, setUpdateData] = useState(false)
  const [updateShow, setUpdateShow] = useState(false)
  const [formShow, setFormShow] = useState(false)
  const [adminLoungeData, setAdminLoungeData] = React.useState([]);
  const [naraAdminData, setNaraAdminData] = React.useState([]);
  const [adminPatioData, setAdminPatioData] = React.useState([]);
  const [adminFormDataArr, setAdminFormDataArr] = React.useState([]);

  const navigate = useNavigate();

  let authAdminFunc = e => {
    let { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  const loungeGrillEditFunc = async (e, countPdf, id) => {
    e.preventDefault()
    navigate("/eligibilityverification");
    // setPdfCount(countPdf)
    setFormShow(true)
    setUserId(countPdf)
    setUpdateData(true)
  };

  const naraCafeEditFunc = (e, countPdf, id) => {
    e.preventDefault()
    // setPdfCount(countPdf)
    setFormShow(true)
    setUserId(countPdf)
    setUpdateData(true)
    navigate("/eligibilityverification");
  };

  const patioEditFunc = (e, countPdf, id) => {
    e.preventDefault()
    // setPdfCount(countPdf)
    setFormShow(true)
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


  const getPatioData = () => {
    axios
      .get(`${baseUrl}/formdataadmin`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAdminToken()}`
        }
      })
      .then(({ data }) => {
        setAdminPatioData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };


  const getNaraData = () => {
    axios
      .get(`${baseUrl}/naracafedataadmin`)
      .then(({ data }) => {
        setNaraAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  const getLoungeData = () => {
    axios
      .get(`${baseUrl}/loungeandgrilldataadmin`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAdminToken()}`
        }
      })
      .then(({ data }) => {
        setAdminLoungeData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  const [adminCompanyData, setAdminCompanyData] = useState(() => {
    const storedState = localStorage.getItem('yourState');
    return storedState ? JSON.parse(storedState) : null;
  });

  const adminFormDataCompany = (eve) => {
    setAdminCompanyData(eve)
  }

  console.log(adminCompanyData);
  
console.log(adminLoungeData);
  React.useEffect(() => {
    setAuthentication(localStorage.getItem("admin-token"))
    localStorage.setItem('yourState', JSON.stringify(adminCompanyData));
    localStorage.setItem("UserId", userId);
  }, [adminCompanyData, userId])


  return (
    <>
      <LapashaRoutes adminCompanyData={adminCompanyData} adminFormDataArr={adminFormDataArr} formShow={formShow} authenticationToken={authentication} updateShow={updateShow} updateToShow={setUpdateShow} dataUpdate={updateData} idUser={userId} pdfCount={pdfCount} />
      {/*Nested Routes*/}
      <Routes>
        <Route path="/admin/*" element={<SideNavbar adminFormDataCompany={adminFormDataCompany} getPatioData={getPatioData} adminPatioData={adminPatioData} naraAdminData={naraAdminData} getNaraData={getNaraData} adminLoungeData={adminLoungeData} getLoungeData={getLoungeData} adminUserToken={getAdminToken} getAdminTokenFunc={getAdminToken} loungeGrillEditFunc={loungeGrillEditFunc} naraCafeFunc={naraCafeEditFunc} patioFunc={patioEditFunc} adminPass={authentication} />} />
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

        <Route
          path="/admin/eligibilityverificationview"
          element={
            <AdminEligibilityVerificationView
              pdfCount={pdfCount}
              adminDataString={adminLoungeData}
              // getStoredUserId={getToken}
              // formDataFunc={getFormData}
              adminFormDataArr={adminFormDataArr}
              adminCompanyData={adminCompanyData}
              token={getAdminToken}
              lapashaUserId={userId}
            />
          }
          />
      </Routes>
    </>
  )
};

export default App;
