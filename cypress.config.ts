import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,

  component: {
    devServer: {
      bundler: "vite",
    } as any,

    indexHtmlFile: './src/cypress/support/component-index.html',
    specPattern: './src/cypress/**/*.cy.{js,jsx,ts,tsx}',
    supportFile:"./src/cypress/support/component.ts",
    fixturesFolder:'./src/cypress/fixtures',
    screenshotsFolder:'./src/cypress/screenshots',
    downloadsFolder:'./src/cypress/downloads',
    videosFolder:'./src/cypress/videos',
    fileServerFolder:'./src/cypress/',
  }
});
