document.getElementById("type-pin").addEventListener("click", function () {
  var input = event.target.innerText;
  var showInput = document.getElementById("show-number");
  var delInput = document.getElementById("back=arrow");
    
  if (isNaN(input)) {
    if (input == "*") {
        var previousInput = showInput.value;
        var newInput = previousInput + input;
        showInput.value = newInput;
      }
    else if (input == "#") {
        var previousInput = showInput.value;
        var newInput = previousInput + input;
        showInput.value = newInput;
    }
  }
  else {
    var previousInput = showInput.value;
    var newInput = previousInput + input;
    showInput.value = newInput;
    }
});
