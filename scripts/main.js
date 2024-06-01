document.addEventListener('DOMContentLoaded', function() {
    const cartCounter = document.getElementById('cont');
    const descriptions = document.querySelectorAll('.descripcion');

    let cartCount = 0;

    descriptions.forEach(description => { // => Función flecha - ForEach => Selecciona todos los elementos de descripción (hijo figcaption h6)
        description.addEventListener('click', function() { // => Maneja el evento
            cartCount += 1;
            cartCounter.innerHTML = `<img src="./assets/CARRO-COMPRAS.svg" class="carrito">${cartCount}`;

            if (cartCount > 9) {
                alert('No puedes comprar más, nos dejarás sin stock');
                cartCount -= 1;
                cartCounter.innerHTML = `<img src="./assets/CARRO-COMPRAS.svg" class="carrito">${cartCount}`;
            }
        });
    });
});
