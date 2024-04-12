function addToDisplay(value) {
  document.getElementById('result').value += value;
}

function clearDisplay() {
  document.getElementById('result').value = '';
}

function calculate() {
  var result = document.getElementById('result').value;
  var finalResult = eval(result);
  document.getElementById('result').value = finalResult;
}
