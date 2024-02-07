let express = require('express')
let app = express()

let nombresArray = ["Gloria", "Carlos", "Julia", "Martin", "Hector", "Yuliana",]

app.get('/persona', function(req, res){
    res.send(nombresArray)
})

app.get('/persona/:parametro', function(req, res){
    let {nombre} = req.params
    let index = nombresArray.findIndex((e) => e === nombre)
    res.send({
        result: nombresArray[index]
    })
})




app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})