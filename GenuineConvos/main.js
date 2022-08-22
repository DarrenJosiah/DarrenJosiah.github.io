const newQuestionBtn = document.getElementById('new-question');
const letsBeginBtn = document.getElementById('lets-begin');
const infoBtn = document.getElementById('info');
const questionText = document.getElementById('question');
const typeText = document.getElementById('type');
const twitterBtn = document.getElementById('twitter');
const footerContainer = document.querySelector(".footer-container");
const buttonContainer = document.querySelector(".button-container");

// Function
function newQuestion() {
    // Hide
    letsBeginBtn.hidden = true;
    infoBtn.hidden = true;
    footerContainer.hidden = true;

    // Show
    newQuestionBtn.hidden = false;
    twitterBtn.hidden = false;
    buttonContainer.style.justifyContent = "space-between";
    
    // Generate random question from questionBank[]
    let randomNumber = Math.floor(Math.random() * questionBank.length);
    // Take text property from the unique question
    let uniqueQuestion = questionBank[randomNumber].text;
    let uniqueType = questionBank[randomNumber].type;
    // Manipulate text
    questionText.innerHTML = uniqueQuestion;
    typeText.innerHTML = uniqueType;
    // Passing for Twitter
}

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${questionText.textContent}`;
    window.open(twitterUrl, '_blank');
}

function info() {
    // Todo
    footerContainer.hidden = false;
}


// Event Listener
letsBeginBtn.addEventListener('click', newQuestion);
infoBtn.addEventListener('click', info);
newQuestionBtn.addEventListener('click', newQuestion);
twitterBtn.addEventListener('click', tweetQuote);

