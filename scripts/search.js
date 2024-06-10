let buscar = document.getElementById('buscador');
let items = document.querySelectorAll('.hijo');''

buscar.addEventListener('input', function() { // => Asigna el evento 'input' a la función
    let query = buscar.value.toLowerCase(); // => Convierte la cadena de texto en minusculas
    items.forEach(function(item) { // => Iteramos sobre cada uno de los elementos usando el método forEach. Para cada item en items, ejecutamos la función proporcionada.
        let title = item.querySelector('.item').textContent.toLowerCase(); // => Buscamos el elemento con la clase ".item"
        if (title.includes(query)) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
});