"use strict";

const {
  truncateLabel,
  numberWithCommas,
  formatTime,
  formatDate
} = require("../utils/render-helpers");

// ── Lightning Roulette helpers ────────────────────────────────────────────────
const LR_RED_SET = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

function lrColor(n) {
  if (n === 0)              return { bg: "#16a34a", text: "#fff" };
  if (LR_RED_SET.has(n))   return { bg: "#dc2626", text: "#fff" };
  return                           { bg: "#1a1a1a", text: "#fff" };
}

function lrFormatTime(date) {
  const d      = new Date(date);
  const offset = -d.getTimezoneOffset() / 60;
  const sign   = offset >= 0 ? "+" : "-";
  const pad    = (n) => String(Math.abs(n)).padStart(2, "0");
  const mon    = d.toLocaleDateString("en-US", { month: "short" });
  return `${mon} ${d.getDate()} ${d.getFullYear()} @ ${pad(d.getHours())}:${pad(d.getMinutes())} UTC${sign}${pad(offset)}`;
}

function lrBall(n) {
  const c = lrColor(n);
  return `<span class="lr-hist-ball" style="background:${c.bg};color:${c.text}">${n}</span>`;
}

// ─────────────────────────────────────────────────────────────────────────────

function getSegmentImage(game, segmentName) {
  if (!game || !segmentName) return "";
  const key = String(segmentName).trim();

  if (game.id === "monopoly") {
    const monopolySegmentImages = {
      "1":       "img/monopoly/temperature/one.webp",
      "2":       "img/monopoly/temperature/two.webp",
      "5":       "img/monopoly/temperature/five.webp",
      "10":      "img/monopoly/temperature/ten.webp",
      "2 Rolls": "img/monopoly/temperature/two-rolls.webp",
      "4 Rolls": "img/monopoly/temperature/four-rolls.webp",
      "Chance":  "img/monopoly/temperature/chance.webp"
    };
    return monopolySegmentImages[key] || "";
  }

  if (game.id === "megaball") {
    const megaBallSegmentImages = {
      "5x":   "/img/mega-ball/icons/5x.webp",
      "10x":  "/img/mega-ball/icons/10x.webp",
      "12x":  "/img/mega-ball/icons/12x.webp",
      "15x":  "/img/mega-ball/icons/15x.webp",
      "20x":  "/img/mega-ball/icons/20x.webp",
      "25x":  "/img/mega-ball/icons/25x.webp",
      "50x":  "/img/mega-ball/icons/50x.webp",
      "100x": "/img/mega-ball/icons/100x.webp"
    };
    return megaBallSegmentImages[key] || "";
  }

  if (game.spinResultImages && game.spinResultImages[key]) return game.spinResultImages[key];
  if (game.segmentImages    && game.segmentImages[key])    return game.segmentImages[key];
  return "";
}

function getSlotResultImage(game, segmentName) {
  if (!game || !game.slotResultImages) return "";
  return game.slotResultImages[segmentName] || "";
}

function normalizeImagePath(image) {
  if (!image) return "";
  return image.startsWith("/") ? image : `/${image}`;
}

function renderSegmentBadge(game, segmentName, color, extraClass = "", imageType = "spin") {
  const image =
    imageType === "slot"
      ? getSlotResultImage(game, segmentName)
      : getSegmentImage(game, segmentName);

  if (image) {
    return `
      <span class="result-badge result-badge-image ${extraClass}">
        <img src="${normalizeImagePath(image)}" alt="${segmentName}" loading="lazy" class="result-badge-img">
      </span>
    `;
  }

  return `
    <span class="result-badge ${extraClass}" style="background:${color};">
      ${truncateLabel(segmentName, 8)}
    </span>
  `;
}

function renderChartLabel(game, segmentName) {
  const image = getSegmentImage(game, segmentName);

  if (image) {
    return `
      <span class="chart-label chart-label-image">
        <img src="${normalizeImagePath(image)}" alt="${segmentName}" loading="lazy" class="chart-label-img">
      </span>
    `;
  }

  return `<span class="chart-label">${truncateLabel(segmentName)}</span>`;
}

