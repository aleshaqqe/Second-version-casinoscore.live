const {
  weightedRandom,
  isBonusSegment,
  randomAround,
  formatDate,
  randomPlayerName
} = require("../utils/render-helpers");




function getMultiplierPool(game, bonus) {
  if (game.id === "dreamcatcher") {
    return bonus
      ? [7, 14, 21, 35, 70, 140, 280, 343]
      : [1, 2, 3, 5, 7, 10];
  }

  return bonus
    ? [5, 10, 15, 20, 25, 50, 100, 200, 500]
    : [1, 2, 3, 5];
}

function getWinnersCount(game) {
  return game.id === "dreamcatcher"
    ? Math.floor(Math.random() * 100) + 1
    : Math.floor(Math.random() * 2000) + 100;
}
// ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ ДЛЯ MEGA BALL
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickUniqueBalls(count, min = 1, max = 51) {
  const pool = [];
  for (let i = min; i <= max; i += 1) {
    pool.push(i);
  }
  for (let i = pool.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, count).sort((a, b) => a - b);
}

function getRandomMegaMultiplier() {
  return ["5x", "10x", "15x", "20x", "25x", "50x", "100x"][Math.floor(Math.random() * 7)];
}
function generateSpinData(game, count = 80) {
  const data = [];
  const now = Date.now();

  for (let i = 0; i < count; i += 1) {
    const segIdx = weightedRandom(game.segProbs || [100]);
    const segment = game.segments?.[segIdx] || game.name;
    const bonus = isBonusSegment(segIdx, segment);
    const multiplierPool = getMultiplierPool(game, bonus);
    const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
    const winners = getWinnersCount(game);
    const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));
    const slotResult =
      game.segments?.[Math.floor(Math.random() * Math.min(4, game.segments.length))] ||
      game.name;
      if (game.id === "lightningroulette") {
        const LR_RED_SET = new Set([1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]);
  
        // 1-5 lucky numbers (weighted: 1=5%, 2=15%, 3=50%, 4=20%, 5=10%)
        const luckyCount = weightedRandom([5, 15, 50, 20, 10]) + 1;
        const pool = Array.from({ length: 37 }, (_, idx) => idx); // 0-36
        for (let j = pool.length - 1; j > 0; j--) {
          const k = Math.floor(Math.random() * (j + 1));
          [pool[j], pool[k]] = [pool[k], pool[j]];
        }
        const LR_MULTS = [50, 100, 150, 200, 250, 300, 350, 400, 500];
        const LR_MULT_WEIGHTS = [30, 30, 12, 8, 5, 4, 3, 3, 5];
        const luckyNumbers = pool.slice(0, luckyCount).map((num) => ({
          number: num,
          multiplier: LR_MULTS[weightedRandom(LR_MULT_WEIGHTS)]
        }));
  
        const spinResult = Math.floor(Math.random() * 37);
        const luckyHit   = luckyNumbers.find((l) => l.number === spinResult) || null;
  
        const color = spinResult === 0
          ? "green"
          : LR_RED_SET.has(spinResult) ? "red" : "black";
  
        data.push({
          time: new Date(now - i * 65000),
          spinResult,
          color,
          luckyNumbers,
          hitMultiplier: luckyHit ? luckyHit.multiplier : null,
          isBonus: luckyHit !== null
        });
        continue;
      }
  
  
      if (game.id === "megaball") {
        // 20 уникальных шаров
        const drawnBalls = pickUniqueBalls(20, 1, 51);
        
        // Mega Ball (всегда есть)
        const megaBallNumber = randomInt(1, 25);
        const megaBallMultiplier = getRandomMegaMultiplier();
        
        // 2nd Mega Ball (редко, 3%)
        const hasSecondMegaBall = Math.random() < 0.03;
        let secondMegaBallNumber = null;
        let secondMegaBallMultiplier = null;
        
        if (hasSecondMegaBall) {
          secondMegaBallNumber = randomInt(1, 25);
          while (secondMegaBallNumber === megaBallNumber) {
            secondMegaBallNumber = randomInt(1, 25);
          }
          secondMegaBallMultiplier = getRandomMegaMultiplier();
        }
      
        const payout = Math.round(Math.random() * 49500 + 500);
      
        data.push({
          time: new Date(now - i * 65000),
          megaBallNumber,
          megaBallMultiplier,
          secondMegaBallNumber,
          secondMegaBallMultiplier,
          balls: drawnBalls, // все 20 шаров
          payout,
          isBonus: hasSecondMegaBall
        });
        continue;
      }

    data.push({
      time: new Date(now - i * 65000),
      slotResult,
      spinResult: segment,
      segIdx,
      multiplier,
      winners,
      payout,
      isBonus: bonus
    });
  }

  return data;
}

