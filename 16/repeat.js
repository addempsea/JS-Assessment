var i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

var input = prompt('please enter a number greater than 100');
while (true) {
    if (input >= 100) {
        break;
    }
    alert ('please input another number');
}
