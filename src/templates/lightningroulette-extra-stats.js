'use strict';

// ── Roulette colour lookup ────────────────────────────────────────────────────
const RED_NUMBERS = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);

function getRouletteColor(n) {
  if (n === 0)              return { bg: '#16a34a', text: '#fff' }; // зелёный
  if (RED_NUMBERS.has(n))   return { bg: '#dc2626', text: '#fff' }; // красный
  return                           { bg: '#1a1a1a', text: '#fff' }; // чёрный
}

// ── Main render ───────────────────────────────────────────────────────────────
function renderLightningRouletteExtraStatsSection(t, data) {
  const tr = t.lightningrouletteStatsExtra || {};
  const common = t.common || {};

  const trackedMeta = `Past ${data.trackedHours}h • ${data.totalSpins.toLocaleString('en-US')} ${common.spins || 'Spins'}`;

  const maxColorPct = Math.max(...data.colorStats.map((c) => c.percent), 1);
  const maxMultPct  = Math.max(...data.multiplierRows.map((r) => r.sharePercent), 1);

  // ── 1. Colour Distribution ─────────────────────────────────────────────────
  const colorSection = `
    <article class="lr-extra-card">
      <div class="lr-extra-head">
        <h3 class="lr-extra-title">${tr.colorDetailsTitle || 'Colour Distribution'}</h3>
        <p class="lr-extra-meta">${trackedMeta}</p>
      </div>
      <div class="lr-color-bars">
        ${data.colorStats.map((c) => {
          const w = Math.max((c.percent / maxColorPct) * 100, 3).toFixed(1);
          return `
          <div class="lr-color-row">
            <span class="lr-color-dot" style="background:${c.color}"></span>
            <span class="lr-color-label">${c.label}</span>
            <div class="lr-color-bar-track">
              <div class="lr-color-bar-fill" style="width:${w}%;background:${c.color}"></div>
            </div>
            <span class="lr-color-pct">${c.percent}%</span>
            <span class="lr-color-count">${c.count.toLocaleString('en-US')}</span>
          </div>`;
        }).join('')}
      </div>
    </article>`;

  // ── 2. Lightning Multiplier Frequency ─────────────────────────────────────
  const multSection = `
    <article class="lr-extra-card">
      <div class="lr-extra-head">
        <h3 class="lr-extra-title">${tr.multiplierMatchedTitle || 'Lightning Multiplier Frequency'}</h3>
        <p class="lr-extra-meta">${trackedMeta}</p>
      </div>
      <div class="lr-mult-list">
        ${data.multiplierRows.map((r) => {
          const w = Math.max((r.sharePercent / maxMultPct) * 100, r.hits > 0 ? 3 : 0).toFixed(1);
          return `
          <div class="lr-mult-row">
            <span class="lr-mult-label">${r.label}</span>
            <div class="lr-mult-bar-track">
              <div class="lr-mult-bar-fill" style="width:${w}%"></div>
            </div>
            <span class="lr-mult-pct">${r.sharePercent}%</span>
            <span class="lr-mult-hits">${r.hits}/${r.total}</span>
          </div>`;
        }).join('')}
      </div>
    </article>`;

  // ── 3. Number Statistics ───────────────────────────────────────────────────
  const numSection = `
    <article class="lr-extra-card">
      <div class="lr-extra-head">
        <h3 class="lr-extra-title">${tr.numberStatsTitle || 'Number Statistics'}</h3>
        <p class="lr-extra-meta">${trackedMeta}</p>
      </div>
      <div class="lr-number-grid">
        ${data.numberStats.map((n) => {
          const col  = getRouletteColor(n.number);
          const mods = [
            n.isLightning    ? 'lr-number-lightning' : '',
            n.lastSeen === 0 ? 'lr-number-just-hit'  : '',
            n.lastSeen > 100 ? 'lr-number-cold'      : ''
          ].filter(Boolean).join(' ');
          const since = n.lastSeen === 0
            ? (tr.now  || 'now')
            : `${n.lastSeen} ${tr.since || 'ago'}`;
          return `
          <div class="lr-number-cell ${mods}">
            <span class="lr-number-val" style="background:${col.bg};color:${col.text}">${n.number}</span>
            ${n.isLightning ? '<span class="lr-number-bolt">⚡</span>' : ''}
            <span class="lr-number-pct">${n.percent}%</span>
            <span class="lr-number-since">${since}</span>
          </div>`;
        }).join('')}
      </div>
    </article>`;

  // ── 4. Dozens & Columns ────────────────────────────────────────────────────
  const splitSection = `
    <article class="lr-extra-card lr-extra-card--split">
      <div class="lr-split-col">
        <h3 class="lr-extra-title">${tr.rowDetailsTitle || 'Dozens'}</h3>
        <p class="lr-extra-meta">${trackedMeta}</p>
        <div class="lr-group-bars">
          ${data.rowStats.map((r) => `
          <div class="lr-group-row">
            <span class="lr-group-label">${r.label}</span>
            <div class="lr-color-bar-track">
              <div class="lr-color-bar-fill" style="width:${r.percent}%;background:var(--color-primary,#eab308)"></div>
            </div>
            <span class="lr-color-pct">${r.percent}%</span>
          </div>`).join('')}
        </div>
      </div>
      <div class="lr-split-col">
        <h3 class="lr-extra-title">${tr.columnDetailsTitle || 'Columns'}</h3>
        <p class="lr-extra-meta">${trackedMeta}</p>
        <div class="lr-group-bars">
          ${data.columnStats.map((c) => `
          <div class="lr-group-row">
            <span class="lr-group-label">${c.label}</span>
            <div class="lr-color-bar-track">
              <div class="lr-color-bar-fill" style="width:${c.percent}%;background:var(--color-primary,#eab308)"></div>
            </div>
            <span class="lr-color-pct">${c.percent}%</span>
          </div>`).join('')}
        </div>
      </div>
    </article>`;

  return `
  <section class="lr-extra-section">
    ${colorSection}
    ${multSection}
    ${numSection}
    ${splitSection}
  </section>`;
}

module.exports = { renderLightningRouletteExtraStatsSection };
