const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'
}
const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado o pendiente la tarea'
}
const argv = require('Yargs')


.command('crear', 'Crear una tarea por hacer', {
    descripcion
})

.command('actualizar', 'Actualiza el estado completado de una tarea', {
    descripcion,
    completado
})

.command('borrar', 'Borra por completo una tarea por hacer', {
    descripcion
})

.help()
    .argv;

module.exports = {
    argv
}