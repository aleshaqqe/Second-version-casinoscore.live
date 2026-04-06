function renderCrazyTimeReviewPanel(t) {
    const tr = t.crazytimeReview || {};
  
    return `
      <div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">
        <div class="crazytime-review-section">
          <div class="crazytime-review-card">
            <div class="crazytime-review-block">
              <h2 class="crazytime-review-title">${tr.whatIsTitle || "What Is Crazy Time?"}</h2>
              <p class="crazytime-review-intro">${tr.whatIsText || ""}</p>
            </div>
  
            <div class="crazytime-review-block">
              <div class="crazytime-review-specs">
                <div class="crazytime-review-specs-head">
                  <div>${tr.tableParameter || "Parameter"}</div>
                  <div>${tr.tableDetails || "Details"}</div>
                </div>
  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.gameName || "Game Name"}</div>
                  <div class="crazytime-review-spec-value">Crazy Time</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.provider || "Provider"}</div>
                  <div class="crazytime-review-spec-value">Evolution Gaming</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.rtp || "RTP"}</div>
                  <div class="crazytime-review-spec-value">96.08%</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.releaseYear || "Release Year"}</div>
                  <div class="crazytime-review-spec-value">2020</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.gameType || "Game Type"}</div>
                  <div class="crazytime-review-spec-value">${tr.gameTypeValue || "Live Game Show"}</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.minBet || "Min Bet"}</div>
                  <div class="crazytime-review-spec-value">$0.10</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.maxBet || "Max Bet"}</div>
                  <div class="crazytime-review-spec-value">$5,000</div>
                </div>
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.volatility || "Volatility"}</div>
                  <div class="crazytime-review-spec-value">${tr.volatilityValue || "High"}</div>
                </div>
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.howToPlayTitle || "How to Play Crazy Time"}</h3>
              <p class="crazytime-review-text">${tr.howToPlayText || ""}</p>
              <ol class="crazytime-review-steps">
                <li>${tr.step1 || ""}</li>
                <li>${tr.step2 || ""}</li>
                <li>${tr.step3 || ""}</li>
                <li>${tr.step4 || ""}</li>
              </ol>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.wheelBreakdownTitle || "Wheel Segments Breakdown"}</h3>
              <div class="crazytime-review-wheel-table">
                <div class="crazytime-review-wheel-head">
                  <div>${tr.wheelSegment || "Segment"}</div>
                  <div>${tr.wheelOccurrences || "Occurrences on Wheel"}</div>
                  <div>${tr.wheelMultiplier || "Multiplier"}</div>
                </div>
  
                <div class="crazytime-review-wheel-row"><div>1</div><div>21</div><div>1x</div></div>
                <div class="crazytime-review-wheel-row"><div>2</div><div>13</div><div>2x</div></div>
                <div class="crazytime-review-wheel-row"><div>5</div><div>7</div><div>5x</div></div>
                <div class="crazytime-review-wheel-row"><div>10</div><div>4</div><div>10x</div></div>
                <div class="crazytime-review-wheel-row"><div>Coin Flip</div><div>4</div><div>${tr.upTo2000x || "Up to 2000x"}</div></div>
                <div class="crazytime-review-wheel-row"><div>Cash Hunt</div><div>2</div><div>${tr.upTo10000x || "Up to 10,000x"}</div></div>
                <div class="crazytime-review-wheel-row"><div>Pachinko</div><div>2</div><div>${tr.upTo10000x || "Up to 10,000x"}</div></div>
                <div class="crazytime-review-wheel-row"><div>Crazy Time</div><div>1</div><div>${tr.upTo20000x || "Up to 20,000x"}</div></div>
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.bonusRoundsTitle || "Bonus Rounds"}</h3>
              <div class="crazytime-review-bonus-grid">
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">${tr.cashHuntTitle || "Cash Hunt"}</h4>
                  <p class="crazytime-review-text">${tr.cashHuntText || ""}</p>
                </article>
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">${tr.coinFlipTitle || "Coin Flip"}</h4>
                  <p class="crazytime-review-text">${tr.coinFlipText || ""}</p>
                </article>
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">${tr.pachinkoTitle || "Pachinko"}</h4>
                  <p class="crazytime-review-text">${tr.pachinkoText || ""}</p>
                </article>
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">${tr.crazyTimeBonusTitle || "Crazy Time"}</h4>
                  <p class="crazytime-review-text">${tr.crazyTimeBonusText || ""}</p>
                </article>
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.rulesTitle || "Rules"}</h3>
              <ul class="crazytime-review-list">
                <li>${tr.rule1 || ""}</li>
                <li>${tr.rule2 || ""}</li>
                <li>${tr.rule3 || ""}</li>
                <li>${tr.rule4 || ""}</li>
              </ul>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.statsTitle || "Stats"}</h3>
              <p class="crazytime-review-text">${tr.statsText || ""}</p>
              <h4 class="crazytime-review-mini-title">${tr.typicalStatsTitle || "Typical Stats"}</h4>
              <ul class="crazytime-review-list">
                <li>${tr.stat1 || ""}</li>
                <li>${tr.stat2 || ""}</li>
                <li>${tr.stat3 || ""}</li>
                <li>${tr.stat4 || ""}</li>
              </ul>
              <div class="crazytime-review-tip">
                <strong>${tr.tip || "Tip:"}</strong> ${tr.tipText || ""}
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.whyPlayTitle || "Why Play"}</h3>
              <div class="crazytime-review-proscons-grid">
                <div class="crazytime-review-proscons-card pros">
                  <h4 class="crazytime-review-bonus-title">${tr.prosTitle || "Pros"}</h4>
                  <ul class="crazytime-review-proscons-list pros">
                    <li>${tr.pro1 || ""}</li>
                    <li>${tr.pro2 || ""}</li>
                    <li>${tr.pro3 || ""}</li>
                    <li>${tr.pro4 || ""}</li>
                    <li>${tr.pro5 || ""}</li>
                  </ul>
                </div>
                <div class="crazytime-review-proscons-card cons">
                  <h4 class="crazytime-review-bonus-title">${tr.consTitle || "Cons"}</h4>
                  <ul class="crazytime-review-proscons-list cons">
                    <li>${tr.con1 || ""}</li>
                    <li>${tr.con2 || ""}</li>
                    <li>${tr.con3 || ""}</li>
                  </ul>
                </div>
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">${tr.faqTitle || "FAQ"}</h3>
              <div class="crazytime-review-faq-list">
                ${(tr.faq || []).map((item) => `
                  <div class="crazytime-review-faq-item">
                    <h4 class="crazytime-review-faq-question">${item.q}</h4>
                    <p class="crazytime-review-faq-answer">${item.a}</p>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  
  module.exports = { renderCrazyTimeReviewPanel };