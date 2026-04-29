const SUPPORTED_LANGS = ["en", "es", "it", "de", "nl", "fr", "pt", "ar"];
const DEFAULT_LANG = "en";

const UI_TRANSLATIONS = {
  en: {
    lightningrouletteReview: {
      title: "Lightning Roulette Review, RTP & Live Statistics",
      intro:
        "Lightning Roulette is a live dealer roulette variant based on the European wheel. The game follows standard roulette rules, but each round can assign random multipliers to selected Lucky Numbers, creating a higher-variance version of traditional live roulette.",
    
      quickOverviewTitle: "Quick Game Overview",
      tableParameter: "Parameter",
      tableDetails: "Details",
    
      specProvider: "Provider",
      specProviderValue: "Evolution Gaming",
      specGameName: "Game Name",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Release Year",
      specReleaseYearValue: "2018",
      specGameType: "Game Type",
      specGameTypeValue: "Live Dealer Roulette",
      specWheel: "Wheel Format",
      specWheelValue: "European Roulette (single zero)",
      specRtp: "RTP",
      specRtpValue: "97.30% on standard bets; 97.10% on straight-up bets",
      specMinBet: "Minimum Bet",
      specMinBetValue: "$0.20",
      specMaxBet: "Maximum Bet",
      specMaxBetValue: "$10,000",
      specMaxWin: "Max Multiplier",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Lucky Numbers",
      specLuckyNumbersValue: "1 to 5 per round",
      specVolatility: "Volatility",
      specVolatilityValue: "Medium to high",
      specMobile: "Mobile Play",
      specMobileValue: "Supported",
    
      aboutTitle: "What is Lightning Roulette?",
      aboutText1:
        "Lightning Roulette is a live roulette game that keeps the European single-zero wheel and standard betting layout, while adding random multiplier events before each spin. This format is often described as lightning roulette live or lightning roulette online because the game combines a real studio dealer with a multiplier mechanic generated before the ball lands.",
      aboutText2:
        "In practical terms, the difference from classic roulette is simple: one to five numbers become Lucky Numbers each round, and if a straight-up bet lands on one of them, the payout uses the assigned multiplier instead of the regular straight-up payout. That is the core idea behind most lightning roulette review pages and statistics trackers.",
    
      howToPlayTitle: "How to Play Lightning Roulette",
      howToPlayText1:
        "How to play Lightning Roulette is straightforward for anyone familiar with roulette. Players place bets during the betting phase, then the game reveals Lucky Numbers and their multipliers before the live spin begins.",
      howToPlayText2:
        "Lightning roulette rules are based on European roulette, so outside bets, dozens, columns and inside bets all work as expected. The extra mechanic affects only straight-up bets that land on selected Lucky Numbers.",
      howToPlayBullets: [
        "Choose chip values and place bets on the roulette layout.",
        "Wait for the game to assign 1 to 5 Lucky Numbers with random multipliers.",
        "Watch the dealer spin the wheel and release the ball.",
        "If your straight-up bet hits a Lucky Number, the round uses the Lightning multiplier payout.",
        "All non-multiplied bets settle according to standard European roulette rules."
      ],
    
      payoutTitle: "Lightning Roulette Payouts",
      payoutIntro:
        "Lightning roulette payouts follow standard roulette for most bets, while the main difference appears on straight-up numbers. When a selected Lucky Number wins, the assigned multiplier replaces the regular straight-up payout and can reach up to 500x.",
    
      payoutColBet: "Bet Type",
      payoutColPayout: "Payout",
      payoutColNote: "How It Works",
    
      payoutBetStraightLucky: "Straight Up (Lucky Number)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Applied when a straight-up bet lands on a Lucky Number with an assigned multiplier.",
    
      payoutBetStraight: "Straight Up (standard)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Standard straight-up win without a Lightning multiplier.",
    
      payoutBetSplit: "Split",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Bet on 2 adjacent numbers.",
    
      payoutBetStreet: "Street",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Bet on 3 numbers in a row.",
    
      payoutBetCorner: "Corner",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Bet on 4 numbers.",
    
      payoutBetDozen: "Dozen / Column",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Covers 12 numbers.",
    
      payoutBetEven: "Red/Black, Odd/Even, High/Low",
      payoutValEven: "1:1",
      payoutNoteEven: "Standard outside bets.",
    
      rtpTitle: "Lightning Roulette RTP and Volatility",
      rtpText1:
        "Lightning roulette RTP depends on the type of bet. Standard bets such as red/black or dozens keep an RTP of about 97.30%, while straight-up bets sit around 97.10% because the game reallocates part of the payout structure to fund the multiplier feature.",
      rtpText2:
        "In terms of variance, the game is more volatile than classic roulette when the focus is on inside numbers. Lightning roulette multipliers create less frequent but larger payout moments, which is why many players describe the game as medium-to-high volatility rather than a standard roulette profile.",
    
      strategyTitle: "Lightning Roulette Strategy Notes",
      strategyText1:
        "A lightning roulette strategy does not change the house edge, but it can change the risk profile of a session. Players who prefer lower variance usually stay closer to outside bets, while those who want exposure to multipliers focus more on straight-up coverage.",
      strategyText2:
        "From a statistics perspective, the game is best approached as European roulette with an additional multiplier layer. That makes it useful to track Lucky Number frequency, multiplier distribution and payout swings over a larger sample rather than judge the game by a short streak.",
    
      trackerTitle: "What You Can Track",
      trackerIntro:
        "This section of the site is built for players who want to review lightning roulette online through recent results, multipliers and summary metrics rather than rely on short-term impressions.",
    
      trackLuckyNumbers: "Lucky Number History",
      trackLuckyNumbersText:
        "Track which numbers received multipliers and how often they appear in recent rounds.",
    
      trackMultipliers: "Multiplier Distribution",
      trackMultipliersText:
        "See how often 50x, 100x, 150x, 200x, 300x, 400x and 500x multipliers appear.",
    
      trackSpinResults: "Spin Results",
      trackSpinResultsText:
        "Review recent results, including winning number, lightning numbers and hit multipliers.",
    
      trackRtp: "RTP Snapshot",
      trackRtpText:
        "Compare observed outcomes with the expected return profile of the game.",
    
      trackPatterns: "Result Patterns",
      trackPatternsText:
        "Use recent history and distribution data to follow short-term streaks and number frequency.",
    
      comparisonTitle: "Lightning Roulette at a Glance",
      compColArea: "Area",
      compColValue: "Lightning Roulette",
      compColMeaning: "Why It Matters",
    
      compAreaBase: "Base Format",
      compValueBase: "European roulette with a live dealer",
      compWhyBase:
        "The core rules stay familiar for players who already know standard roulette.",
    
      compAreaMultipliers: "Lightning Multipliers",
      compValueMultipliers: "1–5 Lucky Numbers, 50x to 500x",
      compWhyMultipliers:
        "Adds higher upside to straight-up bets without changing outside bet payouts.",
    
      compAreaRtp: "RTP Profile",
      compValueRtp: "97.30% standard / 97.10% straight-up",
      compWhyRtp:
        "Useful for understanding how multiplier funding affects different bet types.",
    
      compAreaVariance: "Volatility",
      compValueVariance: "Higher than classic roulette on inside bets",
      compWhyVariance:
        "Multiplier-based payouts create wider short-term swings.",
    
      compAreaUse: "Best Use Case",
      compValueUse: "Players who want roulette with extra variance",
      compWhyUse:
        "Keeps the standard roulette structure while adding occasional boosted payouts.",
    
      faqTitle: "Frequently Asked Questions",
      faq: [
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
      ],
    
      conclusionTitle: "General Impression",
      conclusionText:
        "As a neutral lightning roulette review, the game can be described as standard European roulette with an added multiplier layer that increases variance without changing the core format. For players interested in lightning roulette live statistics, it is a useful game to track because multiplier frequency, Lucky Number selection and payout patterns can all be measured over time."
    },
    lightningrouletteHistory: {
      panelTitle:  "Spin History",
      subtitle:    "Recent spin history with Lucky Number results.",
      occurredAt:  "Occurred At",
      spinResult:  "Spin Result",
      multiplier:  "Multiplier",
      firstLucky:  "First Lucky",
      secondLucky: "Second Lucky",
      thirdLucky:  "Third Lucky",
      fourthLucky: "Fourth Lucky",
      fifthLucky:  "Fifth Lucky",
    },
    megaballReview: {
      title: "Mega Ball Tracker, RTP & Game Review",
      intro: "Track Mega Ball stats, results and RTP in real time with live tracker tools. Review ball history, multiplier rounds, winner counts and payout trends in one place.",
    
      quickOverviewTitle: "Quick Game Overview",
      tableParameter: "Parameter",
      tableDetails: "Details",
      tableFeature: "Feature",
      tableDescription: "Description",
    
      specProvider: "Provider",
      specProviderValue: "Evolution Gaming",
      specGameName: "Game Name",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95.30%",
      specReleaseYear: "Release Year",
      specReleaseYearValue: "2023",
      specGameType: "Game Type",
      specGameTypeValue: "Live Bingo Game Show",
      specMinBet: "Bet Range",
      specMinBetValue: "Varies by casino",
      specMaxWin: "Max Win",
      specMaxWinValue: "Up to 1,000,000x",
      specBalls: "Balls Drawn",
      specBallsValue: "20 balls + Mega Ball + possible 2nd Mega Ball",
    
      trackerTitle: "What You Can Track",
      trackerIntro: "On Tracksino, Mega Ball tracker tools focus on the most useful live metrics for round-by-round analysis.",
      trackBallHistory: "Ball History",
      trackBallHistoryText: "Review all drawn balls in exact order.",
      trackMultiplier: "Mega Ball Multiplier",
      trackMultiplierText: "Track generated multipliers from 5x to 100x.",
      trackWinners: "Total Winners",
      trackWinnersText: "See how many winning cards or players were paid.",
      trackPayouts: "Payout Amounts",
      trackPayoutsText: "Monitor payout totals and compare active rounds.",
      trackLive: "Watch Mega Ball Live",
      trackLiveText: "Open the live game and compare ongoing action with tracker data.",
    
      aboutTitle: "About Mega Ball",
      aboutText1: "Mega Ball is a fast-paced live game show that combines bingo-style card mechanics with lottery-style bouncing balls. One or two bonus stages can appear after the main draw, adding extra excitement through multipliers.",
      aboutText2: "The goal is to complete as many lines on your cards as possible. More completed lines mean higher payouts, and multiplier rounds can significantly boost qualifying wins.",
    
      howToPlayTitle: "How To Play",
      howToPlayText1: "In Mega Ball, 20 balls are drawn one by one from an automatic machine. Matching numbers on the player's cards are marked automatically, and the cards closest to a win are moved to the top of the interface.",
      howToPlayText2: "After the final ball, a Mega Ball multiplier between 5x and 100x is generated. If the Mega Ball helps complete a line, the payout can be multiplied. In rare cases, a 2nd Mega Ball may also be drawn, giving players another chance at a boosted win.",
      howToPlayBullets: [
        "20 balls are drawn in quick succession.",
        "Matching numbers are marked automatically on all active cards.",
        "Cards nearest to completion move higher in the interface.",
        "A Mega Ball multiplier is generated after the main draw.",
        "A rare 2nd Mega Ball may create one more chance for a multiplied payout."
      ],
    
      payoutTitle: "Mega Ball Payout",
      payoutIntro: "Mega Ball payouts depend on how many lines are completed on a single card. Horizontal, vertical and diagonal lines can all count toward the final prize.",
      payoutColLines: "Completed Lines",
      payoutColPrize: "Payout",
      payoutColNote: "How It Works",
      payout1Line: "1 horizontal, vertical or diagonal line.",
      payout2Lines: "2 completed lines on one card.",
      payout3Lines: "3 completed lines on one card.",
      payout4Lines: "4 completed lines on one card.",
      payout5Lines: "5 completed lines on one card.",
      payout6Lines: "6 completed lines on one card.",
    
      comparisonTitle: "Mega Ball at a Glance",
      compColArea: "Area",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Why It Matters",
      compAreaBase: "Base format",
      compMegaBallBase: "Live bingo-style game show",
      compMeaningBase: "Combines card completion with a live ball draw.",
      compAreaBonus: "Bonus rounds",
      compMegaBallBonus: "Mega Ball and rare 2nd Mega Ball",
      compMeaningBonus: "Adds multiplier potential after the main draw.",
      compAreaTracking: "Tracking value",
      compMegaBallTracking: "High",
      compMeaningTracking: "Ball order, winners and payouts are easy to review round by round.",
      compAreaMaxWin: "Top win potential",
      compMegaBallMaxWin: "Up to 1,000,000x",
      compMeaningMaxWin: "The biggest wins depend on completed lines plus multiplier effects.",
    
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "Can I track Mega Ball live results?",
          a: "Yes. A Mega Ball tracker can show ball history, recent payouts, winner counts and multiplier results round by round."
        },
        {
          q: "How does the Mega Ball multiplier work?",
          a: "After the main draw, a multiplier between 5x and 100x is generated. If the Mega Ball completes a winning line, the qualifying payout can be multiplied accordingly."
        },
        {
          q: "What is the 2nd Mega Ball?",
          a: "The 2nd Mega Ball is a rare extra draw that gives players another chance to complete a winning line with multiplier potential."
        },
        {
          q: "Is Mega Ball more like bingo or a game show?",
          a: "It combines both formats. The core mechanics are based on card lines, but the presentation and pacing follow a live casino game show style."
        },
        {
          q: "Can tracker data predict future results?",
          a: "No. Tracker data is useful for reviewing recent rounds and live statistics, but every draw remains independent."
        }
      ]
    },
    dreamcatcherReview: {
      title: "Dream Catcher Live: Real-Time Stats, Results & Complete Game Guide",
      intro:
        "Dream Catcher is Evolution Gaming's flagship Money Wheel game that transformed live casino entertainment when it launched in 2017. This Wheel of Fortune-style experience combines the excitement of a TV game show with real money gambling, all streamed in ultra-HD from professional studios in Latvia.\n\nUnlike traditional table games, Dream Catcher requires zero prior gambling knowledge. You simply bet on a number, watch the wheel spin, and collect your winnings if it lands on your pick. The addition of multiplier segments creates opportunities for massive payouts up to 20,000x your stake.",
      playbtn: "Play",
      heroAlt: "Dream Catcher live money wheel game logo",
    
      quickOverviewTitle: "Quick Game Overview",
      specFeature: "Specification",
      specDetails: "Details",
      specProvider: "Game Provider",
      specProviderValue: "Evolution Gaming",
      specYear: "Release Year",
      specYearValue: "2017",
      specType: "Game Type",
      specTypeValue: "Live Money Wheel",
      specRtp: "RTP",
      specRtpValue: "96.58% (optimal)",
      specBetRange: "Bet Range",
      specBetRangeValue: "€0.10 – €1,000",
      specMaxWin: "Max Win",
      specMaxWinValue: "20,000x stake",
      specSegments: "Total Segments",
      specSegmentsValue: "54",
      specLocation: "Streaming Location",
      specLocationValue: "Riga, Latvia",
    
      howWorksTitle: "How Dream Catcher Works",
      howWorksText:
        "The game features a massive vertically-mounted wheel with 54 coloured segments. A live host spins the wheel while interacting with players through chat, creating that authentic game show atmosphere.",
    
      wheelDistributionTitle: "Wheel Segment Distribution",
      wheelColNumber: "Number",
      wheelColSegments: "Segments",
      wheelColPayout: "Payout",
      wheelColProbability: "Probability",
      wheelDistributionNote:
        "The numbered segments pay exactly what they show—land on 5 and you get 5:1 on your bet. Simple as that.",
      multiplier2xLabel: "2x Multiplier",
      multiplier7xLabel: "7x Multiplier",
    
      multiplierTitle: "Multiplier Mechanics",
      multiplierIntro:
        "The two multiplier segments (silver 2x and gold 7x) are where things get interesting. You can't bet on these directly, but when the wheel stops on one:",
      multiplierBullets: [
        "All current bets stay active",
        "The wheel spins again",
        "Whatever number hits next gets multiplied"
      ],
      multiplierNote:
        "Multipliers can chain. If the wheel lands on 7x, then 7x again, then finally 40—that's a 1,960x payout. The theoretical maximum involves multiple consecutive multipliers hitting before landing on 40, pushing wins up to 20,000x.",
    
      statsTrackingTitle: "Dream Catcher Live Stats & Results Tracking",
      statsTrackingIntro:
        "Tracking Dream Catcher stats helps you understand the game's behaviour over time. While each spin is independent, monitoring Dream Catcher results reveals whether the wheel is running close to expected probabilities.",
      trackingBullets: [
        "Current multiplier status (active or not)",
        "Spins since last multiplier hit",
        "Number frequency over various timeframes",
        "Hot and cold segments based on recent Dream Catcher real-time results"
      ],
      statsTrackingNote:
        "Many players use Dream Catcher live stats dashboards to spot patterns, though remember—past results don't influence future spins.",
    
      strategiesTitle: "Betting Strategies Worth Considering",
      strategies: [
        {
          title: "Spread Your Bets",
          text:
            "Covering multiple segments increases hit frequency. Betting on 1, 2, and 5 simultaneously means you'll win on roughly 83% of spins (excluding multiplier segments)."
        },
        {
          title: "Target High-Payout Numbers",
          text:
            "Concentrating on 10, 20, or 40 means fewer wins but larger payouts when they hit. One successful 40 bet recovers many losing rounds."
        },
        {
          title: "Low Stakes, More Spins",
          text:
            "The €0.10 minimum lets you stretch smaller bankrolls across hundreds of spins. More spins means more chances to catch those multiplier chains."
        }
      ],
    
      rtpBreakdownTitle: "RTP Breakdown by Bet Type",
      rtpBreakdownIntro:
        "Not all bets carry equal theoretical returns.",
      rtpColBet: "Bet",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "The lower numbers offer better long-term value, while 40 carries higher variance with its reduced RTP.",
    
      whyLoveTitle: "Why Players Love Dream Catcher",
      whyLoveBullets: [
        "Instant understanding – No complex rules or strategies to learn",
        "Game show energy – Professional hosts keep the entertainment flowing",
        "Multiplier excitement – Every spin could trigger a chain reaction",
        "Accessible stakes – Play from €0.10 up to €1,000 per spin",
        "Mobile-optimised – Full experience on any device"
      ],
    
      faqTitle: "Frequently Asked Questions",
      faq: [
        {
          q: "Can I see Dream Catcher live stats during gameplay?",
          a: "Yes—the game interface displays recent Dream Catcher results and winning numbers. Third-party stat trackers offer deeper historical analysis of Dream Catcher stats across thousands of spins."
        },
        {
          q: "What happens if the wheel lands on multipliers repeatedly?",
          a: "Multipliers stack. Two consecutive 7x hits followed by a number means that number pays 49x its normal rate. Chains are rare but create the game's biggest wins."
        },
        {
          q: "Is there a way to predict Dream Catcher real-time results?",
          a: "No. Each spin uses a certified random mechanism. Tracking Dream Catcher live stats can inform your betting patterns, but cannot predict outcomes."
        },
        {
          q: "Why does the 40 bet have lower RTP than other numbers?",
          a: "With only one segment out of 54, the 40 appears roughly 1.9% of the time. The 40:1 payout doesn't fully compensate for this rarity, resulting in a higher house edge."
        },
        {
          q: "How do Dream Catcher results compare to slot RTPs?",
          a: "Dream Catcher's optimal 96.58% RTP sits comfortably within standard online slot territory (typically 94-97%), making it competitive for a live game format."
        }
      ]
    },
    gamePanels: {
      temperatureSubtitle:
        "Live segment temperature highlights hot and cold outcomes based on recent spins versus expected probability.",
      temperatureSpinsSince: "{n} spins since",
    
      historySubtitle:
        "Explore the latest spin history with real-time results, multipliers, winners, and payouts.",
    
      rtpBasedOn: "Based on last 1,000 spins",
    
      summaryTotalSpinsToday: "Total Spins Today",
      summaryBonusRounds: "Bonus Rounds",
      summaryBiggestMultiplier: "Biggest Multiplier",
      summaryAvgPayout: "Avg. Payout",
    
      occurredAt: "Occurred At",
      slotResult: "Slot Result",
      spinResult: "Spin Result",
      specialResult: "Special Result",
      multiplier: "Multiplier",
      totalWinners: "Total Winners",
      totalPayout: "Total Payout",
    
      watch: "Watch"
    },
    dreamcatcherStatsExtra: {
      trackedMetaPrefix: "Past 30 minutes",
      bestWinsTitle: "Top Single-Spin Wins",
      bestWinsText: "A quick look at the biggest payouts from the latest tracked spins.",
      wheelStatsTitle: "Wheel Multipliers Stats",
      wheelStatsText: "See how often the multiplier segments landed during the same tracked window.",
      matchedTitle: "Wheel Multipliers Matched",
      matchedText: "Compare multiplier hits against regular spins in the current sample.",
      finished: "Finished",
      outcome: "Outcome",
      player: "Player",
      wonAmount: "Won Amount",
      multiplier: "Multiplier",
      match: "Match",
      noMatch: "No Match"
    },
    homeSeo: {
      sectionTitle: "About Our Live Casino Statistics Platform",
      whoTitle: "Who We Are",
      whoText1: "We are an independent live casino analytics platform that collects, processes and visualizes statistics in real time.",
      whoText2: "Our goal is to provide players with transparent data based on actual game results, helping them better understand live casino statistics and recent outcomes.",
      howTitle: "How We Collect Information",
      howText1: "We use automated data collection systems that track live casino game results in real time.",
      howText2: "The data comes from open broadcast sources, live game streams and public provider interfaces, allowing us to monitor game results and real-time results continuously.",
      howText3: "All results go through additional processing and algorithmic verification to minimize delays and maintain high statistical accuracy. The platform is powered by modern data technologies, including stream synchronization, automated parsing and analytical models."
    },
    monopolyReview: {

      title: "Monopoly Live Review: The Ultimate Live Casino Game Show Experience",
      intro: "Welcome to the ultimate guide to Monopoly Live, one of the most popular live dealer games ever created. Developed by the legendary Evolution Gaming, this title merges a massive money wheel with an incredible augmented reality 3D bonus round featuring Mr. Monopoly himself. Whether you want to play Monopoly Live online or just check the latest game statistics, we have all the information you need.",
      playbtn: "Play",
      heroAlt: "Monopoly Live wheel with live host and game show studio",
      tableFeature: "Feature",
      tableDetails: "Details",
      gameNameLabel: "Game Name",
      providerLabel: "Provider",
      gameTypeLabel: "Game Type",
      rtpLabel: "RTP",
      maxWinLabel: "Max Win",
    
      gameTypeValue: "Live Casino Game Show",
      rtpValue: "Up to 96.23%",
      maxWinValue: "$500,000 (or multiplier equivalent)",
    
      sectionsTitle: "Key Monopoly Live Features",
    
      wheelTitle: "The Money Wheel (Base Game)",
      wheelText: "The core of the live Monopoly casino experience. A real live host spins a massive vertical wheel featuring 54 segments. Players bet on numbers (1, 2, 5, 10) to win instant cash payouts based on the number landed.",
    
      chanceTitle: "The 'Chance' Segment",
      chanceText: "Landing on a 'Chance' segment awards players either an instant cash prize or an exciting multiplier bonus. If a multiplier drops, the host spins the wheel again, and your next win is multiplied!",
    
      bonus3dTitle: "The 3D Bonus Round",
      bonus3dText: "The highlight of the Monopoly live game. If you bet on '2 ROLLS' or '4 ROLLS' and the wheel stops there, Mr. Monopoly steps into a 3D board game world, collecting prizes, multipliers, and avoiding taxes.",
    
      howToPlayTitle: "How to Play Monopoly Live",
      howToPlayIntro: "Getting started at an online casino with Monopoly Live is incredibly simple. Just follow these steps:",
      step1: "Place your bets: You have a short betting window to place your chips on 1, 2, 5, 10, '2 Rolls', or '4 Rolls'.",
      step2: "The spin: The live dealer spins the wheel. You can watch Monopoly live as the wheel slows down.",
      step3: "The payout: If the wheel stops on your number, you win. If it lands on a bonus game and you placed a bet on it, you enter the 3D round!",
    
      statsTitle: "Monopoly Live Stats, Results & Trackers",
      statsText1: "For many serious iGaming enthusiasts, tracking the game is just as important as playing. Because this is a game of probability, many players utilize a Monopoly Live tracker to follow the game's trends.",
      statsText2: "By analyzing Monopoly Live stats, you can view the frequency of bonus rounds, average multipliers, and cold/hot numbers. Checking the Monopoly Live history allows you to see the Monopoly live results today. While past results do not guarantee future outcomes, looking at a casino score Monopoly Live board gives players insights into how the wheel is behaving during their session. Always remember to play responsibly, regardless of what the Monopoly live results show.",
      statsNote: "Note: If you love this format, you might also want to check out Monopoly Big Baller live, a bingo-style spin-off that also features exciting Monopoly Big Baller results today live!",
    
      freePlayTitle: "Can You Play for Free?",
      freePlayText: "Many players look for a Monopoly Live casino demo or Monopoly Live free play. Since this is a live studio game with real dealers, a playable demo with fake money isn't available. However, you can join any Monopoly live online casino, open the game, and simply watch the Monopoly live stream for free to learn the rules before placing real bets.",
    
      faqTitle: "Frequently Asked Questions (FAQ)",
      faq: [
        {
          q: "Where can I find Monopoly Live results and statistics?",
          a: "You can find Monopoly live stats directly inside the game interface, which shows the most recent winning segments. For deeper analytics, many third-party casino tracker websites provide comprehensive Monopoly live history."
        },
        {
          q: "Is there a Monopoly Live casino app available?",
          a: "There is no standalone Monopoly Live apk. However, you can play the game perfectly on mobile by downloading the official app of any licensed casino that features Evolution Gaming titles."
        },
        {
          q: "What is the difference between this and Monopoly Big Baller?",
          a: "While both feature Mr. Monopoly and 3D bonus rounds, the original game uses a spinning money wheel, whereas live casino Monopoly Big Baller uses a bingo-style ball drawing machine."
        },
        {
          q: "How do I get into the 3D Bonus Game?",
          a: "To participate in the 3D board game, you must place a bet on the '2 ROLLS' or '4 ROLLS' betting spots. If the wheel stops on one of these segments, the bonus round begins."
        },
        {
          q: "Can I interact with the live dealer?",
          a: "Yes! The game features a Monopoly casino live chat where you can talk to the host and other players, making the live Monopoly experience highly social and engaging."
        },
        {
          q: "Are the game results rigged?",
          a: "No. Monopoly Live Evolution Gaming is heavily tested and licensed by top gambling authorities. The wheel is completely physical and random, ensuring every Monopoly live score is 100% fair."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Low Tier Dice Rolls",
      diceRollsMidTitle: "Mid Tier Dice Rolls",
      diceRollsHighTitle: "High Tier Dice Rolls",
      trackedMeta: "Past 6 hours • 258 Spins",
    
      boardMovesTitle: "Board Moves Statistics",
      bonusGameStats: "Bonus Game Stats",
      doublesRolled: "Doubles Rolled",
      avgBoardRolls: "Avg Board Rolls per Bonus Game",
    
      landingStatsTitle: "MONOPOLY Big Baller Landing Square Stats",
    
      bestIndividualWinsTitle: "Best Individual Wins",
      latestTopMultipliersTitle: "Latest Top Multipliers",
    
      finished: "Finished",
      player: "Player",
      wonAmount: "Won Amount",
      multiplier: "Multiplier",
      bigWinClip: "Big Win Clip",
      bonusRound: "Bonus Round",
      watchClip: "Watch Clip",
      biggestWinsGallery: "Biggest Wins Gallery"
    },
    seo: {
    home: {
        title: "Casino Score Live 🔥 Live Stats and Real-Time Results [2026]",
        description: "Casino Score Live is your ultimate hub for live stats and real-time results in 2026. Analyze RTP, track hot or cold streaks, and make data-driven betting choices securely."
      },
      lightningroulette:{
        title: "Lightning Roulette Statistics, RTP & Live Results",
        description: "Track Lightning Roulette live results, RTP, multipliers, Lucky Numbers and spin history. View payouts, trends and real-time game stats online."
      },
      megaball:{ 
        title: "Mega Ball Live Stats & Results – Play Online + RTP & Trends",
      description: "Mega Ball live stats, results & RTP insights. Track trends, multipliers and outcomes in real time. Play Mega Ball online or demo – find best casinos now."
      },    
      crazytime: {
        title: "Crazy Time Stats – Live Results & Multipliers Tracker",
        description: "Crazy Time live stats updated in real time. Track wheel results, bonus rounds & multipliers up to 2000x. Use data to build your winning strategy. Check now!"
      },
      monopoly: {
        title: "Monopoly Live Stats 2026 | Official Results Tracker",
        description: "Monopoly Live official statistics for 2026. Real-time results, verified history & Evolution Gaming data. Licensed casinos only. Track scores & play safe now."
      },
      dreamcatcher: {
        title: "Dream Catcher Game Results & Live Stats 2026 - Scores in Real Time 🎰",
        description: "Dream Catcher game results today, live stats & scores updated in real time. Track result history, winning statistics and trends for 2026. See every spin instantly."
      }
    },
    crazytimeStream: {
      title: "Crazy Time Live Stream",
      subtitle: "Watch the live Crazy Time stream directly on this page.",
      liveLabel: "Live Stream",
      watchLivestream: "Watch Livestream"
    },
    crazytimeReview: {
      faqTitle: "Frequently Asked Questions",
faq: [
{
  q: "Is Crazy Time a game of skill or chance?",
  a: "Crazy Time is primarily a game of chance. While players can use stats and tracking tools to better understand recent outcomes, every round remains independent."
},
{
  q: "What is the maximum multiplier in Crazy Time?",
  a: "The maximum advertised potential in Crazy Time can reach up to 20,000x during the main Crazy Time bonus round."
},
{
  q: "Can I join bonus rounds if I did not bet directly on them?",
  a: "If the game rules and current setup allow it through bonus mechanics such as minimum entry or Top Slot effects, players may still enter certain bonus outcomes with a reduced multiplier."
},
{
  q: "Are Crazy Time live stats predictive?",
  a: "No. Live stats help visualize recent activity, but they do not predict future outcomes. Each spin is independent."
}
],
      whatIsTitle: "What Is Crazy Time?",
      whatIsText: "Crazy Time is a live casino game developed by Evolution Gaming, launched in 2020. It combines a money wheel format with four interactive bonus rounds, delivering one of the most engaging live casino experiences available today.",
    
      tableParameter: "Parameter",
      tableDetails: "Details",
      gameName: "Game Name",
      provider: "Provider",
      rtp: "RTP",
      releaseYear: "Release Year",
      gameType: "Game Type",
      minBet: "Min Bet",
      maxBet: "Max Bet",
      volatility: "Volatility",
      gameTypeValue: "Live Game Show",
      volatilityValue: "High",
    
      howToPlayTitle: "How to Play Crazy Time Game",
      howToPlayText: "The Crazy Time live game follows a straightforward format:",
      step1: "Place your bet on one or more wheel segments before the timer runs out",
      step2: "Watch the wheel spin — a live host manages the entire session in real time",
      step3: "Win if the wheel lands on your chosen segment",
      step4: "Trigger a bonus round if the flapper lands on a bonus segment",
    
      wheelBreakdownTitle: "Wheel Segments Breakdown",
      wheelSegment: "Segment",
      wheelOccurrences: "Occurrences on Wheel",
      wheelMultiplier: "Multiplier",
      upTo2000x: "Up to 2000x",
      upTo10000x: "Up to 10,000x",
      upTo20000x: "Up to 20,000x",
    
      bonusRoundsTitle: "Crazy Time Bonus Rounds",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "A shooting gallery with 108 random multipliers hidden behind symbols. Players pick one to reveal their prize.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "A simple double-sided coin is flipped. Each side displays a multiplier — red or blue. Fast, clean, exciting.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "A giant physical Pachinko wall drops a puck from the top. It bounces through pegs and lands on a multiplier at the bottom. Can double infinitely until a non-double multiplier is hit.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonus)",
      crazyTimeBonusText: "The main event. A massive virtual wheel with three flappers spins inside a digital world. Players pick a flapper before the spin. The highest potential reward reaches 20,000x.",
    
      rulesTitle: "Crazy Time Game Rules: Key Points",
      rule1: "You can bet on multiple segments simultaneously",
      rule2: "The Top Slot above the main wheel adds a multiplier or triggers bonus entry with boosted multipliers",
      rule3: "If you didn't bet on a bonus segment but it lands, you are still entered into the bonus (at minimum multiplier)",
      rule4: "All bonus multipliers are multiplied by your original bet, not just a flat reward",
    
      statsTitle: "Crazy Time Live Stats & Results",
      statsText: "Understanding Crazy Time stats helps inform your session decisions. Most platforms display a live stats tracker directly in the game interface.",
      typicalStatsTitle: "Typical Stats You'll See:",
      stat1: "Last 100 spins results — distribution of each segment landing",
      stat2: "Bonus frequency — how often each bonus round was triggered",
      stat3: "Multiplier history — top multipliers awarded in recent rounds",
      stat4: "Hot & cold segments — visual indicators of segment frequency",
      tip: "Pro tip:",
      tipText: "The Crazy Time stats tracker is not a predictive tool — past results do not influence future spins. The RNG and live wheel operate independently each round.",
    
      whyPlayTitle: "Why Play Crazy Time Online?",
      prosTitle: "🏆 Pros:",
      pro1: "Exceptional production quality from Evolution Gaming",
      pro2: "Four distinct bonus games — never repetitive",
      pro3: "Massive max multiplier potential (up to 20,000x)",
      pro4: "Available 24/7 at virtually every major live casino online",
      pro5: "Transparent live stats tracker built into the interface",
    
      consTitle: "⚠️ Cons:",
      con1: "High volatility — long losing streaks are possible",
      con2: "True demo play is unavailable (live format limitation)",
      con3: "Top multipliers are rare by design"
    },
    cta: {
      playNow: "Play 🎰"
    },
    crazytimeStatsExtra: {
      yellow: "Yellow",
blue: "Blue",
green: "Green",
red: "Red",
cashHunt: "Cash Hunt",
      sectionTitle: "Advanced Crazy Time Bonus Statistics",

      flapperTitle: "Crazy Bonus Flapper",
      flapperMeta: "6 hours • 420 spins",
      flapperText: "Compare the average multipliers of the three Crazy Time flapper colors. These figures provide a quick snapshot of short-term performance versus the long-term average.",
      avgAlways: "Always avg.",
      flapperFootnote: "The marker shows the long-term average multiplier benchmark for the selected flapper color based on tracked historical data.",

      coinFlipTitle: "Coin Flip",
      coinFlipMeta: "6 hours • 420 spins",
      coinFlipText: "Compare red and blue Coin Flip outcomes with average multipliers and hit frequency versus long-term expectations.",
      avgMultiplier: "Avg. Multiplier",
      frequency: "Frequency",
      vsAvg: "vs avg.",
      coinFlipFootnote: "The marker shows the long-term average frequency benchmark for the selected color based on tracked data.",

      cashHuntSymbolsTitle: "Cash Hunt Symbols",
      cashHuntSymbolsMeta: "6 hours • 420 spins",
      cashHuntSymbolsText: "This breakdown shows the average multiplier and appearance frequency for each Cash Hunt target symbol.",
      times: "times",

      recentCashHuntTitle: "Cash Hunt: Recent Multipliers",
      recentCashHuntMeta: "6 hours • 420 spins",
      recentCashHuntText: "Follow recent multipliers from Cash Hunt rounds. Highlighted cells mark the strongest and weakest recent results.",

      bestBetsTitle: "Best Individual Bets",
      bestBetsMeta: "6 hours • 420 spins",
      bestBetsText: "This table highlights the strongest single wins in the selected period, including player, payout, result and multiplier.",
      date: "Date",
      result: "Result",
      player: "Player",
      payout: "Payout",
      multiplier: "Multiplier",
      view: "View",

      latestMaxTitle: "Latest Maximum Multipliers",
      latestMaxMeta: "6 hours • 420 spins",
      latestMaxText: "These recent top bonus results show the highest multipliers reached during the selected period.",
      clip: "Watch Clip",
      biggestWinsGallery: "Biggest Wins Gallery"
    },
   
    gamePage: {
      statisticsTitleSuffix: " Stats – Live Results & Multipliers Tracker",
      subtitlePrefix: "Track real-time spin results, history and statistics for",
      playCta: "Play Now"

    },
    nav: {
      home: "Home",
      liveGames: "Live Games"
    },
    home: {
      heroTitleBefore: "Live Casino",
      heroTitleAccent: "Statistics",
      heroTitleAfter: "& Real-Time Results",
      heroText: "Live casino statistics, game results, and real-time results for your favorite live casino game shows. Track RTP, hot or cold streaks, and biggest wins — 100% free, no account needed.",      liveGames: "Live Games",
      featuresTitle: "Our Features",
      testimonialsTitle: "Our Testimonials"
    },
    features: {
      noDownloadTitle: "No Download Needed",
      noDownloadText: "View all data instantly in your browser on desktop, tablet or mobile. No downloads and no account required.",
      accurateDataTitle: "Accurate Data",
      accurateDataText: "Automated tracking of every spin in real time so you can monitor outcomes with confidence.",
      freeTitle: "100% Free to Use",
      freeText: "Tracksino is free to use. Open any live game and instantly inspect recent results and key statistics."
    },
    footer: {
      games: "Games",
      moreGames: "More Games",
      resources: "Resources",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Us",
      description: "Track live casino game shows in real time. Spin history, statistics and biggest wins."
    },
    homeFaq: {
      faqTitle: "Live Casino Statistics FAQ",
      faqIntro: "Answers about live casino statistics, game results and real-time results on our platform.",
      faq: [
        {
          q: "What are live casino statistics?",
          a: "Live casino statistics are data points based on real game results and real-time results from live dealer streams."
        },
        {
          q: "How do you collect game results?",
          a: "We monitor public streams, provider interfaces and broadcast sources with automated systems to capture game results as they happen."
        },
        {
          q: "How often are real-time results updated?",
          a: "Real-time results are updated continuously and verified before being displayed on the site."
        },
        {
          q: "Can live casino statistics predict the next outcome?",
          a: "No. Live casino statistics help you understand game results and recent trends, but they do not predict future outcomes."
        }
      ]
    },
    common: {
      player: "Player",
      verifiedUser: "Verified User",
      liveNow: "Live Now",
      hour: "hour",
      hours: "hours",
      spins: "spins"
    },
    tabs: {
      temperature: "Temperature",
      history: "History",
      stats: "Stats",
      bigwins: "Big Wins",
      review: "Review",
      stream: "Stream",
    }
 
  },

  es: {
    lightningrouletteReview: {
      title: "Revisión de Lightning Roulette, RTP y Estadísticas en Vivo",
      intro:
        "Lightning Roulette es una variante de ruleta con crupier en vivo basada en la rueda europea. El juego sigue las reglas estándar de ruleta, pero cada ronda puede asignar multiplicadores aleatorios a números seleccionados como Números de la Suerte, creando una versión de mayor varianza que la ruleta en vivo tradicional.",
    
      quickOverviewTitle: "Descripción General Rápida del Juego",
      tableParameter: "Parámetro",
      tableDetails: "Detalles",
    
      specProvider: "Proveedor",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nombre del Juego",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Año de Lanzamiento",
      specReleaseYearValue: "2018",
      specGameType: "Tipo de Juego",
      specGameTypeValue: "Ruleta con Crupier en Vivo",
      specWheel: "Formato de la Rueda",
      specWheelValue: "Ruleta Europea (cero único)",
      specRtp: "RTP",
      specRtpValue: "97.30% en apuestas estándar; 97.10% en apuestas directas",
      specMinBet: "Apuesta Mínima",
      specMinBetValue: "$0.20",
      specMaxBet: "Apuesta Máxima",
      specMaxBetValue: "$10,000",
      specMaxWin: "Multiplicador Máximo",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Números de la Suerte",
      specLuckyNumbersValue: "1 a 5 por ronda",
      specVolatility: "Volatilidad",
      specVolatilityValue: "Media a alta",
      specMobile: "Juego Móvil",
      specMobileValue: "Soportado",
    
      aboutTitle: "¿Qué es Lightning Roulette?",
      aboutText1:
        "Lightning Roulette es un juego de ruleta en vivo que mantiene la rueda europea de cero único y la mesa de apuestas estándar, mientras añade eventos de multiplicadores aleatorios antes de cada giro. Este formato se describe a menudo como ruleta de relámpago en vivo o ruleta de relámpago en línea porque el juego combina un crupier de estudio real con una mecánica de multiplicador generada antes de que la bola caiga.",
      aboutText2:
        "En términos prácticos, la diferencia respecto a la ruleta clásica es simple: uno a cinco números se convierten en Números de la Suerte cada ronda, y si una apuesta directa cae en uno de ellos, el pago utiliza el multiplicador asignado en lugar del pago directo regular. Esta es la idea central detrás de la mayoría de páginas de revisión de ruleta de relámpago y rastreadores de estadísticas.",
    
      howToPlayTitle: "Cómo Jugar a Lightning Roulette",
      howToPlayText1:
        "Cómo jugar a Lightning Roulette es sencillo para cualquiera familiarizado con la ruleta. Los jugadores realizan apuestas durante la fase de apuestas, luego el juego revela los Números de la Suerte y sus multiplicadores antes de que comience el giro en vivo.",
      howToPlayText2:
        "Las reglas de ruleta de relámpago se basan en la ruleta europea, por lo que las apuestas exteriores, docenas, columnas y apuestas interiores funcionan como se esperaba. El mecanismo adicional afecta solo a las apuestas directas que caen en Números de la Suerte seleccionados.",
      howToPlayBullets: [
        "Elige valores de fichas y realiza apuestas en la mesa de ruleta.",
        "Espera a que el juego asigne 1 a 5 Números de la Suerte con multiplicadores aleatorios.",
        "Observa al crupier girar la rueda y soltar la bola.",
        "Si tu apuesta directa acierta un Número de la Suerte, la ronda utiliza el pago del multiplicador de relámpago.",
        "Todas las apuestas no multiplicadas se resuelven según las reglas estándar de ruleta europea."
      ],
    
      payoutTitle: "Pagos de Lightning Roulette",
      payoutIntro:
        "Los pagos de ruleta de relámpago siguen la ruleta estándar para la mayoría de apuestas, mientras que la principal diferencia aparece en números directos. Cuando un Número de la Suerte seleccionado gana, el multiplicador asignado reemplaza el pago directo regular y puede alcanzar hasta 500x.",
    
      payoutColBet: "Tipo de Apuesta",
      payoutColPayout: "Pago",
      payoutColNote: "Cómo Funciona",
    
      payoutBetStraightLucky: "Directo (Número de la Suerte)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Aplicado cuando una apuesta directa cae en un Número de la Suerte con un multiplicador asignado.",
    
      payoutBetStraight: "Directo (estándar)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Ganancia directa estándar sin multiplicador de relámpago.",
    
      payoutBetSplit: "Repartición",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Apuesta en 2 números adyacentes.",
    
      payoutBetStreet: "Calle",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Apuesta en 3 números en fila.",
    
      payoutBetCorner: "Esquina",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Apuesta en 4 números.",
    
      payoutBetDozen: "Docena / Columna",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Cubre 12 números.",
    
      payoutBetEven: "Rojo/Negro, Impar/Par, Alto/Bajo",
      payoutValEven: "1:1",
      payoutNoteEven: "Apuestas exteriores estándar.",
    
      rtpTitle: "RTP y Volatilidad de Lightning Roulette",
      rtpText1:
        "El RTP de ruleta de relámpago depende del tipo de apuesta. Las apuestas estándar como rojo/negro o docenas mantienen un RTP de aproximadamente 97.30%, mientras que las apuestas directas rondan el 97.10% porque el juego reasigna parte de la estructura de pago para financiar la función de multiplicador.",
      rtpText2:
        "En términos de varianza, el juego es más volátil que la ruleta clásica cuando el enfoque está en números interiores. Los multiplicadores de ruleta de relámpago crean momentos de pago menos frecuentes pero más grandes, por lo que muchos jugadores describen el juego como volatilidad media a alta en lugar de un perfil de ruleta estándar.",
    
      strategyTitle: "Notas sobre la Estrategia de Lightning Roulette",
      strategyText1:
        "Una estrategia de ruleta de relámpago no cambia la ventaja de la casa, pero puede cambiar el perfil de riesgo de una sesión. Los jugadores que prefieren menor varianza generalmente se mantienen más cerca de apuestas exteriores, mientras que aquellos que desean exposición a multiplicadores se enfocan más en cobertura directa.",
      strategyText2:
        "Desde una perspectiva estadística, el juego se aborda mejor como ruleta europea con una capa de multiplicador adicional. Esto hace que sea útil rastrear la frecuencia de Números de la Suerte, distribución de multiplicadores y oscilaciones de pago en una muestra más grande en lugar de juzgar el juego por una racha corta.",
    
      trackerTitle: "Qué Puedes Rastrear",
      trackerIntro:
        "Esta sección del sitio está diseñada para jugadores que desean revisar ruleta de relámpago en línea a través de resultados recientes, multiplicadores y métricas de resumen en lugar de confiar en impresiones a corto plazo.",
    
      trackLuckyNumbers: "Historial de Números de la Suerte",
      trackLuckyNumbersText:
        "Rastrea qué números recibieron multiplicadores y con qué frecuencia aparecen en rondas recientes.",
    
      trackMultipliers: "Distribución de Multiplicadores",
      trackMultipliersText:
        "Ve con qué frecuencia aparecen multiplicadores de 50x, 100x, 150x, 200x, 300x, 400x y 500x.",
    
      trackSpinResults: "Resultados de Giros",
      trackSpinResultsText:
        "Revisa resultados recientes, incluyendo número ganador, números de relámpago y multiplicadores acertados.",
    
      trackRtp: "Instantánea de RTP",
      trackRtpText:
        "Compara los resultados observados con el perfil de retorno esperado del juego.",
    
      trackPatterns: "Patrones de Resultados",
      trackPatternsText:
        "Usa el historial reciente y datos de distribución para seguir rachas a corto plazo y frecuencia de números.",
    
      comparisonTitle: "Lightning Roulette de un Vistazo",
      compColArea: "Área",
      compColValue: "Lightning Roulette",
      compColMeaning: "Por Qué Importa",
    
      compAreaBase: "Formato Base",
      compValueBase: "Ruleta europea con crupier en vivo",
      compWhyBase:
        "Las reglas principales se mantienen familiares para jugadores que ya conocen la ruleta estándar.",
    
      compAreaMultipliers: "Multiplicadores de Relámpago",
      compValueMultipliers: "1–5 Números de la Suerte, 50x a 500x",
      compWhyMultipliers:
        "Añade mayor potencial a apuestas directas sin cambiar los pagos de apuestas exteriores.",
    
      compAreaRtp: "Perfil de RTP",
      compValueRtp: "97.30% estándar / 97.10% directo",
      compWhyRtp:
        "Útil para entender cómo el financiamiento del multiplicador afecta diferentes tipos de apuestas.",
    
      compAreaVariance: "Volatilidad",
      compValueVariance: "Mayor que la ruleta clásica en apuestas interiores",
      compWhyVariance:
        "Los pagos basados en multiplicadores crean fluctuaciones más amplias a corto plazo.",
    
      compAreaUse: "Mejor Caso de Uso",
      compValueUse: "Jugadores que desean ruleta con varianza adicional",
      compWhyUse:
        "Mantiene la estructura de ruleta estándar mientras añade pagos ocasionalmente mejorados.",
    
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          q: "¿Qué es Lightning Roulette?",
          a: "Lightning Roulette es una versión de crupier en vivo de ruleta europea con multiplicadores aleatorios en Números de la Suerte seleccionados."
        },
        {
          q: "¿Cómo funcionan los multiplicadores de Lightning Roulette?",
          a: "Antes de cada giro, el juego selecciona 1 a 5 Números de la Suerte y asigna multiplicadores de 50x a 500x. Si una apuesta directa cae en uno de esos números, se aplica el pago del multiplicador."
        },
        {
          q: "¿Cuál es el RTP de Lightning Roulette?",
          a: "El RTP típico es alrededor del 97.30% para apuestas estándar y aproximadamente 97.10% para apuestas directas."
        },
        {
          q: "¿Son diferentes los pagos de Lightning Roulette respecto a la ruleta estándar?",
          a: "La mayoría de tipos de apuestas utilizan pagos estándar de ruleta europea. La principal diferencia es el pago basado en multiplicador en números directos seleccionados."
        },
        {
          q: "¿Es Lightning Roulette más volátil que la ruleta clásica?",
          a: "Sí. El sistema de multiplicador crea varianza más amplia a corto plazo, especialmente para jugadores que se enfocan en apuestas interiores."
        }
      ],
    
      conclusionTitle: "Impresión General",
      conclusionText:
        "Como revisión neutral de ruleta de relámpago, el juego puede describirse como ruleta europea estándar con una capa de multiplicador añadida que aumenta la varianza sin cambiar el formato principal. Para jugadores interesados en estadísticas en vivo de ruleta de relámpago, es un juego útil para rastrear porque la frecuencia de multiplicadores, selección de Números de la Suerte y patrones de pago pueden medirse a lo largo del tiempo."
    },
    lightningrouletteHistory: {
      panelTitle:  "Historial de giros",
      subtitle:    "Historial reciente con resultados de números suertudos.",
      occurredAt:  "Ocurrido en",
      spinResult:  "Resultado",
      multiplier:  "Multiplicador",
      firstLucky:  "Primero suertudo",
      secondLucky: "Segundo suertudo",
      thirdLucky:  "Tercero suertudo",
      fourthLucky: "Cuarto suertudo",
      fifthLucky:  "Quinto suertudo",
    },
    megaballReview: {
      title: "Tracker de Mega Ball, RTP y Análisis del Juego",
      intro: "Sigue las estadísticas, resultados y RTP de Mega Ball en tiempo real con herramientas de seguimiento en vivo. Revisa el historial de bolas, rondas de multiplicadores, conteo de ganadores y tendencias de pagos en un solo lugar.",
    
      quickOverviewTitle: "Resumen Rápido del Juego",
      tableParameter: "Parámetro",
      tableDetails: "Detalles",
      tableFeature: "Característica",
      tableDescription: "Descripción",
    
      specProvider: "Proveedor",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nombre del Juego",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95.30%",
      specReleaseYear: "Año de Lanzamiento",
      specReleaseYearValue: "2023",
      specGameType: "Tipo de Juego",
      specGameTypeValue: "Programa de Juego en Vivo tipo Bingo",
      specMinBet: "Rango de Apuesta",
      specMinBetValue: "Varía según el casino",
      specMaxWin: "Ganancia Máxima",
      specMaxWinValue: "Hasta 1.000.000x",
      specBalls: "Bolas Extraídas",
      specBallsValue: "20 bolas + Mega Ball + posible 2ª Mega Ball",
    
      trackerTitle: "Qué Puedes Seguir",
      trackerIntro: "En Tracksino, las herramientas de seguimiento de Mega Ball se centran en las métricas en vivo más útiles para el análisis ronda por ronda.",
      trackBallHistory: "Historial de Bolas",
      trackBallHistoryText: "Revisa todas las bolas extraídas en orden exacto.",
      trackMultiplier: "Multiplicador Mega Ball",
      trackMultiplierText: "Sigue los multiplicadores generados de 5x a 100x.",
      trackWinners: "Total de Ganadores",
      trackWinnersText: "Consulta cuántas cartas o jugadores ganadores fueron pagados.",
      trackPayouts: "Importes de Pago",
      trackPayoutsText: "Monitoriza los totales de pago y compara rondas activas.",
      trackLive: "Ver Mega Ball en Vivo",
      trackLiveText: "Abre el juego en vivo y compara la acción en curso con los datos del tracker.",
    
      aboutTitle: "¿Qué es Mega Ball?",
      aboutText1: "Mega Ball es un programa de juego en vivo de ritmo rápido que combina mecánicas de cartas estilo bingo con bolas que rebotan al estilo de la lotería. Una o dos rondas de bonificación pueden aparecer tras el sorteo principal, añadiendo emoción extra mediante multiplicadores.",
      aboutText2: "El objetivo es completar el mayor número de líneas posible en tus cartas. Más líneas completadas significan mayores pagos, y las rondas de multiplicadores pueden incrementar considerablemente las ganancias calificadas.",
    
      howToPlayTitle: "Cómo Jugar a Mega Ball",
      howToPlayText1: "En Mega Ball, se extraen 20 bolas una a una de una máquina automática. Los números coincidentes en las cartas del jugador se marcan automáticamente, y las cartas más cercanas a ganar se mueven a la parte superior de la interfaz.",
      howToPlayText2: "Tras la última bola, se genera un multiplicador Mega Ball de entre 5x y 100x. Si la Mega Ball completa una línea ganadora, el pago puede multiplicarse. En casos raros, también puede extraerse una 2ª Mega Ball, dando a los jugadores otra oportunidad de obtener una ganancia potenciada.",
      howToPlayBullets: [
        "Se extraen 20 bolas en rápida sucesión.",
        "Los números coincidentes se marcan automáticamente en todas las cartas activas.",
        "Las cartas más cercanas a completarse suben en la interfaz.",
        "Se genera un multiplicador Mega Ball tras el sorteo principal.",
        "Una rara 2ª Mega Ball puede crear otra oportunidad de pago multiplicado."
      ],
    
      payoutTitle: "Pagos de Mega Ball",
      payoutIntro: "Los pagos de Mega Ball dependen de cuántas líneas se completen en una sola carta. Las líneas horizontales, verticales y diagonales cuentan para el premio final.",
      payoutColLines: "Líneas Completadas",
      payoutColPrize: "Pago",
      payoutColNote: "Cómo Funciona",
      payout1Line: "1 línea horizontal, vertical o diagonal.",
      payout2Lines: "2 líneas completadas en una carta.",
      payout3Lines: "3 líneas completadas en una carta.",
      payout4Lines: "4 líneas completadas en una carta.",
      payout5Lines: "5 líneas completadas en una carta.",
      payout6Lines: "6 líneas completadas en una carta.",
    
      comparisonTitle: "Mega Ball de un Vistazo",
      compColArea: "Área",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Por Qué Importa",
      compAreaBase: "Formato base",
      compMegaBallBase: "Programa de juego en vivo tipo bingo",
      compMeaningBase: "Combina la completación de cartas con un sorteo en vivo.",
      compAreaBonus: "Rondas de bonificación",
      compMegaBallBonus: "Mega Ball y rara 2ª Mega Ball",
      compMeaningBonus: "Añade potencial de multiplicador tras el sorteo principal.",
      compAreaTracking: "Valor de seguimiento",
      compMegaBallTracking: "Alto",
      compMeaningTracking: "El orden de bolas, ganadores y pagos son fáciles de revisar ronda a ronda.",
      compAreaMaxWin: "Potencial máximo de ganancia",
      compMegaBallMaxWin: "Hasta 1.000.000x",
      compMeaningMaxWin: "Las mayores ganancias dependen de las líneas completadas más los efectos del multiplicador.",
    
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          q: "¿Puedo seguir los resultados de Mega Ball en vivo?",
          a: "Sí. Un tracker de Mega Ball puede mostrar el historial de bolas, pagos recientes, conteo de ganadores y resultados de multiplicadores ronda por ronda."
        },
        {
          q: "¿Cómo funciona el multiplicador de Mega Ball?",
          a: "Tras el sorteo principal, se genera un multiplicador de entre 5x y 100x. Si la Mega Ball completa una línea ganadora, el pago calificado puede multiplicarse según corresponda."
        },
        {
          q: "¿Qué es la 2ª Mega Ball?",
          a: "La 2ª Mega Ball es una extracción extra poco frecuente que da a los jugadores otra oportunidad de completar una línea ganadora con potencial de multiplicador."
        },
        {
          q: "¿Mega Ball se parece más al bingo o a un programa de juego?",
          a: "Combina ambos formatos. La mecánica principal se basa en líneas de cartas, pero la presentación y el ritmo siguen el estilo de un programa de casino en vivo."
        },
        {
          q: "¿Pueden los datos del tracker predecir resultados futuros?",
          a: "No. Los datos del tracker son útiles para revisar rondas recientes y estadísticas en vivo, pero cada sorteo sigue siendo independiente."
        }
      ]
    },
    
    dreamcatcherReview: {
      title: "Dream Catcher Live: estadísticas en tiempo real, resultados y guía completa del juego",
      intro:
        "Dream Catcher es el juego insignia de Money Wheel de Evolution Gaming que transformó el entretenimiento de casino en vivo cuando se lanzó en 2017. Esta experiencia al estilo “Wheel of Fortune” combina la emoción de un programa de TV con apuestas de dinero real, todo transmitido en ultra HD desde estudios profesionales en Letonia.\n\nA diferencia de los juegos de mesa tradicionales, Dream Catcher no requiere conocimientos previos: solo apuestas a un número, ves girar la rueda y cobras si cae en tu elección. Además, los segmentos con multiplicadores pueden crear oportunidades de pagos enormes de hasta 20.000x tu apuesta.",
      playbtn: "Jugar",
      heroAlt: "Logo de Dream Catcher (rueda de dinero en vivo)",
    
      quickOverviewTitle: "Resumen rápido del juego",
      specFeature: "Especificación",
      specDetails: "Detalles",
      specProvider: "Proveedor",
      specProviderValue: "Evolution Gaming",
      specYear: "Año de lanzamiento",
      specYearValue: "2017",
      specType: "Tipo de juego",
      specTypeValue: "Rueda de dinero en vivo",
      specRtp: "RTP",
      specRtpValue: "96,58% (óptimo)",
      specBetRange: "Rango de apuesta",
      specBetRangeValue: "€0,10 – €1.000",
      specMaxWin: "Ganancia máxima",
      specMaxWinValue: "20.000x la apuesta",
      specSegments: "Segmentos totales",
      specSegmentsValue: "54",
      specLocation: "Ubicación del streaming",
      specLocationValue: "Riga, Letonia",
    
      howWorksTitle: "Cómo funciona Dream Catcher",
      howWorksText:
        "El juego utiliza una rueda vertical enorme con 54 segmentos de colores. Un presentador en vivo la hace girar e interactúa con los jugadores a través del chat, creando una atmósfera auténtica de game show.",
    
      wheelDistributionTitle: "Distribución de segmentos de la rueda",
      wheelColNumber: "Número",
      wheelColSegments: "Segmentos",
      wheelColPayout: "Pago",
      wheelColProbability: "Probabilidad",
      wheelDistributionNote:
        "Los segmentos numerados pagan exactamente lo que muestran: si cae en 5, cobras 5:1 sobre tu apuesta. Así de simple.",
      multiplier2xLabel: "Multiplicador 2x",
      multiplier7xLabel: "Multiplicador 7x",
    
      multiplierTitle: "Mecánica de multiplicadores",
      multiplierIntro:
        "Los dos segmentos de multiplicador (plata 2x y oro 7x) son donde el juego se vuelve más interesante. No puedes apostar directamente a ellos, pero cuando la rueda cae en uno:",
      multiplierBullets: [
        "Todas las apuestas actuales siguen activas",
        "La rueda vuelve a girar",
        "El siguiente número que salga se multiplica"
      ],
      multiplierNote:
        "Los multiplicadores pueden encadenarse. Si cae 7x, luego 7x otra vez y finalmente 40, el pago sería 1.960x. El máximo teórico implica varios multiplicadores consecutivos antes de caer en 40, llevando el potencial hasta 20.000x.",
    
      statsTrackingTitle: "Estadísticas y resultados de Dream Catcher en vivo",
      statsTrackingIntro:
        "Hacer seguimiento de las estadísticas de Dream Catcher ayuda a entender el comportamiento del juego a lo largo del tiempo. Aunque cada giro es independiente, analizar los resultados muestra si la rueda se mantiene cerca de las probabilidades esperadas.",
      trackingBullets: [
        "Estado actual del multiplicador (activo o no)",
        "Giros desde el último multiplicador",
        "Frecuencia de números en diferentes periodos",
        "Segmentos calientes y fríos según los resultados recientes en tiempo real"
      ],
      statsTrackingNote:
        "Muchos jugadores usan paneles de estadísticas en vivo para observar tendencias, pero recuerda: los resultados anteriores no influyen en los giros futuros.",
    
      strategiesTitle: "Estrategias de apuesta a considerar",
      strategies: [
        {
          title: "Reparte tus apuestas",
          text:
            "Cubrir varios segmentos aumenta la frecuencia de aciertos. Apostar a 1, 2 y 5 al mismo tiempo significa ganar en alrededor del 83% de los giros (excluyendo multiplicadores)."
        },
        {
          title: "Enfócate en pagos altos",
          text:
            "Apostar a 10, 20 o 40 implica menos aciertos, pero pagos mayores cuando salen. Un solo acierto en 40 puede compensar muchas rondas perdidas."
        },
        {
          title: "Bajas apuestas, más giros",
          text:
            "El mínimo de €0,10 permite estirar un bankroll pequeño durante cientos de giros. Más giros = más oportunidades de atrapar cadenas de multiplicadores."
        }
      ],
    
      rtpBreakdownTitle: "RTP por tipo de apuesta",
      rtpBreakdownIntro:
        "No todas las apuestas tienen el mismo retorno teórico.",
      rtpColBet: "Apuesta",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "Los números bajos ofrecen mejor valor a largo plazo, mientras que el 40 tiene mayor varianza y un RTP inferior.",
    
      whyLoveTitle: "Por qué a los jugadores les encanta Dream Catcher",
      whyLoveBullets: [
        "Fácil de entender – Sin reglas complejas",
        "Energía de game show – Presentadores profesionales mantienen el ritmo",
        "Emoción por multiplicadores – Cada giro puede activar una cadena",
        "Apuestas accesibles – Desde €0,10 hasta €1.000 por giro",
        "Optimizado para móvil – Experiencia completa en cualquier dispositivo"
      ],
    
      faqTitle: "Preguntas frecuentes",
      faq: [
        {
          q: "¿Puedo ver estadísticas en vivo de Dream Catcher durante la partida?",
          a: "Sí. La interfaz del juego muestra resultados recientes y números ganadores. Los trackers de terceros ofrecen análisis histórico más profundo con miles de giros."
        },
        {
          q: "¿Qué ocurre si la rueda cae en multiplicadores repetidamente?",
          a: "Los multiplicadores se acumulan. Dos 7x seguidos y luego un número significan que ese número paga 49x su tasa normal. Las cadenas son raras, pero generan las mayores ganancias."
        },
        {
          q: "¿Se pueden predecir los resultados en tiempo real de Dream Catcher?",
          a: "No. Cada giro utiliza un mecanismo aleatorio certificado. Seguir estadísticas puede ayudarte a gestionar tus apuestas, pero no puede predecir el resultado."
        },
        {
          q: "¿Por qué la apuesta al 40 tiene menor RTP que otros números?",
          a: "Porque solo hay un segmento de 40 entre 54; aparece aproximadamente el 1,9% de las veces. El pago 40:1 no compensa completamente esa rareza, por eso el margen de la casa es mayor."
        },
        {
          q: "¿Cómo se compara el RTP de Dream Catcher con el de las slots?",
          a: "El RTP óptimo de 96,58% está dentro del rango típico de slots online (94–97%), lo que lo hace competitivo para un formato en vivo."
        }
      ]
    },
    dreamcatcherStatsExtra: {
      sectionTitle: "Estadísticas de Dream Catcher",
      trackedMetaPrefix: "Últimas 72 horas",
      latestTopTitle: "Últimos Multiplicadores Máximos",
      latestTopText: "Los últimos multiplicadores máximos destacan las mayores ganancias recientes.",
      bestWinsTitle: "Mejores Ganancias Individuales",
      bestWinsText: "Consulta las mejores ganancias de una sola tirada del periodo actual.",
      wheelStatsTitle: "Estadísticas de Multiplicadores de la Rueda",
      wheelStatsText: "Mira con qué frecuencia caen los multiplicadores de la rueda durante el periodo analizado.",
      wheelMatchedTitle: "Multiplicadores de la Rueda Acertados",
      wheelMatchedText: "Sigue la proporción de tiradas que coincidieron con un multiplicador de la rueda.",
      spinHistoryTitle: "Historial de Tiradas",
      spinHistoryText: "Revisa las tiradas recientes de Dream Catcher y su rendimiento.",
      finished: "Finalizado",
      spinResult: "Resultado",
      outcome: "Resultado",
      player: "Jugador",
      wonAmount: "Cantidad Ganada",
      multiplier: "Multiplicador",
      optimalBet: "Apuesta Óptima",
      bestBet: "Mejor Apuesta",
      timesWon: "Veces Ganadas",
      totalProfit: "Beneficio Total",
      match: "Coincide",
      noMatch: "No Coincide"
    },
    gamePanels: {
      temperatureSubtitle:
        "La temperatura de segmentos destaca resultados calientes y fríos en tiempo real según las tiradas recientes y la probabilidad esperada.",
      temperatureSpinsSince: "hace {n} tiradas",
    
      historySubtitle:
        "Consulta el historial de giros más reciente con resultados en tiempo real, multiplicadores, ganadores y pagos.",
    
      rtpBasedOn: "Basado en las últimas 1.000 tiradas",
    
      summaryTotalSpinsToday: "Total de giros hoy",
      summaryBonusRounds: "Rondas bonus",
      summaryBiggestMultiplier: "Multiplicador más alto",
      summaryAvgPayout: "Pago prom.",
    
      occurredAt: "Ocurrió",
      slotResult: "Resultado del slot",
      spinResult: "Resultado del giro",
      specialResult: "Resultado especial",
      multiplier: "Multiplicador",
      totalWinners: "Ganadores",
      totalPayout: "Pago total",
    
      watch: "Ver"
    },
    homeSeo: {
      sectionTitle: "Sobre Nuestra Plataforma de Estadísticas de Casino en Vivo",
      whoTitle: "Quiénes Somos",
      whoText1: "Somos una plataforma independiente de analítica de juegos de casino en vivo que recopila, procesa y visualiza estadísticas en tiempo real.",
      whoText2: "Nuestro objetivo es ofrecer a los jugadores datos transparentes basados en resultados reales de los juegos, ayudando a entender mejor las estadísticas de casino en vivo y los resultados recientes.",
      howTitle: "Cómo Recopilamos la Información",
      howText1: "Utilizamos sistemas automatizados de recopilación de datos que rastrean los resultados de los juegos de casino en vivo en tiempo real.",
      howText2: "Los datos provienen de fuentes abiertas de transmisión, streams de juego en vivo e interfaces públicas de los proveedores, lo que nos permite seguir los resultados de los juegos y los resultados en tiempo real de forma continua.",
      howText3: "Todos los resultados pasan por un procesamiento adicional y por una verificación algorítmica para minimizar retrasos y mantener una alta precisión estadística. La plataforma utiliza tecnologías modernas de datos, incluida la sincronización de flujos, el parsing automatizado y modelos analíticos."
    },
    monopolyReview: {
      title: "Monopoly Live Reseña: La experiencia definitiva de game show de casino en vivo",
      intro: "Bienvenido a la guía definitiva de Monopoly Live, uno de los juegos con crupier en vivo más populares jamás creados. Desarrollado por la legendaria Evolution Gaming, este título combina una enorme rueda de dinero con una increíble ronda de bonificación 3D de realidad aumentada protagonizada por Mr. Monopoly. Tanto si quieres jugar a Monopoly Live online como si solo deseas consultar las estadísticas más recientes del juego, aquí encontrarás toda la información que necesitas.",
      playbtn: "Jugar",
      heroAlt: "Rueda de Monopoly Live con presentadora en vivo y estudio del game show",
      tableFeature: "Característica",
      tableDetails: "Detalles",
      gameNameLabel: "Nombre del juego",
      providerLabel: "Proveedor",
      gameTypeLabel: "Tipo de juego",
      rtpLabel: "RTP",
      maxWinLabel: "Ganancia máxima",
    
      gameTypeValue: "Game Show de Casino en Vivo",
      rtpValue: "Hasta 96,23%",
      maxWinValue: "$500.000 (o equivalente en multiplicador)",
    
      sectionsTitle: "Características clave de Monopoly Live",
    
      wheelTitle: "Monopoly Live La rueda del dinero (juego base)",
      wheelText: "El núcleo de la experiencia de casino en vivo de Monopoly Live. Un presentador real gira una enorme rueda vertical con 54 segmentos. Los jugadores apuestan a números (1, 2, 5, 10) para ganar pagos instantáneos en efectivo según el número que salga.",
    
      chanceTitle: "Monopoly Live El segmento 'Chance'",
      chanceText: "Si la rueda cae en un segmento 'Chance', los jugadores reciben un premio instantáneo en efectivo o un emocionante bono multiplicador. Si aparece un multiplicador, el presentador vuelve a girar la rueda y tu próxima victoria se multiplica.",
    
      bonus3dTitle: "Monopoly Live La ronda de bonificación 3D",
      bonus3dText: "Lo más destacado del juego Monopoly Live. Si apuestas a '2 ROLLS' o '4 ROLLS' y la rueda se detiene allí, Mr. Monopoly entra en un mundo 3D de juego de mesa, recogiendo premios, multiplicadores y evitando impuestos.",
    
      howToPlayTitle: "Cómo jugar a Monopoly Live",
      howToPlayIntro: "Empezar en un casino online con Monopoly Live es increíblemente sencillo. Solo sigue estos pasos:",
      step1: "Haz tus apuestas: Tienes una breve ventana de apuestas para colocar tus fichas en 1, 2, 5, 10, '2 Rolls' o '4 Rolls'.",
      step2: "El giro: El crupier en vivo gira la rueda. Puedes ver Monopoly Live mientras la rueda se ralentiza.",
      step3: "El pago: Si la rueda se detiene en tu número, ganas. Si cae en un juego de bonificación y has apostado en él, entras en la ronda 3D.",
    
      statsTitle: "Monopoly Live estadísticas, resultados y trackers",
      statsText1: "Para muchos entusiastas serios del iGaming, hacer seguimiento del juego es tan importante como jugar. Como este es un juego de probabilidad, muchos jugadores utilizan un tracker de Monopoly Live para seguir las tendencias del juego.",
      statsText2: "Al analizar las estadísticas de Monopoly Live, puedes ver la frecuencia de las rondas de bonificación, los multiplicadores medios y los números fríos/calientes. Consultar el historial de Monopoly Live te permite ver los resultados de Monopoly Live de hoy. Aunque los resultados pasados no garantizan resultados futuros, observar un tablero de puntuación de casino de Monopoly Live ofrece a los jugadores una idea de cómo se está comportando la rueda durante su sesión. Recuerda siempre jugar de forma responsable, independientemente de lo que muestren los resultados de Monopoly Live.",
      statsNote: "Nota: Si te gusta este formato, quizá también quieras descubrir Monopoly Big Baller live, un spin-off estilo bingo que también incluye emocionantes resultados de Monopoly Big Baller hoy en vivo.",
    
      freePlayTitle: "Monopoly Live ¿Se puede jugar gratis?",
      freePlayText: "Muchos jugadores buscan una demo de casino de Monopoly Live o Monopoly Live gratis. Como se trata de un juego en vivo de estudio con crupieres reales, no hay una demo jugable con dinero ficticio. Sin embargo, puedes entrar en cualquier casino online con Monopoly Live, abrir el juego y simplemente ver el stream de Monopoly Live gratis para aprender las reglas antes de apostar dinero real.",
    
      faqTitle: "Preguntas frecuentes (FAQ)",
      faq: [
        {
          q: "Monopoly Live ¿Dónde puedo encontrar resultados y estadísticas?",
          a: "Puedes encontrar las estadísticas de Monopoly Live directamente en la interfaz del juego, que muestra los segmentos ganadores más recientes. Para un análisis más profundo, muchos sitios web externos de trackers de casino ofrecen un historial completo de Monopoly Live."
        },
        {
          q: "Monopoly Live ¿Hay una app de casino disponible?",
          a: "No existe una apk independiente de Monopoly Live. Sin embargo, puedes jugar perfectamente en móvil descargando la app oficial de cualquier casino con licencia que ofrezca títulos de Evolution Gaming."
        },
        {
          q: "Monopoly Live ¿Cuál es la diferencia entre este juego y Monopoly Big Baller?",
          a: "Aunque ambos incluyen a Mr. Monopoly y rondas de bonificación en 3D, el juego original utiliza una rueda giratoria de dinero, mientras que Monopoly Big Baller live casino usa una máquina de extracción de bolas estilo bingo."
        },
        {
          q: "Monopoly Live ¿Cómo entro en el juego de bonificación 3D?",
          a: "Para participar en el juego de mesa 3D, debes apostar en las casillas de apuesta '2 ROLLS' o '4 ROLLS'. Si la rueda se detiene en uno de esos segmentos, comienza la ronda de bonificación."
        },
        {
          q: "Monopoly Live ¿Puedo interactuar con el crupier en vivo?",
          a: "Sí. El juego incluye un chat en vivo de casino de Monopoly Live donde puedes hablar con el presentador y con otros jugadores, haciendo que la experiencia de Monopoly Live sea muy social y entretenida."
        },
        {
          q: "Monopoly Live ¿Los resultados están amañados?",
          a: "No. Monopoly Live de Evolution Gaming es sometido a pruebas exhaustivas y cuenta con licencia de las principales autoridades del juego. La rueda es completamente física y aleatoria, lo que garantiza que cada resultado de Monopoly Live sea 100% justo."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Tiradas de dados de nivel bajo",
      diceRollsMidTitle: "Monopoly Live Tiradas de dados de nivel medio",
      diceRollsHighTitle: "Monopoly Live Tiradas de dados de nivel alto",
      trackedMeta: "Últimas 6 horas • 258 giros",
    
      boardMovesTitle: "Monopoly Live Estadísticas de movimientos en el tablero",
      bonusGameStats: "Estadísticas del juego de bonificación",
      doublesRolled: "Dobles obtenidos",
      avgBoardRolls: "Promedio de tiradas en el tablero por juego de bonificación",
    
      landingStatsTitle: "Monopoly Big Baller Estadísticas de casillas de aterrizaje",
    
      bestIndividualWinsTitle: "Monopoly Live Mejores ganancias individuales",
      latestTopMultipliersTitle: "Monopoly Live Multiplicadores máximos más recientes",
    
      finished: "Finalizado",
      player: "Jugador",
      wonAmount: "Importe ganado",
      multiplier: "Multiplicador",
      bigWinClip: "Clip de gran victoria",
      bonusRound: "Ronda de bonificación",
      watchClip: "Ver clip",
      biggestWinsGallery: "Galería de mayores ganancias"
    },
    seo: {
      lightningroulette: {
        title: "Lightning Roulette estadísticas, RTP y resultados live",
        description: "Consulta estadísticas de Lightning Roulette: RTP, multiplicadores, Lucky Numbers, historial de giros, pagos y resultados live online."
      },

      home: {
        title: "Casino Score Live 🔥 Live Stats y Real-Time Results [2026]",
        description: "Casino Score Live es tu centro definitivo de live stats y real-time results en 2026. Analiza RTP, sigue hot or cold streaks y toma decisiones de apuestas seguras."
      },
      megaball:{ 
        title: "Mega Ball estadísticas en vivo y resultados – Juega online + RTP y tendencias",
        description: "Estadísticas y resultados en vivo de Mega Ball con análisis de RTP. Sigue tendencias, multiplicadores y resultados en tiempo real. Juega online o prueba demo."
      },    
      crazytime: {
        title: "Estadísticas de Crazy Time - Resultados en Vivo y Rastreador de Multiplicadores",
        description: "Estadísticas en vivo de Crazy Time actualizadas en tiempo real. Sigue los resultados de la rueda, rondas bonus y multiplicadores de hasta 2000x. Usa los datos para construir tu estrategia ganadora. ¡Compruébalo ahora!"
      },
      monopoly: {
        title: "Monopoly Live Estadísticas 2026 | Rastreador Oficial de Resultados",
        description: "Monopoly Live estadísticas oficiales 2026. Resultados en tiempo real, historial verificado y datos de Evolution Gaming. Sigue resultados y juega seguro." },
        dreamcatcher: {
          title: "Dream Catcher Resultados & Live Stats 2026 - Scores en Tiempo Real 🎰",
          description: "Dream Catcher resultados de hoy, estadísticas en vivo y marcadores en tiempo real. Consulta historial, estadísticas ganadoras y tendencias 2026. Acceso a cada giro."
        }
    },
    
    crazytimeStream: {
      title: "Transmisión en Vivo de Crazy Time",
      subtitle: "Mira la transmisión en vivo de Crazy Time directamente en esta página.",
      liveLabel: "Transmisión en Vivo",
      watchLivestream: "Ver Transmisión en Vivo"
    },
    crazytimeReview: {
      faqTitle: "Preguntas Frecuentes",
      faq: [
        {
          q: "¿Crazy Time es un juego de habilidad o de azar?",
          a: "Crazy Time es principalmente un juego de azar. Aunque los jugadores pueden usar estadísticas y herramientas de seguimiento para comprender mejor los resultados recientes, cada ronda sigue siendo independiente."
        },
        {
          q: "¿Cuál es el multiplicador máximo en Crazy Time?",
          a: "El potencial máximo anunciado en Crazy Time puede alcanzar hasta 20,000x durante la ronda de bonificación principal de Crazy Time."
        },
        {
          q: "¿Puedo participar en rondas de bonificación si no aposté directamente en ellas?",
          a: "Si las reglas del juego y la configuración actual lo permiten a través de mecánicas de bonificación como entrada mínima o efectos de Top Slot, los jugadores aún pueden entrar en ciertos resultados de bonificación con un multiplicador reducido."
        },
        {
          q: "¿Las estadísticas en vivo de Crazy Time son predictivas?",
          a: "No. Las estadísticas en vivo ayudan a visualizar la actividad reciente, pero no predicen resultados futuros. Cada giro es independiente."
        }
      ],
      whatIsTitle: "¿Qué es Crazy Time?",
      whatIsText: "Crazy Time es un juego de casino en vivo desarrollado por Evolution Gaming, lanzado en 2020. Combina un formato de rueda de dinero con cuatro rondas de bonificación interactivas, ofreciendo una de las experiencias de casino en vivo más atractivas disponibles hoy en día.",
    
      tableParameter: "Parámetro",
      tableDetails: "Detalles",
      gameName: "Nombre del Juego",
      provider: "Proveedor",
      rtp: "RTP",
      releaseYear: "Año de Lanzamiento",
      gameType: "Tipo de Juego",
      minBet: "Apuesta Mín.",
      maxBet: "Apuesta Máx.",
      volatility: "Volatilidad",
      gameTypeValue: "Show de Juego en Vivo",
      volatilityValue: "Alta",
    
      howToPlayTitle: "Cómo Jugar a Crazy Time",
      howToPlayText: "El juego en vivo de Crazy Time sigue un formato sencillo:",
      step1: "Haz tu apuesta en uno o más segmentos de la rueda antes de que se acabe el tiempo",
      step2: "Observa girar la rueda — un presentador en vivo gestiona toda la sesión en tiempo real",
      step3: "Ganas si la rueda cae en el segmento que elegiste",
      step4: "Activa una ronda de bonificación si el indicador cae en un segmento de bonificación",
    
      wheelBreakdownTitle: "Desglose de Segmentos de la Rueda",
      wheelSegment: "Segmento",
      wheelOccurrences: "Apariciones en la Rueda",
      wheelMultiplier: "Multiplicador",
      upTo2000x: "Hasta 2000x",
      upTo10000x: "Hasta 10,000x",
      upTo20000x: "Hasta 20,000x",
    
      bonusRoundsTitle: "Rondas de Bonificación de Crazy Time",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Una galería de tiro con 108 multiplicadores aleatorios ocultos detrás de símbolos. Los jugadores eligen uno para revelar su premio.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Se lanza una simple moneda de dos caras. Cada cara muestra un multiplicador — rojo o azul. Rápido, limpio y emocionante.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Un enorme muro físico de Pachinko suelta un disco desde arriba. Rebota a través de clavijas y cae en un multiplicador en la parte inferior. Puede duplicarse infinitamente hasta que se alcance un multiplicador no doble.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonificación)",
      crazyTimeBonusText: "El evento principal. Una rueda virtual masiva con tres indicadores gira dentro de un mundo digital. Los jugadores eligen un indicador antes del giro. La recompensa potencial más alta alcanza 20,000x.",
    
      rulesTitle: "Reglas del Juego Crazy Time: Puntos Clave",
      rule1: "Puedes apostar en múltiples segmentos simultáneamente",
      rule2: "El Top Slot sobre la rueda principal añade un multiplicador o activa la entrada de bonificación con multiplicadores potenciados",
      rule3: "Si no apostaste en un segmento de bonificación pero cae, igualmente entras en la bonificación (con multiplicador mínimo)",
      rule4: "Todos los multiplicadores de bonificación se multiplican por tu apuesta original, no solo una recompensa fija",
    
      statsTitle: "Estadísticas y Resultados en Vivo de Crazy Time",
      statsText: "Comprender las estadísticas de Crazy Time ayuda a informar tus decisiones de sesión. La mayoría de las plataformas muestran un rastreador de estadísticas en vivo directamente en la interfaz del juego.",
      typicalStatsTitle: "Estadísticas Típicas que Verás:",
      stat1: "Resultados de los últimos 100 giros — distribución de cada segmento",
      stat2: "Frecuencia de bonificación — con qué frecuencia se activó cada ronda de bonificación",
      stat3: "Historial de multiplicadores — los mejores multiplicadores otorgados en rondas recientes",
      stat4: "Segmentos calientes y fríos — indicadores visuales de la frecuencia de los segmentos",
      tip: "Consejo profesional:",
      tipText: "El rastreador de estadísticas de Crazy Time no es una herramienta predictiva — los resultados pasados no influyen en los giros futuros. El RNG y la rueda en vivo operan de forma independiente en cada ronda.",
    
      whyPlayTitle: "¿Por Qué Jugar a Crazy Time Online?",
      prosTitle: "🏆 Ventajas:",
      pro1: "Calidad de producción excepcional de Evolution Gaming",
      pro2: "Cuatro juegos de bonificación distintos — nunca es repetitivo",
      pro3: "Potencial de multiplicador máximo masivo (hasta 20,000x)",
      pro4: "Disponible 24/7 en prácticamente todos los principales casinos en vivo online",
      pro5: "Rastreador de estadísticas en vivo transparente integrado en la interfaz",
    
      consTitle: "⚠️ Desventajas:",
      con1: "Alta volatilidad — son posibles largas rachas de pérdidas",
      con2: "El juego demo real no está disponible (limitación del formato en vivo)",
      con3: "Los multiplicadores máximos son raros por diseño"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Estadísticas Avanzadas de Bonos de Crazy Time",
    
      flapperTitle: "Flapper de Bono de Crazy Time",
      flapperText: "Compara los multiplicadores promedio de los tres colores del flapper de Crazy Time. Estas cifras ofrecen una visión rápida del rendimiento a corto plazo frente al promedio a largo plazo.",
      avgAlways: "Promedio histórico",
      flapperFootnote: "El marcador muestra la referencia del multiplicador promedio a largo plazo para el color seleccionado del flapper, según los datos históricos registrados.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Compara los resultados rojo y azul de Coin Flip con multiplicadores promedio y frecuencia de aparición frente a las expectativas a largo plazo.",
      avgMultiplier: "Multiplicador prom.",
      frequency: "Frecuencia",
      vsAvg: "vs promedio",
      coinFlipFootnote: "El marcador muestra la referencia de frecuencia promedio a largo plazo para el color seleccionado según los datos registrados.",
    
      cashHuntSymbolsTitle: "Símbolos de Cash Hunt",
      cashHuntSymbolsText: "Este desglose muestra el multiplicador promedio y la frecuencia de aparición de cada símbolo objetivo de Cash Hunt.",
      times: "veces",
    
      recentCashHuntTitle: "Cash Hunt: Multiplicadores Recientes",
      recentCashHuntText: "Sigue los multiplicadores recientes de las rondas de Cash Hunt. Las celdas destacadas marcan los resultados recientes más fuertes y más débiles.",
    
      bestBetsTitle: "Mejores Apuestas Individuales",
      bestBetsText: "Esta tabla destaca las ganancias individuales más fuertes del período seleccionado, incluyendo jugador, pago, resultado y multiplicador.",
      date: "Fecha",
      result: "Resultado",
      player: "Jugador",
      payout: "Pago",
      multiplier: "Multiplicador",
      view: "Ver",
    
      latestMaxTitle: "Últimos Multiplicadores Máximos",
      latestMaxText: "Estos resultados superiores recientes de bonus muestran los multiplicadores más altos alcanzados durante el período seleccionado.",
      clip: "Ver Clip",
      biggestWinsGallery: "Galería de Grandes Ganancias",
    
      yellow: "Amarillo",
      blue: "Azul",
      green: "Verde",
      red: "Rojo",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Jugar 🎰"
    },
    
    gamePage: {
      statisticsTitleSuffix: "Estadísticas",
      subtitlePrefix: "Sigue resultados, historial y estadísticas en tiempo real de",
      playCta: "Jugar ahora"
    },
    nav: {
      home: "Inicio",
      liveGames: "Juegos en vivo"
    },
    home: {
      heroTitleBefore: "Casino en Vivo",
      heroTitleAccent: "Estadísticas",
      heroTitleAfter: "& Resultados en Tiempo Real",
      heroText: "Estadísticas de casino en vivo, resultados de juegos y resultados en tiempo real para tus game shows favoritos. Sigue el RTP, las rachas calientes o frías y las mayores ganancias — 100% gratis, sin necesidad de cuenta.",      liveGames: "Juegos en vivo",
      featuresTitle: "Nuestras funciones",
      testimonialsTitle: "Nuestros testimonios"
    },
    features: {
      noDownloadTitle: "Sin descargas",
      noDownloadText: "Consulta todos los datos al instante desde tu navegador en ordenador, tablet o móvil. No necesitas descargar nada ni crear una cuenta.",
      accurateDataTitle: "Datos precisos",
      accurateDataText: "Seguimiento automatizado de cada tirada en tiempo real para que puedas analizar los resultados con confianza.",
      freeTitle: "100% gratis",
      freeText: "Tracksino es completamente gratuito. Abre cualquier juego y revisa al instante resultados recientes y estadísticas clave."
    },
    footer: {
      games: "Juegos",
      moreGames: "Más juegos",
      resources: "Recursos",
      faq: "FAQ",
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      contact: "Contáctanos",
      description: "Sigue juegos de casino en vivo en tiempo real. Historial de tiradas, estadísticas y grandes ganancias."
    },
    homeFaq: {
      faqTitle: "Preguntas frecuentes sobre estadísticas de casino en vivo",
      faqIntro: "Respuestas sobre live casino statistics, game results y real-time results en nuestra plataforma.",
      faq: [
        {
          q: "¿Qué son las estadísticas de casino en vivo?",
          a: "Son datos basados en resultados reales de los juegos y en resultados en tiempo real de las mesas en vivo."
        },
        {
          q: "¿Cómo recopiláis los resultados de los juegos?",
          a: "Monitorizamos streams públicos, interfaces de proveedores y fuentes de emisión con sistemas automáticos."
        },
        {
          q: "¿Con qué frecuencia se actualizan los resultados en tiempo real?",
          a: "Los resultados en tiempo real se actualizan de forma continua y se verifican antes de mostrarse en la web."
        },
        {
          q: "¿Las estadísticas pueden predecir el siguiente resultado?",
          a: "No. Las estadísticas ayudan a entender los resultados y tendencias recientes, pero no predicen el futuro."
        }
      ]
    },
    common: {
      player: "Jugador",
      verifiedUser: "Usuario verificado",
      liveNow: "En vivo",
      hour: "hora",
      hours: "horas",
      spins: "tiradas"
    },
    tabs: {
      temperature: "Temperatura",
      history: "Historial",
      stats: "Estadísticas",
      bigwins: "Grandes premios",
      review: "Reseña",
      stream: "Stream",
    }
  },

  it: {
    lightningrouletteReview: {
      title: "Recensione di Lightning Roulette, RTP e Statistiche dal Vivo",
      intro:
        "Lightning Roulette è una variante della roulette con croupier dal vivo basata sulla ruota europea. Il gioco segue le regole standard della roulette, ma ogni turno può assegnare moltiplicatori casuali a numeri selezionati come Numeri Fortunati, creando una versione ad alta varianza della roulette dal vivo tradizionale.",
    
      quickOverviewTitle: "Panoramica Rapida del Gioco",
      tableParameter: "Parametro",
      tableDetails: "Dettagli",
    
      specProvider: "Provider",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nome del Gioco",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Anno di Rilascio",
      specReleaseYearValue: "2018",
      specGameType: "Tipo di Gioco",
      specGameTypeValue: "Roulette con Croupier dal Vivo",
      specWheel: "Formato della Ruota",
      specWheelValue: "Roulette Europea (singolo zero)",
      specRtp: "RTP",
      specRtpValue: "97.30% su scommesse standard; 97.10% su scommesse dirette",
      specMinBet: "Puntata Minima",
      specMinBetValue: "$0.20",
      specMaxBet: "Puntata Massima",
      specMaxBetValue: "$10,000",
      specMaxWin: "Moltiplicatore Massimo",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Numeri Fortunati",
      specLuckyNumbersValue: "1 a 5 per turno",
      specVolatility: "Volatilità",
      specVolatilityValue: "Media-alta",
      specMobile: "Gioco Mobile",
      specMobileValue: "Supportato",
    
      aboutTitle: "Cos'è Lightning Roulette?",
      aboutText1:
        "Lightning Roulette è un gioco di roulette dal vivo che mantiene la ruota europea a singolo zero e il layout standard delle scommesse, mentre aggiunge eventi di moltiplicatori casuali prima di ogni giro. Questo formato è spesso descritto come roulette fulmine dal vivo o roulette fulmine online perché il gioco combina un croupier di studio reale con una meccanica di moltiplicatore generata prima che la pallina atterri.",
      aboutText2:
        "In termini pratici, la differenza rispetto alla roulette classica è semplice: uno a cinque numeri diventano Numeri Fortunati ogni turno, e se una scommessa diretta cade su uno di essi, la vincita utilizza il moltiplicatore assegnato invece della puntata diretta regolare. Questo è il concetto centrale alla base della maggior parte delle pagine di recensione della roulette fulmine e dei tracker statistici.",
    
      howToPlayTitle: "Come Giocare a Lightning Roulette",
      howToPlayText1:
        "Come giocare a Lightning Roulette è semplice per chiunque abbia familiarità con la roulette. I giocatori piazzano scommesse durante la fase di scommessa, quindi il gioco rivela i Numeri Fortunati e i loro moltiplicatori prima che il giro dal vivo inizi.",
      howToPlayText2:
        "Le regole della roulette fulmine si basano sulla roulette europea, quindi le scommesse esterne, dozzine, colonne e scommesse interne funzionano come previsto. Il meccanismo aggiuntivo riguarda solo le scommesse dirette che cadono su Numeri Fortunati selezionati.",
      howToPlayBullets: [
        "Scegli i valori delle fiches e piazza le scommesse sul layout della roulette.",
        "Attendi che il gioco assegni 1 a 5 Numeri Fortunati con moltiplicatori casuali.",
        "Guarda il croupier girare la ruota e rilasciare la pallina.",
        "Se la tua scommessa diretta colpisce un Numero Fortunato, il turno utilizza il pagamento del moltiplicatore fulmine.",
        "Tutte le scommesse non moltiplicate si risolvono secondo le regole standard della roulette europea."
      ],
    
      payoutTitle: "Pagamenti di Lightning Roulette",
      payoutIntro:
        "I pagamenti della roulette fulmine seguono la roulette standard per la maggior parte delle scommesse, mentre la differenza principale appare nei numeri diretti. Quando un Numero Fortunato selezionato vince, il moltiplicatore assegnato sostituisce il pagamento diretto regolare e può raggiungere fino a 500x.",
    
      payoutColBet: "Tipo di Scommessa",
      payoutColPayout: "Pagamento",
      payoutColNote: "Come Funziona",
    
      payoutBetStraightLucky: "Diretta (Numero Fortunato)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Applicato quando una scommessa diretta cade su un Numero Fortunato con un moltiplicatore assegnato.",
    
      payoutBetStraight: "Diretta (standard)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Vincita diretta standard senza moltiplicatore fulmine.",
    
      payoutBetSplit: "Spaccata",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Scommessa su 2 numeri adiacenti.",
    
      payoutBetStreet: "Terzina",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Scommessa su 3 numeri in fila.",
    
      payoutBetCorner: "Quadrupla",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Scommessa su 4 numeri.",
    
      payoutBetDozen: "Dozzina / Colonna",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Copre 12 numeri.",
    
      payoutBetEven: "Rosso/Nero, Dispari/Pari, Alto/Basso",
      payoutValEven: "1:1",
      payoutNoteEven: "Scommesse esterne standard.",
    
      rtpTitle: "RTP e Volatilità di Lightning Roulette",
      rtpText1:
        "L'RTP della roulette fulmine dipende dal tipo di scommessa. Le scommesse standard come rosso/nero o dozzine mantengono un RTP di circa il 97.30%, mentre le scommesse dirette si aggirano intorno al 97.10% perché il gioco riassegna parte della struttura di pagamento per finanziare la funzione moltiplicatore.",
      rtpText2:
        "In termini di varianza, il gioco è più volatile della roulette classica quando l'attenzione è sui numeri interni. I moltiplicatori della roulette fulmine creano momenti di pagamento meno frequenti ma più grandi, motivo per cui molti giocatori descrivono il gioco come volatilità media-alta piuttosto che un profilo di roulette standard.",
    
      strategyTitle: "Note sulla Strategia di Lightning Roulette",
      strategyText1:
        "Una strategia di roulette fulmine non cambia il vantaggio della casa, ma può cambiare il profilo di rischio di una sessione. I giocatori che preferiscono varianza minore di solito rimangono più vicini alle scommesse esterne, mentre coloro che desiderano esposizione ai moltiplicatori si concentrano più sulla copertura diretta.",
      strategyText2:
        "Da una prospettiva statistica, il gioco è meglio affrontato come roulette europea con un livello di moltiplicatore aggiuntivo. Ciò lo rende utile per tracciare la frequenza dei Numeri Fortunati, la distribuzione dei moltiplicatori e le oscillazioni di pagamento su un campione più ampio piuttosto che giudicare il gioco da una breve serie.",
    
      trackerTitle: "Cosa Puoi Tracciare",
      trackerIntro:
        "Questa sezione del sito è costruita per i giocatori che desiderano rivedere la roulette fulmine online attraverso risultati recenti, moltiplicatori e metriche riassuntive piuttosto che affidarsi a impressioni a breve termine.",
    
      trackLuckyNumbers: "Cronologia dei Numeri Fortunati",
      trackLuckyNumbersText:
        "Traccia quali numeri hanno ricevuto moltiplicatori e con quale frequenza appaiono nei turni recenti.",
    
      trackMultipliers: "Distribuzione dei Moltiplicatori",
      trackMultipliersText:
        "Vedi con quale frequenza appaiono moltiplicatori da 50x, 100x, 150x, 200x, 300x, 400x e 500x.",
    
      trackSpinResults: "Risultati dei Giri",
      trackSpinResultsText:
        "Esamina i risultati recenti, incluso il numero vincente, i numeri fulmine e i moltiplicatori colpiti.",
    
      trackRtp: "Istantanea RTP",
      trackRtpText:
        "Confronta i risultati osservati con il profilo di rendimento atteso del gioco.",
    
      trackPatterns: "Modelli di Risultati",
      trackPatternsText:
        "Utilizza la cronologia recente e i dati di distribuzione per seguire serie a breve termine e frequenza dei numeri.",
    
      comparisonTitle: "Lightning Roulette a Colpo d'Occhio",
      compColArea: "Area",
      compColValue: "Lightning Roulette",
      compColMeaning: "Perché Importa",
    
      compAreaBase: "Formato Base",
      compValueBase: "Roulette europea con croupier dal vivo",
      compWhyBase:
        "Le regole core rimangono familiari per i giocatori che già conoscono la roulette standard.",
    
      compAreaMultipliers: "Moltiplicatori Fulmine",
      compValueMultipliers: "1–5 Numeri Fortunati, 50x a 500x",
      compWhyMultipliers:
        "Aggiunge un potenziale maggiore alle scommesse dirette senza modificare i pagamenti delle scommesse esterne.",
    
      compAreaRtp: "Profilo RTP",
      compValueRtp: "97.30% standard / 97.10% diretto",
      compWhyRtp:
        "Utile per comprendere come il finanziamento dei moltiplicatori influisce su diversi tipi di scommesse.",
    
      compAreaVariance: "Volatilità",
      compValueVariance: "Superiore alla roulette classica nelle scommesse interne",
      compWhyVariance:
        "I pagamenti basati su moltiplicatori creano oscillazioni a breve termine più ampie.",
    
      compAreaUse: "Miglior Caso d'Uso",
      compValueUse: "Giocatori che desiderano roulette con varianza aggiuntiva",
      compWhyUse:
        "Mantiene la struttura di roulette standard mentre aggiunge pagamenti occasionalmente potenziati.",
    
      faqTitle: "Domande Frequenti",
      faq: [
        {
          q: "Cos'è Lightning Roulette?",
          a: "Lightning Roulette è una versione con croupier dal vivo della roulette europea con moltiplicatori casuali su Numeri Fortunati selezionati."
        },
        {
          q: "Come funzionano i moltiplicatori di Lightning Roulette?",
          a: "Prima di ogni giro, il gioco seleziona 1 a 5 Numeri Fortunati e assegna moltiplicatori da 50x a 500x. Se una scommessa diretta cade su uno di quei numeri, si applica il pagamento del moltiplicatore."
        },
        {
          q: "Qual è l'RTP di Lightning Roulette?",
          a: "L'RTP tipico è di circa il 97.30% per le scommesse standard e circa il 97.10% per le scommesse dirette."
        },
        {
          q: "I pagamenti di Lightning Roulette sono diversi dalla roulette standard?",
          a: "La maggior parte dei tipi di scommesse utilizza pagamenti standard della roulette europea. La differenza principale è il pagamento basato su moltiplicatore su numeri diretti selezionati."
        },
        {
          q: "Lightning Roulette è più volatile della roulette classica?",
          a: "Sì. Il sistema di moltiplicatore crea varianza più ampia a breve termine, specialmente per i giocatori che si concentrano su scommesse interne."
        }
      ],
    
      conclusionTitle: "Impressione Generale",
      conclusionText:
        "Come recensione neutrale della roulette fulmine, il gioco può essere descritto come roulette europea standard con uno strato di moltiplicatore aggiunto che aumenta la varianza senza modificare il formato principale. Per i giocatori interessati alle statistiche dal vivo della roulette fulmine, è un gioco utile da tracciare perché la frequenza dei moltiplicatori, la selezione dei Numeri Fortunati e i modelli di pagamento possono essere misurati nel tempo."
    },
    lightningrouletteHistory: {
      panelTitle:  "Cronologia giri",
      subtitle:    "Cronologia recente con risultati dei numeri fortunati.",
      occurredAt:  "Verificato il",
      spinResult:  "Risultato",
      multiplier:  "Moltiplicatore",
      firstLucky:  "Primo fortunato",
      secondLucky: "Secondo fortunato",
      thirdLucky:  "Terzo fortunato",
      fourthLucky: "Quarto fortunato",
      fifthLucky:  "Quinto fortunato",
    },
    
    dreamcatcherReview: {
      title: "Dream Catcher Live: Statistiche in Tempo Reale, Risultati e Guida Completa al Gioco",
      intro:
        "Dream Catcher è il gioco Money Wheel di punta di Evolution Gaming che ha trasformato l'intrattenimento dei casinò live quando è stato lanciato nel 2017. Questa esperienza in stile Ruota della Fortuna combina l'emozione di un game show televisivo con il gioco d'azzardo per soldi reali, il tutto trasmesso in ultra-HD da studi professionali in Lettonia.\n\nA differenza dei giochi da tavolo tradizionali, Dream Catcher non richiede alcuna conoscenza preliminare del gioco d'azzardo. Devi semplicemente puntare su un numero, guardare la ruota girare e riscuotere le tue vincite se si ferma sulla tua scelta. L'aggiunta di segmenti moltiplicatori crea opportunità per pagamenti massicci fino a 20.000 volte la tua puntata.",
      playbtn: "Gioca",
      heroAlt: "Logo del gioco live con ruota dei soldi Dream Catcher",
    
      quickOverviewTitle: "Panoramica Rapida del Gioco",
      specFeature: "Specifica",
      specDetails: "Dettagli",
      specProvider: "Fornitore del Gioco",
      specProviderValue: "Evolution Gaming",
      specYear: "Anno di Lancio",
      specYearValue: "2017",
      specType: "Tipo di Gioco",
      specTypeValue: "Ruota dei Soldi Live",
      specRtp: "RTP",
      specRtpValue: "96,58% (ottimale)",
      specBetRange: "Intervallo di Puntata",
      specBetRangeValue: "€0,10 – €1.000",
      specMaxWin: "Vincita Massima",
      specMaxWinValue: "20.000x la puntata",
      specSegments: "Segmenti Totali",
      specSegmentsValue: "54",
      specLocation: "Posizione di Streaming",
      specLocationValue: "Riga, Lettonia",
    
      howWorksTitle: "Come Funziona Dream Catcher",
      howWorksText:
        "Il gioco presenta una gigantesca ruota montata verticalmente con 54 segmenti colorati. Un presentatore live fa girare la ruota interagendo con i giocatori tramite chat, creando quell'autentica atmosfera da game show.",
    
      wheelDistributionTitle: "Distribuzione dei Segmenti della Ruota",
      wheelColNumber: "Numero",
      wheelColSegments: "Segmenti",
      wheelColPayout: "Pagamento",
      wheelColProbability: "Probabilità",
      wheelDistributionNote:
        "I segmenti numerati pagano esattamente quello che mostrano: atterra sul 5 e ottieni 5:1 sulla tua scommessa. Semplice come questo.",
      multiplier2xLabel: "Moltiplicatore 2x",
      multiplier7xLabel: "Moltiplicatore 7x",
    
      multiplierTitle: "Meccanica dei Moltiplicatori",
      multiplierIntro:
        "I due segmenti moltiplicatori (argento 2x e oro 7x) sono dove le cose si fanno interessanti. Non puoi puntarci direttamente, ma quando la ruota si ferma su uno di essi:",
      multiplierBullets: [
        "Tutte le scommesse attuali rimangono attive",
        "La ruota gira di nuovo",
        "Qualsiasi numero esca successivamente viene moltiplicato"
      ],
      multiplierNote:
        "I moltiplicatori possono concatenarsi. Se la ruota atterra su 7x, poi ancora su 7x, e infine sul 40, il pagamento è di 1.960x. Il massimo teorico implica più moltiplicatori consecutivi prima di atterrare sul 40, portando le vincite fino a 20.000x.",
    
      statsTrackingTitle: "Statistiche Live e Tracciamento dei Risultati di Dream Catcher",
      statsTrackingIntro:
        "Monitorare le statistiche di Dream Catcher aiuta a capire il comportamento del gioco nel tempo. Sebbene ogni giro sia indipendente, monitorare i risultati di Dream Catcher rivela se la ruota si sta avvicinando alle probabilità attese.",
      trackingBullets: [
        "Stato attuale del moltiplicatore (attivo o no)",
        "Giri dall'ultimo colpo del moltiplicatore",
        "Frequenza dei numeri in vari intervalli di tempo",
        "Segmenti caldi e freddi basati sui risultati recenti in tempo reale di Dream Catcher"
      ],
      statsTrackingNote:
        "Molti giocatori utilizzano dashboard delle statistiche live di Dream Catcher per individuare schemi, anche se ricorda: i risultati passati non influenzano i giri futuri.",
    
      strategiesTitle: "Strategie di Puntata da Considerare",
      strategies: [
        {
          title: "Distribuisci le Tue Scommesse",
          text:
            "Coprire più segmenti aumenta la frequenza dei colpi. Puntare su 1, 2 e 5 simultaneamente significa vincere su circa l'83% dei giri (escludendo i segmenti moltiplicatori)."
        },
        {
          title: "Punta sui Numeri ad Alto Pagamento",
          text:
            "Concentrarsi su 10, 20 o 40 significa meno vittorie ma pagamenti più elevati quando si verificano. Una singola vincita sul 40 recupera molti round persi."
        },
        {
          title: "Puntate Basse, Più Giri",
          text:
            "Il minimo di €0,10 ti permette di estendere bankroll più piccoli su centinaia di giri. Più giri significano più possibilità di catturare quelle catene di moltiplicatori."
        }
      ],
    
      rtpBreakdownTitle: "Analisi dell'RTP per Tipo di Scommessa",
      rtpBreakdownIntro:
        "Non tutte le scommesse hanno uguali rendimenti teorici.",
      rtpColBet: "Scommessa",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "I numeri più bassi offrono un valore migliore a lungo termine, mentre il 40 comporta una varianza più elevata con il suo RTP ridotto.",
    
      whyLoveTitle: "Perché i Giocatori Amano Dream Catcher",
      whyLoveBullets: [
        "Comprensione immediata – Nessuna regola complessa o strategia da imparare",
        "Energia da game show – I presentatori professionisti mantengono vivo l'intrattenimento",
        "Emozione dei moltiplicatori – Ogni giro potrebbe innescare una reazione a catena",
        "Puntate accessibili – Gioca da €0,10 fino a €1.000 per giro",
        "Ottimizzato per mobile – Esperienza completa su qualsiasi dispositivo"
      ],
    
      faqTitle: "Domande Frequenti",
      faq: [
        {
          q: "Posso vedere le statistiche live di Dream Catcher durante il gioco?",
          a: "Sì: l'interfaccia di gioco mostra i risultati recenti di Dream Catcher e i numeri vincenti. I tracker di statistiche di terze parti offrono un'analisi storica più approfondita delle statistiche di Dream Catcher su migliaia di giri."
        },
        {
          q: "Cosa succede se la ruota atterra più volte sui moltiplicatori?",
          a: "I moltiplicatori si accumulano. Due colpi consecutivi di 7x seguiti da un numero significano che quel numero paga 49 volte il suo tasso normale. Le catene sono rare ma creano le vincite più grandi del gioco."
        },
        {
          q: "C'è un modo per prevedere i risultati in tempo reale di Dream Catcher?",
          a: "No. Ogni giro utilizza un meccanismo certificato casuale. Monitorare le statistiche live di Dream Catcher può informare i tuoi schemi di puntata, ma non può prevedere i risultati."
        },
        {
          q: "Perché la scommessa sul 40 ha un RTP inferiore rispetto agli altri numeri?",
          a: "Con un solo segmento su 54, il 40 appare circa l'1,9% delle volte. Il pagamento di 40:1 non compensa pienamente questa rarità, risultando in un vantaggio della casa più elevato."
        },
        {
          q: "Come si confrontano i risultati di Dream Catcher con gli RTP delle slot?",
          a: "L'RTP ottimale del 96,58% di Dream Catcher si colloca comodamente nel territorio standard delle slot online (tipicamente 94-97%), rendendolo competitivo per un formato di gioco live."
        }
      ]
    },
    dreamcatcherStatsExtra: {
      trackedMetaPrefix: "Ultimi 30 minuti",
      bestWinsTitle: "Migliori vincite per singolo giro",
      bestWinsText: "Uno sguardo rapido ai pagamenti più alti dagli ultimi giri tracciati.",
      wheelStatsTitle: "Statistiche dei moltiplicatori della ruota",
      wheelStatsText: "Scopri con quale frequenza sono usciti i segmenti moltiplicatori nello stesso intervallo analizzato.",
      matchedTitle: "Moltiplicatori della ruota corrisposti",
      matchedText: "Confronta le uscite dei moltiplicatori con i giri normali nel campione attuale.",
      finished: "Completato",
      outcome: "Risultato",
      player: "Giocatore",
      wonAmount: "Importo vinto",
      multiplier: "Moltiplicatore",
      match: "Corrispondenza",
      noMatch: "Nessuna corrispondenza"
    },
    gamePanels: {
      temperatureSubtitle:
        "La temperatura dei segmenti evidenzia risultati caldi e freddi in tempo reale in base agli ultimi spin rispetto alla probabilità attesa.",
      temperatureSpinsSince: "{n} spin fa",
    
      historySubtitle:
        "Consulta la cronologia più recente con risultati in tempo reale, moltiplicatori, vincitori e payout.",
    
      rtpBasedOn: "Basato sugli ultimi 1.000 spin",
    
      summaryTotalSpinsToday: "Spin totali oggi",
      summaryBonusRounds: "Round bonus",
      summaryBiggestMultiplier: "Moltiplicatore più alto",
      summaryAvgPayout: "Payout medio",
    
      occurredAt: "Avvenuto",
      slotResult: "Risultato slot",
      spinResult: "Risultato spin",
      specialResult: "Risultato speciale",
      multiplier: "Moltiplicatore",
      totalWinners: "Vincitori",
      totalPayout: "Payout totale",
    
      watch: "Guarda"
    },
    homeSeo: {
      sectionTitle: "Informazioni sulla Nostra Piattaforma di Statistiche dei Casinò Live",
      whoTitle: "Chi Siamo",
      whoText1: "Siamo una piattaforma indipendente di analisi dei giochi da casinò live che raccoglie, elabora e visualizza statistiche in tempo reale.",
      whoText2: "Il nostro obiettivo è fornire ai giocatori dati trasparenti basati sui risultati reali dei giochi, aiutandoli a comprendere meglio le statistiche dei casinò live e gli ultimi risultati.",
      howTitle: "Come Raccogliamo le Informazioni",
      howText1: "Utilizziamo sistemi automatizzati di raccolta dati che monitorano i risultati dei giochi da casinò live in tempo reale.",
      howText2: "I dati provengono da fonti di trasmissione aperte, stream di gioco live e interfacce pubbliche dei provider, permettendoci di seguire costantemente i risultati di gioco e i risultati in tempo reale.",
      howText3: "Tutti i risultati vengono sottoposti a elaborazione aggiuntiva e verifica algoritmica per ridurre al minimo i ritardi e mantenere un'elevata precisione statistica. La piattaforma si basa su moderne tecnologie di elaborazione dati, tra cui sincronizzazione dei flussi, parsing automatico e modelli analitici."
    },
    
    monopolyReview: {
      title: "Monopoly Live Recensione: l'esperienza definitiva del game show da casinò live",
      intro: "Benvenuto nella guida definitiva a Monopoly Live, uno dei giochi con dealer dal vivo più popolari mai creati. Sviluppato dalla leggendaria Evolution Gaming, questo titolo unisce una gigantesca ruota del denaro a un'incredibile funzione bonus 3D in realtà aumentata con Mr. Monopoly in persona. Che tu voglia giocare a Monopoly Live online o semplicemente controllare le statistiche più recenti del gioco, qui troverai tutte le informazioni di cui hai bisogno.",
      playbtn: "Gioca",
      heroAlt: "Ruota di Monopoly Live con presentatrice dal vivo e studio del game show",

      tableFeature: "Caratteristica",
      tableDetails: "Dettagli",
      gameNameLabel: "Nome del gioco",
      providerLabel: "Provider",
      gameTypeLabel: "Tipo di gioco",
      rtpLabel: "RTP",
      maxWinLabel: "Vincita massima",
    
      gameTypeValue: "Game Show da Casinò Live",
      rtpValue: "Fino al 96,23%",
      maxWinValue: "$500.000 (o equivalente in moltiplicatore)",
    
      sectionsTitle: "Caratteristiche principali di Monopoly Live",
    
      wheelTitle: "Monopoly Live La ruota del denaro (gioco base)",
      wheelText: "Il cuore dell'esperienza da casinò live di Monopoly Live. Un vero presentatore dal vivo gira un'enorme ruota verticale con 54 segmenti. I giocatori puntano sui numeri (1, 2, 5, 10) per vincere pagamenti immediati in denaro in base al numero estratto.",
    
      chanceTitle: "Monopoly Live Il segmento 'Chance'",
      chanceText: "Atterrare su un segmento 'Chance' assegna ai giocatori un premio istantaneo in denaro oppure un entusiasmante bonus moltiplicatore. Se appare un moltiplicatore, il presentatore gira di nuovo la ruota e la tua prossima vincita viene moltiplicata.",
    
      bonus3dTitle: "Monopoly Live Il round bonus 3D",
      bonus3dText: "Il punto forte del gioco Monopoly Live. Se punti su '2 ROLLS' o '4 ROLLS' e la ruota si ferma lì, Mr. Monopoly entra in un mondo 3D da gioco da tavolo, raccogliendo premi, moltiplicatori ed evitando le tasse.",
    
      howToPlayTitle: "Come giocare a Monopoly Live",
      howToPlayIntro: "Iniziare in un casinò online con Monopoly Live è semplicissimo. Basta seguire questi passaggi:",
      step1: "Piazza le tue puntate: Hai una breve finestra di puntata per mettere le tue chip su 1, 2, 5, 10, '2 Rolls' o '4 Rolls'.",
      step2: "Il giro: Il dealer live gira la ruota. Puoi guardare Monopoly Live mentre la ruota rallenta.",
      step3: "Il pagamento: Se la ruota si ferma sul tuo numero, vinci. Se si ferma su un gioco bonus e hai puntato su di esso, entri nel round 3D.",
    
      statsTitle: "Monopoly Live statistiche, risultati e tracker",
      statsText1: "Per molti appassionati seri di iGaming, monitorare il gioco è importante quanto giocare. Poiché si tratta di un gioco di probabilità, molti giocatori utilizzano un tracker di Monopoly Live per seguire le tendenze del gioco.",
      statsText2: "Analizzando le statistiche di Monopoly Live, puoi visualizzare la frequenza dei round bonus, i moltiplicatori medi e i numeri caldi/freddi. Controllare la cronologia di Monopoly Live ti consente di vedere i risultati di Monopoly Live di oggi. Anche se i risultati passati non garantiscono quelli futuri, osservare un tabellone score di casinò di Monopoly Live offre ai giocatori indicazioni su come si sta comportando la ruota durante la sessione. Ricorda sempre di giocare in modo responsabile, indipendentemente da ciò che mostrano i risultati di Monopoly Live.",
      statsNote: "Nota: Se ami questo formato, potresti voler dare un'occhiata anche a Monopoly Big Baller live, uno spin-off in stile bingo che include anche entusiasmanti risultati di Monopoly Big Baller oggi live.",
    
      freePlayTitle: "Monopoly Live Si può giocare gratis?",
      freePlayText: "Molti giocatori cercano una demo casinò di Monopoly Live o Monopoly Live gratis. Poiché si tratta di un gioco live da studio con veri dealer, non è disponibile una demo giocabile con denaro fittizio. Tuttavia, puoi entrare in qualsiasi casinò online con Monopoly Live, aprire il gioco e semplicemente guardare lo stream di Monopoly Live gratis per imparare le regole prima di puntare denaro reale.",
    
      faqTitle: "Domande frequenti (FAQ)",
      faq: [
        {
          q: "Monopoly Live Dove posso trovare risultati e statistiche?",
          a: "Puoi trovare le statistiche di Monopoly Live direttamente nell'interfaccia di gioco, che mostra i segmenti vincenti più recenti. Per analisi più approfondite, molti siti esterni di tracker da casinò offrono una cronologia completa di Monopoly Live."
        },
        {
          q: "Monopoly Live Esiste un'app casinò disponibile?",
          a: "Non esiste un apk standalone di Monopoly Live. Tuttavia, puoi giocare perfettamente da mobile scaricando l'app ufficiale di qualsiasi casinò con licenza che offra titoli Evolution Gaming."
        },
        {
          q: "Monopoly Live Qual è la differenza tra questo gioco e Monopoly Big Baller?",
          a: "Sebbene entrambi includano Mr. Monopoly e round bonus in 3D, il gioco originale utilizza una ruota del denaro rotante, mentre Monopoly Big Baller live casino usa una macchina per l'estrazione di palline in stile bingo."
        },
        {
          q: "Monopoly Live Come accedo al gioco bonus 3D?",
          a: "Per partecipare al gioco da tavolo 3D, devi puntare sugli spazi di scommessa '2 ROLLS' o '4 ROLLS'. Se la ruota si ferma su uno di questi segmenti, il round bonus inizia."
        },
        {
          q: "Monopoly Live Posso interagire con il dealer live?",
          a: "Sì. Il gioco include una chat live del casinò di Monopoly Live in cui puoi parlare con il presentatore e con gli altri giocatori, rendendo l'esperienza di Monopoly Live molto sociale e coinvolgente."
        },
        {
          q: "Monopoly Live I risultati sono truccati?",
          a: "No. Monopoly Live di Evolution Gaming è severamente testato e concesso in licenza dalle principali autorità del gioco. La ruota è completamente fisica e casuale, garantendo che ogni risultato di Monopoly Live sia al 100% equo."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Tiri di dadi di fascia bassa",
      diceRollsMidTitle: "Monopoly Live Tiri di dadi di fascia media",
      diceRollsHighTitle: "Monopoly Live Tiri di dadi di fascia alta",
      trackedMeta: "Ultime 6 ore • 258 giri",
    
      boardMovesTitle: "Monopoly Live Statistiche dei movimenti sul tabellone",
      bonusGameStats: "Statistiche del gioco bonus",
      doublesRolled: "Doppi ottenuti",
      avgBoardRolls: "Media dei tiri sul tabellone per gioco bonus",
    
      landingStatsTitle: "Monopoly Big Baller Statistiche delle caselle di atterraggio",
    
      bestIndividualWinsTitle: "Monopoly Live Migliori vincite individuali",
      latestTopMultipliersTitle: "Monopoly Live Ultimi moltiplicatori più alti",
    
      finished: "Terminato",
      player: "Giocatore",
      wonAmount: "Importo vinto",
      multiplier: "Moltiplicatore",
      bigWinClip: "Clip grande vincita",
      bonusRound: "Round bonus",
      watchClip: "Guarda clip",
      biggestWinsGallery: "Galleria delle vincite più grandi"
    },
    seo: {
      
        lightningroulette: {
          title: "Lightning Roulette statistiche, RTP e risultati live",
          description: "Segui Lightning Roulette con RTP, moltiplicatori, Lucky Numbers, cronologia spin, pagamenti e risultati live aggiornati."
        },
      
      home: {
        title: "Casino Score Live 🔥 Live Stats e Real-Time Results [2026]",
        description: "Casino Score Live è il tuo hub definitivo per live stats e real-time results nel 2026. Analizza RTP, segui hot or cold streaks e fai scelte di scommessa sicure."
      },
      megaball:{ 
        title: "Mega Ball statistiche live e risultati – Gioca online + RTP e trend",
        description: "Statistiche e risultati live di Mega Ball con analisi RTP. Monitora trend, moltiplicatori ed esiti in tempo reale. Gioca online o prova la demo subito.",
      },    
      crazytime: {
        title: "Statistiche Crazy Time – Risultati Live e Tracker dei Moltiplicatori",
        description: "Statistiche live di Crazy Time aggiornate in tempo reale. Monitora risultati della ruota, round bonus e moltiplicatori fino a 2000x. Usa i dati per costruire la tua strategia vincente. Controlla ora!"
      },
      monopoly: {
        title: "Monopoly Live Statistiche 2026 | Tracker Ufficiale dei Risultati",
        description: "Statistiche ufficiali di Monopoly Live per il 2026. Risultati in tempo reale, storico verificato e dati Evolution Gaming. Monitora i risultati e gioca in sicurezza."
      },
      dreamcatcher: {
        title: "Dream Catcher Risultati & Statistiche Live 2026 - Scores in Tempo Reale 🎰",
        description: "Dream Catcher risultati di oggi, statistiche live e punteggi in tempo reale. Traccia cronologia, statistiche vincenti e trend 2026. Ogni giro subito."
      }
    },
    crazytimeStream: {
      title: "Streaming Live di Crazy Time",
      subtitle: "Guarda lo streaming live di Crazy Time direttamente su questa pagina.",
      liveLabel: "Streaming Live",
      watchLivestream: "Guarda lo Streaming"
    },
    crazytimeReview: {
      faqTitle: "Domande Frequenti",
      faq: [
        {
          q: "Crazy Time è un gioco di abilità o di fortuna?",
          a: "Crazy Time è principalmente un gioco di fortuna. Sebbene i giocatori possano utilizzare statistiche e strumenti di monitoraggio per comprendere meglio i risultati recenti, ogni round rimane indipendente."
        },
        {
          q: "Qual è il moltiplicatore massimo in Crazy Time?",
          a: "Il potenziale massimo pubblicizzato in Crazy Time può raggiungere fino a 20.000x durante il round bonus principale di Crazy Time."
        },
        {
          q: "Posso partecipare ai round bonus se non ho scommesso direttamente su di essi?",
          a: "Se le regole del gioco e la configurazione attuale lo consentono attraverso meccaniche bonus come l'ingresso minimo o gli effetti Top Slot, i giocatori possono ancora entrare in determinati risultati bonus con un moltiplicatore ridotto."
        },
        {
          q: "Le statistiche live di Crazy Time sono predittive?",
          a: "No. Le statistiche live aiutano a visualizzare l'attività recente, ma non predicono i risultati futuri. Ogni giro è indipendente."
        }
      ],
      whatIsTitle: "Cos'è Crazy Time?",
      whatIsText: "Crazy Time è un gioco da casinò live sviluppato da Evolution Gaming, lanciato nel 2020. Combina un formato a ruota della fortuna con quattro round bonus interattivi, offrendo una delle esperienze di casinò live più coinvolgenti disponibili oggi.",
    
      tableParameter: "Parametro",
      tableDetails: "Dettagli",
      gameName: "Nome del Gioco",
      provider: "Fornitore",
      rtp: "RTP",
      releaseYear: "Anno di Rilascio",
      gameType: "Tipo di Gioco",
      minBet: "Puntata Min.",
      maxBet: "Puntata Max.",
      volatility: "Volatilità",
      gameTypeValue: "Game Show Live",
      volatilityValue: "Alta",
    
      howToPlayTitle: "Come Giocare a Crazy Time",
      howToPlayText: "Il gioco live di Crazy Time segue un formato semplice:",
      step1: "Piazza la tua scommessa su uno o più segmenti della ruota prima che scada il tempo",
      step2: "Guarda girare la ruota — un presentatore live gestisce l'intera sessione in tempo reale",
      step3: "Vinci se la ruota si ferma sul segmento che hai scelto",
      step4: "Attiva un round bonus se l'indicatore si ferma su un segmento bonus",
    
      wheelBreakdownTitle: "Suddivisione dei Segmenti della Ruota",
      wheelSegment: "Segmento",
      wheelOccurrences: "Occorrenze sulla Ruota",
      wheelMultiplier: "Moltiplicatore",
      upTo2000x: "Fino a 2000x",
      upTo10000x: "Fino a 10.000x",
      upTo20000x: "Fino a 20.000x",
    
      bonusRoundsTitle: "Round Bonus di Crazy Time",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Una galleria di tiro con 108 moltiplicatori casuali nascosti dietro i simboli. I giocatori ne scelgono uno per rivelare il loro premio.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Viene lanciata una semplice moneta a due facce. Ogni lato mostra un moltiplicatore — rosso o blu. Veloce, pulito ed emozionante.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Un'enorme parete fisica di Pachinko lascia cadere un disco dall'alto. Rimbalza attraverso i pioli e si ferma su un moltiplicatore in fondo. Può raddoppiare infinitamente fino a quando non viene colpito un moltiplicatore non doppio.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonus)",
      crazyTimeBonusText: "L'evento principale. Una massiccia ruota virtuale con tre indicatori gira all'interno di un mondo digitale. I giocatori scelgono un indicatore prima del giro. La ricompensa potenziale più alta raggiunge 20.000x.",
    
      rulesTitle: "Regole del Gioco Crazy Time: Punti Chiave",
      rule1: "Puoi scommettere su più segmenti contemporaneamente",
      rule2: "Il Top Slot sopra la ruota principale aggiunge un moltiplicatore o attiva l'ingresso bonus con moltiplicatori potenziati",
      rule3: "Se non hai scommesso su un segmento bonus ma viene estratto, entri comunque nel bonus (con moltiplicatore minimo)",
      rule4: "Tutti i moltiplicatori bonus vengono moltiplicati per la tua scommessa originale, non solo una ricompensa fissa",
    
      statsTitle: "Statistiche e Risultati Live di Crazy Time",
      statsText: "Comprendere le statistiche di Crazy Time aiuta a informare le tue decisioni di sessione. La maggior parte delle piattaforme mostra un tracker di statistiche live direttamente nell'interfaccia del gioco.",
      typicalStatsTitle: "Statistiche Tipiche che Vedrai:",
      stat1: "Risultati degli ultimi 100 giri — distribuzione di ogni segmento",
      stat2: "Frequenza bonus — con quale frequenza è stato attivato ogni round bonus",
      stat3: "Cronologia moltiplicatori — i migliori moltiplicatori assegnati nei round recenti",
      stat4: "Segmenti caldi e freddi — indicatori visivi della frequenza dei segmenti",
      tip: "Consiglio professionale:",
      tipText: "Il tracker di statistiche di Crazy Time non è uno strumento predittivo — i risultati passati non influenzano i giri futuri. L'RNG e la ruota live operano indipendentemente ad ogni round.",
    
      whyPlayTitle: "Perché Giocare a Crazy Time Online?",
      prosTitle: "🏆 Pro:",
      pro1: "Qualità di produzione eccezionale da Evolution Gaming",
      pro2: "Quattro giochi bonus distinti — mai ripetitivo",
      pro3: "Enorme potenziale di moltiplicatore massimo (fino a 20.000x)",
      pro4: "Disponibile 24/7 praticamente in ogni grande casinò live online",
      pro5: "Tracker di statistiche live trasparente integrato nell'interfaccia",
    
      consTitle: "⚠️ Contro:",
      con1: "Alta volatilità — sono possibili lunghe serie di perdite",
      con2: "Il gioco demo vero e proprio non è disponibile (limitazione del formato live)",
      con3: "I moltiplicatori massimi sono rari per design"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Statistiche Avanzate dei Bonus di Crazy Time",
    
      flapperTitle: "Flapper Bonus di Crazy Time",
      flapperText: "Confronta i moltiplicatori medi dei tre colori del flapper di Crazy Time. Questi valori offrono una rapida panoramica delle prestazioni a breve termine rispetto alla media di lungo periodo.",
      avgAlways: "Media storica",
      flapperFootnote: "L’indicatore mostra il riferimento del moltiplicatore medio di lungo periodo per il colore del flapper selezionato, basato sui dati storici tracciati.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Confronta gli esiti rosso e blu di Coin Flip con i moltiplicatori medi e la frequenza di uscita rispetto alle aspettative di lungo periodo.",
      avgMultiplier: "Moltiplicatore medio",
      frequency: "Frequenza",
      vsAvg: "vs media",
      coinFlipFootnote: "L’indicatore mostra il riferimento della frequenza media di lungo periodo per il colore selezionato, basato sui dati tracciati.",
    
      cashHuntSymbolsTitle: "Simboli di Cash Hunt",
      cashHuntSymbolsText: "Questa sezione mostra il moltiplicatore medio e la frequenza di apparizione per ogni simbolo bersaglio di Cash Hunt.",
      times: "volte",
    
      recentCashHuntTitle: "Cash Hunt: Moltiplicatori Recenti",
      recentCashHuntText: "Segui i moltiplicatori recenti dei round di Cash Hunt. Le celle evidenziate indicano i risultati recenti migliori e peggiori.",
    
      bestBetsTitle: "Migliori Scommesse Singole",
      bestBetsText: "Questa tabella evidenzia le vincite singole più importanti nel periodo selezionato, inclusi giocatore, payout, risultato e moltiplicatore.",
      date: "Data",
      result: "Risultato",
      player: "Giocatore",
      payout: "Payout",
      multiplier: "Moltiplicatore",
      view: "Vedi",
    
      latestMaxTitle: "Ultimi Moltiplicatori Massimi",
      latestMaxText: "Questi recenti migliori risultati bonus mostrano i moltiplicatori più alti raggiunti nel periodo selezionato.",
      clip: "Guarda Clip",
      biggestWinsGallery: "Galleria delle Vincite Più Alte",
    
      yellow: "Giallo",
      blue: "Blu",
      green: "Verde",
      red: "Rosso",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Gioca 🎰"
    },
   
    gamePage: {
      statisticsTitleSuffix: "Statistiche",
      subtitlePrefix: "Monitora risultati, storico e statistiche in tempo reale di",
      playCta: "Gioca ora"
    },
    nav: { home: "Home", liveGames: "Giochi live" },
    home: {
      heroTitleBefore: "Casino Live",
      heroTitleAccent: "Statistiche",
      heroTitleAfter: "& Risultati in Tempo Reale",
      heroText: "Statistiche dei casinò live, risultati dei giochi e risultati in tempo reale per i tuoi game show da casinò preferiti. Monitora l’RTP, le serie calde o fredde e le vincite più grandi — 100% gratuito, senza account.",
      liveGames: "Giochi live",
      featuresTitle: "Le nostre funzionalità",
      testimonialsTitle: "Testimonianze"
    },
    features: {
      noDownloadTitle: "Nessun download necessario",
      noDownloadText: "Visualizza tutti i dati direttamente dal browser.",
      accurateDataTitle: "Dati accurati",
      accurateDataText: "Monitoraggio automatico di ogni spin in tempo reale.",
      freeTitle: "100% gratuito",
      freeText: "Tracksino è completamente gratuito."
    },
    footer: {
      games: "Giochi",
      moreGames: "Altri giochi",
      resources: "Risorse",
      faq: "FAQ",
      privacy: "Privacy Policy",
      terms: "Termini di servizio",
      contact: "Contatti",
      description: "Traccia i game show da casinò live in tempo reale."
    },
    homeFaq: {
      faqTitle: "FAQ sulle statistiche dei casinò live",
      faqIntro: "Risposte su live casino statistics, game results e real-time results nella nostra piattaforma.",
      faq: [
        {
          q: "Cosa sono le statistiche dei casinò live?",
          a: "Sono dati basati sui risultati reali dei giochi e sui risultati in tempo reale provenienti dai live stream."
        },
        {
          q: "Come raccogliete i risultati dei giochi?",
          a: "Monitoriamo stream pubblici, interfacce dei provider e fonti di trasmissione con sistemi automatici."
        },
        {
          q: "Ogni quanto vengono aggiornati i risultati in tempo reale?",
          a: "I risultati in tempo reale vengono aggiornati continuamente e verificati prima della pubblicazione."
        },
        {
          q: "Le statistiche possono prevedere il prossimo esito?",
          a: "No. Le statistiche aiutano a capire risultati e trend recenti, ma non prevedono il futuro."
        }
      ]
    },
    common: {
      player: "Giocatore",
      verifiedUser: "Utente verificato",
      liveNow: "Live ora",
      hour: "ora",
      hours: "ore",
      spins: "spin"
    },
    tabs: {
      temperature: "Temperatura",
      history: "Cronologia",
      stats: "Statistiche",
      bigwins: "Vincite top",
      review: "Recensione",
      stream: "Stream"
    }
  },

  de: {
    lightningrouletteReview: {
      title: "Lightning Roulette Bewertung, RTP und Live-Statistiken",
      intro:
        "Lightning Roulette ist eine Live-Roulette-Variante basierend auf dem europäischen Rad. Das Spiel folgt den Standard-Roulette-Regeln, aber jede Runde kann zufällige Multiplikatoren auf ausgewählten Glückszahlen zuweisen und erzeugt so eine höhere Volatilitätsversion des traditionellen Live-Roulettes.",
    
      quickOverviewTitle: "Schneller Spielüberblick",
      tableParameter: "Parameter",
      tableDetails: "Details",
    
      specProvider: "Anbieter",
      specProviderValue: "Evolution Gaming",
      specGameName: "Spielname",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Veröffentlichungsjahr",
      specReleaseYearValue: "2018",
      specGameType: "Spieltyp",
      specGameTypeValue: "Live-Dealer-Roulette",
      specWheel: "Radformat",
      specWheelValue: "Europäisches Roulette (einfache Null)",
      specRtp: "RTP",
      specRtpValue: "97,30% bei Standard-Einsätzen; 97,10% bei Einzelwetten",
      specMinBet: "Mindesteinsatz",
      specMinBetValue: "$0,20",
      specMaxBet: "Maximaleinsatz",
      specMaxBetValue: "$10.000",
      specMaxWin: "Maximaler Multiplikator",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Glückszahlen",
      specLuckyNumbersValue: "1 bis 5 pro Runde",
      specVolatility: "Volatilität",
      specVolatilityValue: "Mittel bis hoch",
      specMobile: "Mobiles Spielen",
      specMobileValue: "Unterstützt",
    
      aboutTitle: "Was ist Lightning Roulette?",
      aboutText1:
        "Lightning Roulette ist ein Live-Roulette-Spiel, das das europäische Rad mit einfacher Null und das Standard-Einsatzlayout beibehält, während es zufällige Multiplikator-Events vor jedem Spin hinzufügt. Dieses Format wird oft als Blitz-Roulette live oder Blitz-Roulette online beschrieben, da das Spiel einen echten Studio-Dealer mit einer Multiplikator-Mechanik kombiniert, die generiert wird, bevor die Kugel landet.",
      aboutText2:
        "In praktischer Hinsicht ist der Unterschied zum klassischen Roulette einfach: Ein bis fünf Zahlen werden pro Runde zu Glückszahlen, und wenn eine Einzelwette auf einer von ihnen landet, verwendet die Auszahlung den zugewiesenen Multiplikator anstelle der regulären Einzelwette. Dies ist die zentrale Idee hinter den meisten Blitz-Roulette-Bewertungsseiten und Statistik-Trackern.",
    
      howToPlayTitle: "Wie man Lightning Roulette spielt",
      howToPlayText1:
        "Wie man Lightning Roulette spielt, ist für jeden, der mit Roulette vertraut ist, unkompliziert. Spieler platzieren Einsätze während der Einsatzphase, dann zeigt das Spiel die Glückszahlen und ihre Multiplikatoren an, bevor der Live-Spin beginnt.",
      howToPlayText2:
        "Die Blitz-Roulette-Regeln basieren auf europäischem Roulette, daher funktionieren Außeneinsätze, Dutzende, Spalten und Inneneinsätze wie erwartet. Die zusätzliche Mechanik wirkt sich nur auf Einzelwetten aus, die auf ausgewählten Glückszahlen landen.",
      howToPlayBullets: [
        "Wählen Sie Chip-Werte und platzieren Sie Einsätze auf dem Roulette-Layout.",
        "Warten Sie, bis das Spiel 1 bis 5 Glückszahlen mit zufälligen Multiplikatoren zuweist.",
        "Beobachten Sie, wie der Dealer das Rad dreht und die Kugel loslässt.",
        "Wenn Ihre Einzelwette eine Glückszahl trifft, verwendet die Runde die Blitz-Multiplikator-Auszahlung.",
        "Alle nicht multiplizierten Einsätze werden nach Standard-Regeln des europäischen Roulettes abgerechnet."
      ],
    
      payoutTitle: "Lightning Roulette Auszahlungen",
      payoutIntro:
        "Lightning Roulette Auszahlungen folgen dem Standard-Roulette für die meisten Einsätze, während der Hauptunterschied bei Einzelzahlen auftritt. Wenn eine ausgewählte Glückszahl gewinnt, ersetzt der zugewiesene Multiplikator die reguläre Einzelwette-Auszahlung und kann bis zu 500x erreichen.",
    
      payoutColBet: "Einsatztyp",
      payoutColPayout: "Auszahlung",
      payoutColNote: "Wie es funktioniert",
    
      payoutBetStraightLucky: "Einzelwette (Glückszahl)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Angewendet, wenn eine Einzelwette auf eine Glückszahl mit zugewiesenem Multiplikator landet.",
    
      payoutBetStraight: "Einzelwette (Standard)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Standard-Einzelwettgewinn ohne Blitz-Multiplikator.",
    
      payoutBetSplit: "Split",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Einsatz auf 2 benachbarte Zahlen.",
    
      payoutBetStreet: "Transversale",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Einsatz auf 3 Zahlen in einer Reihe.",
    
      payoutBetCorner: "Quadrat",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Einsatz auf 4 Zahlen.",
    
      payoutBetDozen: "Dutzend / Spalte",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Umfasst 12 Zahlen.",
    
      payoutBetEven: "Rot/Schwarz, Ungerade/Gerade, Hoch/Tief",
      payoutValEven: "1:1",
      payoutNoteEven: "Standard-Außeneinsätze.",
    
      rtpTitle: "Lightning Roulette RTP und Volatilität",
      rtpText1:
        "Das Blitz-Roulette-RTP hängt von der Art des Einsatzes ab. Standard-Einsätze wie Rot/Schwarz oder Dutzende halten ein RTP von etwa 97,30%, während Einzelwetten bei etwa 97,10% liegen, da das Spiel einen Teil der Auszahlungsstruktur zur Finanzierung der Multiplikator-Funktion umverteilt.",
      rtpText2:
        "In Bezug auf Varianz ist das Spiel volatiler als klassisches Roulette, wenn der Fokus auf inneren Zahlen liegt. Blitz-Roulette-Multiplikatoren schaffen weniger häufige, aber größere Auszahlungsmomente, weshalb viele Spieler das Spiel als mittlere bis hohe Volatilität beschreiben, anstatt ein Standard-Roulette-Profil zu haben.",
    
      strategyTitle: "Lightning Roulette Strategie-Hinweise",
      strategyText1:
        "Eine Blitz-Roulette-Strategie ändert nicht den Hausvorteil, kann aber das Risikoprofil einer Sitzung verändern. Spieler, die niedrigere Varianz bevorzugen, bleiben normalerweise näher bei Außeneinsätzen, während diejenigen, die Multiplikator-Exposition wünschen, sich mehr auf die Einzelwette-Abdeckung konzentrieren.",
      strategyText2:
        "Aus statistischer Perspektive wird das Spiel am besten als europäisches Roulette mit einer zusätzlichen Multiplikator-Schicht angegangen. Dies macht es nützlich, die Glückszahl-Häufigkeit, Multiplikator-Verteilung und Auszahlungsschwankungen über eine größere Stichprobe zu verfolgen, anstatt das Spiel nach einer kurzen Serie zu beurteilen.",
    
      trackerTitle: "Was Sie verfolgen können",
      trackerIntro:
        "Dieser Abschnitt der Website ist für Spieler gedacht, die Blitz-Roulette online durch aktuelle Ergebnisse, Multiplikatoren und Zusammenfassungsmetriken überprüfen möchten, anstatt sich auf kurzfristige Eindrücke zu verlassen.",
    
      trackLuckyNumbers: "Glückszahlen-Verlauf",
      trackLuckyNumbersText:
        "Verfolgen Sie, welche Zahlen Multiplikatoren erhalten haben und wie oft sie in letzten Runden erscheinen.",
    
      trackMultipliers: "Multiplikator-Verteilung",
      trackMultipliersText:
        "Sehen Sie, wie oft Multiplikatoren von 50x, 100x, 150x, 200x, 300x, 400x und 500x erscheinen.",
    
      trackSpinResults: "Spin-Ergebnisse",
      trackSpinResultsText:
        "Überprüfen Sie aktuelle Ergebnisse, einschließlich Gewinnzahl, Blitzzahlen und getroffene Multiplikatoren.",
    
      trackRtp: "RTP-Momentaufnahme",
      trackRtpText:
        "Vergleichen Sie beobachtete Ergebnisse mit dem erwarteten Rückgabeprofil des Spiels.",
    
      trackPatterns: "Ergebnis-Muster",
      trackPatternsText:
        "Nutzen Sie aktuelle Historie und Verteilungsdaten, um kurzfristige Serien und Zahlenhäufigkeit zu verfolgen.",
    
      comparisonTitle: "Lightning Roulette auf einen Blick",
      compColArea: "Bereich",
      compColValue: "Lightning Roulette",
      compColMeaning: "Warum es wichtig ist",
    
      compAreaBase: "Basis-Format",
      compValueBase: "Europäisches Roulette mit Live-Dealer",
      compWhyBase:
        "Die Kernregeln bleiben für Spieler, die bereits Standard-Roulette kennen, vertraut.",
    
      compAreaMultipliers: "Blitz-Multiplikatoren",
      compValueMultipliers: "1–5 Glückszahlen, 50x bis 500x",
      compWhyMultipliers:
        "Fügt höheres Aufwärtspotenzial zu Einzelwetten hinzu, ohne Außeneinsatz-Auszahlungen zu ändern.",
    
      compAreaRtp: "RTP-Profil",
      compValueRtp: "97,30% Standard / 97,10% Einzelwette",
      compWhyRtp:
        "Nützlich zum Verständnis, wie die Multiplikator-Finanzierung verschiedene Einsatztypen beeinflusst.",
    
      compAreaVariance: "Volatilität",
      compValueVariance: "Höher als klassisches Roulette bei Inneneinsätzen",
      compWhyVariance:
        "Multiplikator-basierte Auszahlungen schaffen breitere kurzfristige Schwankungen.",
    
      compAreaUse: "Bester Anwendungsfall",
      compValueUse: "Spieler, die Roulette mit zusätzlicher Varianz wünschen",
      compWhyUse:
        "Behält die Standard-Roulette-Struktur bei, während es gelegentlich verstärkte Auszahlungen hinzufügt.",
    
      faqTitle: "Häufig Gestellte Fragen",
      faq: [
        {
          q: "Was ist Lightning Roulette?",
          a: "Lightning Roulette ist eine Live-Dealer-Version des europäischen Roulettes mit zufälligen Multiplikatoren auf ausgewählten Glückszahlen."
        },
        {
          q: "Wie funktionieren Lightning Roulette Multiplikatoren?",
          a: "Vor jedem Spin wählt das Spiel 1 bis 5 Glückszahlen aus und weist Multiplikatoren von 50x bis 500x zu. Wenn eine Einzelwette auf einer dieser Zahlen landet, wird die Multiplikator-Auszahlung angewendet."
        },
        {
          q: "Was ist das Lightning Roulette RTP?",
          a: "Das typische RTP beträgt etwa 97,30% für Standard-Einsätze und etwa 97,10% für Einzelwetten."
        },
        {
          q: "Unterscheiden sich Lightning Roulette Auszahlungen von Standard-Roulette?",
          a: "Die meisten Einsatztypen verwenden Standard-Auszahlungen für europäisches Roulette. Der Hauptunterschied ist die Multiplikator-basierte Auszahlung auf ausgewählten Einzelzahlen."
        },
        {
          q: "Ist Lightning Roulette volatiler als klassisches Roulette?",
          a: "Ja. Das Multiplikator-System erzeugt breitere kurzfristige Varianz, besonders für Spieler, die sich auf Inneneinsätze konzentrieren."
        }
      ],
    
      conclusionTitle: "Gesamteindruck",
      conclusionText:
        "Als neutrale Blitz-Roulette-Bewertung kann das Spiel als Standard-Europäisches Roulette mit einer zusätzlichen Multiplikator-Schicht beschrieben werden, die die Varianz erhöht, ohne das Kernformat zu ändern. Für Spieler, die an Live-Statistiken zum Blitz-Roulette interessiert sind, ist es ein nützliches Spiel zum Verfolgen, da die Multiplikator-Häufigkeit, Glückszahl-Auswahl und Auszahlungsmuster alle über die Zeit gemessen werden können."
    },
    lightningrouletteHistory: {
      panelTitle:  "Drehverlauf",
      subtitle:    "Letzte Drehrunde mit Lucky-Number-Ergebnissen.",
      occurredAt:  "Aufgetreten am",
      spinResult:  "Drehergebnis",
      multiplier:  "Multiplikator",
      firstLucky:  "Erste Glückszahl",
      secondLucky: "Zweite Glückszahl",
      thirdLucky:  "Dritte Glückszahl",
      fourthLucky: "Vierte Glückszahl",
      fifthLucky:  "Fünfte Glückszahl",
    },
    megaballReview: {
      title: "Mega Ball Tracker, RTP und Spielanalyse",
      intro: "Verfolge Statistiken, Ergebnisse und den RTP von Mega Ball in Echtzeit mit Live-Tracking-Tools. Sieh dir Ballverlauf, Multiplikator-Runden, Gewinneranzahl und Auszahlungstrends an – alles an einem Ort.",
  
      quickOverviewTitle: "Spielübersicht auf einen Blick",
      tableParameter: "Parameter",
      tableDetails: "Details",
      tableFeature: "Funktion",
      tableDescription: "Beschreibung",
  
      specProvider: "Anbieter",
      specProviderValue: "Evolution Gaming",
      specGameName: "Spielname",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95,30 %",
      specReleaseYear: "Erscheinungsjahr",
      specReleaseYearValue: "2023",
      specGameType: "Spieltyp",
      specGameTypeValue: "Live-Game-Show im Bingo-Stil",
      specMinBet: "Einsatzbereich",
      specMinBetValue: "Variiert je nach Casino",
      specMaxWin: "Maximaler Gewinn",
      specMaxWinValue: "Bis zu 1.000.000x",
      specBalls: "Gezogene Kugeln",
      specBallsValue: "20 Kugeln + Mega Ball + mögliche 2. Mega Ball",
  
      trackerTitle: "Was du verfolgen kannst",
      trackerIntro: "Bei Tracksino konzentrieren sich die Mega-Ball-Tracking-Tools auf die wichtigsten Live-Metriken für die Analyse Runde für Runde.",
      trackBallHistory: "Kugelverlauf",
      trackBallHistoryText: "Sieh dir alle gezogenen Kugeln in exakter Reihenfolge an.",
      trackMultiplier: "Mega-Ball-Multiplikator",
      trackMultiplierText: "Verfolge Multiplikatoren von 5x bis 100x.",
      trackWinners: "Anzahl der Gewinner",
      trackWinnersText: "Sieh, wie viele Karten oder Spieler gewonnen haben.",
      trackPayouts: "Auszahlungsbeträge",
      trackPayoutsText: "Überwache Gesamtauszahlungen und vergleiche aktive Runden.",
      trackLive: "Mega Ball live ansehen",
      trackLiveText: "Öffne das Live-Spiel und vergleiche die laufende Aktion mit den Tracker-Daten.",
  
      aboutTitle: "Was ist Mega Ball?",
      aboutText1: "Mega Ball ist eine schnelle Live-Game-Show, die Bingo-ähnliche Kartenmechaniken mit Lotterie-ähnlichen Kugelziehungen kombiniert. Nach der Hauptziehung können eine oder zwei Bonusrunden erscheinen, die durch Multiplikatoren zusätzliche Spannung bringen.",
      aboutText2: "Das Ziel ist es, möglichst viele Linien auf deinen Karten zu vervollständigen. Je mehr Linien du abschließt, desto höher sind die Gewinne – und Multiplikatorrunden können qualifizierte Auszahlungen deutlich erhöhen.",
  
      howToPlayTitle: "Wie spielt man Mega Ball?",
      howToPlayText1: "Bei Mega Ball werden 20 Kugeln nacheinander aus einer automatischen Maschine gezogen. Übereinstimmende Zahlen auf den Spielkarten werden automatisch markiert, und die Karten, die dem Gewinn am nächsten sind, werden oben in der Benutzeroberfläche angezeigt.",
      howToPlayText2: "Nach der letzten Kugel wird ein Mega-Ball-Multiplikator zwischen 5x und 100x generiert. Wenn der Mega Ball eine Gewinnlinie vervollständigt, kann die Auszahlung multipliziert werden. In seltenen Fällen wird auch eine zweite Mega Ball gezogen, die eine zusätzliche Chance auf einen erhöhten Gewinn bietet.",
      howToPlayBullets: [
        "20 Kugeln werden schnell hintereinander gezogen.",
        "Übereinstimmende Zahlen werden automatisch auf allen aktiven Karten markiert.",
        "Karten, die kurz vor dem Gewinn stehen, werden oben angezeigt.",
        "Nach der Hauptziehung wird ein Mega-Ball-Multiplikator generiert.",
        "Eine seltene zweite Mega Ball kann eine zusätzliche Gewinnchance bieten."
      ],
  
      payoutTitle: "Mega Ball Auszahlungen",
      payoutIntro: "Die Auszahlungen bei Mega Ball hängen davon ab, wie viele Linien auf einer einzelnen Karte vervollständigt werden. Horizontale, vertikale und diagonale Linien zählen für den Gewinn.",
      payoutColLines: "Abgeschlossene Linien",
      payoutColPrize: "Auszahlung",
      payoutColNote: "Funktionsweise",
      payout1Line: "1 horizontale, vertikale oder diagonale Linie.",
      payout2Lines: "2 Linien auf einer Karte.",
      payout3Lines: "3 Linien auf einer Karte.",
      payout4Lines: "4 Linien auf einer Karte.",
      payout5Lines: "5 Linien auf einer Karte.",
      payout6Lines: "6 Linien auf einer Karte.",
  
      comparisonTitle: "Mega Ball im Überblick",
      compColArea: "Bereich",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Warum es wichtig ist",
      compAreaBase: "Grundformat",
      compMegaBallBase: "Live-Game-Show im Bingo-Stil",
      compMeaningBase: "Kombiniert Karten-Vervollständigung mit einer Live-Ziehung.",
      compAreaBonus: "Bonusrunden",
      compMegaBallBonus: "Mega Ball und seltene 2. Mega Ball",
      compMeaningBonus: "Fügt nach der Hauptziehung Multiplikatorpotenzial hinzu.",
      compAreaTracking: "Tracking-Wert",
      compMegaBallTracking: "Hoch",
      compMeaningTracking: "Kugelreihenfolge, Gewinner und Auszahlungen sind leicht nachvollziehbar.",
      compAreaMaxWin: "Maximales Gewinnpotenzial",
      compMegaBallMaxWin: "Bis zu 1.000.000x",
      compMeaningMaxWin: "Die höchsten Gewinne hängen von Linien und Multiplikatoren ab.",
  
      faqTitle: "Häufig gestellte Fragen",
      faq: [
        {
          q: "Kann ich Mega-Ball-Ergebnisse live verfolgen?",
          a: "Ja. Ein Mega-Ball-Tracker zeigt Kugelverlauf, aktuelle Auszahlungen, Gewinneranzahl und Multiplikator-Ergebnisse Runde für Runde."
        },
        {
          q: "Wie funktioniert der Mega-Ball-Multiplikator?",
          a: "Nach der Hauptziehung wird ein Multiplikator zwischen 5x und 100x generiert. Wenn der Mega Ball eine Gewinnlinie vervollständigt, wird die Auszahlung entsprechend multipliziert."
        },
        {
          q: "Was ist die zweite Mega Ball?",
          a: "Die zweite Mega Ball ist eine seltene Zusatzziehung, die eine weitere Chance auf eine Gewinnlinie mit Multiplikator bietet."
        },
        {
          q: "Ist Mega Ball eher Bingo oder eine Game-Show?",
          a: "Es kombiniert beides. Die Mechanik basiert auf Bingo-Linien, während Präsentation und Tempo einer Live-Casino-Game-Show entsprechen."
        },
        {
          q: "Können Tracker-Daten zukünftige Ergebnisse vorhersagen?",
          a: "Nein. Tracker-Daten helfen bei der Analyse vergangener Runden und Live-Statistiken, aber jede Ziehung ist unabhängig."
        }
      ]
    },
    dreamcatcherReview: {
      title: "Dream Catcher Live: Echtzeit-Statistiken, Ergebnisse & Vollständiger Spielleitfaden",
      intro:
        "Dream Catcher ist Evolution Gamings Flaggschiff-Money-Wheel-Spiel, das die Live-Casino-Unterhaltung seit seinem Start im Jahr 2017 revolutioniert hat. Dieses Glücksrad-Erlebnis verbindet die Aufregung einer TV-Spielshow mit echtem Glücksspiel, alles in Ultra-HD aus professionellen Studios in Lettland gestreamt.\n\nIm Gegensatz zu traditionellen Tischspielen sind bei Dream Catcher keine Vorkenntnisse im Glücksspiel erforderlich. Sie setzen einfach auf eine Zahl, sehen zu, wie sich das Rad dreht, und kassieren Ihre Gewinne, wenn es auf Ihrer Wahl landet. Die Multiplikatorsegmente eröffnen Möglichkeiten für massive Auszahlungen von bis zu 20.000-fachem Ihres Einsatzes.",
      playbtn: "Spielen",
      heroAlt: "Dream Catcher Live Money Wheel Spiellogo",
    
      quickOverviewTitle: "Kurze Spielübersicht",
      specFeature: "Spezifikation",
      specDetails: "Details",
      specProvider: "Spielanbieter",
      specProviderValue: "Evolution Gaming",
      specYear: "Erscheinungsjahr",
      specYearValue: "2017",
      specType: "Spieltyp",
      specTypeValue: "Live Money Wheel",
      specRtp: "RTP",
      specRtpValue: "96,58% (optimal)",
      specBetRange: "Einsatzbereich",
      specBetRangeValue: "€0,10 – €1.000",
      specMaxWin: "Maximaler Gewinn",
      specMaxWinValue: "20.000-facher Einsatz",
      specSegments: "Gesamtsegmente",
      specSegmentsValue: "54",
      specLocation: "Streaming-Standort",
      specLocationValue: "Riga, Lettland",
    
      howWorksTitle: "Wie Dream Catcher Funktioniert",
      howWorksText:
        "Das Spiel verfügt über ein riesiges, vertikal montiertes Rad mit 54 farbigen Segmenten. Ein Live-Moderator dreht das Rad und interagiert dabei über den Chat mit den Spielern, was eine authentische Spielshow-Atmosphäre erzeugt.",
    
      wheelDistributionTitle: "Verteilung der Radsegmente",
      wheelColNumber: "Zahl",
      wheelColSegments: "Segmente",
      wheelColPayout: "Auszahlung",
      wheelColProbability: "Wahrscheinlichkeit",
      wheelDistributionNote:
        "Die nummerierten Segmente zahlen genau das, was sie zeigen – landet das Rad auf 5, erhalten Sie 5:1 auf Ihren Einsatz. So einfach ist das.",
      multiplier2xLabel: "2x Multiplikator",
      multiplier7xLabel: "7x Multiplikator",
    
      multiplierTitle: "Multiplikator-Mechanik",
      multiplierIntro:
        "Die zwei Multiplikatorsegmente (silber 2x und gold 7x) machen das Spiel besonders spannend. Sie können nicht direkt darauf setzen, aber wenn das Rad auf einem davon stoppt:",
      multiplierBullets: [
        "Alle aktuellen Einsätze bleiben aktiv",
        "Das Rad dreht sich erneut",
        "Welche Zahl als nächstes erscheint, wird multipliziert"
      ],
      multiplierNote:
        "Multiplikatoren können sich verketten. Wenn das Rad auf 7x, dann wieder auf 7x und schließlich auf 40 landet, beträgt die Auszahlung 1.960-fach. Das theoretische Maximum beinhaltet mehrere aufeinanderfolgende Multiplikatoren vor einer Landung auf 40, wodurch Gewinne bis zu 20.000-fach möglich sind.",
    
      statsTrackingTitle: "Dream Catcher Live-Statistiken & Ergebnisverfolgung",
      statsTrackingIntro:
        "Die Verfolgung von Dream Catcher-Statistiken hilft Ihnen, das Verhalten des Spiels im Laufe der Zeit zu verstehen. Obwohl jede Drehung unabhängig ist, zeigt die Überwachung der Dream Catcher-Ergebnisse, ob das Rad nahe an den erwarteten Wahrscheinlichkeiten läuft.",
      trackingBullets: [
        "Aktueller Multiplikatorstatus (aktiv oder nicht)",
        "Drehungen seit dem letzten Multiplikatortreffer",
        "Zahlenhäufigkeit über verschiedene Zeiträume",
        "Heiße und kalte Segmente basierend auf aktuellen Dream Catcher-Echtzeitergebnissen"
      ],
      statsTrackingNote:
        "Viele Spieler nutzen Dream Catcher Live-Statistik-Dashboards, um Muster zu erkennen. Denken Sie jedoch daran: Vergangene Ergebnisse beeinflussen zukünftige Drehungen nicht.",
    
      strategiesTitle: "Erwägenswerte Wettstrategien",
      strategies: [
        {
          title: "Verteilen Sie Ihre Einsätze",
          text:
            "Das Abdecken mehrerer Segmente erhöht die Trefferfrequenz. Gleichzeitig auf 1, 2 und 5 zu setzen bedeutet, bei etwa 83% der Drehungen zu gewinnen (ohne Multiplikatorsegmente)."
        },
        {
          title: "Auf Hochzahlende Zahlen Abzielen",
          text:
            "Die Konzentration auf 10, 20 oder 40 bedeutet weniger Gewinne, aber größere Auszahlungen, wenn sie treffen. Ein erfolgreicher 40er-Einsatz macht viele verlorene Runden wett."
        },
        {
          title: "Niedrige Einsätze, Mehr Drehungen",
          text:
            "Das Minimum von €0,10 ermöglicht es Ihnen, kleinere Bankrolls auf Hunderte von Drehungen auszudehnen. Mehr Drehungen bedeuten mehr Chancen, diese Multiplikatorketten zu erwischen."
        }
      ],
    
      rtpBreakdownTitle: "RTP-Aufschlüsselung nach Wetttyp",
      rtpBreakdownIntro:
        "Nicht alle Wetten bieten gleiche theoretische Renditen.",
      rtpColBet: "Wette",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "Die niedrigeren Zahlen bieten besseren langfristigen Wert, während die 40 mit ihrem reduzierten RTP eine höhere Varianz aufweist.",
    
      whyLoveTitle: "Warum Spieler Dream Catcher Lieben",
      whyLoveBullets: [
        "Sofortiges Verständnis – Keine komplexen Regeln oder Strategien zu erlernen",
        "Spielshow-Energie – Professionelle Moderatoren sorgen für anhaltende Unterhaltung",
        "Multiplikator-Spannung – Jede Drehung könnte eine Kettenreaktion auslösen",
        "Zugängliche Einsätze – Spielen Sie von €0,10 bis zu €1.000 pro Drehung",
        "Mobiloptimiert – Volles Erlebnis auf jedem Gerät"
      ],
    
      faqTitle: "Häufig Gestellte Fragen",
      faq: [
        {
          q: "Kann ich während des Spiels Dream Catcher Live-Statistiken sehen?",
          a: "Ja – die Spieloberfläche zeigt aktuelle Dream Catcher-Ergebnisse und Gewinnzahlen. Drittanbieter-Stat-Tracker bieten tiefere historische Analysen der Dream Catcher-Statistiken über Tausende von Drehungen."
        },
        {
          q: "Was passiert, wenn das Rad mehrfach auf Multiplikatoren landet?",
          a: "Multiplikatoren stapeln sich. Zwei aufeinanderfolgende 7x-Treffer gefolgt von einer Zahl bedeuten, dass diese Zahl das 49-fache ihres normalen Satzes auszahlt. Ketten sind selten, erzeugen aber die größten Gewinne des Spiels."
        },
        {
          q: "Gibt es eine Möglichkeit, Dream Catcher-Echtzeitergebnisse vorherzusagen?",
          a: "Nein. Jede Drehung nutzt einen zertifizierten Zufallsmechanismus. Die Verfolgung von Dream Catcher Live-Statistiken kann Ihre Wettmluster informieren, aber keine Ergebnisse vorhersagen."
        },
        {
          q: "Warum hat die 40er-Wette einen niedrigeren RTP als andere Zahlen?",
          a: "Mit nur einem Segment von 54 erscheint die 40 etwa 1,9% der Zeit. Die 40:1-Auszahlung kompensiert diese Seltenheit nicht vollständig, was zu einem höheren Hausvorteil führt."
        },
        {
          q: "Wie vergleichen sich Dream Catcher-Ergebnisse mit Slot-RTPs?",
          a: "Dream Catchers optimaler RTP von 96,58% liegt bequem im Standardbereich von Online-Slots (typischerweise 94-97%), was es für ein Live-Spielformat wettbewerbsfähig macht."
        }
      ]
    },

dreamcatcherStatsExtra: {
  trackedMetaPrefix: "Letzte 30 Minuten",
  bestWinsTitle: "Top Gewinne pro Dreh",
  bestWinsText: "Ein schneller Überblick über die höchsten Auszahlungen der zuletzt erfassten Drehungen.",
  wheelStatsTitle: "Multiplikator-Statistiken des Rades",
  wheelStatsText: "Sieh, wie oft die Multiplikator-Felder im gleichen Zeitraum gefallen sind.",
  matchedTitle: "Übereinstimmende Multiplikatoren",
  matchedText: "Vergleiche Multiplikator-Treffer mit normalen Drehungen im aktuellen Datensatz.",
  finished: "Abgeschlossen",
  outcome: "Ergebnis",
  player: "Spieler",
  wonAmount: "Gewinnbetrag",
  multiplier: "Multiplikator",
  match: "Übereinstimmung",
  noMatch: "Keine Übereinstimmung"
},
    gamePanels: {
      temperatureSubtitle:
        "Die Segment-Temperatur zeigt heiße und kalte Ergebnisse in Echtzeit basierend auf aktuellen Spins im Vergleich zur erwarteten Wahrscheinlichkeit.",
      temperatureSpinsSince: "seit {n} Drehungen",
    
      historySubtitle:
        "Sieh dir die neuesten Spins mit Echtzeit-Ergebnissen, Multiplikatoren, Gewinnern und Auszahlungen an.",
    
      rtpBasedOn: "Basierend auf den letzten 1.000 Spins",
    
      summaryTotalSpinsToday: "Spins heute",
      summaryBonusRounds: "Bonusrunden",
      summaryBiggestMultiplier: "Größter Multiplikator",
      summaryAvgPayout: "Ø Auszahlung",
    
      occurredAt: "Zeitpunkt",
      slotResult: "Slot-Ergebnis",
      spinResult: "Spin-Ergebnis",
      specialResult: "Spezial-Ergebnis",
      multiplier: "Multiplikator",
      totalWinners: "Gewinner",
      totalPayout: "Gesamtauszahlung",
    
      watch: "Ansehen"
    },
    homeSeo: {
      sectionTitle: "Über Unsere Plattform für Live-Casino-Statistiken",
      whoTitle: "Wer Wir Sind",
      whoText1: "Wir sind eine unabhängige Analyseplattform für Live-Casinospiele, die Statistiken in Echtzeit sammelt, verarbeitet und visualisiert.",
      whoText2: "Unser Ziel ist es, Spielern transparente Daten auf Basis echter Spielergebnisse bereitzustellen und ihnen zu helfen, Live-Casino-Statistiken und aktuelle Resultate besser zu verstehen.",
      howTitle: "Wie Wir Informationen Sammeln",
      howText1: "Wir nutzen automatisierte Datenerfassungssysteme, die Ergebnisse von Live-Casinospielen in Echtzeit verfolgen.",
      howText2: "Die Daten stammen aus offenen Broadcast-Quellen, Live-Spielstreams und öffentlichen Schnittstellen der Anbieter. So können wir Spielergebnisse und Echtzeit-Ergebnisse fortlaufend überwachen.",
      howText3: "Alle Ergebnisse werden zusätzlich verarbeitet und algorithmisch geprüft, um Verzögerungen zu minimieren und eine hohe statistische Genauigkeit sicherzustellen. Die Plattform basiert auf modernen Datentechnologien wie Stream-Synchronisierung, automatisiertem Parsing und analytischen Modellen."
    },
    monopolyReview: {
      title: "Monopoly Live Bewertung: Das ultimative Live-Casino-Game-Show-Erlebnis",
      intro: "Willkommen zum ultimativen Guide zu Monopoly Live, einem der beliebtesten Live-Dealer-Spiele aller Zeiten. Entwickelt vom legendären Anbieter Evolution Gaming, kombiniert dieser Titel ein riesiges Geldrad mit einer beeindruckenden 3D-Bonusrunde in Augmented Reality mit Mr. Monopoly höchstpersönlich. Egal, ob du Monopoly Live online spielen oder nur die neuesten Spielstatistiken prüfen möchtest – hier findest du alle Informationen, die du brauchst.",
      playbtn: "Spielen",
      heroAlt: "Monopoly Live Rad mit Live-Moderatorin und Game-Show-Studio",
      tableFeature: "Funktion",
      tableDetails: "Details",
      gameNameLabel: "Spielname",
      providerLabel: "Anbieter",
      gameTypeLabel: "Spieltyp",
      rtpLabel: "RTP",
      maxWinLabel: "Maximaler Gewinn",
    
      gameTypeValue: "Live-Casino-Game-Show",
      rtpValue: "Bis zu 96,23 %",
      maxWinValue: "$500.000 (oder entsprechender Multiplikatorwert)",
    
      sectionsTitle: "Wichtige Monopoly Live Funktionen",
    
      wheelTitle: "Monopoly Live Das Geldrad (Basisspiel)",
      wheelText: "Der Kern des Monopoly Live Casino-Erlebnisses. Ein echter Live-Host dreht ein riesiges vertikales Rad mit 54 Segmenten. Spieler setzen auf Zahlen (1, 2, 5, 10), um sofortige Geldgewinne entsprechend der gelandeten Zahl zu erhalten.",
    
      chanceTitle: "Monopoly Live Das 'Chance'-Segment",
      chanceText: "Wenn das Rad auf einem 'Chance'-Segment landet, erhalten Spieler entweder einen sofortigen Geldpreis oder einen spannenden Multiplikator-Bonus. Wenn ein Multiplikator erscheint, dreht der Host das Rad erneut und dein nächster Gewinn wird multipliziert.",
    
      bonus3dTitle: "Monopoly Live Die 3D-Bonusrunde",
      bonus3dText: "Das Highlight des Monopoly Live Spiels. Wenn du auf '2 ROLLS' oder '4 ROLLS' setzt und das Rad dort stoppt, betritt Mr. Monopoly eine 3D-Brettspielwelt, sammelt Preise und Multiplikatoren und vermeidet Steuern.",
    
      howToPlayTitle: "So spielt man Monopoly Live",
      howToPlayIntro: "Der Einstieg in ein Online-Casino mit Monopoly Live ist unglaublich einfach. Folge einfach diesen Schritten:",
      step1: "Platziere deine Einsätze: Du hast ein kurzes Einsatzfenster, um deine Chips auf 1, 2, 5, 10, '2 Rolls' oder '4 Rolls' zu setzen.",
      step2: "Der Dreh: Der Live-Dealer dreht das Rad. Du kannst Monopoly Live verfolgen, während das Rad langsamer wird.",
      step3: "Die Auszahlung: Wenn das Rad auf deiner Zahl stoppt, gewinnst du. Wenn es auf einem Bonusspiel landet und du darauf gesetzt hast, kommst du in die 3D-Runde.",
    
      statsTitle: "Monopoly Live Statistiken, Ergebnisse & Tracker",
      statsText1: "Für viele ernsthafte iGaming-Fans ist das Verfolgen des Spiels genauso wichtig wie das Spielen selbst. Da es sich um ein Wahrscheinlichkeitsspiel handelt, nutzen viele Spieler einen Monopoly Live Tracker, um Spieltrends zu beobachten.",
      statsText2: "Durch die Analyse von Monopoly Live Statistiken kannst du die Häufigkeit von Bonusrunden, durchschnittliche Multiplikatoren sowie kalte und heiße Zahlen sehen. Wenn du die Monopoly Live Historie prüfst, kannst du die heutigen Monopoly Live Ergebnisse einsehen. Vergangene Ergebnisse garantieren zwar keine zukünftigen Resultate, aber ein Casino-Scoreboard für Monopoly Live kann Spielern Einblicke geben, wie sich das Rad während ihrer Session verhält. Denke immer daran, verantwortungsvoll zu spielen – unabhängig davon, was die Monopoly Live Ergebnisse zeigen.",
      statsNote: "Hinweis: Wenn dir dieses Format gefällt, solltest du dir vielleicht auch Monopoly Big Baller live ansehen – ein Bingo-ähnliches Spin-off mit ebenfalls spannenden Monopoly Big Baller Ergebnissen heute live.",
    
      freePlayTitle: "Monopoly Live Kann man kostenlos spielen?",
      freePlayText: "Viele Spieler suchen nach einer Monopoly Live Casino-Demo oder Monopoly Live kostenlos. Da es sich um ein Live-Studio-Spiel mit echten Dealern handelt, gibt es keine spielbare Demo mit Spielgeld. Du kannst jedoch jedes Online-Casino mit Monopoly Live öffnen und den Monopoly Live Stream kostenlos ansehen, um die Regeln zu lernen, bevor du echtes Geld einsetzt.",
    
      faqTitle: "Häufig gestellte Fragen (FAQ)",
      faq: [
        {
          q: "Monopoly Live Wo finde ich Ergebnisse und Statistiken?",
          a: "Du findest Monopoly Live Statistiken direkt in der Spieloberfläche, die die zuletzt gewonnenen Segmente anzeigt. Für tiefere Analysen bieten viele externe Casino-Tracker-Websites eine umfassende Monopoly Live Historie."
        },
        {
          q: "Monopoly Live Gibt es eine Casino-App?",
          a: "Es gibt keine eigenständige Monopoly Live apk. Du kannst das Spiel jedoch problemlos mobil spielen, indem du die offizielle App eines lizenzierten Casinos herunterlädst, das Evolution Gaming Titel anbietet."
        },
        {
          q: "Monopoly Live Was ist der Unterschied zu Monopoly Big Baller?",
          a: "Obwohl beide Spiele Mr. Monopoly und 3D-Bonusrunden bieten, verwendet das Originalspiel ein drehendes Geldrad, während Monopoly Big Baller live casino eine bingoähnliche Kugelziehmaschine nutzt."
        },
        {
          q: "Monopoly Live Wie komme ich in das 3D-Bonusspiel?",
          a: "Um am 3D-Brettspiel teilzunehmen, musst du auf die Einsatzfelder '2 ROLLS' oder '4 ROLLS' setzen. Wenn das Rad auf einem dieser Segmente stoppt, beginnt die Bonusrunde."
        },
        {
          q: "Monopoly Live Kann ich mit dem Live-Dealer interagieren?",
          a: "Ja. Das Spiel bietet einen Monopoly Live Casino-Chat, in dem du mit dem Host und anderen Spielern sprechen kannst, was das Monopoly Live Erlebnis besonders sozial und unterhaltsam macht."
        },
        {
          q: "Monopoly Live Sind die Ergebnisse manipuliert?",
          a: "Nein. Monopoly Live von Evolution Gaming wird streng geprüft und von führenden Glücksspielbehörden lizenziert. Das Rad ist vollständig physisch und zufällig, wodurch jedes Monopoly Live Ergebnis zu 100 % fair ist."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Niedrige Würfelwürfe",
      diceRollsMidTitle: "Monopoly Live Mittlere Würfelwürfe",
      diceRollsHighTitle: "Monopoly Live Hohe Würfelwürfe",
      trackedMeta: "Letzte 6 Stunden • 258 Drehungen",
    
      boardMovesTitle: "Monopoly Live Statistik der Brettbewegungen",
      bonusGameStats: "Bonusspiel-Statistiken",
      doublesRolled: "Gewürfelte Pasche",
      avgBoardRolls: "Durchschnittliche Brettwürfe pro Bonusspiel",
    
      landingStatsTitle: "Monopoly Big Baller Statistik der Landefelder",
    
      bestIndividualWinsTitle: "Monopoly Live Beste Einzelgewinne",
      latestTopMultipliersTitle: "Monopoly Live Neueste Top-Multiplikatoren",
    
      finished: "Beendet",
      player: "Spieler",
      wonAmount: "Gewinnbetrag",
      multiplier: "Multiplikator",
      bigWinClip: "Großgewinn-Clip",
      bonusRound: "Bonusrunde",
      watchClip: "Clip ansehen",
      biggestWinsGallery: "Galerie der größten Gewinne"
    },
    seo: {
      nl: {
        lightningroulette: {
          title: "Lightning Roulette statistieken, RTP & live resultaten",
          description: "Volg Lightning Roulette met RTP, multipliers, Lucky Numbers, spingeschiedenis, uitbetalingen en live resultaten online."
        }
      },
      home: {
        title: "Casino Score Live 🔥 Live Stats und Real-Time Results [2026]",
        description: "Casino Score Live ist dein zentraler Hub für live stats und real-time results im Jahr 2026. Analysiere RTP, verfolge hot or cold streaks und triff sichere, datenbasierte Betting-Entscheidungen."
      },
      megaball:{ 
        title:"Mega Ball Live Statistiken & Ergebnisse – Online spielen + RTP & Trends",
        description:"Mega Ball Live-Statistiken und Ergebnisse mit RTP-Analyse. Verfolge Trends, Multiplikatoren und Resultate in Echtzeit. Spiele online oder teste die Demo."
      },    
      crazytime: {
        title: "Crazy Time Statistiken – Live-Ergebnisse & Multiplikator-Tracker",
        description: "Crazy Time Live-Statistiken in Echtzeit aktualisiert. Verfolge Radergebnisse, Bonusrunden und Multiplikatoren bis zu 2000x. Nutze Daten, um deine Gewinnstrategie aufzubauen. Jetzt ansehen!"
      },
      monopoly: {
        title: "Monopoly Live Statistiken 2026 | Offizieller Ergebnis-Tracker",
        description: "Offizielle Monopoly Live Statistiken für 2026. Echtzeit-Ergebnisse, verifizierter Verlauf und Evolution Gaming Daten. Verfolge Resultate und spiele sicher."
      },
      dreamcatcher: {
        title: "Dream Catcher Ergebnisse & Live-Statistiken 2026 - Scores in Echtzeit 🎰",
        description: "Dream Catcher Ergebnisse heute, Live-Stats und Scores in Echtzeit. Verfolge Verlauf, Gewinn-Statistiken und Trends 2026. Sofort Zugriff auf jeden Spin."
      },
    },
    crazytimeStream: {
      title: "Crazy Time Live-Stream",
      subtitle: "Sehen Sie den Live-Stream von Crazy Time direkt auf dieser Seite.",
      liveLabel: "Live-Stream",
      watchLivestream: "Live-Stream Ansehen"
    },
    crazytimeReview: {
      faqTitle: "Häufig Gestellte Fragen",
      faq: [
        {
          q: "Ist Crazy Time ein Geschicklichkeits- oder Glücksspiel?",
          a: "Crazy Time ist in erster Linie ein Glücksspiel. Während Spieler Statistiken und Tracking-Tools verwenden können, um aktuelle Ergebnisse besser zu verstehen, bleibt jede Runde unabhängig."
        },
        {
          q: "Was ist der maximale Multiplikator bei Crazy Time?",
          a: "Das maximal beworbene Potenzial bei Crazy Time kann während der Crazy Time Hauptbonusrunde bis zu 20.000x erreichen."
        },
        {
          q: "Kann ich an Bonusrunden teilnehmen, wenn ich nicht direkt darauf gewettet habe?",
          a: "Wenn die Spielregeln und die aktuelle Konfiguration dies durch Bonusmechaniken wie Mindesteintritt oder Top Slot-Effekte erlauben, können Spieler dennoch bestimmte Bonusergebnisse mit einem reduzierten Multiplikator betreten."
        },
        {
          q: "Sind Crazy Time Live-Statistiken vorhersagend?",
          a: "Nein. Live-Statistiken helfen, aktuelle Aktivitäten zu visualisieren, sagen aber keine zukünftigen Ergebnisse voraus. Jeder Dreh ist unabhängig."
        }
      ],
      whatIsTitle: "Was ist Crazy Time?",
      whatIsText: "Crazy Time ist ein Live-Casino-Spiel, das von Evolution Gaming entwickelt und 2020 veröffentlicht wurde. Es kombiniert ein Geldrad-Format mit vier interaktiven Bonusrunden und bietet eines der ansprechendsten Live-Casino-Erlebnisse, die heute verfügbar sind.",
    
      tableParameter: "Parameter",
      tableDetails: "Details",
      gameName: "Spielname",
      provider: "Anbieter",
      rtp: "RTP",
      releaseYear: "Erscheinungsjahr",
      gameType: "Spieltyp",
      minBet: "Min. Einsatz",
      maxBet: "Max. Einsatz",
      volatility: "Volatilität",
      gameTypeValue: "Live-Game-Show",
      volatilityValue: "Hoch",
    
      howToPlayTitle: "Wie man Crazy Time spielt",
      howToPlayText: "Das Crazy Time Live-Spiel folgt einem einfachen Format:",
      step1: "Platzieren Sie Ihre Wette auf ein oder mehrere Radsegmente, bevor die Zeit abläuft",
      step2: "Sehen Sie zu, wie sich das Rad dreht — ein Live-Moderator leitet die gesamte Sitzung in Echtzeit",
      step3: "Gewinnen Sie, wenn das Rad auf Ihrem gewählten Segment landet",
      step4: "Lösen Sie eine Bonusrunde aus, wenn der Zeiger auf einem Bonussegment landet",
    
      wheelBreakdownTitle: "Aufschlüsselung der Radsegmente",
      wheelSegment: "Segment",
      wheelOccurrences: "Vorkommen auf dem Rad",
      wheelMultiplier: "Multiplikator",
      upTo2000x: "Bis zu 2000x",
      upTo10000x: "Bis zu 10.000x",
      upTo20000x: "Bis zu 20.000x",
    
      bonusRoundsTitle: "Crazy Time Bonusrunden",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Eine Schießbude mit 108 zufälligen Multiplikatoren, die hinter Symbolen versteckt sind. Spieler wählen eines aus, um ihren Preis zu enthüllen.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Eine einfache zweiseitige Münze wird geworfen. Jede Seite zeigt einen Multiplikator — rot oder blau. Schnell, sauber, aufregend.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Eine riesige physische Pachinko-Wand lässt einen Puck von oben fallen. Er springt durch Stifte und landet auf einem Multiplikator unten. Kann sich unendlich verdoppeln, bis ein Nicht-Doppel-Multiplikator getroffen wird.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonus)",
      crazyTimeBonusText: "Das Hauptereignis. Ein massives virtuelles Rad mit drei Zeigern dreht sich in einer digitalen Welt. Spieler wählen einen Zeiger vor dem Dreh. Die höchste potenzielle Belohnung erreicht 20.000x.",
    
      rulesTitle: "Crazy Time Spielregeln: Wichtige Punkte",
      rule1: "Sie können gleichzeitig auf mehrere Segmente wetten",
      rule2: "Der Top Slot über dem Hauptrad fügt einen Multiplikator hinzu oder löst einen Bonuseintritt mit erhöhten Multiplikatoren aus",
      rule3: "Wenn Sie nicht auf ein Bonussegment gewettet haben, es aber landet, nehmen Sie trotzdem am Bonus teil (mit Minimalmultiplikator)",
      rule4: "Alle Bonusmultiplikatoren werden mit Ihrem ursprünglichen Einsatz multipliziert, nicht nur eine pauschale Belohnung",
    
      statsTitle: "Crazy Time Live-Statistiken & Ergebnisse",
      statsText: "Das Verständnis von Crazy Time-Statistiken hilft bei Ihren Sitzungsentscheidungen. Die meisten Plattformen zeigen einen Live-Statistik-Tracker direkt in der Spieloberfläche an.",
      typicalStatsTitle: "Typische Statistiken, die Sie sehen werden:",
      stat1: "Ergebnisse der letzten 100 Drehungen — Verteilung jedes landenden Segments",
      stat2: "Bonushäufigkeit — wie oft jede Bonusrunde ausgelöst wurde",
      stat3: "Multiplikatorverlauf — höchste Multiplikatoren in den letzten Runden",
      stat4: "Heiße und kalte Segmente — visuelle Indikatoren der Segmenthäufigkeit",
      tip: "Profi-Tipp:",
      tipText: "Der Crazy Time Statistik-Tracker ist kein Vorhersagewerkzeug — frühere Ergebnisse beeinflussen zukünftige Drehungen nicht. Der RNG und das Live-Rad arbeiten jede Runde unabhängig.",
    
      whyPlayTitle: "Warum Crazy Time Online spielen?",
      prosTitle: "🏆 Vorteile:",
      pro1: "Außergewöhnliche Produktionsqualität von Evolution Gaming",
      pro2: "Vier verschiedene Bonusspiele — nie repetitiv",
      pro3: "Massives maximales Multiplikatorpotenzial (bis zu 20.000x)",
      pro4: "Rund um die Uhr in praktisch jedem großen Live-Casino online verfügbar",
      pro5: "Transparenter Live-Statistik-Tracker in die Oberfläche integriert",
    
      consTitle: "⚠️ Nachteile:",
      con1: "Hohe Volatilität — lange Pechsträhnen sind möglich",
      con2: "Echtes Demo-Spiel ist nicht verfügbar (Live-Format-Einschränkung)",
      con3: "Höchste Multiplikatoren sind absichtlich selten"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Erweiterte Crazy Time Bonus-Statistiken",
    
      flapperTitle: "Crazy Bonus Flapper",
      flapperText: "Vergleiche die durchschnittlichen Multiplikatoren der drei Crazy Time Flapper-Farben. Diese Werte geben einen schnellen Überblick über die kurzfristige Performance im Vergleich zum langfristigen Durchschnitt.",
      avgAlways: "Langzeit-Ø",
      flapperFootnote: "Die Markierung zeigt den langfristigen Referenzwert des durchschnittlichen Multiplikators für die ausgewählte Flapper-Farbe auf Basis historischer Tracking-Daten.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Vergleiche rote und blaue Coin Flip Ergebnisse mit durchschnittlichen Multiplikatoren und Trefferhäufigkeit im Vergleich zu langfristigen Erwartungen.",
      avgMultiplier: "Ø Multiplikator",
      frequency: "Häufigkeit",
      vsAvg: "vs Ø",
      coinFlipFootnote: "Die Markierung zeigt den langfristigen Referenzwert der durchschnittlichen Häufigkeit für die ausgewählte Farbe auf Basis erfasster Daten.",
    
      cashHuntSymbolsTitle: "Cash Hunt Symbole",
      cashHuntSymbolsText: "Diese Übersicht zeigt den durchschnittlichen Multiplikator und die Erscheinungshäufigkeit jedes Cash Hunt Zielsymbols.",
      times: "Mal",
    
      recentCashHuntTitle: "Cash Hunt: Letzte Multiplikatoren",
      recentCashHuntText: "Verfolge die letzten Multiplikatoren aus Cash Hunt Runden. Hervorgehobene Felder markieren die stärksten und schwächsten jüngsten Ergebnisse.",
    
      bestBetsTitle: "Beste Einzelwetten",
      bestBetsText: "Diese Tabelle zeigt die stärksten Einzelgewinne im ausgewählten Zeitraum, einschließlich Spieler, Auszahlung, Ergebnis und Multiplikator.",
      date: "Datum",
      result: "Ergebnis",
      player: "Spieler",
      payout: "Auszahlung",
      multiplier: "Multiplikator",
      view: "Ansehen",
    
      latestMaxTitle: "Neueste Höchstmultiplikatoren",
      latestMaxText: "Diese jüngsten Top-Bonusergebnisse zeigen die höchsten Multiplikatoren, die im ausgewählten Zeitraum erreicht wurden.",
      clip: "Clip ansehen",
      biggestWinsGallery: "Galerie der größten Gewinne",
    
      yellow: "Gelb",
      blue: "Blau",
      green: "Grün",
      red: "Rot",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Spielen 🎰"
    },
    
    gamePage: {
      statisticsTitleSuffix: "Statistiken",
      subtitlePrefix: "Verfolge Echtzeit-Ergebnisse, Verlauf und Statistiken für",
      playCta: "Jetzt spielen"
    },
    nav: { home: "Start", liveGames: "Live-Spiele" },
    home: {
      heroTitleBefore: "Live Casino",
      heroTitleAccent: "Statistiken",
      heroTitleAfter: "& Echtzeit-Ergebnisse",
      heroText: "Live-Casino-Statistiken, Spielergebnisse und Echtzeit-Ergebnisse für deine liebsten Live-Casino-Game-Shows. Verfolge RTP, heiße oder kalte Serien und die größten Gewinne — 100% kostenlos, kein Konto nötig.",
      liveGames: "Live-Spiele",
      featuresTitle: "Unsere Funktionen",
      testimonialsTitle: "Testimonials"
    },
    features: {
      noDownloadTitle: "Kein Download nötig",
      noDownloadText: "Alle Daten direkt im Browser anzeigen.",
      accurateDataTitle: "Genaue Daten",
      accurateDataText: "Automatisches Tracking jedes Spins in Echtzeit.",
      freeTitle: "100% kostenlos",
      freeText: "Tracksino ist komplett kostenlos nutzbar."
    },
    footer: {
      games: "Spiele",
      moreGames: "Mehr Spiele",
      resources: "Ressourcen",
      faq: "FAQ",
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
      description: "Verfolge Live-Casino-Games in Echtzeit."
    },
    homeFaq: {
      faqTitle: "FAQ zu Live-Casino-Statistiken",
      faqIntro: "Antworten zu live casino statistics, game results und real-time results auf unserer Plattform.",
      faq: [
        {
          q: "Was sind Live-Casino-Statistiken?",
          a: "Das sind Daten auf Basis echter Spielergebnisse und Echtzeit-Ergebnisse aus Live-Dealer-Streams."
        },
        {
          q: "Wie sammelt ihr die Spielergebnisse?",
          a: "Wir überwachen öffentliche Streams, Anbieter-Schnittstellen und Broadcast-Quellen mit automatisierten Systemen."
        },
        {
          q: "Wie oft werden die Echtzeit-Ergebnisse aktualisiert?",
          a: "Die Echtzeit-Ergebnisse werden fortlaufend aktualisiert und vor der Anzeige geprüft."
        },
        {
          q: "Können Statistiken das nächste Ergebnis vorhersagen?",
          a: "Nein. Statistiken helfen, Ergebnisse und Trends besser zu verstehen, sagen aber die Zukunft nicht voraus."
        }
      ]
    },
    common: {
      player: "Spieler",
      verifiedUser: "Verifizierter Nutzer",
      liveNow: "Jetzt live",
      hour: "Stunde",
      hours: "Stunden",
      spins: "Drehungen"
    },
    tabs: {
      temperature: "Temperatur",
      history: "Verlauf",
      stats: "Statistiken",
      bigwins: "Top-Gewinne",
      review: "Bewertung",
      stream: "Stream",
    }
  },

  nl: {
    lightningrouletteReview: {
      title: "Lightning Roulette Review, RTP en Live Statistieken",
      intro:
        "Lightning Roulette is een live roulettevariant gebaseerd op het Europese wiel. Het spel volgt standaard rouletteregels, maar elke ronde kan willekeurige vermenigvuldigers toewijzen aan geselecteerde Geluksgetallen, wat een hogere volatiliteitsversie van traditionele live roulette creëert.",
    
      quickOverviewTitle: "Snelle Spelomschrijving",
      tableParameter: "Parameter",
      tableDetails: "Details",
    
      specProvider: "Provider",
      specProviderValue: "Evolution Gaming",
      specGameName: "Speelnaam",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Releasejaar",
      specReleaseYearValue: "2018",
      specGameType: "Speltype",
      specGameTypeValue: "Live Dealer Roulette",
      specWheel: "Wielformaat",
      specWheelValue: "Europese Roulette (enkele nul)",
      specRtp: "RTP",
      specRtpValue: "97,30% bij standaardweddenschappen; 97,10% bij rechtstreekse weddenschappen",
      specMinBet: "Minimale Inzet",
      specMinBetValue: "$0,20",
      specMaxBet: "Maximale Inzet",
      specMaxBetValue: "$10.000",
      specMaxWin: "Maximale Vermenigvuldiger",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Geluksgetallen",
      specLuckyNumbersValue: "1 tot 5 per ronde",
      specVolatility: "Volatiliteit",
      specVolatilityValue: "Gemiddeld tot hoog",
      specMobile: "Mobiel Spelen",
      specMobileValue: "Ondersteund",
    
      aboutTitle: "Wat is Lightning Roulette?",
      aboutText1:
        "Lightning Roulette is een live roulettesspel dat het Europese wieltje met enkele nul en de standaard weddenscaplay behoudt, terwijl willekeurige vermenigvuldigerevents voor elke spin worden toegevoegd. Dit format wordt vaak beschreven als lightning roulette live of lightning roulette online omdat het spel een echte studiodealer combineert met een vermenigvuldigingsmechaniek die wordt gegenereerd voordat de bal landt.",
      aboutText2:
        "In praktische zin is het verschil met klassieke roulette eenvoudig: één tot vijf getallen worden elke ronde Geluksgetallen, en als een rechtstreekse weddenschap op een van hen landt, gebruikt de uitbetaling de toegewezen vermenigvuldiger in plaats van de reguliere rechtstreekse uitbetaling. Dit is het kernidee achter de meeste lightning roulette reviewpagina's en statistiekenvolgers.",
    
      howToPlayTitle: "Hoe Lightning Roulette Spelen",
      howToPlayText1:
        "Hoe Lightning Roulette spelen is eenvoudig voor iedereen die bekend is met roulette. Spelers plaatsen weddenschappen tijdens de inzetfase, vervolgens onthult het spel de Geluksgetallen en hun vermenigvuldigers voordat de live spin begint.",
      howToPlayText2:
        "Lightning roulette regels zijn gebaseerd op Europese roulette, dus buitenweddenschappen, dozijnen, kolommen en binnenweddenschappen werken zoals verwacht. Het extra mechanisme beïnvloedt alleen rechtstreekse weddenschappen die op geselecteerde Geluksgetallen landen.",
      howToPlayBullets: [
        "Kies chipwaarden en plaats weddenschappen op de roulettelay-out.",
        "Wacht tot het spel 1 tot 5 Geluksgetallen met willekeurige vermenigvuldigers toewijst.",
        "Kijk hoe de croupier het wiel draait en de bal loslaat.",
        "Als je rechtstreekse weddenschap een Geluksgetal raakt, gebruikt de ronde de Lightning vermenigvuldiger uitbetaling.",
        "Alle niet-vermenigvuldigde weddenschappen worden volgens standaard Europese rouletteregels afgehandeld."
      ],
    
      payoutTitle: "Lightning Roulette Uitbetalingen",
      payoutIntro:
        "Lightning roulette uitbetalingen volgen standaard roulette voor de meeste weddenschappen, terwijl het belangrijkste verschil verschijnt bij rechtstreekse getallen. Wanneer een geselecteerd Geluksgetal wint, vervangt de toegewezen vermenigvuldiger de reguliere rechtstreekse uitbetaling en kan tot 500x bereiken.",
    
      payoutColBet: "Weddenschapstype",
      payoutColPayout: "Uitbetaling",
      payoutColNote: "Hoe Het Werkt",
    
      payoutBetStraightLucky: "Rechtstreeks (Geluksgetal)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Toegepast wanneer een rechtstreekse weddenschap op een Geluksgetal met een toegewezen vermenigvuldiger landt.",
    
      payoutBetStraight: "Rechtstreeks (standaard)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Standaard rechtstreekse winst zonder Lightning vermenigvuldiger.",
    
      payoutBetSplit: "Splitsing",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Weddenschap op 2 aangrenzende getallen.",
    
      payoutBetStreet: "Straat",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Weddenschap op 3 getallen in een rij.",
    
      payoutBetCorner: "Hoek",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Weddenschap op 4 getallen.",
    
      payoutBetDozen: "Dozijn / Kolom",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Dekt 12 getallen.",
    
      payoutBetEven: "Rood/Zwart, Oneven/Even, Hoog/Laag",
      payoutValEven: "1:1",
      payoutNoteEven: "Standaard buitenweddenschappen.",
    
      rtpTitle: "Lightning Roulette RTP en Volatiliteit",
      rtpText1:
        "Lightning roulette RTP hangt af van het type weddenschap. Standaardweddenschappen zoals rood/zwart of dozijnen behouden een RTP van ongeveer 97,30%, terwijl rechtstreekse weddenschappen rond de 97,10% liggen omdat het spel deel van de uitbetalingsstructuur herverdeelt om de vermenigvuldigerfunctie te financieren.",
      rtpText2:
        "Wat betreft variantie is het spel volatieler dan klassieke roulette wanneer de focus op binnennummers ligt. Lightning roulette vermenigvuldigers creëren minder frequente maar grotere uitbetalingsmomenten, daarom beschrijven veel spelers het spel als gemiddeld tot hoge volatiliteit in plaats van een standaard rouleprofiel.",
    
      strategyTitle: "Lightning Roulette Strategie Opmerkingen",
      strategyText1:
        "Een lightning roulette strategie verandert de huisvoordeel niet, maar kan het risicoprofiel van een sessie veranderen. Spelers die lagere variantie prefereren blijven meestal dichter bij buitenweddenschappen, terwijl degenen die blootstelling aan vermenigvuldigers willen meer op rechtstreekse dekking concentreren.",
      strategyText2:
        "Vanuit statistisch perspectief wordt het spel het beste benaderd als Europese roulette met een extra vermenigvuldigingslaag. Dit maakt het handig om Gelsgettal frequentie, vermenigvuldiger distributie en uitbetalingsschommelingen over een grotere steekproef bij te houden in plaats van het spel op basis van een korte reeks te beoordelen.",
    
      trackerTitle: "Wat Je Kunt Volgen",
      trackerIntro:
        "Deze sectie van de site is gebouwd voor spelers die lightning roulette online willen beoordelen via recente resultaten, vermenigvuldigers en samenvattingsmetreken in plaats van op korte termijn indrukken te vertrouwen.",
    
      trackLuckyNumbers: "Gelsgettal Geschiedenis",
      trackLuckyNumbersText:
        "Volg welke getallen vermenigvuldigers hebben gekregen en hoe vaak ze in recente rondes voorkomen.",
    
      trackMultipliers: "Vermenigvuldiger Distributie",
      trackMultipliersText:
        "Zie hoe vaak 50x, 100x, 150x, 200x, 300x, 400x en 500x vermenigvuldigers voorkomen.",
    
      trackSpinResults: "Spin Resultaten",
      trackSpinResultsText:
        "Controleer recente resultaten, inclusief winnend getal, lightning getallen en geraamde vermenigvuldigers.",
    
      trackRtp: "RTP Momentopname",
      trackRtpText:
        "Vergelijk waargenomen resultaten met het verwachte rendementsprofiel van het spel.",
    
      trackPatterns: "Resultaatpatronen",
      trackPatternsText:
        "Gebruik recente geschiedenis en distributiegegevens om korte-termijnreeksen en getalfrequentie te volgen.",
    
      comparisonTitle: "Lightning Roulette in één Oogopslag",
      compColArea: "Gebied",
      compColValue: "Lightning Roulette",
      compColMeaning: "Waarom Het Belangrijk Is",
    
      compAreaBase: "Basisformaat",
      compValueBase: "Europese roulette met live dealer",
      compWhyBase:
        "De kernregels blijven vertrouwd voor spelers die al standaard roulette kennen.",
    
      compAreaMultipliers: "Lightning Vermenigvuldigers",
      compValueMultipliers: "1–5 Geluksgetallen, 50x tot 500x",
      compWhyMultipliers:
        "Voegt hogere opside toe aan rechtstreekse weddenschappen zonder buitenweddenschapuitbetalingen te veranderen.",
    
      compAreaRtp: "RTP Profiel",
      compValueRtp: "97,30% standaard / 97,10% rechtstreeks",
      compWhyRtp:
        "Handig voor het begrijpen hoe vermenigvuldiger financiering verschillende weddenschaftypen beïnvloedt.",
    
      compAreaVariance: "Volatiliteit",
      compValueVariance: "Hoger dan klassieke roulette op binnenweddenschappen",
      compWhyVariance:
        "Vermenigvuldiger-gebaseerde uitbetalingen creëren bredere korte-termijnschommelingen.",
    
      compAreaUse: "Beste Gebruikscase",
      compValueUse: "Spelers die roulette met extra variantie willen",
      compWhyUse:
        "Behoudt de standaard roulettestructuur terwijl af en toe verhoogde uitbetalingen worden toegevoegd.",
    
      faqTitle: "Veelgestelde Vragen",
      faq: [
        {
          q: "Wat is Lightning Roulette?",
          a: "Lightning Roulette is een live dealer versie van Europese roulette met willekeurige vermenigvuldigers op geselecteerde Geluksgetallen."
        },
        {
          q: "Hoe werken Lightning Roulette vermenigvuldigers?",
          a: "Voor elke spin selecteert het spel 1 tot 5 Geluksgetallen en wijst vermenigvuldigers van 50x tot 500x toe. Als een rechtstreekse weddenschap op een van die getallen landt, wordt de vermenigvuldiger uitbetaling toegepast."
        },
        {
          q: "Wat is de Lightning Roulette RTP?",
          a: "De typische RTP is ongeveer 97,30% voor standaardweddenschappen en ongeveer 97,10% voor rechtstreekse weddenschappen."
        },
        {
          q: "Verschillen Lightning Roulette uitbetalingen van standaard roulette?",
          a: "De meeste weddenschaftypen gebruiken standaard Europese rouletteuitbetalingen. Het belangrijkste verschil is de vermenigvuldiger-gebaseerde uitbetaling op geselecteerde rechtstreekse getallen."
        },
        {
          q: "Is Lightning Roulette volatieler dan klassieke roulette?",
          a: "Ja. Het vermenigvuldigersysteem creëert bredere korte-termijnvariantie, vooral voor spelers die zich op binnenweddenschappen concentreren."
        }
      ],
    
      conclusionTitle: "Algemene Indruk",
      conclusionText:
        "Als neutrale lightning roulette review kan het spel worden beschreven als standaard Europese roulette met een toegevoegde vermenigvuldigingslaag die volatiliteit verhoogt zonder het kernformaat te veranderen. Voor spelers die geïnteresseerd zijn in lightning roulette live statistieken, is het een handig spel om bij te houden omdat vermenigvuldiger frequentie, Gelsgettal selectie en uitbetalingspatronen allemaal in de tijd kunnen worden gemeten."
    },
    lightningrouletteHistory: {
      panelTitle:  "Draaigeschiedenis",
      subtitle:    "Recente draaien met Lucky Number-resultaten.",
      occurredAt:  "Opgetreden om",
      spinResult:  "Draairesultaat",
      multiplier:  "Vermenigvuldiger",
      firstLucky:  "Eerste geluksgetal",
      secondLucky: "Tweede geluksgetal",
      thirdLucky:  "Derde geluksgetal",
      fourthLucky: "Vierde geluksgetal",
      fifthLucky:  "Vijfde geluksgetal",
    },
    megaballReview: {
      title: "Mega Ball Tracker, RTP en Spelanalyse",
      intro: "Volg statistieken, resultaten en RTP van Mega Ball in realtime met live trackingtools. Bekijk de balgeschiedenis, multiplier-rondes, het aantal winnaars en uitbetalingstrends op één plek.",
  
      quickOverviewTitle: "Snel Speloverzicht",
      tableParameter: "Parameter",
      tableDetails: "Details",
      tableFeature: "Kenmerk",
      tableDescription: "Beschrijving",
  
      specProvider: "Provider",
      specProviderValue: "Evolution Gaming",
      specGameName: "Spelnaam",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95,30%",
      specReleaseYear: "Jaar van Lancering",
      specReleaseYearValue: "2023",
      specGameType: "Speltype",
      specGameTypeValue: "Live game show in bingo-stijl",
      specMinBet: "Inzetbereik",
      specMinBetValue: "Varieert per casino",
      specMaxWin: "Maximale Winst",
      specMaxWinValue: "Tot 1.000.000x",
      specBalls: "Getrokken Ballen",
      specBallsValue: "20 ballen + Mega Ball + mogelijke 2e Mega Ball",
  
      trackerTitle: "Wat Je Kunt Volgen",
      trackerIntro: "Op Tracksino richten Mega Ball trackingtools zich op de belangrijkste live statistieken voor analyse per ronde.",
      trackBallHistory: "Balgeschiedenis",
      trackBallHistoryText: "Bekijk alle getrokken ballen in exacte volgorde.",
      trackMultiplier: "Mega Ball Multiplier",
      trackMultiplierText: "Volg multipliers van 5x tot 100x.",
      trackWinners: "Aantal Winnaars",
      trackWinnersText: "Bekijk hoeveel kaarten of spelers hebben gewonnen.",
      trackPayouts: "Uitbetalingen",
      trackPayoutsText: "Monitor totale uitbetalingen en vergelijk actieve rondes.",
      trackLive: "Bekijk Mega Ball Live",
      trackLiveText: "Open het live spel en vergelijk de actie met de trackerdata.",
  
      aboutTitle: "Wat is Mega Ball?",
      aboutText1: "Mega Ball is een snelle live game show die bingo-achtige kaartmechanieken combineert met loterij-achtige baltrekkingen. Na de hoofdtrekking kunnen één of twee bonusrondes verschijnen, wat extra spanning toevoegt via multipliers.",
      aboutText2: "Het doel is om zoveel mogelijk lijnen op je kaarten te voltooien. Hoe meer lijnen je voltooit, hoe hoger de uitbetalingen, en multiplier-rondes kunnen de winst aanzienlijk verhogen.",
  
      howToPlayTitle: "Hoe Speel Je Mega Ball",
      howToPlayText1: "In Mega Ball worden 20 ballen één voor één getrokken uit een automatische machine. Overeenkomende nummers op de kaarten van de speler worden automatisch gemarkeerd en de kaarten die het dichtst bij winst zijn, worden bovenaan de interface weergegeven.",
      howToPlayText2: "Na de laatste bal wordt een Mega Ball multiplier tussen 5x en 100x gegenereerd. Als de Mega Ball een winnende lijn voltooit, kan de uitbetaling worden vermenigvuldigd. In zeldzame gevallen kan ook een 2e Mega Ball worden getrokken, wat een extra kans op een verhoogde winst biedt.",
      howToPlayBullets: [
        "20 ballen worden snel achter elkaar getrokken.",
        "Overeenkomende nummers worden automatisch gemarkeerd op alle actieve kaarten.",
        "Kaarten die dicht bij voltooiing zijn, verschijnen bovenaan de interface.",
        "Na de hoofdtrekking wordt een Mega Ball multiplier gegenereerd.",
        "Een zeldzame 2e Mega Ball kan een extra kans op een vermenigvuldigde uitbetaling bieden."
      ],
  
      payoutTitle: "Mega Ball Uitbetalingen",
      payoutIntro: "Uitbetalingen in Mega Ball zijn afhankelijk van het aantal voltooide lijnen op één kaart. Horizontale, verticale en diagonale lijnen tellen mee voor de uiteindelijke winst.",
      payoutColLines: "Voltooide Lijnen",
      payoutColPrize: "Uitbetaling",
      payoutColNote: "Hoe Het Werkt",
      payout1Line: "1 horizontale, verticale of diagonale lijn.",
      payout2Lines: "2 lijnen voltooid op één kaart.",
      payout3Lines: "3 lijnen voltooid op één kaart.",
      payout4Lines: "4 lijnen voltooid op één kaart.",
      payout5Lines: "5 lijnen voltooid op één kaart.",
      payout6Lines: "6 lijnen voltooid op één kaart.",
  
      comparisonTitle: "Mega Ball in Één Oogopslag",
      compColArea: "Onderdeel",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Waarom Het Belangrijk Is",
      compAreaBase: "Basisformaat",
      compMegaBallBase: "Live game show in bingo-stijl",
      compMeaningBase: "Combineert kaartvoltooiing met een live trekking.",
      compAreaBonus: "Bonusrondes",
      compMegaBallBonus: "Mega Ball en zeldzame 2e Mega Ball",
      compMeaningBonus: "Voegt multiplierpotentieel toe na de hoofdtrekking.",
      compAreaTracking: "Trackingwaarde",
      compMegaBallTracking: "Hoog",
      compMeaningTracking: "Balvolgorde, winnaars en uitbetalingen zijn eenvoudig te analyseren per ronde.",
      compAreaMaxWin: "Maximale winstpotentieel",
      compMegaBallMaxWin: "Tot 1.000.000x",
      compMeaningMaxWin: "De hoogste winsten hangen af van voltooide lijnen en multipliers.",
  
      faqTitle: "Veelgestelde Vragen",
      faq: [
        {
          q: "Kan ik Mega Ball resultaten live volgen?",
          a: "Ja. Een Mega Ball tracker toont balgeschiedenis, recente uitbetalingen, aantal winnaars en multiplierresultaten per ronde."
        },
        {
          q: "Hoe werkt de Mega Ball multiplier?",
          a: "Na de hoofdtrekking wordt een multiplier tussen 5x en 100x gegenereerd. Als de Mega Ball een lijn voltooit, wordt de uitbetaling vermenigvuldigd."
        },
        {
          q: "Wat is de 2e Mega Ball?",
          a: "De 2e Mega Ball is een zeldzame extra trekking die spelers een extra kans geeft op een winnende lijn met multiplier."
        },
        {
          q: "Is Mega Ball meer bingo of een game show?",
          a: "Het combineert beide. De kernmechaniek is gebaseerd op bingolijnen, terwijl presentatie en tempo lijken op een live casinogame show."
        },
        {
          q: "Kunnen trackergegevens toekomstige resultaten voorspellen?",
          a: "Nee. Trackerdata helpt bij analyse van eerdere rondes en live statistieken, maar elke trekking is onafhankelijk."
        }
      ]
    },
    dreamcatcherReview: {
      title: "Dream Catcher Live: Realtime Statistieken, Resultaten & Complete Spelgids",
      intro:
        "Dream Catcher is Evolution Gaming's vlaggenschip Money Wheel-spel dat de live casino-entertainment transformeerde toen het in 2017 werd gelanceerd. Deze Wheel of Fortune-achtige ervaring combineert de spanning van een tv-spelshow met echt gokken om geld, allemaal gestreamd in ultra-HD vanuit professionele studio's in Letland.\n\nIn tegenstelling tot traditionele tafelspellen vereist Dream Catcher geen voorafgaande gokkennis. U plaatst gewoon een inzet op een getal, kijkt hoe het wiel draait en int uw winst als het op uw keuze landt. De toevoeging van multiplicatorsegmenten creëert kansen op enorme uitbetalingen tot 20.000 keer uw inzet.",
      playbtn: "Speel",
      heroAlt: "Dream Catcher live geldwiel spellogo",
    
      quickOverviewTitle: "Snel Speloverzicht",
      specFeature: "Specificatie",
      specDetails: "Details",
      specProvider: "Spelaanbieder",
      specProviderValue: "Evolution Gaming",
      specYear: "Uitgifte Jaar",
      specYearValue: "2017",
      specType: "Speltype",
      specTypeValue: "Live Geldwiel",
      specRtp: "RTP",
      specRtpValue: "96,58% (optimaal)",
      specBetRange: "Inzetbereik",
      specBetRangeValue: "€0,10 – €1.000",
      specMaxWin: "Maximale Winst",
      specMaxWinValue: "20.000x inzet",
      specSegments: "Totale Segmenten",
      specSegmentsValue: "54",
      specLocation: "Streaminglocatie",
      specLocationValue: "Riga, Letland",
    
      howWorksTitle: "Hoe Dream Catcher Werkt",
      howWorksText:
        "Het spel beschikt over een gigantisch verticaal gemonteerd wiel met 54 gekleurde segmenten. Een live presentator draait het wiel terwijl hij via chat met spelers communiceert, wat voor een authentieke spelshowsfeer zorgt.",
    
      wheelDistributionTitle: "Verdeling van Wielsegmenten",
      wheelColNumber: "Getal",
      wheelColSegments: "Segmenten",
      wheelColPayout: "Uitbetaling",
      wheelColProbability: "Kans",
      wheelDistributionNote:
        "De genummerde segmenten betalen precies wat ze tonen – land op 5 en u krijgt 5:1 op uw inzet. Zo eenvoudig is het.",
      multiplier2xLabel: "2x Multiplicator",
      multiplier7xLabel: "7x Multiplicator",
    
      multiplierTitle: "Multiplicator Mechanismen",
      multiplierIntro:
        "De twee multiplicatorsegmenten (zilver 2x en goud 7x) zijn waar het interessant wordt. U kunt er niet direct op inzetten, maar wanneer het wiel op een ervan stopt:",
      multiplierBullets: [
        "Alle huidige inzetten blijven actief",
        "Het wiel draait opnieuw",
        "Welk getal er hierna ook valt, wordt vermenigvuldigd"
      ],
      multiplierNote:
        "Multiplicatoren kunnen aaneengeschakeld worden. Als het wiel op 7x landt, dan opnieuw op 7x, en vervolgens op 40 – dat is een uitbetaling van 1.960x. Het theoretische maximum behelst meerdere opeenvolgende multiplicatoren vóór landing op 40, waarbij winsten oplopen tot 20.000x.",
    
      statsTrackingTitle: "Dream Catcher Live Statistieken & Resultaten Bijhouden",
      statsTrackingIntro:
        "Het bijhouden van Dream Catcher-statistieken helpt u het gedrag van het spel in de loop van de tijd te begrijpen. Hoewel elke draai onafhankelijk is, onthult het monitoren van Dream Catcher-resultaten of het wiel dicht bij de verwachte kansen loopt.",
      trackingBullets: [
        "Huidige multiplicatorstatus (actief of niet)",
        "Draaien sinds de laatste multiplicatortreffer",
        "Getalfrequentie over verschillende tijdsperioden",
        "Hete en koude segmenten op basis van recente Dream Catcher realtimeresultaten"
      ],
      statsTrackingNote:
        "Veel spelers gebruiken Dream Catcher live statistieken dashboards om patronen te herkennen, maar onthoud: vroegere resultaten beïnvloeden toekomstige draaien niet.",
    
      strategiesTitle: "Inzetstrategieën om te Overwegen",
      strategies: [
        {
          title: "Spreid Uw Inzetten",
          text:
            "Het dekken van meerdere segmenten verhoogt de treffrequentie. Gelijktijdig inzetten op 1, 2 en 5 betekent dat u bij ongeveer 83% van de draaien wint (exclusief multiplicatorsegmenten)."
        },
        {
          title: "Richt op Hoog Uitbetalende Getallen",
          text:
            "Concentreren op 10, 20 of 40 betekent minder winsten maar grotere uitbetalingen wanneer ze vallen. Eén succesvolle inzet op 40 compenseert vele verliesronden."
        },
        {
          title: "Lage Inzetten, Meer Draaien",
          text:
            "Het minimum van €0,10 stelt u in staat kleinere bankrolls over honderden draaien te verspreiden. Meer draaien betekent meer kansen om die multiplicatorkettingen te vangen."
        }
      ],
    
      rtpBreakdownTitle: "RTP Uitsplitsing per Inzettype",
      rtpBreakdownIntro:
        "Niet alle inzetten dragen gelijke theoretische rendementen.",
      rtpColBet: "Inzet",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "De lagere getallen bieden betere langetermijnwaarde, terwijl 40 een hogere variantie kent met zijn verminderde RTP.",
    
      whyLoveTitle: "Waarom Spelers Dream Catcher Geweldig Vinden",
      whyLoveBullets: [
        "Direct begrip – Geen complexe regels of strategieën om te leren",
        "Spelshow-energie – Professionele presentatoren houden het entertainment gaande",
        "Multiplicator-spanning – Elke draai kan een kettingreactie veroorzaken",
        "Toegankelijke inzetten – Speel van €0,10 tot €1.000 per draai",
        "Mobielvriendelijk – Volledige ervaring op elk apparaat"
      ],
    
      faqTitle: "Veelgestelde Vragen",
      faq: [
        {
          q: "Kan ik Dream Catcher live statistieken zien tijdens het spelen?",
          a: "Ja – de spelinterface toont recente Dream Catcher-resultaten en winnende getallen. Statistiekentrackers van derden bieden diepgaandere historische analyse van Dream Catcher-statistieken over duizenden draaien."
        },
        {
          q: "Wat gebeurt er als het wiel herhaaldelijk op multiplicatoren landt?",
          a: "Multiplicatoren stapelen zich op. Twee opeenvolgende treffers van 7x gevolgd door een getal betekenen dat dit getal 49x zijn normale tarief uitbetaalt. Kettingen zijn zeldzaam maar creëren de grootste winsten van het spel."
        },
        {
          q: "Is er een manier om Dream Catcher realtimeresultaten te voorspellen?",
          a: "Nee. Elke draai maakt gebruik van een gecertificeerd willekeurig mechanisme. Het bijhouden van Dream Catcher live statistieken kan uw inzetpatronen informeren, maar kan uitkomsten niet voorspellen."
        },
        {
          q: "Waarom heeft de inzet op 40 een lagere RTP dan andere getallen?",
          a: "Met slechts één segment van 54 verschijnt de 40 ongeveer 1,9% van de tijd. De uitbetaling van 40:1 compenseert deze zeldzaamheid niet volledig, wat resulteert in een hoger huisvoordeel."
        },
        {
          q: "Hoe vergelijken Dream Catcher-resultaten zich met slot-RTP's?",
          a: "Dream Catchers optimale RTP van 96,58% ligt comfortabel binnen het standaard online slot-gebied (doorgaans 94-97%), waardoor het competitief is voor een live spelformaat."
        }
      ]
    },
dreamcatcherStatsExtra: {
  trackedMetaPrefix: "Laatste 30 minuten",
  bestWinsTitle: "Beste winsten per spin",
  bestWinsText: "Een snel overzicht van de hoogste uitbetalingen van de recent bijgehouden spins.",
  wheelStatsTitle: "Wiel multiplier statistieken",
  wheelStatsText: "Bekijk hoe vaak multiplier-segmenten vielen in dezelfde periode.",
  matchedTitle: "Overeenkomende multipliers",
  matchedText: "Vergelijk multiplier-hits met normale spins in de huidige dataset.",
  finished: "Voltooid",
  outcome: "Resultaat",
  player: "Speler",
  wonAmount: "Gewonnen bedrag",
  multiplier: "Multiplier",
  match: "Overeenkomst",
  noMatch: "Geen overeenkomst"
},
    gamePanels: {
      temperatureSubtitle:
        "Segmenttemperatuur toont hot en cold resultaten in realtime op basis van recente spins versus de verwachte kans.",
      temperatureSpinsSince: "{n} spins geleden",
    
      historySubtitle:
        "Bekijk de nieuwste spin history met realtime resultaten, multipliers, winnaars en uitbetalingen.",
    
      rtpBasedOn: "Gebaseerd op de laatste 1.000 spins",
    
      summaryTotalSpinsToday: "Totaal spins vandaag",
      summaryBonusRounds: "Bonus rondes",
      summaryBiggestMultiplier: "Grootste multiplier",
      summaryAvgPayout: "Gem. uitbetaling",
    
      occurredAt: "Tijdstip",
      slotResult: "Slot resultaat",
      spinResult: "Spin resultaat",
      specialResult: "Special result",
      multiplier: "Multiplier",
      totalWinners: "Winnaars",
      totalPayout: "Totale payout",
    
      watch: "Kijken"
    },
    homeSeo: {
      sectionTitle: "Over Ons Platform voor Live Casino Statistieken",
      whoTitle: "Wie Wij Zijn",
      whoText1: "Wij zijn een onafhankelijk analyseplatform voor live casinospellen dat statistieken in realtime verzamelt, verwerkt en visualiseert.",
      whoText2: "Ons doel is om spelers transparante data te bieden op basis van echte spelresultaten, zodat zij live casino statistieken en recente uitkomsten beter kunnen begrijpen.",
      howTitle: "Hoe Wij Informatie Verzamelen",
      howText1: "Wij gebruiken geautomatiseerde systemen voor dataverzameling die live casino game results in realtime volgen.",
      howText2: "De gegevens komen uit open uitzendingen, live spelstreams en openbare providerinterfaces, waardoor wij game results en real-time results continu kunnen monitoren.",
      howText3: "Alle resultaten worden extra verwerkt en algoritmisch gecontroleerd om vertragingen te minimaliseren en een hoge statistische nauwkeurigheid te behouden. Het platform draait op moderne datatechnologieën, waaronder streamsynchronisatie, geautomatiseerde parsing en analytische modellen."
    },
    monopolyReview: {
      title: "Monopoly Live Review: De ultieme live casino game show-ervaring",
      intro: "Welkom bij de ultieme gids voor Monopoly Live, een van de populairste live dealer-spellen ooit gemaakt. Ontwikkeld door het legendarische Evolution Gaming, combineert deze titel een enorm geldwiel met een geweldige 3D-bonusronde in augmented reality met Mr. Monopoly zelf. Of je nu Monopoly Live online wilt spelen of gewoon de nieuwste spelstatistieken wilt bekijken, hier vind je alle informatie die je nodig hebt.",
      playbtn: "Spelen",
      heroAlt: "Monopoly Live-wiel met live presentatrice en gameshowstudio",
      tableFeature: "Kenmerk",
      tableDetails: "Details",
      gameNameLabel: "Spelnaam",
      providerLabel: "Provider",
      gameTypeLabel: "Speltype",
      rtpLabel: "RTP",
      maxWinLabel: "Maximale winst",
    
      gameTypeValue: "Live Casino Game Show",
      rtpValue: "Tot 96,23%",
      maxWinValue: "$500.000 (of gelijkwaardige multiplier)",
    
      sectionsTitle: "Belangrijkste kenmerken van Monopoly Live",
    
      wheelTitle: "Monopoly Live Het geldwiel (basisspel)",
      wheelText: "De kern van de Monopoly Live casino-ervaring. Een echte live presentator draait aan een enorm verticaal wiel met 54 segmenten. Spelers zetten op nummers (1, 2, 5, 10) om directe cashuitbetalingen te winnen op basis van het nummer waarop het wiel stopt.",
    
      chanceTitle: "Monopoly Live Het 'Chance'-segment",
      chanceText: "Als het wiel op een 'Chance'-segment landt, ontvangen spelers ofwel een directe geldprijs of een spannende multiplierbonus. Als er een multiplier valt, draait de host opnieuw aan het wiel en wordt je volgende winst vermenigvuldigd.",
    
      bonus3dTitle: "Monopoly Live De 3D-bonusronde",
      bonus3dText: "Het hoogtepunt van het Monopoly Live spel. Als je inzet op '2 ROLLS' of '4 ROLLS' en het wiel daarop stopt, stapt Mr. Monopoly in een 3D-bordspelwereld waarin hij prijzen en multipliers verzamelt en belastingen ontwijkt.",
    
      howToPlayTitle: "Hoe speel je Monopoly Live",
      howToPlayIntro: "Beginnen bij een online casino met Monopoly Live is ontzettend eenvoudig. Volg gewoon deze stappen:",
      step1: "Plaats je inzetten: Je hebt een korte inzetperiode om je fiches te plaatsen op 1, 2, 5, 10, '2 Rolls' of '4 Rolls'.",
      step2: "De spin: De live dealer draait aan het wiel. Je kunt Monopoly Live volgen terwijl het wiel afremt.",
      step3: "De uitbetaling: Als het wiel op jouw nummer stopt, win je. Landt het op een bonusspel en heb je daarop ingezet, dan ga je naar de 3D-ronde.",
    
      statsTitle: "Monopoly Live statistieken, resultaten & trackers",
      statsText1: "Voor veel serieuze iGaming-liefhebbers is het volgen van het spel net zo belangrijk als het spelen zelf. Omdat dit een kansspel is, gebruiken veel spelers een Monopoly Live tracker om trends in het spel te volgen.",
      statsText2: "Door Monopoly Live statistieken te analyseren, kun je de frequentie van bonusrondes, gemiddelde multipliers en koude/hete nummers bekijken. Door de Monopoly Live geschiedenis te controleren, kun je de Monopoly Live resultaten van vandaag zien. Hoewel eerdere resultaten geen garantie bieden voor toekomstige uitkomsten, geeft een casino scorebord voor Monopoly Live spelers wel inzicht in hoe het wiel zich tijdens hun sessie gedraagt. Vergeet niet altijd verantwoord te spelen, ongeacht wat de Monopoly Live resultaten laten zien.",
      statsNote: "Opmerking: Als je van dit format houdt, wil je misschien ook Monopoly Big Baller live bekijken, een bingo-achtige spin-off met eveneens spannende Monopoly Big Baller resultaten vandaag live.",
    
      freePlayTitle: "Monopoly Live Kun je gratis spelen?",
      freePlayText: "Veel spelers zoeken naar een Monopoly Live casino demo of Monopoly Live gratis spel. Omdat dit een live studiospel is met echte dealers, is er geen speelbare demo met nep geld beschikbaar. Je kunt echter elk online casino met Monopoly Live openen en gewoon gratis naar de Monopoly Live stream kijken om de regels te leren voordat je met echt geld inzet.",
    
      faqTitle: "Veelgestelde vragen (FAQ)",
      faq: [
        {
          q: "Monopoly Live Waar kan ik resultaten en statistieken vinden?",
          a: "Je kunt Monopoly Live statistieken direct in de spelinterface vinden, waar de meest recente winnende segmenten worden getoond. Voor diepgaandere analyses bieden veel externe casino tracker-websites een uitgebreide Monopoly Live geschiedenis."
        },
        {
          q: "Monopoly Live Is er een casino-app beschikbaar?",
          a: "Er is geen zelfstandige Monopoly Live apk. Je kunt het spel echter perfect op mobiel spelen door de officiële app te downloaden van een gelicentieerd casino dat Evolution Gaming-titels aanbiedt."
        },
        {
          q: "Monopoly Live Wat is het verschil tussen dit spel en Monopoly Big Baller?",
          a: "Hoewel beide spellen Mr. Monopoly en 3D-bonusrondes bevatten, gebruikt het originele spel een draaiend geldwiel, terwijl Monopoly Big Baller live casino een bingo-achtige ballentrekker gebruikt."
        },
        {
          q: "Monopoly Live Hoe kom ik in het 3D-bonusspel?",
          a: "Om deel te nemen aan het 3D-bordspel moet je inzetten op de inzetvelden '2 ROLLS' of '4 ROLLS'. Als het wiel op een van deze segmenten stopt, begint de bonusronde."
        },
        {
          q: "Monopoly Live Kan ik communiceren met de live dealer?",
          a: "Ja. Het spel heeft een Monopoly Live casinochat waarin je met de host en andere spelers kunt praten, wat de Monopoly Live ervaring erg sociaal en boeiend maakt."
        },
        {
          q: "Monopoly Live Zijn de spelresultaten gemanipuleerd?",
          a: "Nee. Monopoly Live van Evolution Gaming wordt streng getest en is gelicentieerd door toonaangevende gokautoriteiten. Het wiel is volledig fysiek en willekeurig, waardoor elke Monopoly Live score 100% eerlijk is."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Lage dobbelsteenworpen",
      diceRollsMidTitle: "Monopoly Live Middelste dobbelsteenworpen",
      diceRollsHighTitle: "Monopoly Live Hoge dobbelsteenworpen",
      trackedMeta: "Afgelopen 6 uur • 258 spins",
    
      boardMovesTitle: "Monopoly Live Statistieken van bordbewegingen",
      bonusGameStats: "Bonusspelstatistieken",
      doublesRolled: "Dubbel gegooid",
      avgBoardRolls: "Gemiddeld aantal bordworpen per bonusspel",
    
      landingStatsTitle: "Monopoly Big Baller Statistieken van landingsvakken",
    
      bestIndividualWinsTitle: "Monopoly Live Beste individuele winsten",
      latestTopMultipliersTitle: "Monopoly Live Nieuwste hoogste multipliers",
    
      finished: "Voltooid",
      player: "Speler",
      wonAmount: "Gewonnen bedrag",
      multiplier: "Multiplier",
      bigWinClip: "Clip van grote winst",
      bonusRound: "Bonusronde",
      watchClip: "Clip bekijken",
      biggestWinsGallery: "Galerij van grootste winsten"
    },
    seo: {

      home: {
        title: "Casino Score Live 🔥 Live Stats en Real-Time Results [2026]",
        description: "Casino Score Live is jouw centrale hub voor live stats en real-time results in 2026. Analyseer RTP, volg hot or cold streaks en maak veilige, datagedreven betting-keuzes."
      },
      megaball:{ 
        title: "Mega Ball stats en direct et résultats – Jouer en ligne + RTP et tendances",
        description: "Statistiques et résultats en direct de Mega Ball avec analyse RTP. Suivez tendances, multiplicateurs et résultats en temps réel. Jouez en ligne ou testez la démo."
      },    
      crazytime: {
        title: "Crazy Time Statistieken – Live Resultaten & Multiplier Tracker",
        description: "Crazy Time live statistieken in realtime bijgewerkt. Volg wielresultaten, bonusrondes en multipliers tot 2000x. Gebruik data om je winnende strategie op te bouwen. Bekijk het nu!"
      },
      monopoly: {
        title: "Monopoly Live Statistieken 2026 | Officiële Resultaten Tracker",
        description: "Officiële Monopoly Live statistieken voor 2026. Realtime resultaten, geverifieerde historie en Evolution Gaming data. Volg resultaten en speel veilig."
      },
      dreamcatcher: {
        title: "Dream Catcher Resultaten & Live Statistieken 2026 - Scores in Realtime 🎰",
        description: "Dream Catcher resultaten vandaag, live stats en scores in realtime. Volg geschiedenis, winnende statistieken en trends voor 2026. Direct elke spin zien."
      },
    },
    crazytimeStream: {
      title: "Crazy Time Live Stream",
      subtitle: "Bekijk de live Crazy Time stream rechtstreeks op deze pagina.",
      liveLabel: "Live Stream",
      watchLivestream: "Bekijk Livestream"
    },
    crazytimeReview: {
      faqTitle: "Veelgestelde Vragen",
      faq: [
        {
          q: "Is Crazy Time een vaardigheids- of kansspel?",
          a: "Crazy Time is voornamelijk een kansspel. Hoewel spelers statistieken en trackingtools kunnen gebruiken om recente resultaten beter te begrijpen, blijft elke ronde onafhankelijk."
        },
        {
          q: "Wat is de maximale vermenigvuldiger in Crazy Time?",
          a: "Het maximale geadverteerde potentieel in Crazy Time kan tot 20.000x bereiken tijdens de hoofdbonusronde van Crazy Time."
        },
        {
          q: "Kan ik deelnemen aan bonusrondes als ik er niet direct op heb gewed?",
          a: "Als de spelregels en huidige configuratie dit toestaan via bonusmechanismen zoals minimale toegang of Top Slot-effecten, kunnen spelers nog steeds bepaalde bonusresultaten betreden met een verlaagde vermenigvuldiger."
        },
        {
          q: "Zijn Crazy Time live-statistieken voorspellend?",
          a: "Nee. Live-statistieken helpen om recente activiteit te visualiseren, maar voorspellen geen toekomstige uitkomsten. Elke draai is onafhankelijk."
        }
      ],
      whatIsTitle: "Wat is Crazy Time?",
      whatIsText: "Crazy Time is een live casinospel ontwikkeld door Evolution Gaming, gelanceerd in 2020. Het combineert een geldrad-formaat met vier interactieve bonusrondes, en biedt een van de meest boeiende live casino-ervaringen die vandaag beschikbaar zijn.",
    
      tableParameter: "Parameter",
      tableDetails: "Details",
      gameName: "Spelnaam",
      provider: "Aanbieder",
      rtp: "RTP",
      releaseYear: "Jaar van Uitgifte",
      gameType: "Speltype",
      minBet: "Min. Inzet",
      maxBet: "Max. Inzet",
      volatility: "Volatiliteit",
      gameTypeValue: "Live Gameshow",
      volatilityValue: "Hoog",
    
      howToPlayTitle: "Hoe Crazy Time te Spelen",
      howToPlayText: "Het Crazy Time live-spel volgt een eenvoudig formaat:",
      step1: "Plaats je inzet op een of meer wielsegmenten voordat de tijd op is",
      step2: "Kijk hoe het wiel draait — een live host beheert de hele sessie in realtime",
      step3: "Win als het wiel op je gekozen segment landt",
      step4: "Activeer een bonusronde als de wijzer op een bonussegment landt",
    
      wheelBreakdownTitle: "Uitsplitsing Wielsegmenten",
      wheelSegment: "Segment",
      wheelOccurrences: "Voorkomens op Wiel",
      wheelMultiplier: "Vermenigvuldiger",
      upTo2000x: "Tot 2000x",
      upTo10000x: "Tot 10.000x",
      upTo20000x: "Tot 20.000x",
    
      bonusRoundsTitle: "Crazy Time Bonusrondes",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Een schietgalerij met 108 willekeurige vermenigvuldigers verborgen achter symbolen. Spelers kiezen er een om hun prijs te onthullen.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Een eenvoudige tweezijdige munt wordt opgegooid. Elke kant toont een vermenigvuldiger — rood of blauw. Snel, schoon, spannend.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Een gigantische fysieke Pachinko-muur laat een schijf van bovenaf vallen. Deze stuitert door pinnen en landt op een vermenigvuldiger onderaan. Kan oneindig verdubbelen totdat een niet-dubbele vermenigvuldiger wordt geraakt.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonus)",
      crazyTimeBonusText: "Het hoofdevenement. Een massaal virtueel wiel met drie wijzers draait in een digitale wereld. Spelers kiezen een wijzer voor de draai. De hoogste potentiële beloning bereikt 20.000x.",
    
      rulesTitle: "Crazy Time Spelregels: Belangrijke Punten",
      rule1: "Je kunt gelijktijdig op meerdere segmenten wedden",
      rule2: "De Top Slot boven het hoofdwiel voegt een vermenigvuldiger toe of activeert bonustoegang met versterkte vermenigvuldigers",
      rule3: "Als je niet op een bonussegment hebt gewed maar het landt, kom je toch in de bonus (met minimale vermenigvuldiger)",
      rule4: "Alle bonusvermenigvuldigers worden vermenigvuldigd met je oorspronkelijke inzet, niet alleen een vaste beloning",
    
      statsTitle: "Crazy Time Live Statistieken & Resultaten",
      statsText: "Het begrijpen van Crazy Time-statistieken helpt bij het informeren van je sessie-beslissingen. De meeste platforms tonen een live statistiekentracker direct in de spelinterface.",
      typicalStatsTitle: "Typische Statistieken die Je Zult Zien:",
      stat1: "Resultaten van de laatste 100 draaien — distributie van elk landend segment",
      stat2: "Bonusfrequentie — hoe vaak elke bonusronde werd geactiveerd",
      stat3: "Vermenigvuldigergeschiedenis — hoogste vermenigvuldigers toegekend in recente rondes",
      stat4: "Hete en koude segmenten — visuele indicatoren van segmentfrequentie",
      tip: "Pro-tip:",
      tipText: "De Crazy Time statistiekentracker is geen voorspellend hulpmiddel — eerdere resultaten beïnvloeden toekomstige draaien niet. De RNG en het live wiel werken elke ronde onafhankelijk.",
    
      whyPlayTitle: "Waarom Crazy Time Online Spelen?",
      prosTitle: "🏆 Voordelen:",
      pro1: "Uitzonderlijke productiekwaliteit van Evolution Gaming",
      pro2: "Vier verschillende bonusspellen — nooit repetitief",
      pro3: "Massaal maximaal vermenigvuldigerpotentieel (tot 20.000x)",
      pro4: "24/7 beschikbaar in vrijwel elk groot live online casino",
      pro5: "Transparante live statistiekentracker ingebouwd in de interface",
    
      consTitle: "⚠️ Nadelen:",
      con1: "Hoge volatiliteit — lange verliesreeksen zijn mogelijk",
      con2: "Echt demospel is niet beschikbaar (beperking live-formaat)",
      con3: "Hoogste vermenigvuldigers zijn per ontwerp zeldzaam"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Geavanceerde Crazy Time Bonusstatistieken",
    
      flapperTitle: "Crazy Bonus Flapper",
      flapperText: "Vergelijk de gemiddelde multipliers van de drie Crazy Time flapper-kleuren. Deze cijfers geven een snel beeld van de kortetermijnprestaties versus het langetermijngemiddelde.",
      avgAlways: "Historisch gem.",
      flapperFootnote: "De markering toont de langetermijnbenchmark van de gemiddelde multiplier voor de geselecteerde flapper-kleur op basis van historische trackinggegevens.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Vergelijk rode en blauwe Coin Flip-uitkomsten met gemiddelde multipliers en hitfrequentie versus langetermijnverwachtingen.",
      avgMultiplier: "Gem. multiplier",
      frequency: "Frequentie",
      vsAvg: "vs gem.",
      coinFlipFootnote: "De markering toont de langetermijnbenchmark van de gemiddelde frequentie voor de geselecteerde kleur op basis van bijgehouden data.",
    
      cashHuntSymbolsTitle: "Cash Hunt-symbolen",
      cashHuntSymbolsText: "Deze uitsplitsing toont de gemiddelde multiplier en verschijningsfrequentie van elk Cash Hunt-doelsymbool.",
      times: "keer",
    
      recentCashHuntTitle: "Cash Hunt: Recente Multipliers",
      recentCashHuntText: "Volg recente multipliers uit Cash Hunt-rondes. Gemarkeerde vakken tonen de sterkste en zwakste recente resultaten.",
    
      bestBetsTitle: "Beste Individuele Inzetten",
      bestBetsText: "Deze tabel toont de sterkste individuele winsten in de geselecteerde periode, inclusief speler, uitbetaling, resultaat en multiplier.",
      date: "Datum",
      result: "Resultaat",
      player: "Speler",
      payout: "Uitbetaling",
      multiplier: "Multiplier",
      view: "Bekijken",
    
      latestMaxTitle: "Laatste Maximale Multipliers",
      latestMaxText: "Deze recente topbonusresultaten tonen de hoogste multipliers die in de geselecteerde periode zijn bereikt.",
      clip: "Clip bekijken",
      biggestWinsGallery: "Galerij van Grootste Winsten",
    
      yellow: "Geel",
      blue: "Blauw",
      green: "Groen",
      red: "Rood",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Spelen 🎰"
    },
    
    gamePage: {
      statisticsTitleSuffix: "Statistieken",
      subtitlePrefix: "Volg realtime resultaten, geschiedenis en statistieken van",
      playCta: "Speel nu"
    },
    nav: { home: "Home", liveGames: "Live spellen" },
    home: {
      heroTitleBefore: "Live Casino",
      heroTitleAccent: "Statistieken",
      heroTitleAfter: "& Realtime Resultaten",
      heroText: "Live casino statistieken, spelresultaten en real-time resultaten voor je favoriete live casino game shows. Volg RTP, hot or cold streaks en de grootste winsten — 100% gratis, geen account nodig.",      liveGames: "Live spellen",
      featuresTitle: "Onze functies",
      testimonialsTitle: "Testimonials"
    },
    features: {
      noDownloadTitle: "Geen download nodig",
      noDownloadText: "Bekijk alle data direct in je browser.",
      accurateDataTitle: "Nauwkeurige data",
      accurateDataText: "Geautomatiseerde tracking van elke spin in realtime.",
      freeTitle: "100% gratis",
      freeText: "Tracksino is volledig gratis te gebruiken."
    },
    footer: {
      games: "Spellen",
      moreGames: "Meer spellen",
      resources: "Bronnen",
      faq: "FAQ",
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      contact: "Contact",
      description: "Volg live casinospellen in realtime."
    },
    homeFaq: {
      faqTitle: "FAQ over live casino statistieken",
      faqIntro: "Antwoorden over live casino statistics, game results en real-time results op ons platform.",
      faq: [
        {
          q: "Wat zijn live casino statistieken?",
          a: "Dat zijn gegevens op basis van echte spelresultaten en realtime resultaten uit live dealer streams."
        },
        {
          q: "Hoe verzamelen jullie spelresultaten?",
          a: "We monitoren openbare streams, providerinterfaces en uitzendsources met geautomatiseerde systemen."
        },
        {
          q: "Hoe vaak worden realtime resultaten bijgewerkt?",
          a: "Realtime resultaten worden continu bijgewerkt en gecontroleerd voordat ze op de site verschijnen."
        },
        {
          q: "Kunnen statistieken de volgende uitkomst voorspellen?",
          a: "Nee. Statistieken helpen je recente resultaten en trends te begrijpen, maar voorspellen niets."
        }
      ]
    },
    common: {
      player: "Speler",
      verifiedUser: "Geverifieerde gebruiker",
      liveNow: "Nu live",
      hour: "uur",
      hours: "uur",
      spins: "spins"
    },
    tabs: {
      temperature: "Temperatuur",
      history: "Geschiedenis",
      stats: "Statistieken",
      bigwins: "Grote winsten",
      review: "Review",
      stream: "Stream",
    }
  },

  fr: {
    lightningrouletteReview: {
      title: "Avis Lightning Roulette, RTP et Statistiques en Direct",
      intro:
        "Lightning Roulette est une variante de roulette en direct basée sur la roue européenne. Le jeu suit les règles standard de la roulette, mais chaque tour peut attribuer des multiplicateurs aléatoires à des numéros sélectionnés appelés Numéros Chanceux, créant une version à plus haute variance de la roulette en direct traditionnelle.",
    
      quickOverviewTitle: "Aperçu Rapide du Jeu",
      tableParameter: "Paramètre",
      tableDetails: "Détails",
    
      specProvider: "Fournisseur",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nom du Jeu",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Année de Sortie",
      specReleaseYearValue: "2018",
      specGameType: "Type de Jeu",
      specGameTypeValue: "Roulette en Direct avec Croupier",
      specWheel: "Format de la Roue",
      specWheelValue: "Roulette Européenne (zéro unique)",
      specRtp: "RTP",
      specRtpValue: "97,30% sur les mises standard; 97,10% sur les mises directes",
      specMinBet: "Mise Minimale",
      specMinBetValue: "$0,20",
      specMaxBet: "Mise Maximale",
      specMaxBetValue: "$10 000",
      specMaxWin: "Multiplicateur Maximum",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Numéros Chanceux",
      specLuckyNumbersValue: "1 à 5 par tour",
      specVolatility: "Volatilité",
      specVolatilityValue: "Moyenne à élevée",
      specMobile: "Jeu Mobile",
      specMobileValue: "Supporté",
    
      aboutTitle: "Qu'est-ce que Lightning Roulette?",
      aboutText1:
        "Lightning Roulette est un jeu de roulette en direct qui conserve la roue européenne à zéro unique et la mise en page de mise standard, tout en ajoutant des événements de multiplicateurs aléatoires avant chaque spin. Ce format est souvent décrit comme la roulette éclair en direct ou la roulette éclair en ligne car le jeu combine un croupier de studio réel avec une mécanique de multiplicateur générée avant que la balle ne tombe.",
      aboutText2:
        "En termes pratiques, la différence par rapport à la roulette classique est simple: un à cinq numéros deviennent des Numéros Chanceux à chaque tour, et si une mise directe atterrit sur l'un d'eux, le paiement utilise le multiplicateur attribué au lieu du paiement direct standard. C'est l'idée centrale derrière la plupart des pages d'avis de roulette éclair et des suiveurs de statistiques.",
    
      howToPlayTitle: "Comment Jouer à Lightning Roulette",
      howToPlayText1:
        "Comment jouer à Lightning Roulette est simple pour quiconque connaît la roulette. Les joueurs placent des mises pendant la phase de mise, puis le jeu révèle les Numéros Chanceux et leurs multiplicateurs avant le spin en direct commence.",
      howToPlayText2:
        "Les règles de la roulette éclair sont basées sur la roulette européenne, donc les mises extérieures, les douzaines, les colonnes et les mises intérieures fonctionnent comme prévu. Le mécanisme supplémentaire n'affecte que les mises directes qui atterrissent sur les Numéros Chanceux sélectionnés.",
      howToPlayBullets: [
        "Choisissez les valeurs des jetons et placez les mises sur la disposition de la roulette.",
        "Attendez que le jeu attribue 1 à 5 Numéros Chanceux avec des multiplicateurs aléatoires.",
        "Regardez le croupier faire tourner la roue et lâcher la balle.",
        "Si votre mise directe frappe un Numéro Chanceux, le tour utilise le paiement du multiplicateur éclair.",
        "Toutes les mises non multipliées sont réglées selon les règles standard de la roulette européenne."
      ],
    
      payoutTitle: "Paiements de Lightning Roulette",
      payoutIntro:
        "Les paiements de la roulette éclair suivent la roulette standard pour la plupart des mises, tandis que la différence principale apparaît sur les numéros directs. Lorsqu'un Numéro Chanceux sélectionné gagne, le multiplicateur attribué remplace le paiement direct standard et peut atteindre jusqu'à 500x.",
    
      payoutColBet: "Type de Mise",
      payoutColPayout: "Paiement",
      payoutColNote: "Comment Cela Fonctionne",
    
      payoutBetStraightLucky: "Direct (Numéro Chanceux)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Appliqué lorsqu'une mise directe atterrit sur un Numéro Chanceux avec un multiplicateur attribué.",
    
      payoutBetStraight: "Direct (standard)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Gain direct standard sans multiplicateur éclair.",
    
      payoutBetSplit: "Cheval",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Mise sur 2 numéros adjacents.",
    
      payoutBetStreet: "Transversale",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Mise sur 3 numéros à la suite.",
    
      payoutBetCorner: "Carré",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Mise sur 4 numéros.",
    
      payoutBetDozen: "Douzaine / Colonne",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Couvre 12 numéros.",
    
      payoutBetEven: "Rouge/Noir, Impair/Pair, Haut/Bas",
      payoutValEven: "1:1",
      payoutNoteEven: "Mises extérieures standard.",
    
      rtpTitle: "RTP et Volatilité de Lightning Roulette",
      rtpText1:
        "Le RTP de la roulette éclair dépend du type de mise. Les mises standard comme rouge/noir ou douzaines maintiennent un RTP d'environ 97,30%, tandis que les mises directes se situent autour de 97,10% car le jeu réalloue une partie de la structure de paiement pour financer la fonction de multiplicateur.",
      rtpText2:
        "En termes de variance, le jeu est plus volatil que la roulette classique lorsque l'accent est mis sur les numéros intérieurs. Les multiplicateurs de roulette éclair créent des moments de paiement moins fréquents mais plus importants, c'est pourquoi beaucoup de joueurs décrivent le jeu comme une volatilité moyenne à élevée plutôt qu'un profil de roulette standard.",
    
      strategyTitle: "Notes de Stratégie Lightning Roulette",
      strategyText1:
        "Une stratégie de roulette éclair ne change pas l'avantage de la maison, mais elle peut changer le profil de risque d'une session. Les joueurs qui préfèrent une variance plus faible restent généralement plus près des mises extérieures, tandis que ceux qui veulent une exposition aux multiplicateurs se concentrent davantage sur la couverture directe.",
      strategyText2:
        "D'un point de vue statistique, le jeu est mieux abordé comme la roulette européenne avec une couche de multiplicateur supplémentaire. Cela le rend utile pour suivre la fréquence des Numéros Chanceux, la distribution des multiplicateurs et les oscillations de paiement sur un échantillon plus grand plutôt que de juger le jeu sur une courte série.",
    
      trackerTitle: "Ce Que Vous Pouvez Suivre",
      trackerIntro:
        "Cette section du site est conçue pour les joueurs qui souhaitent examiner la roulette éclair en ligne à travers les résultats récents, les multiplicateurs et les métriques de synthèse plutôt que de se fier à des impressions à court terme.",
    
      trackLuckyNumbers: "Historique des Numéros Chanceux",
      trackLuckyNumbersText:
        "Suivez les numéros qui ont reçu des multiplicateurs et à quelle fréquence ils apparaissent dans les tours récents.",
    
      trackMultipliers: "Distribution des Multiplicateurs",
      trackMultipliersText:
        "Voyez à quelle fréquence les multiplicateurs 50x, 100x, 150x, 200x, 300x, 400x et 500x apparaissent.",
    
      trackSpinResults: "Résultats des Tours",
      trackSpinResultsText:
        "Examinez les résultats récents, y compris le numéro gagnant, les numéros éclair et les multiplicateurs touchés.",
    
      trackRtp: "Aperçu du RTP",
      trackRtpText:
        "Comparez les résultats observés avec le profil de rendement attendu du jeu.",
    
      trackPatterns: "Modèles de Résultats",
      trackPatternsText:
        "Utilisez l'historique récent et les données de distribution pour suivre les séries à court terme et la fréquence des numéros.",
    
      comparisonTitle: "Lightning Roulette en un Coup d'œil",
      compColArea: "Domaine",
      compColValue: "Lightning Roulette",
      compColMeaning: "Pourquoi C'est Important",
    
      compAreaBase: "Format de Base",
      compValueBase: "Roulette européenne avec croupier en direct",
      compWhyBase:
        "Les règles principales restent familières pour les joueurs qui connaissent déjà la roulette standard.",
    
      compAreaMultipliers: "Multiplicateurs Éclair",
      compValueMultipliers: "1–5 Numéros Chanceux, 50x à 500x",
      compWhyMultipliers:
        "Ajoute un potentiel de gain plus important aux mises directes sans modifier les paiements des mises extérieures.",
    
      compAreaRtp: "Profil RTP",
      compValueRtp: "97,30% standard / 97,10% direct",
      compWhyRtp:
        "Utile pour comprendre comment le financement du multiplicateur affecte différents types de mises.",
    
      compAreaVariance: "Volatilité",
      compValueVariance: "Plus élevée que la roulette classique sur les mises intérieures",
      compWhyVariance:
        "Les paiements basés sur les multiplicateurs créent des oscillations plus larges à court terme.",
    
      compAreaUse: "Meilleur Cas d'Usage",
      compValueUse: "Joueurs qui veulent une roulette avec variance supplémentaire",
      compWhyUse:
        "Conserve la structure standard de la roulette tout en ajoutant des paiements occasionnellement améliorés.",
    
      faqTitle: "Questions Fréquemment Posées",
      faq: [
        {
          q: "Qu'est-ce que Lightning Roulette?",
          a: "Lightning Roulette est une version en direct de la roulette européenne avec des multiplicateurs aléatoires sur les Numéros Chanceux sélectionnés."
        },
        {
          q: "Comment fonctionnent les multiplicateurs de Lightning Roulette?",
          a: "Avant chaque spin, le jeu sélectionne 1 à 5 Numéros Chanceux et attribue des multiplicateurs de 50x à 500x. Si une mise directe atterrit sur l'un de ces numéros, le paiement du multiplicateur s'applique."
        },
        {
          q: "Quel est le RTP de Lightning Roulette?",
          a: "Le RTP typique est d'environ 97,30% pour les mises standard et d'environ 97,10% pour les mises directes."
        },
        {
          q: "Les paiements de Lightning Roulette sont-ils différents de la roulette standard?",
          a: "La plupart des types de mises utilisent les paiements standard de la roulette européenne. La principale différence est le paiement basé sur le multiplicateur sur les numéros directs sélectionnés."
        },
        {
          q: "Lightning Roulette est-il plus volatil que la roulette classique?",
          a: "Oui. Le système de multiplicateur crée une variance plus large à court terme, surtout pour les joueurs se concentrant sur les mises intérieures."
        }
      ],
    
      conclusionTitle: "Impression Générale",
      conclusionText:
        "En tant qu'avis neutre de roulette éclair, le jeu peut être décrit comme une roulette européenne standard avec une couche de multiplicateur supplémentaire qui augmente la variance sans modifier le format principal. Pour les joueurs intéressés par les statistiques en direct de la roulette éclair, c'est un jeu utile à suivre car la fréquence des multiplicateurs, la sélection des Numéros Chanceux et les modèles de paiement peuvent tous être mesurés au fil du temps."
    },
    lightningrouletteHistory: {
      panelTitle:  "Historique des tours",
      subtitle:    "Historique récent avec les numéros chanceux.",
      occurredAt:  "Survenu à",
      spinResult:  "Résultat",
      multiplier:  "Multiplicateur",
      firstLucky:  "1er numéro chanceux",
      secondLucky: "2e numéro chanceux",
      thirdLucky:  "3e numéro chanceux",
      fourthLucky: "4e numéro chanceux",
      fifthLucky:  "5e numéro chanceux",
    },
    megaballReview: {
      title: "Tracker Mega Ball, RTP et Analyse du Jeu",
      intro: "Suivez les statistiques, les résultats et le RTP de Mega Ball en temps réel grâce à des outils de suivi en direct. Consultez l’historique des boules, les tours avec multiplicateurs, le nombre de gagnants et les tendances des paiements, le tout en un seul endroit.",
  
      quickOverviewTitle: "Aperçu Rapide du Jeu",
      tableParameter: "Paramètre",
      tableDetails: "Détails",
      tableFeature: "Fonctionnalité",
      tableDescription: "Description",
  
      specProvider: "Fournisseur",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nom du Jeu",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95,30 %",
      specReleaseYear: "Année de Sortie",
      specReleaseYearValue: "2023",
      specGameType: "Type de Jeu",
      specGameTypeValue: "Jeu télévisé en direct de type bingo",
      specMinBet: "Plage de Mise",
      specMinBetValue: "Varie selon le casino",
      specMaxWin: "Gain Maximum",
      specMaxWinValue: "Jusqu’à 1 000 000x",
      specBalls: "Boules Tirées",
      specBallsValue: "20 boules + Mega Ball + possible 2e Mega Ball",
  
      trackerTitle: "Ce Que Vous Pouvez Suivre",
      trackerIntro: "Sur Tracksino, les outils de suivi Mega Ball se concentrent sur les métriques live les plus utiles pour analyser chaque tour.",
      trackBallHistory: "Historique des Boules",
      trackBallHistoryText: "Consultez toutes les boules tirées dans l’ordre exact.",
      trackMultiplier: "Multiplicateur Mega Ball",
      trackMultiplierText: "Suivez les multiplicateurs de 5x à 100x.",
      trackWinners: "Nombre de Gagnants",
      trackWinnersText: "Découvrez combien de cartes ou de joueurs ont gagné.",
      trackPayouts: "Montants des Paiements",
      trackPayoutsText: "Surveillez les paiements totaux et comparez les tours actifs.",
      trackLive: "Regarder Mega Ball en Direct",
      trackLiveText: "Ouvrez le jeu en direct et comparez l’action en cours avec les données du tracker.",
  
      aboutTitle: "Qu’est-ce que Mega Ball ?",
      aboutText1: "Mega Ball est un jeu télévisé en direct rapide qui combine des mécaniques de cartes de type bingo avec des tirages de boules inspirés des loteries. Un ou deux tours bonus peuvent apparaître après le tirage principal, ajoutant du suspense grâce aux multiplicateurs.",
      aboutText2: "L’objectif est de compléter le plus grand nombre de lignes possible sur vos cartes. Plus vous complétez de lignes, plus les gains sont élevés, et les tours avec multiplicateurs peuvent augmenter considérablement les paiements.",
  
      howToPlayTitle: "Comment Jouer à Mega Ball",
      howToPlayText1: "Dans Mega Ball, 20 boules sont tirées une par une depuis une machine automatique. Les numéros correspondants sur les cartes des joueurs sont marqués automatiquement, et les cartes les plus proches de gagner apparaissent en haut de l’interface.",
      howToPlayText2: "Après la dernière boule, un multiplicateur Mega Ball entre 5x et 100x est généré. Si la Mega Ball complète une ligne gagnante, le paiement peut être multiplié. Dans de rares cas, une 2e Mega Ball peut également être tirée, offrant une chance supplémentaire de gain augmenté.",
      howToPlayBullets: [
        "20 boules sont tirées rapidement les unes après les autres.",
        "Les numéros correspondants sont marqués automatiquement sur toutes les cartes actives.",
        "Les cartes proches de la victoire apparaissent en haut de l’interface.",
        "Un multiplicateur Mega Ball est généré après le tirage principal.",
        "Une rare 2e Mega Ball peut offrir une opportunité de gain supplémentaire."
      ],
  
      payoutTitle: "Paiements Mega Ball",
      payoutIntro: "Les paiements de Mega Ball dépendent du nombre de lignes complétées sur une seule carte. Les lignes horizontales, verticales et diagonales comptent pour le gain final.",
      payoutColLines: "Lignes Complétées",
      payoutColPrize: "Paiement",
      payoutColNote: "Fonctionnement",
      payout1Line: "1 ligne horizontale, verticale ou diagonale.",
      payout2Lines: "2 lignes complétées sur une carte.",
      payout3Lines: "3 lignes complétées sur une carte.",
      payout4Lines: "4 lignes complétées sur une carte.",
      payout5Lines: "5 lignes complétées sur une carte.",
      payout6Lines: "6 lignes complétées sur une carte.",
  
      comparisonTitle: "Mega Ball en un Coup d’Œil",
      compColArea: "Domaine",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Pourquoi c’est important",
      compAreaBase: "Format de base",
      compMegaBallBase: "Jeu télévisé en direct de type bingo",
      compMeaningBase: "Combine la complétion des cartes avec un tirage en direct.",
      compAreaBonus: "Tours bonus",
      compMegaBallBonus: "Mega Ball et rare 2e Mega Ball",
      compMeaningBonus: "Ajoute un potentiel de multiplicateur après le tirage principal.",
      compAreaTracking: "Valeur du suivi",
      compMegaBallTracking: "Élevée",
      compMeaningTracking: "L’ordre des boules, les gagnants et les paiements sont faciles à analyser.",
      compAreaMaxWin: "Gain maximum potentiel",
      compMegaBallMaxWin: "Jusqu’à 1 000 000x",
      compMeaningMaxWin: "Les gains les plus élevés dépendent des lignes complétées et des multiplicateurs.",
  
      faqTitle: "Questions Fréquemment Posées",
      faq: [
        {
          q: "Puis-je suivre les résultats de Mega Ball en direct ?",
          a: "Oui. Un tracker Mega Ball peut afficher l’historique des boules, les paiements récents, le nombre de gagnants et les résultats des multiplicateurs pour chaque tour."
        },
        {
          q: "Comment fonctionne le multiplicateur Mega Ball ?",
          a: "Après le tirage principal, un multiplicateur entre 5x et 100x est généré. Si la Mega Ball complète une ligne gagnante, le paiement est multiplié en conséquence."
        },
        {
          q: "Qu’est-ce que la 2e Mega Ball ?",
          a: "La 2e Mega Ball est un tirage supplémentaire rare qui offre une autre chance de compléter une ligne gagnante avec multiplicateur."
        },
        {
          q: "Mega Ball est-il plus proche du bingo ou d’un jeu télévisé ?",
          a: "Il combine les deux. La mécanique repose sur des lignes de bingo, tandis que la présentation ressemble à un jeu télévisé en direct de casino."
        },
        {
          q: "Les données du tracker peuvent-elles prédire les résultats futurs ?",
          a: "Non. Les données du tracker servent à analyser les tours précédents et les statistiques en direct, mais chaque tirage est indépendant."
        }
      ]
    },
    dreamcatcherReview: {
      title: "Dream Catcher Live : Statistiques en Temps Réel, Résultats & Guide Complet du Jeu",
      intro:
        "Dream Catcher est le jeu Money Wheel phare d'Evolution Gaming qui a transformé le divertissement des casinos en direct lors de son lancement en 2017. Cette expérience à la Roue de la Fortune combine l'excitation d'un jeu télévisé avec les jeux d'argent réels, le tout diffusé en ultra-HD depuis des studios professionnels en Lettonie.\n\nContrairement aux jeux de table traditionnels, Dream Catcher ne nécessite aucune connaissance préalable du jeu. Il vous suffit de parier sur un numéro, de regarder la roue tourner et de collecter vos gains si elle s'arrête sur votre choix. L'ajout de segments multiplicateurs crée des opportunités de gains massifs allant jusqu'à 20 000 fois votre mise.",
      playbtn: "Jouer",
      heroAlt: "Logo du jeu de roue à argent live Dream Catcher",
    
      quickOverviewTitle: "Aperçu Rapide du Jeu",
      specFeature: "Spécification",
      specDetails: "Détails",
      specProvider: "Fournisseur de Jeu",
      specProviderValue: "Evolution Gaming",
      specYear: "Année de Sortie",
      specYearValue: "2017",
      specType: "Type de Jeu",
      specTypeValue: "Roue à Argent en Direct",
      specRtp: "RTP",
      specRtpValue: "96,58 % (optimal)",
      specBetRange: "Plage de Mise",
      specBetRangeValue: "€0,10 – €1 000",
      specMaxWin: "Gain Maximum",
      specMaxWinValue: "20 000x la mise",
      specSegments: "Segments Totaux",
      specSegmentsValue: "54",
      specLocation: "Lieu de Diffusion",
      specLocationValue: "Riga, Lettonie",
    
      howWorksTitle: "Comment Fonctionne Dream Catcher",
      howWorksText:
        "Le jeu présente une immense roue montée verticalement avec 54 segments colorés. Un animateur en direct fait tourner la roue tout en interagissant avec les joueurs via le chat, créant cette authentique atmosphère de jeu télévisé.",
    
      wheelDistributionTitle: "Répartition des Segments de la Roue",
      wheelColNumber: "Numéro",
      wheelColSegments: "Segments",
      wheelColPayout: "Paiement",
      wheelColProbability: "Probabilité",
      wheelDistributionNote:
        "Les segments numérotés paient exactement ce qu'ils indiquent – tombez sur 5 et vous obtenez 5:1 sur votre mise. C'est aussi simple que ça.",
      multiplier2xLabel: "Multiplicateur 2x",
      multiplier7xLabel: "Multiplicateur 7x",
    
      multiplierTitle: "Mécaniques des Multiplicateurs",
      multiplierIntro:
        "Les deux segments multiplicateurs (argent 2x et or 7x) sont là où les choses deviennent intéressantes. Vous ne pouvez pas parier dessus directement, mais lorsque la roue s'arrête sur l'un d'eux :",
      multiplierBullets: [
        "Toutes les mises actuelles restent actives",
        "La roue tourne à nouveau",
        "Quel que soit le numéro qui sort ensuite, il est multiplié"
      ],
      multiplierNote:
        "Les multiplicateurs peuvent se chaîner. Si la roue atterrit sur 7x, puis encore sur 7x, et enfin sur 40 – c'est un gain de 1 960x. Le maximum théorique implique plusieurs multiplicateurs consécutifs avant d'atterrir sur 40, portant les gains jusqu'à 20 000x.",
    
      statsTrackingTitle: "Statistiques Live & Suivi des Résultats de Dream Catcher",
      statsTrackingIntro:
        "Suivre les statistiques de Dream Catcher vous aide à comprendre le comportement du jeu dans le temps. Bien que chaque tour soit indépendant, surveiller les résultats de Dream Catcher révèle si la roue tourne près des probabilités attendues.",
      trackingBullets: [
        "Statut actuel du multiplicateur (actif ou non)",
        "Tours depuis le dernier déclenchement d'un multiplicateur",
        "Fréquence des numéros sur différentes périodes",
        "Segments chauds et froids basés sur les résultats récents en temps réel de Dream Catcher"
      ],
      statsTrackingNote:
        "De nombreux joueurs utilisent des tableaux de bord de statistiques live de Dream Catcher pour repérer des tendances, mais rappelez-vous : les résultats passés n'influencent pas les tours futurs.",
    
      strategiesTitle: "Stratégies de Paris à Considérer",
      strategies: [
        {
          title: "Répartissez Vos Mises",
          text:
            "Couvrir plusieurs segments augmente la fréquence des gains. Parier simultanément sur 1, 2 et 5 signifie gagner sur environ 83 % des tours (en excluant les segments multiplicateurs)."
        },
        {
          title: "Ciblez les Numéros à Fort Gain",
          text:
            "Se concentrer sur 10, 20 ou 40 signifie moins de gains mais des paiements plus importants lorsqu'ils sortent. Un pari gagnant sur 40 compense de nombreux tours perdants."
        },
        {
          title: "Petites Mises, Plus de Tours",
          text:
            "Le minimum de €0,10 vous permet d'étirer de petites bankrolls sur des centaines de tours. Plus de tours signifie plus de chances d'attraper ces chaînes de multiplicateurs."
        }
      ],
    
      rtpBreakdownTitle: "Détail du RTP par Type de Pari",
      rtpBreakdownIntro:
        "Tous les paris ne comportent pas les mêmes retours théoriques.",
      rtpColBet: "Pari",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "Les numéros plus bas offrent une meilleure valeur à long terme, tandis que le 40 présente une variance plus élevée avec son RTP réduit.",
    
      whyLoveTitle: "Pourquoi les Joueurs Adorent Dream Catcher",
      whyLoveBullets: [
        "Compréhension instantanée – Aucune règle complexe ni stratégie à apprendre",
        "Énergie de jeu télévisé – Les animateurs professionnels maintiennent l'ambiance",
        "Excitation des multiplicateurs – Chaque tour pourrait déclencher une réaction en chaîne",
        "Mises accessibles – Jouez de €0,10 à €1 000 par tour",
        "Optimisé pour mobile – Expérience complète sur n'importe quel appareil"
      ],
    
      faqTitle: "Questions Fréquemment Posées",
      faq: [
        {
          q: "Puis-je voir les statistiques live de Dream Catcher pendant le jeu ?",
          a: "Oui – l'interface de jeu affiche les résultats récents de Dream Catcher et les numéros gagnants. Les trackers de statistiques tiers offrent une analyse historique plus approfondie des statistiques de Dream Catcher sur des milliers de tours."
        },
        {
          q: "Que se passe-t-il si la roue atterrit plusieurs fois sur des multiplicateurs ?",
          a: "Les multiplicateurs s'accumulent. Deux déclenchements consécutifs de 7x suivis d'un numéro signifient que ce numéro paie 49 fois son taux normal. Les chaînes sont rares mais génèrent les plus grands gains du jeu."
        },
        {
          q: "Existe-t-il un moyen de prédire les résultats en temps réel de Dream Catcher ?",
          a: "Non. Chaque tour utilise un mécanisme aléatoire certifié. Suivre les statistiques live de Dream Catcher peut informer vos habitudes de paris, mais ne peut pas prédire les résultats."
        },
        {
          q: "Pourquoi le pari sur 40 a-t-il un RTP inférieur aux autres numéros ?",
          a: "Avec un seul segment sur 54, le 40 apparaît environ 1,9 % du temps. Le paiement de 40:1 ne compense pas entièrement cette rareté, ce qui entraîne un avantage de la maison plus élevé."
        },
        {
          q: "Comment les résultats de Dream Catcher se comparent-ils aux RTP des machines à sous ?",
          a: "Le RTP optimal de 96,58 % de Dream Catcher se situe confortablement dans la plage standard des machines à sous en ligne (généralement 94-97 %), ce qui le rend compétitif pour un format de jeu en direct."
        }
      ]
    },
dreamcatcherStatsExtra: {
  trackedMetaPrefix: "30 dernières minutes",
  bestWinsTitle: "Meilleurs gains par tour",
  bestWinsText: "Un aperçu rapide des plus gros gains des derniers tours suivis.",
  wheelStatsTitle: "Statistiques des multiplicateurs de la roue",
  wheelStatsText: "Découvrez à quelle fréquence les segments multiplicateurs sont sortis sur la même période.",
  matchedTitle: "Multiplicateurs correspondants",
  matchedText: "Comparez les apparitions des multiplicateurs avec les tours classiques dans l’échantillon actuel.",
  finished: "Terminé",
  outcome: "Résultat",
  player: "Joueur",
  wonAmount: "Montant gagné",
  multiplier: "Multiplicateur",
  match: "Correspondance",
  noMatch: "Aucune correspondance"
},
    gamePanels: {
      temperatureSubtitle:
        "La température des segments met en évidence les résultats chauds et froids en temps réel selon les derniers spins par rapport à la probabilité attendue.",
      temperatureSpinsSince: "il y a {n} spins",
    
      historySubtitle:
        "Consultez l’historique récent avec résultats en temps réel, multiplicateurs, gagnants et paiements.",
    
      rtpBasedOn: "Basé sur les 1 000 derniers spins",
    
      summaryTotalSpinsToday: "Spins totaux aujourd’hui",
      summaryBonusRounds: "Tours bonus",
      summaryBiggestMultiplier: "Plus gros multiplicateur",
      summaryAvgPayout: "Paiement moyen",
    
      occurredAt: "Date/heure",
      slotResult: "Résultat slot",
      spinResult: "Résultat du spin",
      specialResult: "Résultat spécial",
      multiplier: "Multiplicateur",
      totalWinners: "Gagnants",
      totalPayout: "Paiement total",
    
      watch: "Voir"
    },
    homeSeo: {
      sectionTitle: "À Propos de Notre Plateforme de Statistiques de Casino en Direct",
      whoTitle: "Qui Nous Sommes",
      whoText1: "Nous sommes une plateforme indépendante d’analyse des jeux de casino en direct qui collecte, traite et visualise des statistiques en temps réel.",
      whoText2: "Notre objectif est de fournir aux joueurs des données transparentes basées sur des résultats de jeu réels, afin de mieux comprendre les statistiques de casino en direct et les derniers résultats.",
      howTitle: "Comment Nous Collectons les Informations",
      howText1: "Nous utilisons des systèmes automatisés de collecte de données qui suivent les résultats des jeux de casino en direct en temps réel.",
      howText2: "Les données proviennent de sources de diffusion ouvertes, de flux de jeu en direct et d’interfaces publiques des fournisseurs, ce qui nous permet de surveiller en continu les résultats de jeu et les résultats en temps réel.",
      howText3: "Tous les résultats passent par un traitement supplémentaire et une vérification algorithmique afin de réduire les délais et de maintenir une grande précision statistique. La plateforme repose sur des technologies modernes de données, notamment la synchronisation des flux, le parsing automatisé et des modèles analytiques."
    },
    monopolyReview: {
      title: "Monopoly Live Avis : l'expérience ultime du game show de casino en direct",
      intro: "Bienvenue dans le guide ultime de Monopoly Live, l'un des jeux avec croupier en direct les plus populaires jamais créés. Développé par le légendaire Evolution Gaming, ce titre associe une immense roue d'argent à un incroyable bonus 3D en réalité augmentée mettant en scène Mr. Monopoly en personne. Que vous souhaitiez jouer à Monopoly Live en ligne ou simplement consulter les statistiques les plus récentes du jeu, vous trouverez ici toutes les informations dont vous avez besoin.",
      playbtn: "Jouer",
      heroAlt: "Roue Monopoly Live avec animatrice en direct et studio de jeu télévisé",
      tableFeature: "Caractéristique",
      tableDetails: "Détails",
      gameNameLabel: "Nom du jeu",
      providerLabel: "Fournisseur",
      gameTypeLabel: "Type de jeu",
      rtpLabel: "RTP",
      maxWinLabel: "Gain maximal",
    
      gameTypeValue: "Game Show de Casino en Direct",
      rtpValue: "Jusqu'à 96,23 %",
      maxWinValue: "500 000 $ (ou équivalent en multiplicateur)",
    
      sectionsTitle: "Fonctionnalités clés de Monopoly Live",
    
      wheelTitle: "Monopoly Live La roue d'argent (jeu de base)",
      wheelText: "Le cœur de l'expérience casino en direct de Monopoly Live. Un véritable animateur en direct fait tourner une immense roue verticale composée de 54 segments. Les joueurs misent sur des numéros (1, 2, 5, 10) afin de remporter des gains instantanés en argent selon le numéro obtenu.",
    
      chanceTitle: "Monopoly Live Le segment 'Chance'",
      chanceText: "Tomber sur un segment 'Chance' donne aux joueurs soit un gain immédiat en argent, soit un bonus multiplicateur passionnant. Si un multiplicateur apparaît, l'animateur fait tourner la roue une nouvelle fois et votre prochain gain est multiplié.",
    
      bonus3dTitle: "Monopoly Live Le bonus 3D",
      bonus3dText: "Le point fort du jeu Monopoly Live. Si vous misez sur '2 ROLLS' ou '4 ROLLS' et que la roue s'arrête dessus, Mr. Monopoly entre dans un univers de jeu de société en 3D, collectant des prix, des multiplicateurs et évitant les taxes.",
    
      howToPlayTitle: "Comment jouer à Monopoly Live",
      howToPlayIntro: "Commencer dans un casino en ligne avec Monopoly Live est extrêmement simple. Suivez simplement ces étapes :",
      step1: "Placez vos mises : Vous disposez d'une courte fenêtre de mise pour placer vos jetons sur 1, 2, 5, 10, '2 Rolls' ou '4 Rolls'.",
      step2: "Le tour de roue : Le croupier en direct fait tourner la roue. Vous pouvez regarder Monopoly Live pendant que la roue ralentit.",
      step3: "Le paiement : Si la roue s'arrête sur votre numéro, vous gagnez. Si elle tombe sur un jeu bonus et que vous avez misé dessus, vous entrez dans la manche 3D.",
    
      statsTitle: "Monopoly Live statistiques, résultats et trackers",
      statsText1: "Pour de nombreux passionnés sérieux d'iGaming, suivre le jeu est tout aussi important que jouer. Comme il s'agit d'un jeu de probabilité, beaucoup de joueurs utilisent un tracker Monopoly Live pour suivre les tendances du jeu.",
      statsText2: "En analysant les statistiques de Monopoly Live, vous pouvez voir la fréquence des manches bonus, les multiplicateurs moyens et les numéros chauds/froids. Consulter l'historique de Monopoly Live vous permet de voir les résultats de Monopoly Live aujourd'hui. Même si les résultats passés ne garantissent pas les résultats futurs, observer un tableau des scores de casino Monopoly Live peut donner aux joueurs des indications sur le comportement de la roue pendant leur session. N'oubliez jamais de jouer de manière responsable, quels que soient les résultats de Monopoly Live.",
      statsNote: "Remarque : si vous aimez ce format, vous voudrez peut-être aussi découvrir Monopoly Big Baller live, un spin-off de style bingo qui propose également des résultats Monopoly Big Baller aujourd'hui en direct très excitants.",
    
      freePlayTitle: "Monopoly Live Peut-on jouer gratuitement ?",
      freePlayText: "De nombreux joueurs recherchent une démo casino Monopoly Live ou Monopoly Live gratuit. Comme il s'agit d'un jeu de studio en direct avec de vrais croupiers, aucune démo jouable avec de l'argent fictif n'est disponible. Cependant, vous pouvez rejoindre n'importe quel casino en ligne proposant Monopoly Live, ouvrir le jeu et simplement regarder le stream Monopoly Live gratuitement pour apprendre les règles avant de miser de l'argent réel.",
    
      faqTitle: "Questions fréquentes (FAQ)",
      faq: [
        {
          q: "Monopoly Live Où puis-je trouver les résultats et les statistiques ?",
          a: "Vous pouvez trouver les statistiques de Monopoly Live directement dans l'interface du jeu, qui affiche les segments gagnants les plus récents. Pour des analyses plus poussées, de nombreux sites externes de trackers de casino proposent un historique complet de Monopoly Live."
        },
        {
          q: "Monopoly Live Existe-t-il une application de casino ?",
          a: "Il n'existe pas d'apk autonome Monopoly Live. En revanche, vous pouvez parfaitement jouer sur mobile en téléchargeant l'application officielle de n'importe quel casino agréé proposant les titres Evolution Gaming."
        },
        {
          q: "Monopoly Live Quelle est la différence entre ce jeu et Monopoly Big Baller ?",
          a: "Bien que les deux mettent en scène Mr. Monopoly et des manches bonus en 3D, le jeu original utilise une roue d'argent tournante, tandis que Monopoly Big Baller live casino utilise une machine de tirage de boules de style bingo."
        },
        {
          q: "Monopoly Live Comment accéder au jeu bonus 3D ?",
          a: "Pour participer au jeu de société 3D, vous devez miser sur les cases de pari '2 ROLLS' ou '4 ROLLS'. Si la roue s'arrête sur l'un de ces segments, la manche bonus commence."
        },
        {
          q: "Monopoly Live Puis-je interagir avec le croupier en direct ?",
          a: "Oui. Le jeu propose un chat de casino en direct Monopoly Live où vous pouvez parler avec l'animateur et les autres joueurs, ce qui rend l'expérience Monopoly Live très sociale et immersive."
        },
        {
          q: "Monopoly Live Les résultats sont-ils truqués ?",
          a: "Non. Monopoly Live d'Evolution Gaming est rigoureusement testé et agréé par les principales autorités des jeux d'argent. La roue est entièrement physique et aléatoire, garantissant que chaque résultat de Monopoly Live est 100 % équitable."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Lancers de dés de faible niveau",
      diceRollsMidTitle: "Monopoly Live Lancers de dés de niveau intermédiaire",
      diceRollsHighTitle: "Monopoly Live Lancers de dés de haut niveau",
      trackedMeta: "6 dernières heures • 258 tours",
    
      boardMovesTitle: "Monopoly Live Statistiques des déplacements sur le plateau",
      bonusGameStats: "Statistiques du jeu bonus",
      doublesRolled: "Doubles obtenus",
      avgBoardRolls: "Moyenne des lancers sur le plateau par jeu bonus",
    
      landingStatsTitle: "Monopoly Big Baller Statistiques des cases d'arrivée",
    
      bestIndividualWinsTitle: "Monopoly Live Meilleurs gains individuels",
      latestTopMultipliersTitle: "Monopoly Live Derniers meilleurs multiplicateurs",
    
      finished: "Terminé",
      player: "Joueur",
      wonAmount: "Montant gagné",
      multiplier: "Multiplicateur",
      bigWinClip: "Clip gros gain",
      bonusRound: "Manche bonus",
      watchClip: "Voir le clip",
      biggestWinsGallery: "Galerie des plus gros gains"
    },
    seo: {
      lightningroulette: {
        title: "Lightning Roulette stats, RTP et résultats en direct",
        description: "Consultez les statistiques Lightning Roulette : RTP, multiplicateurs, Lucky Numbers, historique des spins, paiements et résultats live."
      },
      home: {
        title: "Casino Score Live 🔥 Live Stats et Real-Time Results [2026]",
        description: "Casino Score Live est votre hub ultime pour live stats et real-time results en 2026. Analysez le RTP, suivez les hot or cold streaks et prenez des décisions de mise sécurisées."
      },
      megaball: {
        title: "Mega Ball live statistieken & resultaten – Speel online + RTP & trends",
        description: "Mega Ball live statistieken en resultaten met RTP-analyse. Volg trends, multipliers en uitkomsten in realtime. Speel online of probeer de demo nu.",
      },
      crazytime: {
        title: "Statistiques Crazy Time – Résultats en Direct et Suivi des Multiplicateurs",
        description: "Statistiques Crazy Time en direct mises à jour en temps réel. Suivez les résultats de la roue, les tours bonus et les multiplicateurs jusqu'à 2000x. Utilisez les données pour construire votre stratégie gagnante. Consultez maintenant !"
      },
      monopoly: {
        title: "Monopoly Live Statistiques 2026 | Suivi Officiel des Résultats",
        description: "Statistiques officielles Monopoly Live pour 2026. Résultats en temps réel, historique vérifié et données Evolution Gaming. Suivez les résultats et jouez prudemment."
      },
      dreamcatcher: {
        title: "Dream Catcher Résultats & Stats en Direct 2026 - Scores en Temps Réel 🎰",
        description: "Dream Catcher résultats du jour, stats live et scores en temps réel. Suivez l’historique, les stats gagnantes et les tendances 2026. Accès instantané à chaque spin."
      },
    },
    crazytimeStream: {
      title: "Diffusion en Direct de Crazy Time",
      subtitle: "Regardez la diffusion en direct de Crazy Time directement sur cette page.",
      liveLabel: "Diffusion en Direct",
      watchLivestream: "Regarder en Direct"
    },
    crazytimeReview: {
      faqTitle: "Questions Fréquemment Posées",
      faq: [
        {
          q: "Crazy Time est-il un jeu d'adresse ou de hasard ?",
          a: "Crazy Time est principalement un jeu de hasard. Bien que les joueurs puissent utiliser des statistiques et des outils de suivi pour mieux comprendre les résultats récents, chaque tour reste indépendant."
        },
        {
          q: "Quel est le multiplicateur maximum dans Crazy Time ?",
          a: "Le potentiel maximum annoncé dans Crazy Time peut atteindre jusqu'à 20 000x pendant le tour bonus principal de Crazy Time."
        },
        {
          q: "Puis-je participer aux tours bonus si je n'ai pas parié directement dessus ?",
          a: "Si les règles du jeu et la configuration actuelle le permettent via des mécaniques bonus telles que l'entrée minimale ou les effets Top Slot, les joueurs peuvent toujours accéder à certains résultats bonus avec un multiplicateur réduit."
        },
        {
          q: "Les statistiques en direct de Crazy Time sont-elles prédictives ?",
          a: "Non. Les statistiques en direct aident à visualiser l'activité récente, mais elles ne prédisent pas les résultats futurs. Chaque tour est indépendant."
        }
      ],
      whatIsTitle: "Qu'est-ce que Crazy Time ?",
      whatIsText: "Crazy Time est un jeu de casino en direct développé par Evolution Gaming, lancé en 2020. Il combine un format de roue d'argent avec quatre tours bonus interactifs, offrant l'une des expériences de casino en direct les plus captivantes disponibles aujourd'hui.",
    
      tableParameter: "Paramètre",
      tableDetails: "Détails",
      gameName: "Nom du Jeu",
      provider: "Fournisseur",
      rtp: "RTP",
      releaseYear: "Année de Sortie",
      gameType: "Type de Jeu",
      minBet: "Mise Min.",
      maxBet: "Mise Max.",
      volatility: "Volatilité",
      gameTypeValue: "Émission de Jeu en Direct",
      volatilityValue: "Élevée",
    
      howToPlayTitle: "Comment Jouer à Crazy Time",
      howToPlayText: "Le jeu en direct Crazy Time suit un format simple :",
      step1: "Placez votre mise sur un ou plusieurs segments de la roue avant la fin du temps imparti",
      step2: "Regardez la roue tourner — un animateur en direct gère toute la session en temps réel",
      step3: "Gagnez si la roue s'arrête sur le segment que vous avez choisi",
      step4: "Déclenchez un tour bonus si le curseur s'arrête sur un segment bonus",
    
      wheelBreakdownTitle: "Répartition des Segments de la Roue",
      wheelSegment: "Segment",
      wheelOccurrences: "Occurrences sur la Roue",
      wheelMultiplier: "Multiplicateur",
      upTo2000x: "Jusqu'à 2000x",
      upTo10000x: "Jusqu'à 10 000x",
      upTo20000x: "Jusqu'à 20 000x",
    
      bonusRoundsTitle: "Tours Bonus de Crazy Time",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Un stand de tir avec 108 multiplicateurs aléatoires cachés derrière des symboles. Les joueurs en choisissent un pour révéler leur prix.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Une simple pièce à deux faces est lancée. Chaque côté affiche un multiplicateur — rouge ou bleu. Rapide, net, excitant.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Un mur physique de Pachinko géant laisse tomber une rondelle du haut. Elle rebondit à travers des chevilles et atterrit sur un multiplicateur en bas. Peut doubler infiniment jusqu'à ce qu'un multiplicateur non-double soit touché.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bonus)",
      crazyTimeBonusText: "L'événement principal. Une roue virtuelle massive avec trois curseurs tourne dans un monde numérique. Les joueurs choisissent un curseur avant le tour. La récompense potentielle la plus élevée atteint 20 000x.",
    
      rulesTitle: "Règles du Jeu Crazy Time : Points Clés",
      rule1: "Vous pouvez parier sur plusieurs segments simultanément",
      rule2: "Le Top Slot au-dessus de la roue principale ajoute un multiplicateur ou déclenche l'entrée bonus avec des multiplicateurs renforcés",
      rule3: "Si vous n'avez pas parié sur un segment bonus mais qu'il tombe, vous entrez quand même dans le bonus (avec un multiplicateur minimum)",
      rule4: "Tous les multiplicateurs bonus sont multipliés par votre mise initiale, pas seulement une récompense fixe",
    
      statsTitle: "Statistiques et Résultats en Direct de Crazy Time",
      statsText: "Comprendre les statistiques de Crazy Time aide à informer vos décisions de session. La plupart des plateformes affichent un tracker de statistiques en direct directement dans l'interface du jeu.",
      typicalStatsTitle: "Statistiques Typiques que Vous Verrez :",
      stat1: "Résultats des 100 derniers tours — distribution de chaque segment tombé",
      stat2: "Fréquence bonus — à quelle fréquence chaque tour bonus a été déclenché",
      stat3: "Historique des multiplicateurs — meilleurs multiplicateurs attribués lors des tours récents",
      stat4: "Segments chauds et froids — indicateurs visuels de la fréquence des segments",
      tip: "Conseil de pro :",
      tipText: "Le tracker de statistiques de Crazy Time n'est pas un outil prédictif — les résultats passés n'influencent pas les tours futurs. Le RNG et la roue en direct fonctionnent indépendamment à chaque tour.",
    
      whyPlayTitle: "Pourquoi Jouer à Crazy Time en Ligne ?",
      prosTitle: "🏆 Avantages :",
      pro1: "Qualité de production exceptionnelle d'Evolution Gaming",
      pro2: "Quatre jeux bonus distincts — jamais répétitif",
      pro3: "Énorme potentiel de multiplicateur maximum (jusqu'à 20 000x)",
      pro4: "Disponible 24h/24 et 7j/7 dans pratiquement tous les principaux casinos en direct en ligne",
      pro5: "Tracker de statistiques en direct transparent intégré dans l'interface",
    
      consTitle: "⚠️ Inconvénients :",
      con1: "Volatilité élevée — de longues séries de pertes sont possibles",
      con2: "Le vrai jeu démo n'est pas disponible (limitation du format en direct)",
      con3: "Les multiplicateurs maximaux sont rares par conception"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Statistiques Avancées des Bonus Crazy Time",
    
      flapperTitle: "Flapper Bonus Crazy Time",
      flapperText: "Comparez les multiplicateurs moyens des trois couleurs du flapper Crazy Time. Ces chiffres donnent un aperçu rapide des performances à court terme par rapport à la moyenne de long terme.",
      avgAlways: "Moy. historique",
      flapperFootnote: "Le marqueur indique la référence du multiplicateur moyen à long terme pour la couleur de flapper sélectionnée sur la base des données historiques suivies.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Comparez les résultats rouges et bleus de Coin Flip avec les multiplicateurs moyens et la fréquence d’apparition par rapport aux attentes de long terme.",
      avgMultiplier: "Multiplicateur moy.",
      frequency: "Fréquence",
      vsAvg: "vs moy.",
      coinFlipFootnote: "Le marqueur indique la référence de fréquence moyenne à long terme pour la couleur sélectionnée sur la base des données suivies.",
    
      cashHuntSymbolsTitle: "Symboles Cash Hunt",
      cashHuntSymbolsText: "Cette répartition montre le multiplicateur moyen et la fréquence d’apparition de chaque symbole cible de Cash Hunt.",
      times: "fois",
    
      recentCashHuntTitle: "Cash Hunt : Multiplicateurs Récents",
      recentCashHuntText: "Suivez les multiplicateurs récents des manches Cash Hunt. Les cellules mises en évidence marquent les résultats récents les plus forts et les plus faibles.",
    
      bestBetsTitle: "Meilleurs Paris Individuels",
      bestBetsText: "Ce tableau met en avant les gains individuels les plus importants de la période sélectionnée, y compris joueur, paiement, résultat et multiplicateur.",
      date: "Date",
      result: "Résultat",
      player: "Joueur",
      payout: "Paiement",
      multiplier: "Multiplicateur",
      view: "Voir",
    
      latestMaxTitle: "Derniers Multiplicateurs Maximums",
      latestMaxText: "Ces récents meilleurs résultats bonus montrent les multiplicateurs les plus élevés atteints durant la période sélectionnée.",
      clip: "Voir le clip",
      biggestWinsGallery: "Galerie des Plus Gros Gains",
    
      yellow: "Jaune",
      blue: "Bleu",
      green: "Vert",
      red: "Rouge",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Jouer 🎰"
    },
   
    gamePage: {
      statisticsTitleSuffix: "Statistiques",
      subtitlePrefix: "Suivez les résultats, l’historique et les statistiques en temps réel de",
      playCta: "Jouer maintenant"
    },
    nav: { home: "Accueil", liveGames: "Jeux en direct" },
    home: {
      heroTitleBefore: "Casino en Direct",
      heroTitleAccent: "Statistiques",
      heroTitleAfter: "& Résultats en Temps Réel",
      heroText: "Statistiques de casino en direct, résultats de jeu et résultats en temps réel pour vos game shows de casino en direct préférés. Suivez le RTP, les séries chaudes ou froides et les plus gros gains — 100% gratuit, sans compte requis.",      liveGames: "Jeux en direct",
      featuresTitle: "Nos fonctionnalités",
      testimonialsTitle: "Témoignages"
    },
    features: {
      noDownloadTitle: "Aucun téléchargement",
      noDownloadText: "Consultez toutes les données directement dans votre navigateur.",
      accurateDataTitle: "Données précises",
      accurateDataText: "Suivi automatisé de chaque spin en temps réel.",
      freeTitle: "100% gratuit",
      freeText: "Tracksino est entièrement gratuit."
    },
    footer: {
      games: "Jeux",
      moreGames: "Plus de jeux",
      resources: "Ressources",
      faq: "FAQ",
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      contact: "Contact",
      description: "Suivez les jeux de casino en direct en temps réel."
    },
    homeFaq: {
      faqTitle: "FAQ sur les statistiques de casino en direct",
      faqIntro: "Réponses sur live casino statistics, game results et real-time results sur notre plateforme.",
      faq: [
        {
          q: "Que sont les statistiques de casino en direct ?",
          a: "Ce sont des données basées sur les résultats réels des jeux et sur les résultats en temps réel des streams live."
        },
        {
          q: "Comment collectez-vous les résultats des jeux ?",
          a: "Nous surveillons des streams publics, des interfaces fournisseurs et des sources de diffusion avec des systèmes automatisés."
        },
        {
          q: "À quelle fréquence les résultats en temps réel sont-ils mis à jour ?",
          a: "Les résultats en temps réel sont mis à jour en continu et vérifiés avant d’être affichés."
        },
        {
          q: "Les statistiques peuvent-elles prédire le prochain résultat ?",
          a: "Non. Les statistiques aident à comprendre les résultats et tendances récentes, mais ne prédisent pas l’avenir."
        }
      ]
    },
    common: {
      player: "Joueur",
      verifiedUser: "Utilisateur vérifié",
      liveNow: "En direct",
      hour: "heure",
      hours: "heures",
      spins: "spins"
    },
    tabs: {
      temperature: "Température",
      history: "Historique",
      stats: "Statistiques",
      bigwins: "Gros gains",
      review: "Avis",
      stream: "Stream",
    }
  },

  pt: {
    lightningrouletteReview: {
      title: "Análise de Lightning Roulette, RTP e Estatísticas ao Vivo",
      intro:
        "Lightning Roulette é uma variante de roleta com crupiê ao vivo baseada na roda europeia. O jogo segue as regras padrão de roleta, mas cada rodada pode atribuir multiplicadores aleatórios a números selecionados como Números da Sorte, criando uma versão de maior variância do roleta ao vivo tradicional.",
    
      quickOverviewTitle: "Visão Geral Rápida do Jogo",
      tableParameter: "Parâmetro",
      tableDetails: "Detalhes",
    
      specProvider: "Provedor",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nome do Jogo",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "Ano de Lançamento",
      specReleaseYearValue: "2018",
      specGameType: "Tipo de Jogo",
      specGameTypeValue: "Roleta com Crupiê ao Vivo",
      specWheel: "Formato da Roda",
      specWheelValue: "Roleta Europeia (zero único)",
      specRtp: "RTP",
      specRtpValue: "97,30% em apostas padrão; 97,10% em apostas diretas",
      specMinBet: "Aposta Mínima",
      specMinBetValue: "$0,20",
      specMaxBet: "Aposta Máxima",
      specMaxBetValue: "$10.000",
      specMaxWin: "Multiplicador Máximo",
      specMaxWinValue: "500x",
      specLuckyNumbers: "Números da Sorte",
      specLuckyNumbersValue: "1 a 5 por rodada",
      specVolatility: "Volatilidade",
      specVolatilityValue: "Média a alta",
      specMobile: "Jogo Móvel",
      specMobileValue: "Suportado",
    
      aboutTitle: "O que é Lightning Roulette?",
      aboutText1:
        "Lightning Roulette é um jogo de roleta ao vivo que mantém a roda europeia de zero único e o layout de apostas padrão, enquanto adiciona eventos de multiplicadores aleatórios antes de cada giro. Este formato é frequentemente descrito como roleta relâmpago ao vivo ou roleta relâmpago online porque o jogo combina um crupiê de estúdio real com uma mecânica de multiplicador gerada antes que a bola caia.",
      aboutText2:
        "Em termos práticos, a diferença em relação à roleta clássica é simples: um a cinco números se tornam Números da Sorte a cada rodada, e se uma aposta direta cair em um deles, o pagamento utiliza o multiplicador atribuído em vez do pagamento direto regular. Esta é a ideia central por trás da maioria das páginas de análise de roleta relâmpago e rastreadores de estatísticas.",
    
      howToPlayTitle: "Como Jogar Lightning Roulette",
      howToPlayText1:
        "Como jogar Lightning Roulette é simples para qualquer pessoa familiarizada com roleta. Os jogadores fazem apostas durante a fase de aposta, então o jogo revela os Números da Sorte e seus multiplicadores antes do giro ao vivo começar.",
      howToPlayText2:
        "As regras da roleta relâmpago são baseadas em roleta europeia, portanto apostas externas, dúzias, colunas e apostas internas funcionam conforme esperado. O mecanismo adicional afeta apenas apostas diretas que caem em Números da Sorte selecionados.",
      howToPlayBullets: [
        "Escolha valores de fichas e faça apostas no layout da roleta.",
        "Aguarde o jogo atribuir 1 a 5 Números da Sorte com multiplicadores aleatórios.",
        "Observe o crupiê girar a roda e soltar a bola.",
        "Se sua aposta direta acertar um Número da Sorte, a rodada usa o pagamento do multiplicador relâmpago.",
        "Todas as apostas não multiplicadas são resolvidas de acordo com as regras padrão de roleta europeia."
      ],
    
      payoutTitle: "Pagamentos de Lightning Roulette",
      payoutIntro:
        "Os pagamentos de roleta relâmpago seguem roleta padrão para a maioria das apostas, enquanto a principal diferença aparece em números diretos. Quando um Número da Sorte selecionado vence, o multiplicador atribuído substitui o pagamento direto regular e pode chegar a 500x.",
    
      payoutColBet: "Tipo de Aposta",
      payoutColPayout: "Pagamento",
      payoutColNote: "Como Funciona",
    
      payoutBetStraightLucky: "Direto (Número da Sorte)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "Aplicado quando uma aposta direta cai em um Número da Sorte com um multiplicador atribuído.",
    
      payoutBetStraight: "Direto (padrão)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "Ganho direto padrão sem multiplicador relâmpago.",
    
      payoutBetSplit: "Divisão",
      payoutValSplit: "17:1",
      payoutNoteSplit: "Aposta em 2 números adjacentes.",
    
      payoutBetStreet: "Rua",
      payoutValStreet: "11:1",
      payoutNoteStreet: "Aposta em 3 números em fila.",
    
      payoutBetCorner: "Canto",
      payoutValCorner: "8:1",
      payoutNoteCorner: "Aposta em 4 números.",
    
      payoutBetDozen: "Dúzia / Coluna",
      payoutValDozen: "2:1",
      payoutNoteDozen: "Cobre 12 números.",
    
      payoutBetEven: "Vermelho/Preto, Ímpar/Par, Alto/Baixo",
      payoutValEven: "1:1",
      payoutNoteEven: "Apostas externas padrão.",
    
      rtpTitle: "RTP e Volatilidade de Lightning Roulette",
      rtpText1:
        "O RTP de roleta relâmpago depende do tipo de aposta. Apostas padrão como vermelho/preto ou dúzias mantêm um RTP de aproximadamente 97,30%, enquanto apostas diretas ficam em torno de 97,10% porque o jogo realoca parte da estrutura de pagamento para financiar o recurso multiplicador.",
      rtpText2:
        "Em termos de variância, o jogo é mais volátil que a roleta clássica quando o foco está em números internos. Os multiplicadores de roleta relâmpago criam momentos de pagamento menos frequentes mas maiores, razão pela qual muitos jogadores descrevem o jogo como volatilidade média a alta em vez de um perfil de roleta padrão.",
    
      strategyTitle: "Notas de Estratégia de Lightning Roulette",
      strategyText1:
        "Uma estratégia de roleta relâmpago não muda a vantagem da casa, mas pode alterar o perfil de risco de uma sessão. Jogadores que preferem variância menor geralmente ficam mais próximos de apostas externas, enquanto aqueles que desejam exposição a multiplicadores focam mais em cobertura direta.",
      strategyText2:
        "De uma perspectiva estatística, o jogo é melhor abordado como roleta europeia com uma camada de multiplicador adicional. Isso o torna útil para rastrear frequência de Números da Sorte, distribuição de multiplicadores e oscilações de pagamento em uma amostra maior em vez de julgar o jogo por uma série curta.",
    
      trackerTitle: "O Que Você Pode Rastrear",
      trackerIntro:
        "Esta seção do site é construída para jogadores que desejam revisar roleta relâmpago online através de resultados recentes, multiplicadores e métricas de resumo em vez de confiar em impressões de curto prazo.",
    
      trackLuckyNumbers: "Histórico de Números da Sorte",
      trackLuckyNumbersText:
        "Rastreie quais números receberam multiplicadores e com que frequência aparecem em rodadas recentes.",
    
      trackMultipliers: "Distribuição de Multiplicadores",
      trackMultipliersText:
        "Veja com que frequência os multiplicadores 50x, 100x, 150x, 200x, 300x, 400x e 500x aparecem.",
    
      trackSpinResults: "Resultados dos Giros",
      trackSpinResultsText:
        "Revise resultados recentes, incluindo número vencedor, números relâmpago e multiplicadores acertados.",
    
      trackRtp: "Snapshot de RTP",
      trackRtpText:
        "Compare os resultados observados com o perfil de retorno esperado do jogo.",
    
      trackPatterns: "Padrões de Resultados",
      trackPatternsText:
        "Use o histórico recente e dados de distribuição para seguir séries de curto prazo e frequência de números.",
    
      comparisonTitle: "Lightning Roulette em um Relance",
      compColArea: "Área",
      compColValue: "Lightning Roulette",
      compColMeaning: "Por Que Importa",
    
      compAreaBase: "Formato Base",
      compValueBase: "Roleta europeia com crupiê ao vivo",
      compWhyBase:
        "As regras principais permanecem familiares para jogadores que já conhecem roleta padrão.",
    
      compAreaMultipliers: "Multiplicadores Relâmpago",
      compValueMultipliers: "1–5 Números da Sorte, 50x a 500x",
      compWhyMultipliers:
        "Adiciona maior potencial de ganho a apostas diretas sem alterar pagamentos de apostas externas.",
    
      compAreaRtp: "Perfil RTP",
      compValueRtp: "97,30% padrão / 97,10% direto",
      compWhyRtp:
        "Útil para entender como o financiamento do multiplicador afeta diferentes tipos de apostas.",
    
      compAreaVariance: "Volatilidade",
      compValueVariance: "Maior que roleta clássica em apostas internas",
      compWhyVariance:
        "Pagamentos baseados em multiplicadores criam oscilações mais amplas de curto prazo.",
    
      compAreaUse: "Melhor Caso de Uso",
      compValueUse: "Jogadores que desejam roleta com variância adicional",
      compWhyUse:
        "Mantém a estrutura de roleta padrão enquanto adiciona pagamentos ocasionalmente aprimorados.",
    
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          q: "O que é Lightning Roulette?",
          a: "Lightning Roulette é uma versão com crupiê ao vivo de roleta europeia com multiplicadores aleatórios em Números da Sorte selecionados."
        },
        {
          q: "Como funcionam os multiplicadores de Lightning Roulette?",
          a: "Antes de cada giro, o jogo seleciona 1 a 5 Números da Sorte e atribui multiplicadores de 50x a 500x. Se uma aposta direta cair em um desses números, o pagamento do multiplicador se aplica."
        },
        {
          q: "Qual é o RTP de Lightning Roulette?",
          a: "O RTP típico é de aproximadamente 97,30% para apostas padrão e cerca de 97,10% para apostas diretas."
        },
        {
          q: "Os pagamentos de Lightning Roulette são diferentes da roleta padrão?",
          a: "A maioria dos tipos de apostas utiliza pagamentos padrão de roleta europeia. A principal diferença é o pagamento baseado em multiplicador em números diretos selecionados."
        },
        {
          q: "Lightning Roulette é mais volátil que a roleta clássica?",
          a: "Sim. O sistema de multiplicador cria variância mais ampla de curto prazo, especialmente para jogadores focando em apostas internas."
        }
      ],
    
      conclusionTitle: "Impressão Geral",
      conclusionText:
        "Como uma análise neutra de roleta relâmpago, o jogo pode ser descrito como roleta europeia padrão com uma camada de multiplicador adicionada que aumenta a variância sem alterar o formato principal. Para jogadores interessados em estatísticas ao vivo de roleta relâmpago, é um jogo útil para rastrear porque a frequência do multiplicador, seleção de Números da Sorte e padrões de pagamento podem todos ser medidos ao longo do tempo."
    },
    lightningrouletteHistory: {
      panelTitle:  "Histórico de giros",
      subtitle:    "Histórico recente com resultados de números sortudos.",
      occurredAt:  "Ocorreu em",
      spinResult:  "Resultado",
      multiplier:  "Multiplicador",
      firstLucky:  "Primeiro sortudo",
      secondLucky: "Segundo sortudo",
      thirdLucky:  "Terceiro sortudo",
      fourthLucky: "Quarto sortudo",
      fifthLucky:  "Quinto sortudo",
    },
    
    megaballReview: {
      title: "Tracker Mega Ball, RTP e Análise do Jogo",
      intro: "Acompanhe estatísticas, resultados e RTP do Mega Ball em tempo real com ferramentas de tracking ao vivo. Veja o histórico de bolas, rondas com multiplicadores, número de vencedores e tendências de pagamento num só lugar.",
  
      quickOverviewTitle: "Visão Geral Rápida do Jogo",
      tableParameter: "Parâmetro",
      tableDetails: "Detalhes",
      tableFeature: "Característica",
      tableDescription: "Descrição",
  
      specProvider: "Fornecedor",
      specProviderValue: "Evolution Gaming",
      specGameName: "Nome do Jogo",
      specGameNameValue: "Mega Ball",
      specRtp: "RTP",
      specRtpValue: "95,30%",
      specReleaseYear: "Ano de Lançamento",
      specReleaseYearValue: "2023",
      specGameType: "Tipo de Jogo",
      specGameTypeValue: "Game show ao vivo estilo bingo",
      specMinBet: "Faixa de Aposta",
      specMinBetValue: "Varia conforme o casino",
      specMaxWin: "Ganho Máximo",
      specMaxWinValue: "Até 1.000.000x",
      specBalls: "Bolas Sorteadas",
      specBallsValue: "20 bolas + Mega Ball + possível 2ª Mega Ball",
  
      trackerTitle: "O Que Pode Acompanhar",
      trackerIntro: "No Tracksino, as ferramentas de tracking do Mega Ball focam nas métricas ao vivo mais úteis para análise ronda a ronda.",
      trackBallHistory: "Histórico de Bolas",
      trackBallHistoryText: "Veja todas as bolas sorteadas na ordem exata.",
      trackMultiplier: "Multiplicador Mega Ball",
      trackMultiplierText: "Acompanhe multiplicadores de 5x a 100x.",
      trackWinners: "Número de Vencedores",
      trackWinnersText: "Veja quantas cartelas ou jogadores ganharam.",
      trackPayouts: "Valores de Pagamento",
      trackPayoutsText: "Monitorize pagamentos totais e compare rondas ativas.",
      trackLive: "Ver Mega Ball ao Vivo",
      trackLiveText: "Abra o jogo ao vivo e compare a ação com os dados do tracker.",
  
      aboutTitle: "O Que é Mega Ball?",
      aboutText1: "Mega Ball é um game show ao vivo de ritmo rápido que combina mecânicas de cartelas estilo bingo com sorteios de bolas ao estilo de lotaria. Uma ou duas rondas de bónus podem surgir após o sorteio principal, adicionando emoção através de multiplicadores.",
      aboutText2: "O objetivo é completar o maior número possível de linhas nas suas cartelas. Quanto mais linhas completar, maiores serão os ganhos, e as rondas com multiplicadores podem aumentar significativamente os pagamentos.",
  
      howToPlayTitle: "Como Jogar Mega Ball",
      howToPlayText1: "No Mega Ball, 20 bolas são sorteadas uma a uma a partir de uma máquina automática. Os números correspondentes nas cartelas dos jogadores são marcados automaticamente, e as cartelas mais próximas da vitória aparecem no topo da interface.",
      howToPlayText2: "Após a última bola, é gerado um multiplicador Mega Ball entre 5x e 100x. Se a Mega Ball completar uma linha vencedora, o pagamento pode ser multiplicado. Em casos raros, pode surgir uma 2ª Mega Ball, oferecendo uma oportunidade extra de ganho aumentado.",
      howToPlayBullets: [
        "20 bolas são sorteadas rapidamente uma após a outra.",
        "Os números correspondentes são marcados automaticamente em todas as cartelas ativas.",
        "As cartelas mais próximas de completar linhas aparecem no topo.",
        "Após o sorteio principal, é gerado um multiplicador Mega Ball.",
        "Uma rara 2ª Mega Ball pode oferecer uma oportunidade adicional de pagamento multiplicado."
      ],
  
      payoutTitle: "Pagamentos do Mega Ball",
      payoutIntro: "Os pagamentos no Mega Ball dependem do número de linhas completadas numa única cartela. Linhas horizontais, verticais e diagonais contam para o prémio final.",
      payoutColLines: "Linhas Completadas",
      payoutColPrize: "Pagamento",
      payoutColNote: "Como Funciona",
      payout1Line: "1 linha horizontal, vertical ou diagonal.",
      payout2Lines: "2 linhas completadas numa cartela.",
      payout3Lines: "3 linhas completadas numa cartela.",
      payout4Lines: "4 linhas completadas numa cartela.",
      payout5Lines: "5 linhas completadas numa cartela.",
      payout6Lines: "6 linhas completadas numa cartela.",
  
      comparisonTitle: "Mega Ball em Resumo",
      compColArea: "Área",
      compColMegaBall: "Mega Ball",
      compColMeaning: "Por Que é Importante",
      compAreaBase: "Formato base",
      compMegaBallBase: "Game show ao vivo estilo bingo",
      compMeaningBase: "Combina conclusão de cartelas com sorteio ao vivo.",
      compAreaBonus: "Rondas de bónus",
      compMegaBallBonus: "Mega Ball e rara 2ª Mega Ball",
      compMeaningBonus: "Adiciona potencial de multiplicador após o sorteio principal.",
      compAreaTracking: "Valor de tracking",
      compMegaBallTracking: "Alto",
      compMeaningTracking: "Ordem das bolas, vencedores e pagamentos são fáceis de analisar.",
      compAreaMaxWin: "Ganho máximo potencial",
      compMegaBallMaxWin: "Até 1.000.000x",
      compMeaningMaxWin: "Os maiores ganhos dependem das linhas completadas e dos multiplicadores.",
  
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          q: "Posso acompanhar os resultados do Mega Ball ao vivo?",
          a: "Sim. Um tracker Mega Ball pode mostrar o histórico de bolas, pagamentos recentes, número de vencedores e resultados dos multiplicadores ronda a ronda."
        },
        {
          q: "Como funciona o multiplicador Mega Ball?",
          a: "Após o sorteio principal, é gerado um multiplicador entre 5x e 100x. Se a Mega Ball completar uma linha vencedora, o pagamento é multiplicado."
        },
        {
          q: "O que é a 2ª Mega Ball?",
          a: "A 2ª Mega Ball é um sorteio extra raro que oferece uma nova oportunidade de completar uma linha vencedora com multiplicador."
        },
        {
          q: "Mega Ball é mais parecido com bingo ou game show?",
          a: "Combina ambos. A mecânica baseia-se em linhas de bingo, enquanto a apresentação segue o estilo de um game show de casino ao vivo."
        },
        {
          q: "Os dados do tracker podem prever resultados futuros?",
          a: "Não. Os dados do tracker ajudam a analisar rondas anteriores e estatísticas ao vivo, mas cada sorteio é independente."
        }
      ]
    },
    dreamcatcherReview: {
      title: "Dream Catcher Live: Estatísticas em Tempo Real, Resultados & Guia Completo do Jogo",
      intro:
        "Dream Catcher é o principal jogo Money Wheel da Evolution Gaming que transformou o entretenimento de cassino ao vivo desde seu lançamento em 2017. Esta experiência de roda da fortuna combina a emoção de um programa de TV com apostas reais, tudo transmitido em ultra-HD a partir de estúdios profissionais na Letônia.\n\nAo contrário dos jogos de mesa tradicionais, Dream Catcher não exige conhecimento prévio. Basta apostar em um número, assistir a roda girar e coletar seus ganhos se ela parar na sua escolha. A adição de segmentos multiplicadores cria oportunidades de ganhos massivos de até 20.000x a sua aposta.",
      playbtn: "Jogar",
      heroAlt: "Logo do jogo ao vivo Dream Catcher Money Wheel",
    
      quickOverviewTitle: "Visão Geral Rápida do Jogo",
      specFeature: "Especificação",
      specDetails: "Detalhes",
      specProvider: "Provedor do Jogo",
      specProviderValue: "Evolution Gaming",
      specYear: "Ano de Lançamento",
      specYearValue: "2017",
      specType: "Tipo de Jogo",
      specTypeValue: "Roda de Dinheiro ao Vivo",
      specRtp: "RTP",
      specRtpValue: "96,58% (ótimo)",
      specBetRange: "Faixa de Aposta",
      specBetRangeValue: "€0,10 – €1.000",
      specMaxWin: "Ganho Máximo",
      specMaxWinValue: "até 20.000x",
      specSegments: "Total de Segmentos",
      specSegmentsValue: "54",
      specLocation: "Local de Transmissão",
      specLocationValue: "Riga, Letônia",
    
      howWorksTitle: "Como Funciona o Dream Catcher",
      howWorksText:
        "O jogo apresenta uma grande roda vertical com 54 segmentos coloridos. Um apresentador ao vivo gira a roda enquanto interage com os jogadores via chat, criando uma autêntica atmosfera de programa de TV.",
    
      wheelDistributionTitle: "Distribuição dos Segmentos da Roda",
      wheelColNumber: "Número",
      wheelColSegments: "Segmentos",
      wheelColPayout: "Pagamento",
      wheelColProbability: "Probabilidade",
      wheelDistributionNote:
        "Os números pagam exatamente o que mostram — acerte o 5 e você recebe 5:1 sobre a aposta. Simples assim.",
      multiplier2xLabel: "Multiplicador 2x",
      multiplier7xLabel: "Multiplicador 7x",
    
      multiplierTitle: "Mecânica dos Multiplicadores",
      multiplierIntro:
        "Os dois segmentos multiplicadores (prata 2x e ouro 7x) são onde a ação fica interessante. Você não pode apostar neles diretamente, mas quando a roda para em um deles:",
      multiplierBullets: [
        "Todas as apostas permanecem ativas",
        "A roda gira novamente",
        "O número sorteado depois é multiplicado"
      ],
      multiplierNote:
        "Os multiplicadores podem se acumular. Se cair 7x, depois 7x novamente e então 40 — isso resulta em um ganho de 1.960x. O máximo teórico pode chegar a 20.000x.",
    
      statsTrackingTitle: "Estatísticas ao Vivo & Resultados do Dream Catcher",
      statsTrackingIntro:
        "Acompanhar estatísticas do Dream Catcher ajuda a entender o comportamento do jogo ao longo do tempo. Embora cada rodada seja independente, os resultados mostram se a roda está próxima das probabilidades esperadas.",
      trackingBullets: [
        "Status atual do multiplicador",
        "Rodadas desde o último multiplicador",
        "Frequência dos números",
        "Segmentos quentes e frios em tempo real"
      ],
      statsTrackingNote:
        "Muitos jogadores usam trackers de estatísticas, mas lembre-se: resultados passados não influenciam o futuro.",
    
      strategiesTitle: "Estratégias de Aposta",
      strategies: [
        {
          title: "Distribuir Apostas",
          text:
            "Cobrir vários segmentos aumenta a frequência de ganhos. Apostar em 1, 2 e 5 cobre cerca de 83% das rodadas."
        },
        {
          title: "Focar em Altos Pagamentos",
          text:
            "Apostar em 10, 20 ou 40 traz menos vitórias, mas maiores ganhos."
        },
        {
          title: "Apostas Pequenas",
          text:
            "Apostar valores baixos permite jogar mais rodadas e capturar multiplicadores."
        }
      ],
    
      rtpBreakdownTitle: "RTP por Tipo de Aposta",
      rtpBreakdownIntro:
        "Nem todas as apostas têm o mesmo retorno teórico.",
      rtpColBet: "Aposta",
      rtpColRtp: "RTP",
      rtpBreakdownNote:
        "Números baixos têm melhor valor, enquanto 40 tem maior risco.",
    
      whyLoveTitle: "Por Que os Jogadores Gostam",
      whyLoveBullets: [
        "Fácil de entender",
        "Atmosfera de programa ao vivo",
        "Multiplicadores emocionantes",
        "Apostas acessíveis",
        "Totalmente otimizado para mobile"
      ],
    
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          q: "Posso ver estatísticas ao vivo?",
          a: "Sim, o jogo mostra resultados recentes e históricos."
        },
        {
          q: "Multiplicadores acumulam?",
          a: "Sim, podem multiplicar várias vezes seguidas."
        },
        {
          q: "Posso prever resultados?",
          a: "Não, cada rodada é aleatória."
        },
        {
          q: "Por que o 40 tem RTP menor?",
          a: "Porque aparece raramente (1 em 54)."
        },
        {
          q: "Comparação com slots?",
          a: "RTP de 96,58% é competitivo."
        }
      ]
    },
dreamcatcherStatsExtra: {
  trackedMetaPrefix: "Últimos 30 minutos",
  bestWinsTitle: "Maiores ganhos por rodada",
  bestWinsText: "Uma visão rápida dos maiores pagamentos das rodadas mais recentes monitoradas.",
  wheelStatsTitle: "Estatísticas dos multiplicadores da roda",
  wheelStatsText: "Veja com que frequência os segmentos multiplicadores apareceram no mesmo período.",
  matchedTitle: "Multiplicadores correspondentes",
  matchedText: "Compare os acertos de multiplicadores com rodadas normais na amostra atual.",
  finished: "Finalizado",
  outcome: "Resultado",
  player: "Jogador",
  wonAmount: "Valor ganho",
  multiplier: "Multiplicador",
  match: "Correspondência",
  noMatch: "Sem correspondência"
},
    gamePanels: {
      temperatureSubtitle:
        "A temperatura dos segmentos destaca resultados quentes e frios em tempo real com base nos giros recentes versus a probabilidade esperada.",
      temperatureSpinsSince: "há {n} giros",
    
      historySubtitle:
        "Veja o histórico mais recente com resultados em tempo real, multiplicadores, vencedores e pagamentos.",
    
      rtpBasedOn: "Baseado nos últimos 1.000 giros",
    
      summaryTotalSpinsToday: "Total de giros hoje",
      summaryBonusRounds: "Rodadas bônus",
      summaryBiggestMultiplier: "Maior multiplicador",
      summaryAvgPayout: "Pagamento méd.",
    
      occurredAt: "Ocorrido em",
      slotResult: "Resultado do slot",
      spinResult: "Resultado do giro",
      specialResult: "Resultado especial",
      multiplier: "Multiplicador",
      totalWinners: "Vencedores",
      totalPayout: "Pagamento total",
    
      watch: "Assistir"
    },
    homeSeo: {
      sectionTitle: "Sobre Nossa Plataforma de Estatísticas de Cassino ao Vivo",
      whoTitle: "Quem Somos",
      whoText1: "Somos uma plataforma independente de análise de jogos de cassino ao vivo que coleta, processa e visualiza estatísticas em tempo real.",
      whoText2: "Nosso objetivo é fornecer aos jogadores dados transparentes com base em resultados reais dos jogos, ajudando a entender melhor as estatísticas de cassino ao vivo e os resultados recentes.",
      howTitle: "Como Coletamos as Informações",
      howText1: "Usamos sistemas automatizados de coleta de dados que acompanham os resultados de jogos de cassino ao vivo em tempo real.",
      howText2: "Os dados vêm de fontes abertas de transmissão, streams de jogos ao vivo e interfaces públicas dos provedores, permitindo monitorar continuamente os resultados dos jogos e os resultados em tempo real.",
      howText3: "Todos os resultados passam por processamento adicional e verificação algorítmica para minimizar atrasos e manter alta precisão estatística. A plataforma utiliza tecnologias modernas de dados, incluindo sincronização de fluxo, parsing automatizado e modelos analíticos."
    },
    monopolyReview: {
      title: "Monopoly Live Análise: a experiência definitiva de game show de cassino ao vivo",
      intro: "Bem-vindo ao guia definitivo de Monopoly Live, um dos jogos com dealer ao vivo mais populares já criados. Desenvolvido pela lendária Evolution Gaming, este título combina uma enorme roda do dinheiro com uma incrível rodada bônus 3D em realidade aumentada com o próprio Mr. Monopoly. Se você quer jogar Monopoly Live online ou apenas conferir as estatísticas mais recentes do jogo, aqui você encontra todas as informações de que precisa.",
      playbtn :"Jogar",
      heroAlt: "Roda do Monopoly Live com apresentadora ao vivo e estúdio do game show",
      tableFeature: "Recurso",
      tableDetails: "Detalhes",
      gameNameLabel: "Nome do jogo",
      providerLabel: "Provedor",
      gameTypeLabel: "Tipo de jogo",
      rtpLabel: "RTP",
      maxWinLabel: "Ganho máximo",
    
      gameTypeValue: "Game Show de Cassino ao Vivo",
      rtpValue: "Até 96,23%",
      maxWinValue: "$500.000 (ou equivalente em multiplicador)",
    
      sectionsTitle: "Principais recursos de Monopoly Live",
    
      wheelTitle: "Monopoly Live A roda do dinheiro (jogo base)",
      wheelText: "O núcleo da experiência de cassino ao vivo de Monopoly Live. Um apresentador ao vivo gira uma enorme roda vertical com 54 segmentos. Os jogadores apostam em números (1, 2, 5, 10) para ganhar pagamentos instantâneos em dinheiro de acordo com o número sorteado.",
    
      chanceTitle: "Monopoly Live O segmento 'Chance'",
      chanceText: "Cair em um segmento 'Chance' concede aos jogadores um prêmio instantâneo em dinheiro ou um empolgante bônus multiplicador. Se um multiplicador aparecer, o apresentador gira a roda novamente e seu próximo ganho é multiplicado.",
    
      bonus3dTitle: "Monopoly Live A rodada bônus 3D",
      bonus3dText: "O grande destaque do jogo Monopoly Live. Se você apostar em '2 ROLLS' ou '4 ROLLS' e a roda parar ali, o Mr. Monopoly entra em um mundo 3D de jogo de tabuleiro, coletando prêmios, multiplicadores e evitando impostos.",
    
      howToPlayTitle: "Como jogar Monopoly Live",
      howToPlayIntro: "Começar em um cassino online com Monopoly Live é incrivelmente simples. Basta seguir estes passos:",
      step1: "Faça suas apostas: Você tem uma curta janela de apostas para colocar suas fichas em 1, 2, 5, 10, '2 Rolls' ou '4 Rolls'.",
      step2: "A rodada: O dealer ao vivo gira a roda. Você pode assistir ao Monopoly Live enquanto a roda desacelera.",
      step3: "O pagamento: Se a roda parar no seu número, você ganha. Se cair em um jogo bônus e você tiver apostado nele, entra na rodada 3D.",
    
      statsTitle: "Monopoly Live estatísticas, resultados e trackers",
      statsText1: "Para muitos entusiastas sérios de iGaming, acompanhar o jogo é tão importante quanto jogar. Como este é um jogo de probabilidade, muitos jogadores usam um tracker de Monopoly Live para acompanhar as tendências do jogo.",
      statsText2: "Ao analisar as estatísticas de Monopoly Live, você pode ver a frequência das rodadas bônus, os multiplicadores médios e os números quentes/frios. Verificar o histórico de Monopoly Live permite que você veja os resultados de Monopoly Live de hoje. Embora resultados passados não garantam resultados futuros, olhar um placar de cassino de Monopoly Live dá aos jogadores uma ideia de como a roda está se comportando durante a sessão. Lembre-se sempre de jogar com responsabilidade, independentemente do que os resultados de Monopoly Live mostrem.",
      statsNote: "Observação: Se você gosta desse formato, talvez também queira conferir Monopoly Big Baller live, um spin-off no estilo bingo que também apresenta empolgantes resultados de Monopoly Big Baller hoje ao vivo.",
    
      freePlayTitle: "Monopoly Live Dá para jogar grátis?",
      freePlayText: "Muitos jogadores procuram por uma demo de cassino de Monopoly Live ou Monopoly Live grátis. Como este é um jogo de estúdio ao vivo com dealers reais, não há uma demo jogável com dinheiro fictício disponível. No entanto, você pode entrar em qualquer cassino online com Monopoly Live, abrir o jogo e simplesmente assistir ao stream de Monopoly Live grátis para aprender as regras antes de apostar dinheiro real.",
    
      faqTitle: "Perguntas frequentes (FAQ)",
      faq: [
        {
          q: "Monopoly Live Onde posso encontrar resultados e estatísticas?",
          a: "Você pode encontrar as estatísticas de Monopoly Live diretamente na interface do jogo, que mostra os segmentos vencedores mais recentes. Para análises mais profundas, muitos sites externos de tracker de cassino oferecem um histórico completo de Monopoly Live."
        },
        {
          q: "Monopoly Live Existe um app de cassino disponível?",
          a: "Não existe um apk independente de Monopoly Live. No entanto, você pode jogar perfeitamente no celular baixando o aplicativo oficial de qualquer cassino licenciado que ofereça títulos da Evolution Gaming."
        },
        {
          q: "Monopoly Live Qual é a diferença entre este jogo e Monopoly Big Baller?",
          a: "Embora ambos apresentem o Mr. Monopoly e rodadas bônus em 3D, o jogo original usa uma roda do dinheiro giratória, enquanto o Monopoly Big Baller live casino usa uma máquina de sorteio de bolas no estilo bingo."
        },
        {
          q: "Monopoly Live Como entro no jogo bônus 3D?",
          a: "Para participar do jogo de tabuleiro 3D, você precisa apostar nas áreas de aposta '2 ROLLS' ou '4 ROLLS'. Se a roda parar em um desses segmentos, a rodada bônus começa."
        },
        {
          q: "Monopoly Live Posso interagir com o dealer ao vivo?",
          a: "Sim. O jogo conta com um chat de cassino ao vivo de Monopoly Live onde você pode conversar com o apresentador e outros jogadores, tornando a experiência de Monopoly Live altamente social e envolvente."
        },
        {
          q: "Monopoly Live Os resultados são manipulados?",
          a: "Não. Monopoly Live da Evolution Gaming é amplamente testado e licenciado pelas principais autoridades de jogos de azar. A roda é completamente física e aleatória, garantindo que cada resultado de Monopoly Live seja 100% justo."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live Lançamentos de dados de nível baixo",
      diceRollsMidTitle: "Monopoly Live Lançamentos de dados de nível médio",
      diceRollsHighTitle: "Monopoly Live Lançamentos de dados de nível alto",
      trackedMeta: "Últimas 6 horas • 258 giros",
    
      boardMovesTitle: "Monopoly Live Estatísticas de movimentos no tabuleiro",
      bonusGameStats: "Estatísticas do jogo bônus",
      doublesRolled: "Duplas tiradas",
      avgBoardRolls: "Média de lançamentos no tabuleiro por jogo bônus",
    
      landingStatsTitle: "Monopoly Big Baller Estatísticas de casas de chegada",
    
      bestIndividualWinsTitle: "Monopoly Live Melhores vitórias individuais",
      latestTopMultipliersTitle: "Monopoly Live Multiplicadores máximos mais recentes",
    
      finished: "Finalizado",
      player: "Jogador",
      wonAmount: "Valor ganho",
      multiplier: "Multiplicador",
      bigWinClip: "Clipe de grande vitória",
      bonusRound: "Rodada bônus",
      watchClip: "Assistir clipe",
      biggestWinsGallery: "Galeria das maiores vitórias"
    },
    seo: {
      lightningroulette: {
        title: "Lightning Roulette estatísticas, RTP e resultados ao vivo",
        description: "Acompanhe Lightning Roulette com RTP, multiplicadores, Lucky Numbers, histórico de giros, pagamentos e resultados ao vivo online."
      },
      home: {
        title: "Casino Score Live 🔥 Live Stats e Real-Time Results [2026]",
        description: "Casino Score Live é o seu hub definitivo para live stats e real-time results em 2026. Analise RTP, acompanhe hot or cold streaks e faça escolhas de aposta seguras."
      },
      megaball:{
        title: "Mega Ball estatísticas ao vivo e resultados – Jogar online + RTP e tendências",
        description: "Estatísticas e resultados ao vivo do Mega Ball com análise de RTP. Acompanhe tendências, multiplicadores e resultados em tempo real. Jogue online ou teste demo."


      },
      crazytime: {
        title: "Estatísticas do Crazy Time – Resultados ao Vivo e Rastreador de Multiplicadores",
        description: "Estatísticas ao vivo do Crazy Time atualizadas em tempo real. Acompanhe resultados da roda, rodadas de bônus e multiplicadores de até 2000x. Use os dados para construir sua estratégia vencedora. Confira agora!"
      },
      monopoly: {
        title: "Monopoly Live Estatísticas 2026 | Rastreador Oficial de Resultados",
        description: "Estatísticas oficiais do Monopoly Live para 2026. Resultados em tempo real, histórico verificado e dados da Evolution Gaming. Acompanhe resultados e jogue com segurança."
      },
      dreamcatcher: {
        title: "Dream Catcher Resultados & Estatísticas ao Vivo 2026 - Scores em Tempo Real🎰",
        description: "Dream Catcher resultados de hoje, estatísticas ao vivo e placares em tempo real. Acompanhe histórico, estatísticas vencedoras e tendências 2026. Veja cada giro."
      }
    },
    crazytimeStream: {
      title: "Transmissão ao Vivo de Crazy Time",
      subtitle: "Assista à transmissão ao vivo de Crazy Time diretamente nesta página.",
      liveLabel: "Transmissão ao Vivo",
      watchLivestream: "Assistir Transmissão ao Vivo"
    },
    crazytimeReview: {
      faqTitle: "Perguntas Frequentes",
      faq: [
        {
          q: "Crazy Time é um jogo de habilidade ou sorte?",
          a: "Crazy Time é principalmente um jogo de sorte. Embora os jogadores possam usar estatísticas e ferramentas de rastreamento para entender melhor os resultados recentes, cada rodada permanece independente."
        },
        {
          q: "Qual é o multiplicador máximo no Crazy Time?",
          a: "O potencial máximo anunciado no Crazy Time pode chegar até 20.000x durante a rodada de bônus principal do Crazy Time."
        },
        {
          q: "Posso participar de rodadas de bônus se não apostei diretamente nelas?",
          a: "Se as regras do jogo e a configuração atual permitirem através de mecânicas de bônus como entrada mínima ou efeitos Top Slot, os jogadores ainda podem entrar em certos resultados de bônus com um multiplicador reduzido."
        },
        {
          q: "As estatísticas ao vivo do Crazy Time são preditivas?",
          a: "Não. As estatísticas ao vivo ajudam a visualizar a atividade recente, mas não preveem resultados futuros. Cada giro é independente."
        }
      ],
      whatIsTitle: "O Que é Crazy Time?",
      whatIsText: "Crazy Time é um jogo de casino ao vivo desenvolvido pela Evolution Gaming, lançado em 2020. Combina um formato de roda de dinheiro com quatro rodadas de bônus interativas, oferecendo uma das experiências de casino ao vivo mais envolventes disponíveis hoje.",
    
      tableParameter: "Parâmetro",
      tableDetails: "Detalhes",
      gameName: "Nome do Jogo",
      provider: "Fornecedor",
      rtp: "RTP",
      releaseYear: "Ano de Lançamento",
      gameType: "Tipo de Jogo",
      minBet: "Aposta Mín.",
      maxBet: "Aposta Máx.",
      volatility: "Volatilidade",
      gameTypeValue: "Show de Jogo ao Vivo",
      volatilityValue: "Alta",
    
      howToPlayTitle: "Como Jogar Crazy Time",
      howToPlayText: "O jogo ao vivo Crazy Time segue um formato simples:",
      step1: "Faça sua aposta em um ou mais segmentos da roda antes do tempo acabar",
      step2: "Assista a roda girar — um apresentador ao vivo gerencia toda a sessão em tempo real",
      step3: "Ganhe se a roda parar no segmento que você escolheu",
      step4: "Ative uma rodada de bônus se o indicador parar em um segmento de bônus",
    
      wheelBreakdownTitle: "Divisão dos Segmentos da Roda",
      wheelSegment: "Segmento",
      wheelOccurrences: "Ocorrências na Roda",
      wheelMultiplier: "Multiplicador",
      upTo2000x: "Até 2000x",
      upTo10000x: "Até 10.000x",
      upTo20000x: "Até 20.000x",
    
      bonusRoundsTitle: "Rodadas de Bônus do Crazy Time",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "Uma galeria de tiro com 108 multiplicadores aleatórios escondidos atrás de símbolos. Os jogadores escolhem um para revelar seu prêmio.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "Uma moeda simples de dois lados é lançada. Cada lado exibe um multiplicador — vermelho ou azul. Rápido, limpo, emocionante.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "Uma parede física gigante de Pachinko solta um disco do topo. Ele quica através de pinos e cai em um multiplicador na parte inferior. Pode dobrar infinitamente até que um multiplicador não-duplo seja atingido.",
      crazyTimeBonusTitle: "🎪 Crazy Time (Bônus)",
      crazyTimeBonusText: "O evento principal. Uma roda virtual massiva com três indicadores gira dentro de um mundo digital. Os jogadores escolhem um indicador antes do giro. A recompensa potencial mais alta atinge 20.000x.",
    
      rulesTitle: "Regras do Jogo Crazy Time: Pontos-Chave",
      rule1: "Você pode apostar em vários segmentos simultaneamente",
      rule2: "O Top Slot acima da roda principal adiciona um multiplicador ou aciona a entrada de bônus com multiplicadores aumentados",
      rule3: "Se você não apostou em um segmento de bônus mas ele cair, você ainda entra no bônus (com multiplicador mínimo)",
      rule4: "Todos os multiplicadores de bônus são multiplicados pela sua aposta original, não apenas uma recompensa fixa",
    
      statsTitle: "Estatísticas e Resultados ao Vivo do Crazy Time",
      statsText: "Compreender as estatísticas do Crazy Time ajuda a informar suas decisões de sessão. A maioria das plataformas exibe um rastreador de estatísticas ao vivo diretamente na interface do jogo.",
      typicalStatsTitle: "Estatísticas Típicas que Você Verá:",
      stat1: "Resultados dos últimos 100 giros — distribuição de cada segmento que caiu",
      stat2: "Frequência de bônus — com que frequência cada rodada de bônus foi acionada",
      stat3: "Histórico de multiplicadores — melhores multiplicadores concedidos em rodadas recentes",
      stat4: "Segmentos quentes e frios — indicadores visuais da frequência dos segmentos",
      tip: "Dica profissional:",
      tipText: "O rastreador de estatísticas do Crazy Time não é uma ferramenta preditiva — resultados passados não influenciam giros futuros. O RNG e a roda ao vivo operam independentemente a cada rodada.",
    
      whyPlayTitle: "Por Que Jogar Crazy Time Online?",
      prosTitle: "🏆 Prós:",
      pro1: "Qualidade de produção excepcional da Evolution Gaming",
      pro2: "Quatro jogos de bônus distintos — nunca repetitivo",
      pro3: "Enorme potencial de multiplicador máximo (até 20.000x)",
      pro4: "Disponível 24 horas por dia, 7 dias por semana, em praticamente todos os principais casinos ao vivo online",
      pro5: "Rastreador de estatísticas ao vivo transparente integrado na interface",
    
      consTitle: "⚠️ Contras:",
      con1: "Alta volatilidade — longas sequências de perdas são possíveis",
      con2: "O verdadeiro jogo demo não está disponível (limitação do formato ao vivo)",
      con3: "Multiplicadores máximos são raros por design"
    },
    crazytimeStatsExtra: {
      sectionTitle: "Estatísticas Avançadas de Bônus do Crazy Time",
    
      flapperTitle: "Flapper de Bônus do Crazy Time",
      flapperText: "Compare os multiplicadores médios das três cores do flapper do Crazy Time. Esses números oferecem uma visão rápida do desempenho de curto prazo em comparação com a média de longo prazo.",
      avgAlways: "Média histórica",
      flapperFootnote: "O marcador mostra a referência do multiplicador médio de longo prazo para a cor de flapper selecionada com base nos dados históricos rastreados.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "Compare os resultados vermelho e azul do Coin Flip com os multiplicadores médios e a frequência de acerto em relação às expectativas de longo prazo.",
      avgMultiplier: "Multiplicador méd.",
      frequency: "Frequência",
      vsAvg: "vs média",
      coinFlipFootnote: "O marcador mostra a referência da frequência média de longo prazo para a cor selecionada com base nos dados rastreados.",
    
      cashHuntSymbolsTitle: "Símbolos do Cash Hunt",
      cashHuntSymbolsText: "Este detalhamento mostra o multiplicador médio e a frequência de aparição de cada símbolo-alvo do Cash Hunt.",
      times: "vezes",
    
      recentCashHuntTitle: "Cash Hunt: Multiplicadores Recentes",
      recentCashHuntText: "Acompanhe os multiplicadores recentes das rodadas de Cash Hunt. As células destacadas marcam os resultados recentes mais fortes e mais fracos.",
    
      bestBetsTitle: "Melhores Apostas Individuais",
      bestBetsText: "Esta tabela destaca os ganhos individuais mais fortes no período selecionado, incluindo jogador, pagamento, resultado e multiplicador.",
      date: "Data",
      result: "Resultado",
      player: "Jogador",
      payout: "Pagamento",
      multiplier: "Multiplicador",
      view: "Ver",
    
      latestMaxTitle: "Últimos Multiplicadores Máximos",
      latestMaxText: "Esses resultados máximos recentes de bônus mostram os maiores multiplicadores alcançados durante o período selecionado.",
      clip: "Ver Clipe",
      biggestWinsGallery: "Galeria das Maiores Vitórias",
    
      yellow: "Amarelo",
      blue: "Azul",
      green: "Verde",
      red: "Vermelho",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "Jogar 🎰"
    },
    
    gamePage: {
      statisticsTitleSuffix: "Estatísticas",
      subtitlePrefix: "Acompanhe resultados, histórico e estatísticas em tempo real de",
      playCta: "Jogar agora"
    },
    nav: { home: "Início", liveGames: "Jogos ao vivo" },
    home: {
      heroTitleBefore: "Casino ao Vivo",
      heroTitleAccent: "Estatísticas",
      heroTitleAfter: "& Resultados em Tempo Real",
      heroText: "Estatísticas de casino ao vivo, resultados de jogos e resultados em tempo real para os seus game shows de casino ao vivo favoritos. Acompanhe o RTP, sequências quentes ou frias e as maiores vitórias — 100% grátis, sem necessidade de conta.",      liveGames: "Jogos ao vivo",
      featuresTitle: "Nossos recursos",
      testimonialsTitle: "Depoimentos"
    },
    features: {
      noDownloadTitle: "Sem download",
      noDownloadText: "Veja todos os dados diretamente no navegador.",
      accurateDataTitle: "Dados precisos",
      accurateDataText: "Rastreamento automatizado de cada giro em tempo real.",
      freeTitle: "100% grátis",
      freeText: "Tracksino é totalmente gratuito."
    },
    footer: {
      games: "Jogos",
      moreGames: "Mais jogos",
      resources: "Recursos",
      faq: "FAQ",
      privacy: "Política de privacidade",
      terms: "Termos de serviço",
      contact: "Contato",
      description: "Acompanhe jogos de cassino ao vivo em tempo real."
    },
    homeFaq: {
      faqTitle: "FAQ sobre estatísticas de cassino ao vivo",
      faqIntro: "Respostas sobre live casino statistics, game results e real-time results na nossa plataforma.",
      faq: [
        {
          q: "O que são estatísticas de cassino ao vivo?",
          a: "São dados baseados em resultados reais dos jogos e em resultados em tempo real dos streams ao vivo."
        },
        {
          q: "Como vocês coletam os resultados dos jogos?",
          a: "Monitoramos streams públicos, interfaces de provedores e fontes de transmissão com sistemas automáticos."
        },
        {
          q: "Com que frequência os resultados em tempo real são atualizados?",
          a: "Os resultados em tempo real são atualizados continuamente e verificados antes de serem exibidos."
        },
        {
          q: "As estatísticas conseguem prever o próximo resultado?",
          a: "Não. As estatísticas ajudam a entender os resultados e tendências recentes, mas não preveem o futuro."
        }
      ]
    },
    common: {
      player: "Jogador",
      verifiedUser: "Usuário verificado",
      liveNow: "Ao vivo",
      hour: "hora",
      hours: "horas",
      spins: "giros"
    },
    tabs: {
      temperature: "Temperatura",
      history: "Histórico",
      stats: "Estatísticas",
      bigwins: "Maiores vitórias",
      review: "Análise",
      stream: "Stream",
    }
  },

  ar: {
    lightningrouletteReview: {
      title: "استعراض Lightning Roulette وRTP والإحصائيات المباشرة",
      intro:
        "Lightning Roulette هي نسخة من الروليت مباشرة مع موزع مباشر بناءً على العجلة الأوروبية. تتبع اللعبة قواعد الروليت القياسية، لكن يمكن لكل جولة أن تعين مضاعفات عشوائية للأرقام المحددة كأرقام الحظ، مما يخلق نسخة أعلى تقلباً من الروليت المباشر التقليدي.",
    
      quickOverviewTitle: "نظرة عامة سريعة على اللعبة",
      tableParameter: "المعامل",
      tableDetails: "التفاصيل",
    
      specProvider: "المزود",
      specProviderValue: "Evolution Gaming",
      specGameName: "اسم اللعبة",
      specGameNameValue: "Lightning Roulette",
      specReleaseYear: "سنة الإصدار",
      specReleaseYearValue: "2018",
      specGameType: "نوع اللعبة",
      specGameTypeValue: "روليت مع موزع مباشر",
      specWheel: "صيغة العجلة",
      specWheelValue: "الروليت الأوروبية (صفر واحد)",
      specRtp: "RTP",
      specRtpValue: "97.30% على الرهانات القياسية؛ 97.10% على الرهانات المباشرة",
      specMinBet: "الحد الأدنى للرهان",
      specMinBetValue: "$0.20",
      specMaxBet: "الحد الأقصى للرهان",
      specMaxBetValue: "$10,000",
      specMaxWin: "المضاعف الأقصى",
      specMaxWinValue: "500x",
      specLuckyNumbers: "أرقام الحظ",
      specLuckyNumbersValue: "1 إلى 5 في كل جولة",
      specVolatility: "التقلب",
      specVolatilityValue: "متوسط إلى عالي",
      specMobile: "اللعب على الهاتف المحمول",
      specMobileValue: "مدعوم",
    
      aboutTitle: "ما هي Lightning Roulette؟",
      aboutText1:
        "Lightning Roulette هي لعبة روليت مباشرة تحافظ على عجلة أوروبية بصفر واحد وتخطيط الرهان القياسي، بينما تضيف أحداث مضاعفات عشوائية قبل كل دوران. يتم وصف هذا الصيغة غالباً بأنه روليت البرق المباشرة أو روليت البرق عبر الإنترنت لأن اللعبة تجمع بين موزع استوديو حقيقي مع آلية مضاعفة يتم إنشاؤها قبل هبوط الكرة.",
      aboutText2:
        "من الناحية العملية، الفرق عن الروليت الكلاسيكية بسيط: يصبح من رقم واحد إلى خمسة أرقام أرقام حظ في كل جولة، وإذا هبطت رهان مباشر على أحدها، تستخدم العائد المضاعف المعين بدلاً من العائد المباشر العادي. هذه هي الفكرة الأساسية وراء معظم صفحات استعراض روليت البرق وتتبعات الإحصائيات.",
    
      howToPlayTitle: "كيفية لعب Lightning Roulette",
      howToPlayText1:
        "كيفية لعب Lightning Roulette بسيط لأي شخص مألوف مع الروليت. يضع اللاعبون رهانات خلال مرحلة الرهان، ثم تكشف اللعبة عن أرقام الحظ ومضاعفاتها قبل بدء الدوران المباشر.",
      howToPlayText2:
        "قواعد روليت البرق تعتمد على الروليت الأوروبية، لذا فإن الرهانات الخارجية والعشرات والأعمدة والرهانات الداخلية تعمل كما هو متوقع. تؤثر الآلية الإضافية فقط على الرهانات المباشرة التي تهبط على أرقام الحظ المحددة.",
      howToPlayBullets: [
        "اختر قيم الرقائق وضع الرهانات على تخطيط الروليت.",
        "انتظر اللعبة لتعيين 1 إلى 5 أرقام حظ مع مضاعفات عشوائية.",
        "شاهد الموزع يدير العجلة ويطلق الكرة.",
        "إذا كان رهانك المباشر يصل إلى رقم حظ، فإن الجولة تستخدم عائد مضاعف البرق.",
        "يتم تسوية جميع الرهانات غير المضاعفة وفقاً لقواعد الروليت الأوروبية القياسية."
      ],
    
      payoutTitle: "عوائد Lightning Roulette",
      payoutIntro:
        "عوائد روليت البرق تتبع الروليت القياسية لمعظم الرهانات، بينما يظهر الفرق الرئيسي على الأرقام المباشرة. عندما يفوز رقم حظ محدد، يحل المضاعف المعين محل العائد المباشر العادي ويمكن أن يصل إلى 500x.",
    
      payoutColBet: "نوع الرهان",
      payoutColPayout: "العائد",
      payoutColNote: "كيف يعمل",
    
      payoutBetStraightLucky: "مباشر (رقم الحظ)",
      payoutValStraightLucky: "50x–500x",
      payoutNoteStraightLucky:
        "يطبق عندما يهبط رهان مباشر على رقم حظ مع مضاعف معين.",
    
      payoutBetStraight: "مباشر (قياسي)",
      payoutValStraight: "29:1",
      payoutNoteStraight:
        "فوز مباشر قياسي بدون مضاعف البرق.",
    
      payoutBetSplit: "انقسام",
      payoutValSplit: "17:1",
      payoutNoteSplit: "رهان على رقمين متجاورين.",
    
      payoutBetStreet: "شارع",
      payoutValStreet: "11:1",
      payoutNoteStreet: "رهان على 3 أرقام متتالية.",
    
      payoutBetCorner: "الزاوية",
      payoutValCorner: "8:1",
      payoutNoteCorner: "رهان على 4 أرقام.",
    
      payoutBetDozen: "عشرة / عمود",
      payoutValDozen: "2:1",
      payoutNoteDozen: "يغطي 12 رقماً.",
    
      payoutBetEven: "أحمر/أسود، فردي/زوجي، أعلى/أسفل",
      payoutValEven: "1:1",
      payoutNoteEven: "الرهانات الخارجية القياسية.",
    
      rtpTitle: "RTP والتقلب في Lightning Roulette",
      rtpText1:
        "RTP روليت البرق يعتمد على نوع الرهان. الرهانات القياسية مثل أحمر/أسود أو العشرات تحافظ على RTP بحوالي 97.30%، بينما تتراوح الرهانات المباشرة حول 97.10% لأن اللعبة تعيد تخصيص جزء من هيكل العائد لتمويل ميزة المضاعفة.",
      rtpText2:
        "من حيث الفرق، اللعبة أكثر تقلباً من الروليت الكلاسيكية عندما يكون التركيز على الأرقام الداخلية. مضاعفات روليت البرق تخلق لحظات عائد أقل تكراراً لكن أكبر، ولهذا السبب يصف العديد من اللاعبين اللعبة بأنها متوسطة إلى عالية التقلب بدلاً من ملف روليت قياسي.",
    
      strategyTitle: "ملاحظات استراتيجية Lightning Roulette",
      strategyText1:
        "إستراتيجية روليت البرق لا تغير ميزة الموزع، لكنها يمكن أن تغير ملف المخاطر للجلسة. اللاعبون الذين يفضلون تقلباً أقل عادة يبقون أقرب إلى الرهانات الخارجية، بينما أولئك الذين يريدون التعرض للمضاعفات يركزون أكثر على التغطية المباشرة.",
      strategyText2:
        "من منظور إحصائي، يتم التعامل مع اللعبة بشكل أفضل كروليت أوروبية مع طبقة مضاعفة إضافية. هذا يجعلها مفيدة لتتبع تكرار أرقام الحظ، توزيع المضاعفات وتذبذبات العائد على عينة أكبر بدلاً من الحكم على اللعبة من سلسلة قصيرة.",
    
      trackerTitle: "ما يمكنك تتبعه",
      trackerIntro:
        "هذا القسم من الموقع مبني للاعبين الذين يريدون مراجعة روليت البرق عبر الإنترنت من خلال النتائج الأخيرة والمضاعفات والمقاييس الملخصة بدلاً من الاعتماد على الانطباعات قصيرة الأجل.",
    
      trackLuckyNumbers: "سجل أرقام الحظ",
      trackLuckyNumbersText:
        "تتبع الأرقام التي تلقت مضاعفات وعدد مرات ظهورها في الجولات الأخيرة.",
    
      trackMultipliers: "توزيع المضاعفات",
      trackMultipliersText:
        "انظر عدد مرات ظهور المضاعفات 50x و 100x و 150x و 200x و 300x و 400x و 500x.",
    
      trackSpinResults: "نتائج الدورات",
      trackSpinResultsText:
        "راجع النتائج الأخيرة، بما في ذلك الرقم الفائز وأرقام البرق والمضاعفات المصيبة.",
    
      trackRtp: "لقطة RTP",
      trackRtpText:
        "قارن النتائج المرصودة مع ملف العائد المتوقع للعبة.",
    
      trackPatterns: "أنماط النتائج",
      trackPatternsText:
        "استخدم السجل الأخير وبيانات التوزيع لمتابعة السلاسل قصيرة الأجل وتكرار الأرقام.",
    
      comparisonTitle: "Lightning Roulette في لمحة",
      compColArea: "المنطقة",
      compColValue: "Lightning Roulette",
      compColMeaning: "لماذا أهمية",
    
      compAreaBase: "الصيغة الأساسية",
      compValueBase: "روليت أوروبية مع موزع مباشر",
      compWhyBase:
        "تبقى القواعد الأساسية مألوفة للاعبين الذين يعرفون بالفعل الروليت القياسية.",
    
      compAreaMultipliers: "مضاعفات البرق",
      compValueMultipliers: "1–5 أرقام حظ، 50x إلى 500x",
      compWhyMultipliers:
        "يضيف إمكانية أعلى للرهانات المباشرة دون تغيير عوائد الرهانات الخارجية.",
    
      compAreaRtp: "ملف RTP",
      compValueRtp: "97.30% قياسي / 97.10% مباشر",
      compWhyRtp:
        "مفيد لفهم كيف يؤثر تمويل المضاعفة على أنواع الرهانات المختلفة.",
    
      compAreaVariance: "التقلب",
      compValueVariance: "أعلى من الروليت الكلاسيكية على الرهانات الداخلية",
      compWhyVariance:
        "عوائد القائمة على المضاعفة تخلق تقلبات أوسع قصيرة الأجل.",
    
      compAreaUse: "أفضل حالة استخدام",
      compValueUse: "اللاعبون الذين يريدون روليت مع تقلب إضافي",
      compWhyUse:
        "يحافظ على هيكل الروليت القياسي بينما يضيف عوائد معززة عرضية.",
    
      faqTitle: "الأسئلة المتكررة",
      faq: [
        {
          q: "ما هي Lightning Roulette؟",
          a: "Lightning Roulette هي نسخة موزع مباشر من الروليت الأوروبية مع مضاعفات عشوائية على أرقام الحظ المحددة."
        },
        {
          q: "كيف تعمل مضاعفات Lightning Roulette؟",
          a: "قبل كل دوران، تختار اللعبة 1 إلى 5 أرقام حظ وتعين مضاعفات من 50x إلى 500x. إذا هبط رهان مباشر على أحد هذه الأرقام، يتم تطبيق عائد المضاعفة."
        },
        {
          q: "ما هو RTP Lightning Roulette؟",
          a: "RTP النموذجي حول 97.30% للرهانات القياسية وحوالي 97.10% للرهانات المباشرة."
        },
        {
          q: "هل عوائد Lightning Roulette مختلفة عن الروليت القياسية؟",
          a: "تستخدم معظم أنواع الرهانات عوائد الروليت الأوروبية القياسية. الفرق الرئيسي هو عائد قائم على المضاعفة على الأرقام المباشرة المحددة."
        },
        {
          q: "هل Lightning Roulette أكثر تقلباً من الروليت الكلاسيكية؟",
          a: "نعم. يخلق نظام المضاعفة تقلباً أوسع قصير الأجل، خاصة للاعبين الذين يركزون على الرهانات الداخلية."
        }
      ],
    
      conclusionTitle: "الانطباع العام",
      conclusionText:
        "كمراجعة محايدة لروليت البرق، يمكن وصف اللعبة بأنها روليت أوروبية قياسية مع طبقة مضاعفة مضافة تزيد من التقلب دون تغيير الصيغة الأساسية. بالنسبة للاعبين المهتمين بإحصائيات روليت البرق المباشرة، فهي لعبة مفيدة للتتبع لأن تكرار المضاعفات واختيار أرقام الحظ وأنماط العائد يمكن قياسها جميعاً بمرور الوقت."
    },
    lightningrouletteHistory: {
      panelTitle:  "سجل الدورات",
      subtitle:    "سجل الدورات الأخيرة مع نتائج الأرقام المحظوظة.",
      occurredAt:  "حدث في",
      spinResult:  "نتيجة الدوران",
      multiplier:  "المضاعف",
      firstLucky:  "الأول المحظوظ",
      secondLucky: "الثاني المحظوظ",
      thirdLucky:  "الثالث المحظوظ",
      fourthLucky: "الرابع المحظوظ",
      fifthLucky:  "الخامس المحظوظ",
    },
    megaballReview: {
      title: "متتبع Mega Ball، معدل العائد RTP وتحليل اللعبة",
      intro: "تابع إحصائيات ونتائج ومعدل العائد RTP للعبة Mega Ball في الوقت الفعلي باستخدام أدوات التتبع المباشر. اطّلع على سجل الكرات، جولات المضاعفات، عدد الفائزين واتجاهات المدفوعات في مكان واحد.",
  
      quickOverviewTitle: "نظرة سريعة على اللعبة",
      tableParameter: "المعيار",
      tableDetails: "التفاصيل",
      tableFeature: "الميزة",
      tableDescription: "الوصف",
  
      specProvider: "المزوّد",
      specProviderValue: "Evolution Gaming",
      specGameName: "اسم اللعبة",
      specGameNameValue: "Mega Ball",
      specRtp: "معدل العائد (RTP)",
      specRtpValue: "95.30%",
      specReleaseYear: "سنة الإصدار",
      specReleaseYearValue: "2023",
      specGameType: "نوع اللعبة",
      specGameTypeValue: "عرض ألعاب مباشر بأسلوب البينغو",
      specMinBet: "نطاق الرهان",
      specMinBetValue: "يختلف حسب الكازينو",
      specMaxWin: "أقصى ربح",
      specMaxWinValue: "حتى 1,000,000x",
      specBalls: "الكرات المسحوبة",
      specBallsValue: "20 كرة + Mega Ball + إمكانية كرة Mega Ball ثانية",
  
      trackerTitle: "ما الذي يمكنك تتبعه",
      trackerIntro: "في Tracksino، تركز أدوات تتبع Mega Ball على أهم المؤشرات المباشرة لتحليل كل جولة.",
      trackBallHistory: "سجل الكرات",
      trackBallHistoryText: "اطّلع على جميع الكرات المسحوبة بالترتيب الدقيق.",
      trackMultiplier: "مضاعف Mega Ball",
      trackMultiplierText: "تابع المضاعفات من 5x إلى 100x.",
      trackWinners: "عدد الفائزين",
      trackWinnersText: "اكتشف عدد البطاقات أو اللاعبين الذين فازوا.",
      trackPayouts: "قيم المدفوعات",
      trackPayoutsText: "راقب إجمالي المدفوعات وقارن بين الجولات النشطة.",
      trackLive: "مشاهدة Mega Ball مباشرة",
      trackLiveText: "افتح اللعبة المباشرة وقارن الحدث الجاري مع بيانات المتتبع.",
  
      aboutTitle: "ما هي لعبة Mega Ball؟",
      aboutText1: "Mega Ball هي لعبة عرض مباشر سريعة الإيقاع تجمع بين آليات بطاقات بأسلوب البينغو وسحوبات كرات شبيهة باليانصيب. قد تظهر جولة أو جولتان إضافيتان بعد السحب الرئيسي، مما يضيف مزيدًا من الإثارة عبر المضاعفات.",
      aboutText2: "الهدف هو إكمال أكبر عدد ممكن من الخطوط على بطاقاتك. كلما زاد عدد الخطوط المكتملة، زادت الأرباح، ويمكن لجولات المضاعفات أن تعزز المدفوعات بشكل كبير.",
  
      howToPlayTitle: "كيفية لعب Mega Ball",
      howToPlayText1: "في Mega Ball، يتم سحب 20 كرة واحدة تلو الأخرى من آلة تلقائية. يتم وضع علامة تلقائيًا على الأرقام المطابقة على بطاقات اللاعبين، وتُعرض البطاقات الأقرب للفوز في أعلى الواجهة.",
      howToPlayText2: "بعد الكرة الأخيرة، يتم توليد مضاعف Mega Ball يتراوح بين 5x و100x. إذا أكملت Mega Ball خطًا فائزًا، يمكن مضاعفة العائد. وفي حالات نادرة، قد يتم سحب كرة Mega Ball ثانية، مما يمنح فرصة إضافية لتحقيق ربح معزز.",
      howToPlayBullets: [
        "يتم سحب 20 كرة بسرعة متتالية.",
        "تُعلَّم الأرقام المطابقة تلقائيًا على جميع البطاقات النشطة.",
        "تظهر البطاقات الأقرب لإكمال الخطوط في أعلى الواجهة.",
        "يتم توليد مضاعف Mega Ball بعد السحب الرئيسي.",
        "قد توفر كرة Mega Ball ثانية نادرة فرصة إضافية لربح مضاعف."
      ],
  
      payoutTitle: "مدفوعات Mega Ball",
      payoutIntro: "تعتمد المدفوعات في Mega Ball على عدد الخطوط المكتملة في بطاقة واحدة. تُحتسب الخطوط الأفقية والعمودية والقطرية ضمن الجائزة النهائية.",
      payoutColLines: "الخطوط المكتملة",
      payoutColPrize: "المدفوعات",
      payoutColNote: "كيفية العمل",
      payout1Line: "خط واحد أفقي أو عمودي أو قطري.",
      payout2Lines: "خطّان مكتملان في بطاقة واحدة.",
      payout3Lines: "3 خطوط مكتملة في بطاقة واحدة.",
      payout4Lines: "4 خطوط مكتملة في بطاقة واحدة.",
      payout5Lines: "5 خطوط مكتملة في بطاقة واحدة.",
      payout6Lines: "6 خطوط مكتملة في بطاقة واحدة.",
  
      comparisonTitle: "Mega Ball بإيجاز",
      compColArea: "المجال",
      compColMegaBall: "Mega Ball",
      compColMeaning: "أهميته",
      compAreaBase: "الشكل الأساسي",
      compMegaBallBase: "عرض ألعاب مباشر بأسلوب البينغو",
      compMeaningBase: "يجمع بين إكمال البطاقات والسحب المباشر.",
      compAreaBonus: "الجولات الإضافية",
      compMegaBallBonus: "Mega Ball وكرة ثانية نادرة",
      compMeaningBonus: "تضيف إمكانية مضاعفة بعد السحب الرئيسي.",
      compAreaTracking: "قيمة التتبع",
      compMegaBallTracking: "مرتفعة",
      compMeaningTracking: "يمكن تحليل ترتيب الكرات والفائزين والمدفوعات بسهولة.",
      compAreaMaxWin: "أقصى ربح محتمل",
      compMegaBallMaxWin: "حتى 1,000,000x",
      compMeaningMaxWin: "تعتمد أعلى الأرباح على عدد الخطوط والمضاعفات.",
  
      faqTitle: "الأسئلة الشائعة",
      faq: [
        {
          q: "هل يمكنني متابعة نتائج Mega Ball مباشرة؟",
          a: "نعم، يتيح متتبع Mega Ball عرض سجل الكرات، المدفوعات الأخيرة، عدد الفائزين ونتائج المضاعفات لكل جولة."
        },
        {
          q: "كيف يعمل مضاعف Mega Ball؟",
          a: "بعد السحب الرئيسي، يتم توليد مضاعف بين 5x و100x. إذا أكملت Mega Ball خطًا فائزًا، يتم مضاعفة العائد وفقًا لذلك."
        },
        {
          q: "ما هي كرة Mega Ball الثانية؟",
          a: "هي سحب إضافي نادر يمنح اللاعبين فرصة أخرى لإكمال خط فائز مع إمكانية مضاعفة الربح."
        },
        {
          q: "هل Mega Ball أقرب إلى البينغو أم عرض ألعاب؟",
          a: "تجمع بين الاثنين. تعتمد الآلية على خطوط البينغو، بينما يشبه العرض أسلوب برامج الألعاب المباشرة."
        },
        {
          q: "هل يمكن لبيانات المتتبع التنبؤ بالنتائج؟",
          a: "لا. تُستخدم البيانات لتحليل الجولات السابقة والإحصاءات المباشرة، لكن كل سحب مستقل."
        }
      ]
    },
    dreamcatcherReview: {
    title: "Dream Catcher Live: إحصائيات مباشرة ونتائج ودليل كامل للعبة",
    intro:
    "تُعد لعبة Dream Catcher من أشهر ألعاب عجلة المال من Evolution Gaming، وقد غيّرت تجربة الكازينوهات المباشرة منذ إطلاقها في عام 2017. تجمع هذه اللعبة بين أجواء البرامج التلفزيونية والإثارة الحقيقية للمراهنات، مع بث مباشر بجودة عالية من استوديوهات احترافية في لاتفيا.\n\nعلى عكس ألعاب الطاولة التقليدية، لا تتطلب Dream Catcher أي خبرة مسبقة. كل ما عليك هو اختيار رقم، مشاهدة العجلة وهي تدور، والحصول على أرباحك إذا توقفت على اختيارك. تضيف قطاعات المضاعفات فرصًا لتحقيق مدفوعات ضخمة تصل إلى 20,000 ضعف رهانك.",
    playbtn: "العب الآن",
    heroAlt: "شعار لعبة Dream Catcher المباشرة لعجلة المال",
    
    quickOverviewTitle: "نظرة سريعة على اللعبة",
    specFeature: "المواصفة",
    specDetails: "التفاصيل",
    specProvider: "مزود اللعبة",
    specProviderValue: "Evolution Gaming",
    specYear: "سنة الإصدار",
    specYearValue: "2017",
    specType: "نوع اللعبة",
    specTypeValue: "عجلة مال مباشرة",
    specRtp: "RTP",
    specRtpValue: "96.58% (الأمثل)",
    specBetRange: "نطاق الرهان",
    specBetRangeValue: "€0.10 – €1,000",
    specMaxWin: "أقصى ربح",
    specMaxWinValue: "20,000x من الرهان",
    specSegments: "إجمالي القطاعات",
    specSegmentsValue: "54",
    specLocation: "موقع البث",
    specLocationValue: "ريغا، لاتفيا",
    
    howWorksTitle: "كيف تعمل لعبة Dream Catcher",
    howWorksText:
    "تحتوي اللعبة على عجلة ضخمة مثبتة عموديًا بها 54 قطاعًا ملونًا. يقوم مقدم مباشر بتدوير العجلة والتفاعل مع اللاعبين عبر الدردشة، مما يخلق أجواءً أصيلة تشبه البرامج التلفزيونية.",
    
    wheelDistributionTitle: "توزيع قطاعات العجلة",
    wheelColNumber: "الرقم",
    wheelColSegments: "القطاعات",
    wheelColPayout: "الدفع",
    wheelColProbability: "الاحتمال",
    wheelDistributionNote:
    "تدفع القطاعات المرقّمة بالضبط ما تعرضه — إذا توقفت العجلة على 5 فستحصل على 5:1 من رهانك. بهذه البساطة.",
    multiplier2xLabel: "مضاعف 2x",
    multiplier7xLabel: "مضاعف 7x",
    
    multiplierTitle: "آلية المضاعفات",
    multiplierIntro:
    "قطاعا المضاعف (الفضي 2x والذهبي 7x) هما ما يُضفيان الإثارة الحقيقية. لا يمكنك المراهنة عليهما مباشرةً، ولكن حين تتوقف العجلة على أحدهما:",
    multiplierBullets: [
    "تبقى جميع الرهانات الحالية نشطة",
    "تدور العجلة مرة أخرى",
    "يُضاعَف الرقم التالي الذي تظهره العجلة"
    ],
    multiplierNote:
    "يمكن أن تتسلسل المضاعفات. إذا توقفت العجلة على 7x ثم 7x مرة أخرى ثم أخيرًا على 40 — فهذا يعني ربحًا بمقدار 1,960x. يتضمن الحد النظري الأقصى عدة مضاعفات متتالية قبل الوصول إلى 40، مما يرفع الأرباح إلى 20,000x.",
    
    statsTrackingTitle: "إحصائيات Dream Catcher المباشرة ومتابعة النتائج",
    statsTrackingIntro:
    "تساعدك متابعة إحصائيات Dream Catcher على فهم سلوك اللعبة بمرور الوقت. وعلى الرغم من أن كل لفة مستقلة، فإن رصد نتائج Dream Catcher يكشف ما إذا كانت العجلة تسير قريبًا من الاحتمالات المتوقعة.",
    trackingBullets: [
    "حالة المضاعف الحالية (نشط أم لا)",
    "عدد اللفات منذ آخر مضاعف",
    "تكرار الأرقام عبر فترات زمنية مختلفة",
    "القطاعات الساخنة والباردة بناءً على نتائج Dream Catcher الفورية الأخيرة"
    ],
    statsTrackingNote:
    "يستخدم كثير من اللاعبين لوحات إحصائيات Dream Catcher المباشرة لرصد الأنماط، غير أن النتائج السابقة لا تؤثر على اللفات المستقبلية.",
    
    strategiesTitle: "استراتيجيات مراهنة تستحق الاهتمام",
    strategies: [
    {
    title: "توزيع رهاناتك",
    text:
    "تغطية قطاعات متعددة يرفع معدل الفوز. المراهنة على 1 و2 و5 في آنٍ واحد تعني الفوز في نحو 83% من اللفات (باستثناء قطاعات المضاعفات)."
    },
    {
    title: "استهداف الأرقام ذات الدفع العالي",
    text:
    "التركيز على 10 أو 20 أو 40 يعني فوزًا أقل تكرارًا لكن أرباحًا أكبر عند حدوثه. فوز واحد على الرقم 40 يعوّض جولات الخسارة الكثيرة."
    },
    {
    title: "رهانات صغيرة ولفات أكثر",
    text:
    "الحد الأدنى €0.10 يتيح لك مد رأس مال صغير عبر مئات اللفات. كلما زادت اللفات، زادت فرصك في اصطياد تسلسلات المضاعفات."
    }
    ],
    
    rtpBreakdownTitle: "تفصيل RTP حسب نوع الرهان",
    rtpBreakdownIntro:
    "ليست جميع الرهانات متكافئة من حيث العائد النظري.",
    rtpColBet: "الرهان",
    rtpColRtp: "RTP",
    rtpBreakdownNote:
    "الأرقام الصغيرة توفر قيمة أفضل على المدى البعيد، بينما يحمل الرقم 40 تذبذبًا أعلى مع انخفاض في نسبة RTP.",
    
    whyLoveTitle: "لماذا يعشق اللاعبون Dream Catcher",
    whyLoveBullets: [
    "سهولة الفهم الفورية – لا قواعد معقدة ولا استراتيجيات يلزم تعلّمها",
    "أجواء البرنامج التلفزيوني – مقدمون محترفون يبقون الترفيه متواصلًا",
    "إثارة المضاعفات – كل لفة قد تطلق سلسلة من الأرباح المتضاعفة",
    "رهانات في متناول الجميع – من €0.10 حتى €1,000 لكل لفة",
    "مُحسَّنة للجوال – تجربة كاملة على أي جهاز"
    ],
    
    faqTitle: "الأسئلة الشائعة",
    faq: [
    {
    q: "هل يمكنني رؤية إحصائيات Dream Catcher المباشرة أثناء اللعب؟",
    a: "نعم — تعرض واجهة اللعبة نتائج Dream Catcher الأخيرة والأرقام الفائزة. كما تتيح أدوات تتبع الإحصائيات من أطراف ثالثة تحليلًا تاريخيًا أعمق لإحصائيات Dream Catcher عبر آلاف اللفات."
    },
    {
    q: "ماذا يحدث إذا توقفت العجلة على المضاعفات مرات متكررة؟",
    a: "تتراكم المضاعفات. ضربتا 7x متتاليتان تليهما رقم تعني أن ذلك الرقم يدفع 49x معدله الطبيعي. التسلسلات نادرة لكنها تُنتج أضخم أرباح اللعبة."
    },
    {
    q: "هل يمكن التنبؤ بنتائج Dream Catcher الفورية؟",
    a: "لا. تستخدم كل لفة آلية عشوائية معتمدة. متابعة إحصائيات Dream Catcher المباشرة قد تساعدك في إدارة رهاناتك، لكنها لا تستطيع التنبؤ بالنتائج."
    },
    {
    q: "لماذا يمتلك الرهان على 40 نسبة RTP أقل من الأرقام الأخرى؟",
    a: "بوجود قطاع واحد فقط من أصل 54، يظهر الرقم 40 بنسبة 1.9% تقريبًا من الوقت. لا يعوّض الدفع بنسبة 40:1 هذه الندرة بالكامل، مما ينتج عنه هامش ربح أعلى للمنزل."
    },
    {
    q: "كيف تُقارَن نتائج Dream Catcher بنسب RTP في السلوت؟",
    a: "تقع نسبة RTP الأمثل البالغة 96.58% لـ Dream Catcher بشكل مريح ضمن النطاق المعياري للسلوت الإلكترونية (94-97% عادةً)، مما يجعلها تنافسية لصيغة لعبة مباشرة."
    }
    ]
    },
    dreamcatcherStatsExtra: {
    trackedMetaPrefix: "آخر 30 دقيقة",
    bestWinsTitle: "أفضل الأرباح لكل لفة",
    bestWinsText: "نظرة سريعة على أعلى المدفوعات من أحدث اللفات التي تم تتبعها.",
    wheelStatsTitle: "إحصائيات مضاعفات العجلة",
    wheelStatsText: "اكتشف مدى تكرار ظهور قطاعات المضاعف خلال نفس الفترة المرصودة.",
    matchedTitle: "تطابق مضاعفات العجلة",
    matchedText: "قارن بين ظهور المضاعفات واللفات العادية في العينة الحالية.",
    finished: "مكتمل",
    outcome: "النتيجة",
    player: "اللاعب",
    wonAmount: "المبلغ المربوح",
    multiplier: "المضاعف",
    match: "مطابقة",
    noMatch: "بدون مطابقة"
    },
    gamePanels: {
    temperatureSubtitle:
    "تعرض حرارة القطاعات النتائج الساخنة والباردة في الوقت الفعلي اعتمادًا على أحدث اللفات مقارنةً بالاحتمال المتوقع.",
    temperatureSpinsSince: "منذ {n} لفات",
    
    historySubtitle:
    "استعرض أحدث سجل اللفات مع النتائج الفورية والمضاعفات وعدد الفائزين وإجمالي المدفوعات.",
    
    rtpBasedOn: "استنادًا إلى آخر 1,000 لفة",
    
    summaryTotalSpinsToday: "إجمالي اللفات اليوم",
    summaryBonusRounds: "جولات البونص",
    summaryBiggestMultiplier: "أكبر مضاعف",
    summaryAvgPayout: "متوسط الدفع",
    
    occurredAt: "وقت الحدث",
    slotResult: "نتيجة السلوت",
    spinResult: "نتيجة اللفة",
    specialResult: "نتيجة خاصة",
    multiplier: "المضاعف",
    totalWinners: "إجمالي الفائزين",
    totalPayout: "إجمالي الدفع",
    
    watch: "مشاهدة"
    },
    homeSeo: {
    sectionTitle: "حول منصتنا لإحصائيات الكازينو المباشر",
    whoTitle: "من نحن",
    whoText1: "نحن منصة مستقلة لتحليلات ألعاب الكازينو المباشر تقوم بجمع البيانات ومعالجتها وعرض الإحصائيات في الوقت الفعلي.",
    whoText2: "هدفنا تزويد اللاعبين ببيانات شفافة مبنية على نتائج الألعاب الفعلية، لمساعدتهم على فهم إحصائيات الكازينو المباشر والنتائج الأخيرة بصورة أفضل.",
    howTitle: "كيف نجمع المعلومات",
    howText1: "نستخدم أنظمة آلية لجمع البيانات تتابع نتائج ألعاب الكازينو المباشر في الوقت الفعلي.",
    howText2: "تأتي البيانات من مصادر بث مفتوحة وتدفقات الألعاب المباشرة والواجهات العامة لمزودي الألعاب، مما يتيح لنا متابعة نتائج الألعاب والنتائج الفورية بشكل مستمر.",
    howText3: "تمر جميع النتائج بمرحلة معالجة إضافية وتحقق خوارزمي لتقليل التأخير والحفاظ على دقة إحصائية عالية. تعتمد المنصة على تقنيات حديثة لمعالجة البيانات، تشمل مزامنة التدفقات والتحليل الآلي والنماذج التحليلية."
    },
    monopolyReview: {
    title: "Monopoly Live مراجعة: تجربة برنامج ألعاب الكازينو المباشر المثالية",
    intro: "مرحبًا بك في الدليل الشامل للعبة Monopoly Live، إحدى أشهر ألعاب الموزع المباشر على الإطلاق. طوّرتها شركة Evolution Gaming الأسطورية، وتجمع بين عجلة أموال ضخمة وجولة بونص ثلاثية الأبعاد مذهلة بتقنية الواقع المعزز يظهر فيها Mr. Monopoly بشخصه. سواء أردت لعب Monopoly Live أونلاين أو الاطلاع على أحدث إحصائيات اللعبة، ستجد هنا كل ما تحتاجه.",
    playbtn: "العب",
    heroAlt: "عجلة Monopoly Live مع مقدمة مباشرة واستوديو برنامج الألعاب",
    tableFeature: "الميزة",
    tableDetails: "التفاصيل",
    gameNameLabel: "اسم اللعبة",
    providerLabel: "المزوّد",
    gameTypeLabel: "نوع اللعبة",
    rtpLabel: "نسبة RTP",
    maxWinLabel: "أقصى ربح",
    
    gameTypeValue: "برنامج ألعاب كازينو مباشر",
    rtpValue: "حتى 96.23%",
    maxWinValue: "$500,000 (أو ما يعادله بالمضاعف)",
    
    sectionsTitle: "أبرز مميزات Monopoly Live",
    
    wheelTitle: "عجلة المال (اللعبة الأساسية)",
    wheelText: "قلب تجربة كازينو Monopoly Live المباشر. يدير مقدّم مباشر حقيقي عجلة عمودية ضخمة تضم 54 قطاعًا. يراهن اللاعبون على الأرقام (1، 2، 5، 10) للفوز بمدفوعات نقدية فورية بناءً على الرقم الذي تتوقف عنده العجلة.",
    
    chanceTitle: "قطاع 'Chance'",
    chanceText: "عند توقف العجلة على قطاع 'Chance' يحصل اللاعبون إما على جائزة نقدية فورية وإما على بونص مضاعف مثير. إذا ظهر مضاعف، يعيد المقدم تدوير العجلة وتُضاعَف فوزك التالي.",
    
    bonus3dTitle: "جولة البونص ثلاثية الأبعاد",
    bonus3dText: "الحدث الأبرز في لعبة Monopoly Live. إذا راهنت على '2 ROLLS' أو '4 ROLLS' وتوقفت العجلة هناك، ينطلق Mr. Monopoly إلى عالم لوحة اللعبة ثلاثي الأبعاد ليجمع الجوائز والمضاعفات ويتفادى الضرائب.",
    
    howToPlayTitle: "كيف تلعب Monopoly Live",
    howToPlayIntro: "البدء في كازينو أونلاين مع Monopoly Live أمر في غاية البساطة. اتبع هذه الخطوات:",
    step1: "ضع رهاناتك: لديك نافذة رهان قصيرة لوضع رقائقك على 1، 2، 5، 10، '2 Rolls' أو '4 Rolls'.",
    step2: "الدوران: يدوّر الموزع المباشر العجلة. يمكنك مشاهدة Monopoly Live بينما تتباطأ العجلة.",
    step3: "الدفع: إذا توقفت العجلة على رقمك فزت. وإذا توقفت على لعبة بونص وكنت قد راهنت عليها، دخلت الجولة ثلاثية الأبعاد.",
    
    statsTitle: "إحصائيات Monopoly Live ونتائجها وأدوات التتبع",
    statsText1: "بالنسبة لكثير من عشاق iGaming الجادين، متابعة اللعبة لا تقل أهمية عن اللعب نفسه. ولأنها لعبة احتمالات، يلجأ كثير من اللاعبين إلى أداة تتبع Monopoly Live لمواكبة اتجاهات اللعبة.",
    statsText2: "من خلال تحليل إحصائيات Monopoly Live يمكنك الاطلاع على تكرار جولات البونص ومتوسط المضاعفات والأرقام الباردة والساخنة. يتيح لك سجل Monopoly Live رؤية نتائج Monopoly Live اليوم. ورغم أن النتائج السابقة لا تضمن نتائج مستقبلية، إلا أن متابعة لوحة نتائج Monopoly Live تمنح اللاعبين فكرة عن سلوك العجلة خلال جلستهم. تذكر دائمًا اللعب بمسؤولية.",
    statsNote: "ملاحظة: إذا أعجبك هذا النمط، قد تودّ تجربة Monopoly Big Baller live أيضًا، وهو إصدار بأسلوب البينغو يتضمن نتائج مثيرة لـ Monopoly Big Baller مباشرةً.",
    
    freePlayTitle: "هل يمكن اللعب مجانًا؟",
    freePlayText: "يبحث كثيرون عن نسخة تجريبية من كازينو Monopoly Live أو لعب Monopoly Live مجانًا. بما أنها لعبة استوديو مباشر مع موزعين حقيقيين، لا تتوفر نسخة تجريبية قابلة للعب بأموال وهمية. غير أنك تستطيع الدخول إلى أي كازينو أونلاين يوفر Monopoly Live، وفتح اللعبة ومشاهدة بث Monopoly Live مجانًا لتعلّم القواعد قبل المراهنة بأموال حقيقية.",
    
    faqTitle: "الأسئلة الشائعة (FAQ)",
    faq: [
    {
    q: "أين يمكنني العثور على نتائج Monopoly Live وإحصائياتها؟",
    a: "يمكنك العثور على إحصائيات Monopoly Live مباشرةً داخل واجهة اللعبة التي تعرض أحدث القطاعات الفائزة. وللتحليل الأعمق، توفر مواقع تتبع الكازينو من أطراف ثالثة سجلًا شاملًا لتاريخ Monopoly Live."
    },
    {
    q: "هل توجد تطبيق كازينو Monopoly Live؟",
    a: "لا يوجد تطبيق apk مستقل لـ Monopoly Live. بيد أنك تستطيع اللعب بشكل مثالي على الجوال عبر تنزيل التطبيق الرسمي لأي كازينو مرخّص يقدم ألعاب Evolution Gaming."
    },
    {
    q: "ما الفرق بين هذه اللعبة وMonopoly Big Baller؟",
    a: "كلتا اللعبتين تضمّان Mr. Monopoly وجولات بونص ثلاثية الأبعاد، لكن اللعبة الأصلية تستخدم عجلة مال دوّارة، في حين تعتمد Monopoly Big Baller live كازينو على آلة سحب كرات بأسلوب البينغو."
    },
    {
    q: "كيف أدخل جولة البونص ثلاثية الأبعاد؟",
    a: "للمشاركة في لعبة لوحة البونص ثلاثية الأبعاد يجب عليك وضع رهانك على مربعي '2 ROLLS' أو '4 ROLLS'. إذا توقفت العجلة على أحد هذين القطاعين بدأت جولة البونص."
    },
    {
    q: "هل يمكنني التفاعل مع الموزع المباشر؟",
    a: "نعم! تتضمن اللعبة دردشة مباشرة في كازينو Monopoly Live حيث يمكنك التحدث مع المقدم وبقية اللاعبين، مما يجعل تجربة Monopoly Live المباشر اجتماعية وممتعة للغاية."
    },
    {
    q: "هل نتائج اللعبة مزوّرة؟",
    a: "لا. تخضع Monopoly Live من Evolution Gaming لاختبارات صارمة وحاصلة على ترخيص من أكبر هيئات التنظيم في قطاع القمار. العجلة فيزيائية كليًا وعشوائية تمامًا، مما يضمن أن كل نتيجة في Monopoly Live عادلة 100%."
    }
    ]
    },
    monopolyStatsExtra: {
    diceRollsLowTitle: "رميات النرد - المستوى المنخفض",
    diceRollsMidTitle: "رميات النرد - المستوى المتوسط",
    diceRollsHighTitle: "رميات النرد - المستوى العالي",
    trackedMeta: "آخر 6 ساعات • 258 لفة",
    
    boardMovesTitle: "إحصائيات تحركات لوحة اللعبة",
    bonusGameStats: "إحصائيات لعبة البونص",
    doublesRolled: "الضعفيات المُرمَّاة",
    avgBoardRolls: "متوسط رميات اللوحة لكل لعبة بونص",
    
    landingStatsTitle: "إحصائيات مربعات الهبوط في Monopoly Big Baller",
    
    bestIndividualWinsTitle: "أفضل الأرباح الفردية",
    latestTopMultipliersTitle: "أحدث أعلى المضاعفات",
    
    finished: "مكتمل",
    player: "اللاعب",
    wonAmount: "المبلغ المربوح",
    multiplier: "المضاعف",
    bigWinClip: "مقطع الفوز الكبير",
    bonusRound: "جولة البونص",
    watchClip: "مشاهدة المقطع",
    biggestWinsGallery: "معرض أكبر الأرباح"
    },
    seo: {
      lightningroulette: {
        title: "إحصائيات Lightning Roulette وRTP والنتائج المباشرة",
        description: "تابع إحصائيات Lightning Roulette مع RTP والمضاعفات وLucky Numbers وسجل اللفات والدفعات والنتائج المباشرة أونلاين."
      }, 
    home: {
    title: "Casino Score Live 🔥 إحصائيات مباشرة ونتائج فورية [2026]",
    description: "Casino Score Live — منصتك الأمثل لإحصائيات الكازينو المباشر والنتائج الفورية في 2026. حلّل نسبة RTP، وتابع الأرقام الساخنة والباردة، واتخذ قرارات رهان مبنية على البيانات."
    },
    megaball: {
      title: "Mega Ball إحصائيات مباشرة ونتائج – العب أونلاين + RTP والاتجاهات",
      description: "إحصائيات ونتائج Mega Ball المباشرة مع تحليل RTP. تابع الاتجاهات والمضاعفات والنتائج في الوقت الحقيقي. العب أونلاين أو جرّب النسخة التجريبية الآن."
    },
    crazytime: {
    title: "إحصائيات Crazy Time – نتائج مباشرة ومتابع المضاعفات",
    description: "إحصائيات Crazy Time المباشرة محدّثة في الوقت الفعلي. تابع نتائج العجلة وجولات البونص والمضاعفات التي تصل إلى 2000x. استخدم البيانات لبناء استراتيجيتك الرابحة. تحقق الآن!"
    },
    monopoly: {
    title: "إحصائيات Monopoly Live 2026 | متابع النتائج الرسمي",
    description: "إحصائيات Monopoly Live الرسمية لعام 2026. نتائج فورية وتاريخ موثّق وبيانات Evolution Gaming. تابع النتائج والعب بأمان الآن."
    },
    dreamcatcher: {
    title: "نتائج Dream Catcher وإحصائيات مباشرة 2026 - النقاط في الوقت الفعلي 🎰",
    description: "نتائج Dream Catcher اليوم، إحصائيات مباشرة ونقاط في الوقت الفعلي. تتبع سجل النتائج والإحصائيات الفائزة والاتجاهات لعام 2026. شاهد كل لفة فورًا."
    }
    },
    crazytimeStream: {
    title: "بث Crazy Time المباشر",
    subtitle: "شاهد بث Crazy Time المباشر مباشرةً على هذه الصفحة.",
    liveLabel: "بث مباشر",
    watchLivestream: "مشاهدة البث المباشر"
    },
    crazytimeReview: {
    faqTitle: "الأسئلة الشائعة",
    faq: [
    {
    q: "هل Crazy Time لعبة مهارة أم حظ؟",
    a: "Crazy Time هي في المقام الأول لعبة حظ. وعلى الرغم من أن اللاعبين يستطيعون استخدام الإحصائيات وأدوات التتبع لفهم النتائج الأخيرة بشكل أفضل، إلا أن كل جولة تبقى مستقلة."
    },
    {
    q: "ما الحد الأقصى للمضاعف في Crazy Time؟",
    a: "يمكن أن يصل الحد الأقصى المُعلَن عنه في Crazy Time إلى 20,000x خلال جولة البونص الرئيسية للعبة Crazy Time."
    },
    {
    q: "هل يمكنني المشاركة في جولات البونص إذا لم أراهن عليها مباشرةً؟",
    a: "إذا سمحت قواعد اللعبة والإعداد الحالي بذلك من خلال ميكانيكيات البونص كالدخول الأدنى أو تأثيرات Top Slot، فقد يستطيع اللاعبون الدخول في نتائج بونص معينة بمضاعف مخفّض."
    },
    {
    q: "هل إحصائيات Crazy Time المباشرة تنبؤية؟",
    a: "لا. تساعد الإحصائيات المباشرة على تصوّر النشاط الأخير، لكنها لا تتنبأ بالنتائج المستقبلية. كل لفة مستقلة."
    }
    ],
    whatIsTitle: "ما هي لعبة Crazy Time؟",
    whatIsText: "Crazy Time لعبة كازينو مباشر طوّرتها Evolution Gaming وأُطلقت عام 2020. تجمع بين نمط عجلة المال وأربع جولات بونص تفاعلية، لتقدّم واحدة من أكثر تجارب الكازينو المباشر جاذبيةً اليوم.",
    
    tableParameter: "المعامل",
    tableDetails: "التفاصيل",
    gameName: "اسم اللعبة",
    provider: "المزوّد",
    rtp: "RTP",
    releaseYear: "سنة الإصدار",
    gameType: "نوع اللعبة",
    minBet: "أدنى رهان",
    maxBet: "أعلى رهان",
    volatility: "التذبذب",
    gameTypeValue: "برنامج ألعاب مباشر",
    volatilityValue: "مرتفع",
    
    howToPlayTitle: "كيف تلعب Crazy Time",
    howToPlayText: "تتبع لعبة Crazy Time المباشر تنسيقًا واضحًا:",
    step1: "ضع رهانك على قطاع واحد أو أكثر من عجلة الدوران قبل انتهاء المؤقت",
    step2: "شاهد العجلة تدور — يدير مقدّم مباشر الجلسة بأكملها في الوقت الفعلي",
    step3: "تفوز إذا توقفت العجلة على القطاع الذي اخترته",
    step4: "تُطلَق جولة بونص إذا توقف المؤشر على قطاع بونص",
    
    wheelBreakdownTitle: "تفصيل قطاعات العجلة",
    wheelSegment: "القطاع",
    wheelOccurrences: "التكرارات على العجلة",
    wheelMultiplier: "المضاعف",
    upTo2000x: "حتى 2000x",
    upTo10000x: "حتى 10,000x",
    upTo20000x: "حتى 20,000x",
    
    bonusRoundsTitle: "جولات بونص Crazy Time",
    cashHuntTitle: "🎯 Cash Hunt",
    cashHuntText: "معرض رماية بـ 108 مضاعفات عشوائية مخفية خلف رموز. يختار اللاعبون رمزًا واحدًا للكشف عن جائزتهم.",
    coinFlipTitle: "🪙 Coin Flip",
    coinFlipText: "تُقلَب عملة معدنية بسيطة ذات وجهين. يعرض كل وجه مضاعفًا — أحمر أو أزرق. سريعة ونظيفة ومثيرة.",
    pachinkoTitle: "🎰 Pachinko",
    pachinkoText: "جدار Pachinko فيزيائي ضخم يُسقط قرصًا من الأعلى. يرتد عبر الأوتاد ويستقر على مضاعف في الأسفل. يمكن أن يتضاعف بشكل غير محدود حتى الوصول إلى مضاعف غير مزدوج.",
    crazyTimeBonusTitle: "🎪 Crazy Time (بونص)",
    crazyTimeBonusText: "الحدث الرئيسي. عجلة افتراضية ضخمة بثلاثة مؤشرات تدور داخل عالم رقمي. يختار اللاعبون مؤشرًا قبل الدوران. أعلى مكافأة محتملة تصل إلى 20,000x.",
    
    rulesTitle: "قواعد لعبة Crazy Time: النقاط الجوهرية",
    rule1: "يمكنك المراهنة على قطاعات متعددة في آنٍ واحد",
    rule2: "يضيف Top Slot فوق العجلة الرئيسية مضاعفًا أو يُطلق دخول البونص بمضاعفات معزّزة",
    rule3: "إذا لم تراهن على قطاع بونص لكنه ظهر، ستُدخَل في البونص تلقائيًا (بالحد الأدنى للمضاعف)",
    rule4: "جميع مضاعفات البونص تُضرب في رهانك الأصلي وليس مجرد مكافأة ثابتة",
    
    statsTitle: "إحصائيات Crazy Time المباشرة ونتائجها",
    statsText: "فهم إحصائيات Crazy Time يساعدك في اتخاذ قرارات أفضل خلال جلستك. تعرض معظم المنصات متابع إحصائيات مباشر مباشرةً داخل واجهة اللعبة.",
    typicalStatsTitle: "إحصائيات تراها عادةً:",
    stat1: "نتائج آخر 100 لفة — توزيع توقف كل قطاع",
    stat2: "تكرار البونص — كم مرة أُطلقت كل جولة بونص",
    stat3: "تاريخ المضاعفات — أعلى المضاعفات المُمنوحة في الجولات الأخيرة",
    stat4: "القطاعات الساخنة والباردة — مؤشرات بصرية لتكرار القطاعات",
    tip: "نصيحة احترافية:",
    tipText: "متابع إحصائيات Crazy Time ليس أداة تنبؤية — النتائج السابقة لا تؤثر على اللفات المستقبلية. يعمل نظام RNG والعجلة المباشرة بشكل مستقل في كل جولة.",
    
    whyPlayTitle: "لماذا تلعب Crazy Time أونلاين؟",
    prosTitle: "🏆 المميزات:",
    pro1: "جودة إنتاج استثنائية من Evolution Gaming",
    pro2: "أربع جولات بونص مختلفة — لا تكرار ممل أبدًا",
    pro3: "إمكانية مضاعف أقصى هائلة (حتى 20,000x)",
    pro4: "متاحة 24/7 في تقريبًا كل كازينو مباشر كبير أونلاين",
    pro5: "متابع إحصائيات مباشر شفاف مدمج في الواجهة",
    
    consTitle: "⚠️ العيوب:",
    con1: "تذبذب عالٍ — سلاسل خسائر طويلة ممكنة",
    con2: "اللعب التجريبي الحقيقي غير متاح (قيد النمط المباشر)",
    con3: "المضاعفات القصوى نادرة بطبيعتها"
    },
    cta: {
    playNow: "العب 🎰"
    },
    crazytimeStatsExtra: {
    yellow: "أصفر",
    blue: "أزرق",
    green: "أخضر",
    red: "أحمر",
    cashHunt: "Cash Hunt",
    sectionTitle: "إحصائيات بونص Crazy Time المتقدمة",
    
    flapperTitle: "مؤشر بونص Crazy Time",
    flapperMeta: "6 ساعات • 420 لفة",
    flapperText: "قارن متوسطات المضاعفات للألوان الثلاثة لمؤشر Crazy Time. تُقدّم هذه الأرقام لمحة سريعة عن الأداء قصير المدى مقارنةً بالمتوسط على المدى البعيد.",
    avgAlways: "المتوسط التاريخي",
    flapperFootnote: "يُظهر المؤشر معيار متوسط المضاعف طويل المدى للون المؤشر المختار بناءً على البيانات التاريخية المرصودة.",
    
    coinFlipTitle: "Coin Flip",
    coinFlipMeta: "6 ساعات • 420 لفة",
    coinFlipText: "قارن نتائج Coin Flip الحمراء والزرقاء مع متوسطات المضاعفات وتكرار الظهور مقارنةً بالتوقعات طويلة المدى.",
    avgMultiplier: "متوسط المضاعف",
    frequency: "التكرار",
    vsAvg: "مقابل المتوسط",
    coinFlipFootnote: "يُظهر المؤشر معيار تكرار المتوسط طويل المدى للون المختار بناءً على البيانات المرصودة.",
    
    cashHuntSymbolsTitle: "رموز Cash Hunt",
    cashHuntSymbolsMeta: "6 ساعات • 420 لفة",
    cashHuntSymbolsText: "يعرض هذا التفصيل متوسط المضاعف وتكرار الظهور لكل رمز هدف في Cash Hunt.",
    times: "مرات",
    
    recentCashHuntTitle: "Cash Hunt: أحدث المضاعفات",
    recentCashHuntMeta: "6 ساعات • 420 لفة",
    recentCashHuntText: "تابع أحدث المضاعفات من جولات Cash Hunt. الخلايا المظلّلة تُشير إلى أقوى وأضعف النتائج الأخيرة.",
    
    bestBetsTitle: "أفضل الرهانات الفردية",
    bestBetsMeta: "6 ساعات • 420 لفة",
    bestBetsText: "تُبرز هذه الجدول أقوى الفوزات المنفردة في الفترة المختارة، تشمل اللاعب والمدفوع والنتيجة والمضاعف.",
    date: "التاريخ",
    result: "النتيجة",
    player: "اللاعب",
    payout: "المدفوع",
    multiplier: "المضاعف",
    view: "عرض",
    
    latestMaxTitle: "أحدث المضاعفات القصوى",
    latestMaxMeta: "6 ساعات • 420 لفة",
    latestMaxText: "تعرض هذه النتائج البونص الأخيرة الأعلى المضاعفات المحققة خلال الفترة المختارة.",
    clip: "مشاهدة المقطع",
    biggestWinsGallery: "معرض أكبر الأرباح"
    },
    
    gamePage: {
    statisticsTitleSuffix: " إحصائيات – نتائج مباشرة ومتابع المضاعفات",
    subtitlePrefix: "تابع نتائج اللفات والسجل والإحصائيات في الوقت الفعلي لـ",
    playCta: "العب الآن"
    },
    nav: {
    home: "الرئيسية",
    liveGames: "الألعاب المباشرة"
    },
    home: {
    heroTitleBefore: "كازينو مباشر",
    heroTitleAccent: "إحصائيات",
    heroTitleAfter: "ونتائج في الوقت الفعلي",
    heroText: "إحصائيات الكازينو المباشر ونتائج الألعاب والنتائج الفورية لبرامج الألعاب المباشرة المفضلة لديك. تابع RTP والأرقام الساخنة والباردة وأكبر الأرباح — مجانًا 100%، لا حاجة لحساب.",
    liveGames: "الألعاب المباشرة",
    featuresTitle: "مميزاتنا",
    testimonialsTitle: "آراء مستخدمينا"
    },
    features: {
    noDownloadTitle: "بدون تنزيل",
    noDownloadText: "استعرض جميع البيانات فورًا من متصفحك على الكمبيوتر أو الجهاز اللوحي أو الهاتف. لا تنزيلات ولا حساب مطلوب.",
    accurateDataTitle: "بيانات دقيقة",
    accurateDataText: "تتبع آلي لكل لفة في الوقت الفعلي حتى تتمكن من مراقبة النتائج بثقة.",
    freeTitle: "مجاني 100%",
    freeText: "المنصة مجانية كليًا. افتح أي لعبة مباشرة وتصفح النتائج الأخيرة والإحصائيات الرئيسية فورًا."
    },
    footer: {
    games: "الألعاب",
    moreGames: "ألعاب أخرى",
    resources: "الموارد",
    faq: "الأسئلة الشائعة",
    privacy: "سياسة الخصوصية",
    terms: "شروط الخدمة",
    contact: "تواصل معنا",
    description: "تابع برامج ألعاب الكازينو المباشر في الوقت الفعلي. سجل اللفات والإحصائيات وأكبر الأرباح."
    },
    homeFaq: {
    faqTitle: "الأسئلة الشائعة حول إحصائيات الكازينو المباشر",
    faqIntro: "إجابات حول إحصائيات الكازينو المباشر ونتائج الألعاب والنتائج الفورية على منصتنا.",
    faq: [
    {
    q: "ما هي إحصائيات الكازينو المباشر؟",
    a: "إحصائيات الكازينو المباشر هي نقاط بيانات مبنية على نتائج الألعاب الفعلية والنتائج الفورية من جلسات الموزع المباشر."
    },
    {
    q: "كيف تجمعون نتائج الألعاب؟",
    a: "نراقب البث العام وواجهات المزودين ومصادر الإذاعة بأنظمة آلية لالتقاط نتائج الألعاب فور حدوثها."
    },
    {
    q: "كم مرة تُحدَّث النتائج الفورية؟",
    a: "تُحدَّث النتائج الفورية باستمرار ويجري التحقق منها قبل عرضها على الموقع."
    },
    {
    q: "هل يمكن لإحصائيات الكازينو المباشر التنبؤ بالنتيجة التالية؟",
    a: "لا. تساعدك إحصائيات الكازينو المباشر على فهم نتائج الألعاب والاتجاهات الأخيرة، لكنها لا تتنبأ بالنتائج المستقبلية."
    }
    ]
    },
    common: {
    player: "اللاعب",
    verifiedUser: "مستخدم موثّق",
    liveNow: "مباشر الآن",
    hour: "ساعة",
    hours: "ساعات",
    spins: "لفات"
    },
    tabs: {
    temperature: "الحرارة",
    history: "السجل",
    stats: "الإحصائيات",
    bigwins: "أكبر الأرباح",
    review: "المراجعة",
    stream: "البث"
    }
    },
};


module.exports = {
    SUPPORTED_LANGS,
    DEFAULT_LANG,
    UI_TRANSLATIONS
  };