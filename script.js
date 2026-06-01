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


window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        toppKnapp.classList.add("synlig");
    } else {
        toppKnapp.classList.remove("synlig");
    }
});


toppKnapp.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

const meldPåKnapp = document.getElementById("meld-på-knapp");
const epostInput = document.getElementById("epost-input");
const bekreftelseMelding = document.getElementById("bekreftelse-melding");

meldPåKnapp.addEventListener("click", () => {
    const epost = epostInput.value.trim();

    if (epost === "" || !epost.includes("@")) {
        bekreftelseMelding.textContent = "Vennligst skriv inn en gyldig e-postadresse.";
        bekreftelseMelding.style.color = "red";
    } else {
        bekreftelseMelding.textContent = "Takk! Du er nå påmeldt nyhetsbrevet";
        bekreftelseMelding.style.color = "white";
        epostInput.value = "";
    }
});



toppKnapp.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


