// New Window
function openNewTab(tabName) {
    window.open("https://zachgenest.ca/" + tabName);
}
function openTab(name) {
    window.open(name, "_self");
}

//--Mobile--
const m = document.getElementById("mobilenav");
m.style.height = "0px";

function togglemenu() {
    if (m.style.height == "0px") {
        m.style.height = "100px";
    } else {
        m.style.height = "0px";
    }
}


//--DARK MODE--
// selectors
const themeToggleBtn = document.querySelector('.themeToggle');
const ttDark = document.getElementById('ttDark');
const ttLight = document.getElementById('ttLight');
// state
const theme = localStorage.getItem('theme');

// on mount
theme && document.body.classList.add(theme);

// handlers
handleThemeToggle =() => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode');
        ttDark.classList.add('turntable-active');
        ttLight.classList.remove('turntable-active');
    } else {
        localStorage.removeItem('theme');
        ttLight.classList.toggle('turntable-active');
        ttDark.classList.remove('turntable-active');
    }
};
// events
themeToggleBtn.addEventListener('click', handleThemeToggle);


function checkTheme() {
    if (document.body.classList.contains('dark-mode')){
        ttDark.classList.add('turntable-active');
        ttLight.classList.remove('turntable-active');
    }
};



    