const express = require('express');

const path = require('path')

const app = express();

const port = process.env.PORT || 4000;

app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'src')));
app.use(express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'lib')));

app.listen(port, () => console.log('app started on', port))