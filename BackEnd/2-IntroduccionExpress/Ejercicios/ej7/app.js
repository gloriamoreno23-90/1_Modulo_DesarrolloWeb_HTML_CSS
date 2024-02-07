let express = require('express')
let aleatorio = require('./function')
let arrayCeros = require('./array')

let app = express()


//Crea una ruta para que cada vez que se haga una petición de tipo get, se llame al método
//de número aleatorio y se sume 1 al valor del número en el índice del número aleatorio.

app.get('/llamar', function(req, res){
    let random = aleatorio()
    arrayCeros[random] ++

    res.send(arrayCeros)
})



app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})