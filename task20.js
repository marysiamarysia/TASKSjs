function flattenArray(deepArray) {
    let final = [];
    let test1 = [];
    for(i = 0; i < deepArray.length; i++) {
            test1 = deepArray[i];
            if(!Array.isArray(deepArray[i])) {
                final.push(deepArray[i]);
            } else
            for(j = 0; j < test1.length; j++) {
                final.push(test1[j]);
            }
        }
    let arr = final.filter(Number);
    let unique = [...new Set(arr)];
    return unique;
 }
 
 function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }

verify(flattenArray([4, [3, 2, undefined, 1], [1, 4, null, 5]]), "4, 3, 2, 1, 5");
verify(flattenArray([null, [1, 2, 3], [null, undefined]]), "1, 2, 3");
