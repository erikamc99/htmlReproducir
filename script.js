document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("body > div").forEach(div => {
        div.addEventListener("click", () => {
            div.style.opacity = div.style.opacity === "0" ? "1" : "0";
        });
    });
});