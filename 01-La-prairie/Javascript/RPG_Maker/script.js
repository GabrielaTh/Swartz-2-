class Player {
  constructor(name, life, basicAttack, basicDefence, level, experience) {
    this.name = name;
    this.life = life;
    this.basicAttack = basicAttack;
    this.basicDefence = basicDefence;
    this.level = level;
    this.experience = experience;
  }
}

var Kory = new Player("Kory", 3000, 150, 100, 2, 100);

class Weapon {
  constructor(name, attack, useLevel, durability) {
    this.name = name;
    this.attack = attack;
    this.useLevel = useLevel;
    this.durability = durability;
  }
}

class Monster {
  constructor(name, life, basicAttack, basicDefence, level, attackSpeed) {
    this.name = name;
    this.life = life;
    this.basicAttack = basicAttack;
    this.basicDefence = basicDefence;
    this.level = level;
    this.attackSpeed = attackSpeed;
  }
}

function test() {
  class Shop {
    constructor(name, attack, useLevel, durability) {
      this.name = name;
      this.attack = attack;
      this.useLevel = useLevel;
      this.durability = durability;
    }
  }
}
function shop() {
  for (i = 0; i < venta.length; i++) {
    console.log(venta[i].title);
  }
}

function disponible() {
  for (i = 0; i < venta.length; i++) {
    if (venta[i].available == true) {
      console.log(venta[i].title);
    }
  }
}

function level() {
  for (i = 0; i < venta.length; i++) {
    if (venta[i].minLevel > 10) {
      console.log(venta[i].title);
    }
  }
}
