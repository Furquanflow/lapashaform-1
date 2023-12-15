import React from "react";

//Local Component
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const Patio = ({ patioEditFunc }) => {
  const [adminPatioData, setAdminPatioData] = React.useState([]);

  const getFormData = () => {
    axios
      .get(`${baseUrl}/formdata`)
      .then(({ data }) => {
        setAdminPatioData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  //update function
  const updateFormData = (userId, userName, amount, date, status, setUpdate, setData, setUser) => {
    axios.post(`${baseUrl}/update`, { _id: userId, userName, amount, date, status })
      .then((item) => {
        console.log("data");
        setData("")
        setUpdate(false)
      })
  }

  React.useEffect(() => {
    getFormData();
  }, []);

  return (
    <LapashaFormData
      updateFormData={updateFormData}
      empolymentFunc={e => patioEditFunc(e, 1)}
      lapashaData={adminPatioData}
      title={"Patio"}
    />
  );
};

export default Patio;
