function pangrams(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return 0;
     }
    }
   
   return 1;
 }

 function verify(s, check) {
    if (s == check) {
        document.body.textContent = 'Congratulations! Function is working. Expected - ' + check + ', received - ' + s;
    } else {
        document.body.textContent = 'Result is wrong, expected - ' + check + ', received - ' + s;
    }
}

    function pangramVerify(s, check) {
        verify(pangrams(s), check);
        }
          
          
   // console.log(isPangram("Pack my box with five dozen liquor jugs."));// true
   // console.log(isPangram("This isn't a pangram!"));// false
   // console.log(isPangram("I dont know what is happening."));// false
   // console.log(isPangram("How quickly daft jumping zebras vex."));// true