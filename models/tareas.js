const Tarea = require('./Tarea');

class Tareas {

    _listado = {};

    constructor(){

        this._listado = {};
    }

    get listadoArray(){

        const listado = [];

        Object.keys(this._listado).forEach( key => {
            const _tarea = this._listado[key];
            listado.push(_tarea);
        });

        return listado;
    }

    cargarTareasFromFile = (tareas = []) => {

        tareas.forEach(item => {
            this._listado[item.id] = item;
        });
    }

    crearTarea( desc = '') {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }

}

module.exports = Tareas;