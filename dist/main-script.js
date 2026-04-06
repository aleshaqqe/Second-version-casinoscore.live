document.addEventListener("DOMContentLoaded", () => {
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });

  document.querySelectorAll("[data-tab-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab-target");
      const group = button.getAttribute("data-tab-group");

      if (!target || !group) return;

      document
        .querySelectorAll(`[data-tab-group="${group}"]`)
        .forEach((btn) => btn.classList.remove("active"));

      document
        .querySelectorAll(`[data-tab-panel-group="${group}"]`)
        .forEach((panel) => panel.classList.remove("active"));

      button.classList.add("active");

      const panel = document.querySelector(
        `[data-tab-panel="${target}"][data-tab-panel-group="${group}"]`
      );

      if (panel) {
        panel.classList.add("active");
      }
    });
  });

  document.querySelectorAll(".js-stream-launch").forEach((button) => {
    button.addEventListener("click", () => {
      const box = button.closest(".crazytime-stream-box");
      if (!box) return;

      const preview = box.querySelector(".crazytime-stream-overlay");
      const frameShell = box.querySelector(".crazytime-stream-frame-shell");
      const iframe = box.querySelector(".crazytime-stream-frame");
      const src = button.getAttribute("data-stream-src");

      if (preview) preview.classList.add("hidden");
      if (frameShell) frameShell.classList.remove("hidden");

      if (iframe && src && !iframe.src) {
        iframe.src = src;
      }
    });
  });

  document.querySelectorAll('a[href^="/go/"]').forEach((link) => {
    const url = link.getAttribute("href");
    if (!url) return;

    const text = link.innerHTML;
    const classes = link.className || "";
    const b64Url = btoa(url);

    const span = document.createElement("span");
    span.innerHTML = text;
    span.className = (classes + " js-aff-btn-secure").trim();
    span.setAttribute("data-b64", b64Url);
    span.style.cursor = "pointer";

    link.replaceWith(span);
  });

  document.body.addEventListener("click", function (e) {
    const btn = e.target.closest(".js-aff-btn-secure");
    if (!btn) return;

    const b64Url = btn.getAttribute("data-b64");
    if (!b64Url) return;

    const decodedUrl = atob(b64Url);
    window.open(decodedUrl, "_blank", "noopener,noreferrer");
  });

  initDynamicGameStats();
});

function initDynamicGameStats() {
  const gameDataScript = document.getElementById("gamePageData");
  if (!gameDataScript) return;

  let payload = null;

  try {
    payload = JSON.parse(gameDataScript.textContent);
  } catch (error) {
    return;
  }

  if (!payload?.game) return;

  const game = payload.game;
  let spinData = generateSpinData(game, 120);

  const state = {
    currentTab: "temperature",
    liveUpdateInterval: null
  };

  document.querySelectorAll('[data-tab-group="game-tabs"]').forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTab = button.getAttribute("data-tab-target") || "temperature";
    });
  });

  state.liveUpdateInterval = window.setInterval(() => {
    simulateLiveUpdate(game, spinData, state);
  }, 30000);
}

function truncateLabel(value, max = 5) {
  if (!value) return "";
  return value.length > max ? value.slice(0, max) : value;
}

function numberWithCommas(value) {
  return Number(value).toLocaleString("en-US");
}

function formatTime(date) {
  const d = new Date(date);
  return (
    d.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }) +
    " " +
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
  );
}

function formatDate(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function weightedRandom(probabilities) {
  const total = probabilities.reduce((sum, item) => sum + item, 0);
  let random = Math.random() * total;

  for (let i = 0; i < probabilities.length; i += 1) {
    random -= probabilities[i];
    if (random <= 0) return i;
  }

  return probabilities.length - 1;
}

function isBonusSegment(segmentIndex, segmentName) {
  return (
    segmentIndex >= 4 ||
    segmentName.includes("x") ||
    segmentName === "Lightning" ||
    segmentName === "Chance"
  );
}

function generateSpinData(game, count) {
  const data = [];
  const now = Date.now();

  for (let i = 0; i < count; i += 1) {
    const segIdx = weightedRandom(game.segProbs || [100]);
    const segment = game.segments?.[segIdx] || game.name;
    const bonus = isBonusSegment(segIdx, segment);
    const multiplierPool = bonus ? [5, 10, 15, 20, 25, 50, 100, 200, 500] : [1, 2, 3, 5];
    const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
    const winners = Math.floor(Math.random() * 5000) + 100;
    const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));
    const slotResult = game.segments?.[Math.floor(Math.random() * Math.min(4, game.segments.length))] || game.name;

    data.push({
      time: new Date(now - i * 65000),
      slotResult,
      spinResult: segment,
      segIdx,
      multiplier,
      winners,
      payout,
      isBonus: bonus
    });
  }

  return data;
}