function generateTemperatureData(game) {
  const items = (game.segments || []).map((segment, index) => {
    const expected = game.segProbs?.[index] || 0;
    const diff = Number((Math.random() * 4 - 2).toFixed(2));
    const actual = Number(Math.max(0, expected + diff).toFixed(2));
    const spinsSince = Math.floor(Math.random() * 30);

    let tempClass = "temp-warm";
    let iconClass = "fa-temperature-half";

    if (diff > 0.5) {
      tempClass = "temp-hot";
      iconClass = "fa-fire";
    } else if (diff < -0.5) {
      tempClass = "temp-cold";
      iconClass = "fa-snowflake";
    }

    return {
      segment,
      shortSegment: segment.length > 3 ? segment.slice(0, 3) : segment,
      color: game.segColors?.[index] || "#6b7280",
      actual,
      diff,
      spinsSince,
      tempClass,
      iconClass
    };
  });

  if (game.id === "monopoly") {
    const monopolyOrder = ["1", "5", "2 Rolls", "2", "10", "4 Rolls", "Chance"];

    return monopolyOrder
      .map((name) => items.find((item) => item.segment === name))
      .filter(Boolean);
  }

  return items;
}

function countDistribution(game, spinData) {
  if (game.id === "megaball") {
    const segments = game.segments || [];
    const countsMap = Object.fromEntries(segments.map((segment) => [segment, 0]));

    (spinData || []).forEach((item) => {
      const result =
        item.spinResult ||
        item.resultCategory ||
        item.outcome ||
        item.hitType ||
        "";

      if (countsMap[result] !== undefined) {
        countsMap[result] += 1;
      }
    });

    const total = Object.values(countsMap).reduce((sum, count) => sum + count, 0);

    return segments.map((segment, index) => ({
      label: segment,
      color: game.segColors?.[index] || "#6b7280",
      percent: total
        ? Number(((countsMap[segment] / total) * 100).toFixed(2))
        : Number((game.segProbs?.[index] || 0).toFixed(2))
    }));
  }

  const counts = (game.segments || []).map(
    (segment) => (spinData || []).filter((item) => item.spinResult === segment).length
  );
  const total = counts.reduce((sum, count) => sum + count, 0);

  return (game.segments || []).map((segment, index) => ({
    label: segment,
    color: game.segColors?.[index] || "#6b7280",
    percent: total ? Number(((counts[index] / total) * 100).toFixed(2)) : 0
  }));
}

function generateStatsSummary(game, spinData) {
  const bonusCount = spinData.filter((item) => item.isBonus).length;
  const biggestMultiplier = spinData.length
    ? Math.max(...spinData.map((item) => item.multiplier))
    : 0;
  const totalPayout = spinData.reduce((sum, item) => sum + item.payout, 0);
  const avgPayout = spinData.length ? Math.round(totalPayout / spinData.length) : 0;
  const rtp = ((game.expectedRtp || 96) + (Math.random() * 1.2 - 0.6)).toFixed(2);

  return {
    totalSpinsToday: 700 + Math.floor(Math.random() * 400),
    bonusRoundsToday: bonusCount,
    biggestMultToday: `${biggestMultiplier.toLocaleString("en-US")}x`,
    avgPayoutToday: `$${avgPayout.toLocaleString("en-US")}`,
    rtp: `${rtp}%`
  };
}

