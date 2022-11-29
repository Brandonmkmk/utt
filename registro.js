//declaracion de variables
const nombre = document.getElementById('name');
const direccion = document.getElementById('correo');
const user = document.getElementById('user');
const pass = document.getElementById('contraseña');
const formulario = document.getElementById('formregistro');

//Generando eventos
formulario.addEventListener('submit', registro);

//Creando funciones

function registro (e) {
    e.preventDefault();

    let nombreVal = nombre.value;
    let direccionVal = direccion.value;
    let userVal = user.value;
    let passVal = pass.value;

    if(nombreVal == '' || userVal == '' || direccionVal == '' || passVal == '') {
        creaMensaje('Verifica tus campos', 'danger');
        return;

    }

    const usuario = {
        nombre: nombreVal,
        correo : direccionVal,
        user: userVal,
        pass: passVal,


    }
    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = '';
    direccion.value = '';
    user.value = '';
    pass.value = '';

    creaMensaje('usuario registrado', 'success');
    
}



 




 
