function aplicarColorAleatorio() {
    const colores = ['green', 'blue', 'red'];
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];

    const titulo = document.getElementById('titulo1');
        if (titulo) {
    titulo.style.color = colorAleatorio;
    }
}

