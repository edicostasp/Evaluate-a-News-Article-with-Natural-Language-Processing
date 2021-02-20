// Require hidden api key
const dotenv = require('dotenv');
dotenv.config();

//Dependencies
var path = require('path');
const fetch = require('node-fetch');
const mockAPIResponse = require('./mockAPI.js');

//Server
const express = require('express');
const app = express();


//Middleware
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors allows the browser and server to communicate without any security interruptions
// Origin Allowance
const cors = require('cors');
app.use(cors());

//Main project folder
app.use(express.static('dist'));

console.log(__dirname);

// Meaningcloud credentials for API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?key=';
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${process.env.API_KEY}`);
let userInput = []

//Get Route
app.get('/', function (req, res) {
    // res.sendFile(path.resolve('dist/index.html'));
    res.sendFile(path.resolve('src/client/views/index.html'));
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse);
})

// POST Route
app.post('/api', async function(req, res) {
    userInput = req.body.url;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;
    console.log(userInput);
    const response = await fetch(apiURL);
    const mcData = await response.json();
    res.send(mcData);
    console.log(mcData);
});

// Port and Listening
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log(`Example app listening on port 8081!`);
})