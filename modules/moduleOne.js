module.exports = {
  random: randomNum
}

function randomNum(min, max){
  return Math.floor(Math.random() * (max - min)) + min;
}
