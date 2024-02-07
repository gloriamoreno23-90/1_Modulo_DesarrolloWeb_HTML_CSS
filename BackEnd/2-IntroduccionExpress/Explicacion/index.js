const express = require('express')

const app = express()

app.get('/', function(req,res){
    res.send('hola caracola')
})

app.get('/despedida', function(req,res){
    res.send('Adios caracola')
})

app.listen(3000)