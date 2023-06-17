// "VE" = "Very Easy"
// "EA" = "Easy"
// "ME" = "Medium"
// "HA" = "Hard"
// "VH" = "Very Hard"
// "EX" = "Expert"


var obj = {
    "VE": 5,
    "EA": 10,
    "ME": 20,
    "HA": 40,
    "VH": 80,
    "EX": 120
}

class User {
    constructor(name, xp, log) {
        this.name = name;
        this.xp = xp;
        this.log = log;
    }
    newSolvedChallenge(challenge) {
        this.xp += obj[challenge.level];
        this.log.push(challenge.id);
    }
}


var user1 = new User("JAD", 0, []);
console.log(user1);
user1.newSolvedChallenge({
    id: 1,
    level: 'VE'
});

let o = {
    id: 2,
    level: 'ME'
};
user1.newSolvedChallenge(o);
console.log(user1.xp);
console.log(user1.log);

