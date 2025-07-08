alert('JS is working!');

document.addEventListener('DOMContentLoaded', () => {
  const flowerField = document.querySelector('.flower-field');

  if (flowerField) {
    for (let i = 0; i < 30; i++) {
      const flower = document.createElement('div');
      flower.classList.add('flower');
      flower.style.top = `${Math.random() * 1500}px`;
      flower.style.left = `${Math.random() * 100}%`;

      for (let p = 0; p < 5; p++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.transform = `rotate(${p * 72}deg) translate(15px)`;
        flower.appendChild(petal);
      }

      const center = document.createElement('div');
      center.classList.add('center');
      flower.appendChild(center);

      flowerField.appendChild(flower);
    }
  }

  // Bloom flowers when scrolling into view
  window.addEventListener('scroll', () => {
    const flowers = document.querySelectorAll('.flower');
    const scrollY = window.scrollY + window.innerHeight;
    flowers.forEach(flower => {
      const flowerTop = flower.offsetTop;
      if (scrollY > flowerTop) {
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
});