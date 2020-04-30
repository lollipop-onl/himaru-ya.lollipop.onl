import React from 'react';
import { graphql } from 'gatsby';
import { NewsPostQuery } from '~/types/graphql';

type Props = {
  data: NewsPostQuery;
};

const NewsPostPage: React.FC<Props> = ({ data }) => {
  const { contentfulNewsPost } = data;

  return (
    <div>
      <h1>{contentfulNewsPost?.title}</h1>
    </div>
  );
};

export const pageQuery = graphql`
  query NewsPost($id: String!) {
    contentfulNewsPost(id: { eq: $id }) {
      title
      category {
        id
        name
      }
      thumbnail {
        title
        file {
          url
        }
      }
      body {
        json
      }
    }
  }
`;
export default NewsPostPage;
