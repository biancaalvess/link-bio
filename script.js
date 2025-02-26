document.addEventListener('DOMContentLoaded', () => {
    const particleContainer = document.createElement('div');
    particleContainer.classList.add('particles');
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('span');
        const size = Math.random() * 5 + 2;
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}px`;
        particle.style.top = `${posY}px`;

        particleContainer.appendChild(particle);
    }
});
