function findTags(str) {
 return str.match(/#\S+/g);
}

function removeHash(str) {
    var arr = [];
    arr = findTags(str);
for( i = 0; i < arr.length; i ++) {
   arr[i] = arr[i].replaceAll('#', '');
}
return arr;
}

function verify(input, goal) {
    input = Array.isArray(input) ? input.join(', ') : input;
    if (input == goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(removeHash('W 2020 #opanujeJS'), 'opanujeJS');
  verify(removeHash('Za chwilę dodam #opanujeJS !'), 'opanujeJS');
  verify(removeHash('Lubię tagować #yolo #love #happy #h3cker'), 'yolo, love, happy, h3cker'); 