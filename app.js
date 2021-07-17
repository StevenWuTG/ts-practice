var printResult = true;
var resultPhrase = 'Total is: ';
function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult === true) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 5;
var number2 = 2.8;
add(number1, number2, printResult, resultPhrase);
