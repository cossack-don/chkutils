import { defineConfig } from 'vitepress'


export default defineConfig({
  title: "Chkutils",
  description: "npm package",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Checks',
        items: [
          { text: 'isTrue', link: '/src/checks/isTrue' },
          { text: 'isFalse', link: '/src/checks/isFalse' },
        ]
      },
      {
        text: 'SCSS',
        items: [
          { text: 'Mixin Flex Box', link: '/src/scss/mixinFlexBox' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cossack-don/chkutils' }
    ]
  }
})
