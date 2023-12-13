import React, { useRef} from "react";

//React Router Dom
import { Link, useNavigate } from "react-router-dom";

//Mui Design Library
import {
  Container,
  Grid,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';

//Images
import mainLogo from "../assets/images/logo.png";

import SignatureCanvas from "react-signature-canvas";

const EmploymentInformationForm = ({
  data,
  formChange,
  onStep,
  addData,
  canvaUpdatedState,
}) => {
  const navigate = useNavigate();

  const onInfoForm = e => {
    onStep();
    navigate("/stepform", { replace: true });
    // window.history.pushState("/stepform");
    console.log(addData);
  };

  const updatedState = useRef();

  const clearUpdatedStateSignature = e => {
    e.preventDefault();
    updatedState.current.clear();
  };

  return (
    <Grid>
      <Grid className="form-section">
        <Container>
          <Grid className="form-inner">
            <Grid container spacing={2} columns={12} className="flx-box">
              <Grid item xs={6}>
                <img className="brandname" src={mainLogo} alt="" />
              </Grid>
              <Grid item xs={6} />
            </Grid>

            <Grid className="text-box">
              <h1>Company Name New Employee Onboarding Form</h1>
            </Grid>

            <hr />

            <form onSubmit={onInfoForm}>
              <Grid className="text-box txt-fld-space">
                <h4>Personal Information: </h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.fNamePerInfo}
                      name="fNamePerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Full Name:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.lnamePerInfo}
                      name="lnamePerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="City:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.statePerInfo}
                      name="statePerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="State:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.zipcodePerInfo}
                      name="zipcodePerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="ZIP Code:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.phoneNoPerInfo}
                      name="phoneNoPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Phone Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.emailAddPerInfo}
                      name="emailAddPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Email Address:"
                      variant="standard"
                      type="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.addPerInfo}
                      name="addPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Address:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Emergency Contact Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.emrCnoPerInfo}
                      name="emrCnoPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Emergency Contact Name:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.relaPerInfo}
                      name="relaPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Relationship:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.emrPhoneNoPerInfo}
                      name="emrPhoneNoPerInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Phone Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Employment Details:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.startDateEmpDet}
                      name="startDateEmpDet"
                      onChange={formChange}
                      id="standard-basic"
                      label="Start Date:"
                      variant="standard"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.deptEmpDet}
                      name="deptEmpDet"
                      onChange={formChange}
                      id="standard-basic"
                      label="Department/Team:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.managerEmpDet}
                      name="managerEmpDet"
                      onChange={formChange}
                      id="standard-basic"
                      label="Manager/Supervisor:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      value={data.empIdEmpDet}
                      name="empIdEmpDet"
                      onChange={formChange}
                      id="standard-basic"
                      label="Employee ID (if applicable):"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Tax Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.ssNoTaxInfo}
                      name="ssNoTaxInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Social Security Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.depTaxInfo}
                      name="depTaxInfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Department/Team:"
                      variant="standard"
                      type="text"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Federal Tax Withholding (W-4) Status:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.taxInfo}
                          name="taxInfo"
                          onChange={formChange} // Assuming you have an onChange handler
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Single"
                                control={<Radio required />}
                                label="Single"
                                name="taxInfo"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Married"
                                control={<Radio required />}
                                label="Married"
                                name="taxInfo"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="HeadOfHouse"
                                control={<Radio required />}
                                label="Head of Household"
                                name="taxInfo"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Direct Deposit Information:</h4>

                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.bankNameDDinfo}
                      name="bankNameDDinfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Bank Name:"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.routNoDDinfo}
                      name="routNoDDinfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Routing Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.accNoDDinfo}
                      name="accNoDDinfo"
                      onChange={formChange}
                      id="standard-basic"
                      label="Account Number:"
                      variant="standard"
                      type="number"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Benefit Elections:</h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Health Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.healthInsurance}
                          name="healthInsurance"
                          onChange={formChange} // Assuming you have an onChange handler
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Enroll"
                                control={<Radio required />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Decline"
                                control={<Radio required />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Dental Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.dentalInsurance}
                          name="dentalInsurance"
                          onChange={formChange} // Assuming you have an onChange handler
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Enroll"
                                control={<Radio required />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Decline"
                                control={<Radio required />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Vision Insurance:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.visionInsurance}
                          name="visionInsurance"
                          onChange={formChange}
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Enroll"
                                control={<Radio required />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Decline"
                                control={<Radio required />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>Retirement Plan:</label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.retirementPlan}
                          name="retirementPlan"
                          onChange={formChange}
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Enroll"
                                control={<Radio required />}
                                label="Enroll"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Decline"
                                control={<Radio required />}
                                label="Decline"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space form-points">
                <h4>Acknowledgment of Company Policies:</h4>
                <p>
                  I acknowledge that I have received and read the following
                  company policies and agree to abide by them:
                </p>
                <ul>
                  <li>Employee Handbook</li>
                  <li>Code of Conduct</li>
                  <li>Confidentiality Agreement</li>
                  <li>Safety Guidelines</li>
                </ul>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <h4>Additional Information:</h4>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={12}>
                    <FormGroup className="pd-top-btm">
                      <FormControl>
                        <label>
                          Do you have any allergies or medical conditions that
                          the company should be aware of?
                        </label>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          value={data.medConyes}
                          name="medConyes"
                          onChange={formChange}
                        >
                          <Grid
                            container
                            spacing={3}
                            columns={12}
                            className="flx-box checkbox"
                          >
                            <Grid item xs={4}>
                              <FormControlLabel
                                value="Yes"
                                control={<Radio required />}
                                label="Yes"
                              />
                            </Grid>

                            <Grid item xs={4}>
                              <FormControlLabel
                                value="No"
                                control={<Radio required />}
                                label="No If yes, please provide details:"
                              />
                            </Grid>
                          </Grid>
                        </RadioGroup>
                      </FormControl>
                    </FormGroup>
                  </Grid>
                  <Grid item xs={6} className="signature-area">
                    <label>
                      Signature
                      <SignatureCanvas
                        ref={ref => {
                          updatedState.current = ref;
                          canvaUpdatedState(ref, "conFormsign");
                        }}
                        name="conFormsign"
                        onChange={formChange}
                        penColor="black"
                        label="signature"
                        canvasProps={{
                          width: 500,
                          height: 200,
                          className: "sigCanvas txt-width",
                        }}
                      />
                    </label>
                    <Button variant="text" className="clear-btn" onClick={clearUpdatedStateSignature}>
                      <HighlightOffIcon />
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      className="txt-width"
                      required
                      value={data.conFormDate}
                      name="conFormDate"
                      onChange={formChange}
                      id="standard-basic"
                      label="Date:"
                      variant="standard"
                      type="date"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <p>
                      By signing above, I confirm that the information provided
                      is accurate and complete to the best of my knowledge. I
                      understand that I am responsible for reviewing and
                      complying with all company policies and procedures.
                    </p>
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="text-box txt-fld-space">
                <p>
                  This onboarding form covers basic employee information, tax
                  details, direct deposit, benefit elections, and acknowledgment
                  of company policies. You can customize this form to match your
                  company's specific onboarding process and requirements.
                  Additionally, it's important to keep sensitive information
                  secure and compliant with data protection regulations.
                </p>
              </Grid>

              <Grid container spacing={3} columns={12} className="btm-button">
                <Grid item xs={6} />
                <Grid item xs={6}>
                  <Grid className="form-btns">
                    <Button>
                      <Link to={"/stepform"} className="cancel-btn">
                        Cancel
                      </Link>
                    </Button>
                    <Button
                      variant="contained"
                      type="submit"
                      className="save-btn"
                    >
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default EmploymentInformationForm;
