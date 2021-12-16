function interleave(str1, str2){
    let outstr = '';
    for(let i = 0; i < Math.max(str1.length, str2.length);i++)
    {
      if(i < str1.length)
      {
        outstr += str1[i];
      }
      if(i < str2.length)
      {
        outstr += str2[i];
      }
    }
    return outstr;
  }

  function verify(string, check) {
    if (string === check) {
        document.body.textContent = 'Congratulations! Function is working. Expected - ' + check + ', received - ' + string;
    } else {
        document.body.textContent = 'Result is wrong, expected - ' + check + ', received - ' + string;
    }
}
function task4(str1, str2, check) {
verify(interleave(str1, str2), check);
}
  