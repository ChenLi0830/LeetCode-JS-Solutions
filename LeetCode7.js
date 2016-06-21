/**
 * Created by Chen on 2016-06-21.
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

  var ans = 0;
  var digits = 1;
  getDigit(Math.abs(x));
  (Math.abs(ans)>2147483647) && (ans = 0);
  return x > 0 ? ans : -ans;

  function getDigit(x) {
    if (Math.abs(x) > 9) {
      getDigit(Math.floor(x / 10));
    }
    var value = x % 10;
    ans = ans + value * digits;
    digits *= 10;
  }
};

var reverse2 = function (x){
  var ans = parseInt(x.toString().split("").reverse().join(""));
  if (Math.abs(ans)>Math.pow(2,31)) {
    ans = 0;
  }
  return x > 0? ans : -ans;
};

var ans = -12 % 10;

reverse2(1234);
reverse2(-12);
reverse2(-1);
reverse2(0);
reverse2(-123123);