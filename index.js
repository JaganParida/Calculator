let btns = document.querySelectorAll("button");
let display = document.querySelector("input");

display.style.textAlign = "right";

for (let btn of btns) {
  btn.addEventListener("click", function () {
    let value = btn.innerText;

    if (value === "AC") {
      display.value = "";
    } else if (value === "DE") {
      display.value = display.value.slice(0, -1);
    } else if (value === "=") {
      calculateResult();
    } else if (value === "%") {
      display.value = eval(display.value) / 100;
    } else {
      display.value += btn.value;
    }
  });
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}

document.addEventListener("keydown", function (event) {
  let key = event.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculateResult();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (key === "Escape") {
    display.value = "";
  }
});
