const GAMES = [
    {
      id: "crazytime",
      name: "Crazy Time",
      provider: "Evolution Gaming",
      color: "#8b5cf6",
      image: { src: "img/crazytime-live-logo.webp", alt: "Crazy Time logo" },
      segments: ["1", "2", "5", "10", "Pachinko", "Cash Hunt", "Coin Flip", "Crazy Time"],
      segColors: ["#3b82f6", "#eab308", "#ec4899", "#8b5cf6", "#f97316", "#22c55e", "#38bdf8", "#ef4444"],
      segProbs: [36.97, 13.14, 7.41, 3.7, 7.41, 7.41, 12.96, 11.0],
      expectedRtp: 96.08,
      segmentImages: {
        "1": "img/crazytime-icons/number-one.webp",
        "2": "img/crazytime-icons/number-two.webp",
        "5": "img/crazytime-icons/number-five.webp",
        "10": "img/crazytime-icons/number-ten.webp",
        "Pachinko": "img/crazytime-icons/pachinko.webp",
        "Cash Hunt": "img/crazytime-icons/cash-hunt-icon.webp",
        "Coin Flip": "img/crazytime-icons/coin-flip-bonus-card.webp",
        "Crazy Time": "img/crazytime-icons/crazy-time-card.webp"
      }
    },
    {
      id: "monopoly",
      name: "Monopoly Live",
      provider: "Evolution Gaming",
      color: "#22c55e",
      image: { src: "img/monopoly-live-casino-logo.webp", alt: "Monopoly Live logo" },
      segments: ["1", "2", "5", "10", "2 Rolls", "4 Rolls", "Chance"],
      segColors: ["#3b82f6", "#eab308", "#ec4899", "#8b5cf6", "#f97316", "#22c55e", "#ef4444"],
      segProbs: [38.89, 12.96, 5.56, 3.7, 12.96, 5.56, 20.37],
      expectedRtp: 95.72
    },
    {
      id: "dreamcatcher",
      name: "Dream Catcher",
      provider: "Evolution Gaming",
      color: "#f59e0b",
      image: { src: "img/dream-catcher-logo.webp", alt: "Dream Catcher logo" },
      segments: ["1", "2", "5", "10", "20", "40", "2x", "7x"],
      segColors: ["#3b82f6", "#eab308", "#ec4899", "#8b5cf6", "#f97316", "#ef4444", "#6b7280", "#22c55e"],
      segProbs: [42.59, 27.78, 12.96, 5.56, 3.7, 1.85, 3.7, 1.85],
      expectedRtp: 96.58
    },
    {
      id: "megaball",
      name: "Mega Ball",
      provider: "Evolution Gaming",
      color: "#3b82f6",
      image: { src: "img/mega-ball-logo.webp", alt: "Mega Ball logo" },
      segments: ["1 Line", "2 Lines", "3+ Lines", "Mega Ball"],
      segColors: ["#3b82f6", "#eab308", "#ec4899", "#8b5cf6"],
      segProbs: [45.0, 30.0, 15.0, 10.0],
      expectedRtp: 95.3
    },
    {
      id: "lightningroulette",
      name: "Lightning Roulette",
      provider: "Evolution Gaming",
      color: "#eab308",
      image: { src: "img/lightning-roulette-logo-casino.webp", alt: "Lightning Roulette logo" },
      segments: ["Red", "Black", "Green", "Lightning"],
      segColors: ["#ef4444", "#1f2937", "#22c55e", "#eab308"],
      segProbs: [48.6, 48.6, 2.7, 0.1],
      expectedRtp: 97.1
    },
    {
      id: "lightningdice",
      name: "Lightning Dice",
      provider: "Evolution Gaming",
      color: "#06b6d4",
      image: { src: "img/lightning-dice-logo.webp", alt: "Lightning Dice logo" },
      segments: ["3", "4-17", "18", "Lightning"],
      segColors: ["#3b82f6", "#eab308", "#ec4899", "#f59e0b"],
      segProbs: [0.46, 99.08, 0.46, 0.1],
      expectedRtp: 96.24
    },
    {
      id: "supersicbo",
      name: "Super Sic Bo",
      provider: "Evolution Gaming",
      color: "#ef4444",
      image: { src: "img/super-sic-bo-casino-logo.webp", alt: "Super Sic Bo logo" },
      segments: ["Small", "Big", "Odd", "Even", "Triple", "Specific"],
      segColors: ["#3b82f6", "#ef4444", "#8b5cf6", "#22c55e", "#f97316", "#eab308"],
      segProbs: [48.61, 48.61, 50.0, 50.0, 2.78, 16.67],
      expectedRtp: 95.02
    },
    {
      id: "coinflip",
      name: "Coin Flip",
      provider: "Evolution Gaming",
      color: "#10b981",
      image: { src: "img/coin-flip-logo.webp", alt: "Coin Flip logo" },
      segments: ["Heads", "Tails", "Gold", "7x", "15x", "25x"],
      segColors: ["#3b82f6", "#ef4444", "#f59e0b", "#8b5cf6", "#22c55e", "#14b8a6"],
      segProbs: [42, 42, 8, 4, 2.5, 1.5],
      expectedRtp: 96.4
    }
  ];
  
  module.exports = { GAMES };