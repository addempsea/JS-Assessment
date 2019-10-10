let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: glasses
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000,
  __proto__: bed
};

// Both pockets.glasses and head.glasses will be returned at the same time
