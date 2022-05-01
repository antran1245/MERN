class Card {
    constructor(name, cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }

    attack = (target) => target.res -= this.res
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitude){
        super(name, cost);
        this.text = text;
        this.stat = stat;
        this.magnitude = magnitude;
    }
    play = (target) => {
        if (this.stat === "resilience") {
            target.res += this.magnitude;
        } else if (this.stat === "power") {
            target.power += this.magnitude;
        }
    }
}

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
// red power: 3 res: 4

const hardAlgorithm = new Effect("Hard Algorithm", 2, "increase target's resilience by 3", "resilience", 3);
hardAlgorithm.play(redBeltNinja);
// red power: 3 res: 7

const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
// black power: 5 res: 4

const unhandled = new Effect("Unhandled Promise Rejection", 1, "reduce target's resilience by 2", "resilience", -2);
unhandled.play(redBeltNinja);
// red power: 5 res: 5

const pair = new Effect("Pair Programming", 3, "increase target's power by 2", "power", 2);
pair.play(redBeltNinja);
// red power: 5 res: 5

redBeltNinja.attack(blackBeltNinja);
// black power: 5 res: -1