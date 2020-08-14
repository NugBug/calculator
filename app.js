let output = document.querySelector("#output");
let buttons = document.querySelectorAll(".button");

function adjustFontSize() {
  if (output.innerHTML.length <= 9) {
    output.style.fontSize = "70px";
  } else if (output.innerHTML.length > 9) {
    let fontSize = 70;

    for (let i = 0; i < output.innerHTML.length - 9; i++) {
      fontSize -= 7;
      if (output.style.fontSize === "35px") {
        return;
      }
      output.style.fontSize = fontSize + "px";
    }
  }
}

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    let value = e.target.innerText;
    if (value === "AC") {
      output.innerHTML = "";
    } else if (value === "=") {
      if (output.innerHTML === "") {
        output.innerHTML = "Please Enter a Value";
      } else {
        output.innerHTML = eval(output.innerHTML);
      }
    } else {
      output.innerHTML += value;
    }

    adjustFontSize();
  });
});
