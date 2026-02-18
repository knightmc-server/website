// script.js
function joinServer() {
    alert("Dołącz do serwera: IP: play.knightmc.com");
}

// Dodaj interaktywność, np. animacje na hover
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Animacja dla feature items
    const features = document.querySelectorAll('.feature-item, .store-item');
    features.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`;
    });
});
