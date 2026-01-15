class SiteMenu extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="menu-container">
        <div class="menu-title" title="DBM POLAND">
          DBM POLAND
        </div>
        <div class="menu-buttons">
          <button class="menu-button" title="HOME">
            <img src="./../../img/icon-home.svg" alt="Home" class="menu-button-icon">
            HOME
          </button>
          <button class="menu-button" title="DOWNLOADS">
            <img src="./../../img/icon-downloads.svg" alt="Downloads" class="menu-button-icon">
            DOWNLOADS
          </button>
          <button class="menu-button" title="RAW DATA">
            <img src="./../../img/icon-rawdata.svg" alt="Raw Data" class="menu-button-icon">
            RAW DATA
          </button>
          <button class="menu-button" title="GUIDES">
            <img src="./../../img/icon-guides.svg" alt="Guides" class="menu-button-icon">
            GUIDES
          </button>
          <button class="menu-button" title="DONATE">
            <img src="./../../img/icon-donate.svg" alt="Donate" class="menu-button-icon">
            DONATE
          </button>
          <button class="menu-button" title="TEST">
            <img src="./../../img/icon-test.svg" alt="Test" class="menu-button-icon">
            TEST
          </button>
        </div>
        <div class="menu-footer">
          <a href="https://dc.dbm-poland.site" target="_blank" class="menu-footer-button" title="discord">
            <img src="./../../img/icon-discord.svg" alt="Discord" class="menu-button-icon">
          </a>
          <a href="https://gh.dbm-poland.site" target="_blank" class="menu-footer-button" title="github">
            <img src="./../../img/icon-github.svg" alt="GitHub" class="menu-button-icon">
          </a>
          <a href="https://yt.dbm-poland.site" target="_blank" class="menu-footer-button" title="youtube">
            <img src="./../../img/icon-youtube.svg" alt="YouTube" class="menu-button-icon">
          </a>
        </div>
      </div>
    `;
  }
}

customElements.define("site-menu", SiteMenu);
