import GameController from './components/game-controller.js'

class App {
  constructor() {
    this.controllers = {
      gameController: new GameController()
    }
  }
}

window.app = new App()

app.controllers.gameController.init();