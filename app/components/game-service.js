import Target from '../models/target.js'
import Item from '../models/items.js'

let _target = new Target("Scarecrow", 100, 1, 5, 10);
let hat = new Item("Straw Hat", 5, "It's my good hat");

let _items = [hat] //create and add as many items as you like

export default class GameService {
  constructor() { }

  get Target() {
    return {
      name: _target.name,
      health: _target.health,
      attacks: _target.attacks,
      items: _target.items,
      hits: _target.hits,
    }
  }

  addItemToTarget(itemIndex) {
    // you will need to write the logic to check if the item is already in the target's items before you add it again
    let targetItem = _items[itemIndex]
    _target.items.push(targetItem)
  }

  attackTarget(attackName) {
    // you will need to write the logic to account for items your target may have
    // you will also need to write the logic to check whether the target is alive or dead
    let attackDamage = _target.attacks[attackName]
    _target.health -= attackDamage
    _target.hits++
  }

  //any other methods you might want on your service
}