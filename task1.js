function reverseString(string) {
    var strArr = string.split("");  //Split the string into array
    var reverseStrArray = strArr.reverse(); // Reverse the array
    var reversedString = reverseStrArray.join(""); // Change array into string 
    document.body.textContent = reversedString;
    return reversedString;
}
function verify(string, check) {
    if (string === check) {
        document.body.textContent = 'Congratulations! Function is working. Expected - ' + check + ', received - ' + string;
    } else {
        document.body.textContent = 'Result is wrong, expected - ' + check + ', received - ' + string;
    }
}
function test(string, check) {
document.body.textContent = reverseString(string);
verify(reverseString(string), check);
}

