module.exports = {
    dollarBills: cashMoney
}

function cashMoney(temp){
  return temp.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}
