var num = prompt('enter a number');

if (num > 1) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            alert("not prime");
            break;
        } else {
            alert ('is prime');
        }
    }
} else {
    alert ('please enter a number greater than one');
}
