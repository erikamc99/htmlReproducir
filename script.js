document.addEventListener("DOMContentLoaded", () => {
    let divs = document.querySelectorAll("div");
    let divIndex = 0;

    function showNextDiv() {
        if (divIndex < divs.length) {
            divs.forEach((div, index) => {
                div.style.display = index === divIndex ? "flex" : "none";
            });
            divIndex++;
            setTimeout(showNextDiv, 1000);
        } else {
            divs.forEach(div => {
                div.style.display = "flex";
            });
        }
    }
    showNextDiv();
});