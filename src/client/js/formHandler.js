const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
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
    let formText = document.getElementById('name').value
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
    const url = "http://localhost:8080/api";
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
    let display;
    switch (score){
        case 'P+':
            display = 'strong positive';
            break;
        case 'P':
            display = 'positive';
            break;
        case 'NEW':
            display = 'neutral';
            break;
        case 'N':
            display = 'negative';
            break;
        case 'N+':
            display = 'strong negative';
            break;
        case 'NONE':
            display = 'no sentiment';
    }
    return display;
}

//Check the agreement
function checkAgreement(agreement){
    let agree;
    switch (agreement){
        case "AGREEMENT":
            agree = "agreement (the different elements have the same polarity)";
            break;
        case "DISAGREEMENT":
            agree = "disagreement (there is disagreement between the different elements' polarity)";
            break;
    }
    return agree;
}

export { handleSubmit }
export { polarityChecker }
export { checkAgreement }
