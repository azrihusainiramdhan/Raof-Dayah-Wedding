const openBtn = document.getElementById("openBtn");

const openingScreen = document.getElementById("opening-screen");

const hero = document.getElementById("hero");

const bgMusic = document.getElementById("bgMusic");



if(openBtn){


openBtn.addEventListener("click",()=>{


if(bgMusic){

bgMusic.volume = 0.5;

bgMusic.play();

}



openingScreen.style.transition="opacity .8s ease";

openingScreen.style.opacity="0";



setTimeout(()=>{


openingScreen.style.display="none";


hero.scrollIntoView({

behavior:"smooth"

});


},800);



});


}

// ==========================
// COUNTDOWN
// ==========================

const weddingDate = new Date("October 10, 2026 11:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const distance = weddingDate - now;

    document.getElementById("days").innerHTML =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerHTML =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerHTML =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerHTML =
        Math.floor((distance % (1000 * 60)) / 1000);

},1000);