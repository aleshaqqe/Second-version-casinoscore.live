const { buildPath } = require("../utils/helpers");
const { renderMegaBallReviewPanel } = require("./megaball-review");
const { renderDreamCatcherReviewPanel } = require("./dreamcatcher-review");
const { renderCrazyTimeReviewPanel } = require("./crazytime-review");
const { renderMonopolyReviewPanel } = require("./monopoly-review");
const { renderDreamCatcherExtraStatsSection } = require("./dream-catcher-extra-stats");
const { renderHeader, renderFooter, renderFloatingPlayButton } = require("./partials");
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
  generateMonopolyLatestTopMultipliers
} = require("../data/mock-data");
const { renderMonopolyExtraStatsSection } = require("./monopoly-extra-stats");
const { renderCrazyTimeExtraStatsSection } = require("./crazytime-extra-stats");
const {
  renderTemperaturePanel,
  renderHistoryPanel,
  renderStatsPanel,
  renderBigWinsPanel
} = require("./game-panels");
const { GAMES, SUPPORTED_LANGS } = require("../data/site-data");

function renderTabsRow(t, game) {
  const hasReview = ["crazytime", "monopoly", "dreamcatcher", "megaball"].includes(game.id);
  const hasStream = game.id === "crazytime";

  return `
    <div class="tabs-row">
      <button class="tab-btn active" type="button" data-tab-group="game-tabs" data-tab-target="temperature" aria-selected="true">
        ${t.tabs.temperature}
      </button>

      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="history" aria-selected="false">
        ${t.tabs.history}
      </button>

      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="stats" aria-selected="false">
        ${t.tabs.stats}
      </button>

      <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="bigwins" aria-selected="false">
        ${t.tabs.bigwins}
      </button>

      ${hasReview ? `
        <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="review" aria-selected="false">
          ${t.tabs.review}
        </button>
      ` : ""}

      ${hasStream ? `
        <button class="tab-btn" type="button" data-tab-group="game-tabs" data-tab-target="stream" aria-selected="false">
          ${t.tabs.stream}
        </button>
      ` : ""}
    </div>
  `;
}

function renderCrazyTimeStreamLite(t) {
  if (!t.crazytimeStream) return "";

  return `
    <div class="tab-panel" id="panel-stream" data-tab-panel="stream" data-tab-panel-group="game-tabs" hidden>
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
  const spinData = generateSpinData(game, game.id === "dreamcatcher" ? 520 : 120);
  const temperatureData = generateTemperatureData(game);
  const distribution = countDistribution(game, spinData);
  const summary = generateStatsSummary(game, spinData);
  const wins = generateBigWins(game);

  const dreamCatcherExtraData =
    game.id === "dreamcatcher"
      ? generateDreamCatcherExtraStats(game, spinData)
      : null;

  const crazyTimeExtraData =
    game.id === "crazytime"
      ? {
          flapper: generateCrazyFlapperStats(t),
          coinFlip: generateCrazyCoinFlipColorStats(t),
          symbols: generateCashHuntSymbolsStats(),
          recentMultipliers: generateCashHuntRecentMultipliers(),
          bestBets: generateCrazyTimeBestBets(),
          latestMax: generateCrazyTimeLatestMaxMultipliers()
        }
      : null;

  const monopolyExtraData =
    game.id === "monopoly"
      ? {
          dice: generateMonopolyDiceRollStats(),
          board: generateMonopolyBoardMoveStats(),
          landing: generateMonopolyLandingStats(),
          bestWins: generateMonopolyBestIndividualWins(),
          topMultipliers: generateMonopolyLatestTopMultipliers()
        }
      : null;

  const statsExtraHtml =
    game.id === "dreamcatcher" && dreamCatcherExtraData
      ? renderDreamCatcherExtraStatsSection(t, dreamCatcherExtraData, game)
      : game.id === "crazytime" && crazyTimeExtraData
        ? renderCrazyTimeExtraStatsSection(t, crazyTimeExtraData)
        : game.id === "monopoly" && monopolyExtraData
          ? renderMonopolyExtraStatsSection(t, monopolyExtraData)
          : "";

          const reviewPanelHtml =
          game.id === "crazytime" ? renderCrazyTimeReviewPanel(t)
          : game.id === "monopoly" ? renderMonopolyReviewPanel(t)
          : game.id === "dreamcatcher" ? renderDreamCatcherReviewPanel(t)
          : game.id === "megaball" ? renderMegaBallReviewPanel(t)
          : "";
        
        const reviewTabHtml = reviewPanelHtml
          ? `
            <div class="tab-panel" id="panel-review" data-tab-panel="review" data-tab-panel-group="game-tabs" hidden>
              ${reviewPanelHtml.replace(
                /^<div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">/,
                ""
              ).replace(/<\/div>\s*$/, "")}
            </div>
          `
          : "";

  const streamPanelHtml = game.id === "crazytime" ? renderCrazyTimeStreamLite(t) : "";

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

      ${renderFooter({
        t,
        lang,
        games: GAMES
      })}

      ${renderFloatingPlayButton(t)}
      <script id="gamePageData" type="application/json">
      ${JSON.stringify({
        lang,
        game,
        ui: {
          common: t.common || {},
          dreamcatcherStatsExtra: t.dreamcatcherStatsExtra || {},
          gamePanels: t.gamePanels || {}
        }
      })}
      </script>
    </div>
  `;
}

module.exports = { renderGamePage };