/* =====================================================
   PAGE LOADER
===================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.classList.add("hidden");
    }, 700);

});


/* =====================================================
   NAVBAR SCROLL
===================================================== */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("open");

});


/* Close mobile menu when clicking link */

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("open");

    });

});


/* =====================================================
   SMOOTH SECTION NAVIGATION
===================================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =====================================================
   COUNTDOWN
===================================================== */

const weddingDate = new Date(
    "December 5, 2026 19:00:00"
).getTime();


function updateCountdown() {

    const now = new Date().getTime();

    const difference = weddingDate - now;


    if (difference <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;
    }


    const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (difference % (1000 * 60)) /
        1000
    );


    document.getElementById("days").textContent =
        String(days).padStart(2, "0");

    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(updateCountdown, 1000);


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =====================================================
   CUSTOM CURSOR
===================================================== */

const cursor = document.querySelector(".cursor");
const cursorRing = document.querySelector(".cursor-ring");

let mouseX = 0;
let mouseY = 0;

let ringX = 0;
let ringY = 0;


document.addEventListener("mousemove", event => {

    mouseX = event.clientX;
    mouseY = event.clientY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

});


function animateCursor() {

    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;

    cursorRing.style.left = `${ringX}px`;
    cursorRing.style.top = `${ringY}px`;

    requestAnimationFrame(animateCursor);

}

animateCursor();


/* =====================================================
   HOVER EFFECT FOR CLICKABLE AREAS
===================================================== */

const clickableElements = document.querySelectorAll(
    "a, button, .gallery-item, .couple-image, .venue-image"
);


clickableElements.forEach(element => {

    element.addEventListener("mouseenter", () => {

        document.body.classList.add("hovering");

    });

    element.addEventListener("mouseleave", () => {

        document.body.classList.remove("hovering");

    });

});


/* =====================================================
   MUSIC
===================================================== */

const music = document.getElementById("weddingMusic");
const musicBtn = document.getElementById("musicBtn");


let musicPlaying = false;


/*
   Browsers commonly block autoplay with sound.

   We attempt autoplay first.
   If blocked, music starts after the user's first
   interaction.
*/

async function startMusic() {

    try {

        await music.play();

        musicPlaying = true;

        musicBtn.classList.add("playing");

    } catch (error) {

        console.log(
            "Autoplay blocked. Waiting for user interaction."
        );

    }

}


/* Try autoplay */

window.addEventListener("load", () => {

    startMusic();

});


/* Start music after first interaction */

document.addEventListener(
    "click",
    () => {

        if (!musicPlaying) {
            startMusic();
        }

    },
    {
        once: true
    }
);


/* Music button */

musicBtn.addEventListener("click", async event => {

    event.stopPropagation();


    if (music.paused) {

        try {

            await music.play();

            musicPlaying = true;

            musicBtn.classList.add("playing");

        } catch (error) {

        /*
         * Browser blocked autoplay.
         * Music will start after the user's first interaction.
         */

        console.log(
            "Autoplay was blocked. Waiting for user interaction."
        );

    }

}


/* =====================================================
   TRY TO PLAY AUTOMATICALLY WHEN PAGE LOADS
===================================================== */

window.addEventListener("load", () => {

    playMusic();

});


/* =====================================================
   FALLBACK
   If browser blocks autoplay, start music when
   the visitor first interacts with the page.
===================================================== */

document.addEventListener("click", () => {

    if (music.paused) {

        playMusic();

    }

}, { once: true });


/* =====================================================
   MUSIC BUTTON
   Button can still pause/play music manually.
===================================================== */

musicBtn.addEventListener("click", async (event) => {

    event.stopPropagation();


        }

    } else {

        music.pause();

        musicPlaying = false;

        musicBtn.classList.remove("playing");

    }

});

/* =====================================================
   HERO VIDEO
===================================================== */

const heroVideo = document.querySelector(".hero-video video");

if (heroVideo) {

    heroVideo.addEventListener("error", () => {

        console.log(
            "Hero video could not be loaded. Check assets/wedding-hero.mp4"
        );

    });

}


/* =====================================================
   PARALLAX EFFECT FOR HERO VIDEO
===================================================== */

window.addEventListener("scroll", () => {

    const hero = document.querySelector(".hero");

    if (!hero || window.innerWidth < 800) {
        return;
    }

    const scroll = window.scrollY;

    if (scroll <= window.innerHeight) {

        const video =
            document.querySelector(".hero-video video");

        video.style.transform =
            `scale(1.04) translateY(${scroll * 0.08}px)`;

    }

});