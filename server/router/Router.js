const express = require("express");
const {
  getFormData,
  saveFormData,
  getLoungeAndGrillData,
  saveLoungeAndGrillData,
  getNaraCafeData,
  saveNaraCafeData,
  postPdf,
  postEmployerPdf,
  getPdf,
  postRegisterData,
  postLoginData,
  getQuoteData,
  postQuoteData,
  postAdminRegisterData,
  postAdminLoginData,
  postAdminQuoteData,
  getAdminQuoteData
} = require("../controller/Controller");
const router = express.Router();

//Admin Authentication and Authorization
router.post("/admin/register", postAdminRegisterData);
router.post("/admin/login", postAdminLoginData);

//User Authentication and Authorization
router.post("/register", postRegisterData);
router.post("/login", postLoginData);

//Patio endpoints
router.get("/formdata", getFormData);
router.post("/formdatapost", saveFormData);

//Lounge And Grill endpoints
router.get("/loungeandgrilldata", getLoungeAndGrillData);
router.post("/loungeandgrilldatapost", saveLoungeAndGrillData);

//Naracafe endpoints
router.get("/naracafedata", getNaraCafeData);
router.post("/naracafedatapost", saveNaraCafeData);

//Pdf Generator and Email send endpoints
router.get("/download-pdf", getPdf);
router.post("/generate-and-send-pdf-employer", postEmployerPdf);
router.post("/generate-and-send-pdf", postPdf);

module.exports = router;
