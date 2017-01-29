var moment = require('moment');
var baseFact = require('./baseFact');

class santaAgeFact extends baseFact {
    make() {
        this.santasBirthYear = moment().set('year', 270);
        return "Well he might not look it but he's actually " + this.santasBirthYear.fromNow();
    }
};

module.exports = santaAgeFact;