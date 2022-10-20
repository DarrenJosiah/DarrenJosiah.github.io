let languagesInteractiveContainer = document.querySelector('.languages-interactive-container');
let layer = document.querySelectorAll('.language-layer');
let mail = document.querySelector('.fa-envelope');
let contactHyperlinks = document.querySelectorAll('contact-hyperlink');

// Functions
function javaIcon(e) {
    layer[0].setAttribute('title', 'Java');
}
function htmlIcon(e) {
    layer[1].setAttribute('title', 'HTML');
}
function cssIcon(e) {
    layer[2].setAttribute('title', 'CSS');
}
function javascriptIcon(e) {
    layer[3].setAttribute('title', 'JavaScript');
}
function bootstrapIcon(e) {
    layer[4].setAttribute('title', 'Bootstrap');
}
function typescriptIcon(e) {
    layer[5].setAttribute('title', 'Typescript');
}
function angularjsIcon(e) {
    layer[6].setAttribute('title', 'Angularjs');
}
function springIcon(e) {
    layer[7].setAttribute('title', 'Spring');
}
function mysqlIcon(e) {
    layer[8].setAttribute('title', 'MySQL');
}
function oraclesqlIcon(e) {
    layer[9].setAttribute('title', 'Oracle SQL');
}
function pythonIcon(e) {
    layer[10].setAttribute('title', 'Python');
}


// Event Listener
languagesInteractiveContainer.addEventListener('mousemove', (e) => {
    let X = e.pageX;
    let Y = e.pageY;
    console.log(X, Y);

    layer[0].style.transform = 'translate(' + X/200*-12 + 'px, ' + Y/200*-12 + 'px';
    layer[1].style.transform = 'translate(' + X/200*-10 + 'px, ' + Y/200*-10 + 'px';
    layer[2].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[3].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[4].style.transform = 'translate(' + X/200*-4 + 'px, ' + Y/200*-4 + 'px';
    layer[5].style.transform = 'translate(' + X/200*-4 + 'px, ' + Y/200*-4 + 'px';
    layer[6].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[7].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[8].style.transform = 'translate(' + X/200*-4 + 'px, ' + Y/200*-4 + 'px';
    layer[9].style.transform = 'translate(' + X/200*-2 + 'px, ' + Y/200*-2 + 'px';
    layer[10].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[11].style.transform = 'translate(' + X/500 + 'px, ' + Y/500 + 'px';
    // Use translate instead of transform. If not it'll override
});

layer[0].addEventListener('mouseover', javaIcon);
layer[1].addEventListener('mouseover', htmlIcon);
layer[2].addEventListener('mouseover', cssIcon);
layer[3].addEventListener('mouseover', javascriptIcon);
layer[4].addEventListener('mouseover', bootstrapIcon);
layer[5].addEventListener('mouseover', typescriptIcon);
layer[6].addEventListener('mouseover', angularjsIcon);
layer[7].addEventListener('mouseover', springIcon);
layer[8].addEventListener('mouseover', mysqlIcon);
layer[9].addEventListener('mouseover', oraclesqlIcon);
layer[10].addEventListener('mouseover', pythonIcon);


// Clicking on Contact Mail
mail.addEventListener('click', () => {
    alert('To do later');
});

// Mouseover Contact
