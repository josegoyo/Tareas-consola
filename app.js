require('colors');
const { mostrarMenu, pausa } = require('./helpers/mensajes');

console.clear();

const main = async () => {

    let opt = '';

    do {

        opt = await mostrarMenu();
        console.log({ opt })
        await pausa();

    } while (opt !== '0');

    //pausa();
}


main();