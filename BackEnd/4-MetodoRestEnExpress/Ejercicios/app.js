let express = require('express')
let app = express()

let personas = require('./personas')
app.use(express.urlencoded({extended: false}))
app.use(express.json())


app.use(express.static('public'))

app.get('/personas', function(req, res){
    res.send(personas)
})
//Crea una ruta POST que reciba una petición con un objeto persona con nombre, apellido y edad. Añade ese
//objeto al array de personas.

app.post('/sumar', function(req, res){
    let {nombre, apellido, edad} = req.body
    personas.push({nombre, apellido, edad})
    res.send(personas)
})

//Crea una ruta PUT que reciba un objeto persona con nombre, apellido y edad. Dentro del array personas,
//modifica el objeto que tenga el nombre que recibimos en la petición.

app.put('/modificar', function(req, res){
    let index = personas.findIndex((persona) => persona.nombre === req.body.nombre)
    if(index < 0){
        res.send("El nombre" + req.body.nombre + " no existe en la base de datos")
    }else{
        personas[index].apellido = req.body.apellido
        personas[index].edad = req.body.edad
    
        res.send(`${req.body.nombre} ha sido modificado correctamente.`)
    }
})

//Crea una ruta DELETE que reciba un nombre de persona. Borra el objeto persona del array que tenga el
//nombre que recibimos en la petición.

app.delete('/eliminar', function(req, res){
    let index = personas.findIndex((persona) => persona.nombre === req.body.nombre)
    if(index < 0){
        res.send("El nombre" + req.body.nombre + " no existe en la base de datos")
    }else{
        personas.splice(index, 1)
    
        res.send(`${req.body.nombre} ha sido eliminado correctamente.`)
    }
})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})