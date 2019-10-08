var userName = prompt("who's there?");
userName = userName.toLowerCase();
if (userName == "admin") {
  let password = prompt("please input your password");
  if (password == "themaster") {
    alert("welcome Admin!");
  } else if (password == null) {
    alert("cancelled");
  } else alert("wrong password");
} else if (userName == null) {
  alert("cancelled");
} else alert("i don't know you");
