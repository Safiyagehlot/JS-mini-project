const decreaseEl = document.getElementById("decEl");
const resetEl = document.getElementById("resEl");
const increaseEl = document.getElementById("incEl");
const resultEl = document.getElementById("resultEl");

let currslt = 0;

function decreaseInt() {
  currslt--;
  resultEl.innerHTML = currslt;
  if (currslt <= 0) {
    resultEl.style.color = "red";
  }
  if (currslt == 0) {
    resultEl.style.color = "black";
  }
}

function resetInt() {
  currslt = 0;
  resultEl.innerHTML = currslt;
  resultEl.style.color = "black";
}

function increaseInt() {
  currslt++;
  resultEl.innerHTML = currslt;

  if (currslt >= 0) {
    resultEl.style.color = "green";
  }
  if (currslt == 0) {
    resultEl.style.color = "black";
  }
}

decreaseEl.addEventListener("click", decreaseInt);
resetEl.addEventListener("click", resetInt);
increaseEl.addEventListener("click", increaseInt);
