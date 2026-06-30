const button = document.querySelector("button");
const mektup = document.getElementById("mektup");

button.addEventListener("click", () => {

    mektup.style.display = "block";

    button.style.display = "none";

});
