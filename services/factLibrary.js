var moment = require('moment');

class factLibrary {

    constructor() {
        this.library = new Array();
    }

    addFact(id, fact) {
        this.library[id] = fact;
    }
    findFact(id) {
        if (typeof this.library[id] === 'undefined') {
            console.error('factLibrary.findFact cant find this element: ' + id);
        } else {
            return this.library[id].make();
        }
    }
};

module.exports = factLibrary;