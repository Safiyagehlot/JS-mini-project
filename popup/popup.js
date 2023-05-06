const openEl = document.getElementById("openEl");
const closeEl = document.getElementById("closeEl");
const boxEl = document.getElementById("boxEl");

boxEl.classList.add("hidden");

function openbox(e) {
  e.preventDefault();
  boxEl.classList.remove("hidden");
  openEl.classList.add("hidden");
}

function closebox(e) {
  e.preventDefault();
  boxEl.classList.add("hidden");
  openEl.classList.remove("hidden");
}

openEl.addEventListener("click", openbox);
closeEl.addEventListener("click", closebox);
