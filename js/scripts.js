// Voor toekomstige interactieve functies
console.log("The Free website loaded");

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // Toggle menu
    if(navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
    } else {
        navLinks.style.display = 'flex';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnLuister = document.querySelector('.btn-luister');
    const audioPlayer = document.getElementById('audio-player');

    btnLuister.addEventListener('click', (e) => {
        e.preventDefault();
        audioPlayer.play();
    });
});
