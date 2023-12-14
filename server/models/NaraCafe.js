const mongoose = require("mongoose");

const naraCafe = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  fNamePerInfo: {
    type: String,
    require: true,
  },
  lnamePerInfo: {
    type: String,
    require: true,
  },
  statePerInfo: {
    type: String,
    require: true,
  },
  zipcodePerInfo: {
    type: Number,
    require: true,
  },
  phoneNoPerInfo: {
    type: String,
    require: true,
  },
  emailAddPerInfo: {
    type: String,
    require: true,
  },
  addPerInfo: {
    type: String,
    require: true,
  },
  emrCnoPerInfo: {
    type: String,
    require: true,
  },
  relaPerInfo: {
    type: String,
    require: true,
  },
  emrPhoneNoPerInfo: {
    type: String,
    require: true,
  },
  startDateEmpDet: {
    type: String,
    require: true,
  },
  deptEmpDet: {
    type: String,
    require: true,
  },
  managerEmpDet: {
    type: String,
    require: true,
  },
  empIdEmpDet: {
    type: String,
    require: true,
  },
  ssNoTaxInfo: {
    type: String,
    require: true,
  },
  depTaxInfo: {
    type: String,
    require: true,
  },
  taxInfo: {
    type: String,
    require: true,
  },
  bankNameDDinfo: {
    type: String,
    require: true,
  },
  routNoDDinfo: {
    type: String,
    require: true,
  },
  accNoDDinfo: {
    type: String,
    require: true,
  },
  healthInsurance: {
    type: String,
    require: true,
  },
  dentalInsurance: {
    type: String,
    require: true,
  },
  visionInsurance: {
    type: String,
    require: true,
  },
  retirementPlan: {
    type: String,
    require: true,
  },
  medConyes: {
    type: String,
    require: true,
  },
  medConNo: {
    type: String,
    require: true,
  },
  conFormsign: {
    type: String,
    require: true,
  },
  conFormDate: {
    type: String,
    require: true,
  },
  polciStatement: {
    type: String,
    require: true,
  },
  tipsCredit: {
    type: String,
    require: true,
  },
  cardFee: {
    type: String,
    require: true,
  },
  policyAgainst: {
    type: String,
    require: true,
  },
  policyReg: {
    type: String,
    require: true,
  },
  consent: {
    type: String,
    require: true,
  },
  workPlace: {
    type: String,
    require: true,
  },
  drugFee: {
    type: String,
    require: true,
  },
  remoteWork: {
    type: String,
    require: true,
  },
  elecSys: {
    type: String,
    require: true,
  },
  alterDis: {
    type: String,
    require: true,
  },
  empSigPolicy: {
    type: String,
    require: true,
  },
  datePolicy: {
    type: String,
    require: true,
  },
  ableReadPolicy: {
    type: String,
    require: true,
  },
  empNamePolicy: {
    type: String,
    require: true,
  },
  empSignPolicy: {
    type: String,
    require: true,
  },
  tranNamePolicy: {
    type: String,
    require: true,
  },
  transSignPolicy: {
    type: String,
    require: true,
  },
  ableReadEng: {
    type: String,
    require: true,
  },
  empName: {
    type: String,
    require: true,
  },
  empSign: {
    type: String,
    require: true,
  },
  transPrinName: {
    type: String,
    require: true,
  },
  transSignName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  firstName: {
    type: String,
    require: true,
  },
  middle: {
    type: String,
    require: true,
  },
  otheLn: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  aptNo: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  zipCode: {
    type: String,
    require: true,
  },
  dob: {
    type: String,
    require: true,
  },
  socialSno: {
    type: String,
    require: true,
  },
  empEmail: {
    type: String,
    require: true,
  },
  empTno: {
    type: String,
    require: true,
  },
  citizeOfUsa: {
    type: String,
    require: true,
  },
  uscis: {
    type: String,
    require: true,
  },
  formi94: {
    type: String,
    require: true,
  },
  foreignPass: {
    type: String,
    require: true,
  },
  signOfEmp: {
    type: String,
    require: true,
  },
  todayDate: {
    type: String,
    require: true,
  },
  lawFullPrTextFeild: {
    type: String,
    require: true,
  },
  noncitizenAuthTextField: {
    type: String,
    require: true,
  },
  docTitle1: {
    type: String,
    require: true,
  },
  issueAuth: {
    type: String,
    require: true,
  },
  docNo: {
    type: String,
    require: true,
  },
  expDate: {
    type: String,
    require: true,
  },
  docTitle2: {
    type: String,
    require: true,
  },
  issueAuth2: {
    type: String,
    require: true,
  },
  docNo2: {
    type: String,
    require: true,
  },
  expDate2: {
    type: String,
    require: true,
  },
  docTitle3: {
    type: String,
    require: true,
  },
  issueAuth3: {
    type: String,
    require: true,
  },
  docNo3: {
    type: String,
    require: true,
  },
  expdate3: {
    type: String,
    require: true,
  },
  docTitle4: {
    type: String,
    require: true,
  },
  issueAuth4: {
    type: String,
    require: true,
  },
  docNo4: {
    type: String,
    require: true,
  },
  expdate4: {
    type: String,
    require: true,
  },
  docTitleC: {
    type: String,
    require: true,
  },
  issueAuthC: {
    type: String,
    require: true,
  },
  docNoC: {
    type: String,
    require: true,
  },
  expdateC: {
    type: String,
    require: true,
  },
  addInfoC: {
    type: String,
    require: true,
  },
  firstDayofEmp: {
    type: String,
    require: true,
  },
  lastFirstNameOfEmp: {
    type: String,
    require: true,
  },
  signOfEmpRep: {
    type: String,
    require: true,
  },
  todaySDate: {
    type: String,
    require: true,
  },
  empBuss: {
    type: String,
    require: true,
  },
  empBusOrg: {
    type: String,
    require: true,
  },
  lNamesec1: {
    type: String,
    require: true,
  },
  fNamesec1: {
    type: String,
    require: true,
  },
  middleNamesec1: {
    type: String,
    require: true,
  },
  signOfPre: {
    type: String,
    require: true,
  },
  DatePre: {
    type: String,
    require: true,
  },
  lastNamePre: {
    type: String,
    require: true,
  },
  firstNamePre: {
    type: String,
    require: true,
  },
  middleNamePre: {
    type: String,
    require: true,
  },
  addressPre: {
    type: String,
    require: true,
  },
  cityPre: {
    type: String,
    require: true,
  },
  statePre: {
    type: String,
    require: true,
  },
  zipCodePre: {
    type: String,
    require: true,
  },
  lastNameSBsec1: {
    type: String,
    require: true,
  },
  firstNameSBsec1: {
    type: String,
    require: true,
  },
  middleNameSBsec1: {
    type: String,
    require: true,
  },
  dateOfRehireSB: {
    type: String,
    require: true,
  },
  lastNameSb: {
    type: String,
    require: true,
  },
  firstNameSB: {
    type: String,
    require: true,
  },
  middleNameSB: {
    type: String,
    require: true,
  },
  docTitleSB: {
    type: String,
    require: true,
  },
  docNoSB: {
    type: String,
    require: true,
  },
  expDateSB: {
    type: String,
    require: true,
  },
  nameOfEmpSB: {
    type: String,
    require: true,
  },
  signOfEmpSB: {
    type: String,
    require: true,
  },
  todayDateSB: {
    type: String,
    require: true,
  },
  clickHereSB: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("naraCafe", naraCafe);
