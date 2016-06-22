/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x<0) return false;

  var digits = 0, temp = x;
  while (temp>0){
    digits+=1;
    temp = Math.floor(temp/10);
  }

  for (var i=0;i<digits/2;i++){
    var j = digits - i -1;
    if (digitOfX(i)!==digitOfX(j)){return false}
  }

  return true;

  function digitOfX(n){
    var temp = x;
    for (var i=0;i<n;i++){
      temp = Math.floor(temp / 10);
    }
    return temp % 10;
  }
};



isPalindrome(2144444412);

isPalindrome(0);
isPalindrome(-11);
isPalindrome(11);
isPalindrome(1234321);
isPalindrome(15351);

isPalindrome(15352);
isPalindrome(16351);
isPalindrome(166661);
isPalindrome(168661);