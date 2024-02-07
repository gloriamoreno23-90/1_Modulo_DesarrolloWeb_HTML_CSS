let express = require('express')
let aleatorio = require('./function')
let arrayCeros = require('./array')

let app = express()


app.get('/llamar', function(req, res){
    let random = aleatorio()
    arrayCeros[random] ++

    res.send(arrayCeros)
})

//crea una aplicación en la que hacer peticiones de tipo get a la que le
//añadas /borrar/:numero para borrar el número (ponerlo a cero) del índice pasado por parámetro indicado (si
//es que existe).

app.get('/borrar/:indice', function(req, res){
    if(req.params.indice < arrayCeros.length){
        arrayCeros[req.params.indice] = 0
        res.send(arrayCeros)
    }else{
        res.send("El indice no esta en el array")
    }  
})



app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})