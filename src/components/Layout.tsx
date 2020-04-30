import React from 'react';
import '~/assets/styles/main.scss';

type Props = {};

const Layout: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Layout;