function generateTemperatureData(game) {
  const items = (game.segments || []).map((segment, index) => {
    const expected = game.segProbs?.[index] || 0;
    const diff = Number((Math.random() * 4 - 2).toFixed(2));
    const actual = Number(Math.max(0, expected + diff).toFixed(2));
    const spinsSince = Math.floor(Math.random() * 30);

    let tempClass = "temp-warm";
    let iconClass = "fa-temperature-half";

    if (diff > 0.5) {
      tempClass = "temp-hot";
      iconClass = "fa-fire";
    } else if (diff < -0.5) {
      tempClass = "temp-cold";
      iconClass = "fa-snowflake";
    }

    return {
      segment,
      shortSegment: segment.length > 3 ? segment.slice(0, 3) : segment,
      color: game.segColors?.[index] || "#6b7280",
      actual,
      diff,
      spinsSince,
      tempClass,
      iconClass
    };
  });

  if (game.id === "monopoly") {
    const monopolyOrder = ["1", "5", "2 Rolls", "2", "10", "4 Rolls", "Chance"];

    return monopolyOrder
      .map((name) => items.find((item) => item.segment === name))
      .filter(Boolean);
  }

  return items;
}

function countDistribution(game, spinData) {
  const counts = (game.segments || []).map(
    (segment) => spinData.filter((item) => item.spinResult === segment).length
  );
  const total = counts.reduce((sum, count) => sum + count, 0);

  return (game.segments || []).map((segment, index) => ({
    label: segment,
    color: game.segColors?.[index] || "#6b7280",
    percent: total ? Number(((counts[index] / total) * 100).toFixed(2)) : 0
  }));
}

function generateStatsSummary(game, spinData) {
  const bonusCount = spinData.filter((item) => item.isBonus).length;
  const biggestMultiplier = Math.max(...spinData.map((item) => item.multiplier));
  const totalPayout = spinData.reduce((sum, item) => sum + item.payout, 0);
  const avgPayout = Math.round(totalPayout / spinData.length);
  const rtp = ((game.expectedRtp || 96) + (Math.random() * 1.2 - 0.6)).toFixed(2);

  return {
    totalSpinsToday: 700 + Math.floor(Math.random() * 400),
    bonusRoundsToday: bonusCount,
    biggestMultToday: `${biggestMultiplier.toLocaleString("en-US")}x`,
    avgPayoutToday: `$${avgPayout.toLocaleString("en-US")}`,
    rtp: `${rtp}%`
  };
}

function generateBigWins(game) {
  const wins = [];

  for (let i = 0; i < 9; i += 1) {
    const segIdx = Math.floor(Math.random() * (game.segments?.length || 1));
    wins.push({
      segment: game.segments?.[segIdx] || game.name,
      color: game.segColors?.[segIdx] || "#8b5cf6",
      multiplier: [100, 200, 500, 1000, 2000, 2500, 5000, 10000, 25000][i],
      time: new Date(Date.now() - Math.floor(Math.random() * 86400000 * 7)),
      payout: Math.floor(Math.random() * 500000) + 10000
    });
  }

  return wins.sort((a, b) => b.multiplier - a.multiplier);
}
function generateMonopolyDiceRollStats() {
  return {
    low: [
      { left: 1, right: 1, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 2, hits: 2, total: 73, percent: 2.74 },
      { left: 1, right: 3, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 1, right: 5, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 6, hits: 1, total: 73, percent: 1.37 },
      { left: 2, right: 2, hits: 2, total: 73, percent: 2.74 }
    ],
    mid: [
      { left: 2, right: 3, hits: 0, total: 73, percent: 0 },
      { left: 2, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 2, right: 5, hits: 2, total: 73, percent: 2.74 },
      { left: 2, right: 6, hits: 0, total: 73, percent: 0 },
      { left: 3, right: 3, hits: 5, total: 73, percent: 6.85 },
      { left: 3, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 3, right: 5, hits: 3, total: 73, percent: 4.11 }
    ],
    high: [
      { left: 3, right: 6, hits: 2, total: 73, percent: 2.74 },
      { left: 4, right: 4, hits: 1, total: 73, percent: 1.37 },
      { left: 4, right: 5, hits: 1, total: 73, percent: 1.37 },
      { left: 4, right: 6, hits: 0, total: 73, percent: 0 },
      { left: 5, right: 5, hits: 2, total: 73, percent: 2.74 },
      { left: 5, right: 6, hits: 5, total: 73, percent: 6.85 },
      { left: 6, right: 6, hits: 5, total: 73, percent: 6.85 }
    ]
  };
}

