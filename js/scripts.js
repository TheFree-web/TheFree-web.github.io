// Voor toekomstige interactieve functies
console.log("The Free website loaded");

document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    });

    // Luister nu knop
    const btnLuister = document.querySelector('.btn-luister');
    const audioPlayer = document.getElementById('audio-player');

    btnLuister.addEventListener('click', (e) => {
        e.preventDefault();
        audioPlayer.play();
    });
});
