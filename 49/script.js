var btn1 = document.querySelector("#btn");
var btn2 = document.querySelector("#btn2");

var header = document.createElement("h1");
header.innerHTML = "KDTEMP'S BLOG";

var header__display = document.getElementsByTagName("body")[0].appendChild(header);
header__display.hidden = true;

var header__mini = document.createElement("h4");
header__mini.innerHTML = "War is peace as Freedom is slavery";

var header__mini__display = document.getElementsByTagName("body")[0].appendChild(header__mini, header);
header__mini__display.hidden = true;

var content__1 = document.createElement("p");
content__1.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var content__1__display = document.getElementsByTagName("body")[0].appendChild(content__1, header);
content__1__display.hidden = true;

var content__2 = document.createElement("p");
content__2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var content__2__display = document.getElementsByTagName("body")[0].appendChild(content__2, header);
content__2__display.hidden = true;

var header__2 = document.createElement("h3");
header__2.innerHTML = "ADMIN AREA";

var header__display__2 = document.getElementsByTagName("body")[0].appendChild(header__2, header);
header__display__2.hidden = true;

var admin__input = document.createElement("textarea");
var admin__button = document.createElement("input");
var att = document.createAttribute("type");
var att2 = document.createAttribute("value");
var att3 = document.createAttribute("id");
att.value = "button";
att2.value = "click to add a new post";
att3.value = "btn3";
admin__button.setAttributeNode(att);
admin__button.setAttributeNode(att2);
admin__button.setAttributeNode(att3);

var admin__input__display = document.getElementsByTagName("body")[0].appendChild(admin__input, header);
var admin__button__display = document.getElementsByTagName("body")[0].appendChild(admin__button, header);

admin__input__display.hidden = true;
admin__button__display.hidden = true;

var link = document.createElement("a");
link.innerHTML = "link to my webpage";
var att4 = document.createAttribute("href");
att4.value = "http://steemit.com/@addempsea";
link.setAttributeNode(att4);

var link__display = document.getElementsByTagName("body")[0].appendChild(link, header);

link__display.hidden = true;

btn.addEventListener("click", guest);
function guest() {
  header.hidden = false;
  content__1__display.hidden = false;
  content__2__display.hidden = false;
  header__mini__display.hidden = false;
  btn1.hidden = true;
  btn2.hidden = true;
}

btn2.addEventListener("click", admin);

function admin() {
  var password = prompt("please enter a password");
  switch (password) {
    case "semola":
      header.hidden = false;
      header__2.hidden = false;
      content__1__display.hidden = false;
      content__2__display.hidden = false;
      admin__input__display.hidden = false;
      admin__button__display.hidden = false;
      link__display.hidden = false;
      header__mini__display.hidden = false;
      btn1.hidden = true;
      btn2.hidden = true;
      break;
    default:
      alert("enter the right password");
      break;
  }
}

btn3.addEventListener("click", add);

function add() {
  content__2.innerHTML += "<br>" + "<br>" + admin__input.value;
  admin__input.value = "";
}
