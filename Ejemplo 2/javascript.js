// Evita el desplazamiento horizontal en dispositivos móviles
function preventHorizontalScroll(event) {
    if (event.touches.length > 1) {
      event.preventDefault();
    }
  }
  
  // Agregar un manejador de eventos a 'touchmove'
  document.addEventListener('touchmove', preventHorizontalScroll, { passive: false });
  