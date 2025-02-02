/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: "Yordevs Website",
    titleTemplate: "Yordevs // %s",
    description:
      "The official website for Yordevs, the University of York's Web Development society!",
    author: "Yordevs",
    url: "https://yordevs.com",
    image: "/images/defaultImage.png",
    twitterUsername: "@yordevs",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/content/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "projects",
        path: `${__dirname}/src/content/projects`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
              rel: "nofollow noopener noreferrer",
            },
          },
          {
            resolve: "gatsby-remark-code-titles",
          }, // IMPORTANT: this must be ahead of other plugins that use code blocks
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              noInlineHighlight: true,
              aliases: {
                js: "javascript",
              },
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `${__dirname}/src/images/favicon.png`,
      },
    },
  ],
};
