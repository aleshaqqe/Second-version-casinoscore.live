const { DEFAULT_LANG, UI_TRANSLATIONS } = require("../data/site-data");

function getLangPrefix(lang) {
  return lang === DEFAULT_LANG ? "" : `/${lang}`;
}

function buildPath(lang, routeType, gameId = null) {
  const prefix = getLangPrefix(lang);

  if (routeType === "home") {
    return prefix ? `${prefix}/` : "/";
  }

  if (routeType === "game" && gameId) {
    return `${prefix}/${gameId}/`;
  }

  return "/";
}

function getTranslation(lang) {
  return UI_TRANSLATIONS[lang] || UI_TRANSLATIONS[DEFAULT_LANG];
}

function getDir(lang) {
  return lang === "ar" ? "rtl" : "ltr";
}

module.exports = {
  getLangPrefix,
  buildPath,
  getTranslation,
  getDir
};