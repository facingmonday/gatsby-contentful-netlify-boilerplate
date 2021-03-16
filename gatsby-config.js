require('dotenv').config();

const siteUrl = process.env.URL || 'http://localhost:8000';

// This env variable is set by Netlify
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  siteMetadata: {
    title: "Gatsby Boilerplate",
    author: "The Refienry",
    description: "A Gatsby.js Starter"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    // {
    //   resolve: 'gatsby-plugin-layout',
    //   options: {
    //     component: require.resolve('./src/layouts/Main.js'),
    //   },
    // },
    'gatsby-plugin-netlify',
    {
      resolve: 'gatsby-plugin-webpack-bundle-analyzer',
      options: {
        production: true,
        disable: process.env.ANALYZE !== 'true',
      },
    },
    'gatsby-plugin-offline',
  ],
};

if(process.env.CONTENTFUL_SPACE_ID == 'true') {
  console.log('true!!!!!!')
  config.plugins.push({
    resolve: 'gatsby-source-contentful',
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID, // Proxy Website
      accessToken: isProduction
        ? process.env.CONTENTFUL_DELIVERY_TOKEN
        : process.env.CONTENTFUL_PREVIEW_TOKEN,
      host: isProduction
        ? 'cdn.contentful.com'
        : 'preview.contentful.com',
    },
  });
  config.plugins.push('@contentful/gatsby-transformer-contentful-richtext');
}

module.exports = config;