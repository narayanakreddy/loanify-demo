var express = require("express");
var ejs = require("ejs");

var router = express.Router();

router.get("/", function (req, res) {
  res.render("landing");
});

router.get("/login", function (req, res) {
  res.render("login");
});

router.get("/signUp", function (req, res) {
  res.render("signUp");
});

router.get("/otp", function (req, res) {
  res.render("otp");
});

router.get("/selfi", function (req, res) {
  res.render("selfi");
});

router.get("/upload", function (req, res) {
  res.render("upload");
});

router.get("/kyc", function (req, res) {
  res.render("kyc");
});

router.get("/eligibility", function (req, res) {
  res.render("eligibility");
});

module.exports = router;
