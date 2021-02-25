require('colors');

const mostrarMenu = () => {

    return new Promise(resolve => {
        console.clear();

        console.log('====================='.green);
        console.log('Seleccione una opción'.green);
        console.log('=====================\n'.green);

        console.log(`1.- Crear tarea`);
        console.log(`2.- Listar tareas`);
        console.log(`3.- Listar tareas completas`);
        console.log(`4.- Listar tareas pendientes`);
        console.log(`5.- Completar tareas`);
        console.log(`6.- Borrar tareas`);
        console.log(`0.- Salir\n`);

        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Seleccione una opcion: ', (opt) => {
            readline.close()
            resolve(opt)
        });
    })

}

const pausa = () => {

    return new Promise(resolve => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });

        readline.question('Presione ENTER para seguir: ', (enter) => {
            readline.close()
            resolve()
        });
    });

}

module.exports = {
    mostrarMenu,
    pausa
}