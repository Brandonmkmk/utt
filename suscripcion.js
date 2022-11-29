const gmail = document.getElementById('correo');
const BtnEnviar = document.getElementById('enviar');

BtnEnviar.addEventListener('click', enviar);

function enviar() {
    let gmailVal = gmail.value;
    
    if(gmailVal == 'brandonxd611@gmail.com') {
        alert('gracias, te enviaremos un correo pronto para seguir con tu suscripcion');
    }else{
        alert('ingresa un correo porfavor.');
    }
}