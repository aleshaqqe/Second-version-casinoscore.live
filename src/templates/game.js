const { buildPath } = require("../utils/helpers");
const { renderLightningRouletteExtraStatsSection } = require("./lightningroulette-extra-stats");
const { renderMegaBallReviewPanel }    = require("./megaball-review");
const { renderDreamCatcherReviewPanel } = require("./dreamcatcher-review");
const { renderCrazyTimeReviewPanel }   = require("./crazytime-review");
const { renderMonopolyReviewPanel }    = require("./monopoly-review");
const { renderDreamCatcherExtraStatsSection } = require("./dream-catcher-extra-stats");
const { renderHeader, renderFooter, renderFloatingPlayButton } = require("./partials");
const { renderLightningRouletteReviewPanel } = require("./lightningroulette-review");
const {
  generateSpinData,
  generateTemperatureData,
  countDistribution,
  generateStatsSummary,
  generateBigWins,
  generateDreamCatcherExtraStats,
  generateCrazyFlapperStats,
  generateCrazyCoinFlipColorStats,
  generateCashHuntSymbolsStats,
  generateCashHuntRecentMultipliers,
  generateCrazyTimeBestBets,
  generateCrazyTimeLatestMaxMultipliers,
  generateMonopolyDiceRollStats,
  generateMonopolyBoardMoveStats,
  generateMonopolyLandingStats,
  generateMonopolyBestIndividualWins,
  generateMonopolyLatestTopMultipliers,
  generateLightningRouletteExtraStats
} = require("../data/mock-data");
const { renderMonopolyExtraStatsSection } = require("./monopoly-extra-stats");
const {
  renderTemperaturePanel,
  renderHistoryPanel,
  renderStatsPanel,
  renderBigWinsPanel
} = require("./game-panels");
const { GAMES, SUPPORTED_LANGS } = require("../data/site-data");

// ─── renderCrazyTimeExtraStatsSection убран намеренно:
//     CT extra-stats теперь рендерятся на клиенте через /ct-extra-stats.js
//     Данные передаются через <script id="gamePageData"> → ctExtraData

function renderTabsRow(t, game) {
  const hasReview = ["crazytime", "monopoly", "dreamcatcher", "megaball", "lightningroulette"].includes(game.id);
  const hasStream = game.id === "crazytime";

  return `
    <div class="tabs-row">
      <button class="tab-btn active" type="button"
        data-tab-group="game-tabs" data-tab-target="temperature" aria-selected="true">
        ${t.tabs.temperature}
      </button>

      <button class="tab-btn" type="button"
        data-tab-group="game-tabs" data-tab-target="history" aria-selected="false">
        ${t.tabs.history}
      </button>

      <button class="tab-btn" type="button"
        data-tab-group="game-tabs" data-tab-target="stats" aria-selected="false">
        ${t.tabs.stats}
      </button>

      <button class="tab-btn" type="button"
        data-tab-group="game-tabs" data-tab-target="bigwins" aria-selected="false">
        ${t.tabs.bigwins}
      </button>

      ${hasReview ? `
        <button class="tab-btn" type="button"
          data-tab-group="game-tabs" data-tab-target="review" aria-selected="false">
          ${t.tabs.review}
        </button>
      ` : ""}

      ${hasStream ? `
        <button class="tab-btn" type="button"
          data-tab-group="game-tabs" data-tab-target="stream" aria-selected="false">
          ${t.tabs.stream}
        </button>
      ` : ""}
    </div>
  `;
}

