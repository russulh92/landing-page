class Challenge {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
    points() {
        let levels = {
            VE: 5,
            EA: 10,
            ME: 20,
            HA: 40,
            VH: 80,
            EX: 120
        };
        return levels[this.level];
    }
}


class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(challenge) {
        this.log.push(challenge.id);
        this.xp += challenge.points();
    }
}

var user1 = new User("NOOR", 0, []);
console.log(user1);
let ch1 = new Challenge(1, 'ME');
user1.newSolvedChallenge(ch1);
let ch2 = new Challenge(2, 'ME');
user1.newSolvedChallenge(ch2);
let ch3 = new Challenge(3, 'EA');
user1.newSolvedChallenge(ch3);
console.log(user1.xp);
console.log(user1.log);