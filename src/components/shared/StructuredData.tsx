export function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://dinecastlerock.co/#website",
        "url": "https://dinecastlerock.co/",
        "name": "Dine Castle Rock",
        "description": "Castle Rock's premier dining directory — restaurants, bars, breweries, cafes, and eateries in Castle Rock, Colorado.",
        "inLanguage": "en-US",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://dinecastlerock.co/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://dinecastlerock.co/#org",
        "name": "Dine Castle Rock",
        "url": "https://dinecastlerock.co/",
        "description": "Comprehensive dining and restaurant directory for Castle Rock, Colorado. Part of the Castle Rock Network.",
        "email": "hello@dinecastlerock.co",
        "areaServed": {
          "@type": "City",
          "name": "Castle Rock",
          "containedInPlace": {
            "@type": "State",
            "name": "Colorado"
          }
        },
        "sameAs": [
          "https://visitcastlerock.co/",
          "https://shopcastlerock.co/"
        ]
      },
      {
        "@type": "ItemList",
        "@id": "https://dinecastlerock.co/#restaurant-list",
        "name": "Castle Rock Restaurant Directory",
        "description": "A curated list of restaurants, bars, breweries, cafes, and eateries in Castle Rock, Colorado.",
        "url": "https://dinecastlerock.co/",
        "numberOfItems": 66,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Restaurants in Castle Rock",
            "url": "https://dinecastlerock.co/restaurants"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Breweries in Castle Rock",
            "url": "https://dinecastlerock.co/breweries"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Bars in Castle Rock",
            "url": "https://dinecastlerock.co/bars"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Coffee Shops in Castle Rock",
            "url": "https://dinecastlerock.co/coffee"
          },
          {
            "@type": "ListItem",
            "position": 5,
            "name": "Dessert in Castle Rock",
            "url": "https://dinecastlerock.co/dessert"
          },
          {
            "@type": "ListItem",
            "position": 6,
            "name": "Food Trucks in Castle Rock",
            "url": "https://dinecastlerock.co/food-trucks"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://dinecastlerock.co/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where can I eat in Castle Rock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Castle Rock has a diverse dining scene with 66+ restaurants, bars, breweries, and cafes. Popular areas include Downtown Castle Rock, The Outlets at Castle Rock, The Promenade, and Meadows Parkway. Browse our full directory at dinecastlerock.co to find restaurants by category, cuisine, or neighborhood."
            }
          },
          {
            "@type": "Question",
            "name": "What are the best restaurants in Castle Rock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Castle Rock's top-rated dining options span a variety of cuisines and styles. The Dine Castle Rock directory features highly rated restaurants, breweries, bars, and cafes — all locally curated and reviewed. Visit dinecastlerock.co/restaurants to see trending and top-rated picks."
            }
          },
          {
            "@type": "Question",
            "name": "Are there family-friendly restaurants in Castle Rock?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Castle Rock has many family-friendly dining options with kids menus, casual atmospheres, and activities nearby. Browse our family-friendly dining guide at dinecastlerock.co/guides/family-friendly for curated recommendations perfect for families visiting or living in Castle Rock, Colorado."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      // This content is static hardcoded schema.org data, not user input — safe to use dangerouslySetInnerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
