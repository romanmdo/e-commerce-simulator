document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button');
    const cartCounter = document.getElementById('cont');
    const imagenes = document.querySelectorAll('img');

    const desc = document.getElementById('descripcion');
    const desc2 = document.getElementById('descripcion2');
    const desc3 = document.getElementById('descripcion3');
    const desc4 = document.getElementById('descripcion4');
    const desc5 = document.getElementById('descripcion5');
    const desc6 = document.getElementById('descripcion6');
    const desc7 = document.getElementById('descripcion7');
    const desc8 = document.getElementById('descripcion8');


    let cartCount = 0;

    buttons.forEach(button => { // => Eveneto que aumenta +1 por los botones 
        button.addEventListener('click', function() {
            cartCount = cartCount + 1;
            cartCounter.innerHTML = `<img src="./assets/CARRO-COMPRAS.svg" class="carrito">${cartCount}`;

            if(cartCount > 9){
                alert('No puedes comprar más, nos dejaras sin stock')
                cartCount = cartCount - 1;
            }
        });
    });

    addEventListener('click', function() { // => Evento que aumenta +1 por la descripción
        cartCount = cartCount + 1; 
        cartCounter.innerHTML = `<img src="./assets/CARRO-COMPRAS.svg" class="carrito">${cartCount}`;

        if(cartCount > 9){
            alert('No puedes comprar más, nos dejaras sin stock')
            cartCount = cartCount - 1;
        }
    });

    imagenes.forEach(imagen => {
        imagen.addEventListener('mouseover', function() {
            desc.textContent = 'Querés los auriculares de tu ídolo? ¡Añádelos al carrito ahora mismo!';
            desc.classList.add('cta-button');

            desc2.textContent = 'Queres cockear como luken? ¡Añadelo al carrito ahora mismo!';
            desc2.classList.add('cta-button');

            desc3.textContent = 'Queres shiftear como un pro? ¡Añadelo al carrito ahora mismo!';
            desc3.classList.add('cta-button');

            desc4.textContent = 'El mejor gabinete? ¡Añadelo al carrito ahora mismo!';
            desc4.classList.add('cta-button');

            desc5.textContent = 'El mejor AMD? ¡Añadelo al carrito ahora mismo!';
            desc5.classList.add('cta-button');

            desc6.textContent = 'Queres cockear como luken? ¡Añadelo al carrito ahora mismo!';
            desc6.classList.add('cta-button');

            desc7.textContent = 'Queres shiftear como un pro? ¡Añadelo al carrito ahora mismo!';
            desc7.classList.add('cta-button');

            desc8.textContent = 'El mejor I9? ¡Añadelo al carrito ahora mismo!';
            desc8.classList.add('cta-button');
        }); 
    });
});
