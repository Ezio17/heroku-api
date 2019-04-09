const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function (request, response) {
  response.sendFile(__dirname + "/index.html");
});

app.post("/users", urlencodedParser, function (request, response) {
  if (!request.body) return response.sendStatus(400);
  console.log(request.body);
  response.send(`Name: ${request.body.name}`);
});

app.listen(3000);