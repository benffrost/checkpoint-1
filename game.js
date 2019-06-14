
let target = {
  health: 100,
  name: "whatevs",
  hits: 0,
  items: []
}

let items = {
  cleats: { name: "cleats", modifier: 2, description: "pointy" },
  boomerang: { name: "boomarang", modifier: 1, description: "returny" },
  sword: { name: "Sword", modifier: 3, descritpion: "edgy" }
}

function slap() {
  target.health -= addMods();
  target.hits++;
  update();

}

function punch() {
  target.health -= 5 * addMods();
  target.hits++;
  update();

}
function kick() {
  target.health -= 10 * addMods();
  target.hits++;
  update();

}

function update() {
  document.querySelector("#name").innerHTML = `${target.name}`
  document.querySelector("#health").innerHTML = `${target.health}`
  document.querySelector("#hits").innerHTML = `${target.hits}`
}

function giveItem(item) {
  target.items.push(items[item]);
}

function addMods() {

  let output = 1;
  for (let i in target.items) {
    output *= target.items[i].modifier;
  }
  return output;
}

update();