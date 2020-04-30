import path from 'path';
import { GatsbyNode } from 'gatsby';
import createNewsPosts from './createNewsPosts';

export const createPages: GatsbyNode['createPages'] = async (params) => {
  await Promise.all([createNewsPosts(params)]);
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
