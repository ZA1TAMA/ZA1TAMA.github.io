
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>Site Programmed by: Zach Genest | All images created by me <br>©Dark Nebula </p>
            <div class="social-links">
            <a href="https://www.artstation.com/zaitama">
            <img src="assets/artstation.svg" alt="artstation">
            </a>
            <a href="https://github.com/ZA1TAMA">
            <img src="assets/github-mark-white.svg" alt="github">
            </a>
            </div>
        </footer>
        `
    }
}
customElements.define('special-footer', SpecialFooter)