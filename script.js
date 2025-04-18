
const container = document.querySelector('.particles-blackmirror');

    for (let i = 0; i < 80; i++) {
        const particle = document.createElement('span');

        const size = Math.random() * 3 + 1;
        const duration = Math.random() * 10 + 5;
        const delay = Math.random() * 15;
        const left = Math.random() * 100;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${left}vw`;
        particle.style.bottom = `-${Math.random() * 100}px`;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `${delay}s`;

        container.appendChild(particle);
}
