function noFortyone() {
  sumInput();
}

function sumInput() {
  var inputSum = prompt("Please input a number");
  if (isNaN(inputSum) || inputSum == "" || inputSum === null) {
    sumNumbers(allInput);
  } else {
    allInput.push(inputSum);
    sumInput();
  }
}

function sumNumbers(inputToSum) {
  var noLen = inputToSum.length;
  var summedNumber = 0;
  for (i = 0; i < noLen; i++) {
    summedNumber += parseFloat(inputToSum[i]);
  }

  alert("The sum of all the numbers is ".concat(summedNumber));
}

//noFortyone();
