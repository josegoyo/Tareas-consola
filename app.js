require('colors');

const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');
const { guardarBD, leerBD } = require('./helpers/guardarArchivo'); 

console.clear();

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasBD = leerBD();

    if(tareasBD){
        tareas.cargarTareasFromFile(tareasBD)
    }

    do {

        opt = await inquirerMenu();
       
        switch(opt) {
            case '1':

                let mensaje = await leerInput('Ingrese la descripcion de la tarea: ')
                tareas.crearTarea(mensaje);

                break;
            case '2':
                console.log( tareas.listadoArray);
                break;
        }

        guardarBD(tareas.listadoArray);

        if(opt !== '0')
            await pausa();

    } while (opt !== '0');

    
}


main();