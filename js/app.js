const personas = [
    new Persona('Juan', 'Perez')
]

function mostrarPersonas() {
    let texto = '';
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`
    }

    document.getElementById('personas').innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms['forma'];
    const nombre = forma['nombre'];
    const apellido = forma['apellido'];

    if (nombre.value === '' || apellido.value === '') {
        alert("Campos vacíos");
    } else if (!/^[a-zA-Z]+$/.test(nombre.value) || !/^[a-zA-Z]+$/.test(apellido.value)) {
        alert("Solo se permiten letras en los campos de nombre y apellido.");
    } else {
        const persona = new Persona(nombre.value, apellido.value);
        personas.push(persona);
        mostrarPersonas();
    }
}
