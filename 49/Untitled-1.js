var btn1 = document.querySelector("#btn");
var btn2 = document.querySelector("#btn2");

var header = document.createElement("h1");
header.innerHTML = 'KDTEMP\'S BLOG';

var header__display = document.getElementsByTagName("body")[0].appendChild(header);
header__display.hidden = true;

var content__1 = document.createElement("p");
content__1.innerHTML =  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

var content__1__display = document.getElementsByTagName("body")[0].appendChild(content__1, header);

var content__2 = document.createElement("p");
content__2.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
var content__2__display = document.getElementsByTagName("body")[0].appendChild(content__2, header);

var header__2 = document.createElement("h2");
header__2.innerHTML = 'ADMIN AREA';
var header__display__2 = document.getElementsByTagName("body")[0].appendChild(header__2, header);

var admin__input = document.createElement("textarea");
var admin__button = document.createElement("input");
var att = document.createAttribute("type");
var att2 = document.createAttribute("value");
var att3 = document.createAttribute("id");
att.value = "button";
att2.value = 'add blog post';
att3.value = 'btn3';
admin__button.setAttributeNode(att);
admin__button.setAttributeNode(att2);
admin__button.setAttributeNode(att3);

var admin__input__display = document.getElementsByTagName("body")[0].appendChild(admin__input, header);
var admin__button__display = document.getElementsByTagName("body")[0].appendChild(admin__button, header);

var link = document.createElement("a");
link.innerHTML = 'link to my webpage';
var att4 = document.createAttribute("href");
att4.value = 'http://steemit.com/@addempsea';
link.setAttributeNode(att4);
var link__display = document.getElementsByTagName("body")[0].appendChild(link, header);

