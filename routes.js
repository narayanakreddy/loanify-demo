var express = require("express");
var ejs = require("ejs");
var Swagger = require("swagger-client");
var bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");

const urlencodedParser = bodyParser.urlencoded({ extended: false });

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

router.post(
  "/signUp",
  urlencodedParser,
  [check("email", "Email is not valid").isEmail().normalizeEmail()],
  function (req, res) {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      // return res.status(422).jsonp(errors.array())
      const alert = errors.array();
      res.render("signUp", {
        alert,
      });
    } else {
      res.render("otp");
    }
  }
);

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
  // console.log('testing')
  // Swagger.http({
  //   url: "https://api.apixplatform.com/account-mgmt/v2/account/createAccount",
  //   method: "post",
  //   query: {},
  //   headers: {
  //     "content-type": "application/json",
  //     accept: "*/*",
  //     processType: "createAccount",
  //     coreBank: "fineract",
  //     enableCQRS: true,
  //     "X-Authorization":
  //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaXhwbGF0Zm9ybS5jb20iLCJzdWIiOiI3MmMzM2JjYS0zMTlmLTExZWMtYWJhYi04YjIwNGMwYTA3ZTkiLCJhdWQiOiJodHRwczovL2FwaS5hcGl4cGxhdGZvcm0uY29tIiwiZXhwIjoxNjM2MTc1ODIyLCJuYW1lIjoiTmFyYXlhbmEgSyIsImVtYWlsIjoibmFyYXlhbmEua2VsbHVydUB0ZWNodXJhdGUuY29tIn0.FzTSUI5AYnNrf4wRD8G9pxIWDNjoanN-JdDsNdHHTzwCRXnUrMjY_5HOtxC3sM-TAkuo6SGL6dWCkCcdcyq53a5OSQldMiZqw5U3rsiatNq1twUb3caiPQzPnAahgogllp2tRaY-guO9NOTiz0tJBBJtDfKi5e58uSqpaIh9usVRLUoM64lXwF5Wm6wwDyd0WXPxQoYp_smBLp77MEL5kISscNVssXFO8bNYeIF0bMk_a3ihUyt5vfC3xAYOkC5782EdqmxfMhhL4HaQJTSaYs1QaDsgEtmFMLpu8i7P1FhWdX-y5O5_bs1flWL9aBju_n4Ugp_0_foGko32tvSGZQ",
  //   },
  //   body: JSON.stringify({
  //     accountCurrency: "USD",
  //     accountOpenDate: "03 September 2020",
  //     accountType: 1,
  //     activatedOnDate: "25 November 2020",
  //     approvedOnDate: "25 November 2020",
  //     customerReference: 1,
  //     submittedOnDate: "25 November 2020",
  //   }),
  // })
  //   .then((response) => {
  //     // var access_token = "bearer " + response.body.access_token;
  //     console.log("response data");
  //     console.log(response);
  //     res.render("eligibility");

  //     // console.log(response.status);
  //     // console.log(response.body);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //     res.render("eligibility");
  //   });
});

module.exports = router;
