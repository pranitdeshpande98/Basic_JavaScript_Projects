const colors = ["green", "red", "rgba(133, 122, 200", "#f15025"];
const buttonvariable = document.getElementById("btn");

const color = document.querySelector(".color");

buttonvariable.addEventListener("click", function () {
  const randomnumber = getrandomnumber();

  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
});

function getrandomnumber() {
  return Math.floor(Math.random() * colors.length);
}
