const Model = require('../models/model');
const View = require('../views/view');

class Controller {
    static read() {
        const data = Model.readData();
        View.showData(data);
    }

    static addData(input) {
        const data = Model.addNewPokemon(input);
        View.successAdd(data);
    }

    static editData(input) {
        const data = Model.update(input);
        View.successUpdate(data);
    }

    static deleteData(input) {
        const data = Model.destroy(input);
        View.successDelete(data);
    }

    static showHelp() {
        View.showHelp();
    }
}

module.exports = Controller;