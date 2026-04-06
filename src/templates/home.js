const { renderHeader, renderFooter, renderFloatingPlayButton } = require("./partials");

function renderHomePage({ lang, t, games, supportedLangs }) {
  return `
  <div id="app" class="app">
    ${renderHeader({
      lang,
      t,
      games,
      supportedLangs,
      currentGameId: null
    })}

    <main class="page-container">
      <div class="page">
        <section class="page-hero">
          <div class="container page-hero-inner">
            <div class="hero-header">
              <h1 class="hero-title">
                ${t.home.heroTitleBefore}
                <span class="text-gradient">${t.home.heroTitleAccent}</span>
                ${t.home.heroTitleAfter}
              </h1>
              <p class="hero-text">${t.home.heroText}</p>

              <a
                href="/go/reg/"
                class="hero-play-btn"
                target="_blank"
                rel="noreferrer noopener nofollow"
              >
                ${(t.cta && t.cta.playNow) || "Play 🎰"}
              </a>
            </div>

            <h2 class="live-heading">
              <span class="live-dot"></span>
              <span>${t.home.liveGames}</span>
            </h2>

            <div class="games-grid">
              ${games.map((game) => `
                <a href="${lang === "en" ? `/${game.id}/` : `/${lang}/${game.id}/`}" class="game-card">
                  <div class="game-card-badge">
                    <i class="fas fa-circle" style="font-size:6px;"></i>
                    <span>Live</span>
                  </div>
                  <div class="game-card-media">
                    <img src="/${game.image.src}" alt="${game.image.alt}" loading="lazy" />
                  </div>
                  <div class="game-card-body">
                    <div class="game-card-title">${game.name}</div>
                    <div class="game-card-provider">${game.provider}</div>
                  </div>
                </a>
              `).join("")}
            </div>
          </div>
        </section>
      </div>
    </main>

    ${renderFooter({ t, lang, games })}
    ${renderFloatingPlayButton(t)}
  </div>
  `;
}

module.exports = { renderHomePage };