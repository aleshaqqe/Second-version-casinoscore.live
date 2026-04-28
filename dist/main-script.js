"use strict";

/* =========================
   BOOT
   ========================= */

document.addEventListener("DOMContentLoaded", () => {
  function getCurrentGameKey() {
    const gameDataScript = document.getElementById("gamePageData");
    if (!gameDataScript) return null;

    try {
      const payload = JSON.parse(gameDataScript.textContent);
      return payload?.game?.id || null;
    } catch (error) {
      return null;
    }
  }

  function getStoredTabKey(gameId) {
    return gameId ? `activeGameTab:${gameId}` : null;
  }

  function saveActiveTab(gameId, tabName) {
    const key = getStoredTabKey(gameId);
    if (!key || !tabName) return;
    sessionStorage.setItem(key, tabName);
  }

  function getSavedActiveTab(gameId) {
    const key = getStoredTabKey(gameId);
    if (!key) return null;
    return sessionStorage.getItem(key);
  }

  function activateTab(group, target) {
    if (!group || !target) return;

    document.querySelectorAll(`[data-tab-group="${group}"]`).forEach((btn) => {
      const isActive = btn.getAttribute("data-tab-target") === target;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-selected", String(isActive));
    });

    document.querySelectorAll(`[data-tab-panel-group="${group}"]`).forEach((panel) => {
      const isActive = panel.getAttribute("data-tab-panel") === target;
      panel.classList.toggle("active", isActive);
      panel.hidden = !isActive;
    });
  }

  // Burger
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (burgerBtn && mobileMenu) {
    burgerBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("open");
      burgerBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Desktop dropdown
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const trigger = dropdown.querySelector(".dropdown-trigger");
    if (!trigger) return;

    trigger.addEventListener("click", () => {
      const isOpen = dropdown.classList.toggle("open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  });

  const currentGameId = getCurrentGameKey();

  // Tabs click
  document.querySelectorAll("[data-tab-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-tab-target");
      const group = button.getAttribute("data-tab-group");
      if (!target || !group) return;

      activateTab(group, target);

      if (group === "game-tabs" && currentGameId) {
        saveActiveTab(currentGameId, target);
      }
    });
  });

  // Restore saved tab (after reload)
  if (currentGameId) {
    const savedTab = getSavedActiveTab(currentGameId);
    if (savedTab) {
      const matchingButton = document.querySelector(
        `[data-tab-group="game-tabs"][data-tab-target="${savedTab}"]`
      );
      if (matchingButton) activateTab("game-tabs", savedTab);
    }
  }

  // Stream launch (CrazyTime)
  attachStreamLaunchHandlers(document);

  // Secure affiliate buttons (/go/...)
  secureAffiliateLinks(document);

  // Delegated click for secure affiliate spans
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".js-aff-btn-secure");
    if (!btn) return;

    const b64Url = btn.getAttribute("data-b64");
    if (!b64Url) return;

    const decodedUrl = atob(b64Url);
    window.open(decodedUrl, "_blank", "noopener,noreferrer");
  });

  initDynamicGameStats();
});

/* =========================
   AFF LINKS SECURITY
   ========================= */

