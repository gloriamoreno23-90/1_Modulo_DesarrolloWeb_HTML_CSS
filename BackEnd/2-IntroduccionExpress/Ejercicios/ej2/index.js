let express = require('express')
let app = express()

app.get('/numero/:numero', function(req, res){
    res.send(aletorio(req.params.numero).toString())
})

function aletorio(num){
    return Math.floor(Math.random() * num ) + 1
}

app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})