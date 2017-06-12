var valueArray = [2, 4];
var tileSelector = document.getElementsByClassName('tile');

var randomVal = valueArray[Math.floor(Math.random() * valueArray.length)];

function StartTile() {
  this.posX = 0;
  this.posY = 0;
  this.value = randomVal;
}

function NewTile() {

}

StartTile.prototype.startGame = function() {
  this.genStartTiles();
};

StartTile.prototype.genStartTiles = function() {
  var randomTileGen = Math.floor(Math.random() * 16);
  var randomTileGen2 = Math.floor(Math.random() * 16);

  while (randomTileGen === randomTileGen2) {
    randomTileGen = Math.floor(Math.random() * 16);
  }
  
    $(tileSelector[randomTileGen]).addClass('active');
    $(tileSelector[randomTileGen2]).addClass('active');
};
