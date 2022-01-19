function getAnagrams(word, possibleAnagrams) {
    let example = word.length;
    let str1 = word.split('').sort().join('');
    let final = [];
    for (i = 0; i < possibleAnagrams.length; i++) {
        let checkL = possibleAnagrams[i].length;
        if(example == checkL) {
            let str2 = possibleAnagrams[i].split('').sort().join('');
            if(str1 === str2) {
                final.push(possibleAnagrams[i]);
            }
        }
    } return final;
}

function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

  verify(getAnagrams("przeprogramowani", ["orperzpinawomarg", "swag", "graprzewanipromo", "orperzpwaniprom", "siema"]), "orperzpinawomarg, graprzewanipromo");
  verify(getAnagrams("siema", ["hej", "witam", "dzień dobry", "emasi"]), "emasi");

