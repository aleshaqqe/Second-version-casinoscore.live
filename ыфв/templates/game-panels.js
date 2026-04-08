const {
    truncateLabel,
    numberWithCommas,
    formatTime,
    formatDate
  } = require("../utils/render-helpers");
  
  function getSegmentImage(game, segmentName) {
    if (!game) return "";
  
    if (game.id === "monopoly") {
      const monopolySegmentImages = {
        "1": "img/monopoly/temperature/one.webp",
        "2": "img/monopoly/temperature/two.webp",
        "5": "img/monopoly/temperature/five.webp",
        "10": "img/monopoly/temperature/ten.webp",
        "2 Rolls": "img/monopoly/temperature/two-rolls.webp",
        "4 Rolls": "img/monopoly/temperature/four-rolls.webp",
        "Chance": "img/monopoly/temperature/chance.webp"
      };
  
      return monopolySegmentImages[segmentName] || "";
    }
  
    if (game.spinResultImages && game.spinResultImages[segmentName]) {
      return game.spinResultImages[segmentName];
    }
  
    if (game.segmentImages && game.segmentImages[segmentName]) {
      return game.segmentImages[segmentName];
    }
  
    return "";
  }
  
  function getSlotResultImage(game, segmentName) {
    if (!game || !game.slotResultImages) return "";
    return game.slotResultImages[segmentName] || "";
  }
  
  function renderSegmentBadge(game, segmentName, color, extraClass = "", imageType = "spin") {
    const image =
      imageType === "slot"
        ? getSlotResultImage(game, segmentName)
        : getSegmentImage(game, segmentName);
  
    if (image) {
      return `
        <span class="result-badge result-badge-image ${extraClass}">
          <img src="/${image}" alt="${segmentName}" loading="lazy" class="result-badge-img">
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
          <img src="/${image}" alt="${segmentName}" loading="lazy" class="chart-label-img">
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
          <img src="/${image}" alt="${segmentName}" loading="lazy" class="temp-segment-img">
        </div>
      `;
    }
  
    return `<div class="temp-segment" style="background:${color};">${shortLabel}</div>`;
  }
  function renderTemperaturePanel(game, temperatureData) {
    return `
      <div class="tab-panel active" data-tab-panel="temperature" data-tab-panel-group="game-tabs">
        <h2 class="panel-title">Segment Temperature</h2>
        <p class="panel-subtitle">Showing how each segment is performing relative to its expected frequency.</p>
        <div class="temp-grid">
          ${temperatureData.map((item) => `
            <div class="temp-card">
              ${renderTemperatureSegment(game, item.segment, item.color, item.shortSegment)}
              <div class="temp-value ${item.tempClass}">${item.actual}%</div>
              <div class="temp-diff ${item.diff >= 0 ? "positive" : "negative"}">
                (${item.diff >= 0 ? "+" : ""}${item.diff})
              </div>
              <div class="temp-spins">${item.spinsSince} spins since</div>
              <i class="fas ${item.iconClass} ${item.tempClass} temp-icon"></i>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  
  function renderHistoryPanel(game, spinData) {
    const pageData = spinData.slice(0, 25);
    const showSlotResult = game.id !== "monopoly" && !game.hideSlotResult;
  
    return `
      <div class="tab-panel" data-tab-panel="history" data-tab-panel-group="game-tabs">
        <h2 class="panel-title">Recent Spin History</h2>
        <p class="panel-subtitle">The spin history statistics provide a detailed overview of the game’s recent activity.</p>
  
        <div class="table-wrap">
          <table class="spin-table">
            <thead>
              <tr>
                <th class="t-left">Occurred At</th>
                ${showSlotResult ? `<th class="t-center">Slot Result</th>` : ""}
                <th class="t-center">Spin Result</th>
                <th class="t-right">Multiplier</th>
                <th class="t-right">Total Winners</th>
                <th class="t-right">Total Payout</th>
              </tr>
            </thead>
            <tbody>
              ${pageData.map((spin) => {
                const segmentIndex = game.segments.indexOf(spin.spinResult);
                const slotIdx = game.segments.indexOf(spin.slotResult);
                const spinColor = segmentIndex >= 0 ? game.segColors[segmentIndex] : "#6b7280";
                const slotColor = slotIdx >= 0 ? game.segColors[slotIdx] : "#6b7280";
  
                return `
                  <tr>
                    <td class="t-left text-soft">${formatTime(spin.time)}</td>
                    ${showSlotResult ? `
                    <td class="t-center">
                      ${renderSegmentBadge(game, spin.slotResult, slotColor, "result-badge-slot", "slot")}
                    </td>
                  ` : ""}
                    <td class="t-center">
                      ${spin.isBonus
                        ? renderSegmentBadge(game, spin.spinResult, spinColor, "result-badge-bonus-image", "spin")
                        : renderSegmentBadge(game, spin.spinResult, spinColor, "", "spin")}
                    </td>
                    <td class="t-right ${spin.multiplier >= 50 ? "text-gold" : ""}" style="font-weight:600;">${spin.multiplier}x</td>
                    <td class="t-right text-soft">${numberWithCommas(spin.winners)}</td>
                    <td class="t-right text-green" style="font-weight:600;">$${numberWithCommas(spin.payout)}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }
  
  function renderStatsPanel(game, distribution, summary, extraContent = "") {
    const highestPercent = Math.max(...distribution.map((item) => item.percent), 1);
  
    return `
      <div class="tab-panel" data-tab-panel="stats" data-tab-panel-group="game-tabs">
        <div class="stats-main-grid">
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
  
          <div class="stats-grid-card">
            <h2 class="panel-title">Return to Player</h2>
            <div class="rtp-card-body">
              <div class="rtp-center">
                <div class="rtp-value">${summary.rtp}</div>
                <p class="rtp-text">Based on last 1,000 spins</p>
              </div>
            </div>
          </div>
        </div>
  
        <div class="stats-summary-grid">
        <div class="stats-grid-card summary-card">
          <p class="summary-label">Total Spins Today</p>
          <p class="summary-value">${numberWithCommas(summary.totalSpinsToday)}</p>
        </div>
        <div class="stats-grid-card summary-card">
          <p class="summary-label">Bonus Rounds</p>
          <p class="summary-value purple">${numberWithCommas(summary.bonusRoundsToday)}</p>
        </div>
        <div class="stats-grid-card summary-card">
          <p class="summary-label">Biggest Multiplier</p>
          <p class="summary-value gold">${summary.biggestMultToday}</p>
        </div>
        <div class="stats-grid-card summary-card">
          <p class="summary-label">Avg. Payout</p>
          <p class="summary-value green">${summary.avgPayoutToday}</p>
        </div>
      </div>

      ${extraContent}
    </div>
  `;
  }
  
  function renderBigWinsPanel(game, wins) {
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
                      ? `<img src="/${getSegmentImage(game, win.segment)}" alt="${win.segment}" loading="lazy" class="bigwin-segment-img">`
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
                <span class="bigwin-watch"><i class="fas fa-play-circle"></i> Watch</span>
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