"use strict";

// ── Helpers ───────────────────────────────────────────────────────────────────
const LR_RED_H = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

function lrColor(n) {
  if (n === 0)           return { bg: "#16a34a", text: "#fff" };
  if (LR_RED_H.has(n))  return { bg: "#dc2626", text: "#fff" };
  return                        { bg: "#1a1a1a", text: "#fff" };
}

function lrFormatTime(date) {
  const d   = new Date(date);
  const offset = -d.getTimezoneOffset() / 60;
  const sign   = offset >= 0 ? "+" : "-";
  const pad    = (n) => String(Math.abs(n)).padStart(2, "0");

  const mon  = d.toLocaleDateString("en-US", { month: "short" });
  const day  = d.getDate();
  const year = d.getFullYear();
  const hh   = pad(d.getHours());
  const mm   = pad(d.getMinutes());

  return `${mon} ${day} ${year} @ ${hh}:${mm} UTC${sign}${pad(offset)}`;
}

function lrNumBadge(n) {
  const c = lrColor(n);
  return `<span class="lr-hist-ball" style="background:${c.bg};color:${c.text}">${n}</span>`;
}

function lrLuckyCell(lucky) {
  if (!lucky) return `<td class="lr-hist-td lr-hist-td--lucky"></td>`;
  return `<td class="lr-hist-td lr-hist-td--lucky">
    ${lrNumBadge(lucky.number)}
    <span class="lr-hist-mult">(${lucky.multiplier}x)</span>
  </td>`;
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderLightningRouletteHistory(t, spinData) {
  const tr = t.lightningrouletteHistory || {};

  // Translation keys с fallback — вот структура для translations.js:
  // lightningrouletteHistory: {
  //   occurredAt:  "Occurred At",
  //   spinResult:  "Spin Result",
  //   multiplier:  "Multiplier",
  //   firstLucky:  "First Lucky",
  //   secondLucky: "Second Lucky",
  //   thirdLucky:  "Third Lucky",
  //   fourthLucky: "Fourth Lucky",
  //   fifthLucky:  "Fifth Lucky",
  //   subtitle:    "Recent spin history with Lucky Number results.",
  // }

  const cols = [
    tr.occurredAt  || "Occurred At",
    tr.spinResult  || "Spin Result",
    tr.multiplier  || "Multiplier",
    tr.firstLucky  || "First Lucky",
    tr.secondLucky || "Second Lucky",
    tr.thirdLucky  || "Third Lucky",
    tr.fourthLucky || "Fourth Lucky",
    tr.fifthLucky  || "Fifth Lucky",
  ];

  const rows = spinData.slice(0, 25).map((spin) => {
    const col = lrColor(spin.spinResult);

    // Multiplier column — показываем только если результат попал в lucky number
    const multCell = spin.hitMultiplier
      ? `<td class="lr-hist-td lr-hist-td--mult">
           <span class="lr-hist-hit">${spin.hitMultiplier}x</span>
           <span class="lr-hist-bolt">⚡</span>
         </td>`
      : `<td class="lr-hist-td lr-hist-td--mult"></td>`;

    // Заполняем до 5 lucky слотов (пустые если меньше)
    const luckyCells = Array.from({ length: 5 }, (_, i) =>
      lrLuckyCell(spin.luckyNumbers?.[i] || null)
    ).join("");

    return `
    <tr class="lr-hist-row${spin.hitMultiplier ? " lr-hist-row--hit" : ""}">
      <td class="lr-hist-td lr-hist-td--time">
        <span class="lr-hist-time">${lrFormatTime(spin.time)}</span>
      </td>
      <td class="lr-hist-td lr-hist-td--result">
        ${lrNumBadge(spin.spinResult)}
      </td>
      ${multCell}
      ${luckyCells}
    </tr>`;
  }).join("");

  return `
  <h2 class="panel-title">${tr.panelTitle || "Spin History"}</h2>
  <p class="panel-subtitle">${tr.subtitle || "Recent spin history with Lucky Number results."}</p>

  <div class="lr-hist-wrap">
    <table class="lr-hist-table">
      <thead>
        <tr class="lr-hist-head">
          ${cols.map((c, i) => `<th class="lr-hist-th${i === 0 ? " lr-hist-th--time" : ""}">${c}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  </div>`;
}

module.exports = { renderLightningRouletteHistory };
