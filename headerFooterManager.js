
class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <p>Site Programmed by: Zach Genest | All images created by me <br>©Dark Nebula </p>
            <div class="social-links">
            <a href="https://www.artstation.com/zaitama">
            <img src="assets/icons/artstation.svg" alt="artstation">
            </a>
            <a href="https://github.com/ZA1TAMA">
            <img src="assets/icons/github-mark-white.svg" alt="github">
            </a>
            <a href="https://www.linkedin.com/in/zach-genest-ba6510331/">
            <img src="assets/icons/linkedin.svg" alt="linkedin">
            </a>
            </div>
        </footer>
        `
    }
}
customElements.define('special-footer', SpecialFooter)