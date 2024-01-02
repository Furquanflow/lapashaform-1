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
  updateSaveNaraCafeData,
  getFormDataAdmin,
  getLoungeAndGrillDataAdmin,
  getNaraCafeDataAdmin,
  updateSaveLoungeAndGrillDataById
} = require("../controller/Controller");
const router = express.Router();

//Admin Authentication and Authorization
router.post("/admin/register", postAdminRegisterData);
router.post("/admin/login", postAdminLoginData);

//User Authentication and Authorization
router.post("/register", postRegisterData);
router.post("/login", postLoginData);

//Patio endpoints
router.get("/formdata/:userId", getFormData);
router.get("/formdataadmin", getFormDataAdmin);
router.post("/formdatapost", saveFormData);
router.put("/updateformdata/:id", updateSaveFormData);

//Lounge And Grill endpoints
router.get(
  "/loungeandgrilldata/:userId",
  getLoungeAndGrillData
);
router.get("/loungeandgrilldataadmin", getLoungeAndGrillDataAdmin);
router.post(
  "/loungeandgrilldatapost",
  saveLoungeAndGrillData
);
router.get("/updateloungeandgrilldata/:id", updateSaveLoungeAndGrillData);
router.patch("/updateloungeanta/update/:id", updateSaveLoungeAndGrillDataById);

//Naracafe endpoints
router.get("/naracafedata/:userId", getNaraCafeData);
router.get("/naracafedataadmin", getNaraCafeDataAdmin);
router.post("/naracafedatapost", saveNaraCafeData);
router.put("/updatenaracafedata/:id", updateSaveNaraCafeData);

//Pdf Generator and Email send endpoints
router.get("/download-pdf", getPdf);
router.post("/generate-and-send-pdf", postPdf);
router.post("/generate-and-send-pdf-employer", postEmployerPdf);

module.exports = router;
