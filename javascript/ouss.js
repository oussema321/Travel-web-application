const button = document.querySelector("button");
const h2El = document.querySelector("h2");
const bgEl = document.querySelector("section");
button.addEventListener("click", () => {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();
    bgEl.style.backgroundColor = color;
    h2El.innerText = color;
});

function verif() {
    var ch = f.T2.value;
    ch = ch.toUpperCase();
    if (ch.length == 0) {
        alert("saisir votre nom");
        return false;
    }
    for (i = 0; i < ch.length; i++) {
        if (ch.charAt(i) < 'A' || ch.charAt(i) > 'Z') {
            alert("nom invalide");
            return false;
        }
    }
    if (f.T3.value.length == 0) {
        alert("sasir votre mail");
        return false;
    } else if (f.T3.value.indexOf("@") == -1) {
        alert("e-mail invalide");
        return false;
    } else if (f.T3.value.indexOf(".") == -1) {
        alert("e-mail invalide");
        return false;
    }
    if (isNaN(f.T1.value)) {
        alert("numero invalid 1");
        return false;
    } else if (f.T1.value.length != 8) {
        alert("numero invalid 2");
        return false;
    }


}

let countDownDate = new Date("Dec 31, 2021 23:59:59").getTime();

let counter = setInterval(() => {
    let dateNow = new Date().getTime();

    let dateDiff = countDownDate - dateNow;

    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDiff < 0) {
        clearInterval(counter);
    }
}, 1000);



let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false;

window.onscroll = function() {
    if (window.scrollY >= statsSection.offsetTop - 30) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}