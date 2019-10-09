function isEmpty(obj) {
  var keys = Object.values(obj);
  if (keys.length == 0) return true;
  else return false;
}
