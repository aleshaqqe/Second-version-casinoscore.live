const {
    weightedRandom,
    isBonusSegment,
    randomAround
  } = require("../utils/render-helpers");
  
  function generateSpinData(game, count = 80) {
    const data = [];
    const now = Date.now();
  
    for (let i = 0; i < count; i += 1) {
      const segIdx = weightedRandom(game.segProbs || [100]);
      const segment = game.segments?.[segIdx] || game.name;
      const bonus = isBonusSegment(segIdx, segment);
      const multiplierPool = bonus ? [5, 10, 15, 20, 25, 50, 100, 200, 500] : [1, 2, 3, 5];
      const multiplier = multiplierPool[Math.floor(Math.random() * multiplierPool.length)];
      const winners = Math.floor(Math.random() * 5000) + 100;
      const payout = Math.round(multiplier * winners * (Math.random() * 2 + 0.5));
      const slotResult = game.segments?.[Math.floor(Math.random() * Math.min(4, game.segments.length))] || game.name;
  
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
    const counts = (game.segments || []).map(
      (segment) => spinData.filter((item) => item.spinResult === segment).length
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
    const biggestMultiplier = Math.max(...spinData.map((item) => item.multiplier));
    const totalPayout = spinData.reduce((sum, item) => sum + item.payout, 0);
    const avgPayout = Math.round(totalPayout / spinData.length);
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
    generateMonopolyLatestTopMultipliers
  };