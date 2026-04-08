function renderDreamCatcherReviewPanel(t) {
    const tr = t.dreamcatcherReview || {};
  
    const wheelRows = [
      { number: "1", segments: "23", payout: "1:1", probability: "42.6%" },
      { number: "2", segments: "15", payout: "2:1", probability: "27.8%" },
      { number: "5", segments: "7", payout: "5:1", probability: "13.0%" },
      { number: "10", segments: "4", payout: "10:1", probability: "7.4%" },
      { number: "20", segments: "2", payout: "20:1", probability: "3.7%" },
      { number: "40", segments: "1", payout: "40:1", probability: "1.9%" },
      { number: tr.multiplier2xLabel || "2x Multiplier", segments: "1", payout: "–", probability: "1.9%" },
      { number: tr.multiplier7xLabel || "7x Multiplier", segments: "1", payout: "–", probability: "1.9%" }
    ];
  
    const rtpRows = [
      { bet: "1", rtp: "96.58%" },
      { bet: "2", rtp: "96.58%" },
      { bet: "5", rtp: "95.78%" },
      { bet: "10", rtp: "95.73%" },
      { bet: "20", rtp: "95.19%" },
      { bet: "40", rtp: "89.88%" }
    ];
  
    return `
      <div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">
        <div class="dreamcatcher-review-section">
          <div class="dreamcatcher-review-card">
  
            <!-- HERO -->
            <div class="dreamcatcher-review-hero">
              <div class="dreamcatcher-review-hero-content">
                <h2 class="dreamcatcher-review-title">
                🎡 ${tr.title || "Dream Catcher Live: Real-Time Stats, Results & Complete Game Guide"}
                </h2>
  
                <p class="dreamcatcher-review-intro">
                  ${tr.intro || ""}
                </p>
  
                <div class="dreamcatcher-review-hero-actions">
                  <a
                    href="/go/reg/"
                    class="hero-play-btn dreamcatcher-review-play-btn"
                    target="_blank"
                    rel="noreferrer noopener nofollow"
                  >
                    ${tr.playbtn || (t.cta?.playNow || "Play")}
                  </a>
                </div>
              </div>
  
              <div class="dreamcatcher-review-hero-aside">
                <div class="dreamcatcher-review-hero-media">
                  <img
                    src="/img/dream-catcher-logo.webp"
                    alt="${tr.heroAlt || "Dream Catcher live money wheel game logo"}"
                    class="dreamcatcher-review-hero-image"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
  
            
              </div>
            </div>
  
            <!-- QUICK OVERVIEW TABLE -->
            <div class="dreamcatcher-review-block">
              <h3 class="dreamcatcher-review-subtitle">
              📌 ${tr.quickOverviewTitle || "Quick Game Overview"}
              </h3>
  
              <div class="dreamcatcher-review-specs">
                <div class="dreamcatcher-review-specs-head">
                  <div>${tr.specFeature || "Specification"}</div>
                  <div>${tr.specDetails || "Details"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specProvider || "Game Provider"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specProviderValue || "Evolution Gaming"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specYear || "Release Year"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specYearValue || "2017"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specType || "Game Type"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specTypeValue || "Live Money Wheel"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specRtp || "RTP"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specRtpValue || "96.58% (optimal)"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specBetRange || "Bet Range"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specBetRangeValue || "€0.10 – €1,000"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specMaxWin || "Max Win"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specMaxWinValue || "20,000x stake"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specSegments || "Total Segments"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specSegmentsValue || "54"}</div>
                </div>
  
                <div class="dreamcatcher-review-specs-row">
                  <div class="dreamcatcher-review-spec-label">${tr.specLocation || "Streaming Location"}</div>
                  <div class="dreamcatcher-review-spec-value">${tr.specLocationValue || "Riga, Latvia"}</div>
                </div>
              </div>
            </div>
  
            <div class="dreamcatcher-review-block">
              <h3 class="dreamcatcher-review-subtitle">  🎥 ${tr.howWorksTitle || "How Dream Catcher Works"}              </h3>
              <p class="dreamcatcher-review-text">${tr.howWorksText || ""}</p>
            </div>
  
            <div class="dreamcatcher-review-block">
              <h3 class="dreamcatcher-review-subtitle">  🧩 ${tr.wheelDistributionTitle || "Wheel Segment Distribution"}              </h3>
  
              <div class="table-wrap">
                <table class="spin-table">
                  <thead>
                    <tr>
                      <th class="t-left">${tr.wheelColNumber || "Number"}</th>
                      <th class="t-left">${tr.wheelColSegments || "Segments"}</th>
                      <th class="t-left">${tr.wheelColPayout || "Payout"}</th>
                      <th class="t-left">${tr.wheelColProbability || "Probability"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${wheelRows.map((row) => `
                      <tr>
                        <td class="t-left">${row.number}</td>
                        <td class="t-left">${row.segments}</td>
                        <td class="t-left">${row.payout}</td>
                        <td class="t-left"><strong>${row.probability}</strong></td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
  
              <p class="dreamcatcher-review-text" style="margin-top:12px;">
                ${tr.wheelDistributionNote || ""}
              </p>
            </div>
  
            <div class="dreamcatcher-review-block">
              <h3 class="dreamcatcher-review-subtitle">  ✨ ${tr.multiplierTitle || "Multiplier Mechanics"}
              </h3>
              <p class="dreamcatcher-review-text">${tr.multiplierIntro || ""}</p>
  
              <ul class="dreamcatcher-review-list">
                ${(tr.multiplierBullets || []).map((x) => `<li>${x}</li>`).join("")}
              </ul>
  
              <p class="dreamcatcher-review-text" style="margin-top:12px;">
                ${tr.multiplierNote || ""}
              </p>
            </div>
  
            <div class="dreamcatcher-review-block">
            <h3 class="dreamcatcher-review-subtitle">
            📊 ${tr.statsTrackingTitle || "Dream Catcher Live Stats & Results Tracking"}
          </h3>
                        <p class="dreamcatcher-review-text">${tr.statsTrackingIntro || ""}</p>
  
              <ul class="dreamcatcher-review-list">
                ${(tr.trackingBullets || []).map((x) => `<li>${x}</li>`).join("")}
              </ul>
  
              <p class="dreamcatcher-review-text" style="margin-top:12px;">
                ${tr.statsTrackingNote || ""}
              </p>
            </div>
  
            <div class="dreamcatcher-review-block">
            <h3 class="dreamcatcher-review-subtitle">
            🧠 ${tr.strategiesTitle || "Betting Strategies Worth Considering"}
          </h3>  
              <div class="dreamcatcher-review-bonus-grid">
                ${(tr.strategies || []).map((card) => `
                  <article class="dreamcatcher-review-bonus-card">
                    <h4 class="dreamcatcher-review-bonus-title">${card.title}</h4>
                    <p class="dreamcatcher-review-text">${card.text}</p>
                  </article>
                `).join("")}
              </div>
            </div>
  
            <div class="dreamcatcher-review-block">
            <h3 class="dreamcatcher-review-subtitle">
            🧮 ${tr.rtpBreakdownTitle || "RTP Breakdown by Bet Type"}
          </h3>
                        <p class="dreamcatcher-review-text">${tr.rtpBreakdownIntro || ""}</p>
  
              <div class="table-wrap">
                <table class="spin-table">
                  <thead>
                    <tr>
                      <th class="t-left">${tr.rtpColBet || "Bet"}</th>
                      <th class="t-left">${tr.rtpColRtp || "RTP"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rtpRows.map((row) => `
                      <tr>
                        <td class="t-left">${row.bet}</td>
                        <td class="t-left"><strong>${row.rtp}</strong></td>
                      </tr>
                    `).join("")}
                  </tbody>
                </table>
              </div>
  
              <p class="dreamcatcher-review-text" style="margin-top:12px;">
                ${tr.rtpBreakdownNote || ""}
              </p>
            </div>
  
            <div class="dreamcatcher-review-block">
            <h3 class="dreamcatcher-review-subtitle">
            ❤️ ${tr.whyLoveTitle || "Why Players Love Dream Catcher"}
          </h3>             <ul class="dreamcatcher-review-list">
          ${(tr.whyLoveBullets || []).map((text, idx) => {
            const icons = ["✅", "🎤", "✨", "💶", "📱"]; // 5 пунктов
            const icon = icons[idx] || "⭐";
            return `<li><span class="dreamcatcher-bullet-icon">${icon}</span>${text}</li>`;
          }).join("")}
        </ul>
            </div>
  
            <div class="dreamcatcher-review-block">
            <h2 class="dreamcatcher-review-subtitle">❓ ${tr.faqTitle || "Frequently Asked Questions"}</h2>
  
              <div class="dreamcatcher-review-faq-list">
                ${(tr.faq || []).map((item) => `
                  <div class="dreamcatcher-review-faq-item">
                    <p class="dreamcatcher-review-faq-question">${item.q}</p>
                    <p class="dreamcatcher-review-faq-answer">${item.a}</p>
                  </div>
                `).join("")}
              </div>
            </div>
  
          </div>
        </div>
      </div>
    `;
  }
  
  module.exports = { renderDreamCatcherReviewPanel };