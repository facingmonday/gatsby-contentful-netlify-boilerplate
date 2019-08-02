/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');

// This function allows us to extend the Babel config
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-decorators',
    options: {
      legacy: true,
    },
  });
};

// This function allows us to extend the Webpack config
exports.onCreateWebpackConfig = (
  { stage, loaders, actions },
  { postCssPlugins, ...sassOptions },
) => {
  const isProduction = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !isProduction,
      ...sassOptions,
    },
  };
  const webpackConfig = {
    module: {
      rules: [{
        test: /\.s(a|c)ss$/,
        use: [
          { loader: require.resolve('classnames-loader') },
          !isSSR && loaders.miniCssExtract(),
          loaders.css({ modules: true, importLoaders: 2 }),
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ].filter(Boolean),
      }],
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules',
      ],
      alias: {
        shared: path.resolve(__dirname, 'shared'),
      },
    },
  };
  const config = actions.setWebpackConfig(webpackConfig);
};

// This function allows us to programmatically create pages
// Specifically, we use this to generate pages from a template and a series of CMS entries
//exports.createPages = async ({ graphql, actions }) => {
  
  //const { createPage, createRedirect } = actions;

  /**
   * EXAMPLE INVOICES
   */
  // const { data } = await graphql(`
  //   query {
  //     invoicePages: allContentfulInvoice {
  //       edges {
  //         node {
  //           slug
  //         }
  //       }
  //     }
  //   }
  // `);
  
  // data.invoicePages.edges.forEach(({ node }) => {
  //   console.log('node', node);
  //   createPage({
  //     path: `/invoices/${node.slug}`,
  //     component: path.resolve('./src/templates/invoice.js'),
  //     context: {
  //       slug: node.slug,
  //     },
  //   });
  // });
//};
