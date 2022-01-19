function checkBrackets(input) {

    let brackets = "[]{}()";
    let stack = [];
  
    for(let bracket of input) {
      let bracketsIndex = brackets.indexOf(bracket);
        //console.log(bracketsIndex);
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
        console.log(stack);
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return true;
  }
  
  function verify(input, goal) {
    input = Array.isArray(input) ? `[${input.join(', ')}]` : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  checkBrackets("[{()}]");