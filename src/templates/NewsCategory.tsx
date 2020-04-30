import React from 'react';
import { graphql } from 'gatsby';
import { NewsCategoryQuery } from '~/types/graphql';

type Props = {
  data: NewsCategoryQuery;
};

const NewsPostPage: React.FC<Props> = ({ data }) => {
  const { contentfulNewsCategory } = data;

  return (
    <div>
      <h1>{contentfulNewsCategory?.name}</h1>
    </div>
  );
};

export const pageQuery = graphql`
  query NewsCategory($id: String!) {
    contentfulNewsCategory(id: { eq: $id }) {
      name
    }
  }
`;
export default NewsPostPage;