function generateBigWins(game) {
  const wins = [];

  for (let i = 0; i < 9; i += 1) {
    const segIdx = Math.floor(Math.random() * (game.segments?.length || 1));

    wins.push({
      segment: game.segments?.[segIdx] || game.name,
      color: game.segColors?.[segIdx] || "#8b5cf6",
      multiplier: [100, 200, 500, 1000, 2000, 2500, 5000, 10000, 25000][i],
      time: new Date(Date.now() - Math.floor(Math.random() * 86400000 * 7)),
      payout: Math.floor(Math.random() * 500000) + 10000
    });
  }

  return wins.sort((a, b) => b.multiplier - a.multiplier);
}

function generateCrazyFlapperStats(t) {
  return [
    {
      label: t.crazytimeStatsExtra?.yellow || "Yellow",
      color: "#facc15",
      value: randomAround(34.44, 2.4, 10),
      avg: 50.82,
      diff: randomAround(-32.22, 4, -60)
    },
    {
      label: t.crazytimeStatsExtra?.blue || "Blue",
      color: "#38bdf8",
      value: randomAround(21.67, 2.2, 8),
      avg: 51.34,
      diff: randomAround(-57.8, 4, -80)
    },
    {
      label: t.crazytimeStatsExtra?.green || "Green",
      color: "#10b981",
      value: randomAround(32.22, 2.5, 10),
      avg: 50.03,
      diff: randomAround(-35.59, 4, -60)
    }
  ];
}

function generateCrazyCoinFlipColorStats(t) {
  return [
    {
      label: t.crazytimeStatsExtra?.red || "Red",
      color: "#ef4444",
      avgMultiplier: randomAround(16.16, 1.3, 8),
      diff: randomAround(31.79, 4, -20),
      frequency: randomAround(54.29, 2, 35),
      avgFrequency: 49.72,
      freqDiff: randomAround(9.18, 2, -10)
    },
    {
      label: t.crazytimeStatsExtra?.blue || "Blue",
      color: "#38bdf8",
      avgMultiplier: randomAround(15.13, 1.3, 8),
      diff: randomAround(27.53, 4, -20),
      frequency: randomAround(45.71, 2, 30),
      avgFrequency: 50.28,
      freqDiff: randomAround(-9.08, 2, -20)
    }
  ];
}

function generateCashHuntSymbolsStats() {
  const symbols = ["🎁", "🦆", "🌵", "🐇", "🍎", "⭐", "🃏", "🎯", "🧁"];
  const baseValues = [26.06, 25.62, 25.1, 24.87, 24.77, 24.16, 23.82, 23.77, 21.01];
  const baseDiffs = [4.87, 3.72, 1.21, -0.16, 0.12, -1.87, -4.49, -3.69, -15.25];
  const baseAvg = [24.85, 24.7, 24.8, 24.91, 24.74, 24.62, 24.94, 24.68, 24.79];
  const baseCount = [214, 232, 234, 190, 223, 201, 219, 217, 214];

  return symbols.map((symbol, index) => ({
    symbol,
    value: randomAround(baseValues[index], 1.4, 10),
    diff: randomAround(baseDiffs[index], 1.8, -25),
    avg: baseAvg[index],
    count: baseCount[index] + Math.floor(Math.random() * 11 - 5)
  }));
}

function generateCashHuntRecentMultipliers() {
  const items = [];

  for (let i = 0; i < 99; i += 1) {
    items.push(Number((15 + Math.random() * 20).toFixed(1)));
  }

  items[0] = 50.2;
  items[47] = 15.3;

  return items;
}

function generateCrazyTimeBestBets() {
  return [
    { date: "5 Apr", time: "12:40", result: "Cash Hunt", player: "Wai...", payout: "€61,000", multiplier: "300x" },
    { date: "5 Apr", time: "10:30", result: "Cash Hunt", player: "Pat...", payout: "€50,500", multiplier: "100x" },
    { date: "5 Apr", time: "13:21", result: "Cash Hunt", player: "Jun...", payout: "€49,927", multiplier: "400x" },
    { date: "5 Apr", time: "12:40", result: "Cash Hunt", player: "Han...", payout: "€30,200", multiplier: "300x" },
    { date: "5 Apr", time: "13:21", result: "Cash Hunt", player: "Pat...", payout: "€20,500", multiplier: "400x" }
  ];
}

