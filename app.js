
const container = document.querySelector('.container');
const toggleButton = document.querySelector('.btn-mode');


toggleButton.addEventListener('click', () => {
    container.classList.toggle('dark-mode');
});

const button = document.querySelector('.btn-mode');

// Función para activar la animación (hover)
function animateButtonEnter() {
    button.style.backgroundColor = "rgb(255, 87, 51)"; // Cambiar color de fondo
    button.style.color = "black"; // Cambiar color del texto
    button.style.borderRadius = "20px"; // Cambiar forma (redondeada)
    button.style.transform = "scale(1.1)"; // Ampliar ligeramente
}

// Función para restaurar el estado original (mouseout)
function animateButtonLeave() {
    button.style.backgroundColor = "rgb(30, 30, 30)"; // Fondo original
    button.style.color = "white"; // Texto original
    button.style.borderRadius = "4px"; // Forma original
    button.style.transform = "scale(1)"; // Tamaño original
}

// Agregar eventos al botón
button.addEventListener('mouseover', animateButtonEnter);
button.addEventListener('mouseout', animateButtonLeave);