import React from 'react';
import { TopNavigation } from '@cloudscape-design/components';

export function NavBar() {
  return (
    <TopNavigation
      identity={{
        href: '/',
        title: 'DonutsInBelly',
        logo: {
          src: '/donuts-logo.png',
          alt: 'Carlin screaming into the void through a donut hole',
        },
      }}
      utilities={[
        {
          type: 'button',
          text: 'Blog',
          href: '/blog',
        },
      ]}
    />
  );
}
