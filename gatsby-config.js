// .envファイルをロード
require('dotenv').config({ path: '.env' });

/**
 * @type import('gatsby').GatsbyConfig
 */
module.exports = {
  siteMetadata: {
    title: '灯まる屋',
    description: '',
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gastby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/types/graphql.d.ts'
      }
    },
    {
      resolve: 'gatsby-source-contentful',
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        }
    }
  ],
};
