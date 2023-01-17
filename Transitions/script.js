console.log('connected')

const ball = document.getElementById('ball');
document.addEventListener('click', (e) => {
  ball.style.transform = `translateY(${e.clientY - 25}px)`;
  ball.style.transform += `translateX(${e.clientX - 25}px)`;
}, false);