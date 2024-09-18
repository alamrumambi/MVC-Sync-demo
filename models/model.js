const fs = require('fs');
const Pokemon = require('./class');

class Model {
    static readData() {
        let data = fs.readFileSync('./pokemon.json', 'utf-8');
        data = JSON.parse(data);
        data = data.map((p) => {
            return new Pokemon(p.id, p.name, p.height, p.weight, p.imgUrl);
        })
        return data;
    }

    static addNewPokemon(input) {
        const [ name, height, weight, imgUrl ] = input;
        const data = this.readData();

        // membuat id
        const id = data[data.length - 1].id + 1;

        let newData = {
            id,
            name,
            height,
            weight,
            imgUrl
        }
        newData = new Pokemon(newData.id, newData.name, +newData.height, +newData.weight, newData.imgUrl);
        data.push(newData)
        this.saveData(data);
        return newData;
    }

    static update([ name, id ]) {
        const data = this.readData();
        const index = data.findIndex((p) => {
            return p.id == id;
        })

        data[index].name = name;
        this.saveData(data);
        return data[index];
    }

    static destroy([ id ]) {
        let data = this.readData();
        const deletedData = data.find((p) => {
            return p.id == id;
        })
        data = data.filter((p) => {
            return p.id != id;
        })
        this.saveData(data);
        return deletedData;
    }

    static saveData(data) {
        data = JSON.stringify(data, null, 2);
        fs.writeFileSync('./pokemon.json', data);
    }
}

module.exports = Model;