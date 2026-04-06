const { buildPath } = require("../utils/helpers");

function renderLangSwitcher({ currentLang, supportedLangs, currentGameId = null }) {
  return `
    <div class="lang-switcher">
      <select class="lang-switcher-select" onchange="window.location.href=this.value" aria-label="Language selector">
        ${supportedLangs.map((lang) => {
          const path = currentGameId
            ? buildPath(lang, "game", currentGameId)
            : buildPath(lang, "home");

          return `
            <option value="${path}" ${lang === currentLang ? "selected" : ""}>
              ${lang.toUpperCase()}
            </option>
          `;
        }).join("")}
      </select>
    </div>
  `;
}

function renderDesktopGamesDropdown({ lang, games, t }) {
  return `
    <div class="dropdown">
      <button
        class="nav-link dropdown-trigger"
        type="button"
        aria-expanded="false"
        aria-controls="gamesDropdownMenu"
      >
        <span>${t.nav.liveGames}</span>
        <i class="fas fa-chevron-down dropdown-arrow"></i>
      </button>

      <div class="dropdown-menu" id="gamesDropdownMenu" role="menu">
        ${games.map((game) => `
          <a href="${buildPath(lang, "game", game.id)}" class="dropdown-item">
            <img class="dropdown-thumb" src="/${game.image.src}" alt="${game.image.alt}" loading="lazy" />
            <span>${game.name}</span>
          </a>
        `).join("")}
      </div>
    </div>
  `;
}

function renderMobileMenu({ lang, games, t, supportedLangs, currentGameId = null }) {
  return `
    <div class="mobile-menu" id="mobileMenu">
      <a href="${buildPath(lang, "home")}" class="nav-link">${t.nav.home}</a>
      ${games.map((game) => `
        <a href="${buildPath(lang, "game", game.id)}" class="nav-link">${game.name}</a>
      `).join("")}
      <div class="lang-switcher lang-switcher-mobile">
        <select class="lang-switcher-select" onchange="window.location.href=this.value" aria-label="Language selector">
          ${supportedLangs.map((itemLang) => {
            const path = currentGameId
              ? buildPath(itemLang, "game", currentGameId)
              : buildPath(itemLang, "home");

            return `
              <option value="${path}" ${itemLang === lang ? "selected" : ""}>
                ${itemLang.toUpperCase()}
              </option>
            `;
          }).join("")}
        </select>
      </div>
    </div>
  `;
}

function renderHeader({ lang, t, games, supportedLangs, currentGameId = null }) {
  return `
    <header class="navbar">
      <div class="container navbar-inner">
        <a href="${buildPath(lang, "home")}" class="nav-logo">
          <i class="fas fa-chart-line nav-logo-icon"></i>
          <span>Casino Score live</span>
        </a>

        <nav class="desktop-nav" aria-label="Main navigation">
          <a href="${buildPath(lang, "home")}" class="nav-link ${!currentGameId ? "active" : ""}">
            ${t.nav.home}
          </a>

          ${renderDesktopGamesDropdown({ lang, games, t })}
        </nav>

        ${renderLangSwitcher({ currentLang: lang, supportedLangs, currentGameId })}

        <button
          class="burger"
          id="burgerBtn"
          type="button"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="mobileMenu"
        >
          <i class="fas fa-bars"></i>
        </button>

        ${renderMobileMenu({ lang, games, t, supportedLangs, currentGameId })}
      </div>
    </header>
  `;
}

function renderFooter({ t, lang, games }) {
  const primaryGames = games.slice(0, 4);
  const secondaryGames = games.slice(4);

  return `
    <footer class="footer">
      <div class="container footer-inner">
        <div class="footer-grid">
          <div class="footer-col">
            <a href="${buildPath(lang, "home")}" class="nav-logo footer-logo">
              <i class="fas fa-chart-line nav-logo-icon"></i>
              <span>Casino Score</span>
            </a>
            <p class="footer-text">
              ${t.footer.description}
            </p>
          </div>

          <div class="footer-col">
            <div class="footer-title">${t.footer.games || "Games"}</div>
            <ul class="footer-list">
              ${primaryGames.map((game) => `
                <li><a href="${buildPath(lang, "game", game.id)}">${game.name}</a></li>
              `).join("")}
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-title">${t.footer.moreGames || "More Games"}</div>
            <ul class="footer-list">
              ${secondaryGames.map((game) => `
                <li><a href="${buildPath(lang, "game", game.id)}">${game.name}</a></li>
              `).join("")}
            </ul>
          </div>

          <div class="footer-col">
            <div class="footer-title">${t.footer.resources || "Resources"}</div>
            <ul class="footer-list">
              <li><a href="#">${t.footer.privacy || "Privacy Policy"}</a></li>
              <li><a href="#">${t.footer.terms || "Terms of Service"}</a></li>
              <li><a href="#">${t.footer.contact || "Contact Us"}</a></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>© 2026 Tracksino. All rights reserved.</p>
          <div class="footer-socials">
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Discord"><i class="fab fa-discord"></i></a>
            <a href="#" aria-label="Telegram"><i class="fab fa-telegram"></i></a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingPlayButton(t) {
  return `
    <a
      href="/go/reg/"
      class="floating-play-btn"
      id="floatingPlayBtn"
      target="_blank"
      rel="noreferrer noopener nofollow"
    >
      ${(t.cta && t.cta.playNow) || "Play 🎰"}
    </a>
  `;
}

module.exports = {
  renderHeader,
  renderFooter,
  renderFloatingPlayButton
};