function secureAffiliateLinks(root = document) {
  // Replace <a href="/go/..."> with <span data-b64="...">
  root.querySelectorAll('a[href^="/go/"]').forEach((link) => {
    // already processed?
    if (link.closest(".js-aff-btn-secure")) return;

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
}

function attachStreamLaunchHandlers(root = document) {
  root.querySelectorAll(".js-stream-launch").forEach((button) => {
    button.addEventListener("click", () => {
      const box = button.closest(".crazytime-stream-box");
      if (!box) return;

      const preview = box.querySelector(".crazytime-stream-overlay");
      const frameShell = box.querySelector(".crazytime-stream-frame-shell");
      const iframe = box.querySelector(".crazytime-stream-frame");
      const src = button.getAttribute("data-stream-src");

      if (preview) preview.classList.add("hidden");
      if (frameShell) frameShell.classList.remove("hidden");

      if (iframe && src && !iframe.src) iframe.src = src;
    });
  });
}

/* =========================
   DYNAMIC GAME STATS
   ========================= */

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
  const ui = payload.ui || {};

  // важно: чтобы DreamCatcher окно 500 всегда работало стабильно
  let spinData = generateSpinData(game, game.id === "dreamcatcher" ? 520 : 120);
  // После инициализации spinData:



  const state = {
    currentTab: "temperature",
    liveUpdateInterval: null,
    ui
  };

  // если вкладка восстановилась через sessionStorage — читаем активную вкладку из DOM
  state.currentTab =
    document
      .querySelector('[data-tab-group="game-tabs"].tab-btn.active')
      ?.getAttribute("data-tab-target") || state.currentTab;

  // следим за сменой вкладок
  document.querySelectorAll('[data-tab-group="game-tabs"]').forEach((button) => {
    button.addEventListener("click", () => {
      state.currentTab = button.getAttribute("data-tab-target") || "temperature";
    });
  });

  // каждые 30 секунд симулируем новый спин и обновляем UI
  state.liveUpdateInterval = window.setInterval(() => {
    simulateLiveUpdate(game, spinData, state);
  }, 30000);
}

/* =========================
   UTILS (format/random)
   ========================= */

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

/* =========================
   MOCK DATA (client)
   ========================= */
   function randomIntClient(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function pickUniqueBallsClient(count, min, max) {
    const pool = [];
    for (let i = min; i <= max; i++) pool.push(i);
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    return pool.slice(0, count).sort((a, b) => a - b);
  }
  
  function getRandomMegaMultiplierClient() {
    return ["5x","10x","15x","20x","25x","50x","100x"][Math.floor(Math.random() * 7)];
  }
  
function getMultiplierPool(game, bonus) {
  if (game.id === "dreamcatcher") {
    return bonus
      ? [7, 14, 21, 35, 70, 140, 280, 343]
      : [1, 2, 3, 5, 7, 10];
  }

  return bonus
    ? [5, 10, 15, 20, 25, 50, 100, 200, 500]
    : [1, 2, 3, 5];
}

function getWinnersCount(game) {
  return game.id === "dreamcatcher"
    ? Math.floor(Math.random() * 100) + 1
    : Math.floor(Math.random() * 2000) + 100;
}

function generateSpinData(game, count) {
  const data = [];
  const now = Date.now();

  for (let i = 0; i < count; i += 1) {
    const segIdx = weightedRandom(game.segProbs || [100]);
    const segment = game.segments?.[segIdx] || game.name;
    const bonus = isBonusSegment(segIdx, segment);
    const multiplierPool = getMultiplierPool(game, bonus);
    const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
    const winners = getWinnersCount(game);
    const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));
    const slotResult = game.segments?.[Math.floor(Math.random() * Math.min(4, game.segments.length))] || game.name;
  
    // ← ДОБАВИТЬ ЭТОТ БЛОК
    if (game.id === "megaball") {
      const megaBallNumber = randomIntClient(1, 25);
      const hasSecond = Math.random() < 0.03;
      let secondNum = null;
      if (hasSecond) {
        do { secondNum = randomIntClient(1, 25); } while (secondNum === megaBallNumber);
      }
      data.push({
        time: new Date(now - i * 65000),
        balls: pickUniqueBallsClient(20, 1, 51),
        megaBallNumber,
        megaBallMultiplier: getRandomMegaMultiplierClient(),
        secondMegaBallNumber: secondNum,
        secondMegaBallMultiplier: hasSecond ? getRandomMegaMultiplierClient() : null,
        payout: Math.round(Math.random() * 49500 + 500),
        isBonus: hasSecond
      });
      continue; // ← пропускаем стандартный push ниже
    }
    // ← КОНЕЦ БЛОКА
  
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
  const biggestMultiplier = spinData.length
    ? Math.max(...spinData.map((item) => item.multiplier))
    : 0;
  const totalPayout = spinData.reduce((sum, item) => sum + item.payout, 0);
  const avgPayout = spinData.length ? Math.round(totalPayout / spinData.length) : 0;
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

function randomPlayerName() {
  const names = ["Joe...", "Eri...", "Mar...", "Nik...", "Har...", "Lf", "Dan...", "Zak...", "JMA", "Has..."];
  return names[Math.floor(Math.random() * names.length)];
}

/* =========================
   DREAM CATCHER EXTRA (fixed)
   ========================= */

function generateDreamCatcherExtraStats(game, spinData) {
  const DREAM_EXTRA_WINDOW = 500;
  const trackedSpins = spinData.slice(0, DREAM_EXTRA_WINDOW);
  const totalSpins = trackedSpins.length;

  const multiplierKeys = ["2x", "7x"];

  // ВАЖНО: НЕ фильтруем hits > 0, чтобы всегда было 2 строки
  const multiplierRows = multiplierKeys.map((key) => {
    const hits = trackedSpins.filter((item) => item.spinResult === key).length;
    const sharePercent = totalSpins ? Number(((hits / totalSpins) * 100).toFixed(2)) : 0;

    return {
      label: key,
      hits,
      total: totalSpins,
      sharePercent
    };
  });

  const matchHits = trackedSpins.filter((item) => multiplierKeys.includes(item.spinResult)).length;
  const matchPercent = totalSpins ? Number(((matchHits / totalSpins) * 100).toFixed(2)) : 0;
  const noMatchPercent = Number((100 - matchPercent).toFixed(2));

  const bestWins = [...trackedSpins]
    .sort((a, b) => b.payout - a.payout || b.multiplier - a.multiplier)
    .slice(0, 5)
    .map((item) => ({
      date: new Date(item.time).toLocaleDateString("en-US", { month: "numeric", day: "numeric" }),
      time: new Date(item.time).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false }),
      outcome: item.spinResult,
      player: randomPlayerName(),
      amount: `€${item.payout.toLocaleString("en-US")}`,
      multiplier: `${item.multiplier}x`,
      segIdx: item.segIdx
    }));

  return {
    totalSpins,
    bestWins,
    multiplierRows,
    matchPercent,
    noMatchPercent
  };
}

