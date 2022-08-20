const newQuestionBtn = document.getElementById('new-question');
const letsBeginBtn = document.getElementById('lets-begin');
const questionText = document.getElementById('question');
const typeText = document.getElementById('type');
const twitterBtn = document.getElementById('twitter');

// Function
function newQuestion() {
    letsBeginBtn.hidden = true;
    newQuestionBtn.hidden = false;

    twitterBtn.hidden = false;
    document.querySelector(".button-container").style.justifyContent = "space-between";
    
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
    const twitterUrl = `https://twitter.com/intent/tweet?text=${questionText.textContent} - ${typeText.textContent}`;
    window.open(twitterUrl, '_blank');
}


// Event Listener
letsBeginBtn.addEventListener('click', newQuestion);
newQuestionBtn.addEventListener('click', newQuestion);
twitterBtn.addEventListener('click', tweetQuote);