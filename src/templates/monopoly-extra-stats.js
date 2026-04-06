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
  
  function renderMonopolyExtraStatsSection(t, data) {
    const tr = t.monopolyStatsExtra || {};
  
    return `
      <section class="monopoly-extra-section">
        <div class="monopoly-dice-grid">
          ${renderDiceRows(tr.diceRollsLowTitle || "Low Tier Dice Rolls", tr.trackedMeta || "Past 6 hours • 258 Spins", data.dice.low)}
          ${renderDiceRows(tr.diceRollsMidTitle || "Mid Tier Dice Rolls", tr.trackedMeta || "Past 6 hours • 258 Spins", data.dice.mid)}
          ${renderDiceRows(tr.diceRollsHighTitle || "High Tier Dice Rolls", tr.trackedMeta || "Past 6 hours • 258 Spins", data.dice.high)}
        </div>
  
        <div class="monopoly-stats-card">
          <div class="monopoly-stats-header">
            <h3 class="monopoly-stats-title">${tr.boardMovesTitle || "Board Moves Statistics"}</h3>
            <p class="monopoly-stats-meta">${tr.trackedMeta || "Past 6 hours • 258 Spins"}</p>
          </div>
  
          <div class="monopoly-progress-list">
            <div class="monopoly-progress-item">
              <div class="monopoly-progress-label">
                ${tr.bonusGameStats || "Bonus Game Stats"} (${data.board.bonusGameHits}/${data.board.totalSpins})
                <strong>${data.board.bonusGamePercent}%</strong>
              </div>
              <div class="monopoly-progress">
                <div class="monopoly-progress-fill" style="width:${data.board.bonusGamePercent}%;"></div>
              </div>
            </div>
  
            <div class="monopoly-progress-item">
              <div class="monopoly-progress-label">
                ${tr.doublesRolled || "Doubles Rolled"} (${data.board.doublesHits}/${data.board.doublesTotal})
                <strong>${data.board.doublesPercent}%</strong>
              </div>
              <div class="monopoly-progress">
                <div class="monopoly-progress-fill" style="width:${data.board.doublesPercent}%;"></div>
              </div>
            </div>
  
            <div class="monopoly-avg-box-row">
              <span>${tr.avgBoardRolls || "Avg Board Rolls per Bonus Game"}</span>
              <span class="monopoly-avg-box">${data.board.avgBoardRolls}</span>
            </div>
          </div>
        </div>
  
        <div class="monopoly-stats-card">
          <div class="monopoly-stats-header">
            <h3 class="monopoly-stats-title">${tr.landingStatsTitle || "MONOPOLY Big Baller Landing Square Stats"}</h3>
            <p class="monopoly-stats-meta">${tr.trackedMeta || "Past 6 hours • 258 Spins"}</p>
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
            <h3 class="monopoly-stats-title">${tr.bestIndividualWinsTitle || "Best Individual Wins"}</h3>
            <p class="monopoly-stats-meta">${tr.trackedMeta || "Past 6 hours • 258 Spins"}</p>
          </div>
  
          <div class="table-wrap">
            <table class="spin-table monopoly-stats-table">
              <thead>
                <tr>
                  <th class="t-left">${tr.finished || "Finished"}</th>
                  <th class="t-left">${tr.player || "Player"}</th>
                  <th class="t-left">${tr.wonAmount || "Won Amount"}</th>
                  <th class="t-left">${tr.multiplier || "Multiplier"}</th>
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
            <h3 class="monopoly-stats-title">${tr.latestTopMultipliersTitle || "Latest Top Multipliers"}</h3>
            <p class="monopoly-stats-meta">${tr.trackedMeta || "Past 6 hours • 258 Spins"}</p>
          </div>
  
          <div class="table-wrap">
            <table class="spin-table monopoly-stats-table">
              <thead>
                <tr>
                  <th class="t-left">${tr.finished || "Finished"}</th>
                  <th class="t-left">${tr.bonusRound || "Bonus Round"}</th>
                  <th class="t-left">${tr.multiplier || "Multiplier"}</th>
                  <th class="t-left">${tr.bigWinClip || "Big Win Clip"}</th>
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
                        <span>${tr.watchClip || "Watch Clip"}</span>
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
              ${tr.biggestWinsGallery || "Biggest Wins Gallery"}
            </a>
          </div>
        </div>
      </section>
    `;
  }
  
  module.exports = { renderMonopolyExtraStatsSection };