function renderTemperatureSegment(game, segmentName, color, shortLabel) {
  const image = getSegmentImage(game, segmentName);

  if (image) {
    return `
      <div class="temp-segment temp-segment-image">
        <img src="${normalizeImagePath(image)}" alt="${segmentName}" loading="lazy" class="temp-segment-img">
      </div>
    `;
  }

  return `<div class="temp-segment" style="background:${color};">${shortLabel}</div>`;
}

function renderTemperaturePanel(game, temperatureData, t) {
  const tr = t?.gamePanels || {};

  if (game.id === "megaball") {
    const items = Array.isArray(temperatureData) ? temperatureData : [];

    return `
      <div class="tab-panel active" data-tab-panel="temperature" data-tab-panel-group="game-tabs">
        <h2 class="panel-title">${tr.temperatureTitle || "Hot & Cold Multipliers"}</h2>
        <p class="panel-subtitle">
          ${tr.temperatureSubtitle || "Track the hottest and coldest Mega Ball multipliers based on recent rounds."}
        </p>

        <div class="temp-grid mega-temp-grid">
          ${items.map((item) => {
            const segmentImage = getSegmentImage(game, item.segment);
            return `
              <div class="temp-card">
                ${
                  segmentImage
                    ? `<div class="temp-segment temp-segment-image mega-temp-segment-image">
                         <img src="${normalizeImagePath(segmentImage)}" alt="${item.segment}" loading="lazy" decoding="async" class="temp-segment-img">
                       </div>`
                    : `<div class="temp-segment mega-temp-segment">${item.segment}</div>`
                }
                <div class="temp-value ${item.tempClass || ""}">${item.actual || item.percent || 0}%</div>
                <div class="temp-diff ${item.diff >= 0 ? "positive" : "negative"}">
                  ${item.diff >= 0 ? "+" : ""}${item.diff || 0}%
                </div>
                <div class="temp-spins">${numberWithCommas(item.spinsSince || item.spins || 0)} spins</div>
              </div>
            `;
          }).join("")}
        </div>
      </div>
    `;
  }

  const subtitle =
    tr.temperatureSubtitle ||
    "Live segment temperature highlights hot and cold outcomes based on recent spins versus expected probability.";
  const spinsSinceTpl = tr.temperatureSpinsSince || "{n} spins since";

  return `
    <div class="tab-panel active" data-tab-panel="temperature" data-tab-panel-group="game-tabs">
      <h2 class="panel-title">Segment Temperature</h2>
      <p class="panel-subtitle">${subtitle}</p>

      <div class="temp-grid">
        ${temperatureData.map((item) => {
          const spinsSinceText = spinsSinceTpl.replace("{n}", item.spinsSince || item.spins || 0);
          return `
            <div class="temp-card">
              ${renderTemperatureSegment(game, item.segment, item.color, item.shortSegment)}
              <div class="temp-value ${item.tempClass}">${item.actual || item.percent || 0}%</div>
              <div class="temp-diff ${item.diff >= 0 ? "positive" : "negative"}">
                ${item.diff >= 0 ? "+" : ""}${item.diff || 0}%
              </div>
              <div class="temp-spins">${spinsSinceText}</div>
              <i class="fas ${item.iconClass} ${item.tempClass} temp-icon"></i>
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

// ── Mega Ball helpers ─────────────────────────────────────────────────────────
function renderBallBadge(ball) {
  return `<span class="result-badge result-badge-ball">${ball}</span>`;
}

function renderBallsList(balls = []) {
  return `
    <div class="mega-balls-list">
      ${balls.map((ball) => renderBallBadge(ball)).join("")}
    </div>
  `;
}

// ── History panel ─────────────────────────────────────────────────────────────
function renderHistoryPanel(game, spinData, t) {
  const tr       = t?.gamePanels || {};
  const pageData = spinData.slice(0, 25);
  const subtitle =
    tr.historySubtitle ||
    "Explore the latest spin history with real-time results, multipliers, winners, and payouts.";

  // ── Lightning Roulette ──────────────────────────────────────────────────────
  if (game.id === "lightningroulette") {
    const lrTr = t?.lightningrouletteHistory || {};

    // Translation keys (добавь в translations.js → lightningrouletteHistory):
    // occurredAt, spinResult, multiplier, firstLucky, secondLucky,
    // thirdLucky, fourthLucky, fifthLucky, panelTitle, subtitle
    const cols = [
      lrTr.occurredAt  || "Occurred At",
      lrTr.spinResult  || "Spin Result",
      lrTr.multiplier  || "Multiplier",
      lrTr.firstLucky  || "First Lucky",
      lrTr.secondLucky || "Second Lucky",
      lrTr.thirdLucky  || "Third Lucky",
      lrTr.fourthLucky || "Fourth Lucky",
      lrTr.fifthLucky  || "Fifth Lucky",
    ];

    const rows = pageData.map((spin) => {
      // Multiplier cell — заполняется только если шар попал на Lucky Number
      const multCell = spin.hitMultiplier
        ? `<td class="lr-hist-td lr-hist-td--mult">
             <span class="lr-hist-hit">${spin.hitMultiplier}x</span>
             <span class="lr-hist-bolt">⚡</span>
           </td>`
        : `<td class="lr-hist-td lr-hist-td--mult"></td>`;

      // 5 слотов Lucky Numbers (пустые если меньше)
      const luckyCells = Array.from({ length: 5 }, (_, i) => {
        const lucky = spin.luckyNumbers?.[i] || null;
        if (!lucky) return `<td class="lr-hist-td lr-hist-td--lucky"></td>`;
        return `<td class="lr-hist-td lr-hist-td--lucky">
          ${lrBall(lucky.number)}
          <span class="lr-hist-mult">(${lucky.multiplier}x)</span>
        </td>`;
      }).join("");

      return `
        <tr class="lr-hist-row${spin.hitMultiplier ? " lr-hist-row--hit" : ""}">
          <td class="lr-hist-td lr-hist-td--time">
            <span class="lr-hist-time">${lrFormatTime(spin.time)}</span>
          </td>
          <td class="lr-hist-td lr-hist-td--result">
            ${lrBall(spin.spinResult)}
          </td>
          ${multCell}
          ${luckyCells}
        </tr>`;
    }).join("");

    return `
      <div class="tab-panel" data-tab-panel="history" data-tab-panel-group="game-tabs">
        <h2 class="panel-title">${lrTr.panelTitle || "Spin History"}</h2>
        <p class="panel-subtitle">
          ${lrTr.subtitle || "Recent spin history with Lucky Number results."}
        </p>

        <div class="lr-hist-wrap">
          <table class="lr-hist-table">
            <thead>
              <tr class="lr-hist-head">
                ${cols.map((c, i) =>
                  `<th class="lr-hist-th${i === 0 ? " lr-hist-th--time" : ""}">${c}</th>`
                ).join("")}
              </tr>
            </thead>
            <tbody>
              ${rows}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ── Mega Ball ───────────────────────────────────────────────────────────────
  if (game.id === "megaball") {
    return `
      <div class="tab-panel" data-tab-panel="history" data-tab-panel-group="game-tabs">
        <h2 class="panel-title">Recent Spin History</h2>
        <p class="panel-subtitle">${subtitle}</p>

        <div class="table-wrap">
          <table class="spin-table">
            <thead>
              <tr>
                <th class="t-left">${tr.occurredAt   || "Occurred At"}</th>
                <th class="t-left">Mega Ball</th>
                <th class="t-left">2nd Mega Ball</th>
                <th class="t-left">Balls</th>
                <th class="t-right">${tr.totalPayout || "Total Payout"}</th>
              </tr>
            </thead>
            <tbody>
              ${pageData.map((spin) => {
                const megaBallMarkup = spin.megaBallNumber
                  ? `<div class="mega-ball-inline">
                       ${renderBallBadge(spin.megaBallNumber)}
                       <span class="mega-ball-multiplier">(${spin.megaBallMultiplier})</span>
                     </div>`
                  : `<span class="text-soft">—</span>`;

                const secondMegaBallMarkup = spin.secondMegaBallNumber
                  ? `<div class="mega-ball-inline">
                       ${renderBallBadge(spin.secondMegaBallNumber)}
                       <span class="mega-ball-multiplier">(${spin.secondMegaBallMultiplier})</span>
                     </div>`
                  : `<span class="text-soft">—</span>`;

                return `
                  <tr>
                    <td class="t-left text-soft">${formatTime(spin.time)}</td>
                    <td class="t-left">${megaBallMarkup}</td>
                    <td class="t-left">${secondMegaBallMarkup}</td>
                    <td class="t-left mega-balls-cell">${renderBallsList(spin.balls)}</td>
                    <td class="t-right text-green" style="font-weight:600;">
                      €${numberWithCommas(spin.payout)}
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ── Все остальные игры ──────────────────────────────────────────────────────
  const showSlotResult   = game.id !== "monopoly" && !game.hideSlotResult;
  const showSpecialResult = game.id === "dreamcatcher";

  return `
    <div class="tab-panel" data-tab-panel="history" data-tab-panel-group="game-tabs">
      <h2 class="panel-title">Recent Spin History</h2>
      <p class="panel-subtitle">${subtitle}</p>

      <div class="table-wrap">
        <table class="spin-table">
          <thead>
            <tr>
              <th class="t-left">${tr.occurredAt    || "Occurred At"}</th>
              ${showSlotResult    ? `<th class="t-left">${tr.slotResult    || "Slot Result"}</th>`    : ""}
              <th class="t-left">${tr.spinResult    || "Spin Result"}</th>
              ${showSpecialResult ? `<th class="t-left">${tr.specialResult || "Special Result"}</th>` : ""}
              <th class="t-right">${tr.multiplier   || "Multiplier"}</th>
              <th class="t-right">${tr.totalWinners || "Total Winners"}</th>
              <th class="t-right">${tr.totalPayout  || "Total Payout"}</th>
            </tr>
          </thead>
          <tbody>
            ${pageData.map((spin) => {
              const spinColor = game.segColors?.[spin.segIdx] || "#8b5cf6";
              const slotIndex = game.segments?.indexOf(spin.slotResult);
              const slotColor = game.segColors?.[slotIndex] || "#6b7280";
              const isSpecial = showSpecialResult && spin.isBonus;

              return `
                <tr>
                  <td class="t-left text-soft">${formatTime(spin.time)}</td>
                  ${showSlotResult ? `
                    <td class="t-left">
                      ${isSpecial
                        ? ""
                        : renderSegmentBadge(game, spin.slotResult, slotColor, "result-badge-slot", "slot")}
                    </td>
                  ` : ""}
                  <td class="t-left">
                    ${spin.isBonus
                      ? renderSegmentBadge(game, spin.spinResult, spinColor, "result-badge-bonus-image", "spin")
                      : renderSegmentBadge(game, spin.spinResult, spinColor, "", "spin")}
                  </td>
                  ${showSpecialResult ? `
                    <td class="t-left">${isSpecial ? spin.spinResult : ""}</td>
                  ` : ""}
                  <td class="t-right">${isSpecial ? "" : `${spin.multiplier}x`}</td>
                  <td class="t-right">${isSpecial ? "" : numberWithCommas(spin.winners)}</td>
                  <td class="t-right text-green">${isSpecial ? "" : `$${numberWithCommas(spin.payout)}`}</td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// ── Stats panel ───────────────────────────────────────────────────────────────
function renderStatsPanel(game, distribution, summary, extraContent = "", t) {
  const tr = t?.gamePanels || {};
  const highestPercent = Math.max(...distribution.map((item) => item.percent), 1);

  const rtpBasedOn            = tr.rtpBasedOn            || "Based on last 1,000 spins";
  const totalSpinsTodayLabel  = tr.summaryTotalSpinsToday || "Total Spins Today";
  const bonusRoundsLabel      = tr.summaryBonusRounds     || "Bonus Rounds";
  const biggestMultiplierLabel = tr.summaryBiggestMultiplier || "Biggest Multiplier";
  const avgPayoutLabel        = tr.summaryAvgPayout       || "Avg. Payout";

  return `
    <div class="tab-panel" data-tab-panel="stats" data-tab-panel-group="game-tabs">
      <div class="stats-main-grid">
      ${game.id !== "lightningroulette" ? `
      <div class="stats-grid-card">
        <h2 class="panel-title">Result Distribution</h2>
        <div class="chart-scroll">
          <div class="chart-box">
          ${distribution.map((item) => {
            const height = Math.max((item.percent / highestPercent) * 100, 4);
            return `
              <div class="chart-col">
                <span class="chart-percent">${item.percent}%</span>
                <div class="chart-bar-wrap">
                  <div class="chart-bar" style="height:${height}%; background:${item.color};"></div>
                </div>
                ${renderChartLabel(game, item.label)}
              </div>
            `;
          }).join("")}
          </div>
        </div>
      </div>
    ` : ""}
        <div class="stats-grid-card">
          <h2 class="panel-title">Return to Player</h2>
          <div class="rtp-card-body">
            <div class="rtp-center">
              <div class="rtp-value">${summary.rtp}</div>
              <p class="rtp-text">${rtpBasedOn}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="stats-summary-grid">
        <div class="stats-grid-card summary-card">
          <p class="summary-label">${totalSpinsTodayLabel}</p>
          <p class="summary-value">${numberWithCommas(summary.totalSpinsToday)}</p>
        </div>

        <div class="stats-grid-card summary-card">
          <p class="summary-label">${bonusRoundsLabel}</p>
          <p class="summary-value purple">${numberWithCommas(summary.bonusRoundsToday)}</p>
        </div>

        ${game.id !== "lightningroulette" ? `
        <div class="stats-grid-card summary-card">
          <p class="summary-label">${biggestMultiplierLabel}</p>
          <p class="summary-value gold">${summary.biggestMultToday}</p>
        </div>
      ` : ""}

      ${game.id !== "lightningroulette" ? `
  <div class="stats-grid-card summary-card">
    <p class="summary-label">${avgPayoutLabel}</p>
    <p class="summary-value green">${summary.avgPayoutToday}</p>
  </div>
` : ""}
      </div>

      ${extraContent}
    </div>
  `;
}

// ── Big wins panel ────────────────────────────────────────────────────────────
function renderBigWinsPanel(game, wins, t) {
  const tr = t?.gamePanels || {};
  const watchLabel = tr.watch || "Watch";

  return `
    <div class="tab-panel" data-tab-panel="bigwins" data-tab-panel-group="game-tabs">
      <h2 class="panel-title">Top Multiplier Wins</h2>

      <div class="bigwins-grid">
        ${wins.map((win, index) => `
          <article class="stats-grid-card bigwin-card">
            <div class="bigwin-top">
              <span class="bigwin-date">${formatDate(win.time)}</span>
              <span class="bigwin-rank ${index < 3 ? "top" : ""}">#${index + 1}</span>
            </div>

            <div class="bigwin-main">
              <span class="bigwin-segment">
                ${
                  getSegmentImage(game, win.segment)
                    ? `<img src="${normalizeImagePath(getSegmentImage(game, win.segment))}" alt="${win.segment}" loading="lazy" class="bigwin-segment-img">`
                    : truncateLabel(win.segment, 4)
                }
              </span>

              <div>
                <div class="bigwin-multiplier">${numberWithCommas(win.multiplier)}x</div>
                <div class="bigwin-label">${win.segment}</div>
              </div>
            </div>

            <div class="bigwin-bottom">
              <span class="bigwin-payout">$${numberWithCommas(win.payout)}</span>
              <span class="bigwin-watch"><i class="fas fa-play-circle"></i> ${watchLabel}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

module.exports = {
  getSegmentImage,
  getSlotResultImage,
  renderSegmentBadge,
  renderChartLabel,
  renderTemperatureSegment,
  renderTemperaturePanel,
  renderHistoryPanel,
  renderStatsPanel,
  renderBigWinsPanel
};