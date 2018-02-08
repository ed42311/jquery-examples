const express = require('express');
const path = require('path');
const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));
app.use('/js/jquery', express.static(__dirname + './node_modules/jquery/dist/jquery.js'));

app.listen('3000', () => console.log('working now'));
