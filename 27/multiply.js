function multiplyNumeric(menu) {
  for (let key in menu) {
    if (typeof menu[key] == 'number') {
      menu[key] *= 2;
    }
  }
}

menu = {
  width: 400,
  height: 600,
  title: "My menu"
};

multiplyNumeric(menu);