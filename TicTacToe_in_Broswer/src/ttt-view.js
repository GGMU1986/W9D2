class View {
  
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }

  setupBoard() {
    const gridUl = document.createElement('ul')
    
    gridUl.className = "grid"
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gridLi = document.createElement('li')
        const pos = [i, j]
        gridLi.setAttribute('data-grid-pos', `[${pos}]`)
        gridUl.appendChild(gridLi)
      }
    }
    this.el.appendChild(gridUl)
    console.log(gridUl)
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
