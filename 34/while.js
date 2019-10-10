function readNumber() {
    var number = prompt("Please input a number");
    if (isNaN(number)){
        readNumber();
    }else{
      alert("Good work");
    }
    
}
readNumber();