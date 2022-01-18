module.exports = {
  "locales": [
    "en",
    "ru",
    "uk"
  ],
  "sourceLocale": "en",
  "catalogs": [
    {
      "path": "<rootDir>/locales/{locale}/messages",
      "include": [
        "<rootDir>"
      ],
      "exclude": [
        "<rootDir>/locales",
        "**/node_modules/**",
        ".next/"
      ]
    }
  ],
  "format": "po",
  "fallbackLocales": {
    "en-GB": "en",
    "en-US": "en",
    "uk-UA": "uk",
    "ua": "uk",
    "ua-UA": "uk",
    "ua-RU": "uk",
    "default": "en"
  },
  "orderBy": "origin",
  "rootDir": "."
}
