var express = require('express');
var app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => res.send('<b>Hello World!</b>'))

app.listen(port, () => console.log(`Example app listening on http://127.0.0.1:${port}`))