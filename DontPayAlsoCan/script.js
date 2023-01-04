const titleBefore = document.getElementById('titleBefore');
const titleAfter = document.getElementById('titleAfter');
const btn = document.getElementById('btn');
const originalAmount = document.getElementById('originalAmount');
const totalAmount = document.getElementById('totalAmount');
const form = document.getElementById('form');

originalAmount.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        btn.click();
    }
});

btn.addEventListener('click', function() {
    if (!originalAmount.value) {
        originalAmount.style.outline = "1px solid red";
    } else {
        originalAmount.style.outline = null;
        newAmount = parseFloat(originalAmount.value*1.1*1.08).toFixed(3);

        totalAmount.innerHTML = `$`+ newAmount;
        btn.style.display = "none";
        form.style.display = "none";
        titleBefore.style.display = "none";
        titleAfter.style.display = "block";
    }
});
