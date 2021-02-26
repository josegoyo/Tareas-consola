const inquirer = require('inquirer');
require('colors');

const menuOpt = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Qué deseas hacer?',
        choices: [
            {
                value: '1',
                name: '1. Crear tarea'
            },
            {
                value: '2',
                name: '2. Listar tarea'
            },
            {
                value: '3',
                name: '3. Listar tareas completas'
            },
            {
                value: '4',
                name: '4. Listar tareas pendientes'
            },
            {
                value: '5',
                name: '5. Completar tareas'
            },
            {
                value: '6',
                name: '6. Borrar tareas'
            },
            {
                value: '0',
                name: '0. Salir'
            }
        ]
    }
]

const question = [
    {
        type: 'input',
        name: 'enter',
        message: "Presione ENTER para seguir:",
    }
]

const inquirerMenu = async () => {
    console.clear();
    console.log('====================='.green);
    console.log('Seleccione una opción'.green);
    console.log('=====================\n'.green);

    const { opcion } = await inquirer.prompt(menuOpt)
    return opcion;
}


const pausa = async () => {

    const { enter } = await inquirer.prompt(question)
    return enter;

}

const leerInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                
                if(value.length === 0){
                    return 'Ingrese un valor';
                }

                return true;
            }
        }
    ];

    const { desc } = await inquirer.prompt(question);
    return desc;
}

const listadoTareasBorrar = async (tareas = []) => {

    const choices = tareas.map( (item, pos) => {
        return {
            value: item.id,
            name: `${ (pos +1) }. ${item.desc}`
        }
    });

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]

    const { id } = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async (message) => {

    const question = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ]

    const { ok } = await inquirer.prompt(question);
    return ok;
} 

module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareasBorrar,
    confirmar
}