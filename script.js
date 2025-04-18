const container = document.querySelector('.particles-blackmirror');
const chars = "01⌘Δ≡░▒▓█╬§@#&%$!?";

for (let i = 0; i < 100; i++) {
    const symbol = document.createElement('span');
    symbol.innerText = chars[Math.floor(Math.random() * chars.length)];

    const fontSize = Math.random() * 12 + 12;
    const duration = Math.random() * 15 + 8;
    const delay = Math.random() * 15;
    const left = Math.random() * 100;

    symbol.style.left = `${left}vw`;
    symbol.style.bottom = `-${Math.random() * 100}px`;
    symbol.style.fontSize = `${fontSize}px`;
    symbol.style.animationDuration = `${duration}s`;
    symbol.style.animationDelay = `${delay}s`;

    container.appendChild(symbol);
}

const audio = document.getElementById('bg-sound');

document.body.addEventListener('click', () => {
    audio.muted = false;
    audio.volume = 0.3;
    audio.play();
}, { once: true });