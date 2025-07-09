

document.addEventListener('DOMContentLoaded', () => {
  const flowerField = document.querySelector('.flower-field');

if (flowerField) {
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    const letter = document.querySelector('.letter');
    const letterTop = letter.offsetTop;
    const letterHeight = letter.offsetHeight;
    
    flower.style.top = `${Math.random() * letterHeight}px`;
    flower.style.left = `${Math.random() * 100}%`;

    // Add petals evenly spaced around the center
    for (let p = 0; p < 12; p++) {
      const petal = document.createElement('div');
      petal.classList.add('petal');
      petal.style.transform = `translate(-50%, -90%)rotate(${p * 30}deg)`;
       petal.style.animationDelay = `${p * 0.05}s`;
      flower.appendChild(petal);
    }

    const center = document.createElement('div');
    center.classList.add('center');
    flower.appendChild(center);


    flowerField.appendChild(flower);
  }
}
});

  // Bloom on scroll with staggered delay
window.addEventListener('load', () => {
  window.dispatchEvent(new Event('scroll'));
});
window.addEventListener('scroll', () => {
  const flowers = document.querySelectorAll('.flower');
  const scrollY = window.scrollY + window.innerHeight;
  flowers.forEach((flower, index) => {
    const flowerTop = flower.offsetTop;
    if (scrollY > flowerTop && !flower.classList.contains('bloomed')) {
      flower.style.transitionDelay = `${index * 100}ms`;
      flower.classList.add('bloomed');
    }
  });
});

  window.dispatchEvent(new Event('scroll'));

  // Floating hearts
  function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.top = '100%';
    document.querySelector('.heart-container').appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  }

  setInterval(createHeart, 500);
  
