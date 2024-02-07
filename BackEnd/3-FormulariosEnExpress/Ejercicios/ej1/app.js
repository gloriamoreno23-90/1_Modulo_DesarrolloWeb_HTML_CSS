let express = require('express')
let animales = require('./animales')

let app = express()

app.use(express.static('public'))

app.get('/lista', function (req, res) {
    res.send(showAnimals(animales))
})

app.get('/addanimal', function (req, res){
    let {nombre, edad, tipo} = req.query
    edad = parseInt(edad)

    animales.push({nombre, edad, tipo})

    res.send({mensaje: `{nombre} adicionado`, results: animales})
})

app.get('/adoptar', function(req, res){
    animales = animales.filter((animal) => animal.nombre != req.query.nombre)

    res.send({mensaje: `${req.query.nombre} adoptado`, results: animales})
})

function showAnimals(animales) {
    let salida = ""
    for (let i = 0; i < animales.length; i++) {
        salida += `
        <tr>
            <td>${animales[i].nombre}</td>
            <td>${animales[i].edad}</td>
            <td>${animales[i].tipo}</td>
            <td>
                <form action="/adoptar">
                    <input type="text" hidden name="nombre" value="${animales[i].nombre}" id="nombre">
                    <button type="submit">Enviar</button>
                </form>
             </td>   
        </tr>`
    }

    return `<table>
            <tr>
             <th>Nombre</th>
             <th>Edad</th>
             <th>Tipo</th>
            </tr>
            ${salida}
        </table>`
}





app.listen(process.env.PORT || 3000, (e) => {
    e
        ? console.error('Servidor no conectado')
        : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})