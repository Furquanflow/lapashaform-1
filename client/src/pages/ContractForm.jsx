import React, { useRef } from "react";

//Mui Design Library
import {
  Container,
  Grid,
  TextField,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Radio,
  RadioGroup,
  FormControl,
} from "@mui/material";

//React Router Domvariant="contained"
import { Link, useNavigate } from "react-router-dom";

import SignatureCanvas from "react-signature-canvas";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ContractForm = ({
  data,
  formChange2,
  onStep2,
  updateTransContactSignature,
  updateEmployeeContactSignature,
}) => {
  const navigate = useNavigate();

  const submitContactForm = e => {
    e.preventDefault();
    onStep2();
    navigate("/stepform", { replace: true });
  };

  const employeeContactSignature = useRef();
  const transContactSignature = useRef();

  const clearEmployeeContactSignature = e => {
    e.preventDefault();
    employeeContactSignature.current.clear();
  };
  const clearTransContactSignature = e => {
    e.preventDefault();
    transContactSignature.current.clear();
  };

  return (
    <Grid>
      <Grid className="form-section">
        <Container>
          <form onSubmit={submitContactForm}>
            <Grid className="form-inner">
              <Typography className="main-title" variant="h3">
                DISPUTE RESOLUTION AGREEMENT
              </Typography>

              <Grid className="body-p">
                <Typography variant="body">
                  Employee, <b>Jhon Smith (Name will be Replace)</b> , and
                  Employer, Kirkwood Ops LLC, for good and valuable
                  consideration agree as follows:
                </Typography>
              </Grid>

              <Grid className="form-points">
                <Typography variant="h4">
                  1. ALTERNATIVE DISPUTE RESOLUTION (“ADR”).
                </Typography>
                <Typography variant="body">
                  anticipating any particular problems during the employment
                  relationship wish to outline a way to resolve any disputes
                  that may arise between them regarding this Agreement,
                  including disputes arising out of or related to the
                  relationship between the parties. All claims, disputes,
                  controversies, or disagreements of any kind whatsoever
                  including any claim arising out of, in connection with, or
                  related to this Agreement, and/or employees employment with
                  Employer pursuant to this Agreement, including any claim that
                  may arise between, Employee and any of Employer’s officers,
                  employees, managers, owners or agents in their capacity as
                  such, shall be subject to the following alternative dispute
                  process:
                </Typography>
                <Grid className="form-point-inn">
                  <Typography variant="h5">A. Informal Mediation: </Typography>
                  <Typography variant="p">
                    Upon a request from any party to this Agreement, the parties
                    shall promptly meet to discuss the dispute and attempt to
                    negotiate a resolution of the dispute.{" "}
                  </Typography>
                </Grid>
                <Grid className="form-point-inn">
                  <Typography variant="h5">
                    B. Mediation before a Mediator:{" "}
                  </Typography>
                  <Typography variant="p">
                    If the parties are not able to achieve a resolution of the
                    dispute within 30 days of the meeting or 30 days after
                    request for a refused meeting, the parties agree to appoint
                    a neutral mediator and attempt to resolve the dispute
                    through mediation with a private mediator in Harris County,
                    Texas. The parties agree to use reasonable efforts to select
                    a mutually acceptable mediator and Employer shall pay the
                    mediation fee.
                  </Typography>
                  <Typography variant="p">
                    The parties agree to conduct the mediation within 60 days of
                    their meeting (or 30 days after request for a refused
                    meeting) referenced above.
                  </Typography>
                </Grid>
                <Grid className="form-point-inn">
                  <Typography variant="h5">C. Arbitration:</Typography>
                  <Typography variant="p">
                    If the parties are unable to achieve a resolution of any
                    dispute, the parties agree to resolve any disputes relating
                    to or arising out of this Agreement, through binding
                    arbitration, using one (1) mutually acceptable private
                    arbitrator in Harris County, Texas, or in the absence of
                    agreement, (ii) in accordance with selection rules of the
                    American Arbitration Association for one (1) arbitrator.{" "}
                  </Typography>
                  <Typography variant="p">
                    The Arbitration shall be conducted in accordance with the
                    Texas Rules of Civil Procedure and governed by the Federal
                    Arbitration Act. The Arbitration shall be brought under the
                    American Arbitration Association Rule for
                    Employment/Workplace Cases. The maximum cost to Employee to
                    arbitrate shall be governed by the AAA. Employer agrees to
                    pay Employees share to arbitrate upon request from Employee.
                  </Typography>
                  <Typography variant="p">
                    Employee agrees that final and binding arbitration is the
                    exclusive final means for resolving the Claims outlined in
                    this Agreement. This Agreement is a waiver of all rights
                    Employee may have to a civil court action on any dispute
                    outlined by this Agreement. Accordingly, only an arbitrator,
                    not a judge or jury, will decide the dispute, although the
                    arbitrator has the authority to award any type of relief
                    that could otherwise be awarded by a judge or jury, subject
                    to all applicable terms of this ADR. The ADR as set forth
                    and agreed survives termination of this Employee’s
                    employment and shall be fully enforceable.
                  </Typography>
                  <Typography variant="p">
                    Employee and Employer shall each pay for their own
                    attorneys’ fees or costs of representation for purposes of
                    the mediation and arbitration unless otherwise provided by
                    law or other terms of this Agreement.{" "}
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="form-points">
                <Typography variant="h4">2. WAIVER OF CLASS CLAIMS </Typography>
                <Typography variant="body">
                  EMPLOYEE WAIVES THE RIGHT TO PARTICIPATE, RECEIVE NOTICE OF,
                  CONSENT TO OR SETTLE ANY CLAIM AGAINST EMPLOYER ARISING OUT OF
                  OR RELATED TO EMPLOYMENT AS PART OF A COLLECTIVE,
                  REPRESENTATIVE, PUTATIVE CLASS OR CLASS ACTION, OR ANY
                  CONSOLIDATED ACTION WHETHER IN ARBITRATION OR IN A COURT OF
                  COMPETENT JURISDICTION.
                </Typography>
                <Typography variant="body">
                  The arbitrator shall not have the authority to authorize or
                  preside over any form of a class, collective or representative
                  proceeding. The arbitrator may only hear claims brought
                  individually by a single person and does not have the
                  authority to hear claims in a class, collective or
                  representative proceeding.
                </Typography>
              </Grid>

              <Grid className="form-points">
                <Typography variant="h4">3. COVERED CLAIMS:</Typography>
                <Typography variant="body">
                  Claims covered by the ADR provision and waiver include, but
                  are not limited to the following; alleged violations of
                  federal, state, or local constitutions, statutes, regulations,
                  or ordinances, including, but not limited to, allegations of a
                  breach of a contractual obligation, claims or disputes related
                  to compensation, common law tort claims and alleged violations
                  of public policy. While Contractor has no employment
                  relationship with and is not employed by Sierra the following
                  are expressly excluded from the ADR provision and are not
                  covered by this Agreement: claims or allegations related to
                  workers’ compensation or unemployment insurance,
                  administrative claims filed with government agencies such as
                  the Equal Employment Opportunity Commission or the National
                  Labor Relations Board and claims that are expressly excluded
                  by statute or are expressly required to be arbitrated under a
                  different procedure.
                </Typography>
              </Grid>

              <Grid className="form-points">
                <Grid className="form-title">
                  <Typography className="main-title" variant="h3">
                    DISPUTE RESOLUTION AGREEMENT
                  </Typography>
                  <Typography className="main-title-inn" variant="h5">
                    <b>
                      AVISO A LAS EMPLEADAS CERCA DE ACUERDO DE ARBITRAJE Y
                      RENUNCIA DE CLASE DEL EMPLEADO
                    </b>
                  </Typography>
                </Grid>
                <Typography variant="body">
                  If English is not your native language and/or you are unable
                  to read and understand the Employee Class Waiver and
                  Arbitration Agreement written in English, you have a right to
                  request a translation of the policies contained in this
                  Policy. You should request a translation of these policies if
                  you are unable to read and understand English because you must
                  understand the policies contained in the Policy and agree to
                  be bound by the policies to be employed by the Company.
                </Typography>
                <Typography variant="body">
                  Si inglés no es su lengua natal y/o si usted no puede leer y
                  entender el Acuerdo de arbitraje y renuncia de clase del
                  empleado escrita en inglés, usted tiene el derecho de
                  solicitar una traducción de las polizas contenidas en este
                  Poliza. Usted debe de solicitar una traducción de estas
                  polizas si usted no puede leer y entender inglés, porque usted
                  debe de entender las polizas contenidas en la Poliza y acordar
                  en ser atado a la poliza para ser empleado de la compania.
                </Typography>
                <Typography variant="body">
                  Employee – check box as appropriate{" "}
                  <b>Jhon Smith (Name will be Replace)</b> Empleado Marque la
                  casilla según corresponda
                </Typography>
                <FormGroup className="pd-top-btm">
                  <FormControl component="fieldset">
                    Language Proficiency:
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue={data.ableReadEng} // Set a default value
                      name="ableReadEng"
                      onChange={formChange2}
                    >
                      <FormControlLabel
                        required
                        value="I am able to read and understand English. I have read and understand the Employee Class Waiver and Arbitration Agreement and have signed it."
                        name="ableReadEng"
                        control={<Radio required />}
                        label="I am able to read and understand English. I have read and understand the Employee Class Waiver and Arbitration Agreement and have signed it."
                      />
                      <FormControlLabel
                        required
                        value="I am unable to read and understand English and requested the Employee Class Waiver and Arbitration Agreement to be read to me in my native language. My signature to this acknowledgment and the Employee Class Waiver and Arbitration Agreement indicates that I understand and agree to the Policy."
                        name="ableReadEng"
                        control={<Radio required />}
                        label="I am unable to read and understand English and requested the Employee Class Waiver and Arbitration Agreement to be read to me in my native language. My signature to this acknowledgment and the Employee Class Waiver and Arbitration Agreement indicates that I understand and agree to the Policy."
                      />
                      <FormControlLabel
                        required
                        value="I declined to have the Employee Class Waiver and Arbitration Agreement read to me in my native language. I understand that by signing this acknowledgment and the Class Waiver and Arbitration Agreement I am waiving my right to a jury trial and agree to take any disagreement I may have with my employer to Arbitration. I also understand that I will not be able to bring suit in a group with others regarding my employment or to participate in a group settlement. Any dispute I have with my employer must be brought by me alone in an arbitration."
                        name="ableReadEng"
                        control={<Radio required />}
                        label="I declined to have the Employee Class Waiver and Arbitration Agreement read to me in my native language. I understand that by signing this acknowledgment and the Class Waiver and Arbitration Agreement I am waiving my right to a jury trial and agree to take any disagreement I may have with my employer to Arbitration. I also understand that I will not be able to bring suit in a group with others regarding my employment or to participate in a group settlement. Any dispute I have with my employer must be brought by me alone in an arbitration."
                      />
                    </RadioGroup>
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid container spacing={3} columns={12} className="flx-box">
                <Grid item xs={6}>
                  <TextField
                    className="txt-width"
                    required
                    value={data.empName}
                    name="empName"
                    onChange={formChange2}
                    id="standard-basic"
                    label="Employee Printed Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6} className="signature-area">
                  <label>
                    Signature
                    <SignatureCanvas
                      ref={ref => {
                        employeeContactSignature.current = ref;
                        updateEmployeeContactSignature(ref, "empSign");
                      }}
                      name="empSign"
                      onChange={formChange2}
                      penColor="black"
                      label="signature"
                      canvasProps={{
                        width: 500,
                        height: 200,
                        className: "sigCanvas txt-width",
                      }}
                    />
                  </label>
                  <Button variant="text" className="clear-btn" onClick={clearEmployeeContactSignature}>
                  <HighlightOffIcon />
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    className="txt-width"
                    value={data.transPrinName}
                    name="transPrinName"
                    // required
                    onChange={formChange2}
                    id="standard-basic"
                    label="Translator Printed Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6} className="signature-area">
                  <label>
                    Signature
                    <SignatureCanvas
                      ref={ref => {
                        transContactSignature.current = ref;
                        updateTransContactSignature(ref, "transSignName");
                      }}
                      name="transSignName"
                      onChange={formChange2}
                      penColor="black"
                      label="signature"
                      canvasProps={{
                        width: 500,
                        height: 200,
                        className: "sigCanvas txt-width",
                      }}
                    />
                  </label>
                  <Button variant="text" className="clear-btn" onClick={clearTransContactSignature}>
                  <HighlightOffIcon />
                  </Button>
                </Grid>
              </Grid>

              <Grid
                container
                spacing={3}
                columns={12}
                className="btm-button"
                mt={5}
              >
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
            </Grid>
          </form>
        </Container>
      </Grid>
    </Grid>
  );
};

export default ContractForm;
