var yellow = document.querySelectorAll('.yellow');
for (let i = 0; i < yellow.length; i++) {
    (yellow[i].style.backgroundColor = "yellow");
}

var blue = document.querySelectorAll('.blue');
for (let i = 0; i < blue.length; i++) {
  blue[i].style.backgroundColor = "red";
}

var para = document.createElement("p");
var node = document.createTextNode("This is new.");
para.appendChild(node);

var element = document.getElementById("div1");
element.appendChild(para);