function renderCrazyTimeStreamLite(t) {
  if (!t.crazytimeStream) return "";

  return `
    <div class="tab-panel" id="panel-stream"
      data-tab-panel="stream" data-tab-panel-group="game-tabs" hidden>
      <div class="crazytime-stream-section">
        <div class="crazytime-stream-card">
          <div class="crazytime-stream-header">
            <h2 class="crazytime-stream-title">
              ${t.crazytimeStream.title || "Crazy Time Live Stream"}
            </h2>
            <p class="crazytime-stream-subtitle">${t.crazytimeStream.subtitle || ""}</p>
          </div>

          <div class="crazytime-stream-intro-player">
            <div class="crazytime-stream-box">
              <div class="crazytime-stream-overlay">
                <img
                  width="1090"
                  height="640"
                  src="https://crazytime.games/wp-content/uploads/2025/03/crazytime-live-steram-w1090.webp"
                  alt="Crazy Time Live Stream"
                  class="crazytime-stream-overlay-image"
                  loading="lazy"
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
  const spinData       = generateSpinData(game, game.id === "dreamcatcher" ? 520 : 120);
  const temperatureData = generateTemperatureData(game);
  const distribution   = countDistribution(game, spinData);
  const summary        = generateStatsSummary(game, spinData);
  const wins           = generateBigWins(game);

  // ── Per-game extra data ───────────────────────────────────────────────

  const dreamCatcherExtraData =
    game.id === "dreamcatcher"
      ? generateDreamCatcherExtraStats(game, spinData)
      : null;

  // CT extra data генерируется здесь, но рендерится на клиенте
  const crazyTimeExtraData =
    game.id === "crazytime"
      ? {
          flapper:            generateCrazyFlapperStats(t),
          coinFlip:           generateCrazyCoinFlipColorStats(t),
          symbols:            generateCashHuntSymbolsStats(),
          recentMultipliers:  generateCashHuntRecentMultipliers(),
          bestBets:           generateCrazyTimeBestBets(),
          latestMax:          generateCrazyTimeLatestMaxMultipliers()
        }
      : null;

  const monopolyExtraData =
    game.id === "monopoly"
      ? {
          dice:            generateMonopolyDiceRollStats(),
          board:           generateMonopolyBoardMoveStats(),
          landing:         generateMonopolyLandingStats(),
          bestWins:        generateMonopolyBestIndividualWins(),
          topMultipliers:  generateMonopolyLatestTopMultipliers()
        }
      : null;

  const lightningRouletteExtraData =
    game.id === "lightningroulette"
      ? generateLightningRouletteExtraStats()
      : null;

  // ── statsExtraHtml ────────────────────────────────────────────────────
  // Crazy Time: рендерим только placeholder-контейнер.
  // Клиентский /ct-extra-stats.js прочитает данные из gamePageData и
  // вставит готовый HTML через IntersectionObserver.
  const statsExtraHtml =
    game.id === "dreamcatcher" && dreamCatcherExtraData
      ? renderDreamCatcherExtraStatsSection(t, dreamCatcherExtraData, game)
      : game.id === "crazytime"
        ? `<div id="ct-extra-stats" data-lang="${lang}">
            <div class="ct-extra-skeleton">
              <div class="skeleton skeleton-heading"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text"></div>
              <div class="skeleton skeleton-text" style="width:60%"></div>
            </div>
          </div>`
        : game.id === "monopoly" && monopolyExtraData
          ? renderMonopolyExtraStatsSection(t, monopolyExtraData)
          : game.id === "lightningroulette" && lightningRouletteExtraData
            ? renderLightningRouletteExtraStatsSection(t, lightningRouletteExtraData)
            : "";

  // ── Review panel ─────────────────────────────────────────────────────
  const reviewPanelHtml =
  game.id === "crazytime" ? renderCrazyTimeReviewPanel(t)
  : game.id === "monopoly" ? renderMonopolyReviewPanel(t)
  : game.id === "dreamcatcher" ? renderDreamCatcherReviewPanel(t)
  : game.id === "megaball" ? renderMegaBallReviewPanel(t)
  : game.id === "lightningroulette" ? renderLightningRouletteReviewPanel(t)
  : "";

  const reviewTabHtml = reviewPanelHtml
    ? `
      <div class="tab-panel" id="panel-review"
        data-tab-panel="review" data-tab-panel-group="game-tabs" hidden>
        ${reviewPanelHtml
          .replace(
            /^<div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">/,
            ""
          )
          .replace(/<\/div>\s*$/, "")}
      </div>
    `
    : "";

  const streamPanelHtml =
    game.id === "crazytime" ? renderCrazyTimeStreamLite(t) : "";

  // ── Page JSON payload ─────────────────────────────────────────────────
  const pageDataJson = JSON.stringify({
    lang,
    game,
    ui: {
      common:                t.common               || {},
      dreamcatcherStatsExtra: t.dreamcatcherStatsExtra || {},
      gamePanels:            t.gamePanels           || {},
      crazytimeStatsExtra:   t.crazytimeStatsExtra  || {}
    },
    ctExtraData: crazyTimeExtraData   // null для не-CT страниц
  });

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
                <img
                  src="/${game.image.src}"
                  alt="${game.image.alt}"
                  loading="lazy"
                  width="80"
                  height="80"
                />
              </div>

              <div class="game-heading">
                <h1>${game.name} ${t.gamePage.statisticsTitleSuffix}</h1>
                <p>${t.gamePage.subtitlePrefix} ${game.name}</p>
              </div>

              <div class="game-header-actions">
                <div class="live-pill">
                  <span class="live-dot"></span>
                  <span>${t.common.liveNow}</span>
                </div>

                <a
                  href="/go/reg/"
                  class="live-now-cta-btn"
                  target="_blank"
                  rel="noreferrer noopener nofollow"
                >
                  ${(t.gamePage && t.gamePage.playCta) || (t.cta && t.cta.playNow) || "Play Now"}
                </a>
              </div>
            </div>

            ${renderTabsRow(t, game)}

            ${renderTemperaturePanel(game, temperatureData, t)}
            ${renderHistoryPanel(game, spinData, t)}
            ${renderStatsPanel(game, distribution, summary, statsExtraHtml, t)}
            ${renderBigWinsPanel(game, wins, t)}
            ${reviewTabHtml}
            ${streamPanelHtml}

          </div>
        </div>
      </main>

      ${renderFooter({ t, lang, games: GAMES })}
      ${renderFloatingPlayButton(t)}

      <script id="gamePageData" type="application/json">${pageDataJson}</script>
      ${game.id === "crazytime" ? `<script src="/ct-extra-stats.js" defer></script>` : ""}
    </div>
  `;
}

module.exports = { renderGamePage };
