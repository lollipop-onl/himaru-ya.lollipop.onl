import path from 'path';
import { GatsbyNode } from 'gatsby';
import { ContentfulNewsCategoryConnection } from '../src/types/graphql';

/** Contentfulから取得されるおしらせカテゴリのデータ型 */
type Result = {
  allContentfulNewsCategory: ContentfulNewsCategoryConnection;
};

const createNewsCategories: NonNullable<GatsbyNode['createPages']> = async ({
  actions,
  graphql,
}) => {
  const { createPage } = actions;
  const { data, errors } = await graphql<Result>(`
    query {
      allContentfulNewsCategory {
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

  const { edges } = data.allContentfulNewsCategory;
  const newsCategoryTemplateFilePath = path.resolve(
    __dirname,
    '../src/templates/NewsCategory.tsx'
  );

  edges.forEach((edge) => {
    const { id } = edge.node;

    createPage({
      path: `/category/${id}`,
      component: newsCategoryTemplateFilePath,
      context: { id },
    });
  });
};

export default createNewsCategories;
