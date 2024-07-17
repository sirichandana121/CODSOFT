let output = "";

function display(value) {
  output += value;
  document.getElementById("result").value = output;
}

function clearScreen() {
  output = "";
  document.getElementById("result").value = output;
}

function calculate() {
  try {
    let result = eval(output);
    output = result.toString();
    document.getElementById("result").value = output;
  } catch (error) {
    alert("Invalid Expression!");
    output = "";
    document.getElementById("result").value = output;
  }
}