const {paises, favoritos} = require('./modulo')

let paisesArray = []

paisesArray = paises.a.concat(paises.b,paises.c)

//console.log(paisesArray)

let paisesFavoritos = []

for(let i = 0; i < favoritos.length; i++){
    paisesFavoritos.push(paisesArray[favoritos[i]])
}

console.log(paisesFavoritos)

