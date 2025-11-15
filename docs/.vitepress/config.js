export default {
  title: "Portfolio Ideas",
  description: "A curation of awesome portfolio to draw inspiration",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Portfolio Ideas",
    nav: [
      { text: "Portfolios", link: "/portfolio" },
      { text: "Guide", link: "/guide" },
      { text: "Contributors", link: "/contributors" },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/Evavic44/portfolio-ideas" }],
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-present Victor Eke | Portfolio Ideas",
    },
    markdown: {
      theme: "material-palenight",
      lineNumbers: true,
    },
  },
};
