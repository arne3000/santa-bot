var baseFact = require('./baseFact');

class reindeerCountFact extends baseFact {
    make() {
        return "Santa has 8! Dasher, Dancer, Prancer, Vixen, Comet, Cupid, Donner, Blixen and Rudolph";
    }
};

module.exports = reindeerCountFact;