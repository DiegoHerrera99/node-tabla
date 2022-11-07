const argv = require('./config/yargs')
const { crearArchivoTabla } = require('./helpers/multiplicar')

const colors = require('colors')

console.clear()

crearArchivoTabla(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(`Archivo ${nombreArchivo.bgGreen} creado con exito!`.bold))
    .catch(err => console.log(err))

