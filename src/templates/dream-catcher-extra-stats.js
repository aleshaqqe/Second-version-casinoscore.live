function getDreamCatcherImage(game, segmentName) {
    if (!game) return "";
  
    if (game.spinResultImages?.[segmentName]) {
      return game.spinResultImages[segmentName];
    }
  
    if (game.segmentImages?.[segmentName]) {
      return game.segmentImages[segmentName];
    }
  
    return "";
  }
  
  function renderDreamCatcherExtraStatsSection(t, data, game) {
    const tr = t.dreamcatcherStatsExtra || {};
    const trackedMeta = `${tr.trackedMetaPrefix || "Past 30 minutes"} • ${data.totalSpins} ${t.common?.spins || "Spins"}`;
  
    return `
      <section class="dream-catcher__extra-section">
        <article class="dream-catcher__card">
          <div class="dream-catcher__section-head">
            <h3 class="dream-catcher__title">${tr.bestWinsTitle || "Top Single-Spin Wins"}</h3>
            <p class="dream-catcher__meta">${trackedMeta}</p>
            <p class="dream-catcher__text">${tr.bestWinsText || "A quick look at the biggest payouts from the latest tracked spins."}</p>
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
                  const outcomeImage = getDreamCatcherImage(game, item.outcome);
  
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
            <p class="dream-catcher__text">${tr.wheelStatsText || "See how often the multiplier segments landed during the same tracked window."}</p>
          </div>
  
          <div class="dream-catcher__wheel-list">
            ${data.multiplierRows.map((row) => {
              const wheelImage = getDreamCatcherImage(game, row.label);
  
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
                    <div
                      class="dream-catcher__bar-fill"
                      style="width:${Math.max(row.sharePercent, 4)}%;"
                    ></div>
                  </div>
                </div>
              `;
            }).join("")}
          </div>
        </article>
  
        <article class="dream-catcher__card">
          <div class="dream-catcher__section-head">
            <h3 class="dream-catcher__title">${tr.matchedTitle || "Wheel Multipliers Matched"}</h3>
            <p class="dream-catcher__meta">${trackedMeta}</p>
            <p class="dream-catcher__text">${tr.matchedText || "Compare multiplier hits against regular spins in the current sample."}</p>
          </div>
  
          <div class="dream-catcher__match-list">
            <div class="dream-catcher__match-item">
              <div class="dream-catcher__match-row">
                <span>${tr.match || "Match"}</span>
                <strong>${data.matchPercent}%</strong>
              </div>
              <div class="dream-catcher__bar dream-catcher__bar--match">
                <div
                  class="dream-catcher__bar-fill"
                  style="width:${Math.max(data.matchPercent, 4)}%;"
                ></div>
              </div>
            </div>
  
            <div class="dream-catcher__match-item">
              <div class="dream-catcher__match-row">
                <span>${tr.noMatch || "No Match"}</span>
                <strong>${data.noMatchPercent}%</strong>
              </div>
              <div class="dream-catcher__bar dream-catcher__bar--nomatch">
                <div
                  class="dream-catcher__bar-fill"
                  style="width:${Math.max(data.noMatchPercent, 4)}%;"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </section>
    `;
  }
  
  module.exports = { renderDreamCatcherExtraStatsSection };