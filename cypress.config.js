const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'nqiqeq',
  e2e: {
    setupNodeEvents(on, config) {
      projectId: "nqiqeq"
    },
  },
});
