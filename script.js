let hourHand = document.querySelector(".hour");
let minHand = document.querySelector(".minute");
let secHand = document.querySelector(".second");

let updateTime = () =>
{
    let date = new Date(),
    secDeg = (date.getSeconds() / 60) * 360,
    minDeg = (date.getMinutes() / 60) * 360,
    hourDeg = (date.getHours() / 12) * 360;

    secHand.style.transform = `rotate(${secDeg}deg)`;
    minHand.style.transform = `rotate(${minDeg}deg)`;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
}

updateTime();

setInterval(updateTime, 1000);