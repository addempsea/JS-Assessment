var o = document.querySelectorAll("input");
var j = document.querySelector("#uu");

function f() {
  for (let a = 0; a < o.length; a++) {
    j.innerHTML += o[a].value + "<br>";
  }
  
}

btn.addEventListener("click", f);