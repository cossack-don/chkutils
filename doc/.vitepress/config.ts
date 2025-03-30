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
          { text: 'isNull', link: '/src/checks/isNull' },
          { text: 'isDef', link: '/src/checks/isDef' },
          { text: 'isUnDef', link: '/src/checks/isUnDef' },
          { text: 'isObject', link: '/src/checks/isObject' },
          { text: 'isArray', link: '/src/checks/isArray' },
          { text: 'isEmptyArray', link: '/src/checks/isEmptyArray' },
          { text: 'isEmptyObject', link: '/src/checks/isEmptyObject' },
          { text: 'isMap', link: '/src/checks/isMap' },
          { text: 'isSet', link: '/src/checks/isSet' },
          { text: 'isDate', link: '/src/checks/isDate' },
          { text: 'isFunction', link: '/src/checks/isFunction' },
          { text: 'isSymbol', link: '/src/checks/isSymbol' },
          { text: 'isPromise', link: '/src/checks/isPromise' },
        ]
      },
      {
        text: 'Helpers',
        items: [
          { text: 'returnDefaultField', link: '/src/helpers/returnDefaultField' },
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
