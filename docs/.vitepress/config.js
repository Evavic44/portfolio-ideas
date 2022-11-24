export default {
  title: "Portfolio Ideas",
  description: "A curation of awesome portfolio to draw inspiration",

  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Portfolio Ideas",
    // Navbar Link
    nav: [
      { text: "Portfolios", link: "/portfolio" },
      { text: "Guide", link: "/guide" },
      { text: "Contributors", link: "/contributors" },
      {
        // Dropdown Menu
        text: "Release",
        items: [
          { text: "v0.0.1", link: "/item-1" },
          { text: "v0.0.2", link: "/item-2" },
          { text: "v0.0.3", link: "/item-3" },
        ],
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/evavic44" },
      { icon: "twitter", link: "https://twitter.com/victorekea" },
      { icon: "linkedin", link: "https://linkedin.com/in/victorekeawa" },
    ],
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
