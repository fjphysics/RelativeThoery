

function updateScale() {
  const container = document.querySelector('.container');
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  
  if (windowWidth < 1280) {
    const scale = windowWidth / 1280;
    container.style.transform = `scale(${scale})`;
    container.style.left = '0';
    container.style.top = `${(windowHeight - 720 * scale) / 2}px`;
  } else {
    const scale = windowHeight / 720;
    container.style.transform = `scale(${scale})`;
    container.style.left = `${(windowWidth - 1280 * scale) / 2}px`;
    container.style.top = '0';
  }
}

window.addEventListener('resize', updateScale);
updateScale();

// 小车动画
const car = document.querySelector('.car');
let pos = 0;
function animateCar() {
  pos = (pos + 1) % 1280;
  car.style.left = `${pos}px`;
  requestAnimationFrame(animateCar);
}
animateCar();
