import React from 'react';
import { useSitePreference } from '~/hooks';

type Props = {};

const IndexPage: React.FC<Props> = () => {
  const { sliderPictures } = useSitePreference();

  return <div>Hello you.</div>;
};

export default IndexPage;
