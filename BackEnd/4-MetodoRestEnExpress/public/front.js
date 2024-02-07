fetch('/personas').then((res)=>res.json()).then((data)=>{
    data.forEach(persona => {
        document.getElementById('lista').innerHTML += `<div><p>${persona.nombre}</p><p>${persona.apellido}</p><p>${persona.edad}</p></div>`        
    });
})