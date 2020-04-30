import React from 'react';
import Layout from '~/components/Layout';
import { useSitePreference } from '~/hooks';

type Props = {};

const IndexPage: React.FC<Props> = () => {
  const { sliderPictures } = useSitePreference();

  return (
    <Layout>
      <div>Hello you.</div>
    </Layout>
  );
};

export default IndexPage;
