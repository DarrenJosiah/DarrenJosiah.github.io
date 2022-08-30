let container = document.querySelector('.space-container');
let layer = document.querySelectorAll('.space-layer');
let drone = document.querySelector('.drone');

// Event Listener
container.addEventListener('mousemove', (e) => {
    // DYNAMIC PAGE
    let X = e.pageX;
    let Y = e.pageY;
    
    layer[0].style.transform = 'translate(' + X/100 + 'px, ' + Y/100 + 'px)';
    layer[1].style.transform = 'translate(' + X/100*-2 + 'px, ' + Y/100*-2 + 'px)';
    layer[2].style.transform = 'translate(' + X/100*-4 + 'px, ' + Y/100*-4 + 'px)';
    layer[3].style.transform = 'translate(' + X/100*-6 + 'px, ' + Y/100*-6 + 'px)';
    layer[4].style.transform = 'translate(' + X/100*-8 + 'px, ' + Y/100*-8 + 'px)';
    layer[5].style.transform = 'translate(' + X/100*-10 + 'px, ' + Y/100*-10 + 'px)';
    layer[6].style.transform = 'translate(' + X/100*-12 + 'px, ' + Y/100*-12 + 'px)';

    // MOUSE DRONE
    drone.style.left = X + 'px';
    drone.style.top = Y + 'px';

});
