let sol = document.getElementById("modo-luz")
let luna = document.getElementById("modo-batman")

sol.addEventListener("click", cambioBlanco);
luna.addEventListener("click", cambioNegro);

function cambioBlanco(){
    console.log('ANDO 1');

    document.documentElement.style.setProperty('--background', '#F3F4F6')
    document.documentElement.style.setProperty('--text', '#666666')

    // ## Color Cajas 1 - Modo Luz ## \\
    document.documentElement.style.setProperty('--botom-bg', '#4b57b6')
    document.documentElement.style.setProperty('--accent', '#000000')
    document.documentElement.style.setProperty('--primary', '#00004d')

    // ## Color Cajas 2 - Modo Luz ## \\
    document.documentElement.style.setProperty('--botom-bg2', '#31419e')

}

function cambioNegro(){
    console.log('ANDO 2');

    document.documentElement.style.setProperty('--background', '#212735')
    document.documentElement.style.setProperty('--text', '#ffffff')

    // ## Color Cajas 1 - Modo Luz ## \\
    document.documentElement.style.setProperty('--botom-bg', '#242428')
    document.documentElement.style.setProperty('--accent', '#0f5aa1')
    document.documentElement.style.setProperty('--primary', '#0f5aa1')

    // ## Color Cajas 2 - Modo Luz ## \\
    document.documentElement.style.setProperty('--botom-bg2', '#262632')
}
