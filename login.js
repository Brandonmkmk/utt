// declaracion para los objetos del formulario
const usuario = document.getElementById('user');
const password = document.getElementById('contraseña');
const formulario = document.getElementById('formlogin')

//Generando eventos
formulario.addEventListener('submit', login);

//Funciones a ejecutar
function login(e) {
    e.preventDefault();

    let usuarioVal = usuario.value;
    let passwordVal = password.value;

    if(usuarioVal == '' || passwordVal == ''){
        creaMensaje('verifica tus datos', 'danger');
        return;
    }
    if(localStorage.getItem('usuario')) {
        let objeto = JSON.parse(localStorage.getItem('usuario'));

        if(usuarioVal == objeto.user && passwordVal == objeto.pass) {
            creaMensaje('login exitoso', 'success');
            localStorage.setItem('sesion', 'activa');
            setTimeout(function() {
                window.open('./index.html', '_self');
            },1000);
        }else{
            creaMensaje('usuario o contraseña fallida', 'danger');
          }
        }else{
            creaMensaje('no hay registros', 'danger');
        }
    }



