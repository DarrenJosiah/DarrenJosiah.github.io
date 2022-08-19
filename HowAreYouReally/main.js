const newQuestionBtn = document.getElementById('new-question');
const questionText = document.getElementById('question');
const typeText = document.getElementById('type');
const twitterBtn = document.getElementById('twitter');

// Function
function newQuestion() {
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
newQuestionBtn.addEventListener('click', newQuestion);
twitterBtn.addEventListener('click', tweetQuote);