const SUPPORTED_LANGS = ["en", "es", "it", "de", "nl", "fr", "pt", "ar"];
const DEFAULT_LANG = "en";

const UI_TRANSLATIONS = {
  en: {
    monopolyReview: {
      title: "Monopoly Live Review: The Ultimate Live Casino Game Show Experience",
      intro: "Welcome to the ultimate guide to Monopoly Live, one of the most popular live dealer games ever created. Developed by the legendary Evolution Gaming, this title merges a massive money wheel with an incredible augmented reality 3D bonus round featuring Mr. Monopoly himself. Whether you want to play Monopoly Live online or just check the latest game statistics, we have all the information you need.",
    
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
      crazytime: {
        title: "Crazy Time Stats – Live Results & Multipliers Tracker",
        description: "Crazy Time live stats updated in real time. Track wheel results, bonus rounds & multipliers up to 2000x. Use data to build your winning strategy. Check now!"
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
      heroTitleBefore: "Track",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Real-time spin history, statistics and biggest wins for all your favorite live casino game shows. 100% free, no account needed.",
      liveGames: "Live Games",
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
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      contact: "Contact Us",
      description: "Track live casino game shows in real time. Spin history, statistics and biggest wins."
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
    monopolyReview: {
      title: "Reseña de Monopoly Live: la experiencia definitiva de casino en vivo tipo game show",
      intro: "Bienvenido a la guía definitiva de Monopoly Live, uno de los juegos con crupier en vivo más populares jamás creados. Desarrollado por la legendaria Evolution Gaming, este título combina una enorme rueda de dinero con una increíble ronda de bonificación 3D en realidad aumentada protagonizada por el propio Sr. Monopoly. Tanto si quieres jugar a Monopoly Live online como si solo quieres consultar las estadísticas más recientes del juego, aquí encontrarás toda la información que necesitas.",
    
      tableFeature: "Característica",
      tableDetails: "Detalles",
      gameNameLabel: "Nombre del juego",
      providerLabel: "Proveedor",
      gameTypeLabel: "Tipo de juego",
      rtpLabel: "RTP",
      maxWinLabel: "Ganancia máxima",
    
      gameTypeValue: "Game Show de Casino en Vivo",
      rtpValue: "Hasta 96.23%",
      maxWinValue: "$500,000 (o el equivalente en multiplicador)",
    
      sectionsTitle: "Características principales de Monopoly Live",
    
      wheelTitle: "La rueda de dinero (juego base)",
      wheelText: "Es el núcleo de la experiencia de Monopoly casino en vivo. Un presentador real gira una enorme rueda vertical con 54 segmentos. Los jugadores apuestan a los números (1, 2, 5, 10) para ganar pagos instantáneos según el número en el que se detenga la rueda.",
    
      chanceTitle: "El segmento 'Chance'",
      chanceText: "Caer en un segmento 'Chance' otorga a los jugadores un premio instantáneo en efectivo o un emocionante bono multiplicador. Si cae un multiplicador, el presentador vuelve a girar la rueda y tu próxima ganancia se multiplica.",
    
      bonus3dTitle: "La ronda de bonificación 3D",
      bonus3dText: "Es el punto culminante del juego Monopoly Live. Si apuestas a '2 ROLLS' o '4 ROLLS' y la rueda se detiene ahí, el Sr. Monopoly entra en un mundo 3D de juego de mesa, recogiendo premios, multiplicadores y evitando impuestos.",
    
      howToPlayTitle: "Cómo jugar a Monopoly Live",
      howToPlayIntro: "Empezar en un casino online con Monopoly Live es muy sencillo. Solo tienes que seguir estos pasos:",
      step1: "Haz tus apuestas: tienes una breve ventana de apuesta para colocar tus fichas en 1, 2, 5, 10, '2 Rolls' o '4 Rolls'.",
      step2: "El giro: el crupier en vivo gira la rueda. Puedes ver Monopoly Live mientras la rueda se va frenando.",
      step3: "El pago: si la rueda se detiene en tu número, ganas. Si cae en un juego bonus y habías apostado en él, entras en la ronda 3D.",
    
      statsTitle: "Estadísticas, resultados y trackers de Monopoly Live",
      statsText1: "Para muchos entusiastas serios del iGaming, seguir el juego es tan importante como jugarlo. Como se trata de un juego de probabilidad, muchos usuarios utilizan un tracker de Monopoly Live para seguir sus tendencias.",
      statsText2: "Al analizar las estadísticas de Monopoly Live, puedes ver la frecuencia de las rondas bonus, los multiplicadores medios y los números fríos y calientes. Consultar el historial de Monopoly Live te permite revisar los resultados de Monopoly Live de hoy. Aunque los resultados pasados no garantizan resultados futuros, observar un tablero tipo casino score de Monopoly Live puede dar a los jugadores una mejor idea de cómo se está comportando la rueda durante la sesión. Recuerda siempre jugar de forma responsable, independientemente de lo que muestren los resultados de Monopoly Live.",
      statsNote: "Nota: si te gusta este formato, también puedes echar un vistazo a Monopoly Big Baller live, un spin-off estilo bingo que también ofrece emocionantes resultados de Monopoly Big Baller en vivo.",
    
      freePlayTitle: "¿Se puede jugar gratis?",
      freePlayText: "Muchos jugadores buscan una demo de Monopoly Live o una opción de Monopoly Live gratis. Como se trata de un juego de estudio en vivo con crupieres reales, no existe una demo jugable con dinero ficticio. Sin embargo, puedes entrar en cualquier casino online con Monopoly Live, abrir el juego y simplemente ver el stream de Monopoly Live gratis para aprender las reglas antes de apostar dinero real.",
    
      faqTitle: "Preguntas frecuentes (FAQ)",
      faq: [
        {
          q: "¿Dónde puedo encontrar resultados y estadísticas de Monopoly Live?",
          a: "Puedes encontrar las estadísticas de Monopoly Live directamente dentro de la interfaz del juego, donde se muestran los segmentos ganadores más recientes. Para un análisis más profundo, muchos sitios externos de seguimiento de casino ofrecen un historial completo de Monopoly Live."
        },
        {
          q: "¿Existe una app de casino para Monopoly Live?",
          a: "No existe una app independiente de Monopoly Live apk. Sin embargo, puedes jugar perfectamente en móvil descargando la app oficial de cualquier casino con licencia que ofrezca títulos de Evolution Gaming."
        },
        {
          q: "¿Cuál es la diferencia entre este juego y Monopoly Big Baller?",
          a: "Aunque ambos cuentan con el Sr. Monopoly y rondas bonus en 3D, el juego original utiliza una rueda de dinero giratoria, mientras que live casino Monopoly Big Baller utiliza una máquina de extracción de bolas estilo bingo."
        },
        {
          q: "¿Cómo entro en el juego bonus 3D?",
          a: "Para participar en el juego de mesa 3D, debes apostar en las casillas de '2 ROLLS' o '4 ROLLS'. Si la rueda se detiene en uno de esos segmentos, comienza la ronda bonus."
        },
        {
          q: "¿Puedo interactuar con el crupier en vivo?",
          a: "Sí. El juego incluye un chat en vivo de Monopoly casino donde puedes hablar con el presentador y con otros jugadores, haciendo que la experiencia de Monopoly en vivo sea mucho más social y entretenida."
        },
        {
          q: "¿Los resultados del juego están manipulados?",
          a: "No. Monopoly Live de Evolution Gaming está fuertemente auditado y cuenta con licencias de las principales autoridades del juego. La rueda es completamente física y aleatoria, lo que garantiza que cada resultado de Monopoly Live sea 100% justo."
        }
      ]
    },
    monopolyStatsExtra: {
      diceRollsLowTitle: "Tiradas de Dados de Nivel Bajo",
      diceRollsMidTitle: "Tiradas de Dados de Nivel Medio",
      diceRollsHighTitle: "Tiradas de Dados de Nivel Alto",
      trackedMeta: "Últimas 6 horas • 258 tiradas",
    
      boardMovesTitle: "Estadísticas de Movimientos del Tablero",
      bonusGameStats: "Estadísticas del Juego Bonus",
      doublesRolled: "Dobles Obtenidos",
      avgBoardRolls: "Prom. de Tiradas por Juego Bonus",
    
      landingStatsTitle: "Estadísticas de Casillas de MONOPOLY Big Baller",
    
      bestIndividualWinsTitle: "Mejores Ganancias Individuales",
      latestTopMultipliersTitle: "Multiplicadores Máximos Recientes",
    
      finished: "Finalizado",
      player: "Jugador",
      wonAmount: "Cantidad Ganada",
      multiplier: "Multiplicador",
      bigWinClip: "Clip de Gran Premio",
      bonusRound: "Ronda Bonus",
      watchClip: "Ver Clip",
      biggestWinsGallery: "Galería de Grandes Ganancias"
    },
    seo: {
      crazytime: {
        title: "Estadísticas de Crazy Time – Resultados en Vivo y Rastreador de Multiplicadores",
        description: "Estadísticas en vivo de Crazy Time actualizadas en tiempo real. Sigue los resultados de la rueda, rondas bonus y multiplicadores de hasta 2000x. Usa los datos para construir tu estrategia ganadora. ¡Compruébalo ahora!"
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

    },
    nav: {
      home: "Inicio",
      liveGames: "Juegos en vivo"
    },
    home: {
      heroTitleBefore: "Sigue",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Historial de tiradas en tiempo real, estadísticas y grandes ganancias para tus juegos de casino en vivo favoritos. 100% gratis y sin necesidad de cuenta.",
      liveGames: "Juegos en vivo",
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
      privacy: "Política de privacidad",
      terms: "Términos del servicio",
      contact: "Contáctanos",
      description: "Sigue juegos de casino en vivo en tiempo real. Historial de tiradas, estadísticas y grandes ganancias."
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
    seo: {
      crazytime: {
        title: "Statistiche Crazy Time – Risultati Live e Tracker dei Moltiplicatori",
        description: "Statistiche live di Crazy Time aggiornate in tempo reale. Monitora risultati della ruota, round bonus e moltiplicatori fino a 2000x. Usa i dati per costruire la tua strategia vincente. Controlla ora!"
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

    },
    nav: { home: "Home", liveGames: "Giochi live" },
    home: {
      heroTitleBefore: "Traccia",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Cronologia spin in tempo reale, statistiche e vincite più grandi per i tuoi game show da casinò live preferiti.",
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
      privacy: "Privacy Policy",
      terms: "Termini di servizio",
      contact: "Contatti",
      description: "Traccia i game show da casinò live in tempo reale."
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
    seo: {
      crazytime: {
        title: "Crazy Time Statistiken – Live-Ergebnisse & Multiplikator-Tracker",
        description: "Crazy Time Live-Statistiken in Echtzeit aktualisiert. Verfolge Radergebnisse, Bonusrunden und Multiplikatoren bis zu 2000x. Nutze Daten, um deine Gewinnstrategie aufzubauen. Jetzt ansehen!"
      }
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
      heroTitleBefore: "Verfolge",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Echtzeit-Spinverlauf, Statistiken und größte Gewinne für deine Lieblings-Live-Casino-Games.",
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
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      contact: "Kontakt",
      description: "Verfolge Live-Casino-Games in Echtzeit."
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
    seo: {
      crazytime: {
        title: "Crazy Time Statistieken – Live Resultaten & Multiplier Tracker",
        description: "Crazy Time live statistieken in realtime bijgewerkt. Volg wielresultaten, bonusrondes en multipliers tot 2000x. Gebruik data om je winnende strategie op te bouwen. Bekijk het nu!"
      }
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
      heroTitleBefore: "Volg",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Realtime spingeschiedenis, statistieken en grootste winsten voor je favoriete live casinospellen.",
      liveGames: "Live spellen",
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
      privacy: "Privacybeleid",
      terms: "Servicevoorwaarden",
      contact: "Contact",
      description: "Volg live casinospellen in realtime."
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
    seo: {
      crazytime: {
        title: "Statistiques Crazy Time – Résultats en Direct et Suivi des Multiplicateurs",
        description: "Statistiques Crazy Time en direct mises à jour en temps réel. Suivez les résultats de la roue, les tours bonus et les multiplicateurs jusqu'à 2000x. Utilisez les données pour construire votre stratégie gagnante. Consultez maintenant !"
      }
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
      heroTitleBefore: "Suivez",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Historique des spins en temps réel, statistiques et plus gros gains pour vos jeux de casino en direct préférés.",
      liveGames: "Jeux en direct",
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
      privacy: "Politique de confidentialité",
      terms: "Conditions d’utilisation",
      contact: "Contact",
      description: "Suivez les jeux de casino en direct en temps réel."
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
    seo: {
      crazytime: {
        title: "Estatísticas do Crazy Time – Resultados ao Vivo e Rastreador de Multiplicadores",
        description: "Estatísticas ao vivo do Crazy Time atualizadas em tempo real. Acompanhe resultados da roda, rodadas de bônus e multiplicadores de até 2000x. Use os dados para construir sua estratégia vencedora. Confira agora!"
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
    },
    nav: { home: "Início", liveGames: "Jogos ao vivo" },
    home: {
      heroTitleBefore: "Acompanhe",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "Histórico de giros em tempo real, estatísticas e maiores vitórias dos seus jogos de cassino ao vivo favoritos.",
      liveGames: "Jogos ao vivo",
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
      privacy: "Política de privacidade",
      terms: "Termos de serviço",
      contact: "Contato",
      description: "Acompanhe jogos de cassino ao vivo em tempo real."
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
    seo: {
      crazytime: {
        title: "إحصائيات Crazy Time – النتائج المباشرة ومتتبع المضاعفات",
        description: "إحصائيات Crazy Time المباشرة يتم تحديثها في الوقت الفعلي. تتبع نتائج العجلة وجولات البونص والمضاعفات حتى 2000x. استخدم البيانات لبناء استراتيجيتك الرابحة. تحقق الآن!"
      }
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
      heroTitleBefore: "تتبع",
      heroTitleAccent: "Live Casino",
      heroTitleAfter: "Games",
      heroText: "سجل اللفات والإحصائيات وأكبر الأرباح في الوقت الحقيقي لألعاب الكازينو المباشرة المفضلة لديك.",
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
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      contact: "اتصل بنا",
      description: "تتبع ألعاب الكازينو المباشرة في الوقت الحقيقي."
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