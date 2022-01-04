function thing(box) {
   if(box[21, 22, 23, 43, 44, 45].includes(" ")) {
        return false;
    } else return true;
}

function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

verify(thing(`*****
              *   * o
              *   *
              *****`), false);
 
verify(thing(`*****
              * o *
              *   *
              *****`), true);
 
verify(thing(`*****
              *   *  
              *   *
              *****`), false);              