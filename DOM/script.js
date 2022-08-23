// function init() {
//   const a = document.querySelector("p");
//   const img = document.querySelectorAll("img");
//   const h = document.querySelector("h2");
//   console.log(a);
//   console.log(img);
//   console.dir(h);
//   console.log(h.textContent);
//   h.textContent = "tata";
//   console.log(h.textContent);
// }

// document.addEventListener("DOMContentLoaded", init);

//Classes!

const pic = document.querySelector(".nice");
console.log(pic);
pic.classList.add("open");
pic.classList.remove("nice");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("nice");
}
pic.addEventListener("click", toggleRound);
