const fs = require('fs')
const colors = require('colors')

const crearArchivoTabla = async (base = 5, hasta = 10, listar = false) => {
    try{

        let salida = ''
        
        for(let i = 1; i <= hasta; i++){
            salida += `${base} x ${i} = ${base * i} \n`
        }

        if(listar){
            console.log('\n==========================='.rainbow)
            console.log('       Tabla del'.dim, base, ':        ')
            console.log('==========================='.america)

            console.log(salida)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return `tabla-${base}.txt`
    }catch(error){
        throw error
    }
}

module.exports = {
    crearArchivoTabla, //crearArchivoTabla: crearArchivoTabla,
}