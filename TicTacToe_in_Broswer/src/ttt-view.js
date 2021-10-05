class View {
  constructor(game, el) {}

  setupBoard() {
    const gridUl = document.createElement('ul')
    const gridli1 = document.createElement('li')
    const gridli2 = document.createElement('li')
    const gridli3 = document.createElement('li')
    const gridli4 = document.createElement('li')
    const gridli5 = document.createElement('li')
    const gridli6 = document.createElement('li')
    const gridli7 = document.createElement('li')
    const gridli8 = document.createElement('li')
    const gridli9 = document.createElement('li')

    gridUl.className = 'grid'
    gridUl.append(grid1, grid2, grid3, grid4, grid5, grid6, grid7, grid8, grid9)

  }
  
  bindEvents() {}

  handleClick(e) {}

  makeMove(square) {}

}

module.exports = View;
