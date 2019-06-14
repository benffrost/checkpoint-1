import GameService from './game-service.js'

let _gameService = new GameService()

function draw() {
  let target = _gameService.Target
  let template = `
  <div class="card">
      <h2>${target.name}</h2>
      <h4>Health: ${target.health}</h4>
  </div>
  `
  document.querySelector("#main").innerHTML = template;
  //you will need to modify your template string to be whatever you want and then set it as the innerHTML 
  //of an element on the DOM
}

//any other private functions you may want

export default class GameController {
  constructor() { }

  addItemToTarget(itemIndex) {
    _gameService.addItemToTarget(itemIndex)
  }

  attackTarget(attackName) {
    _gameService.attackTarget(attackName)
    draw()
  }

  init() { draw() }
  //any other public methods you may want
}