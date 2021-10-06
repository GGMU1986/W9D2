class View {
  
  constructor(game, el) {
    this.game = game;
    //this.el = el;
    this.setupBoard(el);
  }

  setupBoard(el) {
    const gridUl = document.createElement('UL')
    
    gridUl.classList.add('grid')
    
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        const gridLi = document.createElement('LI');
        
        gridLi.id = [i, j];
        gridUl.appendChild(gridLi);
        el.appendChild(gridUl);

      };
    }
  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
