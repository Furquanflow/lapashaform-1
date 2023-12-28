import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios Library
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const NaraCafe = ({ naraCafeEditFunc, updateNaraFunc, naraAdminData, getNaraData }) => {
  React.useEffect(() => {
    getNaraData();
  }, []);
  return (
    <LapashaFormData
      empolymentFunc={naraCafeEditFunc}
      lapashaData={naraAdminData}
      title={"Nara Cafe"}
    />
  );
};

export default NaraCafe;
