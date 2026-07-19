const button = document.getElementById("giftButton");
const letter = document.getElementById("letter");

const popup = document.getElementById("birthdayPopup");
const startGift = document.getElementById("startGift");

button.addEventListener("click", function () {

    button.style.display = "none";

    popup.style.display = "flex";

});

startGift.addEventListener("click", function () {

    popup.style.display = "none";

    document.getElementById("bgMusic").play();

    document.getElementById("envelope").style.display = "flex";

    confetti({
        particleCount: 180,
        spread: 100,
        origin: { y: 0.6 }
    });

});

const hearts = document.querySelector(".hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left = Math.random()*100 + "vw";

    heart.style.animationDuration = (3 + Math.random()*3) + "s";

    hearts.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);

}

setInterval(createHeart,500);

const balloons = document.querySelector(".balloons");

const colors = [
    "#ff4d94",
    "#ff8ac6",
    "#ffb6d9",
    "#ffd166",
    "#8ec5ff"
];

function createBalloon(){

    const balloon = document.createElement("div");

    balloon.classList.add("balloon");

    balloon.style.left = Math.random()*100+"vw";

    balloon.style.background =
    colors[Math.floor(Math.random()*colors.length)];

    balloon.style.animationDuration =
    (7+Math.random()*5)+"s";

    balloons.appendChild(balloon);

    setTimeout(()=>{
        balloon.remove();
    },12000);

}

setInterval(createBalloon,1800);
const envelope = document.getElementById("envelope");

envelope.addEventListener("click", function () {

    envelope.style.transform = "scale(1.2)";
    envelope.style.transition = "0.25s";

    setTimeout(() => {

        envelope.style.display = "none";

        letter.style.display = "block";

    }, 250);

});
const lastBtn = document.getElementById("lastMessageBtn");
const lastMsg = document.getElementById("lastMessage");

lastBtn.addEventListener("click", function(){

    lastMsg.style.display = "block";

    lastBtn.style.display = "none";

});
const stars = document.querySelector(".stars");

function createStar(){

    const star = document.createElement("div");

    star.classList.add("star");

    star.innerHTML = "✨";

    star.style.left = Math.random()*100+"vw";

    star.style.top = Math.random()*100+"vh";

    star.style.animationDuration =
    (1+Math.random()*2)+"s";

    stars.appendChild(star);

    setTimeout(()=>{
        star.remove();
    },3000);

}

setInterval(createStar,300);

setInterval(createStar,300);

const reasons = [
    "🤍 Aku suka senyum kamu.",
    "🤍 Aku suka cara kamu ngobrol.",
    "🤍 Aku suka kalau kamu ketawa.",
    "🤍 Aku suka semua hal kecil tentang kamu.",
    "🤍 Pokoknya aku suka kamu.",
    "❤️ I love you."
];

let reasonIndex = 0;

const reasonBtn = document.getElementById("reasonBtn");
const reasonText = document.getElementById("reasonText");

reasonBtn.addEventListener("click", function () {

    if (reasonIndex < reasons.length) {

        reasonText.innerHTML = reasons[reasonIndex];

        reasonIndex++;

    } else {

        reasonBtn.innerHTML = "🤍 That's All";
        reasonBtn.disabled = true;

    }

});
    

