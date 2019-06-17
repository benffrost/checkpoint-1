
let target = {
  grumpiness: 100,
  name: "Otis",
  grumbles: 0,
  img: "grump.jpg",
  item: {}
}

let items = {
  hat: { name: "Hat", modifier: 2, img: "hat.jpg" },
  toy: { name: "Toy", modifier: 1, img: "toy.jpg" },
  bone: { name: "Bone", modifier: 3, img: "bone.jpg" }
}

function walk(itemName) {
  if (itemName === "Bone") {
    target.grumpiness -= 10;
  }
  else {
    target.grumpiness -= 7;
  }

  target.grumbles++;
  target.img = "walk.jpg";
  update();
}

function pet(itemName) {
  debugger
  if (itemName === "Hat") {
    target.grumpiness -= 4;
  }
  else {
    target.grumpiness -= 1;
  }

  target.grumbles++;
  target.img = "pet.jpg";
  update();
}

function play(itemName) {
  if (itemName === "Toy") {
    target.grumpiness -= 5;
  }
  else {
    target.grumpiness -= 2;
  }

  target.grumbles++;
  target.img = "play.jpg";
  update();
}

function update() {


  let template = `
      <div class="row game-row">
      <div class="col "><img class="img-fluid" src="${target.img}" alt="Otis!" /></div>
      <div class="col">
        <p>Name:${target.name}</p>
        <p>Grumpiness:${target.grumpiness}</p>
        <p>Grumbles:${target.grumbles}</p>
        <button class="btn btn-primary" onClick="pet('${target.item.name}')">Pet</button>
        <button class="btn btn-primary" onClick="walk('${target.item.name}')">Walk</button>
        <button class="btn btn-primary" onClick="play('${target.item.name}')">Play</button>
        <div id="items">
          <button class="btn btn-primary" onclick="giveItem('hat')">hat</button>
          <button class="btn btn-primary" onclick="giveItem('toy')">toy</button>
          <button class="btn btn-primary" onclick="giveItem('bone')">bone</button></div>
      </div>`

  let happyTemplate = `      <div class="row game-row">
      <div class="col "><img class="img-fluid" src="happy.jpg" alt="Otis!" /></div>
      <div class="col"><h1>Happy Dog!</h1>
      </div>`
  if (target.grumpiness > 0) {
    document.querySelector("#main").innerHTML = template;
  } else {
    document.querySelector("#main").innerHTML = happyTemplate;
  }
}

function giveItem(item) {
  target.item = items[item];
  target.img = target.item.img;
  update();
}

function addMods() {

  let output = 1;
  for (let i in target.items) {
    output *= target.items[i].modifier;
  }
  return output;
}

update();