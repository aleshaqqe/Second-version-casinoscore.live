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
          <div class="hero-title-wrap">
            <h1 class="hero-title">
              <span class="hero-title-line">${t.home.heroTitleBefore}</span>
              <span class="hero-title-line hero-title-line-accent text-gradient">
                ${t.home.heroTitleAccent}
              </span>
              <span class="hero-title-line">${t.home.heroTitleAfter}</span>
            </h1>
          </div>
        
          <div class="hero-text-wrap">
            <p class="hero-text">${t.home.heroText}</p>
          </div>
        
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
        <section class="home-editorial-section">
        <div class="container">
          <div class="home-editorial-header">
            <h2 class="home-editorial-title">
              ${(t.homeSeo && t.homeSeo.sectionTitle) || "About Our Live Casino Statistics Platform"}
            </h2>
          </div>

          <div class="home-editorial-grid">
            <article class="home-editorial-card">
              <h3 class="home-editorial-card-title">
                <i class="fas fa-circle-info"></i>
                <span>${(t.homeSeo && t.homeSeo.whoTitle) || "Who We Are"}</span>
              </h3>
              <p class="home-editorial-card-text">
                ${(t.homeSeo && t.homeSeo.whoText1) || ""}
              </p>
              <p class="home-editorial-card-text">
                ${(t.homeSeo && t.homeSeo.whoText2) || ""}
              </p>
            </article>

            <article class="home-editorial-card">
              <h3 class="home-editorial-card-title">
                <i class="fas fa-database"></i>
                <span>${(t.homeSeo && t.homeSeo.howTitle) || "How We Collect Information"}</span>
              </h3>
              <p class="home-editorial-card-text">
                ${(t.homeSeo && t.homeSeo.howText1) || ""}
              </p>
              <p class="home-editorial-card-text">
                ${(t.homeSeo && t.homeSeo.howText2) || ""}
              </p>
              <p class="home-editorial-card-text">
                ${(t.homeSeo && t.homeSeo.howText3) || ""}
              </p>
            </article>
          </div>
        </div>
      </section>
      <section id="faq" class="home-editorial-section">
      <div class="container">
        <div class="home-editorial-header">
          <h2 class="home-editorial-title">
            ${(t.homeFaq && t.homeFaq.faqTitle) || "Live Casino Statistics FAQ"}
          </h2>
          <p class="home-editorial-intro">
            ${(t.homeFaq && t.homeFaq.faqIntro) || ""}
          </p>
        </div>

        <div class="home-editorial-card">
          <div class="crazytime-review-faq-list">
            ${(t.homeFaq?.faq || []).map((item) => `
              <div class="crazytime-review-faq-item">
                <p class="crazytime-review-faq-question">${item.q}</p>
                <p class="crazytime-review-faq-answer">${item.a}</p>
              </div>
            `).join("")}
          </div>
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