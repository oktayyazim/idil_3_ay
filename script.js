const giris=document.getElementById("giris");
const acBtn=document.getElementById("acBtn");

document.querySelector(".hero").style.display="none";
const button = document.querySelector("button");
const mektup = document.getElementById("mektup");
const kalpler = document.getElementById("kalpler");

button.addEventListener("click", () => {

    mektup.style.display = "block";
    button.style.display = "none";

    for(let i=0;i<40;i++){

        let kalp=document.createElement("div");

        kalp.className="kalp";

        kalp.innerHTML="💖";

        kalp.style.left=Math.random()*100+"vw";

        kalp.style.animationDelay=Math.random()*2+"s";

        kalpler.appendChild(kalp);

        setTimeout(()=>{
            kalp.remove();
        },4000);

    }

});

acBtn.addEventListener("click", () => {

    giris.style.display = "none";

    document.querySelector(".hero").style.display = "block";

});
