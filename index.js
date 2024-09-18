// aplikasi menerima instruksi dari user

const command = process.argv[2];
const input = process.argv.slice(3);
const Controller = require('./controllers/controller');

if (command == 'read') {
    Controller.read();
} else if (command == 'add') {
    Controller.addData(input);
} else if (command == 'edit') {
    Controller.editData(input);
} else if (command == 'delete') {
    Controller.deleteData(input);
} else {
    Controller.showHelp();
}