function generateMonopolyBoardMoveStats() {
  return {
    bonusGameHits: 15,
    totalSpins: 258,
    bonusGamePercent: 5.81,
    doublesHits: 16,
    doublesTotal: 73,
    doublesPercent: 21.92,
    avgBoardRolls: 4.87
  };
}

function generateMonopolyLandingStats() {
  return [
    { label: "Jail", hits: 7, total: 73, percent: 9.59 },
    { label: "KingsCross", hits: 6, total: 73, percent: 8.22 },
    { label: "CoventryStreet", hits: 4, total: 73, percent: 5.48 },
    { label: "ElectricCompany", hits: 4, total: 73, percent: 5.48 },
    { label: "TheStrand", hits: 4, total: 73, percent: 5.48 },
    { label: "Marylebone", hits: 3, total: 73, percent: 4.11 },
    { label: "WhitechapelRoad", hits: 3, total: 73, percent: 4.11 },
    { label: "OrangeChest", hits: 3, total: 73, percent: 4.11 },
    { label: "PentonvilleRoad", hits: 3, total: 73, percent: 4.11 }
  ];
}

function generateMonopolyBestIndividualWins() {
  return [
    { date: "6 Apr", time: "11:08", player: "Pra...", amount: "€13,206", multiplier: "113x" },
    { date: "6 Apr", time: "14:11", player: "은비까...", amount: "€8,658", multiplier: "43x" },
    { date: "6 Apr", time: "09:31", player: "Dec...", amount: "€7,746", multiplier: "92x" },
    { date: "6 Apr", time: "10:01", player: "Iva...", amount: "€7,510", multiplier: "223x" },
    { date: "6 Apr", time: "08:52", player: "mad...", amount: "€5,515", multiplier: "116x" }
  ];
}

function generateMonopolyLatestTopMultipliers() {
  return [
    { date: "6 Apr", time: "10:01", bonusRoundImage: "img/monopoly/bonus-gold.webp", multiplier: "223x" },
    { date: "6 Apr", time: "09:53", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "135x" },
    { date: "6 Apr", time: "11:08", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "113x" },
    { date: "6 Apr", time: "09:31", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "92x" },
    { date: "6 Apr", time: "12:39", bonusRoundImage: "img/monopoly/bonus-gold.webp", multiplier: "63x" }
  ];
}
function renderDiceFace(value) {
  const dotsMap = {
    1: [5],
    2: [1, 9],
    3: [1, 5, 9],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  };

  const activeDots = dotsMap[value] || [];

  return `
    <div class="monopoly-die">
      ${[1,2,3,4,5,6,7,8,9].map((pos) => `
        <span class="monopoly-die-dot ${activeDots.includes(pos) ? "active" : ""} pos-${pos}"></span>
      `).join("")}
    </div>
  `;
}

