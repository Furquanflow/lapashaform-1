import React from "react";

//Local Component
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

const Patio = ({ patioEditFunc, getPatioData, adminPatioData }) => {
  //update function

  React.useEffect(() => {
    getPatioData();
  }, []);

  return (
    <LapashaFormData
      empolymentFunc={patioEditFunc}
      lapashaData={adminPatioData}
      title={"Patio"}
    />
  );
};

export default Patio;
