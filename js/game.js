var round = 1;

var gridArr = [
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
  [null, null, null, null],
];

var initialTileVal = [2, 4];

// for new tiles
var randomRow, randomCol;

// generates game board
function redrawGrid() {
  $('.game-container').empty();
  for (var i = 0; i < gridArr.length; i++) {
    var row = '';

    for (var j = 0; j < gridArr[i].length; j++) {
    var col = '';

    row += `<div class="cell cell-${i}-${j}"></div>`;
    }
    $('.game-container').append(row);
  }
}


function makeTiles() {        // makeTiles() creates initial and proceeding tile for the game
  // ONLY FOR INITIAL TILES
  var randomVal = initialTileVal[Math.floor(Math.random() * initialTileVal.length)];

  if (round === 1) {
  var rowTemp, colTemp, valTemp;
    for (var i = 0; i < 2; i++) {
      randomRow = Math.floor(Math.random() * 4);
      randomCol = Math.floor(Math.random() * 4);
      while ((rowTemp === randomRow) && (colTemp === randomCol)) {
        randomRow = Math.floor(Math.random() * 4);
        randomCol = Math.floor(Math.random() * 4);
      }
      rowTemp = randomRow;
      colTemp = randomCol;
      // valTemp = randomVal;

      gridArr[randomRow][randomCol] = 2;
    }
  }
  else {
    var newTileRow, newTileCol;
    round = null;
    newTileRow = Math.floor(Math.random() * 4);
    newTileCol = Math.floor(Math.random() * 4);
      for (var m = 0; m < gridArr.length; m++) {
        for (var n = 0; n < gridArr[m].length; n++) {
          while ((newTileRow === m) && (newTileCol === n)) {
            newTileRow = Math.floor(Math.random() * 4);
            newTileCol = Math.floor(Math.random() * 4);
          }
        }
      }
      gridArr[newTileRow][newTileCol] = 2;
    }
  fillTile();
}

function fillTile() {
  for (var i = 0; i < gridArr.length; i++) {
    for (var j = 0; j < gridArr[i].length; j++) {
      if(gridArr[i][j] === 2) {
        $(`.cell-${i}-${j}`).addClass('bg-2');
      }
      else if(gridArr[i][j] === 4) {
        $(`.cell-${i}-${j}`).addClass('bg-4');
      }
      else if(gridArr[i][j] === 8) {
        $(`.cell-${i}-${j}`).addClass('bg-8');
      }
      else if(gridArr[i][j] === 16) {
        $(`.cell-${i}-${j}`).addClass('bg-16');
      }
      else if(gridArr[i][j] === 32) {
        $(`.cell-${i}-${j}`).addClass('bg-32');
      }
      else if(gridArr[i][j] === 64) {
        $(`.cell-${i}-${j}`).addClass('bg-64');
      }
      else if(gridArr[i][j] === 128) {
        $(`.cell-${i}-${j}`).addClass('bg-128');
      }
      else if(gridArr[i][j] === 256) {
        $(`.cell-${i}-${j}`).addClass('bg-256');
      }
      else if(gridArr[i][j] === 512) {
        $(`.cell-${i}-${j}`).addClass('bg-512');
      }
      else if(gridArr[i][j] === 1024) {
        $(`.cell-${i}-${j}`).addClass('bg-1024');
      }
      else if(gridArr[i][j] === 2048) {
        $(`.cell-${i}-${j}`).addClass('bg-2048');
      }
    }
  }
}

function moveUp() {
  for (var i = 0; i < gridArr.length; i++) {
    for (var j = 0; j < gridArr[i].length; j++) {
      if (gridArr[i][j] !== null  && i !== 0) {
        gridArr[0][j] = gridArr[i][j];    // transfers old value to new tile
        gridArr[i][j] = null;             // removes value from old tile
        $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
        // $(`.cell-0-${j}`).addClass(`bg-${gridArr[0][j]}`); // function to determine which class to add
        $(`.cell-0-${j}`).addClass(`bg-${gridArr[0][j]}`);
      }
    }
  }
}

