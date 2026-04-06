const fs = require("fs");
const path = require("path");
const { createGamePageSchemas } = require("./src/utils/seo");


const {
  SUPPORTED_LANGS,
  DEFAULT_LANG,
  GAMES
} = require("./src/data/site-data");

const { getTranslation, buildPath, getDir } = require("./src/utils/helpers");
const { renderLayout } = require("./src/templates/layout.js");
const { renderHomePage } = require("./src/templates/home");
const { renderGamePage } = require("./src/templates/game");

const DIST_DIR = path.join(__dirname, "dist");
const PUBLIC_DIR = path.join(__dirname, "public");

function removeDir(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function copyDir(src, dest) {
  ensureDir(dest);

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function writeFile(targetPath, content) {
  ensureDir(path.dirname(targetPath));
  fs.writeFileSync(targetPath, content, "utf8");
}

function createHreflangs(pageType, gameId = null) {
  return SUPPORTED_LANGS.map((lang) => {
    const href = `https://example.com${buildPath(lang, pageType, gameId)}`;
    return `<link rel="alternate" hreflang="${lang}" href="${href}" />`;
  });
}

function renderHomeHtml(lang) {
  const t = getTranslation(lang);
  const body = renderHomePage({
    lang,
    t,
    games: GAMES,
    supportedLangs: SUPPORTED_LANGS
  });
  return renderLayout({
    lang,
    dir: getDir(lang),
    title: "Casino Score live — Home",
    description: t.home.heroText,
    canonical: `https://example.com${buildPath(lang, "home")}`,
    hreflangs: createHreflangs("home"),
    body
  });
}
function renderGameHtml(lang, game) {
  const t = getTranslation(lang);
  const body = renderGamePage({ lang, t, game });
  const schema = createGamePageSchemas({ lang, game, t });

  return renderLayout({
    lang,
    dir: getDir(lang),
    title: `${game.name} ${t.gamePage.statisticsTitleSuffix}`,
    description: `${t.gamePage.subtitlePrefix} ${game.name}`,
    canonical: `https://example.com${buildPath(lang, "game", game.id)}`,
    hreflangs: createHreflangs("game", game.id),
    body,
    schema
  });
}

function getOutputPath(lang, routeType, gameId = null) {
  const langPrefix = lang === DEFAULT_LANG ? "" : lang;

  if (routeType === "home") {
    return langPrefix
      ? path.join(DIST_DIR, langPrefix, "index.html")
      : path.join(DIST_DIR, "index.html");
  }

  if (routeType === "game" && gameId) {
    return langPrefix
      ? path.join(DIST_DIR, langPrefix, gameId, "index.html")
      : path.join(DIST_DIR, gameId, "index.html");
  }

  return path.join(DIST_DIR, "index.html");
}

function buildSite() {
  console.log("Cleaning dist...");
  removeDir(DIST_DIR);
  ensureDir(DIST_DIR);

  console.log("Copying public assets...");
  copyDir(PUBLIC_DIR, DIST_DIR);

  for (const lang of SUPPORTED_LANGS) {
    console.log(`Building home page for ${lang}...`);
    const homeHtml = renderHomeHtml(lang);
    const homePath = getOutputPath(lang, "home");
    writeFile(homePath, homeHtml);

    for (const game of GAMES) {
      console.log(`Building game page ${game.id} for ${lang}...`);
      const gameHtml = renderGameHtml(lang, game);
      const gamePath = getOutputPath(lang, "game", game.id);
      writeFile(gamePath, gameHtml);
    }
  }

  console.log("Build complete.");
}

buildSite();