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
  <meta name="robots" content="index, follow" />
  <title>${title}</title>
  <meta name="description" content="${description}" />

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
  <script src="/script.js"></script>
</body>
</html>`;
}

module.exports = { renderLayout };