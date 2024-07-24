const display = document.getElementById("display");
const answer = document.getElementById("Answer");
const cont = document.querySelector(".container");
const dcont = document.querySelector(".keys"); 
const th = document.querySelector("#theme"); 

function appendToDisplay(input) {
  display.value += input;
}

function Remove() { 
  display.value = display.value.slice(0, -1);
}

function clearDisplay() {
  display.value = "";
  answer.value = "";
}

function calculate() {
  try {
    answer.value = eval(display.value);
  } catch (error) {
    answer.value = "Error";
  }
}
