function renderLightningRouletteReviewPanel(t) {
    const tr = t.lightningrouletteReview || {};
    const faq = Array.isArray(tr.faq) ? tr.faq : [];
    const bullets = Array.isArray(tr.howToPlayBullets) ? tr.howToPlayBullets : [];
  
    const payoutRows = [
      {
        bet: tr.payoutBetStraightLucky || "Straight Up (Lucky Number)",
        payout: tr.payoutValStraightLucky || "50x–500x",
        note: tr.payoutNoteStraightLucky || "Applied when a straight-up bet lands on a Lucky Number with an assigned multiplier."
      },
      {
        bet: tr.payoutBetStraight || "Straight Up (standard)",
        payout: tr.payoutValStraight || "29:1",
        note: tr.payoutNoteStraight || "Standard straight-up win without a Lightning multiplier."
      },
      {
        bet: tr.payoutBetSplit || "Split",
        payout: tr.payoutValSplit || "17:1",
        note: tr.payoutNoteSplit || "Bet on 2 adjacent numbers."
      },
      {
        bet: tr.payoutBetStreet || "Street",
        payout: tr.payoutValStreet || "11:1",
        note: tr.payoutNoteStreet || "Bet on 3 numbers in a row."
      },
      {
        bet: tr.payoutBetCorner || "Corner",
        payout: tr.payoutValCorner || "8:1",
        note: tr.payoutNoteCorner || "Bet on 4 numbers."
      },
      {
        bet: tr.payoutBetDozen || "Dozen / Column",
        payout: tr.payoutValDozen || "2:1",
        note: tr.payoutNoteDozen || "Covers 12 numbers."
      },
      {
        bet: tr.payoutBetEven || "Red/Black, Odd/Even, High/Low",
        payout: tr.payoutValEven || "1:1",
        note: tr.payoutNoteEven || "Standard outside bets."
      }
    ];
  
    const overviewRows = [
      [tr.specProvider || "Provider", tr.specProviderValue || "Evolution Gaming"],
      [tr.specGameName || "Game Name", tr.specGameNameValue || "Lightning Roulette"],
      [tr.specReleaseYear || "Release Year", tr.specReleaseYearValue || "2018"],
      [tr.specGameType || "Game Type", tr.specGameTypeValue || "Live Dealer Roulette"],
      [tr.specWheel || "Wheel Format", tr.specWheelValue || "European Roulette (single zero)"],
      [tr.specRtp || "RTP", tr.specRtpValue || "97.30% on standard bets; 97.10% on straight-up bets"],
      [tr.specMinBet || "Minimum Bet", tr.specMinBetValue || "$0.20"],
      [tr.specMaxBet || "Maximum Bet", tr.specMaxBetValue || "$10,000"],
      [tr.specMaxWin || "Max Multiplier", tr.specMaxWinValue || "500x"],
      [tr.specLuckyNumbers || "Lucky Numbers", tr.specLuckyNumbersValue || "1 to 5 per round"],
      [tr.specVolatility || "Volatility", tr.specVolatilityValue || "Medium to high"],
      [tr.specMobile || "Mobile Play", tr.specMobileValue || "Supported"]
    ];
  
    const trackItems = [
      {
        label: tr.trackLuckyNumbers || "Lucky Number History",
        text: tr.trackLuckyNumbersText || "Track which numbers received multipliers and how often they appear in recent rounds."
      },
      {
        label: tr.trackMultipliers || "Multiplier Distribution",
        text: tr.trackMultipliersText || "See how often 50x, 100x, 150x, 200x, 300x, 400x and 500x multipliers appear."
      },
      {
        label: tr.trackSpinResults || "Spin Results",
        text: tr.trackSpinResultsText || "Review recent results, including winning number, lightning numbers and hit multipliers."
      },
      {
        label: tr.trackRtp || "RTP Snapshot",
        text: tr.trackRtpText || "Compare observed outcomes with the expected return profile of the game."
      },
      {
        label: tr.trackPatterns || "Result Patterns",
        text: tr.trackPatternsText || "Use recent history and distribution data to follow short-term streaks and number frequency."
      }
    ];
  
    const compRows = [
      {
        area: tr.compAreaBase || "Base Format",
        val: tr.compValueBase || "European roulette with a live dealer",
        why: tr.compWhyBase || "The core rules stay familiar for players who already know standard roulette."
      },
      {
        area: tr.compAreaMultipliers || "Lightning Multipliers",
        val: tr.compValueMultipliers || "1–5 Lucky Numbers, 50x to 500x",
        why: tr.compWhyMultipliers || "Adds higher upside to straight-up bets without changing outside bet payouts."
      },
      {
        area: tr.compAreaRtp || "RTP Profile",
        val: tr.compValueRtp || "97.30% standard / 97.10% straight-up",
        why: tr.compWhyRtp || "Useful for understanding how multiplier funding affects different bet types."
      },
      {
        area: tr.compAreaVariance || "Volatility",
        val: tr.compValueVariance || "Higher than classic roulette on inside bets",
        why: tr.compWhyVariance || "Multiplier-based payouts create wider short-term swings."
      },
      {
        area: tr.compAreaUse || "Best Use Case",
        val: tr.compValueUse || "Players who want roulette with extra variance",
        why: tr.compWhyUse || "Keeps the standard roulette structure while adding occasional boosted payouts."
      }
    ];
  
    const ctaBtn = (label, extraClass = "") => `
      <a
        href="/go/reg/"
        class="hero-play-btn lr-review-cta${extraClass ? " " + extraClass : ""}"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >${label || "Play Lightning Roulette"}</a>
    `;
  
    return `
      <section class="lr-review-section">
        <div class="lr-review-card">
  
          <div class="lr-review-hero">
            <div class="lr-review-hero-bg"></div>
            <div class="lr-review-hero-content">
              <h2 class="lr-review-title">${tr.title || "Lightning Roulette Review, RTP & Live Statistics"}</h2>
              <p class="lr-review-intro">${tr.intro || "Lightning Roulette is a live dealer roulette variant based on the European wheel. The game follows standard roulette rules, but each round can assign random multipliers to selected Lucky Numbers, creating a higher-variance version of traditional live roulette."}</p>
              ${ctaBtn(t.cta?.playNow || "Play Lightning Roulette Live", "lr-review-cta--top")}
            </div>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.quickOverviewTitle || "Quick Game Overview"}</h3>
            <div class="lr-review-specs">
              <div class="lr-review-specs-head">
                <div>${tr.tableParameter || "Parameter"}</div>
                <div>${tr.tableDetails || "Details"}</div>
              </div>
              ${overviewRows.map(([label, value]) => `
                <div class="lr-review-specs-row">
                  <div class="lr-review-spec-label">${label}</div>
                  <div class="lr-review-spec-value">${value}</div>
                </div>
              `).join("")}
            </div>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.aboutTitle || "What is Lightning Roulette?"}</h3>
            <p class="lr-review-text">${tr.aboutText1 || "Lightning Roulette is a live roulette game that keeps the European single-zero wheel and standard betting layout, while adding random multiplier events before each spin. This format is often described as lightning roulette live or lightning roulette online because the game combines a real studio dealer with a multiplier mechanic generated before the ball lands."}</p>
            <p class="lr-review-text">${tr.aboutText2 || "In practical terms, the difference from classic roulette is simple: one to five numbers become Lucky Numbers each round, and if a straight-up bet lands on one of them, the payout uses the assigned multiplier instead of the regular straight-up payout. That is the core idea behind most lightning roulette review pages and statistics trackers."}</p>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.howToPlayTitle || "How to Play Lightning Roulette"}</h3>
            <p class="lr-review-text">${tr.howToPlayText1 || "How to play Lightning Roulette is straightforward for anyone familiar with roulette. Players place bets during the betting phase, then the game reveals Lucky Numbers and their multipliers before the live spin begins."}</p>
            <p class="lr-review-text">${tr.howToPlayText2 || "Lightning roulette rules are based on European roulette, so outside bets, dozens, columns and inside bets all work as expected. The extra mechanic affects only straight-up bets that land on selected Lucky Numbers."}</p>
  
            ${bullets.length ? `
              <ul class="lr-review-steps-list">
                ${bullets.map((item, i) => `
                  <li class="lr-review-steps-item">
                    <span class="lr-review-step-num">${i + 1}</span>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>
            ` : `
              <ul class="lr-review-steps-list">
                ${[
                  "Choose chip values and place bets on the roulette layout.",
                  "Wait for the game to assign 1 to 5 Lucky Numbers with random multipliers.",
                  "Watch the dealer spin the wheel and release the ball.",
                  "If your straight-up bet hits a Lucky Number, the round uses the Lightning multiplier payout.",
                  "All non-multiplied bets settle according to standard European roulette rules."
                ].map((item, i) => `
                  <li class="lr-review-steps-item">
                    <span class="lr-review-step-num">${i + 1}</span>
                    <span>${item}</span>
                  </li>
                `).join("")}
              </ul>
            `}
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.payoutTitle || "Lightning Roulette Payouts"}</h3>
            <p class="lr-review-text">${tr.payoutIntro || "Lightning roulette payouts follow standard roulette for most bets, while the main difference appears on straight-up numbers. When a selected Lucky Number wins, the assigned multiplier replaces the regular straight-up payout and can reach up to 500x."}</p>
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.payoutColBet || "Bet Type"}</th>
                    <th class="t-left">${tr.payoutColPayout || "Payout"}</th>
                    <th class="t-left">${tr.payoutColNote || "How It Works"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${payoutRows.map((row) => `
                    <tr>
                      <td class="t-left"><strong>${row.bet}</strong></td>
                      <td class="t-left"><span class="lr-review-pill">${row.payout}</span></td>
                      <td class="t-left">${row.note}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.rtpTitle || "Lightning Roulette RTP and Volatility"}</h3>
            <p class="lr-review-text">${tr.rtpText1 || "Lightning roulette RTP depends on the type of bet. Standard bets such as red/black or dozens keep an RTP of about 97.30%, while straight-up bets sit around 97.10% because the game reallocates part of the payout structure to fund the multiplier feature."}</p>
            <p class="lr-review-text">${tr.rtpText2 || "In terms of variance, the game is more volatile than classic roulette when the focus is on inside numbers. Lightning roulette multipliers create less frequent but larger payout moments, which is why many players describe the game as medium-to-high volatility rather than a standard roulette profile."}</p>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.strategyTitle || "Lightning Roulette Strategy Notes"}</h3>
            <p class="lr-review-text">${tr.strategyText1 || "A lightning roulette strategy does not change the house edge, but it can change the risk profile of a session. Players who prefer lower variance usually stay closer to outside bets, while those who want exposure to multipliers focus more on straight-up coverage."}</p>
            <p class="lr-review-text">${tr.strategyText2 || "From a statistics perspective, the game is best approached as European roulette with an additional multiplier layer. That makes it useful to track Lucky Number frequency, multiplier distribution and payout swings over a larger sample rather than judge the game by a short streak."}</p>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.trackerTitle || "What You Can Track"}</h3>
            <p class="lr-review-text">${tr.trackerIntro || "This section of the site is built for players who want to review lightning roulette online through recent results, multipliers and summary metrics rather than rely on short-term impressions."}</p>
            <div class="lr-review-grid">
              ${trackItems.map((item) => `
                <article class="lr-review-mini-card">
                  <h4 class="lr-review-mini-title">${item.label}</h4>
                  <p class="lr-review-text">${item.text}</p>
                </article>
              `).join("")}
            </div>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.comparisonTitle || "Lightning Roulette at a Glance"}</h3>
            <div class="table-wrap">
              <table class="spin-table">
                <thead>
                  <tr>
                    <th class="t-left">${tr.compColArea || "Area"}</th>
                    <th class="t-left">${tr.compColValue || "Lightning Roulette"}</th>
                    <th class="t-left">${tr.compColMeaning || "Why It Matters"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${compRows.map((row) => `
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
  
          <div class="lr-review-block lr-review-cta-block">
            ${ctaBtn(t.cta?.playNow || "Play Lightning Roulette Online")}
          </div>
  
          <div class="lr-review-block">
            <h2 class="lr-review-subtitle">${tr.faqTitle || "Frequently Asked Questions"}</h2>
            <div class="lr-review-faq-list">
              ${(faq.length ? faq : [
                {
                  q: "What is Lightning Roulette?",
                  a: "Lightning Roulette is a live dealer version of European roulette with random multipliers on selected Lucky Numbers."
                },
                {
                  q: "How do Lightning Roulette multipliers work?",
                  a: "Before each spin, the game selects 1 to 5 Lucky Numbers and assigns multipliers from 50x to 500x. If a straight-up bet lands on one of those numbers, the multiplier payout applies."
                },
                {
                  q: "What is the Lightning Roulette RTP?",
                  a: "The typical RTP is around 97.30% for standard bets and about 97.10% for straight-up bets."
                },
                {
                  q: "Are Lightning Roulette payouts different from standard roulette?",
                  a: "Most bet types use standard European roulette payouts. The main difference is the multiplier-based payout on selected straight-up numbers."
                },
                {
                  q: "Is Lightning Roulette more volatile than classic roulette?",
                  a: "Yes. The multiplier system creates wider short-term variance, especially for players focusing on inside bets."
                }
              ]).map((item) => `
                <div class="lr-review-faq-item">
                  <p class="lr-review-faq-question">${item.q || ""}</p>
                  <p class="lr-review-faq-answer">${item.a || ""}</p>
                </div>
              `).join("")}
            </div>
          </div>
  
          <div class="lr-review-block">
            <h3 class="lr-review-subtitle">${tr.conclusionTitle || "General Impression"}</h3>
            <p class="lr-review-text">${tr.conclusionText || "As a neutral lightning roulette review, the game can be described as standard European roulette with an added multiplier layer that increases variance without changing the core format. For players interested in lightning roulette live statistics, it is a useful game to track because multiplier frequency, Lucky Number selection and payout patterns can all be measured over time."}</p>
          </div>
  
        </div>
      </section>
    `;
  }
  
  module.exports = { renderLightningRouletteReviewPanel };