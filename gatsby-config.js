const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Property Development & Real Estate Investment Services`,
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
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5f00f7e3760b2b560e6fc048",
      },
    },
  ],
  proxy: [
    {
      prefix: "/api",
      url: "http://localhost:40000",
    },
    {
      prefix: "/info",
      url: "http://localhost:40000",
    },
  ],
}
