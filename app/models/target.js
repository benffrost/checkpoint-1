export default class Target {
  constructor(name, health, slap, punch, kick) {
    this.name = name;
    this.health = health;
    this.attacks = {
      "slap": slap,
      "punch": punch,
      "kick": kick
    }
    this.items = [];
    this.hits = 0;
  }
}