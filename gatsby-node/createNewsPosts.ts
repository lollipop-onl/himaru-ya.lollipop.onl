import path from 'path';
import { GatsbyNode } from 'gatsby';
import { ContentfulNewsPostConnection } from '../src/types/graphql';

/** Contentfulから取得されるおしらせ記事のデータ型 */
type Result = {
  allContentfulNewsPost: ContentfulNewsPostConnection;
};

const createNewsPosts: NonNullable<GatsbyNode['createPages']> = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const { data, errors } = await graphql<Result>(`
    query {
      allContentfulNewsPost {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  if (!data || errors) {
    return;
  }

  const { edges } = data.allContentfulNewsPost;
  const newsPostTemplateFilePath = path.resolve(
    __dirname,
    '../src/templates/NewsPost.tsx'
  );

  edges.forEach((edge) => {
    const { id } = edge.node;

    createPage({
      path: `/news/${id}`,
      component: newsPostTemplateFilePath,
      context: { id },
    });
  });
};

export default createNewsPosts;
