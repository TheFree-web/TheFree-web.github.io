document.addEventListener("DOMContentLoaded", function() {

    // ===== Hamburger Menu =====
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('nav ul');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // ===== Scrolled Header =====
    const header = document.querySelector('header');

    if (header) {
        window.addEventListener('scroll', () => {
            header.classList.toggle('scrolled', window.scrollY > 50);
        });
    }

    // ===== Contact Form Validation =====
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            if (!contactForm.checkValidity()) {
                e.preventDefault();
                alert('Vul alle velden correct in.');
            }
        });
    }

    // ===== Hero Video =====
    const heroVideo = document.getElementById('hero-video');
    const heroButton = document.getElementById('sound-toggle');
    const soundPrompt = document.getElementById('sound-prompt');

    if (heroVideo && heroButton) {

        // Eerste click start audio op homepagina
        if (document.body.classList.contains('home')) {
            const initHeroAudio = () => {
                heroVideo.muted = false;
                heroVideo.volume = 1;
                heroVideo.play().catch(err => console.error(err));

                if (soundPrompt) {
                    soundPrompt.style.display = 'none';
                }

                updateSoundButton();
                document.body.removeEventListener('click', initHeroAudio);
            };

            document.body.addEventListener('click', initHeroAudio);
        }

        function updateSoundButton() {
            if (heroVideo.muted) {
                heroButton.textContent = "🔇 Geluid uit";
                heroButton.classList.remove("pulse");
            } else {
                heroButton.textContent = "🔊 Geluid aan";
                heroButton.classList.add("pulse");
            }
        }

        heroButton.addEventListener('click', () => {
            heroVideo.muted = !heroVideo.muted;

            if (!heroVideo.muted) {
                heroVideo.volume = 1;
                heroVideo.play().catch(err => console.error(err));
            }

            updateSoundButton();
        });

        // juiste status bij laden
        updateSoundButton();
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