function renderDiceRows(title, trackedMeta, rows) {
  return `
    <div class="monopoly-stats-card monopoly-dice-card">
      <div class="monopoly-stats-header">
        <h3 class="monopoly-stats-title">${title}</h3>
        <p class="monopoly-stats-meta">${trackedMeta}</p>
      </div>

      <div class="monopoly-dice-list">
        ${rows.map((row) => `
          <div class="monopoly-dice-item">
            <div class="monopoly-dice-top">
              <div class="monopoly-dice-pair">
                ${renderDiceFace(row.left)}
                ${renderDiceFace(row.right)}
              </div>
              <div class="monopoly-dice-text">
                Rolls (${row.hits}/${row.total}) <strong>${row.percent}%</strong>
              </div>
            </div>
            <div class="monopoly-progress">
              <div class="monopoly-progress-fill" style="width:${Math.min(row.percent, 100)}%;"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderMonopolyExtraStatsClient(data) {
  const trackedMeta = "Past 6 hours • 258 Spins";

  return `
    <section class="monopoly-extra-section">
      <div class="monopoly-dice-grid">
        ${renderDiceRows("Low Tier Dice Rolls", trackedMeta, data.dice.low)}
        ${renderDiceRows("Mid Tier Dice Rolls", trackedMeta, data.dice.mid)}
        ${renderDiceRows("High Tier Dice Rolls", trackedMeta, data.dice.high)}
      </div>

      <div class="monopoly-stats-card">
        <div class="monopoly-stats-header">
          <h3 class="monopoly-stats-title">Board Moves Statistics</h3>
          <p class="monopoly-stats-meta">${trackedMeta}</p>
        </div>

        <div class="monopoly-progress-list">
          <div class="monopoly-progress-item">
            <div class="monopoly-progress-label">
              Bonus Game Stats (${data.board.bonusGameHits}/${data.board.totalSpins})
              <strong>${data.board.bonusGamePercent}%</strong>
            </div>
            <div class="monopoly-progress">
              <div class="monopoly-progress-fill" style="width:${data.board.bonusGamePercent}%;"></div>
            </div>
          </div>

          <div class="monopoly-progress-item">
            <div class="monopoly-progress-label">
              Doubles Rolled (${data.board.doublesHits}/${data.board.doublesTotal})
              <strong>${data.board.doublesPercent}%</strong>
            </div>
            <div class="monopoly-progress">
              <div class="monopoly-progress-fill" style="width:${data.board.doublesPercent}%;"></div>
            </div>
          </div>

          <div class="monopoly-avg-box-row">
            <span>Avg Board Rolls per Bonus Game</span>
            <span class="monopoly-avg-box">${data.board.avgBoardRolls}</span>
          </div>
        </div>
      </div>

      <div class="monopoly-stats-card">
        <div class="monopoly-stats-header">
          <h3 class="monopoly-stats-title">MONOPOLY Big Baller Landing Square Stats</h3>
          <p class="monopoly-stats-meta">${trackedMeta}</p>
        </div>

        <div class="monopoly-progress-list">
          ${data.landing.map((item) => `
            <div class="monopoly-progress-item">
              <div class="monopoly-progress-label">
                ${item.label} - (${item.hits}/${item.total})
                <strong>${item.percent}%</strong>
              </div>
              <div class="monopoly-progress">
                <div class="monopoly-progress-fill" style="width:${item.percent}%;"></div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <div class="monopoly-stats-card">
        <div class="monopoly-stats-header">
          <h3 class="monopoly-stats-title">Best Individual Wins</h3>
          <p class="monopoly-stats-meta">${trackedMeta}</p>
        </div>

        <div class="table-wrap">
          <table class="spin-table monopoly-stats-table">
            <thead>
              <tr>
                <th class="t-left">Finished</th>
                <th class="t-left">Player</th>
                <th class="t-left">Won Amount</th>
                <th class="t-left">Multiplier</th>
              </tr>
            </thead>
            <tbody>
              ${data.bestWins.map((item, index) => `
                <tr>
                  <td class="t-left">
                    ${item.date}<br>
                    <span class="text-soft" style="font-size:0.75rem;">${item.time}</span>
                    ${index < 4 ? `<div><a href="/go/reg/" class="monopoly-watch-link" target="_blank" rel="noreferrer noopener nofollow">Watch →</a></div>` : ""}
                  </td>
                  <td class="t-left">${item.player}</td>
                  <td class="t-left"><strong>${item.amount}</strong></td>
                  <td class="t-left"><span class="monopoly-multiplier-pill">${item.multiplier}</span></td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>

      <div class="monopoly-stats-card">
        <div class="monopoly-stats-header">
          <h3 class="monopoly-stats-title">Latest Top Multipliers</h3>
          <p class="monopoly-stats-meta">${trackedMeta}</p>
        </div>

        <div class="table-wrap">
          <table class="spin-table monopoly-stats-table">
            <thead>
              <tr>
                <th class="t-left">Finished</th>
                <th class="t-left">Bonus Round</th>
                <th class="t-left">Multiplier</th>
                <th class="t-left">Big Win Clip</th>
              </tr>
            </thead>
            <tbody>
              ${data.topMultipliers.map((item) => `
                <tr>
                  <td class="t-left">
                    ${item.date}<br>
                    <span class="text-soft" style="font-size:0.75rem;">${item.time}</span>
                  </td>
                  <td class="t-left">
                    <img
                      src="/${item.bonusRoundImage}"
                      alt="Bonus round"
                      class="monopoly-bonus-round-image"
                      loading="lazy"
                      decoding="async"
                    />
                  </td>
                  <td class="t-left">
                    <span class="monopoly-multiplier-pill">${item.multiplier}</span>
                  </td>
                  <td class="t-left">
                    <a
                      href="/go/reg/"
                      target="_blank"
                      rel="noreferrer noopener nofollow"
                      class="monopoly-watch-clip-btn"
                    >
                      <span class="monopoly-watch-clip-icon">▶</span>
                      <span>Watch Clip</span>
                    </a>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>

        <div class="monopoly-gallery-btn-wrap">
          <a
            href="/go/reg/"
            target="_blank"
            rel="noreferrer noopener nofollow"
            class="monopoly-gallery-btn"
          >
            Biggest Wins Gallery
          </a>
        </div>
      </div>
    </section>
  `;
}

function getSegmentImage(game, segmentName) {
  if (!game) return "";

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
        <img src="/${image}" alt="${segmentName}" loading="lazy" decoding="async" class="temp-segment-img">
      </div>
    `;
  }

  return `<div class="temp-segment" style="background:${color};">${shortLabel}</div>`;
}

function rerenderTemperaturePanel(game) {
  const panel = document.querySelector('[data-tab-panel="temperature"][data-tab-panel-group="game-tabs"]');
  if (!panel) return;

  const temperatureData = generateTemperatureData(game);

  panel.innerHTML = `
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
  `;
}

function rerenderHistoryPanel(game, spinData) {
  const panel = document.querySelector('[data-tab-panel="history"][data-tab-panel-group="game-tabs"]');
  if (!panel) return;

  const pageData = spinData.slice(0, 25);
  const isMonopoly = game.id === "monopoly";

  panel.innerHTML = `
    <h2 class="panel-title">Recent Spin History</h2>
    <p class="panel-subtitle">The spin history statistics provide a detailed overview of the game’s recent activity.</p>

    <div class="table-wrap">
      <table class="spin-table">
        <thead>
          <tr>
            <th class="t-left">Occurred At</th>
            ${!isMonopoly ? `<th class="t-center">Slot Result</th>` : ""}
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
                ${!isMonopoly ? `
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
  `;
}

function rerenderStatsPanel(game, spinData) {
  const panel = document.querySelector('[data-tab-panel="stats"][data-tab-panel-group="game-tabs"]');
  if (!panel) return;

  const distribution = countDistribution(game, spinData);
  const summary = generateStatsSummary(game, spinData);
  const highestPercent = Math.max(...distribution.map((item) => item.percent), 1);

  let extraHtml = "";

  if (game.id === "crazytime") {
    const crazyTimeExtra = panel.querySelector(".crazytime-bonus-section");
    extraHtml = crazyTimeExtra ? crazyTimeExtra.outerHTML : "";
  }

  if (game.id === "monopoly") {
    const monopolyData = {
      dice: generateMonopolyDiceRollStats(),
      board: generateMonopolyBoardMoveStats(),
      landing: generateMonopolyLandingStats(),
      bestWins: generateMonopolyBestIndividualWins(),
      topMultipliers: generateMonopolyLatestTopMultipliers()
    };

    extraHtml = renderMonopolyExtraStatsClient(monopolyData);
  }

  panel.innerHTML = `
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

    ${extraHtml}
  `;
}

function rerenderBigWinsPanel(game) {
  const panel = document.querySelector('[data-tab-panel="bigwins"][data-tab-panel-group="game-tabs"]');
  if (!panel) return;

  const wins = generateBigWins(game);

  panel.innerHTML = `
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
  `;
}

function simulateLiveUpdate(game, spinData, state) {
  const segIdx = weightedRandom(game.segProbs || [100]);
  const segment = game.segments?.[segIdx] || game.name;
  const bonus = isBonusSegment(segIdx, segment);
  const multiplierPool = bonus ? [5, 10, 15, 20, 25, 50, 100, 200, 500] : [1, 2, 3, 5];
  const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
  const winners = Math.floor(Math.random() * 5000) + 100;
  const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));
  const slotResult = game.segments?.[Math.floor(Math.random() * Math.min(4, game.segments.length))] || game.name;

  spinData.unshift({
    time: new Date(),
    slotResult,
    spinResult: segment,
    segIdx,
    multiplier,
    winners,
    payout,
    isBonus: bonus
  });

  if (spinData.length > 500) spinData.pop();

  rerenderTemperaturePanel(game);

  if (state.currentTab === "history") {
    rerenderHistoryPanel(game, spinData);
  }

  if (state.currentTab === "stats") {
    if (game.id !== "monopoly") {
      rerenderStatsPanel(game, spinData);
    }
  }

  if (state.currentTab === "bigwins") {
    rerenderBigWinsPanel(game);
  }
}