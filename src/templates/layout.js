function renderLayout({
  lang,
  dir,
  title,
  description,
  canonical,
  hreflangs = [],
  body,
  schema = ""
}) {
  return `<!DOCTYPE html>
<html lang="${lang}" dir="${dir}">
<head>
  <base href="/" />
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="robots" content="noindex, nofollow" />
  <title>${title}</title>
  <meta name="description" content="${description}" />
  <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/casino-score-favicon-apple-touch.png" />
  <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/casino-score-favicon-32x32.png" />
  <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/casino-score-favicon-16x16.png" />
  <link rel="manifest" href="/img/favicon/site.webmanifest" />
  <meta name="theme-color" content="#0f0f1a" />

  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
  />
  <link rel="stylesheet" href="/style.css" />
  <link rel="canonical" href="${canonical}" />
  ${hreflangs.join("\n")}
  ${schema}
</head>
<body>
  ${body}
  <script src="/main-script.js"></script>
</body>
</html>`;
}

module.exports = { renderLayout };