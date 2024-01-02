import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

const LapashaLoungeAndGrill = ({
  adminLoungeData,
  getLoungeData,
  loungeGrillEditFunc,
  adminToken
}) => {
  // React.useEffect(() => {
  //   getLoungeData();
  // }, []);
  return (
    <LapashaFormData
      lapashaData={adminLoungeData}
      title={"Lapasha lounge And Grill"}
      empolymentFunc={loungeGrillEditFunc}
      getAdminData={getLoungeData}
    />
  );
};

export default LapashaLoungeAndGrill;
