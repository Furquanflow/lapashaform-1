import React, { useState, useEffect } from "react";

//Router Dom
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//Local Components
import LapashaRoutes from "./routes/LapashaRoutes";
import SideNavbar from "./admin panel/side navbar/SideNavbar"
import Login from "./pages/Login";
import Register from "./pages/Register"
import EligibilityVerificationView from "./pages/EligibilityVerificationView"


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
  const [adminFormDataArr, setAdminFormDataArr] = React.useState([]);

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

  const [adminCompanyData, setAdminCompanyData] = useState(() => {
    const storedState = localStorage.getItem('yourState');
    return storedState ? JSON.parse(storedState) : null;
  });

  const adminFormDataCompany = (eve) => {
    setAdminCompanyData(eve)
  }
  let newAdminFormData;
  console.log(adminCompanyData);
  const updateLoungeFunc = async (e) => {
    e.preventDefault();

    // const getAdminFormData = async () => {
    //   const adminUrl =
    //   adminCompanyData === 0
    //     ? "loungeandgrilldata"
    //     : adminCompanyData === 1
    //     ? "formdata"
    //     : adminCompanyData === 2 ? "naracafedata": null
    //   try {
    //       const response = await axios.get(`${baseUrl}/${adminUrl}/${userId}`, {
    //         headers: {
    //           Authorization: `Bearer ${getAdminToken()}`
    //         }
    //       });
    //       setAdminFormDataArr(response.data);
    //     } catch (error) {
    //       console.error("Error getting data:", error);
    //     }
    //   };

    //   getAdminFormData()

    newAdminFormData = adminCompanyData === 0 ? adminLoungeData : adminCompanyData === 1 ? adminPatioData : adminCompanyData === 2 ? naraAdminData : null
    let setNewAdminFormData = adminCompanyData === 0 ? setAdminLoungeData : adminCompanyData === 1 ? setAdminPatioData : adminCompanyData === 2 ? setNaraAdminData : null


    let lastNameSBsec1 = newAdminFormData.lastNameSBsec1;
    let firstNameSBsec1 = newAdminFormData.firstNameSBsec1;
    let middleNameSBsec1 = newAdminFormData.middleNameSBsec1;
    let dateOfRehireSB = newAdminFormData.dateOfRehireSB;
    let lastNameSb = newAdminFormData.lastNameSb;
    let firstNameSB = newAdminFormData.firstNameSB;
    let middleNameSB = newAdminFormData.middleNameSB;
    let docTitleSB = newAdminFormData.docTitleSB;
    let docNoSB = newAdminFormData.docNoSB;
    let expDateSb = newAdminFormData.expDateSb;
    let nameOfEmpSB = newAdminFormData.nameOfEmpSB;
    let signOfEmpSb = newAdminFormData.signOfEmpSb;
    let todayDateSB = newAdminFormData.todayDateSB;
    let clickHereSB = newAdminFormData.clickHereSB;

    const url =
      adminCompanyData === 0
        ? "updateloungeandgrilldata"
        : adminCompanyData === 1
          ? "updateformdata"
          : adminCompanyData === 2 ? "updatenaracafedata" : null


    axios.put(`${baseUrl}/${url}/${userId}`, {
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
    })
      .then(response => {
        const updatedTasks = newAdminFormData.map(task => (task._id === userId ? response.data : task));
        setNewAdminFormData(updatedTasks);
      })
      .catch(error => console.error(error));

    // try {
    //   const response = await axios.put(`${baseUrl}/${url}/${userId}`,
    //     {
    //       todayDateSB,
    //       clickHereSB,
    //       firstNameSB,
    //       middleNameSB,
    //       docTitleSB,
    //       docNoSB,
    //       expDateSb,
    //       nameOfEmpSB,
    //       signOfEmpSb,
    //       lastNameSBsec1,
    //       firstNameSBsec1,
    //       middleNameSBsec1,
    //       dateOfRehireSB,
    //       lastNameSb,
    //     }
    //   );
    //   console.log(response.data);
    //   navigate("/eligibilityverificationview");
    //   newAdminFormData(response.data);
    // } catch (error) {
    //   console.error(error);
    //   throw error;
    // }
  };

  React.useEffect(() => {
    setAuthentication(localStorage.getItem("admin-token"))
    localStorage.setItem('yourState', JSON.stringify(adminCompanyData));
    getLoungeData()
    getNaraData()
    getPatioData()
  }, [adminCompanyData])

  // let adminFormData = adminCompanyData === 0 ? adminLoungeData : adminCompanyData === 1 ? adminPatioData : naraAdminData
  // let adminFormDataFunc = adminCompanyData === 0 ? loungeGrillEditFunc : adminCompanyData === 1 ? patioEditFunc : naraCafeEditFunc
  // console.log(adminFormData);
  return (
    <>
      <LapashaRoutes adminCompanyData={adminCompanyData} adminFormDataArr={adminFormDataArr} formShow={formShow} updateLoungeFunc={updateLoungeFunc} authenticationToken={authentication} updateShow={updateShow} updateToShow={setUpdateShow} dataUpdate={updateData} idUser={userId} pdfCount={pdfCount} />
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
            // getStoredUserId() || formShow
            //   ? 
            <EligibilityVerificationView
              pdfCount={pdfCount}
              dataString={newAdminFormData}
              // getStoredUserId={getToken}
              // formDataFunc={getFormData}
              adminFormDataArr={adminFormDataArr}
              adminCompanyData={adminCompanyData}
              // token={authToken}
              lapashaUserId={userId}
            />
          }
          />
      </Routes>
    </>
  )
};

export default App;
