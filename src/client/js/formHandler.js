const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('Error', error);
    }
};

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('input').value
    if(Client.checkForURL(formText)) {              //Client.checkForName(formText)
        console.log("::: Form Submitted :::")
        postData('http://localhost:8081/api', {url: formText})     // fetch('http://localhost:8081/api')
        // .then(res => res.json())
        .then(function() {
            updateUI();
        })
    } else {
        alert('Seems like an invalid URL, please try with a valid URL.');
    }
}

const updateUI = async() =>{
    const url = "http://localhost:8081/api";
    const req = await fetch (url);
    try {
        const info = await req.json();
        document.getElementById('score').innerHTML = "Polarity: " + checkPolarity(info.score);
        document.getElementById('agreement').innerHTML = "Agreement: " + checkAgreement(info.agreement);
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + checkSubjectivity(info.subjectivity);
        document.getElementById('irony').innerHTML = "Irony: " + checkIrony(info.irony);
        document.getElementById('confidence').innerHTML = "Confidence: " + info.confidence;
    }
    catch (error) {
        console.log("Error", error);
    }
}

// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
const polarityChecker = (score) => {
    let PolatiryCheckerResults;
    switch (score){
        case 'NEW':
            PolatiryCheckerResults = '0 neutral';
            break;
        case 'P+':
            PolatiryCheckerResults = '+++ Strong Positive';
            break;
        case 'P':
            PolatiryCheckerResults = '+ Positive';
            break;
        case 'N':
            PolatiryCheckerResults = '- negative';
            break;
        case 'N+':
            PolatiryCheckerResults = '--- strong negative';
            break;
        case 'NONE':
            PolatiryCheckerResults = 'no sentiment (Empty)';
    }
    return PolatiryCheckerResults;
}

//Check the agreement
function checkAgreement(agreement){
    let agreed;
    switch (agreement){
        case "AGREEMENT":
            agreed = "agreement!! (different elements have exactly the same polarity)";
            break;
        case "DISAGREEMENT":
            agreed = "disagreement!! (there is disagreement between different elements polarity)";
            break;
    }
    return agreed;
}

export { handleSubmit }

export { polarityChecker }

export { checkAgreement }
