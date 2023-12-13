const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const retry = require("retry");
const puppeteer = require("puppeteer");
const formModel = require("../models/Model");
const loungeAndGril = require("../models/LoungeAndGrill");
const naraCafe = require("../models/NaraCafe");
const User = require("../models/UserModel");
const adminModel = require("../models/AdminAuth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const httpProxy = require('http-proxy');

let baseUrl = "http://localhost:3000";
// const proxy = httpProxy.createProxyServer();

//Admin Authentication and Authorization

module.exports.postAdminRegisterData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  try {
    console.log(req.body);
    const newAdminPassword = await bcrypt.hash(req.body.authAdminPassword, 10);
    await adminModel.create({
      authAdminName: req.body.authAdminName,
      authAdminEmail: req.body.authAdminEmail,
      authAdminPassword: newAdminPassword
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

module.exports.postAdminLoginData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const adminUser = await adminModel.findOne({
    authAdminEmail: req.body.authAdminEmail
  });

  if (!adminUser) {
    return res.json({ status: "error", error: "Invalid login" });
  }

  const isAdminPasswordValid = await bcrypt.compare(
    req.body.authAdminPassword,
    adminUser.authAdminPassword
  );

  if (isAdminPasswordValid) {
    const token = jwt.sign(
      {
        name: adminUser.authAdminName,
        email: adminUser.authAdminEmail
      },
      "secret123"
    );

    return res.json({ status: "ok", adminUser: token });
  } else {
    return res.json({ status: "error", adminUser: false });
  }
};

// User Authentication and Authorization

module.exports.postRegisterData = async (req, res) => {
  try {
    console.log(req.body);
    const newPassword = await bcrypt.hash(req.body.authPassword, 10);
    await User.create({
      authName: req.body.authName,
      authEmail: req.body.authEmail,
      authPassword: newPassword
    });
    res.json({ status: "ok" });
  } catch (err) {
    res.json({ status: "error", error: "Duplicate email" });
  }
};

module.exports.postLoginData = async (req, res) => {
  const user = await User.findOne({
    authEmail: req.body.authEmail
  });

  if (!user) {
    return res.json({ status: "error", error: "Invalid login" });
  }

  const isPasswordValid = await bcrypt.compare(
    req.body.authPassword,
    user.authPassword
  );

  if (isPasswordValid) {
    const token = jwt.sign(
      {
        name: user.authName,
        email: user.authEmail
      },
      "secret123"
    );

    return res.json({ status: "ok", user: token });
  } else {
    return res.json({ status: "error", user: false });
  }
};

//Lapasha
module.exports.getFormData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const userData = await formModel.find();
  res.send(userData);
};

module.exports.saveFormData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB
  } = req.body;
  formModel
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};

//Lapasha Lounge And Grill

