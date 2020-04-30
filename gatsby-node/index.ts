import path from 'path';
import { GatsbyNode } from 'gatsby';
import createNewsPosts from './createNewsPosts';
import createNewsCategories from './createNewsCategories';

export const createPages: GatsbyNode['createPages'] = async (params) => {
  await Promise.all([createNewsPosts(params), createNewsCategories(params)]);
};

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, '../src'),
      },
    },
  });
};
