var baseFact = require('./baseFact');

class elfCountFact extends baseFact {
    make() {
        return "Um let me count... one, two, three... I'll be counting all year at this rate!";
    }
};

module.exports = elfCountFact;