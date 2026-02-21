document.addEventListener("DOMContentLoaded", () => {

    /* =========================================================
       BASIS UI
    ========================================================== */

    // ===== Hamburger =====
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.querySelector("nav ul");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // ===== Scrolled Header =====
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("scrolled", window.scrollY > 50);
        });
    }

    // ===== Contact Form =====
    const contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            if (!contactForm.checkValidity()) {
                e.preventDefault();
                alert("Vul alle velden correct in.");
            }
        });
    }

    /* =========================================================
       HERO VIDEO
    ========================================================== */

    const heroVideo  = document.getElementById("hero-video");
    const heroButton = document.getElementById("sound-toggle");
    const soundPrompt = document.getElementById("sound-prompt");

    const isHome = document.body.classList.contains("home");

    if (heroVideo) {

        // --- Helper: update button state ---
        const updateHeroButton = () => {
            if (!heroButton) return;

            if (heroVideo.muted || heroVideo.volume === 0) {
                heroButton.textContent = "🔇 Geluid uit";
                heroButton.classList.remove("pulse");
            } else {
                heroButton.textContent = "🔊 Geluid aan";
                heroButton.classList.add("pulse");
            }
        };

        // --- HOME: eerste klik activeert geluid ---
        if (isHome) {
            document.body.addEventListener("click", () => {
                heroVideo.muted = false;
                heroVideo.volume = 1;
                heroVideo.play().catch(() => {});
                if (soundPrompt) soundPrompt.style.display = "none";
                updateHeroButton();
            }, { once: true });
        }

        // --- Toggle knop ---
        if (heroButton) {
            updateHeroButton();

            heroButton.addEventListener("click", (e) => {
                e.stopPropagation(); // voorkomt home-trigger
                heroVideo.muted = !heroVideo.muted;

                if (!heroVideo.muted) {
                    heroVideo.play().catch(() => {});
                }

                updateHeroButton();
            });

            heroVideo.addEventListener("volumechange", updateHeroButton);
        }
    }

    /* =========================================================
       MUZIEKPLAYER (centrale audio)
    ========================================================== */

    const audioPlayer = new Audio();
    let currentButton = null;

    const playButtons = document.querySelectorAll(".play-btn");

    playButtons.forEach(btn => {

        btn.addEventListener("click", () => {

            const src = btn.dataset.src;
            if (!src) return;

            // --- Hero pauzeren bij muziekstart ---
            if (heroVideo) {
                heroVideo.muted = true;
                heroVideo.pause();
                if (heroButton) {
                    heroButton.textContent = "🔇 Geluid uit";
                    heroButton.classList.remove("pulse");
                }
            }

            // --- Zelfde knop = pauze ---
            if (currentButton === btn) {
                audioPlayer.pause();
                btn.classList.remove("playing");
                currentButton = null;
                return;
            }

            // --- Andere knop actief ---
            if (currentButton) {
                currentButton.classList.remove("playing");
            }

            audioPlayer.src = src;
            audioPlayer.play().catch(() => {});
            btn.classList.add("playing");
            currentButton = btn;
        });

    });

    // Reset state wanneer nummer eindigt
    audioPlayer.addEventListener("ended", () => {
        if (currentButton) {
            currentButton.classList.remove("playing");
            currentButton = null;
        }
    });

});
