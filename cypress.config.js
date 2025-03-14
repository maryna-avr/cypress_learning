const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    baseUrl: 'https://app.trainual-stg.com/040a5151-9c69-4530-870d-3a70745a94f3/users/sign_in',
  },
})
