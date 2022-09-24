let languagesInteractiveContainer = document.querySelector('.languages-interactive-container');
let layer = document.querySelectorAll('.language-layer');

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
    layer[7].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';w
    layer[8].style.transform = 'translate(' + X/200*-4 + 'px, ' + Y/200*-4 + 'px';
    layer[9].style.transform = 'translate(' + X/200*-2 + 'px, ' + Y/200*-2 + 'px';
    layer[10].style.transform = 'translate(' + X/200*-6 + 'px, ' + Y/200*-6 + 'px';
    layer[11].style.transform = 'translate(' + X/500 + 'px, ' + Y/500 + 'px';
    // Use translate instead of transform. If not it'll override
});