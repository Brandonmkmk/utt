//evento para que el buscador reconozca las teclas en tiempo real
document.addEventListener('keyup', e => {
    //condicional que selecciona el id del input del buscador
    if(e.target.matches('#pelicula')) {
        //seleccion de todas las tarjetas proveniente de la clase "tarjetas"
        document.querySelectorAll('.tarjetas').forEach(pelicula => {
            //todas las palabras ingresadas se convierten en minusculas
            pelicula.textContent.toLowerCase().includes(e.target.value)
            //si las palabras que introducimos en el input no coinciden con el titulo de alguna pelicula, estas se remueven
            ? pelicula.classList.remove('filtro')
            //si las pabalas que ingresamos en el input coinciden con algun titulo, estas se mostraran
            : pelicula.classList.add('filtro');
        })
    }

})

