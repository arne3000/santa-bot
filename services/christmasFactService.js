var factLibrary = require('./factLibrary');
var tillChristmasFact = require('../facts/tillChristmasFact');
var santaAgeFact = require('../facts/santaAgeFact');
var reindeerCountFact = require('../facts/reindeerCountFact');
var elfCountFact = require('../facts/elfCountFact');
var locationUpdateFact = require('../facts/locationUpdateFact');

class christmasFactService {

    get Facts() {
        return {
            tillChristmas: 0,
            santaAge: 1,
            reindeerCount: 2,
            elfCount: 3,
            locationUpdate: 4
        };
    }

    constructor() {
        this.library = new factLibrary();
        this.library.addFact(this.Facts.tillChristmas, new tillChristmasFact());
        this.library.addFact(this.Facts.santaAge, new santaAgeFact());
        this.library.addFact(this.Facts.reindeerCount, new reindeerCountFact());
        this.library.addFact(this.Facts.elfCount, new elfCountFact());
        this.library.addFact(this.Facts.locationUpdate, new locationUpdateFact());
    }

    getFact(factId) {
        return this.library.findFact(factId);
    }

    getRandomFact() {
        var id = Math.floor((Math.random() * (this.Facts.length - 1)) + 0);
        return getFact(id);
    }

    welcomeMessage() {
        return "Welcome, I'm Santa's helper I can give you facts all about christmas!";
    }
    defaultMessage() {
        return "Sorry Santa's Helper doesn't know that one yet. I will need to ask Santa and get back to you.";
    }
};

module.exports = christmasFactService;