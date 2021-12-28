function withPrefix(string) {
    return string;
}

const greet = withPrefix('Witaj, ');
const good = withPrefix('Żegnaj, ');

function greeting(name) {
return greet + name;
}

function goodbye(name) {
    return good + name;
    }

console.log(greeting('Janek')); // => 'Witaj, Janek'
console.log(greeting('Tomek')); // => 'Witaj, Tomek'

console.log(goodbye('Janek')); // => 'Żegnaj, Janek'
console.log(goodbye('Tomek')); // => 'Żegnaj, Tomek'


function withPrefix1(string) {
    console.log(typeof string);
}

withPrefix1(greeting('Janek'));

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  try {
    verify(greeting('Marta'), 'Witaj, Marta');
    verify(greeting('Janek'), 'Witaj, Jan ek');
  } catch {
    console.log('Niestety :(');
  }
