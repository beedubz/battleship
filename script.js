//

class Ship {
  constructor(name, length, hits, sunk) {
    this.name = name;
    this.length = length;
  }

  checkIfSunk() {
    if (this.length === this.hits) {
      this.sunk = true;
      sunkShip();
    }
  }

  shipHit() {
    this.hits++;
    this.checkIfSunk();
  }
}

class Player {
  constructor(
    name,
    carrier,
    battleship,
    destroyer,
    submarine,
    patrolship,
    sunkshipsnumber,
    sunkshipsnames,
  ) {
    this.name = name;
    this.carrier = this.carrier = new Ship("Carrier", 5, 0, false);
    this.battleship = new Ship("Battleship", 4, 0, false);
    this.destroyer = new Ship("Destroyer", 3, 0, false);
    this.submarine = new Ship("Submarine", 3, 0, false);
    this.patrolboat = new Ship("Patrol Boat", 2, 0, false);
    this.sunkshipsnumber = 0;
    this.sunkshipsnames = [];
  }

  //if a player's ship is sunk, the name of the ship is added to the list and the number of sunk ships goes up 1 (if it reaches 5 game over)
  sunkShip(player, ship) {
    this.sunkshipsnames.push("ship");
    this.sunkshipsnumber++;
    if (this.sunkships === 5) {
      gameOver();
    }
  }
}
