function ago(today, x) {
  let u = today.getTime() - x * 24000 * 3600;
  return new Date(u);
}

let date = new Date(2012, 0, 2);
console.log(ago(date, 6));