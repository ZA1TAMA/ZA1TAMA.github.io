function darkmode() {
    const element = document.body;
    element.classList.toggle("dark-mode");
}

function openTab(name) {
    window.open(name, "_self");
}
const m = document.getElementById("mobilenav");
m.style.height = "0px";

function togglemenu() {
    if (m.style.height == "0px") {
        m.style.height = "15vh";
        console.log("pkmn");
    } else {
        m.style.height = "0px";
    }
}