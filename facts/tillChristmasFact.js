var moment = require('moment');
var baseFact = require('./baseFact');

class tillChristmasFact extends baseFact {
    make() {
        this.christmas = moment().set('month', 11).set('date', 25);

        if (this.christmas.diff(moment(), 'days') > 0) {
            this.christmas.add(1, 'year');
        }
        return "Let me just check my elf calendar... Christmas will be " + this.christmas.fromNow();
    }
};

module.exports = tillChristmasFact;