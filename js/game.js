var round = 1;

var gridArr = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

var initialTileVal = [2, 4];
var randomVal = initialTileVal[Math.floor(Math.random() * initialTileVal.length)];

// generates gam board

function drawGrid() {
  $('.game-container').empty();
  for (var i = 0; i < gridArr.length; i++) {
    var row = `<div class="row row-${i}">`;

    for (var j = 0; j < gridArr[i].length; j++) {
    var col = `<div class="cell cell-${j}"></div>`;

    row += col;
    }
    row += '</div>';
    $('.game-container').append(row);
  }
}

// generate random tile - only two in the first round


// generate tiles
function genTiles() {
  // generate 2 tiles for first round
  var randomRow, randomCol;

  if (round === 1) {
      var rowTemp, colTemp;

    for (var i = 0; i < 2; i++) {

      randomRow = Math.floor(Math.random() * 4);
      randomCol = Math.floor(Math.random() * 4);

      while ((rowTemp === randomRow) && (colTemp === randomCol)) {
        randomRow = Math.floor(Math.random() * 4);
        randomCol = Math.floor(Math.random() * 4);
      }

      rowTemp = randomRow;
      colTemp = randomCol;
      console.log(randomRow, randomCol);
      console.log('');
      console.log(rowTemp, colTemp);

      $(`.row-${randomRow} .cell-${randomCol}`).addClass('active');
      gridArr[randomRow][randomCol] = randomVal;
    }
    round++;
  }
  else {
    randomRow = Math.floor(Math.random() * 4);
    randomCol = Math.floor(Math.random() * 4);
    $(`.row-${randomRow} .cell-${randomCol}`).addClass('active');
    gridArr[randomRow][randomCol] = randomVal;
  }
}

function move() {
  $(document).keydown(function (event) {
    // event.preventDefault();
    // up arrow key
    if (event.which === 38) {

    }
    // right arrow key
    else if (event.which === 39) {

    }
    // down arrow key
    else if (event.which === 40) {

    }
    // right arrow key
    else if (event.which === 37) {

    }
  });
}

function addNumbers() {

}





// starts game, calls other functions
function startGame() {
  drawGrid();
  genTiles();
  move();
}
