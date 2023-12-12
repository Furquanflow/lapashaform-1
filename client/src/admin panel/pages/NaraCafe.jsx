import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const NaraCafe = ({naraCafeEditFunc}) => {
  const [naraAdminData, setNaraAdminData] = React.useState([]);

  const getFormData = () => {
    axios
      .get(`${baseUrl}/naracafedata`)
      .then(({ data }) => {
        setNaraAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  React.useEffect(() => {
    getFormData();
  }, []);
  return <LapashaFormData empolymentFunc={(e) => naraCafeEditFunc(e, 2)} lapashaData={naraAdminData} title={"Nara Cafe"} />;
};

export default NaraCafe;
