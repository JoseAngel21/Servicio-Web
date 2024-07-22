function cargar() {
    fetch("https://jsonplaceholder.typicode.com/users").then (function name(datos) {
       return datos.json();
    }).then(function name(contacto) {
        var contacto = contacto[0];
        console.log(contacto);
    })
}