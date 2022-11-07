const argv = require('./config/yargs')
const { crearArchivoTabla } = require('./helpers/multiplicar')

const colors = require('colors')

console.clear()

crearArchivoTabla(argv.b, argv.h, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.bold.bgGreen, 'creado!'.bold.bgGreen))
    .catch(err => console.log(err))

