import React from "react";

//Router Dom
// import { useNavigate } from "react-router-dom";

//Mui
import { Button, Grid } from "@mui/material";

//Axios
import axios from "axios";

//Server Url
const baseUrl = "http://localhost:8000";

const GeneratePDFButton = ({
  formData,
  pdfCount,
  getStoredUserId,
  token,
  lapashaUserId
}) => {
  // let navigate = useNavigate();
  const handleGeneratePDF = async () => {
    console.log("Working");
    try {

      const response = await axios.post(
        `${baseUrl}/generate-and-send-pdf`
      );

      console.log(response.data);

      if (response.data && response.data.pdfPath) {
        alert("PDF generated and sent successfully.");
        window.open(`${baseUrl}/download-pdf`, "_blank");
        console.log("Condition Working");
        // navigate("/stepform")
      } else {
        alert("Failed to generate and send PDF.");
      }
    } catch (error) {
      console.error("Error:", error);
      console.log("Hello");
    }
  };

  React.useEffect(() => {
    getStoredUserId();
  }, []);

  return (
    <Grid sx={{ float: "right" }}>
      <Button
        variant="contained"
        className="save-btn"
        onClick={handleGeneratePDF}
      >
        Generate PDF
      </Button>
    </Grid>
  );
};

export default GeneratePDFButton;
