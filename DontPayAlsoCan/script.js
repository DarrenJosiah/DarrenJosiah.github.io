const titleBefore = document.getElementById('titleBefore');
const titleAfter = document.getElementById('titleAfter');
const btn = document.getElementById('btn');
const originalAmount = document.getElementById('originalAmount');
const totalAmount = document.getElementById('totalAmount');
const form = document.getElementById('form');

btn.addEventListener('click', function() {
    // document.getElementById("demo").innerHTML = "Hello World";
    if (!originalAmount.value) {
        originalAmount.style.outline = "1px solid red";
    } else {
        console.log("null bro");
        originalAmount.style.outline = null;
        newAmount = parseFloat(originalAmount.value*1.1*1.08).toFixed(3);
        console.log("newAmount " + newAmount);

        totalAmount.innerHTML = `$`+ newAmount;
        btn.style.display = "none";
        form.style.display = "none";
        titleBefore.style.display = "none";
        titleAfter.style.display = "block";
    }
});