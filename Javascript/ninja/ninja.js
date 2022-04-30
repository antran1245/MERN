class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName = () => console.log(this.name);
    showStats = () => console.log(`Name: ${this.name} Strength: ${this.strength} Speed: ${this.speed} Health: ${this.health}`);
    drinkSake = () => this.health==undefined? this.health = 10 : this.health += 10
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
