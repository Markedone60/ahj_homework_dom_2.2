export default class Logic {
  constructor(field) {
    this.field = field;
  }

  drawBoard() {
    for (let i = 0; i < 16; i += 1) {
      const newCell = '<div class="cell"></div>';
      this.field.innerHTML += newCell;
    }
  }

  randomizeCell(index) {
    const result = Math.floor(Math.random() * (this.field.childNodes.length - 1));

    if (result === index) {
      return this.randomizeCell(index);
    }

    return result;
  }

  moveGoblin() {
    let index = 0;

    setInterval(() => {
      const activeCell = this.field.querySelector('.active');

      if (activeCell) {
        activeCell.classList.remove('active');
      }
      index = this.randomizeCell(index);
      const newCell = this.field.childNodes[index];
      newCell.classList.add('active');
    }, 2000);
  }
}
