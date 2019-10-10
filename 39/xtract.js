function extractCurrencyValue(money){
    var currencyValue = money.substr(1, money.length);
    return currencyValue;
}

extractCurrencyValue("$400");

function  truncateText(userText, maxlength){
    var newText = userText.substr(0,maxlength);
    return newText.concat("...");
}