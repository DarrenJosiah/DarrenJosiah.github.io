const navBarContainer = document.querySelector('.navbar-container');
let isLightMode = true;

// Functions
function toggleLightDarkMode() {
    if (isLightMode) {
        switchToDarkMode();
    }
    else {
        // TODO
        switchToLightMode();
    }
}

function switchToDarkMode() {
    document.documentElement.style.setProperty('--color-white', 'orangered');
    document.documentElement.style.setProperty('--color-primary', 'rgb(16, 16, 16)');
    document.documentElement.style.setProperty('--color-black', 'Gainsboro');    
    isLightMode = false;
}

function switchToLightMode() {
    document.documentElement.style.setProperty('--color-white', 'whitesmoke');
    document.documentElement.style.setProperty('--color-primary', 'orangered');
    document.documentElement.style.setProperty('--color-black', 'black');    
    isLightMode = true;
}


// Event Listeners
navBarContainer.addEventListener('click', toggleLightDarkMode);

// JQuery
$(".navbar-hyperlinks").click(function (event) {
    event.stopPropagation();
});
