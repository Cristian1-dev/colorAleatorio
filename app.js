const texto = document.getElementsByClassName('contenedor-color-aleatorio')
const boton = document.getElementById("boton-cambio");


const colorAleatorioHex = () => {
    let digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i=0; i<6; i++){
        const colorAleatorio = Math.floor(Math.random() * digitos.length);
        colorHex += digitos[colorAleatorio];

    }
    return colorHex;
}

boton.addEventListener('click', () => {
    let colorAleatorio = colorAleatorioHex();
    texto[0].textContent = colorAleatorio;
    document.body.style.backgroundColor = colorAleatorio;    
})






