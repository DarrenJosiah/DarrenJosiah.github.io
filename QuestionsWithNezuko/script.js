const questionContainer = document.getElementById('question-container');
const questionText = document.getElementById('question');
const characterText = document.getElementById('character');
const twitterBtn = document.getElementById('twitter');
const newQuestionBtn = document.getElementById('new-question');
const loader = document.getElementById('loader');
var characterGIF = document.getElementById('nezukoGIF');
var body = document.querySelector('body');

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
    // Set textContent, Hide Loader
    questionText.textContent = question.question;
    if(question.character == "Nezuko") {
        characterGIF.removeAttribute('src');
        characterGIF.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1fe56053-597e-45b3-a3b1-f26197574147/dekmrdq-2b50c807-7d48-41ca-9bc0-556f33d5004f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFmZTU2MDUzLTU5N2UtNDViMy1hM2IxLWYyNjE5NzU3NDE0N1wvZGVrbXJkcS0yYjUwYzgwNy03ZDQ4LTQxY2EtOWJjMC01NTZmMzNkNTAwNGYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.u7KVn5FohtGv-hGC_Eb67YNCYYoQoK_99ZKuK-0CI9c");
        characterGIF.setAttribute("width", "40%");
    }
    else if(question.character == "Anya") {
        // Remove Nezuko
        characterGIF.removeAttribute('src');
        characterGIF.setAttribute("src", "https://c.tenor.com/2vkg2P2nWVkAAAAM/lonely-anya-spy-x-family.gif");
        characterGIF.setAttribute("width", "40%");

    }
    else if(question.character == "Tanjiro") {
        // Remove Nezuko
        characterGIF.removeAttribute('src');
        characterGIF.setAttribute("src", "https://c.tenor.com/95F2hoVpnAUAAAAd/demon-slayer-kimetsu.gif");
        characterGIF.setAttribute("width", "40%");
        questionContainer.setAttribute("margin", "auto");
        // Change Background
        body.style.backgroundColor = "#0C1FF0";
    }
    else {
        characterGIF.remove();
        // Nothing
    }
    characterText.textContent = question.character;
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