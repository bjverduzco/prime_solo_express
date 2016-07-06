var number = require('./moduleOne.js');
var moMoneyMoProblems = require('./moduleTwo.js');
var min = 100;
var max = 1000000;

module.exports = {
  blah: final
}

function final(){
  return moMoneyMoProblems.dollarBills(number.random(min, max));
}
