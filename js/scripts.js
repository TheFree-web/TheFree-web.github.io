// Voor toekomstige interactieve functies
console.log("The Free website loaded");

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const btnLuister = document.querySelector('.btn-luister');
    const audioPlayer = document.getElementById('audio-player');

    btnLuister.addEventListener('click', (e) => {
        e.preventDefault();

        // Start audio en check voor fouten
        audioPlayer.play().catch((err) => {
            console.log("Audio kon niet starten:", err);
        });
    });
});
