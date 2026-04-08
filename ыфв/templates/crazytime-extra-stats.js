function renderCrazyTimeExtraStatsSection(t, extraData) {
    const tr = t.crazytimeStatsExtra || {};
    const {
      flapper,
      coinFlip,
      symbols,
      recentMultipliers,
      bestBets,
      latestMax
    } = extraData;
  
    return `
      <section class="crazytime-bonus-section">
        <div class="crazytime-bonus-card">
          <div class="crazytime-bonus-header">
            <h2 class="crazytime-bonus-title">${tr.sectionTitle || "Advanced Crazy Time Bonus Statistics"}</h2>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.flapperTitle || "Crazy Bonus Flapper"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.flapperText || ""}</p>
            </div>
  
            <div class="crazytime-bonus-list">
              ${flapper.map((item) => {
                const fill = Math.min((item.value / item.avg) * 50, 100);
                return `
                  <div class="crazytime-bonus-item">
                    <div class="crazytime-bonus-top">
                      <div class="crazytime-bonus-label">
                        <div class="crazytime-bonus-name">${item.label}</div>
                      </div>
  
                      <div class="crazytime-bonus-bar-wrap">
                        <div class="crazytime-bonus-bar">
                          <div class="crazytime-bonus-fill" style="width:${fill}%; background:${item.color};"></div>
                          <div class="crazytime-bonus-marker"></div>
                        </div>
                        <div class="crazytime-bonus-bar-meta">${item.avg}x ${tr.avgAlways || "Always avg."}</div>
                      </div>
  
                      <div class="crazytime-bonus-metric">
                        <div class="crazytime-bonus-value">${item.value}x</div>
                        <div class="crazytime-bonus-diff ${item.diff >= 0 ? "positive" : "negative"}">
                          ${item.diff >= 0 ? "+" : ""}${item.diff}%
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
  
            <div class="crazytime-bonus-footnote">${tr.flapperFootnote || ""}</div>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.coinFlipTitle || "Coin Flip"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.coinFlipText || ""}</p>
            </div>
  
            <div class="crazytime-coinflip-grid">
              ${coinFlip.map((item) => {
                const freqFill = Math.min(item.frequency, 100);
                return `
                  <div class="crazytime-coinflip-card">
                    <div class="crazytime-coinflip-top">
                      <div class="crazytime-coinflip-color" style="background:${item.color};">${item.label}</div>
                      <div class="crazytime-coinflip-metrics">
                        <div class="crazytime-coinflip-label">${tr.avgMultiplier || "Avg. Multiplier"}</div>
                        <div class="crazytime-coinflip-value">${item.avgMultiplier}x</div>
                        <div class="crazytime-coinflip-diff ${item.diff >= 0 ? "positive" : "negative"}">
                          ${item.diff >= 0 ? "+" : ""}${item.diff}% ${tr.vsAvg || "vs avg."}
                        </div>
                      </div>
                    </div>
  
                    <div class="crazytime-coinflip-frequency">
                      <div class="crazytime-coinflip-frequency-row">
                        <span>${tr.frequency || "Frequency"}</span>
                        <strong>${item.frequency}%</strong>
                      </div>
                      <div class="crazytime-coinflip-frequency-diff ${item.freqDiff >= 0 ? "positive" : "negative"}">
                        ${item.freqDiff >= 0 ? "+" : ""}${item.freqDiff}%
                      </div>
                      <div class="crazytime-coinflip-bar">
                        <div class="crazytime-coinflip-bar-fill" style="width:${freqFill}%; background:${item.color};"></div>
                        <div class="crazytime-coinflip-bar-marker" style="left:${item.avgFrequency}%;"></div>
                      </div>
                      <div class="crazytime-coinflip-bar-meta">${tr.avgAlways || "Always avg."}: ${item.avgFrequency}%</div>
                    </div>
                  </div>
                `;
              }).join("")}
            </div>
  
            <div class="crazytime-bonus-footnote">${tr.coinFlipFootnote || ""}</div>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.cashHuntSymbolsTitle || "Cash Hunt Symbols"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.cashHuntSymbolsText || ""}</p>
            </div>
  
            <div class="crazytime-symbols-grid">
              ${symbols.map((item) => `
                <div class="crazytime-symbol-card ${item.diff >= 0 ? "positive" : "negative"}">
                  <div class="crazytime-symbol-icon">${item.symbol}</div>
                  <div class="crazytime-symbol-value">${item.value}x</div>
                  <div class="crazytime-symbol-diff ${item.diff >= 0 ? "positive" : "negative"}">
                    ${item.diff >= 0 ? "+" : ""}${item.diff}%
                  </div>
                  <div class="crazytime-symbol-meta">${tr.avgAlways || "Always avg."}: <strong>${item.avg}x</strong></div>
                  <div class="crazytime-symbol-meta">${item.count} ${tr.times || "times"}</div>
                </div>
              `).join("")}
            </div>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.recentCashHuntTitle || "Cash Hunt: Recent Multipliers"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.recentCashHuntText || ""}</p>
            </div>
  
            <div class="crazytime-recent-grid">
              ${recentMultipliers.map((value, index) => {
                const cls = index === 0 ? "high" : index === 47 ? "low" : "";
                return `<div class="crazytime-recent-cell ${cls}">${value}x</div>`;
              }).join("")}
            </div>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.bestBetsTitle || "Best Individual Bets"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.bestBetsText || ""}</p>
            </div>
  
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.date || "Date"}</th>
                    <th class="t-center">${tr.result || "Result"}</th>
                    <th class="t-left">${tr.player || "Player"}</th>
                    <th class="t-right">${tr.payout || "Payout"}</th>
                    <th class="t-right">${tr.multiplier || "Multiplier"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${bestBets.map((item) => `
                    <tr>
                      <td class="t-left text-soft">${item.date}<br><span class="text-soft" style="font-size:0.75rem;">${item.time}</span></td>
                      <td class="t-center">${item.result}</td>
                      <td class="t-left">${item.player}</td>
                      <td class="t-right text-green" style="font-weight:700;">${item.payout}</td>
                      <td class="t-right"><span class="coinflip-pill">${item.multiplier}</span></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="crazytime-bonus-card">
            <div class="crazytime-bonus-header">
              <h3 class="crazytime-bonus-title">${tr.latestMaxTitle || "Latest Maximum Multipliers"}</h3>
              <p class="crazytime-bonus-subtitle">6 hours • 420 spins</p>
              <p class="crazytime-bonus-subtitle">${tr.latestMaxText || ""}</p>
            </div>
  
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.date || "Date"}</th>
                    <th class="t-center">${tr.result || "Result"}</th>
                    <th class="t-right">${tr.multiplier || "Multiplier"}</th>
                    <th class="t-center">${tr.clip || "Watch Clip"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${latestMax.map((item) => `
                    <tr>
                      <td class="t-left text-soft">${item.date}<br><span class="text-soft" style="font-size:0.75rem;">${item.time}</span></td>
                      <td class="t-center">${item.result}</td>
                      <td class="t-right"><span class="coinflip-pill">${item.multiplier}</span></td>
                      <td class="t-center">
                        <a href="/go/reg/" target="_blank" rel="noreferrer noopener nofollow" class="hero-play-btn" style="min-height:40px; padding:0 16px; font-size:0.84rem; border-radius:10px;">
                          ${tr.clip || "Watch Clip"}
                        </a>
                      </td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
  
            <div style="margin-top:18px;">
              <a href="/go/reg/" target="_blank" rel="noreferrer noopener nofollow" class="hero-play-btn" style="min-height:46px; padding:0 18px; border-radius:12px;">
                ${tr.biggestWinsGallery || "Biggest Wins Gallery"}
              </a>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  
  module.exports = { renderCrazyTimeExtraStatsSection };