function generateCrazyTimeLatestMaxMultipliers() {
  return [
    { date: "5 Apr", time: "15:23", result: "Cash Hunt", multiplier: "500x" },
    { date: "5 Apr", time: "13:21", result: "Cash Hunt", multiplier: "400x" },
    { date: "5 Apr", time: "12:40", result: "Cash Hunt", multiplier: "300x" },
    { date: "5 Apr", time: "15:46", result: "Cash Hunt", multiplier: "100x" },
    { date: "5 Apr", time: "15:42", result: "Cash Hunt", multiplier: "100x" }
  ];
}

function generateMonopolyDiceRollStats() {
  return {
    low: [
      { left: 1, right: 1, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 2, hits: 2, total: 73, percent: 2.74 },
      { left: 1, right: 3, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 1, right: 5, hits: 1, total: 73, percent: 1.37 },
      { left: 1, right: 6, hits: 1, total: 73, percent: 1.37 },
      { left: 2, right: 2, hits: 2, total: 73, percent: 2.74 }
    ],
    mid: [
      { left: 2, right: 3, hits: 0, total: 73, percent: 0 },
      { left: 2, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 2, right: 5, hits: 2, total: 73, percent: 2.74 },
      { left: 2, right: 6, hits: 0, total: 73, percent: 0 },
      { left: 3, right: 3, hits: 5, total: 73, percent: 6.85 },
      { left: 3, right: 4, hits: 2, total: 73, percent: 2.74 },
      { left: 3, right: 5, hits: 3, total: 73, percent: 4.11 }
    ],
    high: [
      { left: 3, right: 6, hits: 2, total: 73, percent: 2.74 },
      { left: 4, right: 4, hits: 1, total: 73, percent: 1.37 },
      { left: 4, right: 5, hits: 1, total: 73, percent: 1.37 },
      { left: 4, right: 6, hits: 0, total: 73, percent: 0 },
      { left: 5, right: 5, hits: 2, total: 73, percent: 2.74 },
      { left: 5, right: 6, hits: 5, total: 73, percent: 6.85 },
      { left: 6, right: 6, hits: 5, total: 73, percent: 6.85 }
    ]
  };
}

function generateMonopolyBoardMoveStats() {
  return {
    bonusGameHits: 15,
    totalSpins: 258,
    bonusGamePercent: 5.81,
    doublesHits: 16,
    doublesTotal: 73,
    doublesPercent: 21.92,
    avgBoardRolls: 4.87
  };
}

function generateMonopolyLandingStats() {
  return [
    { label: "Jail", hits: 7, total: 73, percent: 9.59 },
    { label: "KingsCross", hits: 6, total: 73, percent: 8.22 },
    { label: "CoventryStreet", hits: 4, total: 73, percent: 5.48 },
    { label: "ElectricCompany", hits: 4, total: 73, percent: 5.48 },
    { label: "TheStrand", hits: 4, total: 73, percent: 5.48 },
    { label: "Marylebone", hits: 3, total: 73, percent: 4.11 },
    { label: "WhitechapelRoad", hits: 3, total: 73, percent: 4.11 },
    { label: "OrangeChest", hits: 3, total: 73, percent: 4.11 },
    { label: "PentonvilleRoad", hits: 3, total: 73, percent: 4.11 }
  ];
}

function generateMonopolyBestIndividualWins() {
  return [
    { date: "6 Apr", time: "11:08", player: "Pra...", amount: "€13,206", multiplier: "113x" },
    { date: "6 Apr", time: "14:11", player: "은비까...", amount: "€8,658", multiplier: "43x" },
    { date: "6 Apr", time: "09:31", player: "Dec...", amount: "€7,746", multiplier: "92x" },
    { date: "6 Apr", time: "10:01", player: "Iva...", amount: "€7,510", multiplier: "223x" },
    { date: "6 Apr", time: "08:52", player: "mad...", amount: "€5,515", multiplier: "116x" }
  ];
}

