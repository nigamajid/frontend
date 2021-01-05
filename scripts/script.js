

// ALS JE KLIKT OP BUTTONS VOER SPECIFIEKE FUNCTIE UIT
document.querySelector(".menu-open").addEventListener("click", openMenu);
document.querySelector(".menu-close").addEventListener("click", closeMenu);

// VOER DEZE FUNCTIE UIT (OPEN MENU)
function openMenu() {
    document.querySelector(".menu-overlay").classList.add("visible");
}

// VOER DEZE FUNCTIE UIT (CLOSE MENU)
function closeMenu() {
    document.querySelector(".menu-overlay").classList.remove("visible");
}

/* hulp van rowin!! */



/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/

/*eslint-env browser*/

/*eslint 'no-console': 0*/
