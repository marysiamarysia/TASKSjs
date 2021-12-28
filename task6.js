function applyPredicate(numbers1, element) {
    var arr = [];
    for( let i in numbers1) {
        if (element(numbers1[i])) {
                arr.push(numbers1[i]);
        }
    }
    return arr;
}

console.log(verify(applyPredicate([1, 2, 3], element => element > 2), [3]));
console.log(verify(applyPredicate(['a', 'b', 'c'], element => ['b', 'c'].includes(element)), ['b', 'c']));
console.log(verify(applyPredicate(['x', 'y'], element => element === 'z'), ['x', 'y']));

function verify(input, goal) {
    var inputAsString = JSON.stringify(input);
    var goalAsString = JSON.stringify(goal);
  
    if (inputAsString === goalAsString) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goalAsString}, otrzymano - ${inputAsString}`);
    }
    return 'Input: ' + input + ', goal: ' + goal;
  }
  
