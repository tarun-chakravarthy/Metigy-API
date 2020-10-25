const express = require("express");
const app = express();
const port = 4000;
const metadata = require("reflect-metadata");
var mysql = require("mysql");
var cors = require("cors");
var bodyParser = require("body-parser");
var jsonParser = bodyParser.json();

app.use(bodyParser.json());

app.use(cors());

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "",
//   password: "1234",
// });

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/json", (req, res) => {
  const jsonFile = {
    checkedExplorer: true,
    checkedIncognito: true,
    visitPage: true,
    checkedPhone: true,
    checkedData: true,
    removeCookies: true,
    dataSaving: true,
    analyticProtection: true,
    waitNumberHour: 20,
    waitNumberSeconds: 30,
    pagesNumber1: 40,
    pagesNumber2: 50,
    pagesNumber3: 60,
    afterOperationNumber1: 1,
    afterOperationNumber2: 20,
    targetNumber1: 100,
    targetNumber2: 200,
    resetNumber: 13,
    flyMode: false,
    checkedFirefox: false,
    changeResolution: false,
    mouseTracks: false,
    dataSaving: false,
    removeHistory: false,
    checkedSafari: false,
    checkedFirefox: false,
    checkedDevice: false,
    checkedVinn: false,
    checkedOpera: flase,
    checkedChrome: false,
    webSites: [],
    keyWords: [],
  };
  res.send(jsonFile);
});

app.post("/updateSettings", (req, res) => {
  const newSettings = req.body.setting;
  res.send(newSettings);
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
