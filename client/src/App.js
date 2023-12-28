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


  const [adminLoungeData, setAdminLoungeData] = React.useState([]);
  const [naraAdminData, setNaraAdminData] = React.useState([]);
  const [adminPatioData, setAdminPatioData] = React.useState([]);

  const getPatioData = () => {
    axios
      .get(`${baseUrl}/formdata`, {
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
      .get(`${baseUrl}/naracafedata`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getAdminToken()}`
        }
      })
      .then(({ data }) => {
        setNaraAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  const getLoungeData = () => {
    axios
      .get(`${baseUrl}/loungeandgrilldata`, {
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

  let lastNameSBsec1 = adminLoungeData.lastNameSBsec1;
  let firstNameSBsec1 = adminLoungeData.firstNameSBsec1;
  let middleNameSBsec1 = adminLoungeData.middleNameSBsec1;
  let dateOfRehireSB = adminLoungeData.dateOfRehireSB;
  let lastNameSb = adminLoungeData.lastNameSb;
  let firstNameSB = adminLoungeData.firstNameSB;
  let middleNameSB = adminLoungeData.middleNameSB;
  let docTitleSB = adminLoungeData.docTitleSB;
  let docNoSB = adminLoungeData.docNoSB;
  let expDateSb = adminLoungeData.expDateSb;
  let nameOfEmpSB = adminLoungeData.nameOfEmpSB;
  let signOfEmpSb = adminLoungeData.signOfEmpSb;
  let todayDateSB = adminLoungeData.todayDateSB;
  let clickHereSB = adminLoungeData.clickHereSB;

  const [adminCompanyData, setAdminCompanyData] = useState(0)

  const adminFormDataCompany = (eve) => {
    setAdminCompanyData(eve)
  }


  const adminFormData = () => {
    if (adminCompanyData == 0) {
      navigate("/admin/lounge");
      return `${baseUrl}/updateloungeandgrilldata`;
    } else if (adminCompanyData == 1) {
      navigate("/admin/patio"); 
      return `${baseUrl}/updateformdata`;
    } else if (adminCompanyData == 2) {
      navigate("/admin/naracafe");
      return `${baseUrl}/updatenaracafedata`;
    } else {
      return null;
    }
  };

  const updateLoungeFunc = async (e) => {
    e.preventDefault();
    const url = adminFormData();
    try {
      const response = await axios.put(`${url}/${userId}`,
        {
          todayDateSB,
          clickHereSB,
          firstNameSB,
          middleNameSB,
          docTitleSB,
          docNoSB,
          expDateSb,
          nameOfEmpSB,
          signOfEmpSb,
          lastNameSBsec1,
          firstNameSBsec1,
          middleNameSBsec1,
          dateOfRehireSB,
          lastNameSb,
        }
      );
      console.log(response.data);
      navigate("/admin/lounge");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  

  
  React.useEffect(() => {
    setAuthentication(localStorage.getItem("admin-token"))
    getLoungeData()
    getNaraData()
    getPatioData()
  }, [])


  return (
    <>
      <LapashaRoutes formShow={formShow} updateLoungeFunc={updateLoungeFunc} authenticationToken={authentication} updateShow={updateShow} updateToShow={setUpdateShow} dataUpdate={updateData} idUser={userId} pdfCount={pdfCount} />
      {/*Nested Routes*/}
      <Routes>
        <Route path="/admin/*" element={<SideNavbar adminFormDataCompany={adminFormDataCompany} adminFormData={adminFormData} getPatioData={getPatioData} adminPatioData={adminPatioData} naraAdminData={naraAdminData} getNaraData={getNaraData} adminLoungeData={adminLoungeData} getLoungeData={getLoungeData} adminUserToken={getAdminToken} getAdminTokenFunc={getAdminToken} loungeGrillEditFunc={loungeGrillEditFunc} naraCafeFunc={naraCafeEditFunc} patioFunc={patioEditFunc} adminPass={authentication} />} />
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
