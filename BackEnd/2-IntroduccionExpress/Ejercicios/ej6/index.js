let express = require('express')


let app = express()

let estudiantesCurso = ["Gloria", "Maria", "Nuria", "Ester", "Mildry", "Marina", "Kevin", "Carlos", "Antonio", "Victor", "Jose"]

app.get('/agregarele/:nombre', function(req, res){
    estudiantesCurso.push(req.params.nombre)
    res.send(estudiantesCurso)

})


app.listen(process.env.PORT || 3000, (e)=>{
    e
    ? console.error('Servidor no conectado')
    : console.log('Servidor a la escucha en el puerto:' + (process.env.PORT || 3000))
})