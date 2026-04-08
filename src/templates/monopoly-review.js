function renderMonopolyReviewPanel(t) {
    const tr = t.monopolyReview || {};
  
    return `
      <div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">
        <div class="crazytime-review-section">
          <div class="crazytime-review-card">
            <div class="crazytime-review-block">
              <h2 class="crazytime-review-title">
                ${tr.title || "Monopoly Live Review: The Ultimate Live Casino Game Show Experience"}
              </h2>
  
              <p class="crazytime-review-intro">
                ${tr.intro || ""}
              </p>
  
              <a
                href="/go/reg/"
                class="hero-play-btn monopoly-live-btn"
                target="_blank"
                rel="noreferrer noopener nofollow"
                
              >
                ${tr.playbtn || "Play"}
              </a>
            </div>
  
            <div class="crazytime-review-block">
              <div class="crazytime-review-specs">
                <div class="crazytime-review-specs-head">
                  <div>${tr.tableFeature || "Feature"}</div>
                  <div>${tr.tableDetails || "Details"}</div>
                </div>

  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.gameNameLabel || "Game Name"}</div>
                  <div class="crazytime-review-spec-value">Monopoly Live</div>
                </div>
  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.providerLabel || "Provider"}</div>
                  <div class="crazytime-review-spec-value">Evolution Gaming</div>
                </div>
  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.gameTypeLabel || "Game Type"}</div>
                  <div class="crazytime-review-spec-value">
                    ${tr.gameTypeValue || "Live Casino Game Show"}
                  </div>
                </div>
  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.rtpLabel || "RTP"}</div>
                  <div class="crazytime-review-spec-value">
                    ${tr.rtpValue || "Up to 96.23%"}
                  </div>
                </div>
  
                <div class="crazytime-review-specs-row">
                  <div class="crazytime-review-spec-label">${tr.maxWinLabel || "Max Win"}</div>
                  <div class="crazytime-review-spec-value">
                    ${tr.maxWinValue || "$500,000 (or multiplier equivalent)"}
                  </div>
                </div>
              </div>
            </div>
            <div class="crazytime-review-block">
            <div class="crazytime-review-hero-media monopoly-review-hero-media">
              <img
                src="/img/monopoly-review/monopoly-live-review.webp"
                alt="${tr.heroAlt || "Monopoly Live wheel with live host and game show studio"}"
                class="crazytime-review-hero-image"
                loading="lazy"
                decoding="async"
                width="894"
                height="449"
              />
            </div>
          </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">
                ${tr.sectionsTitle || "Key Monopoly Live Features"}
              </h3>
  
              <div class="crazytime-review-bonus-grid">
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">
                    ${tr.wheelTitle || "The Money Wheel (Base Game)"}
                  </h4>
                  <p class="crazytime-review-text">
                    ${tr.wheelText || ""}
                  </p>
                </article>
  
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">
                    ${tr.chanceTitle || "The 'Chance' Segment"}
                  </h4>
                  <p class="crazytime-review-text">
                    ${tr.chanceText || ""}
                  </p>
                </article>
  
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">
                    ${tr.bonus3dTitle || "The 3D Bonus Round"}
                  </h4>
                  <p class="crazytime-review-text">
                    ${tr.bonus3dText || ""}
                  </p>
                </article>
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">
                ${tr.howToPlayTitle || "How to Play Monopoly Live"}
              </h3>
  
              <p class="crazytime-review-text">
                ${tr.howToPlayIntro || ""}
              </p>
  
              <ul class="crazytime-review-list">
                <li>${tr.step1 || ""}</li>
                <li>${tr.step2 || ""}</li>
                <li>${tr.step3 || ""}</li>
              </ul>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">
                ${tr.statsTitle || "Monopoly Live Stats, Results & Trackers"}
              </h3>
  
              <p class="crazytime-review-text">${tr.statsText1 || ""}</p>
              <p class="crazytime-review-text">${tr.statsText2 || ""}</p>
  
              <div class="crazytime-review-tip">
                ${tr.statsNote || ""}
              </div>
            </div>
  
            <div class="crazytime-review-block">
              <h3 class="crazytime-review-subtitle">
                ${tr.freePlayTitle || "Can You Play for Free?"}
              </h3>
  
              <p class="crazytime-review-text">
                ${tr.freePlayText || ""}
              </p>
            </div>
  
            <div class="crazytime-review-block">
              <h2 class="crazytime-review-subtitle">
                ${tr.faqTitle || "Frequently Asked Questions (FAQ)"}
              </h2>
  
              <div class="crazytime-review-faq-list">
                ${(tr.faq || []).map((item) => `
                  <div class="crazytime-review-faq-item">
                    <p class="crazytime-review-faq-question">${item.q}</p>
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
  
  module.exports = { renderMonopolyReviewPanel };