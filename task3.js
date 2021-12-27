function factory() {
        factory.quote = 'Cool!'
        return 'Beep';
    };
  
  
  function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
    console.log(factory());
    console.log(factory.quote + ' ' + 'Cool!');
    verify(factory.quote, 'Cool!');
