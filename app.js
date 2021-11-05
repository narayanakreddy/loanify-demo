var express = require("express"); //including express  npm
var path = require("path");
var bodyParser = require("body-parser");
var app = express(); // Creating instance
var port = 4200; // setting port for the application

var routes = require("./routes");

app.set("port", port);
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

app.use(routes);

app.listen(app.get("port"), function () {
  console.log("Your application is running on : " + app.get("port") + " port");
});
