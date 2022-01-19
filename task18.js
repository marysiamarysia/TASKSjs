function checkISBN(isbn)  {
    let word1 = isbn.replace(/[^a-zA-Z0-9 ]/g, '');
    let test = word1.split('');
    let j = 0;
    let result = 0;
    for(i = 10; i > 0; i--) {
        if (test[j] === 'X' || test[j] === 'x'){
            test[j] = 10;
        }
            result = result + test[j] * i;
            j++;
    }
if(result % 11 === 0) {
    return true;
} else return false;
}

function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(checkISBN("85-359-0277-5"), true);
  verify(checkISBN("3-04-013311-X"), true);
  verify(checkISBN("8535902775"), true);
  verify(checkISBN("99921-58-10-3"), false);
  verify(checkISBN("9992158103"), false);