function rerenderDreamCatcherExtraOnly(game, spinData, ui) {
  const section = document.querySelector(".dream-catcher__extra-section");
  if (!section) return;

  const data = generateDreamCatcherExtraStats(game, spinData);
  section.outerHTML = renderDreamCatcherExtraStatsClient(data, game, ui);
}

function renderDreamCatcherExtraStatsClient(data, game, ui) {
  const tr = ui?.dreamcatcherStatsExtra || {};
  const common = ui?.common || {};

  const matchedTitle = tr.matchedTitle || tr.wheelMatchedTitle || "Wheel Multipliers Matched";
  const matchedText = tr.matchedText || tr.wheelMatchedText || "Compare multiplier hits against regular spins in the current sample.";

  const trackedMeta = `${tr.trackedMetaPrefix || "Past 30 minutes"} • ${data.totalSpins} ${common.spins || "Spins"}`;

  return `
    <section class="dream-catcher__extra-section">
      <article class="dream-catcher__card">
        <div class="dream-catcher__section-head">
          <h3 class="dream-catcher__title">${tr.bestWinsTitle || "Top Single-Spin Wins"}</h3>
          <p class="dream-catcher__meta">${trackedMeta}</p>
          <p class="dream-catcher__text">${tr.bestWinsText || ""}</p>
        </div>

        <div class="table-wrap dream-catcher__table-wrap">
          <table class="spin-table dream-catcher__table">
            <thead>
              <tr>
                <th class="t-left">${tr.finished || "Finished"}</th>
                <th class="t-center">${tr.outcome || "Outcome"}</th>
                <th class="t-left">${tr.player || "Player"}</th>
                <th class="t-left">${tr.wonAmount || "Won Amount"}</th>
                <th class="t-left">${tr.multiplier || "Multiplier"}</th>
              </tr>
            </thead>
            <tbody>
              ${data.bestWins.map((item) => {
                const outcomeImage = getSegmentImage(game, item.outcome);

                return `
                  <tr>
                    <td class="t-left">
                      ${item.date}<br>
                      <span class="text-soft" style="font-size:0.75rem;">${item.time}</span>
                    </td>
                    <td class="t-center">
                      ${outcomeImage
                        ? `<span class="result-badge result-badge-image dream-catcher__badge">
                            <img src="/${outcomeImage}" alt="${item.outcome}" loading="lazy" decoding="async" class="result-badge-img">
                          </span>`
                        : `<span class="result-badge dream-catcher__badge" style="background:#6b7280;">${item.outcome}</span>`}
                    </td>
                    <td class="t-left">${item.player}</td>
                    <td class="t-left"><strong>${item.amount}</strong></td>
                    <td class="t-left"><span class="monopoly-multiplier-pill">${item.multiplier}</span></td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="dream-catcher__card">
        <div class="dream-catcher__section-head">
          <h3 class="dream-catcher__title">${tr.wheelStatsTitle || "Wheel Multipliers Stats"}</h3>
          <p class="dream-catcher__meta">${trackedMeta}</p>
          <p class="dream-catcher__text">${tr.wheelStatsText || ""}</p>
        </div>

        <div class="dream-catcher__wheel-list">
          ${data.multiplierRows.map((row) => {
            const wheelImage = getSegmentImage(game, row.label);
            const barWidth = row.sharePercent > 0 ? Math.max(row.sharePercent, 4) : 0;

            return `
              <div class="dream-catcher__wheel-item">
                <div class="dream-catcher__wheel-top">
                  <div class="dream-catcher__wheel-label">
                    ${wheelImage
                      ? `<img src="/${wheelImage}" alt="${row.label}" loading="lazy" decoding="async" class="dream-catcher__wheel-thumb">`
                      : ""}
                    <span>${row.label}</span>
                  </div>

                  <strong>(${row.hits}/${row.total}) ${row.sharePercent}%</strong>
                </div>

                <div class="dream-catcher__bar">
                  <div class="dream-catcher__bar-fill" style="width:${barWidth}%;"></div>
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </article>

      <article class="dream-catcher__card">
        <div class="dream-catcher__section-head">
          <h3 class="dream-catcher__title">${matchedTitle}</h3>
          <p class="dream-catcher__meta">${trackedMeta}</p>
          <p class="dream-catcher__text">${matchedText}</p>
        </div>

        <div class="dream-catcher__match-list">
          <div class="dream-catcher__match-item">
            <div class="dream-catcher__match-row">
              <span>${tr.match || "Match"}</span>
              <strong>${data.matchPercent}%</strong>
            </div>
            <div class="dream-catcher__bar dream-catcher__bar--match">
              <div class="dream-catcher__bar-fill" style="width:${data.matchPercent}%;"></div>
            </div>
          </div>

          <div class="dream-catcher__match-item">
            <div class="dream-catcher__match-row">
              <span>${tr.noMatch || "No Match"}</span>
              <strong>${data.noMatchPercent}%</strong>
            </div>
            <div class="dream-catcher__bar dream-catcher__bar--nomatch">
              <div class="dream-catcher__bar-fill" style="width:${data.noMatchPercent}%;"></div>
            </div>
          </div>
        </div>
      </article>
    </section>
  `;
}

/* =========================
   MONOPOLY EXTRA (as before)
   ========================= */

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

/* =========================
   IMAGES + BADGES
   ========================= */

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

/* =========================
   RERENDER PANELS
   ========================= */

   function rerenderTemperaturePanel(game, ui = {}) {
    if (game.id === "megaball") return;
    const panel = document.querySelector(
      '[data-tab-panel="temperature"][data-tab-panel-group="game-tabs"]'
    );
    if (!panel) return;
  
    const tr = ui?.gamePanels || {};
  
    const subtitle =
      tr.temperatureSubtitle ||
      "Live segment temperature highlights hot and cold outcomes based on recent spins versus expected probability.";
  
    const spinsSinceTpl = tr.temperatureSpinsSince || "{n} spins since";
  
    const temperatureData = generateTemperatureData(game);
  
    panel.innerHTML = `
      <h2 class="panel-title">Segment Temperature</h2>
      <p class="panel-subtitle">${subtitle}</p>
  
      <div class="temp-grid">
        ${temperatureData
          .map((item) => {
            const spinsSinceText = spinsSinceTpl.replace("{n}", item.spinsSince);
  
            return `
              <div class="temp-card">
                ${renderTemperatureSegment(game, item.segment, item.color, item.shortSegment)}
                <div class="temp-value ${item.tempClass}">${item.actual}%</div>
                <div class="temp-diff ${item.diff >= 0 ? "positive" : "negative"}">
                  (${item.diff >= 0 ? "+" : ""}${item.diff})
                </div>
                <div class="temp-spins">${spinsSinceText}</div>
                <i class="fas ${item.iconClass} ${item.tempClass} temp-icon"></i>
              </div>
            `;
          })
          .join("")}
      </div>
    `;
  }

  function rerenderHistoryPanel(game, spinData, ui = {}) {
    const panel = document.querySelector(
      '[data-tab-panel="history"][data-tab-panel-group="game-tabs"]'
    );
    if (!panel) return;
  
    const tr = ui?.gamePanels || {};
    const subtitle =
      tr.historySubtitle ||
      "Explore the latest spin history with real-time results, multipliers, winners, and payouts.";
    const pageData = spinData.slice(0, 25);
  
    // ── MEGABALL ──────────────────────────────────────────────
    if (game.id === "megaball") {
      const renderBall = (n) =>
        `<span class="result-badge result-badge-ball">${n}</span>`;
  
      panel.innerHTML = `
        <h2 class="panel-title">Recent Spin History</h2>
        <p class="panel-subtitle">${subtitle}</p>
  
        <div class="table-wrap">
          <table class="spin-table">
            <thead>
              <tr>
                <th class="t-left">${tr.occurredAt || "Occurred At"}</th>
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
                       ${renderBall(spin.megaBallNumber)}
                       <span class="mega-ball-multiplier">${spin.megaBallMultiplier || ""}</span>
                     </div>`
                  : `<span class="text-soft">—</span>`;
  
                const secondMegaBallMarkup = spin.secondMegaBallNumber
                  ? `<div class="mega-ball-inline">
                       ${renderBall(spin.secondMegaBallNumber)}
                       <span class="mega-ball-multiplier">${spin.secondMegaBallMultiplier || ""}</span>
                     </div>`
                  : `<span class="text-soft">—</span>`;
  
                const ballsMarkup = Array.isArray(spin.balls)
                  ? `<div class="mega-balls-list">${spin.balls.map(renderBall).join("")}</div>`
                  : "";
  
                return `
                  <tr>
                    <td class="t-left text-soft">${formatTime(spin.time)}</td>
                    <td class="t-left">${megaBallMarkup}</td>
                    <td class="t-left">${secondMegaBallMarkup}</td>
                    <td class="t-left mega-balls-cell">${ballsMarkup}</td>
                    <td class="t-right text-green" style="font-weight:600;">
                      $${numberWithCommas(spin.payout)}
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      `;
      return;
    }
  
    // ── СТАНДАРТНЫЙ РЕНДЕР (все остальные игры) ───────────────
    const showSlotResult = game.id !== "monopoly" && !game.hideSlotResult;
    const showSpecialResult = game.id === "dreamcatcher";
  
    panel.innerHTML = `
      <h2 class="panel-title">Recent Spin History</h2>
      <p class="panel-subtitle">${subtitle}</p>
  
      <div class="table-wrap">
        <table class="spin-table">
          <thead>
            <tr>
              <th class="t-left">${tr.occurredAt || "Occurred At"}</th>
              ${showSlotResult ? `<th class="t-center">${tr.slotResult || "Slot Result"}</th>` : ""}
              <th class="t-center">${tr.spinResult || "Spin Result"}</th>
              ${showSpecialResult ? `<th class="t-center">${tr.specialResult || "Special Result"}</th>` : ""}
              <th class="t-right">${tr.multiplier || "Multiplier"}</th>
              <th class="t-right">${tr.totalWinners || "Total Winners"}</th>
              <th class="t-right">${tr.totalPayout || "Total Payout"}</th>
            </tr>
          </thead>
          <tbody>
            ${pageData.map((spin) => {
              const isSpecial =
                showSpecialResult &&
                (spin.spinResult === "2x" || spin.spinResult === "7x");
  
              const segmentIndex = game.segments.indexOf(spin.spinResult);
              const slotIdx = game.segments.indexOf(spin.slotResult);
              const spinColor = segmentIndex >= 0 ? game.segColors[segmentIndex] : "#6b7280";
              const slotColor = slotIdx >= 0 ? game.segColors[slotIdx] : "#6b7280";
  
              return `
                <tr>
                  <td class="t-left text-soft">${formatTime(spin.time)}</td>
  
                  ${showSlotResult ? `
                    <td class="t-center">
                      ${isSpecial ? "" : renderSegmentBadge(game, spin.slotResult, slotColor, "result-badge-slot", "slot")}
                    </td>
                  ` : ""}
  
                  <td class="t-center">
                    ${spin.isBonus
                      ? renderSegmentBadge(game, spin.spinResult, spinColor, "result-badge-bonus-image", "spin")
                      : renderSegmentBadge(game, spin.spinResult, spinColor, "", "spin")
                    }
                  </td>
  
                  ${showSpecialResult ? `
                    <td class="t-center">
                      ${isSpecial ? `<span class="special-result-pill">${spin.spinResult}</span>` : ""}
                    </td>
                  ` : ""}
  
                  <td class="t-right ${!isSpecial && spin.multiplier >= 50 ? "text-gold" : ""}" style="font-weight:600;">
                    ${isSpecial ? "" : `${spin.multiplier}x`}
                  </td>
  
                  <td class="t-right text-soft">
                    ${isSpecial ? "" : numberWithCommas(spin.winners)}
                  </td>
  
                  <td class="t-right text-green" style="font-weight:600;">
                    ${isSpecial ? "" : `$${numberWithCommas(spin.payout)}`}
                  </td>
                </tr>
              `;
            }).join("")}
          </tbody>
        </table>
      </div>
    `;
  }
  

function rerenderStatsPanel(game, spinData, ui = {}) {
  const panel = document.querySelector(
    '[data-tab-panel="stats"][data-tab-panel-group="game-tabs"]'
  );
  if (!panel) return;

  const tr = ui?.gamePanels || {};

  const distribution = countDistribution(game, spinData);
  const summary = generateStatsSummary(game, spinData);
  const highestPercent = Math.max(...distribution.map((item) => item.percent), 1);

  const rtpBasedOn = tr.rtpBasedOn || "Based on last 1,000 spins";

  const totalSpinsTodayLabel = tr.summaryTotalSpinsToday || "Total Spins Today";
  const bonusRoundsLabel = tr.summaryBonusRounds || "Bonus Rounds";
  const biggestMultiplierLabel = tr.summaryBiggestMultiplier || "Biggest Multiplier";
  const avgPayoutLabel = tr.summaryAvgPayout || "Avg. Payout";

  let extraHtml = "";

  // CrazyTime: сохраняем существующий блок extra (чтобы не ломать большую секцию)
  if (game.id === "crazytime") {
    const crazyTimeExtra = panel.querySelector(".crazytime-bonus-section");
    extraHtml = crazyTimeExtra ? crazyTimeExtra.outerHTML : "";
  }

  // DreamCatcher: ререндерим extra с переводами (если у тебя есть renderDreamCatcherExtraStatsClient)
  if (game.id === "dreamcatcher" && typeof renderDreamCatcherExtraStatsClient === "function") {
    const dreamCatcherData = generateDreamCatcherExtraStats(game, spinData);
    extraHtml = renderDreamCatcherExtraStatsClient(dreamCatcherData, game, ui);
  }

  panel.innerHTML = `
    <div class="stats-main-grid">
      <div class="stats-grid-card">
        <h2 class="panel-title">Result Distribution</h2>

        <div class="chart-scroll">
          <div class="chart-box">
            ${distribution
              .map((item) => {
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
              })
              .join("")}
          </div>
        </div>
      </div>

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

      <div class="stats-grid-card summary-card">
        <p class="summary-label">${biggestMultiplierLabel}</p>
        <p class="summary-value gold">${summary.biggestMultToday}</p>
      </div>

      <div class="stats-grid-card summary-card">
        <p class="summary-label">${avgPayoutLabel}</p>
        <p class="summary-value green">${summary.avgPayoutToday}</p>
      </div>
    </div>

    ${extraHtml}
  `;

  // если у тебя есть функция защиты /go/ ссылок — применим повторно
  if (typeof secureAffiliateLinks === "function") {
    secureAffiliateLinks(panel);
  }
}

function rerenderBigWinsPanel(game, ui = {}) {
  const panel = document.querySelector(
    '[data-tab-panel="bigwins"][data-tab-panel-group="game-tabs"]'
  );
  if (!panel) return;

  const tr = ui?.gamePanels || {};
  const watchLabel = tr.watch || "Watch";

  const wins = generateBigWins(game);

  panel.innerHTML = `
    <h2 class="panel-title">Top Multiplier Wins</h2>

    <div class="bigwins-grid">
      ${wins
        .map((win, index) => `
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
              <span class="bigwin-watch"><i class="fas fa-play-circle"></i> ${watchLabel}</span>
            </div>
          </article>
        `)
        .join("")}
    </div>
  `;
}

/* =========================
   LIVE UPDATE
   ========================= */

function simulateLiveUpdate(game, spinData, state) {
  const segIdx = weightedRandom(game.segProbs || [100]);
  const segment = game.segments?.[segIdx] || game.name;
  const bonus = isBonusSegment(segIdx, segment);

  const multiplierPool = getMultiplierPool(game, bonus);
  const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
  const winners = getWinnersCount(game);
  const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));

  const slotResult =
    game.segments?.[
      Math.floor(Math.random() * Math.min(4, game.segments.length))
    ] || game.name;

// Базовый объект спина
const newSpin = {
  time: new Date(),
  slotResult,
  spinResult: segment,
  segIdx,
  multiplier,
  winners,
  payout,
  isBonus: bonus
};

// ── MEGABALL: добавляем специфичные поля ──────────────────
if (game.id === "megaball") {
  const megaMultipliers = ["5x", "10x", "12x", "15x", "20x", "25x", "50x", "100x"];
  const megaWeights     = [30,   25,    15,    12,    8,     5,     3,     2];

  // взвешенный случайный выбор мультипликатора
  const pickMegaMult = () => {
    const total = megaWeights.reduce((a, b) => a + b, 0);
    let r = Math.random() * total;
    for (let i = 0; i < megaMultipliers.length; i++) {
      r -= megaWeights[i];
      if (r <= 0) return megaMultipliers[i];
    }
    return megaMultipliers[0];
  };

  // 20 уникальных шаров из диапазона 1–80
  const pickBalls = (count) => {
    const pool = Array.from({ length: 80 }, (_, i) => i + 1);
    const result = [];
    for (let i = 0; i < count; i++) {
      const idx = Math.floor(Math.random() * pool.length);
      result.push(pool.splice(idx, 1)[0]);
    }
    return result.sort((a, b) => a - b);
  };

  const balls = pickBalls(20);
  const megaBallNumber = Math.floor(Math.random() * 80) + 1;

  newSpin.balls              = balls;
  newSpin.megaBallNumber     = megaBallNumber;
  newSpin.megaBallMultiplier = pickMegaMult();

  // ~10% шанс второго Mega Ball
  if (Math.random() < 0.10) {
    let secondNum;
    do { secondNum = Math.floor(Math.random() * 80) + 1; }
    while (secondNum === megaBallNumber);
    newSpin.secondMegaBallNumber     = secondNum;
    newSpin.secondMegaBallMultiplier = pickMegaMult();
  }
  newSpin.payout = Math.round(Math.random() * 49500 + 500);
}
// ─────────────────────────────────────────────────────────

spinData.unshift(newSpin);
  
  // держим запас (чтобы окно 500 работало и не «скакало»)
  if (spinData.length > 800) spinData.pop();

  // всегда обновляем temperature
  rerenderTemperaturePanel(game);

  // conditional updates
  if (state.currentTab === "history") {
    rerenderHistoryPanel(game, spinData, state.ui);
  }
  
  if (state.currentTab === "stats") {
    rerenderStatsPanel(game, spinData, state.ui);
  }
  
  if (state.currentTab === "bigwins") {
    rerenderBigWinsPanel(game, state.ui);
  }
  // Dream Catcher extra — обновляем всегда, каждые 30 сек
  if (game.id === "dreamcatcher") {
    rerenderDreamCatcherExtraOnly(game, spinData, state.ui);
  }
}