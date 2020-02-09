module.exports = {
  siteMetadata: {
    title: `React Cheatsheets`,
    description: `A demo and use case for react-csheets, a react library to build cheat sheets using react`,
    author: `@pfftdammitchris`,
  },
  pathPrefix: '/react-csheets-demo',
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `react-csheets`,
        short_name: `rcs`,
        start_url: `/`,
        background_color: `#335499`,
        theme_color: `#1a6da2`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
