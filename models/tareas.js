const Tarea = require('./Tarea');
require('colors');
class Tareas {

    _listado = {};

    constructor(){

        this._listado = {};
    }

    borrarTarea(id) {

        if(this._listado[id]){
            delete this._listado[id];
        }
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

    listadoCompleto () {

        Object.keys(this._listado).forEach( (key, pos) => {

            const _tarea = this._listado[key];

            let estatus = _tarea.completadoEn !== null ? 'Completado'.green : 'Pendiente'.red;
            console.log(`${pos+1}. ${_tarea.desc} :: ${estatus}`);

        });
    }

    listarPendientesCompletadas(completadas = true) {

        this.listadoArray.forEach( (item, pos) => {

            let estatus = item.completadoEn !== null ? 'Completado'.green : 'Pendiente'.red;

            if(completadas){
                if(item.completadoEn !== null)
                    console.log(`${pos+1}. ${item.desc} :: ${estatus}`);
            }else{
                if(item.completadoEn === null)
                    console.log(`${pos+1}. ${item.desc} :: ${estatus}`);
            }

        });

    }

}

module.exports = Tareas;