import React from "react";

//Local Component
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const Patio = ({ patioEditFunc, adminToken }) => {
  const [adminPatioData, setAdminPatioData] = React.useState([]);

  const getFormData = () => {
    axios
      .get(`${baseUrl}/formdata`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminToken()}`
        }
      })
      .then(({ data }) => {
        setAdminPatioData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  //update function

  React.useEffect(() => {
    getFormData();
  }, []);

  return (
    <LapashaFormData
      empolymentFunc={e => patioEditFunc(e, 1)}
      lapashaData={adminPatioData}
      title={"Patio"}
    />
  );
};

export default Patio;
