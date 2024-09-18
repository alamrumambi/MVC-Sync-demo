class View {
    static showData(data) {
        // console.log('7. Data berhasil sampai ke view');
        console.table(data);
    }

    static successAdd(newData) {
        // console.log(newData, '<< di view yah');
        console.log(`Pokemon ${newData.name} berhasil ditambahkan`);
    }

    static successUpdate(data) {
        // console.log(data, '<< di view yah');
        console.log(`Pokemon dengan id ${data.id} berhasil diganti namanya menjadi ${data.name}`);
    }

    static successDelete(data) {
        // console.log(data, '<< di view yah');
        console.log(`Pokemon dengan id ${data.id} berhasil dihapus`);
    }

    static showHelp() {
        console.log(`
            node index.js read
            node index.js add <name> <height> <weight> <image_url>
            node index.js edit <name> <id>
            node index.js delete <id>
        `)
    }
}

module.exports = View;