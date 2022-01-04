function isogram(str){
    var str1 = str.toLowerCase();
    return str1.split('').filter((item, pos, arr)=> arr.indexOf(item) == pos).length == str1.length;
   }

   function verify(input, goal) {
    if (input === goal) {
      console.log('Gratulacje!');
    } else {
      console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
  }
  
  verify(isogram('izogram'), true);
  verify(isogram('Przeprogramowani'), false);
  verify(isogram('SprawdzAm'), false);
