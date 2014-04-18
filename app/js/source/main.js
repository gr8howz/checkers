(function (){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#board').on('click', 'td.valid.player.current');
	  $('#board').on('click', 'td.valid:not(.player)');
    var audio = new Audio('media/1.mp3');
    audio.play();

    setBoard();

  }

  function setBoard(){


    var $black = $('td.valid[data-y=0], td.valid[data-y=1], td.valid[data-y=2]');
    var $gray = $('td.valid[data-y=5], td.valid[data-y=6], td.valid[data-y=7]');

    for(var i = 0; i< $black.length; i++){
      var $stark = $('<img>').attr('src', './media/stark.png');
      var $dragon = $('<img>').attr('src', './media/dragon.png');

      $($black[i]).append($stark);
      $($black[i]).addClass('player').addClass('red');

      $($gray[i]).append($dragon);
      $($gray[i]).addClass('player').addClass('white').addClass('current');
    }

  }




    //
    //
    // for(var i = 0; i< 8; i++){
    //   var y = $('td[data-y='+ i + ']');
    //   for(var j = 0; j < 8; j++){
    //     var x = $('td[data-x='+ j + ']');
    //
    //   }
    // }
})();
