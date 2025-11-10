const words = ["Front End Developer", "Back End Developer", "Full Stack Developer", "UI Designer"];
const textElement = document.querySelector(".typing-text");

let wordIndex = 0;  // Which word we are on
let letterIndex = 0; // Which letter of that word we are on
let isDeleting = false;

// Speeds (in milliseconds)
const typeSpeed = 150;
const deleteSpeed = 100;
const pauseBetweenWords = 1500; // Pause after typing a word

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        // --- Deleting ---
        textElement.innerHTML = currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; // Move to next word
        }

        setTimeout(typeEffect, deleteSpeed);

    } else {
        // --- Typing ---
        textElement.innerHTML = currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
            isDeleting = true;
            // Pause for a moment before deleting
            setTimeout(typeEffect, pauseBetweenWords);
        } else {
            setTimeout(typeEffect, typeSpeed);
        }
    }
}

// Start the effect
typeEffect();
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// Toggle 'active' class on hamburger and nav-menu
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Optional: Close menu when a link is clicked
// This is useful for one-page websites
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});