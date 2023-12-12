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

// images
import companyLogo01 from "../assets/images/logo01.png";
import companyLogo02 from "../assets/images/logo02.png";
import companyLogo03 from "../assets/images/logo03.png";

//Router Dom
import { Link, useNavigate } from "react-router-dom";

import SignatureCanvas from "react-signature-canvas";

const PolicyForm = ({
  data,
  onStep1,
  addData1,
  formChange1,
  updatePolicySignature,
  updateTransPolicySignature,
  updateEmployeePolicySignature,
}) => {
  const navigate = useNavigate();
  const policySubmit = e => {
    e.preventDefault();
    navigate("/stepform", { replace: true });
    onStep1();
  };

  const signaturePolicySignature = useRef();
  const employeePolicySignature = useRef();
  const transPolicySignature = useRef();

  const clearSignaturePolicySignature = e => {
    e.preventDefault();
    signaturePolicySignature.current.clear();
  };

  const clearEmployeePolicySignature = e => {
    e.preventDefault();
    employeePolicySignature.current.clear();

  };

  const clearTransPolicySignature = (e) => {
    e.preventDefault();
    transPolicySignature.current.clear();
  }

  return (
    <Grid>
      <Grid className="form-section">
        <Container>
          <Grid className="form-inner">
            <form onSubmit={e => policySubmit(e)}>
              <Grid className="company-logos">
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={4}>
                    <img src={companyLogo01} alt="" />
                  </Grid>
                  <Grid item xs={4}>
                    <img src={companyLogo02} alt="" />
                  </Grid>
                  <Grid item xs={4}>
                    <img src={companyLogo03} alt="" />
                  </Grid>
                </Grid>
              </Grid>

              <Grid className="form-points policy-form-title">
                <Typography variant="h4">
                  LAPASHA HOSPITALITY GROUP EMPLOYEE HANDBOOK Effective
                  6/__/2023
                </Typography>
                <Typography variant="body">
                  If English is not your native language and/or you are unable
                  to read and understand the Employee Handbook written in
                  English, you have a right to request a translation of the
                  policies contained in this Handbook. You should request a
                  translation of these policies if you are unable to read and
                  understand English because you must understand the policies
                  contained in the Handbook and agree to be bound by the
                  policies to be employed by the Company
                </Typography>
                <Typography variant="body">
                  Si inglés no es su lengua natal y/o si usted no puede leer y
                  entender la Guía de Empleado escrita en inglés, usted tiene el
                  derecho de solicitar una traducción de las polizas contenidas
                  en este Guía. Usted debe de solicitar una traducción de estas
                  polizas si usted no puede leer y entender inglés, porque usted
                  debe de entender las polizas contenidas en la Guía y acordar
                  en ser atado a las polizas para ser empleado de el compania.
                </Typography>
              </Grid>

              <Grid className="book-index-sec">
                <Typography variant="h4">TABLE OF CONTENTS</Typography>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        I. EMPLOYMENT PROCESS
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>6</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Nature of Employment</Grid>
                    <Grid className="middle" />
                    <Grid>6</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Equal Opportunity Employer</Grid>
                    <Grid className="middle" />
                    <Grid>7</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      C. Immigration Law Compliance and Employment Eligibility
                      Verification
                    </Grid>
                    <Grid className="middle" />
                    <Grid>7</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Employment Reference Checks</Grid>
                    <Grid className="middle" />
                    <Grid>7</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Employment Applications</Grid>
                    <Grid className="middle" />
                    <Grid>8</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Pre-Employment Drug Screening</Grid>
                    <Grid className="middle" />
                    <Grid>8</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>G. Hiring of Relatives</Grid>
                    <Grid className="middle" />
                    <Grid>8</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>H. Employee Personal Relationships</Grid>
                    <Grid className="middle" />
                    <Grid>8</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        II. EMPLOYMENT STATUS
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>9</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Employment Categories</Grid>
                    <Grid className="middle" />
                    <Grid>9</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Exempt and Nonexempt Status</Grid>
                    <Grid className="middle" />
                    <Grid>9</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Work Status Categories</Grid>
                    <Grid className="middle" />
                    <Grid>9</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Tipped Employees</Grid>
                    <Grid className="middle" />
                    <Grid>10</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Employee Performance Evaluation</Grid>
                    <Grid className="middle" />
                    <Grid>10</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Employee Access to Personnel Records</Grid>
                    <Grid className="middle" />
                    <Grid>11</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>G. Personnel Data Changes</Grid>
                    <Grid className="middle" />
                    <Grid>11</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        III. EMPLOYEE BENEFIT PROGRAMS AND LEAVE
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>11</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Employee Benefits</Grid>
                    <Grid className="middle" />
                    <Grid>11</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Employee Meals</Grid>
                    <Grid className="middle" />
                    <Grid>11</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Vacation</Grid>
                    <Grid className="middle" />
                    <Grid>12</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Benefits Continuation (COBRA)</Grid>
                    <Grid className="middle" />
                    <Grid>12</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Family and Medical Leaves of Absence</Grid>
                    <Grid className="middle" />
                    <Grid>12</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Jury Duty</Grid>
                    <Grid className="middle" />
                    <Grid>16</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>G. Time Off To Vote</Grid>
                    <Grid className="middle" />
                    <Grid>17</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>H. Military Leave</Grid>
                    <Grid className="middle" />
                    <Grid>17</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>I. Lactation Breaks</Grid>
                    <Grid className="middle" />
                    <Grid>17</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        IV. TIMEKEEPING/PAYROLL
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>18</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Payroll</Grid>
                    <Grid className="middle" />
                    <Grid>18</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Timekeeping</Grid>
                    <Grid className="middle" />
                    <Grid>18</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Time Clock Policy</Grid>
                    <Grid className="middle" />
                    <Grid>18</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Administrative Pay Corrections</Grid>
                    <Grid className="middle" />
                    <Grid>19</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Business Travel Expenses</Grid>
                    <Grid className="middle" />
                    <Grid>19</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        V. WORK HOURS AND CONDITIONS
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>20</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Work Hours</Grid>
                    <Grid className="middle" />
                    <Grid>20</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Attendance and Punctuality</Grid>
                    <Grid className="middle" />
                    <Grid>20</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Overtime</Grid>
                    <Grid className="middle" />
                    <Grid>21</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Meal Periods and Breaks</Grid>
                    <Grid className="middle" />
                    <Grid>21</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Visitors in the Workplace</Grid>
                    <Grid className="middle" />
                    <Grid>21</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Solicitation</Grid>
                    <Grid className="middle" />
                    <Grid>22</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      G. Alcohol Consumption by Employees & Dram Shop
                      Responsibilities
                    </Grid>
                    <Grid className="middle" />
                    <Grid>22</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      H. Employees Engaged In Retail Sale Of Cigarettes,
                      E-Cigarettes, And Tobacoo Products
                    </Grid>
                    <Grid className="middle" />
                    <Grid>22</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>I. Tipped Employees Uniforms</Grid>
                    <Grid className="middle" />
                    <Grid>23</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>J. Dress and Grooming</Grid>
                    <Grid className="middle" />
                    <Grid>23</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        VI. EMPLOYEE CONDUCT AND DISCIPLINARY ACTION
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>24</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Business Ethics and Conduct</Grid>
                    <Grid className="middle" />
                    <Grid>24</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Gifts, Favors, or Similar Items</Grid>
                    <Grid className="middle" />
                    <Grid>24</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Conflicts of Interest</Grid>
                    <Grid className="middle" />
                    <Grid>25</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      D. Policy on Harassment or any other form of Unlawful
                      Discrimination
                    </Grid>
                    <Grid className="middle" />
                    <Grid>26</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Definition of Harassment</Grid>
                    <Grid className="middle" />
                    <Grid>26</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Sexual Harassment</Grid>
                    <Grid className="middle" />
                    <Grid>26</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>G. Anti-Discrimination Policy</Grid>
                    <Grid className="middle" />
                    <Grid>27</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      H. How to Report Harassment or any other form of Unlawful
                      Discrimination
                    </Grid>
                    <Grid className="middle" />
                    <Grid>27</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>I. Investigation Process</Grid>
                    <Grid className="middle" />
                    <Grid>27</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      J. Accommodations under the Americans with Disabilities
                      Act or Pregnant Works Fairness Act
                    </Grid>
                    <Grid className="middle" />
                    <Grid>29</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>K. Workplace Violence Prevention</Grid>
                    <Grid className="middle" />
                    <Grid>29</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>L. Weapons Prohibition Policy</Grid>
                    <Grid className="middle" />
                    <Grid>30</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>M. Drug and Alcohol-Free Workplace Policy</Grid>
                    <Grid className="middle" />
                    <Grid>30</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>N. Security Inspections</Grid>
                    <Grid className="middle" />
                    <Grid>33</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>O. Professional Conduct Policy</Grid>
                    <Grid className="middle" />
                    <Grid>33</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>P. Disciplinary Action</Grid>
                    <Grid className="middle" />
                    <Grid>34</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>Q. Use of Company Property Policy</Grid>
                    <Grid className="middle" />
                    <Grid>35</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      R. Theft, Misuse and Destruction of Property Policy
                    </Grid>
                    <Grid className="middle" />
                    <Grid>35</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>S. Return of Property</Grid>
                    <Grid className="middle" />
                    <Grid>36</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        VII. ELECTRONIC SYSTEMS USAGE AND MONITORING
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>36</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Acceptable Use of Electronic Communications</Grid>
                    <Grid className="middle" />
                    <Grid>37</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>B. Telephone Use Policy</Grid>
                    <Grid className="middle" />
                    <Grid>38</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Camera and Other Recording Devices Policy</Grid>
                    <Grid className="middle" />
                    <Grid>38</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>D. Cell Phone Policy</Grid>
                    <Grid className="middle" />
                    <Grid>39</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>E. Software Policy</Grid>
                    <Grid className="middle" />
                    <Grid>39</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>F. Employee Internet Usage Policy</Grid>
                    <Grid className="middle" />
                    <Grid>39</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>G. Social Networking Policy</Grid>
                    <Grid className="middle" />
                    <Grid>40</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        IX. HEALTH, SAFETY, AND SECURITY
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>41</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>SANITATION:</Grid>
                    <Grid className="middle" />
                    <Grid>41</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>CASH HANDLING:</Grid>
                    <Grid className="middle" />
                    <Grid>42</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>LEAVING THE PROPERTY:</Grid>
                    <Grid className="middle" />
                    <Grid>42</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        X. COMPANY TRADE SECRETS AND CONFIDENTIAL INFORMATION
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>43</b>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        XII. ALTERNATIVE DISPUTE RESOLUTION/CLASS ACTION WAIVER
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>43</b>
                    </Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>A. Dispute Resolution</Grid>
                    <Grid className="middle" />
                    <Grid>43</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>
                      B. Waiver Of Collective Action, Class, or Consolidated
                      Claims
                    </Grid>
                    <Grid className="middle" />
                    <Grid>44</Grid>
                  </Grid>
                  <Grid className="linewrapper linewrapper-inn">
                    <Grid>C. Covered Claims</Grid>
                    <Grid className="middle" />
                    <Grid>44</Grid>
                  </Grid>
                </Grid>

                <Grid className="book-index">
                  <Grid className="linewrapper main-linewrapper">
                    <Grid>
                      <Typography variant="h5">
                        EMPLOYEE ACKNOWLEDGEMENT
                      </Typography>
                    </Grid>
                    <Grid className="middle" />
                    <Grid>
                      <b>45</b>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <hr />

              <Grid className="welcom-blk">
                <Typography variant="h4">WELCOME</Typography>
                <Typography variant="body">
                  Employees who work at LaPasha Lounge and Grill, Nara Café, and
                  Patio by LaPasha:
                </Typography>
                <Typography variant="body">Welcome to our family!</Typography>
                <Typography variant="body">
                  Our mission is to offer an exceptional Mediterranean dining
                  experience with a high-end vibe, family-friendly environment,
                  and spacious patios. We aim to delight guests with authentic
                  cuisine, including savory mezes and succulent kebabs, while
                  providing a warm and welcoming atmosphere. From the rich
                  flavors of the Mediterranean to the timeless tradition of
                  hookah, we strive to exceed expectations and become the
                  premier destination for a memorable dining experience.
                </Typography>
                <Typography variant="body">
                  Our success as a team depends on clear communication and
                  understanding. To help you with some basics, we’ve prepared
                  this policy manual which you should read and refer to often.
                  If you have questions about our policies, please don’t
                  hesitate to ask a manager.
                </Typography>
                <Typography variant="body">
                  These policies set the ground rules for a safe and pleasant
                  work environment. In these pages, you will learn what we
                  expect from you. Your adherence to these policies may affect
                  your performance evaluations and continued employment. You
                  will also learn what you can expect from us, such as certain
                  rights and benefits; and how to resolve conflicts if they
                  arise. Ultimately, these policies help our team focus on the
                  reason we come to work each day – our guests.
                </Typography>
                <Typography variant="body">
                  Again, welcome to the team. I hope you find success and
                  fulfillment in our company.
                </Typography>
                <Typography variant="body">
                  <b>Sincerely,</b>
                </Typography>
                <Typography variant="body">
                  <b>La Pasha Management</b>
                </Typography>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">I. EMPLOYMENT PROCESS</Typography>
                <Typography variant="body">
                  These policies have been revised and are effective as of March
                  1, 2023. This manual supersedes all prior versions of The
                  Company’s employee manual. No employee manual can anticipate
                  every circumstance or question regarding employment policies.
                  As our organization continues to grow, the need may arise and
                  The Company reserves the right to revise, supplement, or
                  rescind any policies or portions of the employee manual from
                  time to time as appropriate, in their sole and absolute
                  discretion. Employees will, of course, be notified of any
                  future changes to the manual as they occur.
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">
                    A. Nature of Employment
                  </Typography>
                  <Typography variant="body">
                    Employees are an employee of the respective restaurant
                    entity by which they are employed. These entities are
                    collectively referred to as “the Company” or “Employer”
                    through out this handbook.
                  </Typography>
                  <Typography variant="body">
                    Kirkwood Ops, LLC is the operating entity of LaPasha Lounge
                    and Grill.
                  </Typography>
                  <Typography variant="body">
                    Fondren Ops, LLC is the operating entity of Nara Café.
                  </Typography>
                  <Typography variant="body">
                    FESS Beverly Ops, LLC is the operating entity of Patio by
                    LaPasha.
                  </Typography>
                  <Typography variant="body">
                    <b>
                      OUR COMPANY IS AN AT-WILL EMPLOYER. THIS MEANS THAT
                      REGARDLESS OF ANY PROVISION IN THIS EMPLOYEE HANDBOOK,
                      EITHER YOU OR THE COMPANY MAY TERMINATE THE EMPLOYMENT
                      RELATIONSHIP AT ANY TIME, FOR ANY REASON, WITH OR WITHOUT
                      CAUSE OR NOTICE. NOTHING IN THIS EMPLOYEE HANDBOOK OR IN
                      ANY DOCUMENT OR STATEMENT, WRITTEN OR ORAL, SHALL LIMIT
                      THE RIGHT TO TERMINATE EMPLOYMENT AT -WILL. NO OFFICER,
                      EMPLOYEE OR REPRESENTATIVE OF THE COMPANY IS AUTHORIZED TO
                      ENTER INTO AN AGREEMENT—EXPRESS OR IMPLIED—WITH ANY
                      EMPLOYEE FOR EMPLOYMENT FOR A SPECIFIED PERIOD OF TIME
                      UNLESS SUCH AN AGREEMENT IS IN A WRITTEN CONTRACT SIGNED
                      BY THE HR DEPARTMENT OR PRESIDENT OF THE COMPANY.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    Nothing in this handbook will be interpreted, applied, or
                    enforced to interfere with, restrain, coerce employees or
                    unlawfully restrict an employee’s right to engage in any of
                    the rights guaranteed to them by Section 7 of the National
                    Labor Relations Act, including but not limited to, the right
                    to engage in concerted protected activity for the purposes
                    of their mutual aid and/or protection. This manual is
                    confidential company information and company property.
                  </Typography>
                  <Typography variant="body">
                    These provisions supersede all existing policies and
                    practices and may not be amended or added to without the
                    express written approval of The Company’s President. The
                    Company has the right to unilaterally change or delete any
                    practice, policy, procedure, or rule within or not within
                    this manual.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Equal Opportunity Employer
                  </Typography>
                  <Typography variant="body">
                    The Company provides equal employment opportunity to all
                    individuals and to not discrimination against anyone
                    regardless of race, color, religion, sex, age, national
                    origin, disability, pregnancy, military status, veteran
                    status, or any other characteristic or class. The Company’s
                    equal employment policy, however, does not amount to consent
                    to be bound by any laws to which it is not subject, submit
                    to the jurisdiction of any administrative agency responsible
                    for the enforcement of federal law, or submit to the
                    jurisdiction of any federal court interpreting such laws
                    until such time as the Company employs fifteen employees.
                  </Typography>
                  <Typography variant="body">
                    Any employee with questions or concerns about any type of
                    discrimination in the workplace should bring these issues to
                    the attention of their immediate supervisor or the
                    Administrator. Employees can raise concerns and make reports
                    without fear of reprisal. Anyone found to be engaging in any
                    type of unlawful discrimination will be subject to
                    disciplinary action, up to and including termination of
                    employment.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    C. Immigration Law Compliance and Employment Eligibility
                    Verification
                  </Typography>
                  <Typography variant="body">
                    The Company is committed to employing only United States
                    citizens and aliens who are authorized to work in the United
                    States and does not unlawfully discriminate on the basis of
                    citizenship or national origin. The Company is to comply
                    with federal laws and regulations concerning verification of
                    employment eligibility and associated record keeping of all
                    employees hired to work in the United States. The law
                    applies to both United States citizens and non-citizens.
                  </Typography>
                  <Typography variant="body">
                    The Citizenship and Immigration Services Employment
                    Eligibility Verification (Form I-9) is for all new
                    employees. Form I-9 are completed according to the
                    instructions provided on the form and related legal
                    requirements. Any employee who has been terminated and
                    removed from payroll must complete a new I-9 if the employee
                    is subsequently rehired.
                  </Typography>
                  <Typography variant="body">
                    Employees with questions or seeking more information on
                    immigration law issues are encouraged to contact their
                    supervisor, the Administrator or Human Resource Coordinator.
                    Employees may raise questions or complaints about
                    immigration law compliance without fear of reprisal.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    D. Employment Reference Checks
                  </Typography>
                  <Typography variant="body">
                    To ensure that individuals who join the employer are well
                    qualified and have a strong potential to be productive and
                    successful, it is the policy of The Company to check the
                    employment references of applicants.
                  </Typography>
                  <Typography variant="body">
                    The Company will respond in writing only to those reference
                    check inquiries that are submitted in writing. Unless
                    otherwise to be disclosed by legal process (e.g., subpoena),
                    responses to such inquires will confirm only dates of
                    employment, wage rates, and position(s) held. No employment
                    data will be released without a written authorization and
                    release signed by the individual who is the subject of the
                    inquiry. All job reference inquiries by prospective
                    employers should be directed to The Company’s President.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Employment Applications
                  </Typography>
                  <Typography variant="body">
                    The Company relies upon the accuracy of information
                    contained in the employment application, as well as the
                    accuracy of other data presented throughout the hiring
                    process and employment. Any misrepresentations,
                    falsifications, or material omissions in any of this
                    information or data may result in the exclusion of the
                    individual from further consideration for employment or, if
                    the person has been hired, termination from employment.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    F. Pre-Employment Drug Screening
                  </Typography>
                  <Typography variant="body">
                    The Company may require prospective employees to pass a
                    pre-employment drug screen as a condition of employment
                    prior to their start date. The Company will not hire
                    individuals who test positive for the illegal use of a
                    controlled or synthetic substance.
                  </Typography>
                  <Typography variant="body">
                    Individuals who report to work under the influence of drugs
                    and/or alcohol may be to submit to a drug test. If this
                    occurs, an agent of the Company will transport the employee
                    to an approved testing facility. Testing will be conducted
                    in accordance with the law.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">G. Hiring of Relatives</Typography>
                  <Typography variant="body">
                    The employment of relatives in an organization may cause
                    serious conflicts and problems with favoritism and employee
                    morale. In addition to claims of partiality in treatment at
                    work, personal conflicts from outside work environment can
                    be carried into day-to-day working relationships. Therefore,
                    The Company discourages the employment of relatives, but
                    will permit such employment of relatives if: (1) such
                    relationship is fully disclosed; and (2) such employment is
                    approved by Management.
                  </Typography>
                  <Typography variant="body">
                    For the purpose of this policy, a relative is any person who
                    is related by blood or marriage, or whose relationship with
                    the employee is similar to that of persons who are related
                    by blood or marriage.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    H. Employee Personal Relationships
                  </Typography>
                  <Typography variant="body">
                    What employees do on their own time away from work is
                    private unless it negatively impacts their performance in
                    the workplace. The manner in which you conduct yourselves at
                    work is subject to company policies and procedures.
                    Consequently, the Company strictly prohibits personal
                    relationships of a romantic nature between an employee and
                    any other employee in a supervisor position with relation to
                    that employee. The Company also strongly discourages peer to
                    peer relationships of a romantic nature.
                  </Typography>
                  <Typography variant="body">
                    While The Company reserves the right to terminate any
                    employee who violates this policy, The Company acknowledges
                    such relationships may occur. Any employee who becomes
                    involved in a romantic relationship with another employee
                    shall immediately disclose such relationship by contacting
                    Human Resources as set forth below depending on which
                    location employed:
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    columns={12}
                    className="email-blk"
                  >
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Patio by La Pasha</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@patiobylapasha.com"}>
                        admin@patiobylapasha.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Nara Café</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@narahtx.com"}>
                        admin@narahtx.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Pasha Lounge & Grill:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@lapashalounge.com"}>
                        admin@lapashalounge.com
                      </Link>
                    </Grid>
                  </Grid>
                  <Typography variant="body">
                    Each employee will be to execute a Consensual Relationship
                    Agreement in which each employee:
                  </Typography>
                  <ul className="num-list">
                    <li>acknowledges this Policy;</li>
                    <li>
                      confirms that entering into the relationship is consensual
                      and has not been made a condition of their employment,
                    </li>
                    <li>
                      agrees to abide by the Company’s sexual harassment policy;
                    </li>
                    <li>
                      agrees to refrain from personal conduct on company
                      premises that creates tension with co-workers or causes
                      other employees to feel uncomfortable or offended; and
                    </li>
                    <li>
                      acknowledges that If a conflict of interest is present in
                      a relationship, The Company will endeavor to find a
                      solution to eliminate the conflict of interest so that one
                      person is no longer able to unduly influence or favor the
                      other. (Such solution may include transfer or relocation
                      of one of the employees to another department or location,
                      or change the reporting structure, if feasible and
                      available. If reasonable alternatives are not available or
                      feasible, The Company may require one or both of the
                      employees to resign or be terminated.)
                    </li>
                  </ul>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">II. EMPLOYMENT STATUS</Typography>
                <Grid className="points-blk">
                  <Typography className="h6">
                    A. Employment Categories
                  </Typography>
                  <Typography variant="body">
                    It is the intent of The Company to clarify the definitions
                    of employment classifications so that employees understand
                    their employment status and benefit eligibility. These
                    classifications do not guarantee employment for any
                    specified period of time. Accordingly, the right to
                    terminate the employment relationship at will at any time is
                    retained by both the employee and The Company. These
                    categories are also subject to change as necessary from time
                    to time.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Exempt and Nonexempt Status
                  </Typography>
                  <Typography variant="body">
                    Each employee is designated as either NONEXEMPT or EXEMPT
                    from overtime pay under applicable federal and state wage
                    and hour laws. NONEXEMPT employees are entitled to overtime
                    pay under the specific provisions of federal and state laws.
                    EXEMPT employees are excluded from specific provisions of
                    federal and state wage and hour laws. The exemption applies
                    to executive, administrative and professional employees as
                    defined by the Federal Fair Labor Standards Act. Employees
                    classified as exempt are excluded from the payment of
                    overtime and are paid on a salary basis. An employee’s
                    EXEMPT or NONEXEMPT classification may be changed only upon
                    written notification by The Company.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    C. Work Status Categories
                  </Typography>
                  <Typography variant="body">
                    In addition to the above categories, each employee will be
                    classified under one of the following 3 employment
                    categories:
                  </Typography>
                  <Typography variant="body">
                    <b>REGULAR FULL-TIME</b> employees are those who are not in
                    a temporary status and who are regularly scheduled to work
                    employer’s full-time schedule. Generally, they are eligible
                    for employer’s benefit package, subject to the terms,
                    conditions, and limitations of each benefit program. This
                    category includes employees who work an average of at least
                    30 hours or more per week as part of their work schedule.
                  </Typography>
                  <Typography variant="body">
                    <b>REGULAR PART-TIME</b> employees are those who work an
                    average of less than 30 hours per week as part of their work
                    schedule. These employees are not eligible for employment
                    related benefits.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">D. Tipped Employees</Typography>
                  <Typography variant="body">
                    <b>Tip Credit Notice</b> Employer utilizes the tip credit
                    provision permitted by the Fair Labor Standards Act. Under
                    this provision, you will be paid a base hourly rate of
                    $7.25. Employer will claim a tip credit of $5.12 per hour
                    and the minimum cash wage (currently $2.13/hour) which is
                    the maximum allowed by federal law.
                  </Typography>
                  <Typography variant="body">
                    Under the Act, we are to notify you of our intention to
                    utilize the tip credit. This provision serves as
                    notification of Employer’s use of the tip credit and your
                    signature to this manual confirms your receipt of and
                    understanding of the Employer’s use of the tip credit.. You
                    also should know that the additional amount claimed by
                    Employer on account of tips as the tip credit may not exceed
                    the value of the tips received by you.
                  </Typography>
                  <Typography variant="body">
                    <b>Credit Card Fee</b> Credit card tips are subject to a
                    credit card fee which will be deducted from such tips.
                  </Typography>
                  <Typography variant="body">
                    <b>Tax Reporting </b> Finally, you should be aware that the
                    IRS requires employees to report all of their tips as
                    taxable income on annual tax returns.
                  </Typography>
                  <Typography variant="body">
                    <b>Disputes </b> Employees who believe they have not
                    received all tips due to them should immediately report the
                    issue to the restaurant manager. If the restaurant manager
                    does not respond or address the issue the employee should
                    report the issue to Human Resources as follows:
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    columns={12}
                    className="email-blk"
                  >
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Patio by La Pasha</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@patiobylapasha.com"}>
                        admin@patiobylapasha.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Nara Café</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@narahtx.com"}>
                        admin@narahtx.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Pasha Lounge & Grill:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@lapashalounge.com"}>
                        admin@lapashalounge.com
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Employee Performance Evaluation
                  </Typography>
                  <Typography variant="body">
                    Supervisors and employees are strongly encouraged to discuss
                    job performance and goals on an informal, day-to-day basis.
                    Performance evaluations are generally conducted annually,
                    providing both supervisors and employees the opportunity to
                    discuss performance and any appropriate performance
                    improvement plans, goals, and objectives. Evaluations may be
                    written or oral. The performance review process is also a
                    tool to evaluate the appropriateness of changes in an
                    employee’s wage rate, salary, or other compensation.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    F. Employee Access to Personnel Records
                  </Typography>
                  <Typography variant="body">
                    Employees’ access to his or her personnel file will be
                    permitted consistent with the laws of the State of Texas or
                    in which the employee is located.
                  </Typography>
                  <Typography variant="body">
                    Many of the records that The Company maintains, including
                    information about employees, are considered confidential
                    information, and cannot be openly shared
                  </Typography>
                  <Typography variant="body">
                    Employees have the right to request certain types of records
                    under the Occupational Safety and Health Administration
                    (OSHA) regulations. This includes, but is not limited to,
                    copies of the current or stored OSHA 300 Logs as described
                    in 29 CFR 1904.35 and certain records described in
                    1919.1020, Access to employee exposure and medical records.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    G. Personnel Data Changes
                  </Typography>
                  <Typography variant="body">
                    It is the responsibility of each employee to promptly notify
                    The Company of any changes in personnel data.
                  </Typography>
                  <Typography variant="body">
                    Notify your supervisor or Administrator when there are
                    changes to the following:
                  </Typography>
                  <ul>
                    <li>Your name</li>
                    <li>Your home address and/or telephone number</li>
                    <li>The person to notify in an emergency </li>
                    <li>Your marital status (including divorce)</li>
                    <li>Your number and name of dependents</li>
                    <li>Tax form W-4 changes</li>
                    <li>
                      Successful completion of any accredited courses, seminars,
                      and workshops Other such status reports
                    </li>
                  </ul>
                  <Typography variant="body">
                    Failure to notify The Company of changes to your contact
                    information may create delays in providing certain benefits.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  III. EMPLOYEE BENEFIT PROGRAMS AND LEAVE
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">A. Employee Benefits</Typography>
                  <Typography variant="body">
                    Eligible employees are provided a wide range of benefits. A
                    number of the programs (such as Social Security, and
                    unemployment insurance) cover all employees in the manner
                    prescribed by law.
                  </Typography>
                  <Typography variant="body">
                    Benefits eligibility is dependent upon a variety of factors,
                    including employee classification. Management can identify
                    the programs for which you are eligible. Details of many of
                    these programs can be found elsewhere in the employee
                    manual.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">B. Employee Meals</Typography>
                  <ul className="icon-list">
                    <li>
                      When any employee is working they can receive a 50%
                      discount on food.
                    </li>
                    <li>
                      When any employee is NOT working they can receive a 25%
                      discount on food
                    </li>
                    <li>
                      This discount applies to EMPLOYEES ONLY, not friends and
                      family.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">C. Vacation</Typography>
                  <Typography variant="body">
                    <b>Vacation:</b> Employer does not offer paid vacation for
                    non-exempt or hourly employees or tipped employees. Requests
                    for time off should be submitted to the location manager.
                    Time off shall be granted as per the staffing needs and
                    schedule of the location at which the employee works.
                  </Typography>
                  <Typography variant="body">
                    Vacations may not be permitted on certain black-out dates.
                  </Typography>
                  <Typography variant="body">
                    Requests for time off must be submitted to the location
                    manager or Director of Operations in writing three weeks
                    prior to the anticipated vacation day, unless otherwise not
                    practicable.
                  </Typography>
                  <Typography variant="body">
                    The Company will make every effort to accommodate properly
                    requested time off but does not guarantee every request.
                  </Typography>
                  <Typography variant="body">
                    <b>Sick Leave/Paid Time Off for Managers</b> Managers are
                    eligible for up to two (2) paid sick days and one week (5
                    business days) Paid Time Off commensurate with their tenure
                    and experience.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    D. Benefits Continuation (COBRA)
                  </Typography>
                  <Typography variant="body">
                    The Company will abide by the Consolidated Omnibus Budget
                    Reconciliation Act (“COBRA”) providing COBRA coverage for
                    those employees who are qualified beneficiaries.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Family and Medical Leaves of Absence
                  </Typography>
                  <Typography variant="body">
                    The Company complies with the Family and Medical Leave Act
                    (FMLA) and will grant up to 12 weeks of leave during a
                    12-month period to eligible employees (or up to 26 weeks of
                    military caregiver leave).
                  </Typography>
                  <Typography variant="body">
                    The purpose of this policy is to provide employees with a
                    general description of their FMLA rights. In the event of
                    any conflict between this policy and the applicable law,
                    employees will be afforded all rights by law. If you have
                    any questions, concerns or disputes with this policy, please
                    contact Management.
                  </Typography>

                  <Grid className="points-blk-inn">
                    <Typography variant="h5">Eligibility</Typography>
                    <Typography variant="body">
                      To be eligible for leave under this policy, employees must
                      meet all of the following requirements:
                    </Typography>
                    <ul>
                      <li>
                        Have worked at least twelve (12) months for The Company.
                      </li>
                      <li>
                        Have worked at least 1,250 hours for The Company over
                        the twelve (12) months preceding the date the leave
                        would commence.
                      </li>
                      <li>
                        Currently work at a location where there are at least
                        fifty (50) employees within seventy-five (75) miles.
                      </li>
                    </ul>
                    <Typography variant="body">
                      The 12 months of employment do not have to be consecutive.
                      All periods of absence from work due to or necessitated by
                      service in the uniformed services are counted as hours
                      worked in determining eligibility.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">Reasons for Leave</Typography>
                    <Typography variant="body">
                      To qualify as FMLA leave under this policy, the leave must
                      be for one of the following reasons:
                    </Typography>
                    <ul>
                      <li>
                        The birth of a child or placement of a child with the
                        employee for adoption or foster care.
                      </li>
                      <li>
                        To care for a spouse, child or parent who has a serious
                        health condition.
                      </li>
                      <li>
                        For a serious health condition that makes the employee
                        unable to perform the essential functions of his or her
                        job.
                      </li>
                      <li>
                        For any qualifying exigency arising out of the fact that
                        a spouse, child or parent is a military member on
                        covered active duty or on call to covered active duty
                        status.
                      </li>
                      <li>
                        To care for a covered service member with a serious
                        injury or illness.
                      </li>
                    </ul>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">Amount of Leave</Typography>
                    <Typography variant="body">
                      An eligible employee can take up to 12 weeks of FMLA leave
                      during any 12-month period. The company will measure the
                      12-month period as a rolling 12-month period measured
                      backward from the date an employee uses any leave under
                      this policy. Each time an employee takes leave, the
                      company will compute the amount of leave the employee has
                      taken under this policy in the last 12 months and subtract
                      it from the 12 weeks of available leave, and the balance
                      remaining is the amount the employee is entitled to take
                      at that time.
                    </Typography>
                    <Typography variant="body">
                      An eligible employee can take up to 26 weeks for the FMLA
                      military caregiver leave during a single 12-month period.
                      For this military caregiver leave, the company will
                      measure the 12-month period as a rolling 12-month period
                      measured forward. FMLA leave already taken for other FMLA
                      circumstances will be deducted from the total of 26 weeks
                      available.
                    </Typography>
                    <Typography variant="body">
                      Eligible spouses who both work for the company may only
                      take a combined total of 12 weeks of leave for the birth
                      of a child, adoption or placement of a child in foster
                      care, or to care for a parent (but not a parent "in-law")
                      with a serious health condition. Both may only take a
                      combined total of 26 weeks of leave to care for a covered
                      injured or ill service member (if each spouse is a parent,
                      spouse, child or next of kin of the service member).
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Intermittent Leave or a Reduced Work Schedule
                    </Typography>
                    <Typography variant="body">
                      Employees may take FMLA leave in one consecutive block of
                      time, may use the leave intermittently (take a day
                      periodically when needed over the year) or, under certain
                      circumstances, may use the leave to reduce the workweek or
                      workday, resulting in a reduced hour schedule. In all
                      cases, the leave may not exceed a total of 12 workweeks
                      (or 26 workweeks to care for an injured or ill service
                      member) in a 12-month period.
                    </Typography>
                    <Typography variant="body">
                      The company may temporarily transfer an employee to an
                      available alternative position with equivalent pay and
                      benefits if the alternative position would better
                      accommodate the intermittent or reduced schedule, in
                      instances when leave for the employee or employee's family
                      member is foreseeable and for planned medical treatment,
                      including recovery from a serious health condition or to
                      care for a child after birth or placement for adoption or
                      foster care.
                    </Typography>
                    <Typography variant="body">
                      For the birth, adoption or foster care of a child, the
                      company and the employee must mutually agree to the
                      schedule before the employee may take the leave
                      intermittently or work a reduced-hour schedule. Leave for
                      birth, adoption or foster care of a child must be taken
                      within one year of the birth or placement of the child.
                    </Typography>
                    <Typography variant="body">
                      When leave is needed for planned medical treatment, the
                      employee must make a reasonable effort to schedule
                      treatment so as not to unduly disrupt the company's
                      operations.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Employee Notice Requirement
                    </Typography>
                    <Typography variant="body">
                      All employees requesting FMLA leave must provide verbal or
                      written notice of the need for leave to the department
                      manager or HR manager.
                    </Typography>
                    <Typography variant="body">
                      When the need for the leave is foreseeable, the employee
                      must provide the company with at least 30 days' notice.
                      When an employee becomes aware of a need for FMLA leave
                      fewer than 30 days in advance, the employee must provide
                      notice of the need for the leave either the same day the
                      need for leave is discovered or the next business day.
                      When the need for FMLA leave is not foreseeable, the
                      employee must comply with the company's usual and
                      customary notice and procedural requirements for
                      requesting leave, absent unusual circumstances.
                    </Typography>
                    <Typography variant="body">
                      Within five business days after the employee has provided
                      this notice, the HR manager will complete and provide the
                      employee with a Notice of Eligibility and Rights and
                      request a medical certification or other supporting
                      documentation as necessary.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Designation of FMLA Leave
                    </Typography>
                    <Typography variant="body">
                      Within five business days after the employee has submitted
                      the certification or other documentation, the HR manager
                      will complete and provide the employee with a written
                      response to the employee's request for FMLA leave using
                      the FMLA Designation Notice.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Employee Status and Benefits During Leave
                    </Typography>
                    <Typography variant="body">
                      The Company will continue an employee's health benefits
                      during the leave period at the same level and under the
                      same conditions as if the employee was continuously at
                      work. While on paid leave, the employer will continue to
                      make payroll deductions to collect the employee's share of
                      insurance premiums, if applicable. While on unpaid leave,
                      the employee must continue to make this payment, either in
                      person or by mail. The payment must be received in the
                      accounting department by the 15th day of each month. If
                      the payment is more than 30 days late, the employee's
                      health care coverage may be dropped for the duration of
                      the leave.
                    </Typography>
                    <Typography variant="body">
                      The company will provide 15 days' notification prior to
                      the employee's loss of coverage.
                    </Typography>
                    <Typography variant="body">
                      If the employee chooses not to return to work for reasons
                      other than a continued serious health condition of the
                      employee or the employee's family member or a circumstance
                      beyond the employee's control, the company will require
                      the employee to reimburse the company the amount it paid
                      for the employee's health insurance premium during the
                      leave period.
                    </Typography>
                    <Typography variant="body">
                      If the employee contributes to a life insurance or
                      disability plan, the company will continue making payroll
                      deductions while the employee is on paid leave. While the
                      employee is on unpaid leave, the employee may request
                      continuation of such benefits and pay his or her portion
                      of the premiums, or the company may elect to maintain such
                      benefits during the leave and pay the employee's share of
                      the premium payments. If the employee does not continue
                      these payments, the company will discontinue coverage
                      during the leave. If the company maintains coverage, the
                      company may recover the costs incurred for paying the
                      employee's share of any premiums, whether or not the
                      employee returns to work.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Employee Status After Leave
                    </Typography>
                    <Typography variant="body">
                      An employee who takes leave under this policy may be asked
                      to provide a fitness for duty clearance from a health care
                      provider. This requirement will be included in the
                      company's response to the FMLA request. Generally, an
                      employee who takes FMLA leave will be able to return to
                      the same position or a position with equivalent status,
                      pay, benefits and other employment terms. The position
                      will be the same or one that is virtually identical in
                      terms of pay, benefits and working conditions. The company
                      may choose to exempt certain key employees from this
                      requirement and not return them to the same or similar
                      position when doing so will cause substantial and grievous
                      economic injury to business operations. Key employees will
                      be given written notice at the time FMLA leave is
                      requested of his or her status as a key employee.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Use of Paid and Unpaid Leave
                    </Typography>
                    <Typography variant="body">
                      An employee who is taking FMLA leave because of the
                      employee's own serious health condition or the serious
                      health condition of a family member must use all paid
                      vacation, personal or sick leave prior to being eligible
                      for unpaid leave. Sick leave may run concurrently with
                      FMLA leave if the reason for the FMLA leave is covered by
                      the established sick leave policy.
                    </Typography>
                    <Typography variant="body">
                      Disability leave for the birth of a child and for an
                      employee's serious health condition, including workers'
                      compensation leave (to the extent that it qualifies), will
                      be designated as FMLA leave and will run concurrently with
                      FMLA. For example, when an employee takes six weeks of The
                      Company pregnancy disability leave, the six weeks will be
                      designated as FMLA leave and counted toward the employee's
                      12-week entitlement. The employee will then be to
                      substitute accrued (or earned) paid leave as appropriate
                      before being eligible for unpaid leave for what remains of
                      the 12-week entitlement. An employee who is taking leave
                      for the adoption or foster care of a child must use all
                      paid vacation, personal or family leave prior to being
                      eligible for unpaid leave.
                    </Typography>
                    <Typography variant="body">
                      An employee who is using military FMLA leave for a
                      qualifying exigency must use all paid vacation and
                      personal leave prior to being eligible for unpaid leave.
                      An employee using FMLA military caregiver leave must also
                      use all paid vacation, personal leave or sick leave (as
                      long as the reason for the absence is covered by the
                      company's sick leave policy) prior to being eligible for
                      unpaid leave.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">
                      Intent to Return to Work from FMLA Leave
                    </Typography>
                    <Typography variant="body">
                      On a basis that does not discriminate against employees on
                      FMLA leave, the company may require an employee on FMLA
                      leave to report periodically on the employee's status and
                      intent to return to work.
                    </Typography>
                  </Grid>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">Definitions</Typography>
                    <Typography variant="body">
                      <b>Serious health condition </b> means an illness, injury,
                      impairment, or physical or mental condition that involves
                      inpatient care or continuing treatment by a health care
                      provider. This can include conditions with short-term,
                      chronic, long-term or permanent periods of incapacity.
                    </Typography>
                    <Typography variant="body">
                      <b>Spouse</b> means a husband or wife as defined or
                      recognized in the state where the individual was married
                      and includes individuals in a common law or same-sex
                      marriage. Spouse also includes a husband or wife in a
                      marriage that was validly entered into outside of the
                      United States, if the marriage could have been entered
                      into in at least one state.
                    </Typography>
                    <Typography variant="body">
                      <b>Child</b> means a biological, adopted or foster child,
                      a stepchild, a legal ward, or a child of a person standing
                      in loco parentis, who is either under age 18, or age 18 or
                      older and "incapable of self-care because of a mental or
                      physical disability" at the time that FMLA leave is to
                      commence.
                    </Typography>
                    <Typography variant="body">
                      <b>Parent</b> means a biological, adoptive, step or foster
                      father or mother, or any other individual who stood in
                      loco parentis to the employee when the employee was a
                      child. This term does not include parents "in law."
                    </Typography>
                    <Typography variant="body">
                      <b>Qualifying exigency </b> includes short-notice
                      deployment, military events and activities, child care and
                      school activities, financial and legal arrangements,
                      counseling, rest and recuperation, post-deployment
                      activities, and additional activities that arise out of
                      active duty, provided that the employer and employee
                      agree, including agreement on timing and duration of the
                      leave.
                    </Typography>
                    <Typography variant="body">
                      <b>Covered active duty </b> for members of a regular
                      component of the Armed Forces, means duty during
                      deployment of the member with the Armed Forces to a
                      foreign country. For a member of the Reserve components of
                      the Armed Forces, means duty during the deployment of the
                      member with the Armed Forces to a foreign country under a
                      federal call or order to active duty in support of a
                      contingency operation, in accordance with 29 CR 825.102.
                    </Typography>
                    <Typography variant="body">
                      <b>The next of kin of a covered service member </b> is the
                      nearest blood relative, other than the covered service
                      member's spouse, parent or child in the following order of
                      priority: blood relatives who have been granted legal
                      custody of the service member by court decree or statutory
                      provisions, brothers and sisters, grandparents, aunts and
                      uncles, and first cousins, unless the covered service
                      member has specifically designated in writing another
                      blood relative as his or her nearest blood relative for
                      purposes of military caregiver leave under the FMLA.
                    </Typography>
                    <Typography variant="body">
                      <b>Covered service member </b> is a current member of the
                      Armed Forces, including a member of the National Guard or
                      Reserves, who is receiving medical treatment, recuperation
                      or therapy, or is in outpatient status or on the temporary
                      disability retired list for a serious injury or illness.
                    </Typography>
                    <Typography variant="body">
                      <b>Serious injury or illness </b> is one that is incurred
                      by a service member in the line of duty on active duty
                      that may cause the service member to be medically unfit to
                      perform the duties of his or her office, grade, rank or
                      rating. A serious injury or illness also includes injuries
                      or illnesses that existed before the service member's
                      active duty and that were aggravated by service in the
                      line of duty on active duty.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">F. Jury Duty</Typography>
                  <Typography variant="body">
                    The Company encourages employees to fulfill their civic
                    responsibilities by serving jury duty when , and will not
                    interfere, discharge, or discourage an employee who is
                    summoned to serve on a jury. If desired, exempt/management
                    employees may use any available paid time off (PTO) to cover
                    time off for jury duty. Otherwise, jury duty will be unpaid
                    regardless of the length of such duty.
                  </Typography>
                  <Typography variant="body">
                    Employees must show the jury duty summons to their
                    supervisor as soon as possible so that the supervisor may
                    make arrangements to accommodate their absence. Of course,
                    employees are expected to report for work whenever the court
                    schedule permits and as soon as practical after release from
                    jury service. Either The Company or the employee may request
                    an excuse from jury duty if, in employer’s judgment, the
                    employee’s absence would create serious operational
                    difficulties.
                  </Typography>
                  <Typography variant="body">
                    The employee must notify his or her supervisor each day he
                    or she is scheduled to report for jury duty.
                  </Typography>
                  <Typography variant="body">
                    Jury Duty leave is unpaid. The employee may elect to utilize
                    vacation time for all or part of the jury duty.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">G. Time Off To Vote</Typography>
                  <Typography variant="body">
                    The Company encourages employees to fulfill their civic
                    responsibilities by participating in elections. Generally,
                    employees are able to find time to vote either before or
                    after their regular work schedule. If employees are unable
                    to vote in an election during their non-working hours,
                    employer will grant up to 2 hours of paid time off to vote.
                  </Typography>
                  <Typography variant="body">
                    Employees should request time off to vote from their
                    supervisor at least 2 working days prior to the Election
                    Day. Advance notice is so that the necessary time off can be
                    scheduled at the beginning or end of the work shift,
                    whichever provides the least disruption to the normal work
                    schedule.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">H. Military Leave</Typography>
                  <Typography variant="body">
                    A military leave of absence will be granted to employees who
                    are absent from work because of service in the U.S.
                    uniformed services in accordance with the Uniformed Services
                    Employment and Reemployment Rights Act (USERRA). Advance
                    notice of military service is , unless military necessity
                    prevents such notice, or it is otherwise impossible or
                    unreasonable.
                  </Typography>
                  <Typography variant="body">
                    Military leave will be unpaid. However, employees may use
                    any paid leave otherwise available to employee in accordance
                    with other provisions of this manual. However, benefit
                    accruals, such as paid time off (PTO) or holiday benefits,
                    will be suspended during any military leave and will resume
                    upon the employee’s return to active employment.
                  </Typography>
                  <Typography variant="body">
                    Employees on military leave for up to 30 days are to return
                    to work for the first regularly scheduled shift after the
                    end of service, allowing reasonable travel time. Employees
                    on longer military leave must apply for reinstatement in
                    accordance with USERRA and all applicable state laws.
                    Employees returning from military leave will be placed in
                    the position they would have attained had they remained
                    continuously employed or a comparable one depending on the
                    length of military service in accordance with USERRA. They
                    will be treated as though they were continuously employed
                    for purposes of determining benefits based on length of
                    service.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">I. Lactation Breaks</Typography>
                  <Typography variant="body">
                    In accordance with applicable law, the Company will provide
                    a reasonable amount of break time to accommodate a female
                    employee's need to express breast milk for the employee's
                    infant child.
                  </Typography>
                  <Typography variant="body">
                    The break time should, if possible, be taken concurrently
                    with other break periods already provided. Non- exempt
                    employees should clock out for any time taken that does not
                    run concurrently with normally scheduled rest periods, and
                    such time generally will be unpaid, in accordance with state
                    law. The Company will also make a reasonable effort to
                    provide the employee with the use of a room or other
                    location in close proximity to the employee's work area, for
                    the employee to express milk in private.
                  </Typography>
                  <Typography variant="body">
                    Notify Management to request time to express breast milk
                    under this policy. The Company reserves the right to deny an
                    employee's request for a lactation break if the additional
                    break time will seriously disrupt operations and in
                    accordance with applicable law.
                  </Typography>
                  <Typography variant="body">
                    The Company will provide a place for the employee to pump at
                    work, other than a bathroom, that is shielded from view and
                    free from intrusion from coworkers and the public.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">IV. TIMEKEEPING/PAYROLL</Typography>
                <Grid className="points-blk">
                  <Typography className="h6">A. Payroll</Typography>
                  <Typography variant="body">
                    Payroll checks are issued every two weeks.
                  </Typography>
                  <Typography variant="body">
                    No employee is permitted to draw on his or her salary or may
                    not receive the check for another employee, nor can members
                    of the family receive the check for an employee without a
                    written request.
                  </Typography>
                  <Typography variant="body">
                    Federal withholding taxes and social security taxes will be
                    withheld from all compensation paid to the employee, as by
                    law. In addition to payroll withholdings by law, if
                    authorized a voluntary written authorization from the
                    employee, The Company will deduct amounts necessary to pay
                    for coverage of employees and dependents under The Company’s
                    group health insurance plan or policy, and other approved
                    deductions to the extent allowed by applicable law.
                  </Typography>
                  <Typography variant="body">
                    Court-issued wage assignment or garnishments are deducted
                    according to court order.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">B. Timekeeping</Typography>
                  <Typography variant="body">
                    Employees are expected to accurately record all time worked.
                    Federal and state laws require The Company to keep accurate
                    records of time worked in order to calculate employee pay
                    and benefits. Time worked is all the time actually spent on
                    the job performing assigned duties in furtherance of The
                    Company’s business.
                  </Typography>
                  <Typography variant="body">
                    Employees should accurately record the time they begin and
                    end their work. They should also record the beginning and
                    ending time of any split shift or departure from work for
                    personal reasons, including but not limited to leaving the
                    Company for a meal break.
                  </Typography>
                  <Typography variant="body">
                    Each restaurant employee must use the appropriate procedures
                    and platform for timekeeping prescribed by the restaurant
                    manager.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">C. Time Clock Policy</Typography>
                  <Typography variant="body">
                    Employees will be to track time in the manner prescribed by
                    the Company.
                  </Typography>
                  <Typography variant="body">
                    Employees are responsible for and will be to verify the
                    accuracy of all time and hours worked in each work period
                    and the amount of earnings before receiving their paychecks.
                    The supervisor will review and then initial the time record
                    before submitting it for payroll processing. If corrections
                    or modifications to the employee’s time record are needed,
                    both the employee and the supervisor must document and
                    verify those changes by initialing the time record.
                  </Typography>
                  <Typography variant="body">
                    It is a violation of The Company’s policy for an employee
                    to: (1) record time in or out for another employee,
                    recording time on another employee’s time record or
                    otherwise on behalf of another employee; (2) work in excess
                    of the employee’s scheduled work hours without prior
                    authorization from his or her supervisor; (3) failing to
                    verify the accuracy of the employee’s paycheck; and (4)
                    altering, falsifying or tampering with any time or payroll
                    related records, except as permitted in this manual. Any
                    violations of the above policies can result in disciplinary
                    action, up to and including termination of employment.
                  </Typography>
                  <Typography variant="body">
                    Employees who forget to clock out should immediately notify
                    the manager or shift leader to make the necessary
                    adjustment. Habitual failure to clock out shall be grounds
                    for termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    D. Administrative Pay Corrections
                  </Typography>
                  <Typography variant="body">
                    The Company takes all reasonable steps to ensure that
                    employees receive the correct amount of pay in each paycheck
                    and that employees are paid promptly on the scheduled
                    payday. In the unlikely event that there is an error in the
                    amount of pay, the employee should promptly bring the
                    discrepancy to the attention of his or her supervisor or
                    department head, in accordance with the above payroll and
                    time clock policies and procedures, so that all necessary
                    corrections can be timely resolved.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Business Travel Expenses
                  </Typography>
                  <Typography variant="body">
                    The Company will reimburse employees for reasonable business
                    travel expenses incurred while on assignment away from the
                    normal work location. All business travel must be approved
                    in advance by the supervisor or Company Administrator.
                    Employees whose travel plans have been approved are
                    responsible for making their own travel arrangements.
                  </Typography>
                  <Typography variant="body">Approved expenses are:</Typography>
                  <ul>
                    <li>Uber</li>
                    <li>Meals</li>
                    <li>Refreshments</li>
                    <li>
                      Gas with appropriate and approved receipts for travel
                      within the Houston City Limits
                    </li>
                    <li>
                      Travel outside the City of Houston shall be compensated by
                      use of the IRS approved mileage rate at the time of the
                      travel
                    </li>
                    <li>Tips (not in excess of 20%)</li>
                  </ul>
                  <Typography variant="body">
                    Employees seeking reimbursement for travel expenses should
                    complete the appropriate form and turn in receipts to
                    Management.
                  </Typography>
                  <Typography variant="body">
                    Training, rental cars, hotel and airfare will be booked by
                    the Company in advance.
                  </Typography>
                  <Typography variant="body">
                    When an employee uses his or her own vehicle for The
                    Company’s business-related travel outside the city or town
                    where an employee’s normal work location is, The Company
                    will reimburse the employee at a predetermined rate per
                    mile.
                  </Typography>
                  <Typography variant="body">
                    Abuse of this business travel expenses policy, including
                    falsifying expenses reports to reflect costs not incurred by
                    the employee, can be grounds for disciplinary action, up to
                    including termination of employment.
                  </Typography>
                  <Typography variant="body">
                    The company will provide a reasonable amount of break time
                    to accommodate a female employee's need to express breast
                    milk for the employee's infant child.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  V. WORK HOURS AND CONDITIONS
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">A. Work Hours</Typography>
                  <Typography variant="body">
                    The Company’s work hours for office personnel shall be
                    dictated by the needs of the position. The Company’s
                    operating hours are 7 a.m. to 3 a.m.
                  </Typography>
                  <Typography variant="body">
                    For restaurant employees, the majority of the staff has a
                    permanent schedule, it is the employee’s responsibility to
                    cover his or her shift. Once the employee has covered the
                    shift, it must be approved by the manager.
                  </Typography>
                  <Typography variant="body">
                    The Company’s work hours include holidays and weekends.
                    Employees who are not able to work holidays and weekends may
                    be subject to termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Attendance and Punctuality
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to report on time each day. When an
                    employee is absent, it places a burden on co-workers to
                    provide quality care and services. The Company’s business
                    requires that employees attend regularly and report promptly
                    for duty as scheduled. Employees must arrive at work early
                    enough to be at his or her assigned area by the time
                    scheduled work begins.
                  </Typography>
                  <Typography variant="body">
                    All absences will be recorded on time records or other
                    applicable personnel records.
                  </Typography>
                  <Typography variant="body">
                    Employees who will be absent from work should contact your
                    Management at least 2 hours prior to the work start time, if
                    at all possible. If illness or another emergency prevents an
                    employee from reporting for duty, the employee must make
                    every effort to speak to Management directly, rather than
                    leaving a phone message, prior to time to report for duty.
                  </Typography>
                  <Typography variant="body">
                    Text messages may be recognized as an acceptable method of
                    communication; provided the employee receives a response. If
                    the employee does not receive a response from the restaurant
                    manager, the employee should contact Human Resources as
                    follows:
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    columns={12}
                    className="email-blk"
                  >
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Patio by La Pasha</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@patiobylapasha.com"}>
                        admin@patiobylapasha.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Nara Café</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@narahtx.com"}>
                        admin@narahtx.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Pasha Lounge & Grill:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@lapashalounge.com"}>
                        admin@lapashalounge.com
                      </Link>
                    </Grid>
                  </Grid>
                  <Typography variant="body">
                    Employees are considered tardy if clocking in seven (7)
                    minutes or more after the scheduled start time.
                  </Typography>
                  <Typography variant="body">
                    No calls/no shows will be considered job abandonment.
                  </Typography>
                  <Typography variant="body">
                    Frequent absenteeism, whether notice is given or not, except
                    as otherwise approved or allowed by law, may result in
                    disciplinary action, including termination.
                  </Typography>
                  <Typography variant="body">
                    The Company recognizes that, due to unforeseen
                    circumstances, employees may be late getting to work.
                    Whenever possible, employees should inform Management to
                    advise of the expected arrival time to work.
                  </Typography>
                  <Typography variant="body">
                    Excessive tardiness or absenteeism may result in
                    disciplinary action, including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">C. Overtime</Typography>
                  <Typography variant="body">
                    The Company complies with all federal and state regulations
                    pertaining to overtime compensation and all other applicable
                    wage and hour laws.
                  </Typography>
                  <Typography variant="body">
                    All overtime must be approved in advance by the employee's
                    supervisor and applicable department head. Non-exempt
                    employees are paid overtime for hours worked in excess of 40
                    hours in any work week. Employees are not authorized for any
                    time other than their assigned shift without specific
                    approval from their supervisor or department head. Employees
                    who work overtime without authorization may be subject to
                    discipline, up to and including termination.
                  </Typography>
                  <Typography variant="body">
                    In the event of an emergency, The Company may ask
                    employee(s) to work hours in excess of their regular
                    schedule, as needed.
                  </Typography>
                  <Typography variant="body">
                    PTO, paid holidays, bereavement leave, and other paid
                    absences do not count as hours worked for overtime purposes.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    D. Meal Periods and Breaks
                  </Typography>
                  <Typography variant="body">
                    It is the policy of The Company to provide meal periods
                    consistent with federal, state, and local laws. Employees
                    are allowed to leave your work area when necessary for
                    restroom breaks and refreshments without clocking out. Abuse
                    of break periods may result in discipline or termination.
                  </Typography>
                  <Typography variant="body">
                    All employees are to clock out at the beginning of the meal
                    break and clock back in once the allowed meal break ends and
                    upon starting back to work. If an employee is unable to take
                    a meal break, the employee should inform Management. Working
                    meal breaks during which time the employee performs work
                    while also breaking shall be compensated as working time.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Visitors in the Workplace
                  </Typography>
                  <Typography variant="body">
                    To provide for the safety and security of employees and The
                    Company’s facilities, only authorized visitors are allowed
                    in the workplace. Restricting unauthorized visitors helps
                    maintain safety standards, protects against theft, ensures
                    security of equipment, protects confidential information,
                    safeguards employee welfare, and avoids potential
                    distractions and disturbances.
                  </Typography>
                  <Grid className="points-blk-inn">
                    <Typography variant="h5">Definitions</Typography>
                    <Typography variant="body">
                      <b>Serious health condition </b> means an illness, injury,
                      impairment, or physical or mental condition that involves
                      inpatient care or continuing treatment by a health care
                      provider. This can include conditions with short-term,
                      chronic, long-term or permanent periods of incapacity.
                    </Typography>
                    <Typography variant="body">
                      <b>Spouse</b> means a husband or wife as defined or
                      recognized in the state where the individual was married
                      and includes individuals in a common law or same-sex
                      marriage. Spouse also includes a husband or wife in a
                      marriage that was validly entered into outside of the
                      United States, if the marriage could have been entered
                      into in at least one state.
                    </Typography>
                    <Typography variant="body">
                      <b>Child</b> means a biological, adopted or foster child,
                      a stepchild, a legal ward, or a child of a person standing
                      in loco parentis, who is either under age 18, or age 18 or
                      older and "incapable of self-care because of a mental or
                      physical disability" at the time that FMLA leave is to
                      commence.
                    </Typography>
                    <Typography variant="body">
                      <b>Parent</b> means a biological, adoptive, step or foster
                      father or mother, or any other individual who stood in
                      loco parentis to the employee when the employee was a
                      child. This term does not include parents "in law."
                    </Typography>
                    <Typography variant="body">
                      <b>Qualifying exigency </b> includes short-notice
                      deployment, military events and activities, child care and
                      school activities, financial and legal arrangements,
                      counseling, rest and recuperation, post-deployment
                      activities, and additional activities that arise out of
                      active duty, provided that the employer and employee
                      agree, including agreement on timing and duration of the
                      leave.
                    </Typography>
                    <Typography variant="body">
                      <b>Covered active duty </b> for members of a regular
                      component of the Armed Forces, means duty during
                      deployment of the member with the Armed Forces to a
                      foreign country. For a member of the Reserve components of
                      the Armed Forces, means duty during the deployment of the
                      member with the Armed Forces to a foreign country under a
                      federal call or order to active duty in support of a
                      contingency operation, in accordance with 29 CR 825.102.
                    </Typography>
                    <Typography variant="body">
                      <b>The next of kin of a covered service member </b> is the
                      nearest blood relative, other than the covered service
                      member's spouse, parent or child in the following order of
                      priority: blood relatives who have been granted legal
                      custody of the service member by court decree or statutory
                      provisions, brothers and sisters, grandparents, aunts and
                      uncles, and first cousins, unless the covered service
                      member has specifically designated in writing another
                      blood relative as his or her nearest blood relative for
                      purposes of military caregiver leave under the FMLA.
                    </Typography>
                    <Typography variant="body">
                      <b>Covered service member </b> is a current member of the
                      Armed Forces, including a member of the National Guard or
                      Reserves, who is receiving medical treatment, recuperation
                      or therapy, or is in outpatient status or on the temporary
                      disability retired list for a serious injury or illness.
                    </Typography>
                    <Typography variant="body">
                      <b>Serious injury or illness </b> is one that is incurred
                      by a service member in the line of duty on active duty
                      that may cause the service member to be medically unfit to
                      perform the duties of his or her office, grade, rank or
                      rating. A serious injury or illness also includes injuries
                      or illnesses that existed before the service member's
                      active duty and that were aggravated by service in the
                      line of duty on active duty.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">F. Solicitation</Typography>
                  <Typography variant="body">
                    Unless approved by Management, the following are strictly
                    prohibited at all times in the work premises:
                  </Typography>
                  <Grid className="points-blk-inn">
                    <Typography variant="body">
                      Sales of commercial products and/or services; and
                      Solicitation of funds and/or charitable contributions; and
                      the distribution or posting of advertising matter,
                      circulars, leaflets, petitions of literature.
                    </Typography>
                    <Typography variant="body">
                      Solicitations and distributions by individuals and/or
                      organizations will not be permitted on the premises at any
                      time, unless pre-approved by Management.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    G. Alcohol Consumption by Employees & Dram Shop
                    Responsibilities
                  </Typography>
                  <Typography variant="body">
                    <b>
                      THE COMPANY STRICTLY PROHIBITS ANY EMPLOYEE’S CONSUMPTION
                      OF ALCOHOL WHILE ON THE JOB. VIOLATIONS OF THIS POLICY
                      SHALL BE CONSIDERED MISCONDUCT AND GROUNDS FOR IMMEDIATE
                      TERMINATION.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    Occasionally, The Company may sponsor or participate in
                    parties or other social events for special occasions. These
                    are an important part of our overall program, but each
                    employee must assume responsibility for his or herself in
                    appropriate instances.
                    <b>
                      SHOULD ALCOHOL BE SERVED AT SUCH EVENTS, IT IS IMPERATIVE
                      THAT AN EMPLOYEE NOT DRINK AND DRIVE. ALWAYS HAVE A
                      DESIGNATED DRIVER.
                    </b>
                    If this is a problem, contact someone at the event or party
                    who is in a supervisory position, and we will furnish
                    transportation at no cost. Any improper conduct that is drug
                    or alcohol-related will not be tolerated and will not be the
                    liability of The Company. Each employee is an important
                    asset to us, and we look forward to safe company sponsored
                    activities.
                  </Typography>
                  <Typography variant="body">
                    All bartenders and servers shall take a Texas Alcoholic
                    Beverage Code commission-approved seller training program
                    and provide certificate of completion as a condition of
                    employment and continued employment.
                  </Typography>
                  <Typography variant="body">
                    All bartenders and servers are to be alert and observe the
                    patrons’ consumption of alcohol while on duty. Any bartender
                    or server who believes any patron has become intoxicated
                    shall immediately notify the restaurant manager. The patron
                    SHALL NOT be permitted to leave the restaurant behind the
                    wheel. The patron shall be provided alternate
                    transportation. If the Patron becomes disruptive or violent,
                    or refuses alternative transportation, the restaurant
                    management shall immediately call 911 to report the
                    incident, making the patron’s name, identifying description
                    of person and vehicle, and license plate (as much
                    information as possible) available to the authorities.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    H. Employees Engaged In Retail Sale Of Cigarettes,
                    E-Cigarettes, And Tobacoo Products
                  </Typography>
                  <Typography variant="body">
                    Employees engaged in the sale of any tobacco product are to
                    abide by state law:
                  </Typography>
                  <ul className="num-list">
                    <li>
                      Employees shall not sell or provide cigarettes,
                      e-cigarettes and/or tobacco products, or give coupons for
                      cigarettes, e-cigarettes or tobacco purchases to any
                      person under 21 years of age. A violation is a Class C
                      misdemeanor;
                    </li>
                    <li>
                      Employees shall request proof of age from any person under
                      30 years of age who attempts to purchase cigarettes,
                      e-cigarettes or tobacco products. Retailers may be fined
                      up to $1,000 per violation or have their permit revoked or
                      suspended for selling cigarettes, e-cigarettes or tobacco
                      products to any person under 21 years of age;
                    </li>
                    <li>
                      Employees may be subject to criminal prosecution for a
                      Class C misdemeanor if, with criminal negligence, they
                      sell cigarettes, e-cigarettes and/or tobacco products to
                      any person younger than 21 years of age;
                    </li>
                    <li>
                      Employees shall not sell loose cigarettes or cigarettes in
                      individual packages containing fewer than 20 cigarettes.
                      Such behavior is subject to a $100 fine for violations;
                    </li>
                    <li>
                      Employees shall not distribute free samples of cigarettes,
                      e-cigarettes or tobacco products;
                    </li>
                    <li>
                      The Company shall post a sign in a conspicuous location
                      warning employees and customers about the tobacco law and
                      the penalties for violations of the law. Employees shall
                      not remove this sign.
                    </li>
                    <li>
                      Employees shall not allow customers direct access to the
                      cigarettes, e-cigarettes or tobacco products.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    I. Tipped Employees Uniforms
                  </Typography>
                  <Typography variant="body">
                    The Company will issue to each tipped employee an
                    appropriate uniform consisting of two shirts and a jacket
                    upon employment. Uniforms which become unacceptable for use
                    shall be replaced by the Company on an as-needed basis.
                  </Typography>
                  <Typography variant="body">
                    An employee may purchase additional uniforms at cost and
                    should contact the location manager for information.
                  </Typography>
                  <Typography variant="body">
                    Employees who misplace or damage the issued items rendering
                    them unwearable prior to re-issue will be issued new items.
                    Employees who repeatedly forget, lose, or damage their
                    issued attire may be subject to discipline up to and
                    including termination.
                  </Typography>
                  <Typography variant="body">
                    Occasionally, certain events may be hosted at a location for
                    which there is a commemorative t-shirt or other attire
                    available. If the attire is to be worn for the event, the
                    attire will be issued to each employee working the event at
                    no cost to the employee. If the attire is optional for the
                    event, or for other employees wishing to purchase the
                    attire, the employee may do so at employee’s own cost.
                  </Typography>
                </Grid>

                <Grid className="points-blk">
                  <Typography className="h6">J. Dress and Grooming</Typography>
                  <Typography variant="body">
                    The Company strives to project a professional image to
                    customers, clients, visitors, and coworkers. The Company
                    expects you to arrive for work with a well-groomed and
                    professional appearance.
                  </Typography>
                  <Grid className="point-blk-inn">
                    <Typography variant="body">
                      <b>
                        The Company has established the following guidelines as
                        reasonable standards of cleanliness, grooming and dress
                        for all employees:
                      </b>
                    </Typography>
                    <ul>
                      <li>
                        In the interest of health and safety only closed toe
                        shoes with rubber soles should be worn;
                      </li>
                      <li>
                        General attire shall be clean, neat, in style and
                        appropriate for the type of work being performed.{" "}
                      </li>
                      <li>
                        Clean jeans, shorts, or skirts without holes. No cut off
                        or rampant pants.
                      </li>
                      <li>
                        Clean jeans, shorts, or skirts without holes. No cut off
                        or rampant pants.
                      </li>
                      <li>
                        Long hair should be pulled back and out of the eyes.
                        Hair must be clean and pulled back if longer than chin
                        length.
                      </li>
                      <li>
                        Food handlers must wear appropriate hairnet or cap.
                      </li>
                      <li>Men should keep facial hair neatly trimmed.</li>
                      <li>No excessive jewelry.</li>
                      <li>No excessive jewelry.</li>
                      <li>
                        Clothing with slogans or pictures of any kind are not
                        permitted, other than Company logo attire.
                      </li>
                      <li>
                        No tattoos displaying nudity, profanity, or violence.
                      </li>
                    </ul>
                  </Grid>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  VI. EMPLOYEE CONDUCT AND DISCIPLINARY ACTION{" "}
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">
                    A. Business Ethics and Conduct
                  </Typography>
                  <Typography variant="body">
                    The Company requires employees to adhere to ethical
                    standards in the conduct of business. All employees are
                    expected to conduct business with integrity, to refrain from
                    dishonest or unethical conduct, and to comply with the
                    letter and spirit of all applicable laws.
                  </Typography>
                  <Typography variant="body">
                    The Company’s successful business operation and reputation
                    of is built upon the principles of fair dealing and ethical
                    conduct of its employees. The Company’s reputation for
                    integrity and excellence requires careful observance of the
                    spirit and letter of all applicable laws and regulations, as
                    well as a scrupulous regard for the highest standards of
                    conduct and personal integrity.
                  </Typography>
                  <Typography variant="body">
                    The Company intends to comply with all applicable laws and
                    regulations and expects its directors, officers, and
                    employees to conduct business in accordance with the letter,
                    spirit, and intent of all relevant laws and to refrain from
                    any illegal, dishonest, or unethical conduct.
                  </Typography>
                  <Typography variant="body">
                    <b>
                      In general, the use of good judgment, based on high
                      ethical principles, will guide you with respect to lines
                      of acceptable conduct. If a situation arises where it is
                      difficult to determine the proper course of action, the
                      matter should be discussed openly with your immediate
                      supervisor and, if necessary, with the Company
                      Administrator for advice and consultation.
                    </b>
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Gifts, Favors, or Similar Items
                  </Typography>
                  <Typography variant="body">
                    Employees should not engage in conduct or activity that may
                    raise questions about The Company’s honesty or impartiality,
                    or otherwise create a negative impression of The Company.
                    Employees are expected to avoid any activity which might
                    result in, or might reasonably be expected to create, an
                    appearance of influence or favoritism.
                  </Typography>
                  <Typography variant="body">
                    Employees may not accept gifts, favors, entertainment, or
                    payments if the offer intends to garner favoritism or
                    influence, or may create an appearance of favoritism or
                    influence.
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to conduct themselves with honesty
                    and integrity and comply with the provisions of this policy
                    and all applicable laws, rules and regulations of federal,
                    state, provincial and local governments, and other
                    appropriate private and public regulatory agencies.
                  </Typography>
                  <Typography variant="body">
                    Compliance with this policy of business ethics and conduct
                    is the responsibility of every employee. Disregarding or
                    failing to comply with this standard of business ethics and
                    conduct could lead to disciplinary action, up to and
                    including possible termination of employment.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    C. Conflicts of Interest
                  </Typography>
                  <Typography variant="body">
                    Employees have an obligation to conduct business within
                    guidelines that prohibit actual or potential conflicts of
                    interest. This policy establishes only the framework within
                    which the Company wishes the business to operate. The
                    purpose of these guidelines is to provide general direction
                    so that employees can seek further clarification on issues
                    related to the subject of acceptable standards of operation.
                    Contact your supervisor for more information or questions
                    about conflicts of interest.
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to avoid any situation which involves
                    or may involve a conflict between the employee’s personal
                    interest and The Company’s interest. In all dealings with
                    customers, competitors, vendors, or any other business
                    contact, employees are expected to act in the best interests
                    of The Company.
                  </Typography>
                  <Typography variant="body">
                    Transactions with outside firms must be conducted within a
                    framework established and controlled by the executive level
                    of The Company. Business dealings with outside firms should
                    not result in unusual gains for those firms. Unusual gain
                    refers to bribes, product bonuses, special fringe benefits,
                    unusual price breaks, and other windfalls designed to
                    ultimately benefit either The Company, employee, or both.
                  </Typography>
                  <Typography variant="body">
                    An actual or potential conflict of interest occurs when an
                    employee is in a position to influence a decision that may
                    result in a personal gain for that employee or for a
                    relative as a result of The Company's business dealings. For
                    the purposes of this policy, a relative is any person who is
                    related by blood or marriage, or whose relationship with the
                    employee is similar to that of persons who are related by
                    blood or marriage.
                  </Typography>
                  <Typography variant="body">
                    <b>
                      No "presumption of guilt" is created by the mere existence
                      of a relationship with outside firms. However, if
                      employees have any influence on transactions involving
                      purchases, contracts, or leases, it is imperative that
                      they disclose to the supervisor and/or Company
                      Administrator as soon as possible the existence of any
                      actual or potential conflict of interest so that
                      safeguards can be established to protect all parties.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    <b>
                      Personal gain may result not only in cases where an
                      employee or relative has a significant ownership in a firm
                      with which The Company does business, but also when an
                      employee or relative receives any kickback, bribe,
                      substantial gift, or special consideration as a result of
                      any transaction or business dealings involving The
                      Company.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    <b>
                      Employees have the responsibility to ask questions if
                      uncertain about a particular situation, and to report
                      suspected violations of this policy to the department
                      supervisor. Retaliation against employees who report
                      suspected violations will not be tolerated.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    Violations of this policy may result in disciplinary action,
                    up to and including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    D. Policy on Harassment or any other form of Unlawful
                    Discrimination
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to conduct themselves professionally,
                    in a manner befitting the work environment and with respect
                    for co-workers.
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to understand that behavior which one
                    individual considers innocent and harmless may be regarded
                    as harassment by another person. Beyond being in violation
                    of this policy, workplace harassment is against the law.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    E. Definition of Harassment
                  </Typography>
                  <Typography variant="body">
                    The legal definition of harassment is: Harassment includes
                    any physical or verbal conduct demonstrating hostility
                    toward a person because of his or her age, sex, race, color,
                    religion, national origin, disability or other “legally
                    protected status.” According to The Company, harassment is
                    any single incident or a pattern of behavior which entails
                    verbal, physical, or psychological harassment and/or abuse
                    of any nature.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">F. Sexual Harassment</Typography>
                  <Typography variant="body">
                    It is illegal, and against The Company’s policy for any
                    worker - male or female - to sexually harass or intimidate
                    another worker by making unwelcome sexual advances or
                    favors, or other verbal or physical conduct of a sexual
                    nature, a condition of employment; by using a worker's
                    submission to or rejection of such conduct as the basis for
                    or a factor in any employment decision affecting the
                    individual; or by creating an intimidating, hostile, or
                    offensive work environment by engaging in such conduct.
                  </Typography>
                  <Typography variant="body">
                    Sexual harassment is defined as “unwelcome” sexual advances,
                    requests for sexual favors, or other verbal or physical
                    conduct of a sexual nature when:
                  </Typography>
                  <ul>
                    <li>
                      Submission to such conduct is made either explicitly or
                      implicitly a term or condition of an individual’s
                      employment;{" "}
                    </li>
                    <li>
                      Submission to or rejection of such conduct by an
                      individual is used as a basis for employment decisions
                      affecting such individuals; or{" "}
                    </li>
                    <li>
                      Such conduct has the purpose or effect of unreasonably
                      interfering with an individual’s work performance or
                      creating an intimidating, hostile, or offensive working
                      environment.{" "}
                    </li>
                  </ul>
                  <Typography variant="body">
                    The Company does not tolerate vulgar, abusive, humiliating
                    or threatening language, practical jokes, or other
                    inappropriate behavior in the workplace.
                  </Typography>
                  <Typography variant="body">
                    Examples of unlawful sexual harassment may include but are
                    not limited to; persistent comments on a worker's sexual
                    proclivities or activities, the display or use of obscene or
                    sexually oriented written or electronic communication,
                    posters, photographs, computer images or drawings, unwanted
                    and offensive physical touching, sexual advances, verbal and
                    physical gestures through body language, and solicitation of
                    sexual activity or favors in exchange for employment,
                    providing a job benefit or threat of a loss of some job
                    benefit.
                  </Typography>
                  <Typography variant="body">
                    The Company will not condone any sexual harassment of
                    employees. All employees, including supervisors and
                    managers, will be subject to discipline, including up to
                    discharge, for any sexually harassing behavior.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    G. Anti-Discrimination Policy
                  </Typography>
                  <Typography variant="body">
                    It is the policy of The Company to offer equal opportunity
                    to every employee based on qualifications to perform the job
                    only, without regard to race, color, religion, sex, age,
                    national origin, disability, pregnancy, veteran status, or
                    any other characteristic protected by law. Positions are
                    filled by persons best qualified by their training,
                    experience, attitude, merit, merit ratings and other
                    accepted determinable qualifications.
                  </Typography>
                  <Typography variant="body">
                    Any employees with questions or concerns about any type of
                    discrimination in the workplace are encouraged to bring
                    these issues to the attention of Management. Anyone found to
                    be engaging in any type of unlawful discrimination, policy
                    or practice that has the effect of discriminating against
                    any employee and or applicant for employment on the basis of
                    race and/or retaliation in violation of Title VII will be
                    subject to disciplinary action, up to and including
                    termination of employment.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    H. How to Report Harassment or any other form of Unlawful
                    Discrimination
                  </Typography>
                  <Typography variant="body">
                    The Company will not condone any harassment or any other
                    form of unlawful discrimination of employees. All employees,
                    including supervisors and managers, will be subject to
                    discipline, up to and including discharge, for any form of
                    harassment or discrimination.
                  </Typography>
                  <Typography variant="body">
                    If you believe you have been the subject of harassment or
                    any other form of unlawful discrimination, you should bring
                    your complaint to management without fear of retaliation.
                    Reporting an incident quickly will allow The Company to
                    immediately address the complaint. If you witness or suspect
                    harassment or any other form of unlawful discrimination, you
                    must immediately convey the information regarding that
                    incident to management. However, complaints will be accepted
                    regardless of any delay in reporting.
                  </Typography>
                  <Typography variant="body">
                    All reports of harassment or unlawful discrimination should
                    be reported to the employee’s immediate supervisor or to
                    Human Resources as follows:
                  </Typography>
                  <Grid
                    container
                    spacing={3}
                    columns={12}
                    className="email-blk"
                  >
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Patio by La Pasha</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@patiobylapasha.com"}>
                        admin@patiobylapasha.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Nara Café</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@narahtx.com"}>
                        admin@narahtx.com
                      </Link>
                    </Grid>
                    <Grid item xs={4}>
                      <Typography variant="body">
                        <b>Pasha Lounge & Grill:</b>
                      </Typography>
                    </Grid>
                    <Grid item xs={8}>
                      <Link to={"mailto:admin@lapashalounge.com"}>
                        admin@lapashalounge.com
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    I. Investigation Process
                  </Typography>
                  <Typography variant="body">
                    All complaints will be promptly and thoroughly investigated
                    by management team, who will conduct a fair and impartial
                    investigation.
                  </Typography>
                  <Typography variant="body">
                    Interim measures may be taken pending full investigation and
                    resolution of the complaint, such as temporary
                    reassignments, separating the alleged violator and the
                    complainant, and/or suspension of the involved employees.
                  </Typography>
                  <Typography variant="body">
                    Complaints will remain confidential except where
                    circumstances require that information be shared in order to
                    conduct a thorough investigation.
                  </Typography>
                  <Typography variant="body">
                    Results of the investigation will be communicated to the
                    individual who files the complaint.
                  </Typography>
                  <Typography variant="body">
                    If the investigation reveals that an employee has engaged in
                    harassment or any other form of unlawful discrimination,
                    that individual will be subject to disciplinary action up to
                    and including discharge.
                  </Typography>
                  <Typography variant="body">
                    The Company takes the following steps when a complaint
                    involving harassment, or any other form of unlawful
                    discrimination is reported:
                  </Typography>
                  <ul>
                    <li>
                      Any employee who becomes aware of or who feels victimized
                      by any form of harassment or any other form of unlawful
                      discrimination should immediately report the alleged
                      harassment or discrimination to his or her supervisor. If
                      the immediate supervisor is the source of alleged
                      harassment or discrimination, the employee should report
                      the problem to the upper Management.{" "}
                    </li>
                    <li>
                      The management personnel who receives a complaint of
                      harassment or any other form of unlawful discrimination
                      should carefully investigate the matter by interviewing
                      the complainant, the alleged violator and obtain relevant
                      witness statements. Both the complaint and the
                      investigative steps and findings should be documented as
                      thoroughly as possible.
                    </li>
                    <li>
                      Management will recommend and enforce actions to be taken
                    </li>
                  </ul>
                  <Typography variant="body">
                    Written notification of the results of the investigation and
                    the remedial actions taken or proposed to stop the
                    harassment or any other form of unlawful discrimination,
                    correct its effect on the employee, and ensure that the
                    harassment or discrimination does not recur, up to and
                    including termination of employment, will be presented to
                    the complainant upon the conclusion of the investigation.
                  </Typography>
                  <Typography variant="body">
                    Interviews, allegations, statements, and identities remain
                    confidential to the extent possible and allowed by law.
                  </Typography>
                  <Typography variant="body">
                    The Company strictly prohibits retaliation of any kind
                    against employees who in good faith bring harassment or any
                    other form of unlawful discrimination complaints or assist
                    in any associate investigation. Violators of this policy,
                    including by any alleged employee, will be subject to
                    immediate termination. Any retaliation incidents must be
                    reported to Management.
                  </Typography>
                  <Typography variant="body">
                    Individuals who present a knowingly false or frivolous claim
                    that is proven to be untrue could be subject to civil
                    repercussions from the falsely-accused party.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    J. Accommodations under the Americans with Disabilities Act
                    or Pregnant Works Fairness Act
                  </Typography>
                  <Typography variant="body">
                    An ADA or PWFA Reasonable Accommodation may be an option
                    when an employee does not qualify for leave under the
                    Company’s leave policies.
                  </Typography>
                  <Typography variant="body">
                    To be considered for an accommodation under ADA, an employee
                    must have a physical or mental impairment that substantially
                    limits one or more major life activities and major bodily
                    functions. Under the PWFA, an employee may be considered for
                    an accommodation for known limitations related to pregnancy,
                    childbirth, or related medical conditions.
                  </Typography>
                  <Typography variant="body">
                    To begin the ADA or PWFA accommodation process, the Employee
                    should request an accommodation from management. Management
                    may require the Employee’s medical provider to complete an
                    Accommodation Request Form and verify the alleged
                    disability. All medial information obtained by the Company
                    during this process will remain confidential.
                  </Typography>
                  <Typography variant="body">
                    Upon receipt of the request, the Company will determine
                    whether the accommodation can be made in accordance with
                    applicable law and dependent upon whether the requested
                    accommodation places an undue hardship on the Company or
                    poses and direct threat to the safety of the Employee or
                    others.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    K. Workplace Violence Prevention
                  </Typography>
                  <Typography variant="body">
                    The Company prohibits violence in the workplace and makes
                    every attempt to maintain a safe workplace.
                  </Typography>
                  <Typography variant="body">
                    For purposes of this policy, “violence” includes physically
                    harming another, shoving, pushing, harassing, intimidating,
                    coercing, brandishing weapons, fighting, "horseplay," or
                    other conduct that may be dangerous to others, and
                    threatening, or talk of engaging in those activities.
                  </Typography>
                  <Typography variant="body">
                    This policy applies to all employees, all non-employees
                    including customers/clients, visitors, suppliers, vendors,
                    contractors, temporary workers, and other individuals with
                    whom The Company’s employees come into contact with during
                    work duties. Any of these individuals may be a victim or a
                    violator under The Company’s policy.
                  </Typography>
                  <Typography variant="body">
                    Conduct that threatens, intimidates, or coerces another
                    employee, a resident, or a member of the public at any time,
                    including off-duty periods, will not be tolerated. This
                    prohibition includes all acts of harassment, including
                    harassment that is based on an individual's sex, national
                    origin, race, age, or any other characteristic protected by
                    federal, state, or local law.
                  </Typography>
                  <Typography variant="body">
                    All threats or displays of violence, both direct and
                    indirect and whether verbal, physical or perpetuated through
                    literature or pictures, will not be tolerated, and should be
                    reported as soon as possible to your immediate supervisor or
                    any other member of management. When reporting such conduct,
                    you should be as specific and detailed as possible.
                  </Typography>
                  <Typography variant="body">
                    <b>
                      The Company encourages employees to bring their disputes
                      or differences with other employees to the attention of
                      their supervisors before the situation escalates into
                      potential violence. The Company is eager to assist in the
                      resolution of employee disputes and will not discipline
                      employees for raising such concerns.
                    </b>
                  </Typography>
                  <Typography variant="body">
                    All suspicious individuals or activities should also be
                    reported as soon as possible to a supervisor. Do not place
                    yourself in peril. If you see or hear a commotion or
                    disturbance near your workstation, do not try to intercede
                    or see what is happening.
                  </Typography>
                  <Typography variant="body">
                    In cases of workplace violence, Management may contact and
                    involve local law enforcement authorities as necessary.
                  </Typography>
                  <Typography variant="body">
                    The Company will not tolerate any form of retaliation toward
                    an employee who reports workplace violence. Any retaliatory
                    incident must be reported to management. Retaliatory
                    incidents will result in disciplinary action, up to and
                    including termination.
                  </Typography>
                  <Typography variant="body">
                    The Company will promptly and thoroughly investigate all
                    reports of threats or displays of violence and of suspicious
                    individuals or activities. The identity of the individual
                    making a report will be protected as much as is practical.
                    In order to maintain workplace safety and the integrity of
                    its investigation, The Company may suspend employees, either
                    with or without pay, pending investigation.
                  </Typography>
                  <Typography variant="body">
                    Failure to adhere to the established company policies and
                    procedures will result in disciplinary action, up to and
                    including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    L. Weapons Prohibition Policy
                  </Typography>
                  <Typography variant="body">
                    Possession, use or sale of weapons, firearms, or explosives
                    on work premises, while operating company machinery,
                    equipment or vehicles for work-related purposes or while
                    engaged in company business off premises is forbidden except
                    where expressly authorized by the company and permitted by
                    state and local laws. This policy applies to all employees,
                    including but not limited to, those who have a valid permit
                    to carry a firearm. This policy does not apply to firearms
                    stored in the employee's locked motor vehicle.
                  </Typography>
                  <Typography variant="body">
                    If you are aware of violations or threats of violations of
                    this policy, you are to report such violations or threats of
                    violations to Human Resources immediately.
                  </Typography>
                  <Typography variant="body">
                    Violations of this policy will result in disciplinary
                    action, up to and including discharge.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    M. Drug and Alcohol-Free Workplace Policy
                  </Typography>
                  <Typography variant="body">
                    The Company has a vital interest in maintaining a safe,
                    healthy, and efficient working environment for its employees
                    - a working environment as free from the use of illegal and
                    non-prescription drugs, alcohol and unauthorized use of
                    prescription drugs as reasonably possible.
                  </Typography>
                  <Typography variant="body">
                    Employees with drug and alcohol abuse problems make up only
                    a fraction of the work force, and we regret any
                    inconvenience that may be caused to other employees by the
                    problems of a few. However, being under the influence of
                    drugs or alcohol, and/or being intoxicated on the job, poses
                    serious health and safety risks, not only to the user but
                    also to all who come in contact with the user. The benefits
                    to be derived from reducing the number of accidents and the
                    greater safety of all the employees and residents make up
                    for the inconvenience. Each employee is expected and to
                    report to work in an appropriate mental and physical
                    condition to perform his or her assigned duties.
                  </Typography>
                  <Typography variant="body">
                    The Company defines “intoxication” pursuant to Sec.
                    401.013(a), Texas Labor Code.
                  </Typography>
                  <Typography variant="body">
                    Sec. 401.013. DEFINITION OF INTOXICATION.
                  </Typography>
                  <Typography variant="body">
                    (a) In this subtitle, "intoxication" means the state of:
                  </Typography>
                  <Typography variant="body">
                    (1) having an alcohol concentration to qualify as
                    intoxicated under Section 49.01(2), Penal Code; or
                  </Typography>
                  <Typography variant="body">
                    (2) not having the normal use of mental or physical
                    faculties resulting from the voluntary introduction into the
                    body of:
                  </Typography>
                  <Typography variant="body">
                    (A) an alcoholic beverage, as defined by Section 1.04,
                    Alcoholic Beverage Code;
                  </Typography>
                  <Typography variant="body">
                    (B) a controlled substance or controlled substance analogue,
                    as defined by Section 481.002, Health and Safety Code;
                  </Typography>
                  <Typography variant="body">
                    (C) a dangerous drug, as defined by Section 483.001, Health
                    and Safety Code;
                  </Typography>
                  <Typography variant="body">
                    (D) an abusable glue or aerosol paint, as defined by Section
                    485.001, Health and Safety Code; or
                  </Typography>
                  <Typography variant="body">
                    (E) any similar substance, the use of which is regulated
                    under state law.
                  </Typography>
                  <Grid className="point-blk-inn" mt={5}>
                    <Typography variant="h5">
                      IN ORDER TO ENSURE A SAFE, EFFICIENT AND DRUG FREE
                      WORKPLACE, THE FOLLOWING POLICY HAS BEEN ADOPTED AND WILL
                      BE STRICTLY ENFORCED AT ALL TIMES.
                    </Typography>
                    <ul>
                      <li>
                        The sale, purchase, use, possession of intoxicants,
                        alcohol, non-prescribed narcotics, hallucinogenic drugs,
                        marijuana, or other non-prescribed controlled
                        substances, while on or off Company or corporate
                        property, during the course of work{" "}
                        <b>
                          IS STRICTLY PROHIBITED AND MAY BE CAUSE FOR DISMISSAL.
                        </b>
                      </li>
                      <li>
                        The sale, purchase, use or possession of equipment,
                        products and materials which are used, intended for use,
                        or designed for the use with non-prescribed controlled
                        substances, while on or off Company or corporate
                        property, during the course of work{" "}
                        <b>
                          IS STRICTLY PROHIBITED AND MAY BE CAUSE FOR DISMISSAL.
                        </b>
                      </li>
                      <li>
                        Reporting to work or working with a measurable quantity
                        of intoxicants, alcohol, non-prescribed narcotics,
                        hallucinogenic drugs, marijuana or other non-prescribed
                        controlled substances in blood or urine, while on or off
                        Company or corporate property,{" "}
                        <b>
                          IS STRICTLY PROHIBITED AND MAY BE CAUSE FOR DISMISSAL.
                        </b>
                      </li>
                      <li>
                        Reporting to work or working, while on or off Company or
                        corporate property, with a measurable quantity of
                        prescribed or over-the-counter narcotics or drugs in
                        blood or urine or the use of prescribed or
                        over-the-counter narcotics or drugs, where, in the
                        opinion of The Company such use prevents the employee
                        from performing the duties of his or her job, or where
                        such use poses a risk to the safety of the employee or
                        other persons or property,{" "}
                        <b>
                          IS STRICTLY PROHIBITED AND MAY BE CAUSE FOR DISMISSAL.
                        </b>{" "}
                        The use of prescribed medicines while in control of any
                        motor vehicle, equipment or machinery owned or leased by
                        the Company or used for Company purposes, will only be
                        allowed under the supervision of a family-authorized
                        physician and if the physician has advised the
                        individual that the drug or substance will NOT affect
                        the individual's ability to safely perform his or her
                        duties to operate any job-related machinery, equipment,
                        or motor vehicle. An employee taking a prescribed or
                        over-the-counter narcotic or drug must advise his or her
                        supervisor of its use and any potential side effects.
                        The employee may either be allowed to remain on his or
                        her job, be to take a leave of absence or be subjected
                        to other appropriate action as determined by management.
                      </li>
                    </ul>
                  </Grid>
                  <Grid className="point-blk-inn" mt={5}>
                    <Typography variant="h5">Tests</Typography>
                    <Typography variant="body">
                      The Company reserves the right to conduct random,
                      no-notice testing of current employees at any time it
                      feels such actions are appropriate.
                    </Typography>
                    <Typography variant="body">
                      An employee will be to undergo a blood test, urinalysis,
                      "breath-analyzer" test or other diagnostic test under the
                      following circumstances:
                    </Typography>
                    <ul>
                      <li>
                        As part of the hiring process in accordance with the
                        pre-employment drug testing policy;
                      </li>
                      <li>
                        After the occurrence of any work-related incident while
                        on Company or corporate property or during working hours
                        which requires medical attention other than first aid.
                      </li>
                    </ul>
                    <Typography variant="body">
                      When there is reason to believe, in the opinion of Company
                      or corporate management, that an employee is under the
                      influence of intoxicants, alcohol, drugs or narcotics
                      while on Company property or during working hours or that
                      an employee has reported to work with a measurable
                      quantity of intoxicants, drugs or narcotics in blood or
                      urine;
                    </Typography>
                    <ul>
                      <li>As part of a random sampling of employees;</li>
                      <li>
                        As part of any periodic medical examination provided or
                        .
                      </li>
                    </ul>
                  </Grid>
                  <Grid className="point-blk-inn" mt={5}>
                    <Typography variant="h5">Discipline</Typography>
                    <Typography variant="body">
                      Any employee who is observed coming to or returning to the
                      job in an obviously impaired condition will be removed
                      from the workplace immediately. Any employee who receives
                      a non-negative test result will be placed on suspension
                      until an alcohol/drug evaluation is completed and said
                      employee is cleared.
                    </Typography>
                    <Typography variant="body">
                      Any employee who violates any part of The Company’s drug
                      free workplace policy may be subject to discipline up to
                      and including discharge.
                    </Typography>
                    <Typography variant="body">
                      Any employee convicted on a charge of illegal possession,
                      use, distribution, purchase or sale of any controlled
                      substance or alcohol, while off Company or corporate
                      property and off duty, may be subject to discipline up to
                      and including discharge; where The Company concludes that
                      such conduct adversely affects services. In addition, The
                      Company may impose discipline up to and including
                      discharge for such off-duty conduct in the absence of a
                      conviction where there is reasonable evidence of the
                      commission of those acts and The Company concludes that
                      such conduct adversely affects services.
                    </Typography>
                    <Typography variant="body">
                      Any employee who is charged with a violation of any
                      criminal drug statute must notify his or her supervisor
                      within 5 days of such charge. Criminal drug statutes
                      include federal, state, and local laws involving the use
                      of drugs (including controlled substances). Failure to
                      report a charge will result in disciplinary action
                      including termination from employment. A charge of
                      violating any criminal drug statute may result in
                      disciplinary action including termination.
                    </Typography>
                    <Typography variant="body">
                      An employee's refusal to submit immediately upon request
                      to a search of his or her person and/or property or to a
                      blood test, urinalysis, "breath-analyzer" test or other
                      diagnostic test, or a positive result on such test(s)
                      indicating prior use of intoxicants, alcohol,
                      non-prescribed narcotics, hallucinogenic drugs, marijuana,
                      or other non-prescribed controlled substances may result
                      in disciplinary action up to and including immediate
                      discharge.
                    </Typography>
                  </Grid>
                  <Grid className="point-blk-inn" mt={5}>
                    <Typography variant="h5">Search</Typography>
                    <Typography variant="body">
                      Where there is a reason to believe in the opinion of The
                      Company that an employee is impaired by intoxicants, drugs
                      or narcotics, or is in possession of any intoxicants,
                      drugs, narcotics or equipment, products and materials
                      which are used, intended for use, or designed for use with
                      non-prescribed controlled substances, The Company may
                      search any property and/or any employee’s personal
                      property which has been brought onto employer’s property
                      (including but not limited to vehicles, handbags,
                      briefcases, etc.) and the employee may be requested to
                      submit to a search by The Company representatives of his
                      or her person and/or property.
                    </Typography>
                    <Typography variant="body">
                      The property covered by this policy includes property of
                      any nature owned, controlled, or used by The Company,
                      including but not limited to parking lots, offices, desks,
                      file cabinets, lockers and vehicles.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    N. Security Inspections
                  </Typography>
                  <Typography variant="body">
                    The Company wishes to maintain a work environment that is
                    free of illegal drugs, alcohol, firearms, explosives, or
                    other improper materials. To this end, The Company prohibits
                    the possession, transfer, sale, or use of such materials on
                    its premises. The Company requires the cooperation of all
                    employees in administering this policy.
                  </Typography>
                  <Typography variant="body">
                    Desks, lockers, computers, software and other storage
                    devices may be provided for the convenience of employees but
                    remain the sole property of The Company. Accordingly, they,
                    as well as any articles found within them, can be inspected
                    by Management at any time, either with or without prior
                    notice.
                  </Typography>
                  <Typography variant="body">
                    The Company likewise wishes to discourage theft or
                    unauthorized possession of the property of employees,
                    employer, visitors, and residents. To facilitate enforcement
                    of this policy, The Company or its representative may
                    inspect not only desks and lockers but also persons entering
                    and/or leaving the premises and any packages or other
                    belongings. Any employee who wishes to avoid inspection of
                    any articles or materials should not bring such items onto
                    The Company's premises.
                  </Typography>
                  <Typography variant="body">
                    Any employee who refuses to submit to a search, who fails to
                    permit and facilitate a search, or who is found in
                    possession of prohibited articles, will be subject to
                    disciplinary action, up to and including discharge as well
                    as possible criminal prosecution.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    O. Professional Conduct Policy
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to act in a professional manner at
                    the workplace. This extends to behavior around customers and
                    includes all times you are engaged in work-related
                    activities, whether on company property or at another
                    location.
                  </Typography>
                  <Typography variant="body">Employees must:</Typography>
                  <ul>
                    <li>
                      Refrain from horseplay and offensive or discriminatory
                      behavior/jokes{" "}
                    </li>
                    <li>Follow the policies within the employee manual </li>
                    <li>Correspond effectively with those around you </li>
                    <li>
                      Respect the privacy and needs of other employees and
                      non-employees{" "}
                    </li>
                    <li>
                      Examples of inappropriate conduct include, but are not
                      limited to, the following:
                    </li>
                    <li>Causing physical harm to another employee </li>
                    <li>Loud language or shouting </li>
                    <li>Making threats or bullying others </li>
                  </ul>
                  <Typography variant="body">
                    Violations of this policy may result in disciplinary action,
                    up to and including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">P. Disciplinary Action</Typography>
                  <Typography variant="body">
                    It is the policy of The Company to take appropriate
                    disciplinary action when employees are found to have
                    violated company policies, procedures, work rules, or
                    otherwise conduct themselves in an unprofessional or
                    inappropriate manner.
                  </Typography>
                  <Typography variant="body">
                    Appropriate disciplinary action may involve progressive
                    disciplinary measures or may result in immediate discharge.
                    Nothing in this policy changes the at-will nature of the
                    employment relationship. The Company’s policies, procedures,
                    and work rules outlined in this employee manual are not
                    all-inclusive and may be changed periodically at The
                    Company’s sole discretion. Employees may be to periodically
                    sign copies of company policies, procedures, and or work
                    rules, including environmental, safety, and fire prevention
                    rules.
                  </Typography>
                  <Typography variant="body">
                    There are certain policies and regulations which must be
                    adhered to by all employees in order to maintain and operate
                    a safe and functional operation. Most of the regulations are
                    typical of those enforced in any organization. The
                    circumstances surrounding a particular violation of policy
                    rules are often as important as the action itself in
                    determining the severity of the discipline called for. As a
                    result, it is not possible to list all the causes of, or
                    reasons for disciplinary action. The following are
                    violations that could cause an employee to be subject to
                    disciplinary action, up to and including discharge.
                  </Typography>
                  <ul>
                    <li>
                      Failure or unwillingness to perform work as or directed.
                    </li>
                    <li>
                      Dishonest, disrespectful, or threatening behavior toward a
                      supervisor.
                    </li>
                    <li>Insubordination or flagrant disobedience.</li>
                    <li>
                      Falsification of any records, job resumes or job
                      applications.
                    </li>
                    <li>Dishonesty in any form including theft.</li>
                    <li>
                      Excessive or unauthorized absenteeism and/or tardiness.
                    </li>
                    <li>
                      Unauthorized use of Company or corporate supplies,
                      equipment, or property.
                    </li>
                    <li>
                      Unauthorized disclosure of any confidential information.
                    </li>
                    <li>
                      Sleeping, loafing, fighting, playing, or unauthorized
                      absence from duties.
                    </li>
                    <li>Conducting personal business on The Company’s time.</li>
                    <li>Violation of the Drug Free Workplace Policy.</li>
                    <li>
                      Smoking in unauthorized areas or smoking during
                      unauthorized times.{" "}
                    </li>
                    <li>
                      Marring, defacing, or abusing Company or corporate
                      property or equipment or engaging in conduct which could
                      be expected to cause damage to the same.
                    </li>
                    <li>
                      Use of threatening, profane, abusive, or indecent language
                      or gestures toward fellow workers, supervisors, management
                      officials, residents, or visitors.
                    </li>
                    <li>
                      Disrupting work or distracting other employees from
                      performing their work.
                    </li>
                    <li>
                      Possession or display of any type of weapon while on duty.
                    </li>
                    <li>Failure to keep your own timecard accurately.</li>
                    <li>Creating or contributing to unsanitary conditions.</li>
                    <li>
                      Posting or removal of notices, signs or writing in any
                      form on any bulletin board on Company or corporate
                      property without permission of management.
                    </li>
                    <li>
                      Gambling, lottery, or any other game of chance on Company
                      or corporate premises at any time.
                    </li>
                    <li>Violation of The Company’s "No Solicitation" rules.</li>
                    <li>
                      Accepting gifts from clients or regulatory bodies or
                      government offices.
                    </li>
                    <li>Failure to report an incident.</li>
                    <li>
                      Job abandonment - (a) walking off the shift without
                      permission of your supervisor; or (b) an unauthorized
                      absence.
                    </li>
                    <li>
                      Conviction of a felony (when charged, suspended; if
                      convicted, discharged).
                    </li>
                    <li>
                      Making false or malicious statements about an employee or
                      The Company.
                    </li>
                    <li>
                      Conversion of The Company’s property to one's own use, as
                      opposed to theft.{" "}
                    </li>
                    <li>
                      Failing to meet job expectations by The Company from time
                      to time.{" "}
                    </li>
                    <li>
                      Negligence or carelessness resulting in danger, damage, or
                      loss to Company or corporate property, fellow employees,
                      or visitors.
                    </li>
                    <li>
                      Making or receiving personal telephone calls other than in
                      emergencies.
                    </li>
                    <li>
                      Unauthorized visitors while on duty including friends and
                      relatives.
                    </li>
                    <li>
                      Failure to readily cooperate with fellow employees or
                      supervisors
                    </li>
                    <li>
                      Failure to maintain acceptable standards of respect for
                      visitors, co-workers, and supervisors.
                    </li>
                    <li>Violation of Sexual Harassment Policy.</li>
                    <li>
                      Violation of any policy or procedure contained in this
                      employee manual.
                    </li>
                  </ul>
                  <Typography variant="body">
                    The above listed grounds for disciplinary action, including
                    termination is not an exclusive list and The Company
                    reserves the right to terminate or otherwise discipline an
                    employee for any other reason or for no reason should such
                    action be deemed appropriate.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    Q. Use of Company Property Policy
                  </Typography>
                  <Typography variant="body">
                    The assets of The Company are intended to be used in a way
                    that benefits our organization. Employees must preserve
                    these assets and use them wisely.
                  </Typography>
                  <Typography variant="body">
                    To protect the physical and intellectual property of The
                    Company from loss, damage, theft, vandalism, unauthorized
                    use, copying, disclosure, or disposal, The Company must
                    ensure proper business use only of company property and
                    facilities.
                  </Typography>
                  <Typography variant="body">
                    This applies to The Company’s property located at any
                    Company.
                  </Typography>
                  <Typography variant="body">
                    The use of company facilities, equipment, supplies, or other
                    property for personal purposes is strictly prohibited.
                    Facilities or equipment may not be used for extracurricular
                    activities during or after working hours. This includes
                    athletics events, educational opportunities, or any other
                    type of non-working activities.
                  </Typography>
                  <Typography variant="body">
                    Violations of this policy may result in discipline, up to
                    and including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    R. Theft, Misuse and Destruction of Property Policy
                  </Typography>
                  <Typography variant="body">
                    The Company does not to tolerate internal theft,
                    destruction, or inappropriate use of any company assets,
                    property, and services. The Company does not to tolerate
                    theft and/or destruction of employees’ personal property.
                  </Typography>
                  <Typography variant="body">
                    The Company is not responsible for the personal property of
                    its employees. Employees are responsible for safeguarding
                    any personal property brought to work and kept on company
                    premises.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">S. Return of Property</Typography>
                  <Typography variant="body">
                    Employees are responsible for all of The Company’s property,
                    materials, or written information issued to them or in their
                    possession or control. All such property including original
                    and duplicate copies of all documents, data, computer
                    software and other written materials, must be returned by
                    employees on or before their last day of work.
                  </Typography>
                  <Typography variant="body">
                    Employees are expected to take proper care of any
                    company-provided equipment, tools, uniforms, or other
                    property. Any such property must be returned in good repair.
                  </Typography>
                  <Typography variant="body">
                    If you leave The Company, either voluntarily or by
                    termination, you are expected to return any company property
                    in your possession. Failure to return company property may
                    result in a deduction from the final paycheck (where allowed
                    under state law) or legal action.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  VII. Electronic Systems Usage and Monitoring
                </Typography>
                <Typography variant="body">
                  All electronic systems, including telephones, voicemail,
                  computers, e-mail, and the internet (collectively the
                  “systems”) are the property of The Company and may be used for
                  business purposes only unless otherwise specifically provided
                  or permitted by this manual or employer. As the systems’
                  owner, The Company likewise owns any messages stored on the
                  systems including, messages sent or received via any private
                  email account(s) accessed on the systems. No employee has a
                  personal privacy right in any matter created in, received by,
                  sent over, or stored in the systems. Even though an employee
                  may have a personal password and ability to delete messages as
                  the employee chooses, the systems are owned and may be
                  monitored by employer as necessary for business purposes. Any
                  saved or unerased messages may be accessed and reviewed by The
                  Company, local, state and/or federal government agencies or
                  investigators upon legitimate request, or by private parties
                  in litigation.
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">
                    EMPLOYEES SHOULD NOT HAVE ANY EXPECTATION OF PRIVACY IN ANY
                    INFORMATION STORED, SENT FROM OR RECEIVED ON ANY COMPANY
                    OWNED ELECTRONIC SYSTEM.
                  </Typography>
                  <Typography variant="body">
                    All systems are subject to monitoring by The Company for a
                    number of business reasons, including but not limited to the
                    following:
                  </Typography>
                  <ul>
                    <li>Retrieve business information;</li>
                    <li>Route messages; </li>
                    <li>Troubleshoot hardware or software problems; </li>
                    <li>Prevent system misuse; </li>
                    <li>
                      Assure compliance with software distribution policies;{" "}
                    </li>
                    <li>
                      Comply with legal and regulatory requests for information;{" "}
                    </li>
                    <li>Protect trade secrets; and </li>
                    <li>Ensure quality control. </li>
                    <li>
                      All employees are additionally expected to use all systems
                      in a way that does not violate the employment policies
                      stated in this manual, including but not limited to
                      unlawful harassment, workplace violence, and breach of
                      confidentiality.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    A. Acceptable Use of Electronic Communications
                  </Typography>
                  <Typography variant="body">
                    This policy contains guidelines for Electronic
                    Communications created, sent, received, used, transmitted,
                    or stored using company communication systems or equipment
                    and employee provided systems or equipment used either in
                    the workplace, during working time or to accomplish work
                    tasks during working time. “Electronic Communications”
                    include, among other things, messages, images, data or any
                    other information used in e-mail, instant messages, voice
                    mail, fax machines, computers, personal digital assistants
                    (including Blackberry, iPhone, iPad, tablet, smart phone or
                    similar devices), text messages, pagers, telephones,
                    cellular and mobile phones including those with cameras,
                    Intranet, Internet, back -up storage, information on a
                    memory or flash key or card, jump or zip drive or any other
                    type of internal or external removable storage drives. In
                    the remainder of this policy, all of these communication
                    devices are collectively referred to as “Systems.”
                  </Typography>
                  <Typography variant="body">
                    Employees may not use our Systems in a manner that violates
                    our policies including but not limited to Equal Employment
                    Opportunity, No Harassment, Confidentiality of Customer
                    Matters, Care of Customer Records, Non-Solicitation, and
                    Distribution. Employees may not use our Systems in any way
                    that may be seen as insulting, disruptive, obscene,
                    offensive, or harmful to morale. Examples of prohibited uses
                    include, but are not limited to, sexually-explicit drawings,
                    messages, images, cartoons, or jokes; propositions or love
                    letters; ethnic or racial slurs, threats of violence or
                    bullying, or derogatory comments; or any other message or
                    image that may be in violation of company policies or
                    federal, state, or local law.
                  </Typography>
                  <Typography variant="body">
                    In addition, employees may not use our Systems:
                  </Typography>
                  <ul>
                    <li>
                      To download, save, send or access any discriminatory or
                      obscene material;
                    </li>
                    <li>
                      To download anything from the internet (including
                      shareware or free software) without the advance written
                      permission of your Manager;
                    </li>
                    <li>
                      To download, save, send, or access any site or content
                      that the company might deem “adult entertainment;”
                    </li>
                    <li>
                      To access any “blog” or otherwise post a personal opinion
                      on the Internet during working time (see Social Media
                      policy);
                    </li>
                    <li>To solicit employees or others during working time;</li>
                    <li>
                      To attempt or to gain unauthorized or unlawful access to
                      computers, equipment, networks, or systems of the company
                      or any other person or entity;
                    </li>
                    <li>
                      In connection with any infringement of intellectual
                      property rights, including but not limited to copyrights;
                      and
                    </li>
                    <li>
                      In connection with the violation or attempted violation of
                      any law.
                    </li>
                  </ul>
                  <Typography variant="body">
                    An employee may not misrepresent, disguise, or conceal his
                    or her identity or another’s identity in any way while using
                    Electronic Communications during working hours; make changes
                    to Electronic Communications without clearly indicating such
                    changes; or use another person’s account, mailbox, password,
                    etc. without prior written approval of the account owner and
                    without identifying the actual author.
                  </Typography>
                  <Typography variant="body">
                    Employees must always respect intellectual property rights
                    such as copyrights and trademarks. Employees must not copy,
                    use, or transfer trade secrets or proprietary materials of
                    the company or others without appropriate authorization.
                  </Typography>
                  <Typography variant="body">
                    Nothing in this policy is meant to restrict an employee's
                    right to discuss the terms and conditions of his/her
                    employment during non-working hours using non-company
                    systems.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Telephone Use Policy
                  </Typography>
                  <Typography variant="body">
                    It is the policy of The Company to implement and maintain
                    phone service systems to meet the needs of customers,
                    clients, and employees.
                  </Typography>
                  <Typography variant="body">
                    The Company's telephones are not to be used for personal
                    calls except in case of emergency. Family and friends of
                    employees should be instructed that an employee cannot
                    receive telephone calls when on duty.
                  </Typography>
                  <Typography variant="body">
                    Personal cell phones must be kept on "silent" and in
                    designated area. They may not be set out on the table or
                    prep area.
                  </Typography>
                  <Typography variant="body">
                    The Company is in the guest service business and should keep
                    Company phones free for conducting business. When employees
                    are preoccupied with text messages and personal calls, the
                    Company’s guests and business suffer.
                  </Typography>
                  <Typography variant="body">
                    A manager or shift leader must approve phone calls during a
                    tipped employee’s shift (there are exceptions: parents,
                    people caring for older or ill relatives, etc.). Tipped
                    employees may share the restaurant’s main land line
                    telephone number with family as an emergency contact. Local
                    personal calls on the Company phones are permitted, but
                    should be only for a minute or two and restricted to times
                    that are less busy. Remember that personal calls on land
                    lines should be kept brief and not be distraction to serving
                    our guests.
                  </Typography>
                  <Typography variant="body">
                    Personal long-distance calls are prohibited from Company
                    telephones at all times.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    C. Camera and Other Recording Devices Policy
                  </Typography>
                  <Typography variant="body">
                    The Company prohibits the use of cameras, tape recorders, or
                    other recording devices on company property without
                    permission. The purpose is to protect the privacy of all
                    employees and to ensure the security of confidential
                    business information.
                  </Typography>
                  <Typography variant="body">
                    The Company reserves the right to install surveillance
                    cameras for legitimate business purposes such as ensuring
                    security or preventing theft.
                  </Typography>
                  <Typography variant="body">
                    The Company will not install cameras in areas where privacy
                    is necessary, such as restrooms or changing areas. However,
                    employees should not have an expectation of privacy on
                    company property, especially in common or public areas.
                  </Typography>
                  <Typography variant="body">
                    Employees in violation of this policy will be subject to
                    disciplinary action, up to and including termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">D. Cell Phone Policy</Typography>
                  <Typography variant="body">
                    Company employees are not permitted to use their personal
                    cell phones and related features for personal reasons while
                    on work duty, except in emergency situations.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">E. Software Policy</Typography>
                  <Typography variant="body">
                    The Company respects all computer software copyrights and to
                    adhere to the terms of all software licenses to which The
                    Company is a party.
                  </Typography>
                  <Typography variant="body">
                    Employees may not duplicate any licensed software or related
                    documentation for use either on employer’s premises or
                    elsewhere unless employer is expressly authorized to do so
                    by agreement with the licenser. Unauthorized duplication of
                    software may subject employee and/or The Company to both
                    civil and criminal penalties under the United States
                    Copyright Act.
                  </Typography>
                  <Typography variant="body">
                    Employees may not give software to any outsiders. Employees
                    may use software on local area networks or on multiple
                    machines only in accordance with applicable license
                    agreements.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    F. Employee Internet Usage Policy
                  </Typography>
                  <Typography variant="body">
                    The nature of the Company’s business requires that employees
                    have access to the Internet. The Company provides electronic
                    mail (e-mail) and internet access for work-related purposes
                    to specified individuals based on job need within The
                    Company as determined by area management.
                  </Typography>
                  <Typography variant="body">
                    The Company requires all employees granted such access to
                    adhere to this and related policies to ensure proper, legal,
                    and effective use of these electronic tools and resources.
                  </Typography>
                  <Typography variant="body">
                    All e-mail and internet information/language/etc. must
                    comply with company policies and procedures, including, but
                    not limited to, those on harassment, copyright law, trade
                    secrets, confidentiality, and The Company disclosure
                    agreement.
                  </Typography>
                  <Typography variant="body">
                    Internet access by employees while working is limited to the
                    Company’s official business. The introduction of viruses, or
                    malicious tampering with any computer system, is expressly
                    prohibited. Any such activity will immediately result in
                    termination of employment.
                  </Typography>
                  <Typography variant="body">
                    Employees using The Company’s accounts are acting as
                    representatives of The Company. As such, employees should
                    act accordingly so as not to damage the reputation of the
                    organization.
                  </Typography>
                  <Typography variant="body">
                    Files which are downloaded from the Internet must be scanned
                    with virus detection software before installation or
                    execution. All appropriate precautions should be taken to
                    detect for a virus and, if necessary, to prevent its spread.
                  </Typography>
                  <Typography variant="body">
                    The truth or accuracy of information on the Internet and in
                    e-mail should be considered suspect until confirmed by a
                    separate reliable source.
                  </Typography>
                  <Typography variant="body">
                    Employees shall not place company material (copyrighted
                    software, internal correspondence, etc.) on any publicly
                    accessible Internet computer without prior permission.
                  </Typography>
                  <Typography variant="body">
                    Alternate Internet Service Provider connections to The
                    Company’s Internet network are not permitted unless
                    expressly authorized and properly protected by a firewall or
                    other appropriate security device(s).
                  </Typography>
                  <Typography variant="body">
                    The Internet does not guarantee the privacy and
                    confidentiality of information. Sensitive material
                    transferred over the Internet may be at risk of detection by
                    a third-party. Employees must exercise caution and care when
                    transferring such material in any form.
                  </Typography>
                  <Typography variant="body">
                    Unless otherwise noted, all software on the Internet should
                    be considered copyrighted work. Therefore, employees are
                    prohibited from downloading software and/or modifying any
                    such files without permission from the copyright holder.
                  </Typography>
                  <Typography variant="body">
                    Any infringing activity by an employee may be the
                    responsibility of The Company. Therefore, The Company may
                    choose to hold the employee liable for their actions.
                  </Typography>
                  <Typography variant="body">
                    The Company reserves the right to inspect an employee’s
                    computer system for violations of this policy.
                  </Typography>
                  <Typography variant="body">
                    Employees are subject to disciplinary action, including
                    termination, for using the internet or viewing any
                    downloaded materials in any way that would result in a
                    violation of law or The Company’s other policies set forth
                    in this manual, including but not limited to unlawful
                    harassment or discrimination toward another employee,
                    workplace violence prevention, and interfering with an
                    employee’s work performance and job responsibilities.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    G. Social Networking Policy
                  </Typography>
                  <Typography variant="body">
                    The Company recognizes that you may use social networking
                    websites or similar media including, but not limited to,
                    blogs, chat rooms, Facebook, MySpace, Twitter, etc.
                    (hereinafter referred to as “personal websites”).
                  </Typography>
                  <Typography variant="body">
                    The use of The Company’s Internet to access personal
                    websites is prohibited. Exceptions may be made when The
                    Company sponsors a website for business reasons or otherwise
                    approves a legitimate business use. Social networking and/or
                    blogging may not occur on company property (computers or
                    PDAs) and may not occur during normal work hours.
                  </Typography>
                  <Typography variant="body">
                    Employees who use personal websites on their own time are
                    expected to refrain from harassing and discriminating other
                    employees on these sites. Employees should not represent
                    themselves as a representative of The Company on personal
                    websites. Personal websites which indicate the employee’s
                    place of employment should include a disclaimer that the
                    opinions provided do not represent the views of The Company.
                    If an employee should mention a company product or service,
                    the employee must disclose employee’s relationship to The
                    Company, per Federal Trade Commission guidelines.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  VIII. GUEST RELATIONS FOR RESTAURANT PERSONNEL
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">
                    Expectations for Guests:
                  </Typography>
                  <ul>
                    <li>Personable welcoming, by whoever is near the door.</li>
                    <li>
                      Pleasant employee interaction, with smiles and eye
                      contact.
                    </li>
                    <li>No delays in service, proper food preparation.</li>
                    <li>Exceed guest’s expectations.</li>
                    <li>
                      Teamwork. If employees work as a team the guests will
                      notice. This will also increase tips, which means more
                      money for all.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    Exceeding Guests Expectations:
                  </Typography>
                  <ul>
                    <li>
                      Build people's trust in you through personal appearance,
                      knowledge (of menu, beer and wine selections and daily
                      food and drink specials) and salesmanship.
                    </li>
                    <li>
                      Through quick recognition, pace and showing a genuine
                      concern.
                    </li>
                    <li>
                      Add enjoyment to their dining experience through
                      enthusiasm and personality.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Initial Greeting:</Typography>
                  <ul>
                    <li>
                      Acknowledge guest within 60 seconds of entering front
                      door, if able.
                    </li>
                    <li>Make eye contact with all guests.</li>
                    <li>Welcome them to the café </li>
                    <li>
                      For regulars or returning guests, thank them for coming
                      back.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Reservations:</Typography>
                  <Typography variant="body">
                    If there is an inquiry for a large group reservation, please
                    refer them to management. If management is not available,
                    please refer them to our website.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Phone Usage:</Typography>
                  <Typography variant="body">
                    Our phones are used for business only. Employees are not to
                    receive or make any personal phone calls.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Restrooms:</Typography>
                  <Typography variant="body">
                    All employees are expected to help maintain restroom
                    cleanliness and tend to toilet paper, paper towels, soap or
                    if the floors need attention, Please inform management as
                    soon as possible.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Guest Complaints:</Typography>
                  <Typography variant="body">
                    All guest complaints, no matter how small, must be reported
                    to management immediately.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    Identification for purchasing/consuming alcohol
                  </Typography>
                  <Typography variant="body">
                    Employees must card everyone who attempts to purchase any
                    type of alcohol under the age of 45. The Company PROHIBITS
                    any alcoholic beverage to be served to minors, even if their
                    parent, guardian, or spouse accompanies them. Failure to
                    request identification shall be grounds for immediate
                    termination.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Parking:</Typography>
                  <Typography variant="body">
                    Employees may park anywhere but the main parking lot.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Personal Belongings:</Typography>
                  <Typography variant="body">
                    Employees should place a bag, backpack, or purse in the
                    office. The Company is not responsible for stolen or damaged
                    items, so please leave valuables elsewhere, if possible.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  IX. HEALTH, SAFETY, AND SECURITY
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">Sanitation:</Typography>
                  <Typography variant="body">
                    All employees must wash their hands when needed. This could
                    be as many times as possible. This is for employee safety
                    and health, as well as the customers.
                  </Typography>
                  <Typography variant="body">
                    The following steps must be used when washing hands:
                  </Typography>
                  <ul>
                    <li>
                      Turn the hot water on, wet your hands and apply a good
                      amount of soap.
                    </li>
                    <li>
                      Wash your hands very well and aggressively for at least 20
                      seconds. Make sure you wash your fingers, fingertips,
                      hands, arms and areas in between.
                    </li>
                    <li>Completely rinse hands under clean, warm water.</li>
                    <li>
                      Dry hands with a paper towel and not your clothing. That
                      will defeat the purpose of washing your hands.
                    </li>
                    <li>
                      Turn water off with a paper towel and put paper towel in
                      the trash can.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    You should wash your hands:
                  </Typography>
                  <ul>
                    <li>Before your shift.</li>
                    <li>Between jobs you have performed.</li>
                    <li>After you take dishes to the kitchen.</li>
                    <li>After using the restroom.</li>
                    <li>Every time you touch your face, hair or body.</li>
                    <li>After you pre-bus/bus a table.</li>
                    <li>After you cough or sneeze.</li>
                    <li>
                      After you touch cleaning towels, work surfaces, eating,
                      smoking, touching the trash, etc.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Security:</Typography>
                  <ul>
                    <li>
                      Make sure you know the emergency numbers or know where
                      they are posted.
                    </li>
                    <li>Make sure your workplace is well lit.</li>
                    <li>
                      Make sure there are at least two employees to close at
                      night.
                    </li>
                    <li>
                      Keep background noise down so people are aware of any
                      problem.
                    </li>
                    <li>
                      Make sure doors are locked in restaurant before counting
                      tips.
                    </li>
                    <li>
                      Use the “buddy system” when walking to your transportation
                      at night.
                    </li>
                    <li>
                      Shift leads at night must keep the office door locked when
                      counting money.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Cash Handling:</Typography>
                  <ul>
                    <li>
                       Make sure cash register area is in a clear, unobstructed
                      view from the street.
                    </li>
                    <li>
                       Do not count cash in front of customers. All money
                      counting, this includes tips and banks, should be counted
                      in the office.
                    </li>
                    <li>
                       Excessive Overages and Shortages will lead to
                      termination – theft will be prosecuted to the full extent
                      of the law
                    </li>
                    <li>
                       Please use the “buddy system” to transport cash to the
                      office.
                    </li>
                    <li>
                       It is absolutely 1st priority that your office and safes
                      are locked when not in use by Management.{" "}
                    </li>
                    <li>
                       No employee is to be allowed access without a Manager in
                      the office for any reason.
                    </li>
                    <li>
                       Failure to follow Cash Handling policy will result in
                      termination.
                    </li>
                  </ul>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">Leaving the Property:</Typography>
                  <Typography variant="body">
                    Make sure all windows and doors are securely locked and the
                    security alarm is activated. There should never be one
                    person leaving the restaurant at a time in the evening. It
                    is best to leave in a group. If this is not possible, at
                    least two of you should leave at a time. If you decide to
                    leave on your own, make sure a co-worker walks you to your
                    vehicle.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  X. COMPANY TRADE SECRETS AND CONFIDENTIAL INFORMATION
                </Typography>
                <Grid className="points-blk">
                  <Typography variant="body">
                    All employees must maintain the confidentiality of The
                    Company’s trade secrets. Trade secrets may include
                    information regarding the development of systems, processes,
                    products, know-how, and technology. Internal reports,
                    policies, procedures, or other business-related confidential
                    communications should not be posted online by employees
                    without The Company’s authorization. If you are uncertain
                    whether information is confidential, you should consult
                    Management.
                  </Typography>
                  <Typography variant="body">
                    Employees shall not disclose the Company’s confidential
                    information to any other person or entity without the
                    express written permission of Management.
                  </Typography>
                </Grid>
              </Grid>

              <Grid className="points-sec">
                <Typography variant="h5">
                  XII. ALTERNATIVE DISPUTE RESOLUTION/CLASS ACTION WAIVER
                </Typography>
                <Grid className="points-blk">
                  <Typography className="h6">A. Dispute Resolution</Typography>
                  <Typography variant="body">
                    The Company and Employee, while not anticipating any
                    particular problems during the employment relationship wish
                    to outline a way to resolve any disputes that may arise out
                    of or be related to the employment relationship.
                  </Typography>
                  <Typography variant="body">
                    All claims, disputes, controversies, or disagreements of any
                    kind whatsoever including any claim arising out of, in
                    connection with, or related to the employment relationship,
                    and/or employees employment with Employer, including any
                    claim that may arise between, Employee and any of Employer’s
                    officers, employees, managers, owners or agents in their
                    capacity as such, shall be subject to the following
                    alternative dispute process:
                  </Typography>
                  <Typography variant="body">
                    <b>Informal Mediation: </b>
                    Upon a request from either Employee or the Company, Employee
                    and the Company shall promptly meet to discuss the dispute
                    and attempt to negotiate a resolution of the dispute.
                  </Typography>
                  <Typography variant="body">
                    <b>Mediation before a Mediator: </b>
                    If Employee and the Company are not able to achieve a
                    resolution of the dispute within 30 days of the meeting or
                    30 days after request for a refused meeting, Employee and
                    the Company agree to appoint a neutral mediator and attempt
                    to resolve the dispute through mediation with a private
                    mediator in Harris County, Texas. Employee and the Company
                    agree to use reasonable efforts to select a mutually
                    acceptable mediator and Employer shall pay the mediation
                    fee.
                  </Typography>
                  <Typography variant="body">
                    Employee and the Company agree to conduct the mediation
                    within 60 days of their meeting (or 30 days after request
                    for a refused meeting) referenced above.
                  </Typography>
                  <Typography variant="body">
                    <b>Arbitration: </b>
                    If Employee and the Company are unable to achieve a
                    resolution of any dispute, Employee and the Company agree to
                    resolve any disputes relating to or arising out of this
                    Agreement, through binding arbitration, using one (1)
                    mutually acceptable private arbitrator in Harris County,
                    Texas, or in the absence of agreement, (ii) in accordance
                    with selection rules of the American Arbitration Association
                    for one (1) arbitrator.
                  </Typography>
                  <Typography variant="body">
                    The Arbitration shall be conducted in accordance with the
                    Texas Rules of Civil Procedure and governed by the Federal
                    Arbitration Act. The Arbitration shall be brought under the
                    American Arbitration Association Rule for
                    Employment/Workplace Cases. The maximum cost to Employee to
                    arbitrate shall be governed by the AAA. Employer agrees to
                    pay Employees share to arbitrate upon request from Employee.
                  </Typography>
                  <Typography variant="body">
                    Employee agrees that final and binding arbitration is the
                    exclusive final means for resolving the Claims outlined in
                    this Agreement and waives all rights Employee may have to a
                    civil court action on any dispute arising out of or related
                    to the employment relationship. Accordingly, only an
                    arbitrator, not a judge or jury, will decide the dispute,
                    although the arbitrator has the authority to award any type
                    of relief that could otherwise be awarded by a judge or
                    jury, subject to all applicable terms of this ADR. The ADR
                    as set forth and agreed survives termination of this
                    Employee’s employment and shall be fully enforceable.
                  </Typography>
                  <Typography variant="body">
                    Employee and the Company shall each pay for their own
                    attorneys’ fees or costs of representation for purposes of
                    the mediation and arbitration unless otherwise provided by
                    law or other terms of this Agreement.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">
                    B. Waiver Of Collective Action, Class, or Consolidated
                    Claims{" "}
                  </Typography>
                  <Typography variant="body">
                    <b>
                      BY ACCEPTING OR CONTINUING EMPLOYMENT WITH THE COMPANY,
                      EMPLOYEE WAIVES THE RIGHT TO RECEIVE NOTICE OF, CONSENT
                      TO, PARTIIPATE IN, OR PARTICIAPTE IN OR RECEIVE SETTLEMENT
                      OF ANY CLAIM AGAINST THE COMPANY ARISING OUT OF OR RELATED
                      TO EMPLOYMENT AS PART OF A COLLECTIVE, REPRESENTATIVE,
                      PUTATIVE CLASS OR CLASS ACTION, WHETHER IN ARBITRATION OR
                      IN A COURT OF COMPETENT JURISDICTION.{" "}
                    </b>
                  </Typography>
                  <Typography variant="body">
                    The arbitrator shall not have the authority to authorize or
                    preside over any form of a class, collective or
                    representative proceeding. The arbitrator may only hear
                    claims brought individually by a single person and does not
                    have the authority to hear claims in a class, collective or
                    representative proceeding or to consolidate such claims.
                  </Typography>
                </Grid>
                <Grid className="points-blk">
                  <Typography className="h6">C. Covered Claims </Typography>
                  <Typography variant="body">
                    Claims covered by the ADR provision and waiver include, but
                    are not limited to the following; alleged violations of
                    federal, state, or local constitutions, statutes,
                    regulations, or ordinances, including, but not limited to,
                    allegations of sexual harassment, discrimination, a breach
                    of a contractual obligation, claims or disputes related to
                    compensation, wages, and/or overtime, common law tort claims
                    and alleged violations of public policy. The following are
                    expressly excluded from the ADR provision and are not
                    covered by this Agreement: claims or allegations related to
                    workers’ compensation or unemployment insurance,
                    administrative claims filed with government agencies such as
                    the Equal Employment Opportunity Commission or the National
                    Labor Relations Board and claims that are expressly excluded
                    by statute or are expressly to be arbitrated under a
                    different procedure.
                  </Typography>
                </Grid>
              </Grid>

              <Typography className="main-title" variant="h3">
                EMPLOYEE ACKNOWLEDGEMENT
              </Typography>

              <Grid className="body-p">
                <Typography variant="body">
                  I, <b>Jhon Smith (Name will be Replace)</b> , acknowledge
                  receiving and reviewing the Company’s Employee Handbook. I
                  clearly understand that this policy handbook does not create a
                  contract for employment with the Company, and that the Company
                  may change or modify the policies and procedures in this
                  handbook at any time, with or without prior notice.
                </Typography>
                <Typography variant="body">
                  I, <b>Jhon Smith (Name will be Replace)</b> , state that
                  English is my second language and that I have been advised to
                  ask for a translation of these policies in my native language.
                  By affixing my initials below and signing this acknowledgment
                  form, I state that I have (mark one)
                </Typography>
                <Typography variant="body">
                  <b>Jhon Smith (Name will be Replace)</b> declined to have the
                  EMPLOYEE HANDBOOK translated into my native language.
                </Typography>
                <Typography variant="body">
                  <b>Jhon Smith (Name will be Replace)</b> asked for and
                  received translation of the policies included in the EMPLOYEE
                  HANDBOOK into my native language.
                </Typography>
                <Typography variant="body">
                  I have read and/or received a translation of the policies
                  contained in the EMPLOYEE HANDBOOK and understand the policies
                  identified below and agree to abide by the Company’s rules and
                  regulations during my employment with the Company.
                </Typography>
                <Typography variant="body">
                  I understand that violating the policies and rules set out in
                  this handbook may lead to discipline, up to and including
                  termination.
                </Typography>
              </Grid>

              <Grid className="grid-blk">
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={8}>
                    <Typography variant="h5">
                      Policy/Procedure Received and Understood
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h5">Employee Initials</Typography>
                  </Grid>
                </Grid>
                <Grid container spacing={3} columns={12} className="flx-box">
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Policy Statement on Equal Opportunity
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.polciStatement}
                      name="polciStatement"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">Tip Credit Notice</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.tipsCredit}
                      name="tipsCredit"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">Credit Card Fee</Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.cardFee}
                      name="cardFee"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Policy Against Harassment in the Workplace
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.policyAgainst}
                      name="policyAgainst"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Policy Regarding Violence in the Workplace and Weapons
                      Policy
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.policyReg}
                      name="policyReg"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Consent and Release for Reasonable Workplace Searches{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.consent}
                      name="consent"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">Workplace Violence </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.workPlace}
                      name="workPlace"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Drug Free Workplace and Drug/Alcohol Testing{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.drugFee}
                      name="drugFee"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">Remote Work Policy </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.remoteWork}
                      name="remoteWork"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Electronic Systems Usage{" "}
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.elecSys}
                      name="elecSys"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body">
                      Alternative Dispute Resolution/Class Action Waiver
                    </Typography>
                  </Grid>
                  <Grid item xs={4}>
                    <TextField
                      required
                      value={data.alterDis}
                      name="alterDis"
                      onChange={formChange1}
                      className="txt-width"
                      id="standard-basic"
                      variant="standard"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid container spacing={3} columns={12} className="flx-box">
                <Grid item xs={6}>
                  <label>
                    Signature
                    <SignatureCanvas
                      ref={ref => {
                        signaturePolicySignature.current = ref;
                        updatePolicySignature(ref, "empSigPolicy");
                      }}
                      name="empSigPolicy"
                      onChange={formChange1}
                      penColor="black"
                      label="signature"
                      canvasProps={{
                        width: 500,
                        height: 200,
                        className: "sigCanvas txt-width",
                      }}
                    />
                  </label>
                  <button onClick={clearSignaturePolicySignature}>
                    Clear Signature
                  </button>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    value={data.datePolicy}
                    name="datePolicy"
                    onChange={formChange1}
                    className="txt-width"
                    id="standard-basic"
                    label="DATE"
                    variant="standard"
                    type="date"
                  />
                </Grid>
              </Grid>

              <Grid className="form-points">
                <Grid className="form-title" mt={7}>
                  <Typography className="main-title" variant="h5">
                    <b>
                      NOTICE TO EMPLOYEES REGARDING EMPLOYEE CLASS WAIVER AND
                      ARBITRATION AGREEMENT
                    </b>
                  </Typography>
                  <Typography className="main-title" variant="h5">
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
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={data.ableReadPolicy}
                      name="ableReadPolicy"
                      onChange={formChange1}
                    >
                      <Grid>
                        <Grid className="select-opt">
                          <FormControlLabel
                            value={
                              "I am able to read and understand English. I have read and understand the Employee Class Waiver and Arbitration Agreement and have signed it."
                            }
                            control={<Radio required />}
                            label="I am able to read and understand English. I have read and understand the Employee Class Waiver and Arbitration Agreement and have signed it."
                          />
                        </Grid>

                        <Grid className="select-opt">
                          <FormControlLabel
                            value="I am unable to read and understand English and requested the Employee Class Waiver and Arbitration Agreement to be read to me in my native language. My signature to this acknowledgment and the Employee Class Waiver and Arbitration Agreement indicates that I understand and agree to the Policy."
                            control={<Radio required />}
                            label="I am unable to read and understand English and requested the Employee Class Waiver and Arbitration Agreement to be read to me in my native language. My signature to this acknowledgment and the Employee Class Waiver and Arbitration Agreement indicates that I understand and agree to the Policy."
                          />
                        </Grid>

                        <Grid className="select-opt">
                          <FormControlLabel
                            value="I declined to have the Employee Class Waiver and Arbitration Agreement read to me in my native language. I understand that by signing this acknowledgment and the Class Waiver and Arbitration Agreement I am waiving my right to a jury trial and agree to take any disagreement I may have with my employer to Arbitration. I also understand that I will not be able to bring suit in a group with others regarding my employment or to participate in a group settlement. Any dispute I have with my employer must be brought by me alone in an arbitration."
                            control={<Radio required />}
                            label="I declined to have the Employee Class Waiver and Arbitration Agreement read to me in my native language. I understand that by signing this acknowledgment and the Class Waiver and Arbitration Agreement I am waiving my right to a jury trial and agree to take any disagreement I may have with my employer to Arbitration. I also understand that I will not be able to bring suit in a group with others regarding my employment or to participate in a group settlement. Any dispute I have with my employer must be brought by me alone in an arbitration."
                          />
                        </Grid>
                      </Grid>
                    </RadioGroup>
                  </FormControl>
                </FormGroup>
              </Grid>

              <Grid container spacing={3} columns={12} className="flx-box">
                <Grid item xs={6}>
                  <TextField
                    required
                    value={data.empNamePolicy}
                    name="empNamePolicy"
                    onChange={formChange1}
                    className="txt-width"
                    id="standard-basic"
                    label="Employee Printed Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <SignatureCanvas
                    ref={ref => {
                      employeePolicySignature.current = ref;
                      updateEmployeePolicySignature(ref, "empSignPolicy");
                    }}
                    name="empSignPolicy"
                    onChange={formChange1}
                    penColor="black"
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas txt-width",
                    }}
                  />
                  <button onClick={clearEmployeePolicySignature}>
                    Clear Signature
                  </button>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                    value={data.tranNamePolicy}
                    name="tranNamePolicy"
                    onChange={formChange1}
                    className="txt-width"
                    id="standard-basic"
                    label="Translator Printed Name"
                    variant="standard"
                  />
                </Grid>
                <Grid item xs={6}>
                  <SignatureCanvas
                  ref={ref => {
                    transPolicySignature.current = ref;
                    updateTransPolicySignature(ref, "transSignPolicy");
                  }}
                    name="transSignPolicy"
                    onChange={formChange1}
                    penColor="black"
                    canvasProps={{
                      width: 500,
                      height: 200,
                      className: "sigCanvas txt-width",
                    }}
                  />
                  <button onClick={clearTransPolicySignature}>
                      Clear Signature
                    </button>
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
            </form>
          </Grid>
        </Container>
      </Grid>
    </Grid>
  );
};

export default PolicyForm;