function moveDown() {
  for (var i = 0; i < gridArr.length; i++) {
    for (var j = 0; j < gridArr[i].length; j++) {
      if (gridArr[i][j] !== null  && i !== 3) {
        gridArr[3][j] = gridArr[i][j];    // transfers old value to new tile
        gridArr[i][j] = null;             // removes value from old tile
        $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
        $(`.cell-3-${j}`).addClass('bg-2'); // function to determine which class to add
      }
    }
  }
}

function moveLeft() {
  for (var i = 0; i < gridArr.length; i++) {
    for (var j = 0; j < gridArr[i].length; j++) {
      if (gridArr[i][j] !== null && j !== 0) {
        if (round === 1 && (gridArr[i][j] === gridArr[i][j + 3])) {
          gridArr[i][0] = gridArr[i][j]*2;
          gridArr[i][j] = null;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          // $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add
          fillTile();
        }

        else if (round === 1 && (gridArr[i][j] === gridArr[i][j + 2])) {
          gridArr[i][0] = gridArr[i][j]*2;
          gridArr[i][j] = null;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          // $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add
          fillTile();
        }

        else if (gridArr[i][j] === gridArr[i][j + 1]) {
          gridArr[i][0] = gridArr[i][j]*2;
          gridArr[i][j] = null;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          // $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add
          fillTile();
        }

        else {
            gridArr[i][0] = gridArr[i][j];    // transfers old value to new tile
            gridArr[i][j] = null;             // removes value from old tile
            $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
            // $(`.cell-${i}-3`).addClass('bg-2'); // function to determine which class to add
            fillTile();
          }
      }
    }
  }
}

function moveRight() {
  for (var i = 0; i < gridArr.length; i++) {
    for (var j = 0; j < gridArr[i].length; j++) {
      if (gridArr[i][j] !== null && j !== 3) {
        if (gridArr[i][j] === gridArr[i][j + 3]) {
          gridArr[i][3] = gridArr[i][j]*2;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add

          if (gridArr[i][j] !== null) {
            gridArr[i][j] = null;
          }

        }

        else if (gridArr[i][j] === gridArr[i][j + 2]) {
          gridArr[i][3] = gridArr[i][j]*2;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add

          if (gridArr[i][j] !== null) {
            gridArr[i][j] = null;
          }

        }

        else if (gridArr[i][j] === gridArr[i][j + 1]) {
          gridArr[i][3] = gridArr[i][j]*2;
          $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
          $(`.cell-${i}-3`).addClass(`bg-${gridArr[i][3]}`); // function to determine which class to add

          if (gridArr[i][j] !== null) {
            gridArr[i][j] = null;
          }

        }

        else {
            gridArr[i][3] = gridArr[i][j];   // transfers old value to new tile
            gridArr[i][j] = null;
            $(`.cell-${i}-${j}`).removeClass('bg-2 bg-4 bg-8 bg-16 bg-32 bg-64 bg-128 bg-256 bg-512 bg-1024 bg-2084');
            $(`.cell-${i}-3`).addClass('bg-2'); // function to determine which class to add
          }
      }
    }
  }
}

// user interaction with arrow keys
$(document).ready(function() {
  $(document).keydown(function (event) {
    if (event.which === 38 || event.which === 39 || event.which === 40 || event.which === 37) {
      event.preventDefault();
    }
    // up arrow key
    if (event.which === 38) {
      moveUp();
      // makeTiles();

      // makeTiles();
    }
    // right arrow key
    else if (event.which === 39) {
      moveRight();
      // makeTiles();

    }
    // down arrow key
    else if (event.which === 40) {
      moveDown();
      // makeTiles();


    }
    // left arrow key
    else if (event.which === 37) {
      moveLeft();
      // makeTiles();

    }
  });
});

// starts game, calls other functions
function startGame() {
  redrawGrid();
  makeTiles();
}
