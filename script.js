const particleContainer = document.querySelector('.particle-container');
const particleCount = 100; // Number of particles

for (let i = 0; i < particleCount; i++) {
  createParticle();
}

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.top = `${Math.random() * 100}vh`;
  particleContainer.appendChild(particle);
}

const particles = document.querySelectorAll('.particle');

// Animate particles
particles.forEach((particle) => {
  gsap.to(particle, {
    x: () => Math.random() * window.innerWidth,
    y: () => Math.random() * window.innerHeight,
    duration: () => Math.random() * 2 + 1,
    repeat: -1,
    yoyo: true,
    ease: 'power1.inOut',
  });
});
