function renderMegaBallReviewPanel(t) {
  const tr = t.megaballReview || {};
  const faq = Array.isArray(tr.faq) ? tr.faq : [];
  const bullets = Array.isArray(tr.howToPlayBullets) ? tr.howToPlayBullets : [];

  const payoutRows = [
    { lines: "1",  prize: "1:1",       note: tr.payout1Line || "" },
    { lines: "2",  prize: "5:1",       note: tr.payout2Lines || "" },
    { lines: "3",  prize: "50:1",      note: tr.payout3Lines || "" },
    { lines: "4",  prize: "500:1",     note: tr.payout4Lines || "" },
    { lines: "5",  prize: "10,000:1",  note: tr.payout5Lines || "" },
    { lines: "6+", prize: "1,000,000x",note: tr.payout6Lines || "" }
  ];

  const compRows = [
    { area: tr.compAreaBase,     val: tr.compMegaBallBase,     why: tr.compMeaningBase },
    { area: tr.compAreaBonus,    val: tr.compMegaBallBonus,    why: tr.compMeaningBonus },
    { area: tr.compAreaTracking, val: tr.compMegaBallTracking, why: tr.compMeaningTracking },
    { area: tr.compAreaMaxWin,   val: tr.compMegaBallMaxWin,   why: tr.compMeaningMaxWin }
  ];

  const trackItems = [
    { label: tr.trackBallHistory,  text: tr.trackBallHistoryText },
    { label: tr.trackMultiplier,   text: tr.trackMultiplierText },
    { label: tr.trackWinners,      text: tr.trackWinnersText },
    { label: tr.trackPayouts,      text: tr.trackPayoutsText },
    { label: tr.trackLive,         text: tr.trackLiveText }
  ];

  const ctaBtn = (label, extraClass = "") => `
    <a
      href="/go/reg/"
      class="hero-play-btn${extraClass ? " " + extraClass : ""}"
      target="_blank"
      rel="noopener noreferrer nofollow"
    >${label || "Play Mega Ball"}</a>
  `;

  return `
    <div class="tab-panel" data-tab-panel="review" data-tab-panel-group="game-tabs">
      <section class="megaball-review-section">
        <div class="megaball-review-card">

          <!-- HERO -->
          <div class="megaball-review-hero">
          <div class="megaball-review-hero-bg"></div>
          <div class="megaball-review-hero-content">
            <h2 class="megaball-review-title">${tr.title || "Mega Ball Tracker, RTP & Game Review"}</h2>
            <p class="megaball-review-intro">${tr.intro || ""}</p>
            ${ctaBtn(t.cta?.playNow || "Play Mega Ball Live", "megaball-cta-top")}
          </div>
        </div>

          <!-- QUICK OVERVIEW TABLE -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.quickOverviewTitle || "Quick Game Overview"}</h3>
            <div class="megaball-review-specs">
              <div class="megaball-review-specs-head">
                <div>${tr.tableParameter || "Parameter"}</div>
                <div>${tr.tableDetails || "Details"}</div>
              </div>
              ${[
                [tr.specProvider     || "Provider",     tr.specProviderValue     || "Evolution Gaming"],
                [tr.specGameName     || "Game Name",    tr.specGameNameValue     || "Mega Ball"],
                [tr.specReleaseYear  || "Release Year", tr.specReleaseYearValue  || "2023"],
                [tr.specGameType     || "Game Type",    tr.specGameTypeValue     || "Live Bingo Game Show"],
                [tr.specRtp          || "RTP",          tr.specRtpValue          || "95.30%"],
                [tr.specMinBet       || "Bet Range",    tr.specMinBetValue       || "Varies by casino"],
                [tr.specMaxWin       || "Max Win",      tr.specMaxWinValue       || "Up to 1,000,000x"],
                [tr.specBalls        || "Balls Drawn",  tr.specBallsValue        || "20 balls + Mega Ball + possible 2nd Mega Ball"]
              ].map(([label, value]) => `
                <div class="megaball-review-specs-row">
                  <div class="megaball-review-spec-label">${label}</div>
                  <div class="megaball-review-spec-value">${value}</div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- WHAT IS MEGA BALL -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.aboutTitle || "What is Mega Ball?"}</h3>
            <p class="megaball-review-text">${tr.aboutText1 || ""}</p>
            <p class="megaball-review-text">${tr.aboutText2 || ""}</p>
          </div>

          <!-- HOW TO PLAY MEGA BALL -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.howToPlayTitle || "How to Play Mega Ball"}</h3>
            <p class="megaball-review-text">${tr.howToPlayText1 || ""}</p>
            <p class="megaball-review-text">${tr.howToPlayText2 || ""}</p>
            ${bullets.length ? `
            <ul class="megaball-review-steps-list">
              ${bullets.map((item, i) => `
                <li class="megaball-review-steps-item">
                  <span class="megaball-steps-num">${i + 1}</span>
                  <span>${item}</span>
                </li>
              `).join("")}
            </ul>
          ` : ""}
          
          </div>

          <!-- MEGA BALL PAYOUT TABLE -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.payoutTitle || "Mega Ball Payout"}</h3>
            <p class="megaball-review-text">${tr.payoutIntro || ""}</p>
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.payoutColLines || "Completed Lines"}</th>
                    <th class="t-left">${tr.payoutColPrize || "Payout"}</th>
                    <th class="t-left">${tr.payoutColNote  || "How It Works"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${payoutRows.map((row) => `
                    <tr>
                      <td class="t-left"><strong>${row.lines}</strong></td>
                      <td class="t-left"><span class="monopoly-multiplier-pill">${row.prize}</span></td>
                      <td class="t-left">${row.note}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <!-- WHAT YOU CAN TRACK -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.trackerTitle || "What You Can Track"}</h3>
            <p class="megaball-review-text">${tr.trackerIntro || ""}</p>
            <div class="crazytime-review-bonus-grid">
              ${trackItems.filter((i) => i.label).map((item) => `
                <article class="crazytime-review-bonus-card">
                  <h4 class="crazytime-review-bonus-title">${item.label}</h4>
                  <p class="megaball-review-text">${item.text || ""}</p>
                </article>
              `).join("")}
            </div>
          </div>

          <!-- MEGA BALL AT A GLANCE (COMPARISON) -->
          <div class="megaball-review-block">
            <h3 class="megaball-review-subtitle">${tr.comparisonTitle || "Mega Ball at a Glance"}</h3>
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.compColArea     || "Area"}</th>
                    <th class="t-left">${tr.compColMegaBall || "Mega Ball"}</th>
                    <th class="t-left">${tr.compColMeaning  || "Why It Matters"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${compRows.filter((r) => r.area).map((row) => `
                    <tr>
                      <td class="t-left"><strong>${row.area}</strong></td>
                      <td class="t-left">${row.val}</td>
                      <td class="t-left">${row.why}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>

          <!-- CTA MID -->
          <div class="megaball-review-block megaball-review-cta-block">
            ${ctaBtn(t.cta?.playNow || "Play Mega Ball Online")}
          </div>

          <!-- FAQ -->
          <div class="megaball-review-block">
            <h2 class="megaball-review-subtitle">${tr.faqTitle || "Frequently Asked Questions"}</h2>
            <div class="crazytime-review-faq-list">
              ${faq.map((item) => `
                <div class="crazytime-review-faq-item">
                  <p class="crazytime-review-faq-question">${item.q || ""}</p>
                  <p class="crazytime-review-faq-answer">${item.a || ""}</p>
                </div>
              `).join("")}
            </div>
          </div>

        </div>
      </section>
    </div>
  `;
}

module.exports = { renderMegaBallReviewPanel };
