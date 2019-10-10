function noforty() {
    var styles =[ "jazz", "Blues"];
    alert(styles);
    styles.push("Rock-n-Roll");
    alert(styles);
    var stylesmiddle = ((styles.length-1)/2);
    styles[stylesmiddle] = "Classics";
    alert(styles);
    styles.shift();
    alert(styles);
    styles.unshift("Rap", "Reggae");
    alert (styles);
}