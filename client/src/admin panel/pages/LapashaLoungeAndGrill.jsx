import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const LapashaLoungeAndGrill = ({adminLoungeData, getLoungeData, loungeGrillEditFunc, adminToken }) => {

  React.useEffect(() => {
    getLoungeData();
  }, []);
  return (
    <LapashaFormData
      lapashaData={adminLoungeData}
      title={"Lapasha lounge And Grill"}
      empolymentFunc={loungeGrillEditFunc}
    />
  );
};

export default LapashaLoungeAndGrill;
