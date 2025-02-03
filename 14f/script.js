// script.js
// Obtener elementos
const button = document.querySelector('.heart-button');
const imageContainer = document.querySelector('.image-container');
const textContainer = document.querySelector('.text-container');

// Texto a escribir
const text = "' Una flor para otra flor '";
let index = 0;

// Función para escribir el texto letra por letra
function typeText() {
    if (index < text.length) {
        textContainer.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 100); // Velocidad de escritura (100ms por letra)
    } else {
        textContainer.style.borderRight = 'none'; // Elimina el cursor al terminar
    }
}

// Al hacer clic en el botón
button.addEventListener('click', () => {
    // Desaparecer el botón poco a poco
    button.style.opacity = '0';
    button.style.transition = 'opacity 1s ease-in-out';

    // Mostrar el contenedor de la imagen
    imageContainer.style.display = 'block';
    // Reiniciar la animación
    imageContainer.style.animation = 'none';
    void imageContainer.offsetWidth; // Truco para reiniciar la animación
    imageContainer.style.animation = 'aparecerImagen 2s ease-in-out forwards';

    // Mostrar el texto después de que termine la animación de la imagen
    imageContainer.addEventListener('animationend', () => {
        textContainer.style.display = 'block';
        typeText(); // Iniciar la animación de escritura
    });
});