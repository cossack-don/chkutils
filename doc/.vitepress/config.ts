import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Chkutils",
  description: "npm package",
  themeConfig: {
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: 'Quick Start and Philosophy',
        items: [
          { text: 'Quick-Start', link: '/src/quick-start' },
          { text: 'Philosophy', link: '/src/philosophy' },
        ]
      },
      {
        text: 'Checks',
        items: [
          { text: 'isTrue', link: '/src/checks/isTrue' },
          { text: 'isFalse', link: '/src/checks/isFalse' },
          { text: 'isArray', link: '/src/checks/isArray' },
          { text: 'isDef', link: '/src/checks/isDef' },
          { text: 'isEmptyArray', link: '/src/checks/isEmptyArray' },
          { text: 'isEmptyObject', link: '/src/checks/isEmptyObject' },
          { text: 'isPromise', link: '/src/checks/isPromise' },
          { text: 'isUnDef', link: '/src/checks/isUnDef' },
        ]
      },
      {
        text: 'SCSS',
        items: [
          { text: 'Mixin Flex Box', link: '/src/scss/mixinFlexBox' },
          { text: 'Mixin Indents', link: '/src/scss/mixinIndents' },
          { text: 'Mixin Short Text', link: '/src/scss/mixinShortText' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/cossack-don/chkutils' }
    ]
  }
})
