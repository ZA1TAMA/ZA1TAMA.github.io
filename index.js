function openNewTab(tabName) {
    window.open("https://zachgenest.ca/" + tabName);
}

let mewtwoOnOff = false;
function mewtwo() {
    if (mewtwoOnOff == false) {
        document.getElementById("hero-mewtwo2").style.opacity = "0%";
        document.getElementById("mewtwoSwitch").style.opacity = "0%";
        mewtwoOnOff = true;
    } else {
        document.getElementById("hero-mewtwo2").style.opacity = "100%";
        mewtwoOnOff = false;
    }
}
function openTab(name) {
    window.open(name, "_self");
}
const m = document.getElementById("mobilenav");
m.style.height = "0px";

function togglemenu() {
    if (m.style.height == "0px") {
        m.style.height = "18vh";
    } else {
        m.style.height = "0px";
    }
}


// selectors
const themeToggleBtn = document.querySelector('.themeToggle');
const turntableDark = document.getElementById("turntable-dark");
const turntableLight = document.getElementById("turntable-light");
// state
const theme = localStorage.getItem('theme');
const lightTT = localStorage.getItem('lightTT');
const darkTT = localStorage.getItem('darkTT');

// on mount
theme && document.body.classList.add(theme);
lightTT && turntableLight.classList.add(lightTT);
darkTT & turntableDark.classList.add(darkTT);
// handlers
handleThemeToggle =() => {
    document.body.classList.toggle('dark-mode');
    turntableLight.classList.toggle('turntable-active');
    turntableDark.classList.toggle('turntable-active');
    
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        localStorage.setItem('lightTT', 'turntable-active');
        localStorage.removeItem('darkTT');
    } else {
        localStorage.removeItem('theme');
        localStorage.removeItem('lightTT');
        localStorage.setItem('darkTT', 'turntable-active');
    }
};
// events
themeToggleBtn.addEventListener('click', handleThemeToggle);





    