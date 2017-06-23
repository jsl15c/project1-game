var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var size = 4;
var width = canvas.width / size - 6;
var gridArr = [];
var youLose = false;
startGame();

function Tile(row, col) {
  this.value = null;
  this.x = col * width + 5 * (col + 1);
  this.y = row * width + 5 * (row + 1);
}

function drawGrid() {
  for(var i = 0; i < size; i++) {
    gridArr[i] = [];
    for(var j = 0; j < size; j++) {
      gridArr[i][j] = new Tile(i, j);
    }
  }
}

function fillTiles(gridArr) {
  ctx.beginPath();
  ctx.rect(gridArr.x, gridArr.y, width, width);
  switch (gridArr.value){
    case null : ctx.fillStyle = '#000';
      break;
    case 2 : ctx.fillStyle = '#000';
      break;
    case 4 : ctx.fillStyle = '#000';
      break;
    default:ctx.fillStyle = '#000';
  }

  ctx.fill();
  if (gridArr.value) {
    ctx.font = '50px Helvetica';
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.fillText(gridArr.value, gridArr.x + width / 2, gridArr.y + width / 2 + width/7);
  }
}

function restart() {
  ctx.clearRect(0, 0, 500, 500);
}

document.onkeydown = function (event) {
  if (!youLose) {
    if (event.keyCode === 38 || event.keyCode === 87) {
      moveUp();
    } else if (event.keyCode === 39 || event.keyCode === 68) {
      moveRight();
    } else if (event.keyCode === 40 || event.keyCode === 83) {
      moveDown();
    } else if (event.keyCode === 37 || event.keyCode === 65) {
      moveLeft();
    }
  }
};

function startGame() {
  drawGrid();
  drawNewTiles();
  makeNewTiles();
  makeNewTiles();
}

function finishGame() {
  $('.game-over').fadeIn(300);
  youLose = true;
}

function drawNewTiles() {
  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      fillTiles(gridArr[i][j]);
    }
  }
}

function makeNewTiles() {
  var x = 0;
  for(var i = 0; i < size; i++) {
    for(var j = 0; j < size; j++) {
      if(!gridArr[i][j].value) {
        x++;
      }
    }
  }
  if(!x) {
    finishGame();
    return;
  }
  while(true) {
    var row = Math.floor(Math.random() * size);
    var col = Math.floor(Math.random() * size);
    if(!gridArr[row][col].value) {
      gridArr[row][col].value = 2;
      drawNewTiles();
      return;
    }
  }
}

function moveRight () {
  for(var i = 0; i < size; i++) {
    for(var j = size - 2; j >= 0; j--) {
      if(gridArr[i][j].value) {
        var col = j;
        while (col + 1 < size) {
          if (!gridArr[i][col + 1].value) {
            gridArr[i][col + 1].value = gridArr[i][col].value;
            gridArr[i][col].value = 0;
            col++;
          }
          else if (gridArr[i][col].value == gridArr[i][col + 1].value) {
            gridArr[i][col + 1].value = gridArr[i][col + 1] * 2;
            gridArr[i][col].value = 0;
            break;
          }
          else {
            break;
          }
        }
      }
    }
  }
  makeNewTiles();
}

function moveLeft() {
  for(var i = 0; i < size; i++) {
    for(var j = 1; j < size; j++) {
      if(gridArr[i][j].value) {
        var col = j;
        while (col - 1 >= 0) {
          if (!gridArr[i][col - 1].value) {
            gridArr[i][col - 1].value = gridArr[i][col].value;
            gridArr[i][col].value = 0;
            col--;
          }
          else if (gridArr[i][col].value == gridArr[i][col - 1].value) {
            gridArr[i][col - 1].value *= 2;
            gridArr[i][col].value = 0;
            break;
          }
          else {
            break;
          }
        }
      }
    }
  }
  makeNewTiles();
}

function moveUp() {
  for(var j = 0; j < size; j++) {
    for(var i = 1; i < size; i++) {
      if(gridArr[i][j].value) {
        var row = i;
        while (row > 0) {
          if(!gridArr[row - 1][j].value) {
            gridArr[row - 1][j].value = gridArr[row][j].value;
            gridArr[row][j].value = 0;
            row--;
          }
          else if (gridArr[row][j].value == gridArr[row - 1][j].value) {
            gridArr[row - 1][j].value *= 2;
            gridArr[row][j].value = 0;
            break;
          }
          else {
            break;
          }
        }
      }
    }
  }
  makeNewTiles();
}

function moveDown() {
  for(var j = 0; j < size; j++) {
    for(var i = size - 2; i >= 0; i--) {
      if(gridArr[i][j].value) {
        var row = i;
        while (row + 1 < size) {
          if (!gridArr[row + 1][j].value) {
            gridArr[row + 1][j].value = gridArr[row][j].value;
            gridArr[row][j].value = 0;
            row++;
          }
          else if (gridArr[row][j].value == gridArr[row + 1][j].value) {
            gridArr[row + 1][j].value *= 2;
            gridArr[row][j].value = 0;
            break;
          }
          else {
            break;
          }
        }
      }
    }
  }
  makeNewTiles();
}

$('.settings').click(function() {
  $('.modes').addClass('active');
  setTimeout(function(){
       $('.option').addClass('display');
   }, 500);
  });


$('.diff').hover(function() {
  $('.diff-bar').addClass('show');
  setTimeout(function() {
    $('.diff-bar, .disc-bar').removeClass('show');
  },3000);
});

$('.easy').click(function() {
  $('canvas').removeClass('med-diff');
  $('canvas').removeClass('hard-diff');
});

$('.med').click(function() {
  $('canvas').removeClass('hard-diff');
  $('canvas').addClass('med-diff');
});

$('.hard').click(function() {
  $('canvas').removeClass('med-diff');
  $('canvas').addClass('hard-diff');
});


$('.close').click(function() {
  $('.modes').removeClass('active');
    $('.option').removeClass('display');
});

$('.disc').click(function() {
  $('body').toggleClass('party-on');
});
