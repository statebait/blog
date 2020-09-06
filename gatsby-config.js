module.exports = {
  pathPrefix: "/blog",
  siteMetadata: {
    title: `Mohamed Shadab`,
    author: `Mohamed Shadab`,
    description: `Personal blog of Mohamed Shadab. You will find posts mostly about tech related to web development! Mohamed is a Software Engineer building awesome tech at Lyearn.`,
    siteUrl: `https://mohamedshadab.me/blog`,
    social: {
      twitter: `statebait`,
    },
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-117988878-2`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Statebait Blog`,
        short_name: `statebait`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#8a75f5`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.png`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-dark-mode`,
  ],
}
