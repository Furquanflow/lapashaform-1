import React from "react";

//Local Components
import LapashaFormData from "../components/lapasha form data/LapashaFormData";

//Axios
import axios from "axios";

//Server Url
let baseUrl = "http://localhost:8000";

const LapashaLoungeAndGrill = ({ loungeGrillEditFunc }) => {
  const [adminData, setAdminData] = React.useState([]);

  const getFormData = () => {
    axios
      .get(`${baseUrl}/loungeandgrilldata`)
      .then(({ data }) => {
        setAdminData(data);
      })
      .catch(error => {
        console.error("Error getting data:", error);
      });
  };

  //update function

// Assume you have a function to get the authentication token
const getAuthToken = () => {
  // Replace 'your_token_here' with the actual token retrieval logic
  return 'your_token_here';
};

const updateFormData = async (recordId, newData) => {
  try {
    // const token = getAuthToken();
    const response = await axios.put(
      `${baseUrl}/updateFormData/${recordId}`,
      {
        newData
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );

    if (response.status === 200) {
      console.log('Update successful');
      // Handle any additional logic after a successful update
    } else {
      console.error('Update failed');
      // Handle errors or provide user feedback
    }
  } catch (error) {
    console.error('Error updating data:', error);
    // Handle errors or provide user feedback
  }
};

// Example usage
const recordIdToUpdate = 'your_record_id_here';
const updatedData = {
  fNamePerInfo: 'Updated First Name',
  lnamePerInfo: 'Updated Last Name',
  statePerInfo: 'Updated State',
};

updateFormData(recordIdToUpdate, updatedData);


  React.useEffect(() => {
    getFormData();
  }, []);
  return (
    <LapashaFormData
      lapashaData={adminData}
      title={"Lapasha lounge And Grill"}
      empolymentFunc={e => loungeGrillEditFunc(e, 0)}
    />
  );
};

export default LapashaLoungeAndGrill;
