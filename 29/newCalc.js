function Calculator () {
    this.read = function (){
      this.x = parseFloat ( prompt ('enter a number'));
      this.y = parseFloat ( prompt ('enter another number'));
    };

    this.sum = function (){
       alert (this.x + this.y);
    };

    this.mul = function () {
        alert (this.x * this.y);
    };

};

var calculator = new Calculator;
calculator.read();
calculator.sum();
calculator.mul();