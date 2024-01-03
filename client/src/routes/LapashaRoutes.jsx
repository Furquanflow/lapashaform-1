import React, { useEffect, useState } from "react";

//Roter Dom
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

//Local Componnents
import EligibilityVerification from "../pages/EligibilityVerification";
import Home from "../pages/Home";
import Login from "../pages/Login";
import StepForm from "../pages/StepForm";
import EligibilityVerificationView from "../pages/EligibilityVerificationView";
import EmploymentInformationForm from "../pages/EmploymentInformationForm";
import ContractForm from "../pages/ContractForm";
import PolicyForm from "../pages/PolicyForm";
import { data } from "../obj/Obj";
import Register from "../pages/Register";

// Axios
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const LapashaRoutes = ({
  updateShow,
  updateToShow,
  pdfCount,
  formShow,
  idUser,
  dataUpdate,
  adminFormDataArr,
  adminCompanyData
}) => {
  const [addStep, setAddStep] = useState(() => {
    const storedEve = localStorage.getItem("DATA");
    return storedEve ? JSON.parse(storedEve) : "";
  });
  const [canvas, setCanvas] = useState(null);
  const [contactEmployeeCanvas, setContactEmployeeCanvas] = useState(null);
  const [verificationCanvas, setVerificationCanvas] = useState(null);
  const [verificationEmpCanvas, setVerificationEmpCanvas] = useState(null);
  const [verificationPreCanvas, setVerificationPreCanvas] = useState(null);
  const [verificationEmpSBCanvas, setVerificationEmpSBCanvas] = useState(null);
  const [contactTransCanvas, setContactTransCanvas] = useState(null);
  const [policyCanvas, setPolicyCanvas] = useState(null);
  const [policyEmployeeCanvas, setPolicyEmployeeCanvas] = useState(null);
  const [policyTranslatorCanvas, setPolicyTranslatorCanvas] = useState(null);
  const [formData, setFormData] = useState(data);
  const [formDataArr, setFormDataArr] = useState(null);
  const [companyCall, setCompanyCall] = useState(0);
  const [authToken, setAuthToken] = useState(null);
  const [auth, setAuth] = useState({
    email: "",
    password: "",
    name: ""
  });
  const [lapashaUserId, setLapashaUserId] = useState("");
  
  let dataString = formData;
  const navigate = useNavigate();
  const onForm = e => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  let authFunc = e => {
    let { name, value } = e.target;
    setAuth({ ...auth, [name]: value });
  };

  const onStepForm = eve => {
    let formDataChanges = {};
    setAddStep(eve);
    localStorage.setItem("DATA", JSON.stringify(eve));
    getStoredUserId();
    if (canvas) {
      const signatureData = canvas.toDataURL();
      formDataChanges.conFormsign = signatureData;
    }
    if (policyCanvas) {
      const signaturePolicyData = policyCanvas.toDataURL();
      formDataChanges.empSigPolicy = signaturePolicyData;
    }
    if (policyEmployeeCanvas) {
      const signatureEmployeePolicyData = policyEmployeeCanvas.toDataURL();
      formDataChanges.empSignPolicy = signatureEmployeePolicyData;
    }
    if (policyTranslatorCanvas) {
      const signatureTransPolicyData = policyTranslatorCanvas.toDataURL();
      formDataChanges.transSignPolicy = signatureTransPolicyData;
    }
    if (contactEmployeeCanvas) {
      const signatureTransPolicyData = contactEmployeeCanvas.toDataURL();
      formDataChanges.empSign = signatureTransPolicyData;
    }
    if (contactTransCanvas) {
      const signatureTransPolicyData = contactTransCanvas.toDataURL();
      formDataChanges.transSignName = signatureTransPolicyData;
    }
    if (verificationCanvas) {
      const signatureVerificationData = verificationCanvas.toDataURL();
      formDataChanges.signOfEmpp = signatureVerificationData;
    }
    if (verificationEmpCanvas) {
      const signatureVerificationEmpData = verificationEmpCanvas.toDataURL();
      formDataChanges.signOfEmpRepp = signatureVerificationEmpData;
    }
    if (verificationPreCanvas) {
      const signatureVerificationPreData = verificationPreCanvas.toDataURL();
      formDataChanges.signOfPree = signatureVerificationPreData;
    }
    if (verificationEmpSBCanvas) {
      const signatureVerificationEmpSBData = verificationEmpSBCanvas.toDataURL();
      formDataChanges.signOfEmpSb = signatureVerificationEmpSBData;
    }
    setFormData(prevFormData => ({
      ...prevFormData,
      ...formDataChanges
    }));
  };
  console.log(formData);

  let authEmail = auth.email;
  let authPassword = auth.password;
  let authName = auth.name;

  const onLoginClick = async e => {
    e.preventDefault();
    setAddStep("");
    try {
      const response = await axios.post(
        `${baseUrl}/login`,
        { authEmail, authPassword },
        { headers: { "Content-Type": "application/json" } }
      );

      const data = response.data;
      if (data.token) {
        setToken(data.token);
        setLapashaUserId(data.user._id);
        alert("Login successful");
        navigate("/home");
        localStorage.setItem("DATA", addStep.toString());
        localStorage.setItem("FORMDATA", dataString);
        localStorage.setItem("lapashaUserId", data.user._id);
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      console.error("Error during login:", error);

      // Provide user-friendly error message
      if (error.response && error.response.status === 401) {
        alert("Login failed. Incorrect email or password.");
      } else {
        alert("Login failed. Please try again later.");
      }
    }
  };
  console.log(lapashaUserId);

  const onRegister = async e => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${baseUrl}/register`,
        {
          authName,
          authEmail,
          authPassword
        },
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );

      if (response.status === 201) {
        alert("Registration successful. Please log in.");
        navigate("/login");
      } else {
        alert("Registration failed. Please check your details.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onCompany = eve => {
    if (getStoredUserId()) {
      localStorage.setItem("token", authToken);
      setCompanyCall(eve);
      navigate("/stepform");
    }
    // if (companyCall === 0) {
    //   setFormData({});
    //   setAddStep(0);
    // } else if (companyCall === 1) {
    //   setFormData({});
    //   setAddStep(0);
    // } else if (companyCall === 2) {
    //   setFormData({});
    //   setAddStep(0);
    // }
  };

  const setToken = token => {
    setAuthToken(token);
    localStorage.setItem("token", token);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  const postFormData = async () => {
    const url = getPostUrl();
    // if (!url) {
    //   alert("Select a valid option.");
    //   return;
    // }
    try {
      await axios.post(url, dataString, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`
        }
      });
      alert("Data posted successfully");
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const getPostUrl = () => {
    switch (companyCall || (pdfCount && getStoredUserId())) {
      case 1:
        return `${baseUrl}/loungeandgrilldatapost`;
      case 2:
        return `${baseUrl}/formdatapost`;
      case 3:
        return `${baseUrl}/naracafedataPost`;
      default:
        return null;
      }
    };

  const getFormData = async () => {
    const url = getGetUrl();
    // if (!url) {
    //   alert("Select a valid option.");
    //   return;
    // }
    try {
      if (getStoredUserId()) {
        const response = await axios.get(`${url}/${lapashaUserId}`, {
          headers: {
            Authorization: `Bearer ${getToken()}`
          }
        });
        setFormDataArr(response.data);
      }
    } catch (error) {
      console.error("Error getting data:", error);
    }
  };

  const getGetUrl = () => {
    switch (companyCall || (pdfCount && getStoredUserId())) {
      case 1:
        return `${baseUrl}/loungeandgrilldata`;
      case 2:
        return `${baseUrl}/formdata`;
      case 3:
        return `${baseUrl}/naracafedata`;
      default:
        return null;
    }
  };

  // const updateVerificationFunc = async e => {
  //   e.preventDefault();
  //   if (idUser) {
  //     try {
  //       const response = await axios.put(
  //         `${baseUrl}/updateloungeandgrilldata/${idUser}`,
  //         formDataArr
  //       );
  //       const updatedData = response.data;
  //       console.log("Updated Data:", updatedData);
  //       navigate("/EligibilityVerificationView");
  //     } catch (error) {
  //       console.error("Error updating lounge and grill data:", error);
  //     }
  //   }
  // };
  
  
  const adminHandleChange = async (e) => {
    // let { name, value } = e.target
    let name = e.target.name;
    let value = e.target.value
    setFormData({ ...formData, [name]: value })
  }

  const updateLoungeFunc = async (e) => {
    e.preventDefault()    
    try {
    await fetch(
        `${baseUrl}/updateloungeandgrilldata/update/${idUser}`, {
        method: "PUT",
        // headers: {
        //   Authorization: `Bearer ${getToken()}`
        // },
        body: JSON.stringify(formData)
      },
      );
      // const userAdminData = await response.json();
      // console.log(`users single data: ${userAdminData}`);
      // setFormData(userAdminData)
      // if (response.ok) {
        getFormData()
        navigate("/eligibilityverificationview")
      // }
    } catch (error) {
      console.log(error)
    }
    // e.preventDefault();
    // axios.put(`${baseUrl}/updateloungeandgrilldata/${userId}`, { userId, first })
    //   .then(response => {
    //     setfirst(response.data)
    //   }).catch(error => console.error('Error updating Data:', error))
  };

  const getStoredUserId = () => localStorage.getItem("lapashaUserId");
  useEffect(
    () => {
      localStorage.getItem("FORMDATA", dataString);
      localStorage.setItem("DATA", JSON.stringify(addStep));
      setAuthToken(localStorage.getItem("token"));
      getFormData();
    },
    [dataString, addStep]
  );

  return (
    <Routes>
      <Route
        path="/home"
        element={
          getStoredUserId()
            ? <Home callData={onCompany} token={authToken} />
            : <Navigate
              replace
              to="/login"
              onLogin={onLoginClick}
              authFunc={authFunc}
              registerPage={"/register"}
              email={authEmail}
              password={authPassword}
              getStoredUserId={getStoredUserId}
            />
        }
      />
      <Route
        path="/eligibilityverification"
        element={
          // getStoredUserId() || formShow
            // ? 
            <EligibilityVerification
              updateToShow={updateToShow}
              formShow={formShow}
              data={formData}
              formChange3={onForm}
              onStep3={() => onStepForm(4)}
              addData3={addStep}
              formData={getFormData}
              canvaVerificationState={setVerificationCanvas}
              canvaVerificationEmpState={setVerificationEmpCanvas}
              canvaVerificationPreState={setVerificationPreCanvas}
              canvaVerificationEmpSBState={setVerificationEmpSBCanvas}
              formDataFunc={postFormData}
              idUser={idUser}
              dataUpdate={dataUpdate}
              updateShow={updateShow}
              token={authToken}
              updateAdminFunc={updateLoungeFunc}
              adminhandleChange={adminHandleChange}
            />
            // : <Navigate
            //   replace
            //   to="/login"
            //   onLogin={onLoginClick}
            //   authFunc={authFunc}
            //   registerPage={"/register"}
            //   email={authEmail}
            //   password={authPassword}
            // />
        }
      />
      <Route
        path="/eligibilityverificationview"
        element={
          // getStoredUserId() || formShow
          //   ? 
          <EligibilityVerificationView
            pdfCount={pdfCount}
            dataString={formDataArr}
            getStoredUserId={getToken}
            formDataFunc={getFormData}
            adminFormDataArr={adminFormDataArr}
            adminCompanyData={adminCompanyData}
            token={authToken}
            lapashaUserId={lapashaUserId}
          />
          // : <Navigate
          //     replace
          //     to="/login"
          //     onLogin={onLoginClick}
          //     authFunc={authFunc}
          //     registerPage={"/register"}
          //     email={authEmail}
          //     password={authPassword}
          //   />
        }
      />
      <Route
        path="/employmentinformationform"
        element={
          getStoredUserId()
            ? <EmploymentInformationForm
              data={formData}
              formChange={onForm}
              onStep={() => onStepForm(1)}
              addData={addStep}
              canvaUpdatedState={setCanvas}
            />
            : <Navigate
              replace
              to="/login"
              onLogin={onLoginClick}
              authFunc={authFunc}
              registerPage={"/register"}
              email={authEmail}
              password={authPassword}
            />
        }
      />
      <Route
        path="/contractform"
        element={
          getStoredUserId()
            ? <ContractForm
              data={formData}
              formChange2={onForm}
              onStep2={() => onStepForm(3)}
              addData2={addStep}
              updateEmployeeContactSignature={setContactEmployeeCanvas}
              updateTransContactSignature={setContactTransCanvas}
            />
            : <Navigate
              replace
              to="/login"
              onLogin={onLoginClick}
              authFunc={authFunc}
              registerPage={"/register"}
              email={authEmail}
              password={authPassword}
            />
        }
      />
      <Route
        path="/policyform"
        element={
          // getStoredUserId()
          //   ?
          <PolicyForm
            data={formData}
            formChange1={onForm}
            onStep1={() => onStepForm(2)}
            addData1={addStep}
            updatePolicySignature={setPolicyCanvas}
            updateEmployeePolicySignature={setPolicyEmployeeCanvas}
            updateTransPolicySignature={setPolicyTranslatorCanvas}
          />
          // : <Navigate
          //     replace
          //     to="/login"
          //     onLogin={onLoginClick}
          //     authFunc={authFunc}
          //     registerPage={"/register"}
          //     email={authEmail}
          //     password={authPassword}
          //   />
        }
      />
      <Route
        path="/stepform"
        element={
          getStoredUserId()
            ? <StepForm
              addCount={addStep}
              authPassword={authPassword}
              onStep2={eve => onStepForm(eve)}
              dataString={formDataArr}
              lapashaUserId={lapashaUserId}
              getStoredUserId={getStoredUserId}
              companyCall={companyCall}
              idUser={idUser}
            />
            : <Navigate
              replace
              to="/login"
              onLogin={onLoginClick}
              authFunc={authFunc}
              registerPage={"/register"}
              email={authEmail}
              password={authPassword}
            />
        }
      />

      <Route
        path="/login"
        element={
          <Login
            onLogin={onLoginClick}
            authFunc={authFunc}
            registerPage={"/register"}
            email={authEmail}
            password={authPassword}
          />
        }
      />
      <Route
        path="/register"
        element={
          <Register
            registerForm={onRegister}
            authFunc={authFunc}
            email={authEmail}
            password={authPassword}
            userName={authName}
          />
        }
      />
      <Route
        path="/"
        element={<Navigate replace to="/login" authFunc={authFunc} />}
      />
    </Routes>
  );
};

export default LapashaRoutes;
