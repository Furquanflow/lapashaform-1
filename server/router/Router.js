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
  postAdminRegisterData,
  postAdminLoginData,
  updateSaveFormData,
  authenticateToken,
  updateSaveLoungeAndGrillData,
  updateSaveNaraCafeData
} = require("../controller/Controller");
const router = express.Router();

//Admin Authentication and Authorization
router.post("/admin/register", postAdminRegisterData);
router.post("/admin/login", postAdminLoginData);

//User Authentication and Authorization
router.post("/register", postRegisterData);
router.post("/login", postLoginData);

//Patio endpoints
router.get("/formdata/:userId", authenticateToken, getFormData);
router.get("/formdata", getFormData);
router.post("/formdatapost", authenticateToken,  saveFormData);
router.put("/updateformdata/:id", authenticateToken, updateSaveFormData);

//Lounge And Grill endpoints
router.get("/loungeandgrilldata/:userId", authenticateToken, getLoungeAndGrillData);
router.get("/loungeandgrilldata", getLoungeAndGrillData);
router.post("/loungeandgrilldatapost", authenticateToken, saveLoungeAndGrillData);
router.put("/updateloungeandgrilldata/:id", updateSaveLoungeAndGrillData);

//Naracafe endpoints
router.get("/naracafedata/:userId", authenticateToken, getNaraCafeData);
router.get("/naracafedata", getNaraCafeData);
router.post("/naracafedatapost", authenticateToken, saveNaraCafeData);
router.put("/updatenaracafedata/:id", authenticateToken, updateSaveNaraCafeData);

//Pdf Generator and Email send endpoints
router.get("/download-pdf", getPdf);
router.post("/generate-and-send-pdf-employer", postEmployerPdf);
router.post("/generate-and-send-pdf", postPdf);

module.exports = router;
