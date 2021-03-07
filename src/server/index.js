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

// Port and Listening: designates which port the app will listen to for incoming requests
port = 8081;
app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
})

//Get Route
app.get('/', function (req, res) {
    // res.sendFile(path.resolve('dist/index.html'));
    res.sendFile(path.resolve('src/client/views/index.html'));
})

// app.get('/api', function (req, res) {
//     res.send(mockAPIResponse);
// })

// POST Route
app.post('/api', insertPost);
async function insertPost(req, res) {
    userInput = req.body.input;
    console.log(`You entered: ${userInput}`);
    const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;
    const response = await fetch(apiURL);
    console.log(userInput);
    
    const mcData = await response.json();
    res.send(mcData);
    console.log(mcData);

    objMcData = {
        score: mcData.score_tag,
        agreement: mcData.agreement,
        subjectivity: mcData.subjectivity,
        irony: mcData.irony,
        confidence: mcData.confidence
    }
    console.log(objMcData);
    response.send(objMcData)
};