// module.exports.saveLoungeAndGrillData = async (req, res) => {
//   const {
//     fNamePerInfo,
//     lnamePerInfo,
//     statePerInfo,
//     zipcodePerInfo,
//     phoneNoPerInfo,
//     emailAddPerInfo,
//     addPerInfo,
//     emrCnoPerInfo,
//     relaPerInfo,
//     emrPhoneNoPerInfo,
//     startDateEmpDet,
//     deptEmpDet,
//     managerEmpDet,
//     empIdEmpDet,
//     ssNoTaxInfo,
//     depTaxInfo,
//     taxInfo,
//     bankNameDDinfo,
//     routNoDDinfo,
//     accNoDDinfo,
//     healthInsurance,
//     dentalInsurance,
//     visionInsurance,
//     retirementPlan,
//     medConyes,
//     medConNo,
//     conFormsign,
//     conFormDate,
//     polciStatement,
//     tipsCredit,
//     cardFee,
//     policyAgainst,
//     policyReg,
//     consent,
//     workPlace,
//     drugFee,
//     remoteWork,
//     elecSys,
//     alterDis,
//     empSigPolicy,
//     datePolicy,
//     ableReadPolicy,
//     empNamePolicy,
//     empSignPolicy,
//     tranNamePolicy,
//     transSignPolicy,
//     ableReadEng,
//     empName,
//     empSign,
//     transPrinName,
//     transSignName,
//     lastName,
//     firstName,
//     middle,
//     otheLn,
//     address,
//     aptNo,
//     city,
//     state,
//     zipCode,
//     dob,
//     socialSno,
//     empEmail,
//     empTno,
//     citizeOfUsa,
//     uscis,
//     formi94,
//     foreignPass,
//     signOfEmp,
//     todayDate,
//     lawFullPrTextFeild,
//     noncitizenAuthTextField,
//     docTitle1,
//     issueAuth,
//     docNo,
//     expdate,
//     docTitle2,
//     issueAuth2,
//     docNo2,
//     expDate2,
//     docTitle3,
//     issueAuth3,
//     docNo3,
//     expdate3,
//     docTitle4,
//     issueAuth4,
//     docNo4,
//     expdate4,
//     docTitleC,
//     issueAuthC,
//     docNoC,
//     expdateC,
//     addInfoC,
//     firstDayofEmp,
//     lastFirstNameOfEmp,
//     signOfEmpRep,
//     todaySDate,
//     empBuss,
//     empBusOrg,
//     lNamesec1,
//     fNamesec1,
//     middleNamesec1,
//     signOfPre,
//     DatePre,
//     lastNamePre,
//     firstNamePre,
//     middleNamePre,
//     addressPre,
//     cityPre,
//     statePre,
//     zipCodePre,
//     lastNameSBsec1,
//     firstNameSBsec1,
//     middleNameSBsec1,
//     dateOfRehireSB,
//     lastNameSb,
//     firstNameSB,
//     middleNameSB,
//     docTitleSB,
//     docNoSB,
//     expDateSB,
//     nameOfEmpSB,
//     signOfEmpSB,
//     todayDateSB,
//     clickhereSB,
//   } = req.body;
//   loungeAndGril
//     .create({
//       fNamePerInfo,
//       lnamePerInfo,
//       statePerInfo,
//       zipcodePerInfo,
//       phoneNoPerInfo,
//       emailAddPerInfo,
//       addPerInfo,
//       emrCnoPerInfo,
//       relaPerInfo,
//       emrPhoneNoPerInfo,
//       startDateEmpDet,
//       deptEmpDet,
//       managerEmpDet,
//       empIdEmpDet,
//       ssNoTaxInfo,
//       depTaxInfo,
//       taxInfo,
//       bankNameDDinfo,
//       routNoDDinfo,
//       accNoDDinfo,
//       healthInsurance,
//       dentalInsurance,
//       visionInsurance,
//       retirementPlan,
//       medConyes,
//       medConNo,
//       conFormsign,
//       conFormDate,
//       polciStatement,
//       tipsCredit,
//       cardFee,
//       policyAgainst,
//       policyReg,
//       consent,
//       workPlace,
//       drugFee,
//       remoteWork,
//       elecSys,
//       alterDis,
//       empSigPolicy,
//       datePolicy,
//       ableReadPolicy,
//       empNamePolicy,
//       empSignPolicy,
//       tranNamePolicy,
//       transSignPolicy,
//       ableReadEng,
//       empName,
//       empSign,
//       transPrinName,
//       transSignName,
//       lastName,
//       firstName,
//       middle,
//       otheLn,
//       address,
//       aptNo,
//       city,
//       state,
//       zipCode,
//       dob,
//       socialSno,
//       empEmail,
//       empTno,
//       citizeOfUsa,
//       uscis,
//       formi94,
//       foreignPass,
//       signOfEmp,
//       todayDate,
//       lawFullPrTextFeild,
//       noncitizenAuthTextField,
//       docTitle1,
//       issueAuth,
//       docNo,
//       expdate,
//       docTitle2,
//       issueAuth2,
//       docNo2,
//       expDate2,
//       docTitle3,
//       issueAuth3,
//       docNo3,
//       expdate3,
//       docTitle4,
//       issueAuth4,
//       docNo4,
//       expdate4,
//       docTitleC,
//       issueAuthC,
//       docNoC,
//       expdateC,
//       addInfoC,
//       firstDayofEmp,
//       lastFirstNameOfEmp,
//       signOfEmpRep,
//       todaySDate,
//       empBuss,
//       empBusOrg,
//       lNamesec1,
//       fNamesec1,
//       middleNamesec1,
//       signOfPre,
//       DatePre,
//       lastNamePre,
//       firstNamePre,
//       middleNamePre,
//       addressPre,
//       cityPre,
//       statePre,
//       zipCodePre,
//       lastNameSBsec1,
//       firstNameSBsec1,
//       middleNameSBsec1,
//       dateOfRehireSB,
//       lastNameSb,
//       firstNameSB,
//       middleNameSB,
//       docTitleSB,
//       docNoSB,
//       expDateSB,
//       nameOfEmpSB,
//       signOfEmpSB,
//       todayDateSB,
//       clickhereSB
//     })
//     .then(data => {
//       console.log("Added Succesfully");
//       console.log(data);
//       res.send(data);
//     });
// };

