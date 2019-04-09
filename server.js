const express = require("express");
const bodyParser = require("body-parser");
const fs = require('fs')
const port = process.env.PORT || 3000
const app = express();

app.use(bodyParser.text())

let users = []

fs.readFile('./users.json', 'utf8', function (err, data) {
  if (err) {
    return;
  }

  users = JSON.parse(data)
});

function writeUsers() {
  fs.writeFile('./users.json', JSON.stringify(users), function (err) {
    if (err) {
      return;
    }
  });
}

app.get("/", function (request, response) {
  response.send('Hello World!');
});

app.get('/users', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*');
  response.json(users)
});

app.post("/users", function (request, response) {
  if (!request.body) return response.sendStatus(400);
  users.push(JSON.parse(request.body))
  writeUsers()

  response.set('Access-Control-Allow-Origin', '*');
  response.json(users);
});

app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}`))