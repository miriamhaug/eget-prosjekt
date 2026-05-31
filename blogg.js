const burger = document.querySelector(".burger");
const kryss = document.querySelector(".kryss");
const navLinks = document.querySelector(".nav-links");

burger.addEventListener("click", () => {
    navLinks.classList.add("åpen");
    burger.classList.add("skjult");
    kryss.classList.add("synlig");
});

kryss.addEventListener("click", () => {
    navLinks.classList.remove("åpen");
    kryss.classList.remove("synlig");
    burger.classList.remove("skjult");
});

const toppKnapp = document.getElementById("topp-knapp");

// Vis knappen når brukeren har scrollet 300px ned
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toppKnapp.classList.add("synlig");
    } else {
        toppKnapp.classList.remove("synlig");
    }
});

// Scroll til toppen når knappen klikkes
toppKnapp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Tekst til hver bloggpost
const bloggInnhold = {
    "Paris på 3 dager": "Paris er en drømmeby! Start med Eiffeltårnet om morgenen, besøk Louvre på ettermiddagen og avslutt med en romantisk middag ved Seinen.",
    "Bali – mer enn bare strender": "Bali byr på så mye mer enn vakre strender. Besøk de hellige templene i Ubud og smak på autentisk balinsk mat.",
    "Mexico – mat og kultur": "Mexico er et land som aldri slutter å overraske. Fra fargerike markeder til imponerende aztekiske ruiner."
};

// Modal
const modalBakgrunn = document.getElementById("modal-bakgrunn");
const modalTittel = document.getElementById("modal-tittel");
const modalTekst = document.getElementById("modal-tekst");
const lukkModal = document.getElementById("lukk-modal");

document.querySelectorAll(".les-mer-knapp").forEach(knapp => {
    knapp.addEventListener("click", () => {
        const tittel = knapp.closest(".blogg-kort").querySelector("h3").textContent;
        modalTittel.textContent = tittel;
        modalTekst.textContent = bloggInnhold[tittel];
        modalBakgrunn.classList.add("aktiv");
    });
});

lukkModal.addEventListener("click", () => {
    modalBakgrunn.classList.remove("aktiv");
});

modalBakgrunn.addEventListener("click", (e) => {
    if (e.target === modalBakgrunn) {
        modalBakgrunn.classList.remove("aktiv");
    }
});
