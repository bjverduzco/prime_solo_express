var number = require('./moduleOne.js');
var moMoneyMoProblems = require('./moduleTwo.js');
// var min = body.min;
// var max = data.max;

module.exports = {
  blah: final
}

function final(min, max){
  min = parseInt(min);
  max = parseInt(max);
  return moMoneyMoProblems.dollarBills(number.random(min, max));
}
