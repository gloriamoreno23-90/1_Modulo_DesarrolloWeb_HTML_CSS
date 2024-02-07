let express = require('express')


let app = express()

let datos = {
    nombre: "",
    apellidos: "",
    edad: 33,
} 

app.get('/nombre/:nombre', function(req, res){
    let {nombre} = req.params
    datos.nombre = req.params.nombre
    res.send(datos)
   
})

app.get('/apellidos/:apellidos', function(req, res){
    let {apellidos} = req.params
    datos.apellidos = req.params.apellidos
    res.send(datos)
   
})

app.get('/edad/:edad', function(req, res){
    let {edad} = req.params
    datos.edad = req.params.edad
    res.send(datos)
   
})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})