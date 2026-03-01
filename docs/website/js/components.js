class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <h1>Moja Strona</h1>
        <nav>
          <a href="./../downloads/index.html">Home</a>
          <a href="#">O nas</a>
          <a href="#">Kontakt</a>
        </nav>
      </header>
    `;
  }
}

customElements.define("site-header", Header);
