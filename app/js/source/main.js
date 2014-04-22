(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#start').click(start);
    $('body').keydown(move);
  }

  function start(){
    $('td').removeClass();

    var pacCoords = generateRandomCoord();
    var dotCoords = generateRandomCoord();

    $('td[data-x=' + pacCoords.x +'][data-y=' + pacCoords.y +']').addClass('pac-man');
    $('td[data-x=' + dotCoords.x +'][data-y=' + dotCoords.y +']').addClass('red-dot');

    if(checkWin()){
      endGame();
    }
  }

  function generateRandomCoord(){
    var randX = Math.floor(Math.random()*2);
    var randY = Math.floor(Math.random()*3);
    return {'x': randX , 'y': randY};
  }

  function checkWin(){
    var $pac = $('.pac-man');
    var $dot = $('.red-dot');
    return $pac.data('x') === $dot.data('x') && $pac.data('y') === $dot.data('y');
  }

  function endGame(){
    alert('You won!');
    $('td').removeClass();
  }

  function move(event){
    var currentX = $('.pac-man').data('x');
    var currentY = $('.pac-man').data('y');

    switch(event.keyCode){
    case 37: if(currentX === 1){ currentX--;}
      break;
    case 38: if(currentY > 0){ currentY--;}
      break;
    case 39: if(currentX === 0){ currentX++;}
      break;
    case 40:if(currentY < 2){ currentY++;}
      break;
    }

    paintScreen(currentX, currentY);
    if(checkWin()){
      endGame();
    }
  }

  function paintScreen(x,y){
    $('.pac-man').removeClass('pac-man');

    $('td[data-x=' + x + '][data-y=' + y +']').addClass('pac-man');
  }
})();
