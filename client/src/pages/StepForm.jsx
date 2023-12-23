import React, { useState } from "react";

//Mui Design Library
import { Container, Grid, Typography, Button } from "@mui/material";

//Router Dom
import { Link, useNavigate } from "react-router-dom";

// Images
import pdfImg from "../assets/images/pdf.png";
import uploadImg from "../assets/images/upload.png";

const StepForm = ({
  addCount,
  dataString,
  authPassword,
  token,
  lapashaUserId,
  getStoredUserId
}) => {
  const navigate = useNavigate();
  // let newFormData = dataString && dataString.map(item => item.middleNameSB);
  const onEditClick = e => {
    e.preventDefault();
    if (addCount >= 1 && getStoredUserId()) {
      navigate("/policyform");
      console.log(getStoredUserId());
    } else {
      alert("Fill Employment information form First");
    }
  };
  const onEditClick1 = e => {
    e.preventDefault();
    if (addCount >= 2 && getStoredUserId()) {
      navigate("/contractform");
    } else {
      alert("Fill Policy 20223-06-12 Employee Manual First");
    }
  };
  const onEditClick2 = e => {
    e.preventDefault();

    if (addCount >= 3 && getStoredUserId()) {
      navigate("/eligibilityverification");
    } else {
      alert("Fill Contract 2023-04-12 Class Action Waiver Krikwood Ops First");
    }
  };
  const onEditClickActive = () => {
    navigate("/employmentinformationform");
  };
  const onPreview = e => {
    e.preventDefault();
    if (addCount >= 4 && getStoredUserId()) {
      navigate("/eligibilityverificationview");
    } else {
      alert("Fill i9 Form First");
    }
  };

  return (
    <Grid>
      <Grid className="step-form-sec">
        <Container>
          <Grid className="step-bar">
            <Grid
              className={
                addCount >= 1 && getStoredUserId() ? "step-flx-red" : "step-flx"
              }
            >
              <Typography variant="b">01</Typography>
              <Typography variant="h5">Step</Typography>
            </Grid>
            <Grid
              className={
                addCount >= 2 && getStoredUserId() ? "step-flx-red" : "step-flx"
              }
            >
              <Typography variant="b">02</Typography>
              <Typography variant="h5">Step</Typography>
            </Grid>
            <Grid
              className={
                addCount >= 3 && getStoredUserId() ? "step-flx-red" : "step-flx"
              }
            >
              <Typography variant="b">03</Typography>
              <Typography variant="h5">Step</Typography>
            </Grid>
            <Grid
              className={
                addCount >= 4 && getStoredUserId() ? "step-flx-red" : "step-flx"
              }
            >
              <Typography variant="b">04</Typography>
              <Typography variant="h5">Step</Typography>
            </Grid>
          </Grid>

          <Grid className="step-opt-main">
            <Grid className="step-opt step-opt-active">
              <Grid className="step-opt-title">
                <img src={pdfImg} alt="" />
                <Typography variant="h6">
                  Employment information form
                </Typography>
              </Grid>
              <Button variant="contained" onClick={onEditClickActive}>
                Edit
              </Button>
            </Grid>

            <Grid
              className={
                addCount >= 1 && getStoredUserId()
                  ? "step-opt step-opt-active"
                  : "step-opt"
              }
            >
              <Grid className="step-opt-title">
                <img src={pdfImg} alt="" />
                <Typography variant="h6">
                  Policy 20223-06-12 Employee Manual
                </Typography>
              </Grid>
              <Button
                variant="contained"
                className="edit-btn"
                onClick={onEditClick}
              >
                Edit
              </Button>
            </Grid>

            <Grid
              className={
                addCount >= 2 && getStoredUserId()
                  ? "step-opt step-opt-active"
                  : "step-opt"
              }
            >
              <Grid className="step-opt-title">
                <img src={pdfImg} alt="" />
                <Typography variant="h6">
                  Contract 2023-04-12 Class Action Waiver Krikwood Ops
                </Typography>
              </Grid>
              <Button variant="contained" onClick={onEditClick1}>
                Edit
              </Button>
            </Grid>

            <Grid
              className={
                addCount >= 3 && getStoredUserId()
                  ? "step-opt step-opt-active"
                  : "step-opt"
              }
            >
              <Grid className="step-opt-title">
                <img src={pdfImg} alt="" />
                <Typography variant="h6">i-9</Typography>
              </Grid>
              <Button variant="contained" onClick={onEditClick2}>
                Edit
              </Button>
            </Grid>
          </Grid>

          <Grid className="btm-nxt-sec">
            <Grid className="file-upload">
              <input type="file" />
              <Typography variant="body">
                <img src={uploadImg} alt="" />
              </Typography>
              <Grid className="file-upload-txt">
                <Typography variant="h4">Upload Your Pictures</Typography>
                <Link className="theme-btn">Upload</Link>
              </Grid>
            </Grid>
            <Grid className="steps">
              <Button
                variant="contained"
                onClick={e => onPreview(e)}
                className="next-btn-1"
              >
                Preview
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default StepForm;
