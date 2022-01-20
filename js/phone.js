document.getElementById("type-num").addEventListener("click", function () {
  const input = event.target.innerText;
  const showInput = document.getElementById("show-number");
  // const delInput = document.getElementById("back=arrow");
  const previousInput = showInput.value;
    
  if (isNaN(input)) {
    if (input == "*") {
        const newInput = previousInput + input;
        showInput.value = newInput;
      }
    else if (input == "#") {
        const newInput = previousInput + input;
        showInput.value = newInput;
    }
  }
  else {
    const newInput = previousInput + input;
    showInput.value = newInput;
    }
});
