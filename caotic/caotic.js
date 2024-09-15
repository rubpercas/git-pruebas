const imageContainer = document.querySelector('.image-container');
const button = document.querySelector('.danger-button');

// Función para generar una posición aleatoria dentro del contenedor
function getRandomPosition() {
  const width = imageContainer.offsetWidth;
  const height = imageContainer.offsetHeight;
  return {
    x: Math.random() * width,
    y: Math.random() * height
  };
}

// Función para crear una imagen aleatoria
function createImage() {
  const image = new Image();
  image.classList.add('image');
  image.src = 'https://picsum.photos/200/300'; // Puedes cambiar la URL por tu propia fuente de imágenes
  image.style.left = getRandomPosition().x + 'px';
  image.style.top = getRandomPosition().y + 'px';

  image.addEventListener('mouseover', () => {
    const directions = ['left', 'right', 'up', 'down', 'topleft', 'topright', 'bottomleft', 'bottomright'];
    const randomDirection = directions[Math.floor(Math.random() * directions.length)];
    const distance = Math.random() * 1000; // Ajusta la distancia de desplazamiento
    const rotation = Math.random() * 360;

    let transformValue = '';
    switch (randomDirection) {
      case 'left':
        transformValue = `translateX(-${distance}px)`;
        break;
      case 'right':
        transformValue = `translateX(${distance}px)`;
        break;
      case 'up':
        transformValue = `translateY(-${distance}px)`;
        break;
      case 'down':
        transformValue = `translateY(${distance}px)`;
        break;
      case 'topleft':
        transformValue = `translate(-${distance}px, -${distance}px)`;
        break;
      case 'topright':
        transformValue = `translate(${distance}px, -${distance}px)`;
        break;
      case 'bottomleft':
        transformValue = `translate(-${distance}px, ${distance}px)`;
        break;
      case 'bottomright':
        transformValue = `translate(${distance}px, ${distance}px)`;
        break;
    }
    transformValue += ` rotate(${rotation}deg)`;
    image.style.transform = transformValue;
    image.style.transform = `scale(0.3) ${transformValue}`;
  });

  imageContainer.appendChild(image);
}

// Crear múltiples imágenes
for (let i = 0; i < 100; i++) {
  createImage();
}