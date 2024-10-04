// Contador: construido con ‘setInterval()’ para mostrar la cuenta regresiva y un audio de alarma.

let intervalo; // Variable para almacenar el intervalo

function contador() {
    let tiempodado = +document.getElementById('segundos').value;
    let tiempoRestante = tiempodado; // Guardamos el tiempo restante

    // Inicia la cuenta regresiva en un intervalo de 1 segundo
    intervalo = setInterval(() => {
        document.getElementById('salida').textContent = tiempoRestante;
        tiempoRestante--;

        if (tiempoRestante < 0) {
            clearInterval(intervalo); // Detiene el intervalo
            finalizar(); // Llama a la función finalizar
        }
    }, 1000); // Actualiza cada segundo
}

function finalizar() {
    document.getElementById('salida').textContent = 'ON';
    let alarma = document.getElementById('alarma');
    alarma.play();
}

function reiniciar() {
    clearInterval(intervalo); // Detiene el intervalo al reiniciar
    location.reload();
}
