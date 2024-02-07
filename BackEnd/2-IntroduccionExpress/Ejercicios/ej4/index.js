let express = require('express')
let funcion = require('./function')

let app = express()

app.get('/saludar', function(req, res){
    res.send(funcion())
})



app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})