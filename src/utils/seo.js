function jsonLdScript(schemaObject) {
    return `<script type="application/ld+json">${JSON.stringify(schemaObject)}</script>`;
  }
  
  function createBreadcrumbSchema({ lang, game }) {
    const baseUrl = "https://example.com";
    const homeUrl = lang === "en" ? `${baseUrl}/` : `${baseUrl}/${lang}/`;
    const gameUrl = lang === "en"
      ? `${baseUrl}/${game.id}/`
      : `${baseUrl}/${lang}/${game.id}/`;
  
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: homeUrl
        },
        {
          "@type": "ListItem",
          position: 2,
          name: game.name,
          item: gameUrl
        }
      ]
    };
  }
  
  function createFaqSchema(faqItems = []) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a
        }
      }))
    };
  }
  
  function createGamePageSchemas({ lang, game, t }) {
    const schemas = [];
    const breadcrumbSchema = createBreadcrumbSchema({ lang, game });
    schemas.push(jsonLdScript(breadcrumbSchema));
  
    if (game.id === "crazytime" && t.crazytimeReview?.faq?.length) {
      const faqSchema = createFaqSchema(t.crazytimeReview.faq);
      schemas.push(jsonLdScript(faqSchema));
    }
  
    return schemas.join("\n");
  }
  
  module.exports = {
    jsonLdScript,
    createBreadcrumbSchema,
    createFaqSchema,
    createGamePageSchemas
  };