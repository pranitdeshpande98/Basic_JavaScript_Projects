let count = 0;

const countervaluevariable = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const identifier = e.currentTarget.classList;
    if (identifier.contains("decrease")) {
      count--;
    } else if (identifier.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    countervaluevariable.textContent = count;
  });
});
