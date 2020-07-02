const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Aplomgo Real Estate`,
    description: `Aplom Go is one of Nigeria’s indigenous Real Estate
                  development Company with a vision to carry out real estate professional services and to
                  deliver competitive real estate solutions to our highly esteemed
                  clients.`,
    siteUrl: `http://aplomgo.com`,
    image: `/images/blackLogo.jpg`,
    author: `Aplom Go. Limited`,
    email: `info@aplomgo.com`,
    social: {
      facebook: `https://www.facebook.com/Aplomhomes`,
      instagram: `https://instagram.com/aplomgo_aplomgo`,
      twitter: `https://twitter.com/aplomgo`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aplomgo Real Estate and Development`,
        short_name: `Aplomgo Properties`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-layout`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
  proxy: [
    {
      prefix: "/api",
      url: "http://localhost:4000",
    },
    {
      prefix: "/info",
      url: "http://localhost:4000",
    },
  ],
}
