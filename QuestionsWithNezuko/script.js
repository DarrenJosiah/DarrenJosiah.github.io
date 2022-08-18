const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const characterText = document.getElementById('character');
const twitterBtn = document.getElementById('twitter');
const newQuestionBtn = document.getElementById('new-question');
const loader = document.getElementById('loader');

function showLoadingSpinner() {
    loader.hidden = false;
    questionContainer.hidden = true;
}

function removeLoadingSpinner() {
    loader.hidden = true;
    questionContainer.hidden = false;
}

// Show New Question
function newQuestion() { 
    showLoadingSpinner();
    // Pick a random quote from apiQuotes Array
    const question = questionBank[Math.floor(Math.random() * questionBank.length)];   
    characterText.textContent = question.character;
    // Set Quote, Hide Loader
    questionText.textContent = question.question;
    removeLoadingSpinner();
}



// Tweet Quote 
function tweetQuestion() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${questionText.textContent} - ${characterText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listeners
newQuestionBtn.addEventListener('click',newQuestion);
twitterBtn.addEventListener('click',tweetQuestion);

// On Load
newQuestion();