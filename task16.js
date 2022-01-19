function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

function countWords(string) {
    let str = string.toLowerCase();
    let convert = str.replace(/[^a-zA-Z0-9 ]/g, '');
    let strArr = convert.split(' ');
    //console.log(strArr);

    for (i = 0; i < strArr.length; i++) {
    let amount = 0;
        for(j = 0; j < strArr.length; j++) {
            if (strArr[i] === strArr[j]) {
                amount++;
            }
        } 
        let unique = Array.from(new Set(strArr));

        console.log(strArr[i] + ': ' + amount);

        
    }
}


function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }


//countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda frajda frajda frajda")

verify(JSON.stringify(countWords("Nauka JavaScript z kursem Opanuj JavaScript to frajda")), JSON.stringify({
    nauka: 1,
    javascript: 2,
    z: 1,
    kursem: 1,
    opanuj: 1,
    to: 1,
    frajda: 1
  }));
  verify(JSON.stringify(countWords("Tanie wino jest dobre, bo jest tanie i dobre")), JSON.stringify({
    tanie: 2,
    wino: 1,
    jest: 2,
    dobre: 2,
    bo: 1,
    i: 1,
  }));