module.exports.getLoungeAndGrillData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const userData = await loungeAndGril.find();
  res.send(userData);
};

module.exports.saveLoungeAndGrillData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB
  } = req.body;
  loungeAndGril
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};

//Nara Cafe

module.exports.getNaraCafeData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const userData = await naraCafe.find();
  res.send(userData);
};

module.exports.saveNaraCafeData = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const {
    fNamePerInfo,
    lnamePerInfo,
    statePerInfo,
    zipcodePerInfo,
    phoneNoPerInfo,
    emailAddPerInfo,
    addPerInfo,
    emrCnoPerInfo,
    relaPerInfo,
    emrPhoneNoPerInfo,
    startDateEmpDet,
    deptEmpDet,
    managerEmpDet,
    empIdEmpDet,
    ssNoTaxInfo,
    depTaxInfo,
    taxInfo,
    bankNameDDinfo,
    routNoDDinfo,
    accNoDDinfo,
    healthInsurance,
    dentalInsurance,
    visionInsurance,
    retirementPlan,
    medConyes,
    medConNo,
    conFormsign,
    conFormDate,
    polciStatement,
    tipsCredit,
    cardFee,
    policyAgainst,
    policyReg,
    consent,
    workPlace,
    drugFee,
    remoteWork,
    elecSys,
    alterDis,
    empSigPolicy,
    datePolicy,
    ableReadPolicy,
    empNamePolicy,
    empSignPolicy,
    tranNamePolicy,
    transSignPolicy,
    ableReadEng,
    empName,
    empSign,
    transPrinName,
    transSignName,
    lastName,
    firstName,
    middle,
    otheLn,
    address,
    aptNo,
    city,
    state,
    zipCode,
    dob,
    socialSno,
    empEmail,
    empTno,
    citizeOfUsa,
    uscis,
    formi94,
    foreignPass,
    signOfEmp,
    todayDate,
    lawFullPrTextFeild,
    noncitizenAuthTextField,
    docTitle1,
    issueAuth,
    docNo,
    expdate,
    docTitle2,
    issueAuth2,
    docNo2,
    expDate2,
    docTitle3,
    issueAuth3,
    docNo3,
    expdate3,
    docTitle4,
    issueAuth4,
    docNo4,
    expdate4,
    docTitleC,
    issueAuthC,
    docNoC,
    expdateC,
    addInfoC,
    firstDayofEmp,
    lastFirstNameOfEmp,
    signOfEmpRep,
    todaySDate,
    empBuss,
    empBusOrg,
    lNamesec1,
    fNamesec1,
    middleNamesec1,
    signOfPre,
    DatePre,
    lastNamePre,
    firstNamePre,
    middleNamePre,
    addressPre,
    cityPre,
    statePre,
    zipCodePre,
    lastNameSBsec1,
    firstNameSBsec1,
    middleNameSBsec1,
    dateOfRehireSB,
    lastNameSb,
    firstNameSB,
    middleNameSB,
    docTitleSB,
    docNoSB,
    expDateSB,
    nameOfEmpSB,
    signOfEmpSB,
    todayDateSB,
    clickhereSB
  } = req.body;
  naraCafe
    .create({
      fNamePerInfo,
      lnamePerInfo,
      statePerInfo,
      zipcodePerInfo,
      phoneNoPerInfo,
      emailAddPerInfo,
      addPerInfo,
      emrCnoPerInfo,
      relaPerInfo,
      emrPhoneNoPerInfo,
      startDateEmpDet,
      deptEmpDet,
      managerEmpDet,
      empIdEmpDet,
      ssNoTaxInfo,
      depTaxInfo,
      taxInfo,
      bankNameDDinfo,
      routNoDDinfo,
      accNoDDinfo,
      healthInsurance,
      dentalInsurance,
      visionInsurance,
      retirementPlan,
      medConyes,
      medConNo,
      conFormsign,
      conFormDate,
      polciStatement,
      tipsCredit,
      cardFee,
      policyAgainst,
      policyReg,
      consent,
      workPlace,
      drugFee,
      remoteWork,
      elecSys,
      alterDis,
      empSigPolicy,
      datePolicy,
      ableReadPolicy,
      empNamePolicy,
      empSignPolicy,
      tranNamePolicy,
      transSignPolicy,
      ableReadEng,
      empName,
      empSign,
      transPrinName,
      transSignName,
      lastName,
      firstName,
      middle,
      otheLn,
      address,
      aptNo,
      city,
      state,
      zipCode,
      dob,
      socialSno,
      empEmail,
      empTno,
      citizeOfUsa,
      uscis,
      formi94,
      foreignPass,
      signOfEmp,
      todayDate,
      lawFullPrTextFeild,
      noncitizenAuthTextField,
      docTitle1,
      issueAuth,
      docNo,
      expdate,
      docTitle2,
      issueAuth2,
      docNo2,
      expDate2,
      docTitle3,
      issueAuth3,
      docNo3,
      expdate3,
      docTitle4,
      issueAuth4,
      docNo4,
      expdate4,
      docTitleC,
      issueAuthC,
      docNoC,
      expdateC,
      addInfoC,
      firstDayofEmp,
      lastFirstNameOfEmp,
      signOfEmpRep,
      todaySDate,
      empBuss,
      empBusOrg,
      lNamesec1,
      fNamesec1,
      middleNamesec1,
      signOfPre,
      DatePre,
      lastNamePre,
      firstNamePre,
      middleNamePre,
      addressPre,
      cityPre,
      statePre,
      zipCodePre,
      lastNameSBsec1,
      firstNameSBsec1,
      middleNameSBsec1,
      dateOfRehireSB,
      lastNameSb,
      firstNameSB,
      middleNameSB,
      docTitleSB,
      docNoSB,
      expDateSB,
      nameOfEmpSB,
      signOfEmpSB,
      todayDateSB,
      clickhereSB
    })
    .then(data => {
      console.log("Added Succesfully");
      console.log(data);
      res.send(data);
    });
};

