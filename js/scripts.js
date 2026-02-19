document.addEventListener("DOMContentLoaded", function() {

    // ===== Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => navMenu.classList.toggle('active'));
    }

    // ===== Scrolled Header =====
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 50));
    }

    // ===== Contact Form Validation =====
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!contactForm.checkValidity()) {
                e.preventDefault();
                alert('Vul alle velden correct in.');
                return;
            }
        });
    }

    // ===== Hero Video =====
    const heroVideo = document.getElementById('hero-video');
    const heroButton = document.getElementById('sound-toggle');
    const soundPrompt = document.getElementById('sound-prompt');

    if(heroVideo){
        // Eerste click start audio op homepagina
        if(document.body.classList.contains('home')){
            const initHeroAudio = () => {
                heroVideo.muted = false;
                heroVideo.volume = 1;
                heroVideo.play().catch(err => console.error(err));
                if(soundPrompt) soundPrompt.style.display = 'none';
                document.body.removeEventListener('click', initHeroAudio);
            };
            document.body.addEventListener('click', initHeroAudio);
        }

        // Hero-knop aan/uit
        if(heroButton){
            heroButton.addEventListener('click', () => {
                if(heroButton.classList.contains('playing')){
                    heroVideo.muted = true;
                    heroButton.classList.remove('playing'); // groen
                } else {
                    heroVideo.muted = false;
                    heroVideo.volume = 1;
                    heroVideo.play().catch(err => console.error(err));
                    heroButton.classList.add('playing'); // rood
                }
            });
        }
    }

    // ===== Audio-only: stop andere audio's als één wordt afgespeeld =====
    const audios = document.querySelectorAll("audio");
    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                    otherAudio.currentTime = 0;
                }
            });
        });
    });

});
const video = document.getElementById('hero-video');
const button = document.getElementById('sound-toggle');

button.addEventListener('click', () => {
    // geluid aan/uit togglen
    video.muted = !video.muted;

    // knipper-class toevoegen als geluid aan is
    if (!video.muted) {
        button.classList.add('knipper');
    } else {
        button.classList.remove('knipper');
    }
});
const video = document.getElementById('hero-video');
const button = document.getElementById('sound-toggle');

function updateSoundButton() {
    if (video.muted) {
        button.textContent = "🔇 Geluid uit";
        button.classList.remove("pulse");
    } else {
        button.textContent = "🔊 Geluid aan";
        button.classList.add("pulse");
    }
}

// klik-event
button.addEventListener("click", () => {
    video.muted = !video.muted;
    updateSoundButton();
});

// juiste status instellen bij laden pagina
updateSoundButton();

