const express = require("express");
const serverless = require("serverless-http");
const app = express();
const PORT = process.env.PORT || 4080;
const path = require("path");
const cors = require("cors");
const versionRouter = require("../versions/version.router");
const { sendEmail } = require("../utils/sendGrid/sendGrid");
const { checkToken } = require("../utils/firebase/firebase.util");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.text());
app.use(cors());

//Redirect to routes
app.use("/.netlify/functions/api", versionRouter);

// sendPurchaseEmail("varunprabhakaran22@gmail.com");
// checkToken();

app.listen(PORT, () => {
    console.log("Log in service is listening at PORT ", PORT);
});


module.exports.handler = serverless(app);