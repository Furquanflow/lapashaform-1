const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const retry = require("retry");
const puppeteer = require("puppeteer");
const patioModel = require("../models/Model");
const loungeAndGril = require("../models/LoungeAndGrill");
const naraCafe = require("../models/NaraCafe");
const User = require("../models/UserModel");
const adminModel = require("../models/AdminAuth");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
// const httpProxy = require('http-proxy');
// const proxy = httpProxy.createProxyServer();

let baseUrl = "http://localhost:3000";

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
const generateRandomString = () => {
  return crypto.randomBytes(32).toString("hex");
};

let SECRET_KEY = generateRandomString();
console.log("Initial SECRET_KEY:", SECRET_KEY);

// module.exports.authenticateToken = (req, res, next) => {
//   const tokenHeader = req.headers.authorization;

//   if (tokenHeader) {
//     const token = tokenHeader.split(" ")[1];
//     console.log("Received Token:", token);
//     try {
//       let user = jwt.verify(token, SECRET_KEY);
//       console.log("Decoded User:", user);
//       req.userId = user.id;
//       next();
//     } catch (error) {
//       console.error("Error Verifying Token:", error);
//       return res.status(401).json({ message: "Unauthorized" });
//     }
//   } else {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
// };

module.exports.authenticateToken = async (req, res, next) => {
  const tokenHeader = req.headers.authorization;

  if (!tokenHeader) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const token = tokenHeader.split(" ")[1];
    const decoded = jwt.verify(token, SECRET_KEY);

    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("Error Verifying Token:", error);
    return res.status(401).json({ message: "Unauthorized" });
  }
};
module.exports.postRegisterData = async (req, res) => {
  try {
    console.log(req.body);
    const existingUser = await User.findOne({ authEmail: req.body.authEmail });
    if (existingUser) {
      return res.status(400).json({ message: "User already exist" });
    }
    const newPassword = await bcrypt.hash(req.body.authPassword, 10);
    const user = await User.create({
      authName: req.body.authName,
      authEmail: req.body.authEmail,
      authPassword: newPassword
    });
    // res.json({ status: "ok" });
    const token = jwt.sign(
      {
        id: user._id,
        name: user.authName,
        email: user.authEmail
      },
      SECRET_KEY
    );
    res.status(201).json({ status: "ok", user: user, token: token });
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
        id: user._id,
        name: user.authName,
        email: user.authEmail
      },
      SECRET_KEY
    );
    res.status(201).json({ status: "ok", user: user, token: token });
  }
};

//Patio
module.exports.getFormData = async (req, res) => {
  const userData = await patioModel.find({});
  res.send(userData);
  // const userData = await patioModel.find({ userId: req.userId });
  // res.status(200).json(userData)
};

module.exports.saveFormData = async (req, res) => {
  try {
    const formData = req.body;
    const newForm = new patioModel(formData);
    const savedForm = await newForm.save();
    res.json({ status: "ok", data: savedForm });
  } catch (err) {
    console.error("Error in saveFormData:", err);
    res.status(500).json({
      status: "error",
      error: "An error occurred during form submission"
    });
  }
};

module.exports.updateSaveFormData = async (req, res) => {
  const id = req.params.id;
  const formData = req.body;

  try {
    const updatedPatioNote = await patioModel.findByIdAndUpdate(id, formData, {
      new: true
    });
    res.status(200).json(updatedPatioNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Lounge And Grill
module.exports.getLoungeAndGrillData = async (req, res) => {
  const userLoungeData = await loungeAndGril.find();
  res.send(userLoungeData);
  // const userLoungeData = await loungeAndGril.find({ userId: req.userId });
  // res.status(200).json(userLoungeData)
};

module.exports.saveLoungeAndGrillData = async (req, res) => {
  try {
    const loungeData = req.body;
    loungeData.userId = req.userId;
    const newLounge = new loungeAndGril(loungeData);
    const savedForm = await newLounge.save();
    res.json({ status: "ok", data: savedForm });
  } catch (err) {
    console.error("Error in saveFormData:", err);
    res.status(500).json({
      status: "error",
      error: "An error occurred during form submission"
    });
  }
};

module.exports.updateSaveLoungeAndGrillData = async (req, res) => {
  const id = req.params.id;
  const formData = req.body;
  try {
    const updatedPatioNote = await loungeAndGril.findByIdAndUpdate(
      id,
      formData,
      { new: true }
    );
    res.status(200).json(updatedPatioNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

//Nara Cafe
module.exports.getNaraCafeData = async (req, res) => {
  const naraData = await naraCafe.find();
  res.send(naraData);
};

module.exports.saveNaraCafeData = async (req, res) => {
  try {
    const naraData = req.body;
    naraData.userId = req.userId;
    console.log(naraData);
    const newNara = new naraCafe(naraData);
    const savedNara = await newNara.save();
    res.json({ status: "ok", data: savedNara });
  } catch (err) {
    console.error("Error in saveFormData:", err);
    res.status(500).json({
      status: "error",
      error: "An error occurred during form submission"
    });
  }
};

module.exports.updateSaveNaraCafeData = async (req, res) => {
  const id = req.params.id;
  const formData = req.body;

  try {
    const updatedPatioNote = await naraCafe.findByIdAndUpdate(id, formData, {
      new: true
    });
    res.status(200).json(updatedPatioNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
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
    // res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Methods', 'POST');
    // res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.json({ pdfPath: "/download-pdf" });
  } catch (error) {
    console.log(error);
    // res.status(500).send('Internal Server Error');
  }
};

module.exports.getPdf = async (req, res) => {
  const pdfPath = path.join(__dirname, "generated.pdf");
  res.download(pdfPath, "generated.pdf");
};

// module.exports.getPdf = async (req, res) => {
//   const browser = await puppeteer.launch({ headless: "new" });
//   const page = await browser.newPage();
// await page.goto(`${baseUrl}/eligibilityverificationview`, {
//   waitUntil: "networkidle0"
// });
//   const pdfBuffer = await page.pdf();
//   res.contentType("application/pdf");
//   res.send(pdfBuffer);
//   browser.close();
// };
