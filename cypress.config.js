import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  viewportWidth: 1280,
  viewportHeight: 720,

  component: {
    devServer: {
      bundler: "vite",
    },
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}'
  },
});
