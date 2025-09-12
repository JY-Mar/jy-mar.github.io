import { defineConfig } from 'vitepress'
import nav from './navigation/nav'
import sidebar from './navigation/sidebar'
import socialLinks from './navigation/socialLinks'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Scat Blog',
  description: 'My Blog',
  lang: 'zh-CN',
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN'
    },
    en: {
      label: 'English',
      lang: 'en'
    }
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/avatar.png',
      alt: 'Scat logo'
    },
    nav,
    sidebar,
    socialLinks,
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2018-present Scat Studio'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
