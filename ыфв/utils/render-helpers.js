function truncateLabel(value, max = 5) {
    if (!value) return "";
    return value.length > max ? value.slice(0, max) : value;
  }
  
  function numberWithCommas(value) {
    return Number(value).toLocaleString("en-US");
  }
  
  function formatTime(date) {
    const d = new Date(date);
    return (
      d.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }) +
      " " +
      d.toLocaleDateString("en-US", { month: "short", day: "numeric" })
    );
  }
  
  function formatDate(date) {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  
  function weightedRandom(probabilities) {
    const total = probabilities.reduce((sum, item) => sum + item, 0);
    let random = Math.random() * total;
  
    for (let i = 0; i < probabilities.length; i += 1) {
      random -= probabilities[i];
      if (random <= 0) return i;
    }
  
    return probabilities.length - 1;
  }
  
  function isBonusSegment(segmentIndex, segmentName) {
    return (
      segmentIndex >= 4 ||
      segmentName.includes("x") ||
      segmentName === "Lightning" ||
      segmentName === "Chance"
    );
  }
  
  function randomAround(base, variance = 3, min = 0) {
    return Math.max(min, Number((base + (Math.random() * variance * 2 - variance)).toFixed(2)));
  }
  
  function randomPlayerName() {
    const names = ["Joe...", "Eri...", "Mar...", "Nik...", "Har...", "Lf", "Dan...", "Zak...", "JMA", "Has..."];
    return names[Math.floor(Math.random() * names.length)];
  }
  
  function euroAmount(min, max) {
    const value = Math.floor(Math.random() * (max - min + 1)) + min;
    return `€${value.toLocaleString("en-US")}`;
  }
  
  module.exports = {
    truncateLabel,
    numberWithCommas,
    formatTime,
    formatDate,
    weightedRandom,
    isBonusSegment,
    randomAround,
    randomPlayerName,
    euroAmount
  };