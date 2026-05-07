/* =========================================================
   MOBILE MENU
========================================================= */

const mobileBtn =
    document.getElementById("mobileBtn");

const navLinks =
    document.getElementById("navLinks");

mobileBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});

/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

/* =========================================================
   HEADER GLOW ON SCROLL
========================================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector("header");

    if(window.scrollY > 40){

        header.style.boxShadow =
            "0 0 35px rgba(255,31,143,.35)";

        header.style.borderBottom =
            "1px solid rgba(255,31,143,.45)";

    } else {

        header.style.boxShadow =
            "0 0 20px rgba(255,31,143,.12)";

        header.style.borderBottom =
            "1px solid rgba(255,31,143,.25)";
    }

});

/* =========================================================
   HERO PARALLAX EFFECT
========================================================= */

const heroImage =
    document.querySelector(".hero-image");

window.addEventListener("mousemove", (e) => {

    const x =
        (window.innerWidth / 2 - e.pageX) / 40;

    const y =
        (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* =========================================================
   FADE IN ON SCROLL
========================================================= */

const fadeElements =
    document.querySelectorAll(
        ".card, .show, .album, .contact-box"
    );

const observer =
    new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.style.opacity = "1";

                entry.target.style.transform =
                    "translateY(0px)";
            }

        });

    }, {
        threshold:0.15
    });

fadeElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
        "translateY(40px)";

    el.style.transition =
        "all .8s ease";

    observer.observe(el);

});

/* =========================================================
   BUTTON GLOW PULSE
========================================================= */

const buttons =
    document.querySelectorAll(".btn-primary");

buttons.forEach(button => {

    setInterval(() => {

        button.animate([

            {
                boxShadow:
                "0 0 10px rgba(255,31,143,.2)"
            },

            {
                boxShadow:
                "0 0 30px rgba(255,31,143,.9)"
            },

            {
                boxShadow:
                "0 0 10px rgba(255,31,143,.2)"
            }

        ], {

            duration:1800

        });

    }, 2500);

});

/* =========================================================
   RANDOM NEON FLICKER
========================================================= */

const logo =
    document.querySelector(".logo-main");

setInterval(() => {

    logo.style.opacity =
        (Math.random() > 0.92)
        ? "0.75"
        : "1";

}, 120);

/* =========================================================
   SMOOTH ACTIVE NAV LINK
========================================================= */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop;

        if(window.scrollY >= sectionTop - 180){

            current =
                section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if(
            link.getAttribute("href") ===
            `#${current}`
        ){

            link.classList.add("active");
        }

    });

});

/* =========================================================
   CONSOLE EASTER EGG
========================================================= */

console.log(`
████████╗██╗  ██╗███████╗
╚══██╔══╝██║  ██║██╔════╝
   ██║   ███████║█████╗
   ██║   ██╔══██║██╔══╝
   ██║   ██║  ██║███████╗
   ╚═╝   ╚═╝  ╚═╝╚══════╝

███████╗██████╗ ███████╗███████╗
██╔════╝██╔══██╗██╔════╝██╔════╝
█████╗  ██████╔╝█████╗  █████╗
██╔══╝  ██╔══██╗██╔══╝  ██╔══╝
██║     ██║  ██║███████╗███████╗
╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝

███╗   ██╗██╗   ██╗████████╗███████╗
████╗  ██║██║   ██║╚══██╔══╝╚══███╔╝
██╔██╗ ██║██║   ██║   ██║     ███╔╝
██║╚██╗██║██║   ██║   ██║    ███╔╝
██║ ╚████║╚██████╔╝   ██║   ███████╗
╚═╝  ╚═══╝ ╚═════╝    ╚═╝   ╚══════╝

NEON INDIE PUNK FROM BELGIUM
`);