function length(array) {
    let num = 0;
    for( i = 0; ; i++) {
         if (i in array) {
            num++;
        } else {break}
    } 
return num;
}

function filter(array, el) {
    let arr = [];
    let count = 0;

    for( i = 0; i < array.length; i++) {
        if (el(array[i])) {
            if (!(count in arr)) {
                arr[count] = array[i];
                count++;
            }
        }
    }
return arr;
}

function verify(input, goal) {
    input = Array.isArray(input) ? input.join(',') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(filter([1, 2, 3, 4], (el) => el % 2 === 0), [2, 4]);
  verify(filter([1, 2, 3, 4], (el) => el % 2 !== 0), [1, 3]);
  verify(length([1, 2, 3, 4]), 4);
  verify(length([]), 0);