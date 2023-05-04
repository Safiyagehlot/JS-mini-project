const btnEl = document.getElementById("btnEl");
const bodyEl = document.querySelector("body");

const clr = ["blue", "green", "red", "yellow", "black", "violet"];

function getColor() {
  const change = parseInt(Math.random() * clr.length);
  bodyEl.style.background = clr[change];
}

btnEl.addEventListener("click", getColor);
