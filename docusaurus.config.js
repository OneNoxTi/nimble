const config = {
  title: 'Nimble',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',
  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'uk',
    locales: ['uk'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        }
      }
    ]
  ],

  themeConfig: {
    navbar: {
      title: 'Nimble',
      items: [],
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      }
    }
  },

  plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],

  markdown: {
    mermaid: true,
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
          indexDocs: true,
          indexPages: true,
          language: ["en"],
          hashed: true,
          highlightSearchTermsOnTargetPage: true,
          removeDefaultStemmer: true,
          removeDefaultStopWordFilter: true,
          explicitSearchResultPath: true
      }
    ]
  ]
};

export default config;