function generateMonopolyLatestTopMultipliers() {
  return [
    { date: "6 Apr", time: "10:01", bonusRoundImage: "img/monopoly/bonus-gold.webp", multiplier: "223x" },
    { date: "6 Apr", time: "09:53", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "135x" },
    { date: "6 Apr", time: "11:08", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "113x" },
    { date: "6 Apr", time: "09:31", bonusRoundImage: "img/monopoly/bonus-silver.webp", multiplier: "92x" },
    { date: "6 Apr", time: "12:39", bonusRoundImage: "img/monopoly/bonus-gold.webp", multiplier: "63x" }
  ];
}

function generateDreamCatcherExtraStats(game, spinData) {
  const DREAM_EXTRA_WINDOW = 500;
  const trackedSpins = spinData.slice(0, DREAM_EXTRA_WINDOW);
  const totalSpins = trackedSpins.length;
  const multiplierKeys = ["2x", "7x"];

  const multiplierRows = multiplierKeys.map((key) => {
    const hits = trackedSpins.filter((item) => item.spinResult === key).length;
  
    return {
      label: key,
      hits,
      total: totalSpins,
      sharePercent: totalSpins
        ? Number(((hits / totalSpins) * 100).toFixed(2))
        : 0
    };
  });

    multiplierRows.forEach((row) => {
      row.sharePercent = totalSpins
        ? Number(((row.hits / totalSpins) * 100).toFixed(2))
        : 0;
    });
  const matchHits = trackedSpins.filter((item) => multiplierKeys.includes(item.spinResult)).length;
  const matchPercent = totalSpins
    ? Number(((matchHits / totalSpins) * 100).toFixed(2))
    : 0;
  const noMatchPercent = Number((100 - matchPercent).toFixed(2));

  const bestWins = [...trackedSpins]
    .sort((a, b) => b.payout - a.payout || b.multiplier - a.multiplier)
    .slice(0, 5)
    .map((item) => ({
      date: new Date(item.time).toLocaleDateString("en-US", {
        month: "numeric",
        day: "numeric"
      }),
      time: new Date(item.time).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }),
      outcome: item.spinResult,
      player: randomPlayerName(),
      amount: `€${item.payout.toLocaleString("en-US")}`,
      multiplier: `${item.multiplier}x`,
      segIdx: item.segIdx
    }));

  return {
    totalSpins,
    bestWins,
    multiplierRows,
    matchPercent,
    noMatchPercent
  };
}
function generateLightningRouletteExtraStats() {
  return {
    totalSpins: 5167,
    trackedHours: 72,
    colorStats: [
      { label: "Black", color: "#1a1a1a", percent: 49.12, count: 2538 },
      { label: "Red",   color: "#dc2626", percent: 48.13, count: 2487 },
      { label: "Green", color: "#16a34a", percent: 2.75,  count: 142  }
    ],
    multiplierRows: [
      { label: "50X",  hits: 141, total: 384, sharePercent: 36.72 },
      { label: "100X", hits: 150, total: 384, sharePercent: 39.06 },
      { label: "150X", hits: 32,  total: 384, sharePercent: 8.33  },
      { label: "200X", hits: 39,  total: 384, sharePercent: 10.16 },
      { label: "250X", hits: 0,   total: 384, sharePercent: 0     },
      { label: "300X", hits: 3,   total: 384, sharePercent: 0.78  },
      { label: "350X", hits: 1,   total: 384, sharePercent: 0.26  },
      { label: "400X", hits: 4,   total: 384, sharePercent: 1.04  },
      { label: "500X", hits: 14,  total: 384, sharePercent: 3.65  }
    ],
    numberStats: [
      { number: 0,  percent: 2.73, count: 141, lastSeen: 27,  isLightning: false },
      { number: 1,  percent: 2.61, count: 135, lastSeen: 12,  isLightning: true  },
      { number: 2,  percent: 2.83, count: 146, lastSeen: 13,  isLightning: true  },
      { number: 3,  percent: 2.98, count: 154, lastSeen: 38,  isLightning: false },
      { number: 4,  percent: 2.56, count: 132, lastSeen: 122, isLightning: false },
      { number: 5,  percent: 2.83, count: 146, lastSeen: 10,  isLightning: true  },
      { number: 6,  percent: 2.50, count: 129, lastSeen: 48,  isLightning: false },
      { number: 7,  percent: 2.63, count: 136, lastSeen: 15,  isLightning: true  },
      { number: 8,  percent: 2.52, count: 130, lastSeen: 8,   isLightning: false },
      { number: 9,  percent: 3.00, count: 155, lastSeen: 29,  isLightning: false },
      { number: 10, percent: 2.59, count: 134, lastSeen: 2,   isLightning: true  },
      { number: 11, percent: 2.92, count: 151, lastSeen: 30,  isLightning: false },
      { number: 12, percent: 2.67, count: 138, lastSeen: 17,  isLightning: true  },
      { number: 13, percent: 2.30, count: 119, lastSeen: 0,   isLightning: false },
      { number: 14, percent: 2.67, count: 138, lastSeen: 4,   isLightning: true  },
      { number: 15, percent: 3.08, count: 159, lastSeen: 9,   isLightning: false },
      { number: 16, percent: 2.65, count: 137, lastSeen: 181, isLightning: false },
      { number: 17, percent: 3.37, count: 174, lastSeen: 67,  isLightning: true  },
      { number: 18, percent: 2.52, count: 130, lastSeen: 11,  isLightning: false },
      { number: 19, percent: 2.38, count: 123, lastSeen: 183, isLightning: false },
      { number: 20, percent: 2.63, count: 136, lastSeen: 18,  isLightning: false },
      { number: 21, percent: 2.59, count: 134, lastSeen: 103, isLightning: true  },
      { number: 22, percent: 2.90, count: 150, lastSeen: 5,   isLightning: false },
      { number: 23, percent: 2.83, count: 146, lastSeen: 26,  isLightning: false },
      { number: 24, percent: 2.77, count: 143, lastSeen: 55,  isLightning: false },
      { number: 25, percent: 2.48, count: 128, lastSeen: 14,  isLightning: true  },
      { number: 26, percent: 2.96, count: 153, lastSeen: 20,  isLightning: false },
      { number: 27, percent: 2.77, count: 143, lastSeen: 59,  isLightning: false },
      { number: 28, percent: 2.46, count: 127, lastSeen: 21,  isLightning: false },
      { number: 29, percent: 2.83, count: 146, lastSeen: 16,  isLightning: true  },
      { number: 30, percent: 2.44, count: 126, lastSeen: 56,  isLightning: false },
      { number: 31, percent: 3.14, count: 162, lastSeen: 6,   isLightning: false },
      { number: 32, percent: 2.57, count: 133, lastSeen: 1,   isLightning: false },
      { number: 33, percent: 2.11, count: 109, lastSeen: 128, isLightning: false },
      { number: 34, percent: 2.63, count: 136, lastSeen: 101, isLightning: false },
      { number: 35, percent: 2.69, count: 139, lastSeen: 116, isLightning: false },
      { number: 36, percent: 2.86, count: 148, lastSeen: 3,   isLightning: true  }
    ],
    rowStats: [
      { label: "1st Dozen", percent: 32.64 },
      { label: "2nd Dozen", percent: 32.69 },
      { label: "3rd Dozen", percent: 31.94 }
    ],
    columnStats: [
      { label: "1st Column", percent: 31.34 },
      { label: "2nd Column", percent: 33.64 },
      { label: "3rd Column", percent: 32.29 }
    ]
  };
}

module.exports = {
  generateSpinData,
  generateTemperatureData,
  countDistribution,
  generateStatsSummary,
  generateBigWins,
  generateCrazyFlapperStats,
  generateCrazyCoinFlipColorStats,
  generateCashHuntSymbolsStats,
  generateCashHuntRecentMultipliers,
  generateCrazyTimeBestBets,
  generateCrazyTimeLatestMaxMultipliers,
  generateMonopolyDiceRollStats,
  generateMonopolyBoardMoveStats,
  generateMonopolyLandingStats,
  generateMonopolyBestIndividualWins,
  generateMonopolyLatestTopMultipliers,
  generateDreamCatcherExtraStats,
  generateLightningRouletteExtraStats,
  
};