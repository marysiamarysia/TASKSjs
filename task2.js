function validate(pass) {
    var check = pass.length;
    var result;
    if (check > 3 && check < 10 && (pass.includes("!") || pass.includes("@") || pass.includes("#")) && /\d/.test(pass)) {
       // document.body.textContent = check + ' Proper password' + pass;
       result = true;
    } else {
       // document.body.textContent = 'Wrong password ' + pass;
       result = false;
    }
    return result;
}

function verify(string, check) {
    if (string === check) {
        document.body.textContent = 'Congratulations! Function is working. Expected - ' + check + ', received - ' + string;
    } else {
        document.body.textContent = 'Result is wrong, expected - ' + check + ', received - ' + string;
    }
}
function test1(string, check) {
document.body.textContent = validate(string);
verify(validate(string), check);
}