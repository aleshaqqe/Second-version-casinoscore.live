const SUPPORTED_LANGS = ["en", "es", "it", "de", "nl", "fr", "pt", "ar"];
const DEFAULT_LANG = "en";

const UI_TRANSLATIONS = {
  en: {
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
      crazytime: {
        title: "Crazy Time Stats – Live Results & Multipliers Tracker",
        description: "Crazy Time live stats updated in real time. Track wheel results, bonus rounds & multipliers up to 2000x. Use data to build your winning strategy. Check now!"
      },
      monopoly: {
        title: "Monopoly Live Stats 2026 | Official Results Tracker",
        description: "Monopoly Live official statistics for 2026. Real-time results, verified history & Evolution Gaming data. Licensed casinos only. Track scores & play safe now."
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
      home: {
        title: "Casino Score Live 🔥 Live Stats y Real-Time Results [2026]",
        description: "Casino Score Live es tu centro definitivo de live stats y real-time results en 2026. Analiza RTP, sigue hot or cold streaks y toma decisiones de apuestas seguras."
      },
      crazytime: {
        title: "Estadísticas de Crazy Time – Resultados en Vivo y Rastreador de Multiplicadores",
        description: "Estadísticas en vivo de Crazy Time actualizadas en tiempo real. Sigue los resultados de la rueda, rondas bonus y multiplicadores de hasta 2000x. Usa los datos para construir tu estrategia ganadora. ¡Compruébalo ahora!"
      },
      monopoly: {
        title: "Monopoly Live Estadísticas 2026 | Rastreador Oficial de Resultados",
        description: "Monopoly Live estadísticas oficiales 2026. Resultados en tiempo real, historial verificado y datos de Evolution Gaming. Sigue resultados y juega seguro."      }
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
      home: {
        title: "Casino Score Live 🔥 Live Stats e Real-Time Results [2026]",
        description: "Casino Score Live è il tuo hub definitivo per live stats e real-time results nel 2026. Analizza RTP, segui hot or cold streaks e fai scelte di scommessa sicure."
      },
      crazytime: {
        title: "Statistiche Crazy Time – Risultati Live e Tracker dei Moltiplicatori",
        description: "Statistiche live di Crazy Time aggiornate in tempo reale. Monitora risultati della ruota, round bonus e moltiplicatori fino a 2000x. Usa i dati per costruire la tua strategia vincente. Controlla ora!"
      },
      monopoly: {
        title: "Monopoly Live Statistiche 2026 | Tracker Ufficiale dei Risultati",
        description: "Statistiche ufficiali di Monopoly Live per il 2026. Risultati in tempo reale, storico verificato e dati Evolution Gaming. Monitora i risultati e gioca in sicurezza."
      },
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
      home: {
        title: "Casino Score Live 🔥 Live Stats und Real-Time Results [2026]",
        description: "Casino Score Live ist dein zentraler Hub für live stats und real-time results im Jahr 2026. Analysiere RTP, verfolge hot or cold streaks und triff sichere, datenbasierte Betting-Entscheidungen."
      },
      crazytime: {
        title: "Crazy Time Statistiken – Live-Ergebnisse & Multiplikator-Tracker",
        description: "Crazy Time Live-Statistiken in Echtzeit aktualisiert. Verfolge Radergebnisse, Bonusrunden und Multiplikatoren bis zu 2000x. Nutze Daten, um deine Gewinnstrategie aufzubauen. Jetzt ansehen!"
      },
      monopoly: {
        title: "Monopoly Live Statistiken 2026 | Offizieller Ergebnis-Tracker",
        description: "Offizielle Monopoly Live Statistiken für 2026. Echtzeit-Ergebnisse, verifizierter Verlauf und Evolution Gaming Daten. Verfolge Resultate und spiele sicher."
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
      crazytime: {
        title: "Crazy Time Statistieken – Live Resultaten & Multiplier Tracker",
        description: "Crazy Time live statistieken in realtime bijgewerkt. Volg wielresultaten, bonusrondes en multipliers tot 2000x. Gebruik data om je winnende strategie op te bouwen. Bekijk het nu!"
      },
      monopoly: {
        title: "Monopoly Live Statistieken 2026 | Officiële Resultaten Tracker",
        description: "Officiële Monopoly Live statistieken voor 2026. Realtime resultaten, geverifieerde historie en Evolution Gaming data. Volg resultaten en speel veilig."
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
      home: {
        title: "Casino Score Live 🔥 Live Stats et Real-Time Results [2026]",
        description: "Casino Score Live est votre hub ultime pour live stats et real-time results en 2026. Analysez le RTP, suivez les hot or cold streaks et prenez des décisions de mise sécurisées."
      },
      crazytime: {
        title: "Statistiques Crazy Time – Résultats en Direct et Suivi des Multiplicateurs",
        description: "Statistiques Crazy Time en direct mises à jour en temps réel. Suivez les résultats de la roue, les tours bonus et les multiplicateurs jusqu'à 2000x. Utilisez les données pour construire votre stratégie gagnante. Consultez maintenant !"
      },
      monopoly: {
        title: "Monopoly Live Statistiques 2026 | Suivi Officiel des Résultats",
        description: "Statistiques officielles Monopoly Live pour 2026. Résultats en temps réel, historique vérifié et données Evolution Gaming. Suivez les résultats et jouez prudemment."
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
      home: {
        title: "Casino Score Live 🔥 Live Stats e Real-Time Results [2026]",
        description: "Casino Score Live é o seu hub definitivo para live stats e real-time results em 2026. Analise RTP, acompanhe hot or cold streaks e faça escolhas de aposta seguras."
      },
      crazytime: {
        title: "Estatísticas do Crazy Time – Resultados ao Vivo e Rastreador de Multiplicadores",
        description: "Estatísticas ao vivo do Crazy Time atualizadas em tempo real. Acompanhe resultados da roda, rodadas de bônus e multiplicadores de até 2000x. Use os dados para construir sua estratégia vencedora. Confira agora!"
      },
      monopoly: {
        title: "Monopoly Live Estatísticas 2026 | Rastreador Oficial de Resultados",
        description: "Estatísticas oficiais do Monopoly Live para 2026. Resultados em tempo real, histórico verificado e dados da Evolution Gaming. Acompanhe resultados e jogue com segurança."
      },
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
    homeSeo: {
      sectionTitle: "حول منصتنا لإحصائيات الكازينو المباشر",
      whoTitle: "من نحن",
      whoText1: "نحن منصة مستقلة لتحليلات ألعاب الكازينو المباشر تقوم بجمع البيانات ومعالجتها وعرض الإحصائيات في الوقت الفعلي.",
      whoText2: "هدفنا هو تزويد اللاعبين ببيانات شفافة مبنية على نتائج الألعاب الفعلية، لمساعدتهم على فهم إحصائيات الكازينو المباشر والنتائج الأخيرة بشكل أفضل.",
      howTitle: "كيف نجمع المعلومات",
      howText1: "نستخدم أنظمة آلية لجمع البيانات تتابع نتائج ألعاب الكازينو المباشر في الوقت الفعلي.",
      howText2: "تأتي البيانات من مصادر بث مفتوحة وتدفقات الألعاب المباشرة والواجهات العامة لمزودي الألعاب، مما يسمح لنا بمتابعة نتائج الألعاب والنتائج الفورية بشكل مستمر.",
      howText3: "تمر جميع النتائج بمرحلة معالجة إضافية وتحقق خوارزمي لتقليل التأخير والحفاظ على دقة إحصائية عالية. تعتمد المنصة على تقنيات حديثة لمعالجة البيانات، بما في ذلك مزامنة التدفقات والتحليل الآلي والنماذج التحليلية."
    },
    monopolyReview: {
      title: "Monopoly Live مراجعة: تجربة برنامج ألعاب الكازينو المباشر المثالية",
      intro: "مرحبًا بك في الدليل الشامل للعبة Monopoly Live، واحدة من أشهر ألعاب الموزع المباشر التي تم ابتكارها على الإطلاق. تم تطوير هذه اللعبة بواسطة الشركة الأسطورية Evolution Gaming، وهي تجمع بين عجلة أموال ضخمة وجولة بونص ثلاثية الأبعاد مذهلة بتقنية الواقع المعزز يظهر فيها Mr. Monopoly بنفسه. سواء كنت تريد لعب Monopoly Live أونلاين أو مجرد التحقق من أحدث إحصائيات اللعبة، فستجد هنا كل المعلومات التي تحتاجها.",
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
      maxWinValue: "$500,000 (أو ما يعادله بالمضاعِف)",
    
      sectionsTitle: "أهم ميزات Monopoly Live",
    
      wheelTitle: "Monopoly Live عجلة المال (اللعبة الأساسية)",
      wheelText: "جوهر تجربة كازينو Monopoly Live المباشر. يقوم مقدم مباشر حقيقي بتدوير عجلة عمودية ضخمة تحتوي على 54 خانة. يراهن اللاعبون على الأرقام (1 و2 و5 و10) للفوز بدفعات نقدية فورية بحسب الرقم الذي تتوقف عليه العجلة.",
    
      chanceTitle: "Monopoly Live خانة 'Chance'",
      chanceText: "عند توقف العجلة على خانة 'Chance' يحصل اللاعبون إما على جائزة نقدية فورية أو بونص مضاعِف مثير. وإذا ظهر مضاعِف، يقوم المقدم بتدوير العجلة مرة أخرى، ويتم مضاعفة ربحك التالي.",
    
      bonus3dTitle: "Monopoly Live جولة البونص ثلاثية الأبعاد",
      bonus3dText: "أبرز ما يميز لعبة Monopoly Live. إذا راهنت على '2 ROLLS' أو '4 ROLLS' وتوقفت العجلة على إحدى هاتين الخانتين، يدخل Mr. Monopoly إلى عالم لعبة لوحية ثلاثي الأبعاد، ويجمع الجوائز والمضاعِفات ويتجنب الضرائب.",
    
      howToPlayTitle: "كيفية لعب Monopoly Live",
      howToPlayIntro: "البدء في كازينو أونلاين مع Monopoly Live سهل للغاية. فقط اتبع هذه الخطوات:",
      step1: "ضع رهاناتك: لديك نافذة مراهنة قصيرة لوضع رقاقاتك على 1 أو 2 أو 5 أو 10 أو '2 Rolls' أو '4 Rolls'.",
      step2: "الدوران: يقوم الموزع المباشر بتدوير العجلة. يمكنك مشاهدة Monopoly Live بينما تبدأ العجلة بالتباطؤ.",
      step3: "الدفع: إذا توقفت العجلة على رقمك، فإنك تفوز. وإذا توقفت على لعبة بونص وكنت قد راهنت عليها، فستدخل الجولة ثلاثية الأبعاد.",
    
      statsTitle: "Monopoly Live الإحصائيات والنتائج وأدوات التتبع",
      statsText1: "بالنسبة للعديد من عشاق ألعاب iGaming الجادين، فإن تتبع اللعبة لا يقل أهمية عن اللعب نفسه. وبما أن هذه لعبة احتمالات، يستخدم العديد من اللاعبين أداة تتبع Monopoly Live لمراقبة اتجاهات اللعبة.",
      statsText2: "من خلال تحليل إحصائيات Monopoly Live، يمكنك معرفة معدل ظهور جولات البونص، ومتوسط المضاعفات، والأرقام الباردة/الساخنة. كما أن التحقق من سجل Monopoly Live يتيح لك رؤية نتائج Monopoly Live اليوم. ورغم أن النتائج السابقة لا تضمن النتائج المستقبلية، فإن الاطلاع على لوحة نتائج الكازينو الخاصة بـ Monopoly Live يمنح اللاعبين فكرة عن كيفية تصرف العجلة خلال جلستهم. تذكر دائمًا أن تلعب بمسؤولية بغض النظر عما تظهره نتائج Monopoly Live.",
      statsNote: "ملاحظة: إذا كنت تحب هذا النوع، فقد ترغب أيضًا في تجربة Monopoly Big Baller live، وهي نسخة فرعية بأسلوب البنغو وتقدم أيضًا نتائج Monopoly Big Baller اليوم مباشرة.",
    
      freePlayTitle: "Monopoly Live هل يمكنك اللعب مجانًا؟",
      freePlayText: "يبحث الكثير من اللاعبين عن نسخة تجريبية من كازينو Monopoly Live أو Monopoly Live مجانًا. وبما أن هذه لعبة بث مباشر من الاستوديو مع موزعين حقيقيين، فلا توجد نسخة تجريبية قابلة للعب بأموال وهمية. ومع ذلك، يمكنك الدخول إلى أي كازينو أونلاين يوفّر Monopoly Live، وفتح اللعبة، ومشاهدة بث Monopoly Live مجانًا فقط لتعلّم القواعد قبل المراهنة بأموال حقيقية.",
    
      faqTitle: "الأسئلة الشائعة (FAQ)",
      faq: [
        {
          q: "Monopoly Live أين يمكنني العثور على النتائج والإحصائيات؟",
          a: "يمكنك العثور على إحصائيات Monopoly Live مباشرة داخل واجهة اللعبة، حيث تعرض أحدث الخانات الفائزة. وللحصول على تحليلات أعمق، توفر العديد من مواقع تتبع الكازينو الخارجية سجلًا شاملاً لـ Monopoly Live."
        },
        {
          q: "Monopoly Live هل يوجد تطبيق كازينو متاح؟",
          a: "لا يوجد ملف apk مستقل للعبة Monopoly Live. ومع ذلك، يمكنك اللعب بسهولة على الهاتف المحمول عبر تنزيل التطبيق الرسمي لأي كازينو مرخّص يوفّر ألعاب Evolution Gaming."
        },
        {
          q: "Monopoly Live ما الفرق بين هذه اللعبة وMonopoly Big Baller؟",
          a: "على الرغم من أن كلتا اللعبتين تضمان Mr. Monopoly وجولات بونص ثلاثية الأبعاد، فإن اللعبة الأصلية تستخدم عجلة أموال دوّارة، بينما يستخدم Monopoly Big Baller live casino آلة سحب كرات بأسلوب البنغو."
        },
        {
          q: "Monopoly Live كيف أدخل إلى لعبة البونص ثلاثية الأبعاد؟",
          a: "للمشاركة في لعبة اللوح ثلاثية الأبعاد، يجب أن تضع رهانًا على خانات '2 ROLLS' أو '4 ROLLS'. وإذا توقفت العجلة على إحدى هذه الخانات، تبدأ جولة البونص."
        },
        {
          q: "Monopoly Live هل يمكنني التفاعل مع الموزع المباشر؟",
          a: "نعم. تحتوي اللعبة على دردشة كازينو مباشرة خاصة بـ Monopoly Live حيث يمكنك التحدث مع المقدم واللاعبين الآخرين، مما يجعل تجربة Monopoly Live اجتماعية وتفاعلية للغاية."
        },
        {
          q: "Monopoly Live هل نتائج اللعبة مزوّرة؟",
          a: "لا. تخضع Monopoly Live من Evolution Gaming لاختبارات صارمة وتحمل تراخيص من أبرز هيئات تنظيم المقامرة. العجلة مادية بالكامل وعشوائية، مما يضمن أن كل نتيجة في Monopoly Live عادلة بنسبة 100%."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Monopoly Live رميات النرد منخفضة المستوى",
      diceRollsMidTitle: "Monopoly Live رميات النرد متو��طة المستوى",
      diceRollsHighTitle: "Monopoly Live رميات النرد عالية المستوى",
      trackedMeta: "آخر 6 ساعات • 258 دورة",
    
      boardMovesTitle: "Monopoly Live إحصائيات التحرك على اللوحة",
      bonusGameStats: "إحصائيات لعبة البونص",
      doublesRolled: "الزوجيات التي تم رميها",
      avgBoardRolls: "متوسط رميات اللوحة لكل لعبة بونص",
    
      landingStatsTitle: "Monopoly Big Baller إحصائيات خانات الهبوط",
    
      bestIndividualWinsTitle: "Monopoly Live أفضل الأرباح الفردية",
      latestTopMultipliersTitle: "Monopoly Live أحدث أعلى المضاعِفات",
    
      finished: "انتهى",
      player: "اللاعب",
      wonAmount: "المبلغ الذي تم ربحه",
      multiplier: "المضاعِف",
      bigWinClip: "مقطع ربح كبير",
      bonusRound: "جولة البونص",
      watchClip: "شاهد المقطع",
      biggestWinsGallery: "معرض أكبر الأرباح"
    },
    seo: {
      home: { 
        title: "Casino Score Live 🔥 Live Stats و Real-Time Results [2026]",
        description: "Casino Score Live هو مركزك النهائي لـ live stats و real-time results في 2026. حلّل RTP، وتابع hot or cold streaks، واتخذ قرارات مراهنة آمنة مبنية على البيانات."
      },    
      crazytime: {
        title: "إحصائيات Crazy Time – النتائج المباشرة ومتتبع المضاعفات",
        description: "إحصائيات Crazy Time المباشرة يتم تحديثها في الوقت الفعلي. تتبع نتائج العجلة وجولات البونص والمضاعفات حتى 2000x. استخدم البيانات لبناء استراتيجيتك الرابحة. تحقق الآن!"
      },
      monopoly: {
        title: "إحصائيات Monopoly Live 2026 | المتتبع الرسمي للنتائج",
        description: "إحصائيات Monopoly Live الرسمية لعام 2026. نتائج مباشرة وسجل موثّق وبيانات Evolution Gaming. تابع النتائج والعب بأمان."
      },
    },
    crazytimeStream: {
      title: "البث المباشر لـ Crazy Time",
      subtitle: "شاهد البث المباشر لـ Crazy Time مباشرة على هذه الصفحة.",
      liveLabel: "البث المباشر",
      watchLivestream: "شاهد البث المباشر"
    },
    crazytimeReview: {
      faqTitle: "الأسئلة الشائعة",
      faq: [
        {
          q: "هل Crazy Time لعبة مهارة أم حظ؟",
          a: "Crazy Time هي في المقام الأول لعبة حظ. بينما يمكن للاعبين استخدام الإحصائيات وأدوات التتبع لفهم النتائج الأخيرة بشكل أفضل، تظل كل جولة مستقلة."
        },
        {
          q: "ما هو الحد الأقصى للمضاعف في Crazy Time؟",
          a: "يمكن أن يصل الحد الأقصى المعلن عنه في Crazy Time إلى 20,000x خلال جولة المكافأة الرئيسية Crazy Time."
        },
        {
          q: "هل يمكنني الانضمام إلى جولات المكافأة إذا لم أراهن عليها مباشرة؟",
          a: "إذا سمحت قواعد اللعبة والإعداد الحالي بذلك من خلال آليات المكافأة مثل الحد الأدنى للدخول أو تأثيرات Top Slot، يمكن للاعبين لا يزالون الدخول في نتائج مكافأة معينة بمضاعف مخفض."
        },
        {
          q: "هل إحصائيات Crazy Time المباشرة تنبؤية؟",
          a: "لا. تساعد الإحصائيات المباشرة في تصور النشاط الأخير، لكنها لا تتنبأ بالنتائج المستقبلية. كل دورة مستقلة."
        }
      ],
      whatIsTitle: "ما هي لعبة Crazy Time؟",
      whatIsText: "Crazy Time هي لعبة كازينو مباشرة طورتها Evolution Gaming، تم إطلاقها في عام 2020. تجمع بين تنسيق عجلة المال وأربع جولات مكافأة تفاعلية، مما يوفر واحدة من أكثر تجارب الكازينو المباشر جاذبية المتاحة اليوم.",
    
      tableParameter: "المعامل",
      tableDetails: "التفاصيل",
      gameName: "اسم اللعبة",
      provider: "المزود",
      rtp: "نسبة العائد للاعب",
      releaseYear: "سنة الإصدار",
      gameType: "نوع اللعبة",
      minBet: "الحد الأدنى للرهان",
      maxBet: "الحد الأقصى للرهان",
      volatility: "التقلب",
      gameTypeValue: "عرض ألعاب مباشر",
      volatilityValue: "عالي",
    
      howToPlayTitle: "كيفية لعب Crazy Time",
      howToPlayText: "تتبع لعبة Crazy Time المباشرة تنسيقًا بسيطًا:",
      step1: "ضع رهانك على قطاع واحد أو أكثر من قطاعات العجلة قبل انتهاء الوقت",
      step2: "شاهد العجلة تدور — يدير مضيف مباشر الجلسة بأكملها في الوقت الفعلي",
      step3: "اربح إذا توقفت العجلة على القطاع الذي اخترته",
      step4: "فعّل جولة مكافأة إذا توقف المؤشر على قطاع مكافأة",
    
      wheelBreakdownTitle: "تفصيل قطاعات العجلة",
      wheelSegment: "القطاع",
      wheelOccurrences: "التكرارات على العجلة",
      wheelMultiplier: "المضاعف",
      upTo2000x: "حتى 2000x",
      upTo10000x: "حتى 10,000x",
      upTo20000x: "حتى 20,000x",
    
      bonusRoundsTitle: "جولات مكافأة Crazy Time",
      cashHuntTitle: "🎯 Cash Hunt",
      cashHuntText: "معرض تصويب مع 108 مضاعفًا عشوائيًا مخفيًا خلف الرموز. يختار اللاعبون واحدًا للكشف عن جائزتهم.",
      coinFlipTitle: "🪙 Coin Flip",
      coinFlipText: "يتم قلب عملة بسيطة ذات وجهين. يعرض كل جانب مضاعفًا — أحمر أو أزرق. سريع ونظيف ومثير.",
      pachinkoTitle: "🎰 Pachinko",
      pachinkoText: "جدار Pachinko المادي العملاق يسقط قرصًا من الأعلى. يرتد عبر الأوتاد ويهبط على مضاعف في الأسفل. يمكن أن يتضاعف بشكل لا نهائي حتى يتم الوصول إلى مضاعف غير مزدوج.",
      crazyTimeBonusTitle: "🎪 Crazy Time (مكافأة)",
      crazyTimeBonusText: "الحدث الرئيسي. عجلة افتراضية ضخمة بثلاثة مؤشرات تدور داخل عالم رقمي. يختار اللاعبون مؤشرًا قبل الدوران. تصل أعلى مكافأة محتملة إلى 20,000x.",
    
      rulesTitle: "قواعد لعبة Crazy Time: النقاط الرئيسية",
      rule1: "يمكنك المراهنة على عدة قطاعات في وقت واحد",
      rule2: "يضيف Top Slot فوق العجلة الرئيسية مضاعفًا أو يفعّل دخول المكافأة بمضاعفات معززة",
      rule3: "إذا لم تراهن على قطاع مكافأة ولكنه هبط، فأنت لا تزال تدخل في المكافأة (بحد أدنى للمضاعف)",
      rule4: "يتم ضرب جميع مضاعفات المكافأة برهانك الأصلي، وليس مجرد مكافأة ثابتة",
    
      statsTitle: "إحصائيات ونتائج Crazy Time المباشرة",
      statsText: "يساعد فهم إحصائيات Crazy Time في توجيه قرارات جلستك. تعرض معظم المنصات متتبع إحصائيات مباشرًا مباشرة في واجهة اللعبة.",
      typicalStatsTitle: "الإحصائيات النموذجية التي سترى:",
      stat1: "نتائج آخر 100 دورة — توزيع كل قطاع يهبط",
      stat2: "تكرار المكافأة — كم مرة تم تفعيل كل جولة مكافأة",
      stat3: "تاريخ المضاعفات — أعلى المضاعفات الممنوحة في الجولات الأخيرة",
      stat4: "القطاعات الساخنة والباردة — مؤشرات بصرية لتكرار القطاع",
      tip: "نصيحة احترافية:",
      tipText: "متتبع إحصائيات Crazy Time ليس أداة تنبؤية — النتائج السابقة لا تؤثر على الدورات المستقبلية. يعمل RNG والعجلة المباشرة بشكل مستقل في كل جولة.",
    
      whyPlayTitle: "لماذا تلعب Crazy Time عبر الإنترنت؟",
      prosTitle: "🏆 الإيجابيات:",
      pro1: "جودة إنتاج استثنائية من Evolution Gaming",
      pro2: "أربع ألعاب مكافأة متميزة — غير متكررة أبدًا",
      pro3: "إمكانات ضخمة للمضاعف الأقصى (حتى 20,000x)",
      pro4: "متاح على مدار الساعة طوال أيام الأسبوع في كل كازينو مباشر كبير تقريبًا عبر الإنترنت",
      pro5: "متتبع إحصائيات مباشر شفاف مدمج في الواجهة",
    
      consTitle: "⚠️ السلبيات:",
      con1: "تقلب عالٍ — سلاسل خسارة طويلة ممكنة",
      con2: "اللعب التجريبي الحقيقي غير متاح (قيد تنسيق مباشر)",
      con3: "المضاعفات القصوى نادرة بالتصميم"
    },
    crazytimeStatsExtra: {
      sectionTitle: "إحصائيات بونص Crazy Time المتقدمة",
    
      flapperTitle: "Flapper بونص Crazy Time",
      flapperText: "قارن متوسط المضاعفات للألوان الثلاثة في Flapper الخاص بـ Crazy Time. تمنحك هذه الأرقام لمحة سريعة عن الأداء قصير المدى مقارنة بالمتوسط طويل المدى.",
      avgAlways: "المتوسط التاريخي",
      flapperFootnote: "يشير المؤشر إلى معيار متوسط المضاعف على المدى الطويل للون flapper المحدد بناءً على البيانات التاريخية المتعقبة.",
    
      coinFlipTitle: "Coin Flip",
      coinFlipText: "قارن نتائج Coin Flip الحمراء والزرقاء من حيث متوسط المضاعفات وتكرار الظهور مقارنة بالتوقعات طويلة المدى.",
      avgMultiplier: "متوسط المضاعف",
      frequency: "التكرار",
      vsAvg: "مقارنة بالمتوسط",
      coinFlipFootnote: "يشير المؤشر إلى معيار متوسط التكرار طويل المدى للون المحدد بناءً على البيانات المتعقبة.",
    
      cashHuntSymbolsTitle: "رموز Cash Hunt",
      cashHuntSymbolsText: "يوضح هذا التقسيم متوسط المضاعف وتكرار الظهور لكل رمز هدف في Cash Hunt.",
      times: "مرة",
    
      recentCashHuntTitle: "Cash Hunt: المضاعفات الأخيرة",
      recentCashHuntText: "تابع المضاعفات الأخيرة من جولات Cash Hunt. الخلايا المميزة توضح أقوى وأضعف النتائج الأخيرة.",
    
      bestBetsTitle: "أفضل الرهانات الفردية",
      bestBetsText: "يسلط هذا الجدول الضوء على أقوى الأرباح الفردية خلال الفترة المحددة، بما في ذلك اللاعب والدفع والنتيجة والمضاعف.",
      date: "التاريخ",
      result: "النتيجة",
      player: "اللاعب",
      payout: "الدفع",
      multiplier: "المضاعف",
      view: "عرض",
    
      latestMaxTitle: "أحدث أقصى المضاعفات",
      latestMaxText: "تُظهر هذه النتائج الأعلى الأخيرة في جولات البونص أعلى المضاعفات التي تم الوصول إليها خلال الفترة المحددة.",
      clip: "مشاهدة المقطع",
      biggestWinsGallery: "معرض أكبر الأرباح",
    
      yellow: "أصفر",
      blue: "أزرق",
      green: "أخضر",
      red: "أحمر",
      cashHunt: "Cash Hunt"
    },
    cta: {
      playNow: "العب 🎰"
    },
    
    gamePage: {
      statisticsTitleSuffix: "الإحصائيات",
      subtitlePrefix: "تتبع النتائج والسجل والإحصائيات في الوقت الحقيقي للعبة",
    },
    nav: { home: "الرئيسية", liveGames: "الألعاب المباشرة" },
    home: {
      heroTitleBefore: "إحصائيات",
      heroTitleAccent: "الكازينو المباشر",
      heroTitleAfter: "والنتائج الفورية",
      heroText: "إحصائيات الكازينو المباشر ونتائج الألعاب والنتائج الفورية لألعاب الكازينو المباشر المفضلة لديك. تابع RTP، وسلاسل الربح أو الخسارة، وأكبر الأرباح — مجاني 100%، ولا حاجة إلى حساب.",
      liveGames: "الألعاب المباشرة",
      featuresTitle: "مميزاتنا",
      testimonialsTitle: "آراء المستخدمين"
    },
    features: {
      noDownloadTitle: "بدون تحميل",
      noDownloadText: "اعرض جميع البيانات مباشرة من المتصفح.",
      accurateDataTitle: "بيانات دقيقة",
      accurateDataText: "تتبع آلي لكل لفة في الوقت الحقيقي.",
      freeTitle: "مجاني 100%",
      freeText: "Tracksino مجاني بالكامل."
    },
    footer: {
      games: "الألعاب",
      moreGames: "المزيد من الألعاب",
      resources: "الموارد",
      faq: "الأسئلة الشائعة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بنا",
      description: "تتبع ألعاب الكازينو المباشرة في الوقت الحقيقي."
    },
    homeFaq: {
      faqTitle: "الأسئلة الشائعة حول إحصائيات الكازينو المباشر",
      faqIntro: "إجابات حول live casino statistics و game results و real-time results على منصتنا.",
      faq: [
        {
          q: "ما هي إحصائيات الكازينو المباشر؟",
          a: "هي بيانات مبنية على نتائج الألعاب الحقيقية والنتائج الفورية من بثوط الموزعين المباشرين."
        },
        {
          q: "كيف تجمعون نتائج الألعاب؟",
          a: "نراقب البثوط العامة وواجهات مزودي الألعاب ومصادر البث باستخدام أنظمة آلية."
        },
        {
          q: "كم مرة يتم تحديث النتائج الفورية؟",
          a: "يتم تحديث النتائج الفورية بشكل مستمر والتحقق منها قبل عرضها على الموقع."
        },
        {
          q: "هل تستطيع الإحصائيات التنبؤ بالنتيجة التالية؟",
          a: "لا. تساعد الإحصائيات في فهم النتائج والاتجاهات الأخيرة، لكنها لا تتنبأ بالمستقبل."
        }
      ]
    },
    common: {
      player: "لاعب",
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
      review: "مراجعة",
      stream: "البث",
    }
  }
};


module.exports = {
    SUPPORTED_LANGS,
    DEFAULT_LANG,
    UI_TRANSLATIONS
  };