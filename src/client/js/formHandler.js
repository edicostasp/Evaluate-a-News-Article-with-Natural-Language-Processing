async function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('url').value;             // check what text was put into the form field
    if(Client.checkForURL(formText)) {                              //Client.checkForName(formText)
        fetch ('http://localhost:8081/api', {
            method: 'POST',
            credentials: 'same-origin',
            cache: 'no-cache',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({ formText })
        })
        .then((res) => res.json())

        .then((res) => {
            updateUI(res);
        })
    } else {
        alert('Seems like that this URL is invalid, please try with a valid URL.');
    }
    console.log("::: Form Submitted :::")
}

async function updateUI(res) {
        document.getElementById('confidence').innerHTML = "Confidence: " + res.confidence +"%";
        document.getElementById('polarity').innerHTML = `Polarity score: + ${PolatiryCheckerResults(res.score)}`;
        document.getElementById('subjectivity').innerHTML = "Subjectivity: " + res.subjectivity;
        document.getElementById('agreement').innerHTML = "Agreement: " + res.agreement;
        document.getElementById('irony').innerHTML = "Irony: " + res.irony;  
}

// API response output (https://www.meaningcloud.com/developer/sentiment-analysis/doc/2.1/response)
export const PolatiryCheckerResults = (score_tag) => {
    if (score_tag === 'NEU'){
        return 'Overall, neutral';
    } else if (score_tag === 'P+'){
        return '+++ Strong Positive'
    } else if (score_tag === 'P'){
        return '+ Positive'
    } else if (score_tag === 'N+'){
        return '--- strong negative'
    } else if (score_tag === 'N'){
        return '- negative'
    } else {
        return 'no sentiment (Empty Soul)';
    }
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

export { checkAgreement }