const transporter = nodemailer.createTransport({
  host: "flowtechnologies.io",
  port: 465,
  secure: true,
  auth: {
    user: "furqan.rahim@flowtechnologies.io",
    pass: "Furqan@123@@@"
  }
});

module.exports.postPdf = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const formData = req.body.data;
  console.log("Working");
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    console.log("Working");
    const page = await browser.newPage();

    await page.goto(`${baseUrl}/eligibilityverificationview`);
    await page.waitForTimeout(8000);
    const pdfBuffer = await page.pdf({ format: "A4" });

    const pdfPath = path.join(__dirname, "generated.pdf");
    fs.writeFileSync(pdfPath, pdfBuffer);

    await browser.close();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.json({ pdfPath: "/download-pdf" });
  } catch (error) {
    console.log(error);
    // res.status(500).send('Internal Server Error');
  }
};

//Employeer/Manager Pdf
module.exports.postEmployerPdf = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const formData = req.body.data;
  try {
    const browser = await puppeteer.launch({ headless: "new" });
    const page = await browser.newPage();

    // const browser = await puppeteer.launch({
    //   headless: true,
    //   devtools: true,
    //   args: [
    //     "--no-sandbox",
    //     "--disable-setuid-sandbox",
    //     "--disable-web-security"
    //   ]
    // });
    // const page = await browser.newPage();

    await page.goto(`${baseUrl}/eligibilityverificationview`);
    // await page.waitForTimeout(8000);
    const pdfBuffer = await page.pdf({ format: "A4" });

    const pdfPath = path.join(__dirname, "generated.pdf");
    fs.writeFileSync(pdfPath, pdfBuffer);

    await browser.close();

    const emailAddresses = [
      "thefurquanrahim@gmail.com",
      "furquan.rahim124@gmail.com",
      "thefurqanrahim@gmail.com"
    ];
    const attachments = [{ filename: "generated.pdf", content: pdfBuffer }];

    emailAddresses.forEach(email => {
      const mailOptions = {
        from: "furqan.rahim@flowtechnologies.io",
        to: email,
        subject: "PDF Attachment",
        text: "Attached is the PDF you requested.",
        attachments
      };

      const operation = retry.operation({
        retries: 3,
        factor: 2,
        minTimeout: 1000,
        maxTimeout: 30000
      });

      operation.attempt(currentAttempt => {
        transporter.sendMail(mailOptions, (error, info) => {
          if (operation.retry(error)) {
            console.error("Email not sent, retrying...", currentAttempt);
            return;
          }

          if (error) {
            console.error("Email not sent:", error);
          } else {
            console.log("Email sent:", info.response);
          }
        });
      });
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.json({ pdfPath: "/download-pdf" });
  } catch (error) {
    console.log(error);
    // res.status(500).send('Internal Server Error');
  }
};

module.exports.getPdf = async (req, res) => {
  // proxy.web(req, res, { target: 'http://52.204.170.61:8000' });
  const pdfPath = path.join(__dirname, "generated.pdf");
  res.download(pdfPath, "generated.pdf");
};
