let hrs = document.querySelector("#hrs");
let min = document.querySelector("#min");
let sec = document.querySelector("#sec");
setInterval(() => {
    let currentDate = new Date();
    hrs.innerHTML = (currentDate.getHours() < 10 ? "0" : "") + currentDate.getHours();
    min.innerHTML = (currentDate.getMinutes() < 10 ? "0" : "") + currentDate.getMinutes();
    sec.innerHTML = (currentDate.getSeconds() < 10 ? "0" : "") + currentDate.getSeconds();
}, 1000);