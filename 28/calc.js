var calculator = {
    read (){
      this.x = parseFloat ( prompt ('enter a number'));
      this.y = parseFloat ( prompt ('enter another number'));
    },

    sum (){
       alert (this.x + this.y);
    },

    mul () {
        alert (this.x * this.y);
    }

};

calculator.read();
calculator.sum();
calculator.mul();
