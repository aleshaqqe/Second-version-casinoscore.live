const { buildPath } = require("../utils/helpers");
const { renderCrazyTimeReviewPanel } = require("./crazytime-review");
const { renderHeader, renderFooter, renderFloatingPlayButton } = require("./partials");
const {
  generateSpinData,
  generateTemperatureData,
  countDistribution,
  generateStatsSummary,
  generateBigWins,
  generateCrazyFlapperStats,
  generateCrazyCoinFlipColorStats,
  generateCashHuntSymbolsStats,
  generateCashHuntRecentMultipliers,
  generateCrazyTimeBestBets,
  generateCrazyTimeLatestMaxMultipliers
} = require("../data/mock-data");
const { renderCrazyTimeExtraStatsSection } = require("./crazytime-extra-stats");


const {
  renderTemperaturePanel,
  renderHistoryPanel,
  renderStatsPanel,
  renderBigWinsPanel
} = require("./game-panels");

const { GAMES, SUPPORTED_LANGS } = require("../data/site-data");

function renderTabsRow(t, game) {
  const isCrazyTime = game.id === "crazytime";

  return `
    <div class="tabs-row">
      <button class="tab-btn active" type="button" data-tab-group="game-tabs" data-tab-target="temperature">
        ${t.tabs.temperature}
      </button>
      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="history">
        ${t.tabs.history}
      </button>
      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="stats">
        ${t.tabs.stats}
      </button>
      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="bigwins">
        ${t.tabs.bigwins}
      </button>
      ${isCrazyTime ? `
        <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="review">
          ${t.tabs.review}
        </button>
      ` : ""}
      ${isCrazyTime ? `
        <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="stream">
          ${t.tabs.stream}
        </button>
      ` : ""}
    </div>
  `;
}

function renderCrazyTimeReviewLite(t) {
  if (!t.crazytimeReview) return "";

  return `
    <div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">
      <div class="crazytime-review-section">
        <div class="crazytime-review-card">
          <div class="crazytime-review-block">
            <h2 class="crazytime-review-title">${t.crazytimeReview.whatIsTitle || "What Is Crazy Time?"}</h2>
            <p class="crazytime-review-intro">${t.crazytimeReview.whatIsText || ""}</p>
          </div>

          <div class="crazytime-review-block">
            <h3 class="crazytime-review-subtitle">${t.crazytimeReview.faqTitle || "FAQ"}</h3>
            <div class="crazytime-review-faq-list">
              ${(t.crazytimeReview.faq || []).map((item) => `
                <div class="crazytime-review-faq-item">
                  <h4 class="crazytime-review-faq-question">${item.q}</h4>
                  <p class="crazytime-review-faq-answer">${item.a}</p>
                </div>
              `).join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCrazyTimeStreamLite(t) {
  if (!t.crazytimeStream) return "";

  return `
    <div class="tab-panel" data-tab-panel="stream" data-tab-panel-group="game-tabs">
      <div class="crazytime-stream-section">
        <div class="crazytime-stream-card">
          <div class="crazytime-stream-header">
            <h2 class="crazytime-stream-title">${t.crazytimeStream.title || "Crazy Time Live Stream"}</h2>
            <p class="crazytime-stream-subtitle">${t.crazytimeStream.subtitle || ""}</p>
          </div>

          <div class="crazytime-stream-intro-player">
            <div class="crazytime-stream-box">
              <div class="crazytime-stream-overlay">
                <img
                  width="1090"
                  height="640"
                  src="https://crazytime.games/wp-content/uploads/2025/03/crazytime-live-steram-w1090.webp"
                  alt="Crazy Time Home"
                  class="crazytime-stream-overlay-image"
                />
                <button
                  class="crazytime-live-stream-button js-stream-launch"
                  data-stream-src="https://wwwcasinoscores.com/"
                  type="button"
                >
                  ${t.crazytimeStream.watchLivestream || "Watch Livestream"}
                </button>
              </div>

              <div class="crazytime-stream-frame-shell hidden">
                <div class="crazytime-stream-badge">
                  <span class="live-dot"></span>
                  <span>${t.crazytimeStream.liveLabel || "Live Stream"}</span>
                </div>

                <iframe
                  class="crazytime-stream-frame"
                  title="Crazy Time Stream"
                  allow="autoplay; encrypted-media"
                  allowfullscreen
                  loading="lazy"
                  src=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderGamePage({ lang, t, game }) {
  const spinData = generateSpinData(game, 100);
  const temperatureData = generateTemperatureData(game);
  const distribution = countDistribution(game, spinData);
  const summary = generateStatsSummary(game, spinData);
  const wins = generateBigWins(game);
  const crazyTimeExtraData = game.id === "crazytime"
  ? {
      flapper: generateCrazyFlapperStats(t),
      coinFlip: generateCrazyCoinFlipColorStats(t),
      symbols: generateCashHuntSymbolsStats(),
      recentMultipliers: generateCashHuntRecentMultipliers(),
      bestBets: generateCrazyTimeBestBets(),
      latestMax: generateCrazyTimeLatestMaxMultipliers()
    }
  : null;

  return `
  <div id="app" class="app">
    ${renderHeader({
      lang,
      t,
      games: GAMES,
      supportedLangs: SUPPORTED_LANGS,
      currentGameId: game.id
    })}

    <main class="page-container">
      <div class="page game-page">
        <div class="container">
          <div class="breadcrumb">
            <a href="${buildPath(lang, "home")}">${t.nav.home}</a>
            <i class="fas fa-chevron-right"></i>
            <span>${game.name}</span>
          </div>

          <div class="game-header">
            <div class="game-thumb">
              <img src="/${game.image.src}" alt="${game.image.alt}" loading="lazy" />
            </div>

            <div class="game-heading">
              <h1>${game.name} ${t.gamePage.statisticsTitleSuffix}</h1>
              <p>${t.gamePage.subtitlePrefix} ${game.name}</p>
            </div>

            <div class="live-pill">
              <span class="live-dot"></span>
              <span>${t.common.liveNow}</span>
            </div>
          </div>

          ${renderTabsRow(t, game)}

          ${renderTemperaturePanel(game, temperatureData)}
          ${renderHistoryPanel(game, spinData)}
          ${renderStatsPanel(
            game,
            distribution,
            summary,
            game.id === "crazytime" && crazyTimeExtraData
              ? renderCrazyTimeExtraStatsSection(t, crazyTimeExtraData)
              : ""
          )}          ${renderBigWinsPanel(game, wins)}

          ${game.id === "crazytime" ? renderCrazyTimeReviewPanel(t) : ""}
          ${game.id === "crazytime" ? renderCrazyTimeStreamLite(t) : ""}
        </div>
      </div>
    </main>

    ${renderFooter({
      t,
      lang,
      games: GAMES
    })}
    ${renderFloatingPlayButton(t)}
  </div>
  `;
}

module.exports = { renderGamePage };