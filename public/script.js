$(function(){
  var balance = 0;
  var min = 100;
  var max = 1000000;

  $('#submitButton').on('click', function(){
    event.preventDefault();
    var mydata = {};
    mydata.min = $('#min').val();
    mydata.max = $('#max').val();

    if(mydata.min >= mydata.max){
      alert('You have entered a min that is less than your max value. That wasn\'t cool. Try again.');
      return;
    }

    $.ajax({
      url: '/balance',
      method: 'PUT',
      data: mydata
    }).then(function(response){
      // console.log(response);
      $('#balances').text(response).animate({left: '1px'}, "slow");
      $('#cashMoney').text('Is that how much cashmoney you wanted.').animate({right: '500px', opacity: '0.2'}, "slow");
      // console.log('submit test');

    }).fail(function(response){
      console.log('Request failed. Why God? Why?\nP.S. this is the submit fail.');
    });

  });
  $('#randomButton').on('click', function(){
    event.preventDefault();
    var mydata = {};
    mydata.min = 100;
    mydata.max = 1000000;
    // $.get('/balance', function(){
    //   console.log(response);
    //   $('#balances').text(response);
    // });
    // // balance = getBalance(min, max);
    // // appendBalance(balance);
    $.ajax({
      url: '/balanceRandom',
      method: 'PUT',
      data: mydata
    }).then(function(response){
      console.log(response);
      $('#balances').text(response);
      $('#cashMoney').text('That\'s a random amount of cashmoney you have there.');

    }).fail(function(response){
      console.log('Request failed. Why God? Why?');
    });

  });

  function getBalance(min, max){
    return ;
  };

  function appendBalance(balance){
    return;
  };
})
