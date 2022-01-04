greetings('hacker'); // => 'H4Ck3r'
greetings('Control Is An Illusion'); // => 'C0NtR0L 15 4N 1lLu510n'
greetings('Saving The World'); // => 'S4V1Ng tHe w0rLd'

function greetings(str) {
var str1 = str.toLowerCase();
var a  = 'a', e = 'e', i = 'i', o = 'o', s = 's';
const replaceA = '4', replaceE = '3', replaceI = '1', replaceO = '0', replaceS = '5';
var result = str1.replaceAll(a, replaceA);
var result1 = result.replaceAll(e, replaceE);
var result2 = result1.replaceAll(i, replaceI);
var result3 = result2.replaceAll(o, replaceO);
var result4 = result3.replaceAll(s, replaceS);

var final = [];
for(i = 0; i < result4.length; i++) {
    if(i % 2 == 0) {
        final[i] = result4[i].toUpperCase();
    } else final[i] = result4[i];
}
let res = final.join("");
return res;
}

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(greetings('hacker'), 'H4Ck3r');
  verify(greetings('Control Is An Illusion'), 'C0NtR0L 15 4N 1lLu510n');
  verify(greetings('Saving The World'), '54V1Ng tH3 w0rLd');