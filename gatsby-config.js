// .envファイルをロード
require('dotenv').config({ path: '.env' });

/**
 * @type import('gatsby').GatsbyConfig
 */
module.exports = {
  siteMetadata: {
    title: '灯まる屋',
    description:
      '千葉市稲毛区の居酒屋 灯まる屋。毎日新鮮な食材でおもてなしいたします。',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: 'src/types/graphql.d.ts',
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
};
