import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Python Mastery Documentation",
  description: "Complete Python mastery materials for beginners - from basics to Excel automation",
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#8b5fbf' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }]
  ],

  themeConfig: {
    logo: '🐍',
    siteTitle: 'Python Mastery',
    
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Sessions', link: '/session1' },
      { text: 'Quick Reference', link: '/quick-reference' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        collapsed: false,
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'Quick Reference', link: '/quick-reference' }
        ]
      },
      {
        text: 'Training Sessions',
        collapsed: false,
        items: [
          { text: '🌟 Session 1: Python Fundamentals', link: '/session1' },
          { text: '🧠 Session 2: Smart Decision Making', link: '/session2' },
          { text: '🔄 Session 3: Loops & Automation', link: '/session3' },
          { text: '📊 Session 4: Data Management', link: '/session4' },
          { text: '📈 Session 5: Excel Automation', link: '/session5' },
          { text: '🚀 Session 6: Final Project', link: '/session6' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/python/cpython' }
    ],

    footer: {
      message: 'Built with 💜 for Ana\'s Python journey',
      copyright: 'Copyright © 2024 Python Mastery Training • Made with VitePress'
    },

    editLink: {
      pattern: 'https://github.com/your-repo/edit/main/docs/:path'
    },

    search: {
      provider: 'local'
    }
  }
})
