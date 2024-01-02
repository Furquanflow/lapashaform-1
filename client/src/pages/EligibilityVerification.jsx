import React, { useRef } from "react";

//Router Dom
import { Link, useNavigate } from "react-router-dom";

//Mui Design Library
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl
} from "@mui/material";

//Images
import mainLogo from "../assets/images/logo.png";

import SignatureCanvas from "react-signature-canvas";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const EligibilityVerification = ({
  data,
  formChange3,
  addData3,
  onStep3,
  canvaVerificationState,
  canvaVerificationEmpState,
  canvaVerificationPreState,
  canvaVerificationEmpSBState,
  formDataFunc,
  formData,
  formShow,
  dataUpdate,
  idUser,
  updateToShow,
  onEligbilityUpdate,
  updateAdminFunc,
  authUserToken,
  getToken
}) => {
  const navigate = useNavigate();
  const onEligbility = e => {
    e.preventDefault();
    updateToShow(false);
    // formData();
    onStep3();
    formDataFunc();
    navigate("/stepform", { replace: true });
  };

  const signatureRef = useRef();
  const signatureEmpSBStateRef = useRef();
  const verificationState = useRef();
  const verificationEmpState = useRef();

  const clearSignature = e => {
    e.preventDefault();
    signatureRef.current.clear();
  };

  const clearEmpSBStateSignature = e => {
    e.preventDefault();
    signatureEmpSBStateRef.current.clear();
  };

  const clearverificationStateSignature = e => {
    e.preventDefault();
    verificationState.current.clear();
  };

  const clearEmpStateSignature = e => {
    e.preventDefault();
    verificationEmpState.current.clear();
  };

  return (
    <Grid>
      <Grid className="form-section">
        <Container>
          <form
            onSubmit={dataUpdate === true ? updateAdminFunc : onEligbility}
          >
            <Grid className="form-inner">
              <Grid
                container
                spacing={2}
                columns={12}
                className="flx-box form-hdr"
              >
                <Grid item xs={6}>
                  <img className="brandname" src={mainLogo} alt="" />
                </Grid>
                <Grid item xs={6}>
                  <ul className="hdr-date">
                    <li>USCIS</li>
                    <li>Form I-9</li>
                    <li>OMB No.1615-0047</li>
                    <li>Expires 07/31/2026</li>
                  </ul>
                </Grid>
              </Grid>

              <Grid className={dataUpdate === true && "hide-content"}>
                <Grid className="text-box">
                  <h1>Employment Eligibility Verification </h1>
                  <h4>Department of Homeland Security </h4>
                  <h6>U.S.Citizenship and Immigration Services </h6>
                  <p>
                    <b>START HERE:</b> Employers must ensure the form
                    instructions are available to employees when completing this
                    form. Employers are liable for failing to comply with the
                    requirements for completing this form. See below and the{" "}
                    <a className="red-link" href="">
                      Instructions
                    </a>
                    .
                  </p>
                  <p>
                    ANTI-DISCRIMINATION NOTICE: All employees can choose which
                    acceptable documentation to present for Form I-9. Employers
                    cannot ask employees for documentation to verify information
                    in
                  </p>
                  <p>
                    <b>Section 1</b>, or specify which acceptable documentation
                    employees must present for
                  </p>
                  <p>
                    <b>Section 2</b> or Supplement B, Reverification and Rehire.
                    Treating employees differently based on their citizenship,
                    immigration status, or national origin may be illegal.
                  </p>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <h4>Section 1. Employee Information and Attestation: </h4>
                  <p>
                    Employees must complete and sign Section 1 of Form I-9 no
                    later than the first day of employment, but not before
                    accepting a job offer.
                  </p>

                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.lastName}
                        name="lastName"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name (Family Name)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.firstName}
                        name="firstName"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Name (Given Name)"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        value={data.middle}
                        name="middle"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Middle Initial (if any)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        value={data.otheLn}
                        name="otheLn"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Other Last Names Used (if any)"
                        variant="standard"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.address}
                        name="address"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Address (Street Number and Name)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        value={data.aptNo}
                        name="aptNo"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Apt. Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.city}
                        name="city"
                        onChange={formChange3}
                        id="standard-basic"
                        label="City or Town"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.state}
                        name="state"
                        onChange={formChange3}
                        id="standard-basic"
                        label="State"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.zipCode}
                        name="zipCode"
                        onChange={formChange3}
                        id="standard-basic"
                        label="ZIP Code"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.dob}
                        name="dob"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Date of Birth (mm/dd/yyyy)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.socialSno}
                        name="socialSno"
                        onChange={formChange3}
                        id="standard-basic"
                        label="U.S. Social Security Number"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.empEmail}
                        name="empEmail"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Employee's Email Address"
                        variant="standard"
                        type="email"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.empTno}
                        name="empTno"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Employee's Telephone Number"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <p>
                    I am aware that federal law provides for imprisonment and/or
                    fines for false statements, or the use of false documents,
                    in connection with the completion of this form. I attest,
                    under penalty of perjury, that this information, including
                    my selection of the box attesting to my citizenship or
                    immigration status, is true and correct.
                  </p>

                  <FormGroup className="pd-top-btm">
                    <FormControl>
                      <label>
                        Check one of the following boxes to attest to your
                        citizenship or immigration status (See page 2 and 3 of
                        the instructions.):
                      </label>
                      <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue={data.citizeOfUsa}
                        name="citizeOfUsa"
                        onChange={formChange3}
                      >
                        <Grid
                          container
                          spacing={3}
                          className="flx-box checkbox"
                        >
                          <Grid item xs={12}>
                            <FormControlLabel
                              value={"1. A citizen of the United States"}
                              name="citizeOfUsa"
                              control={
                                <Radio
                                  required={dataUpdate === true ? false : true}
                                />
                              }
                              label="1. A citizen of the United States"
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <FormControlLabel
                              value="2. A noncitizen national of the United States (See Instructions.)"
                              name="citizeOfUsa"
                              control={
                                <Radio
                                  required={dataUpdate === true ? false : true}
                                />
                              }
                              label="2. A noncitizen national of the United States (See Instructions.)"
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <FormControlLabel
                              value="3. A lawful permanent resident (Enter USCIS or A-Number.)"
                              name="citizeOfUsa"
                              control={
                                <Radio
                                  required={dataUpdate === true ? false : true}
                                />
                              }
                              label="3. A lawful permanent resident (Enter USCIS or A-Number.)"
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <TextField
                              className="txt-width"
                              value={data.lawFullPrTextFeild}
                              name="lawFullPrTextFeild"
                              onChange={formChange3}
                              id="standard-basic"
                              label="3. A lawful permanent resident (Enter USCIS or A-Number.)"
                              variant="standard"
                            />
                          </Grid>

                          <Grid item xs={8}>
                            <FormControlLabel
                              value="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)"
                              name="citizeOfUsa"
                              control={<Radio />}
                              label="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <TextField
                              className="txt-width"
                              value={data.noncitizenAuthTextField}
                              name="noncitizenAuthTextField"
                              onChange={formChange3}
                              id="standard-basic"
                              label="4. A noncitizen (other than Item Numbers 2. and 3. above) authorized to work until (exp. date, if any)"
                              variant="standard"
                            />
                          </Grid>
                        </Grid>
                      </RadioGroup>
                    </FormControl>
                  </FormGroup>

                  <FormGroup className="pd-top-btm">
                    <label>
                      If you check Item Number 4., enter one of these:
                    </label>
                    <Grid
                      container
                      spacing={3}
                      columns={12}
                      className="flx-box checkbox"
                    >
                      <Grid item xs={3}>
                        <TextField
                          className="txt-width"
                          value={data.uscis}
                          name="uscis"
                          onChange={formChange3}
                          id="standard-basic"
                          label="USCIS A-Number"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">OR</Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <TextField
                          className="txt-width"
                          value={data.formi94}
                          name="formi94"
                          onChange={formChange3}
                          id="standard-basic"
                          label="Form I-94 Admission Number"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={1}>
                        <Typography variant="h5">OR</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <TextField
                          className="txt-width"
                          value={data.foreignPass}
                          name="foreignPass"
                          onChange={formChange3}
                          id="standard-basic"
                          label="Foreign Passport Number and Country of Issuance"
                          variant="standard"
                        />
                      </Grid>
                      <Grid item xs={6} className="signature-area">
                        <label>
                          Signature
                          <SignatureCanvas
                            ref={ref => {
                              verificationState.current = ref;
                              canvaVerificationState(ref, "signOfEmpp");
                            }}
                            name="signOfEmpp"
                            onChange={formChange3}
                            penColor="black"
                            label="signature"
                            canvasProps={{
                              width: 500,
                              height: 200,
                              className: "sigCanvas txt-width"
                            }}
                          />
                        </label>
                        <Button
                          variant="text"
                          className="clear-btn"
                          onClick={clearverificationStateSignature}
                        >
                          <HighlightOffIcon />
                        </Button>
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          className="txt-width"
                          required={dataUpdate === true ? false : true}
                          value={data.todayDate}
                          name="todayDate"
                          onChange={formChange3}
                          id="standard-basic"
                          label="Today's Date (mm/dd/yyyy)"
                          variant="standard"
                          type="date"
                        />
                      </Grid>
                    </Grid>
                    <Typography variant="body" mt={5}>
                      If a preparer and/or translator assisted you in completing
                      Section 1, that person MUST complete the Preparer and/or
                      Translator Certification on Page 3
                    </Typography>
                  </FormGroup>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <h4>Section 2. Employer Review and Verification:</h4>
                  <p>
                    Employers or their authorized representative must complete
                    and sign Section 2 within three business days after the
                    employee's first day of employment, and must physically
                    examine, or examine consistent with an alternative procedure
                    authorized by the Secretary of DHS, documentation from List
                    A OR a combination of documentation from List B and List C.
                    Enter any additional documentation in the Additional
                    Information box; see Instructions.
                  </p>

                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={12}>
                      <Typography variant="h5" className="tag">
                        List A
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.docTitle1}
                        name="docTitle1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title 1"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.issueAuth}
                        name="issueAuth"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Issuing Authority"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNo}
                        name="docNo"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.expDate}
                        name="expDate"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        value={data.docTitle2}
                        name="docTitle2"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title 2 (if any)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.issueAuth2}
                        name="issueAuth2"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Issuing Authority"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNo2}
                        name="docNo2"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.expDate2}
                        name="expDate2"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        value={data.docTitle3}
                        name="docTitle3"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title 3 (if any)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.issueAuth3}
                        name="issueAuth3"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Issuing Authority"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNo3}
                        name="docNo3"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.expdate3}
                        name="expdate3"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>

                    <Grid item xs={12} mt={5}>
                      <Typography variant="h5" className="tag">
                        List B
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.docTitle4}
                        name="docTitle4"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title 4"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.issueAuth4}
                        name="issueAuth4"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Issuing Authority"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNo4}
                        name="docNo4"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.expdate4}
                        name="expdate4"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>

                    <Grid item xs={12} mt={5}>
                      <Typography variant="h5" className="tag">
                        List C
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.docTitleC}
                        name="docTitleC"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title 1"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.issueAuthC}
                        name="issueAuthC"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Issuing Authority"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNoC}
                        name="docNoC"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.expdateC}
                        name="expdateC"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.addInfoC}
                        name="addInfoC"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Additional Information"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        label="Check here if you used an alternative procedure authorized by DHS to examine documents."
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <h4>Certification:</h4>
                  <p>
                    I attest, under penalty of perjury, that (1) I have examined
                    the documentation presented by the above-named employee, (2)
                    the above-listed documentation appears to be genuine and to
                    relate to the employee named, and (3) to the best of my
                    knowledge, the employee is authorized to work in the United
                    States.
                  </p>

                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.firstDayofEmp}
                        name="firstDayofEmp"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Day of Employment (mm/dd/yyyy):"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.lastFirstNameOfEmp}
                        name="lastFirstNameOfEmp"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name, First Name and Title of Employer"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6} className="signature-area">
                      <label>
                        Signature
                        <SignatureCanvas
                          ref={ref => {
                            verificationEmpState.current = ref;
                            canvaVerificationEmpState(ref, "signOfEmpRepp");
                          }}
                          name="signOfEmpRepp"
                          onChange={formChange3}
                          penColor="black"
                          label="signature"
                          canvasProps={{
                            width: 500,
                            height: 200,
                            className: "sigCanvas txt-width"
                          }}
                        />
                      </label>
                      <Button
                        variant="text"
                        className="clear-btn"
                        onClick={clearEmpStateSignature}
                      >
                        <HighlightOffIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.todaySDate}
                        name="todaySDate"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Today's Date (mm/dd/yyyy)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.empBuss}
                        name="empBuss"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Employer's Business or Organization Name"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === true ? false : true}
                        value={data.empBusOrg}
                        name="empBusOrg"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Employer's Business or Organization Address, City or Town, State, ZIP Code"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        For reverification or rehire, complete Supplement B,
                        Reverification and Rehire on Page 4.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid className="table-box">
                  <Grid container className="flx-box table-box-title">
                    <Grid item xs={12}>
                      <Typography variant="h4">
                        LISTS OF ACCEPTABLE DOCUMENTS
                      </Typography>
                      <Typography variant="body">
                        All documents containing an expiration date must be
                        unexpired.
                      </Typography>
                      <Typography variant="body">
                        Documents extended by the issuing authority are
                        considered unexpired.
                      </Typography>
                      <Typography variant="body">
                        Employees may present one selection from List A or a
                        combination of one selection from List B and one
                        selection from List C.
                      </Typography>
                      <Typography variant="body">
                        <b>
                          Examples of many of these documents appear in the
                          Handbook for Employers (M-274).
                        </b>
                      </Typography>
                    </Grid>
                  </Grid>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          <Typography variant="body">LIST A</Typography>
                          Documents that Establish Both Identity and Employment
                          Authorization
                        </th>
                        <th>OR</th>
                        <th>
                          <Typography variant="body">LIST B</Typography>{" "}
                          Documents that Establish Identity
                        </th>
                        <th>AND</th>
                        <th>
                          <Typography variant="body">LIST C</Typography>
                          Documents that Establish Employment Authorization
                        </th>
                      </tr>

                      <tr>
                        <td>1. U.S. Passport or U.S. Passport Card</td>
                        <td className="bordernone" />
                        <td>
                          1. Driver's license or ID card issued by a State or
                          outlying possession of the United States provided it
                          contains a photograph or information such as name,
                          date of birth, gender, height, eye color, and address
                        </td>
                        <td className="bordernone" />
                        <td>
                          A Social Security Account Number card, unless the card
                          includes one of the following restrictions:
                          <ul>
                            <li>(1) NOT VALID FOR EMPLOYMENT</li>
                            <li>
                              (2) VALID FOR WORK ONLY WITH INS AUTHORIZATION
                            </li>
                            <li>
                              (3) VALID FOR WORK ONLY WITH DHS AUTHORIZATION
                            </li>
                          </ul>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          2. Permanent Resident Card or Alien Registration
                          Receipt Card (Form I-551)
                        </td>
                        <td className="bordernone" />
                        <td>
                          2. ID card issued by federal, state or local
                          government agencies or entities, provided it contains
                          a photograph or information such as name, date of
                          birth, gender, height, eye color, and address
                        </td>
                        <td className="bordernone" />
                        <td>
                          2. Certification of report of birth issued by the
                          Department of State (Forms DS-1350, FS-545, FS-240)
                        </td>
                      </tr>

                      <tr>
                        <td>
                          3. Foreign passport that contains a temporary I-551
                          stamp or temporary I-551 printed notation on a
                          machinereadable immigrant visa
                        </td>
                        <td className="bordernone" />
                        <td>3. School ID card with a photograph</td>
                        <td className="bordernone" />
                        <td>
                          3. Original or certified copy of birth certificate
                          issued by a State, county, municipal authority, or
                          territory of the United States bearing an official
                          seal
                        </td>
                      </tr>

                      <tr>
                        <td>
                          4. Employment Authorization Document that contains a
                          photograph (Form I-766)
                        </td>
                        <td className="bordernone" />
                        <td>4. Voter's registration card</td>
                        <td className="bordernone" />
                        <td>4. Native American tribal document</td>
                      </tr>

                      <tr>
                        <td>
                          5. For an individual temporarily authorized to work
                          for a specific employer because of his or her status
                          or parole:
                          <ul>
                            <li>a. Foreign passport; and</li>
                            <li>
                              b. Form I-94 or Form I-94A that has the following:
                            </li>
                            <ol>
                              <li>(1) The same name as the passport; and</li>
                              <li>
                                (2) An endorsement of the individual's status or
                                parole as long as that period of endorsement has
                                not yet expired and the proposed employment is
                                not in conflict with any restrictions or
                                limitations identified on the form.
                              </li>
                            </ol>
                          </ul>
                        </td>
                        <td className="bordernone" />
                        <td>5. U.S. Military card or draft record</td>
                        <td className="bordernone" />
                        <td>5. U.S. Citizen ID Card (Form I-197)</td>
                      </tr>

                      <tr>
                        <td>
                          6. Passport from the Federated States of Micronesia
                          (FSM) or the Republic of the Marshall Islands (RMI)
                          with Form I-94 or Form I-94A indicating nonimmigrant
                          admission under the Compact of Free Association
                          Between the United States and the FSM or RMI
                        </td>
                        <td className="bordernone" />
                        <td>6. Military dependent's ID card</td>
                        <td className="bordernone" />
                        <td>
                          6. Identification Card for Use of Resident Citizen in
                          the United States (Form I-179)
                        </td>
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>7. U.S. Coast Guard Merchant Mariner Card</td>
                        <td className="bordernone" />
                        <td>
                          7. Employment authorization document issued by the
                          Department of Homeland Security
                          <br />
                          For examples, see Section 7 and Section 13 of the
                          M-274 on uscis.gov/i-9-central.
                          <br />
                          The Form I-766, Employment Authorization Document, is
                          a List A, Item Number 4. document, not a List C
                          document.
                        </td>
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>8. Native American tribal document</td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>
                          9. Driver's license issued by a Canadian government
                          authority
                        </td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>
                          <b>
                            For persons under age 18 who are unable to present a
                            document listed above:
                          </b>
                        </td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>10. School record or report card</td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>11. Clinic, doctor, or hospital record</td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>

                      <tr>
                        <td className="bordernone" />
                        <td className="bordernone" />
                        <td>12. Day-care or nursery school record</td>
                        <td className="bordernone" />
                        <tr className="bordernone" />
                      </tr>
                    </thead>
                  </table>

                  <Grid className="grid-title">
                    <Typography variant="h4">Acceptable Receipts</Typography>
                    <Typography variant="body">
                      May be presented in lieu of a document listed above for a
                      temporary period. For receipt validity dates, see the
                      M-274.{" "}
                    </Typography>
                    <table>
                      <tr>
                        <td>
                          <ul>
                            <li>
                              ● Receipt for a replacement of a lost, stolen, or
                              damaged List A document.
                            </li>
                            <li>
                              ● Form I-94 issued to a lawful permanent resident
                              that contains an I-551 stamp and a photograph of
                              the individual.
                            </li>
                            <li>
                              ● Form I-94 with “RE” notation or refugee stamp
                              issued to a refugee.
                            </li>
                          </ul>
                        </td>
                        <td className="bordernone">
                          <b>OR</b>
                        </td>
                        <td>
                          {" "}Receipt for a replacement of a lost, stolen, or
                          damaged List B document.
                        </td>
                        <td className="bordernone" />
                        <td className="bordernone">
                          Receipt for a replacement of a lost, stolen, or
                          damaged List C document.
                        </td>
                      </tr>
                    </table>
                    <Typography variant="body">
                      <b>
                        *Refer to the Employment Authorization Extensions page
                        on I-9 Central for more information.
                      </b>
                    </Typography>
                  </Grid>
                </Grid>

                <Grid container spacing={2} columns={16} className="flx-box">
                  <Grid item xs={8}>
                    <img className="brandname" src={mainLogo} alt="" />
                  </Grid>
                  <Grid item xs={8}>
                    <ul className="hdr-date">
                      <li>USCIS</li>
                      <li>Form I-9</li>
                      <li>Supplement A</li>
                      <li>OMB No.1615-0047</li>
                      <li>Expires 07/31/2026</li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>

              <Grid className={dataUpdate === false && "hide-content"}>
                <Grid className="text-box">
                  <Typography variant="h1">
                    Supplement A<br />
                    Preparer and/or Translator Certification for Section 1
                  </Typography>
                  <h4>Department of Homeland Security </h4>
                  <h6>U.S.Citizenship and Immigration Services </h6>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.lNamesec1}
                        name="lNamesec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name (Family Name) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.fNamesec1}
                        name="fNamesec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Name (Given Name) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.middleNamesec1}
                        name="middleNamesec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Middle initial (if any) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        <b>Instructions:</b> This supplement must be completed
                        by any preparer and/or translator who assists an
                        employee in completing Section 1 of Form I-9. The
                        preparer and/or translator must enter the employee's
                        name in the spaces provided above. Each preparer or
                        translator must complete, sign, and date a separate
                        certification area. Employers must retain completed
                        supplement sheets with the employee's completed Form
                        I-9.
                      </p>
                    </Grid>
                  </Grid>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <h3>
                    I attest, under penalty of perjury, that I have assisted in
                    the completion of Section 1 of this form and that to the
                    best of my knowledge the information is true and correct.{" "}
                  </h3>

                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={6} className="signature-area">
                      <label>
                        Signature
                        <SignatureCanvas
                          ref={ref => {
                            signatureRef.current = ref;
                            canvaVerificationPreState(ref, "signOfPre");
                          }}
                          name="signOfPre"
                          onChange={formChange3}
                          penColor="black"
                          label="signature"
                          canvasProps={{
                            width: 500,
                            height: 200,
                            className: "sigCanvas txt-width"
                          }}
                        />
                      </label>
                      <Button
                        variant="text"
                        className="clear-btn"
                        onClick={clearSignature}
                      >
                        <HighlightOffIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={6}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.DatePre}
                        name="DatePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Date (mm/dd/yyyy)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.lastNamePre}
                        name="lastNamePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name (Family Name)  "
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.firstNamePre}
                        name="firstNamePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Name (Given Name) "
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.middleNamePre}
                        name="middleNamePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Middle Initial (if any)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.addressPre}
                        name="addressPre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Address (Street Number and Name) "
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.cityPre}
                        name="cityPre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="City or Town "
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.statePre}
                        name="statePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="State"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.zipCodePre}
                        name="zipCodePre"
                        onChange={formChange3}
                        id="standard-basic"
                        label="ZIP Code "
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                  </Grid>
                </Grid>

                <hr />

                {/* <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt
       value={data.} onChange={formChange3} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt
       value={data.} onChange={formChange3} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid>

       <hr></hr>


       <Grid className='text-box txt-fld-space'>
        <h3>I attest, under penalty of perjury, that I have assisted in the completion of Section 1 of this form and that to the best of my 
        knowledge the information is true and correct.</h3>

       <Grid container spacing={3} columns={12} className='flx-box'>
       <Grid item xs={8}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Signature of Preparer or Translator" variant="standard" />
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Date (mm/dd/yyyy)" variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)  " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt
       value={data.} onChange={formChange3} id="standard-basic" label="First Name (Given Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={4}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Middle Initial (if any)" variant="standard" />
       </Grid>
       <Grid item xs={5}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="Address (Street Number and Name) " variant="standard" /> 
       </Grid>
       <Grid item xs={3}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="City or Town " variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="State" variant="standard" /> 
       </Grid>
       <Grid item xs={2}>
       required = {dataUpdate === false ? false : true}<TextField className='txt-width' 
       value={data.} onChange={formChange3} id="standard-basic" label="ZIP Code " variant="standard" />
       </Grid>

       </Grid>
       </Grid> */}

                <Grid container spacing={2} columns={16} className="flx-box">
                  <Grid item xs={8}>
                    <img className="brandname" src={mainLogo} alt="" />
                  </Grid>
                  <Grid item xs={8}>
                    <ul className="hdr-date">
                      <li>USCIS</li>
                      <li>Form I-9</li>
                      <li>Supplement B</li>
                      <li>OMB No.1615-0047</li>
                      <li>Expires 07/31/2026</li>
                    </ul>
                  </Grid>
                </Grid>

                <Grid className="text-box">
                  <Typography variant="h1">
                    Supplement B<br />
                    Reverification and Rehire (formerly Section 3)
                  </Typography>
                  <h4>Department of Homeland Security </h4>
                  <h6>U.S.Citizenship and Immigration Services </h6>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.lastNameSBsec1}
                        name="lastNameSBsec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name (Family Name) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.firstNameSBsec1}
                        name="firstNameSBsec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Name (Given Name) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.middleNameSBsec1}
                        name="middleNameSBsec1"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Middle initial (if any) from Section 1."
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <p>
                        <b>Instructions:</b> This supplement replaces Section 3
                        on the previous version of Form I-9. Only use this page
                        if your employee requires reverification, is rehired
                        within three years of the date the original Form I-9 was
                        completed, or provides proof of a legal name change.
                        Enter the employee's name in the fields above. Use a new
                        section for each reverification or rehire. Review the
                        Form I-9 instructions before completing this page. Keep
                        this page as part of the employee's Form I-9 record.
                        Additional guidance can be found in the
                        <a className="red-link" href="">
                          {" "}Handbook for Employers: Guidance for Completing
                          Form I-9 (M-274)
                        </a>
                      </p>
                    </Grid>
                  </Grid>
                </Grid>

                <hr />

                <Grid className="text-box txt-fld-space">
                  <Grid container spacing={3} columns={12} className="flx-box">
                    <Grid item xs={2}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.dateOfRehireSB}
                        name="dateOfRehireSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Date of Rehire (if applicable)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.lastNameSb}
                        name="lastNameSb"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Last Name (Family Name)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.firstNameSB}
                        name="firstNameSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="First Name (Family Name)"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={2}>
                      <TextField
                        className="txt-width"
                        value={data.middleNameSB}
                        name="middleNameSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Middle Initial"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body">
                        <b>Reverification:</b> If the employee requires
                        reverification, your employee can choose to present any
                        acceptable List A or List C documentation to show
                        continued employment authorization. Enter the document
                        information in the spaces below.
                      </Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.docTitleSB}
                        name="docTitleSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Title"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.docNoSB}
                        name="docNoSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Document Number (if any)"
                        variant="standard"
                        type="number"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <TextField
                        className="txt-width"
                        value={data.ExpDateSB}
                        name="ExpDateSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Expiration Date (if any) (mm/dd/yyyy)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="body">
                        I attest, under penalty of perjury, that to the best of
                        my knowledge, this employee is authorized to work in the
                        United States, and if the employee presented
                        documentation, the documentation I examined appears to
                        be genuine and to relate to the individual who presented
                        it.
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="txt-width"
                        required={dataUpdate === false ? false : true}
                        value={data.nameOfEmpSB}
                        name="nameOfEmpSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Name of Employer or Authorized Representative"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={6} className="signature-area">
                      <label>
                        Signature
                        <SignatureCanvas
                          ref={ref => {
                            signatureEmpSBStateRef.current = ref;
                            canvaVerificationPreState(ref, "signOfEmpSb");
                          }}
                          name="signOfEmpSb"
                          onChange={formChange3}
                          penColor="black"
                          label="signature"
                          canvasProps={{
                            width: 500,
                            height: 200,
                            className: "sigCanvas txt-width"
                          }}
                        />
                      </label>
                      <Button
                        variant="text"
                        className="clear-btn"
                        onClick={clearEmpSBStateSignature}
                      >
                        <HighlightOffIcon />
                      </Button>
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        className="txt-width"
                        required={formShow === false ? false : true}
                        value={data.todayDateSB}
                        name="todayDateSB"
                        onChange={formChange3}
                        id="standard-basic"
                        label="Today's Date (mm/dd/yyyy)"
                        variant="standard"
                        type="date"
                      />
                    </Grid>

                    <Grid item xs={12} mt={4}>
                      <Typography variant="body">
                        Additional Information (Initial and date each notation.)
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <FormControlLabel
                        control={<Checkbox />}
                        required={formShow === false ? false : true}
                        value={data.clickHereSB}
                        name="clickHereSB"
                        onChange={formChange3}
                        label="Check here if you used an alternative procedure authorized by DHS to examine documents."
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              {/* These section are being used By supplement b form Page. same values aree being called by multiples times below thats why
below section are commented out */}

              {/*   
<hr></hr>
        <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt
        value={data.} onChange={formChange3} id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt
        value={data.} onChange={formChange3} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width'
        value={data.} onChange={formChange3}  id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            required = {formShow === false ? false : true}<FormControlLabel control={<Checkbox />} 
            value={data.} onChange={formChange3} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid> */}

              <hr />

              {/* <Grid className='text-box txt-fld-space'>
        <Grid container spacing={3} columns={12} className='flx-box'>
        <Grid item xs={2}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Date of Rehire (if applicable)" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Last Name (Family Name)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3}  id="standard-basic" label="Last Name (Family Name)" variant="standard" />
        </Grid>
        <Grid item xs={2}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Middle Initial" variant="standard" /> 
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        <b>Reverification:</b> If the employee requires reverification, your employee can choose to present any acceptable List A or List C documentation to show 
        continued employment authorization. Enter the document information in the spaces below.         
        </Typography>
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt
        value={data.} onChange={formChange3} id="standard-basic" label="Document Title" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt
        value={data.} onChange={formChange3} id="standard-basic" label="Document Number (if any)" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Expiration Date (if any) (mm/dd/yyyy)" variant="standard" />
        </Grid>
        <Grid item xs={12}>
        <Typography variant='body'>
        I attest, under penalty of perjury, that to the best of my knowledge, this employee is authorized to work in the United States, and if the 
         employee presented documentation, the documentation I examined appears to be genuine and to relate to the individual who presented it.          
        </Typography>
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Name of Employer or Authorized Representative" variant="standard" />
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Signature of Employer or Authorized Representative" variant="standard" /> 
        </Grid>
        <Grid item xs={4}>
        required = {formShow === false ? false : true}<TextField className='txt-width' 
        value={data.} onChange={formChange3} id="standard-basic" label="Today's Date (mm/dd/yyyy)" variant="standard" />
        </Grid>

        <Grid item xs={12} mt={4}>
        <Typography variant='body'>
        Additional Information (Initial and date each notation.)           
        </Typography>
        </Grid>
        <Grid item xs={12}>
            <FormControlLabel control={<Checkbox />} label="Check here if you used an alternative procedure authorized by DHS to examine documents." />
        </Grid>
        </Grid>
        </Grid> */}

              <Grid container spacing={3} columns={12} className="btm-button">
                <Grid item xs={6} />
                <Grid item xs={6}>
                  <Grid className="form-btns">
                    <Button>
                      <Link to={"/stepform"} className="cancel-btn">
                        Cancel
                      </Link>
                    </Button>
                    {dataUpdate === true
                      ? <Button
                          variant="contained"
                          type="submit"
                          className="save-btn"
                        >
                          Update
                        </Button>
                      : <Button
                          variant="contained"
                          type="submit"
                          className="save-btn"
                        >
                          Save
                        </Button>}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EligibilityVerification;
