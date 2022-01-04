function rule(...theArgs) {
      var finalArr = [];
    theArgs.forEach((arg, index) => {
        finalArr.push(...arg); 
    })
    return finalArr;
  }
  


  function verify(input, goal) {
    if (JSON.stringify(input) === JSON.stringify(goal)) {
      console.log("Gratulacje!");
    } else {
      console.log(`Niestety, oczekiwano - ${JSON.stringify(goal)}, otrzymano - ${JSON.stringify(input)}`);
    }
  }
  verify(rule([1, 5], [6, 1]), [1,5,6,1]);
  verify(rule([1], [2], [3], [4], [5], [6]), [1,2,3,4,5,6]);