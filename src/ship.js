class Ship {
  // use class fields 
  // + better readablity
  isSunkStatus = false;
  hits = 0
  
  // лучше писать в столбик без запятых и
  // вынести из конструктора в тело класса
  constructor(length) {
    this.length = length
  }

  hit() {
    this.hits++;
    this.isSunk();
  }

  isSunk() {
    if (this.hits === this.length) {
      this.isSunkStatus = true;
    }
  }
}

export default Ship;
