const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false, // вимикає автовідкриття тесту після зміни символів.
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl:'https://automationteststore.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
