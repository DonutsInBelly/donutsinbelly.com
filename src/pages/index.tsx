import { useState } from 'react';
import Header from '@cloudscape-design/components/header';
import Container from '@cloudscape-design/components/container';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Input from '@cloudscape-design/components/input';
import Button from '@cloudscape-design/components/button';
import TopNavigation from '@cloudscape-design/components/top-navigation';

export default function App() {
  const [value, setValue] = useState('');

  return (
    <>
      <TopNavigation
        identity={{
          href: '/',
          title: '',
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
      <SpaceBetween size="m">
        <Header variant="h1">Hello World!</Header>

        <Container>
          <SpaceBetween size="s">
            <span>Start editing to see some magic happen</span>
            <Input
              value={value}
              onChange={(event) => setValue(event.detail.value)}
            />
            <Button variant="primary">Click me</Button>
          </SpaceBetween>
        </Container>
      </SpaceBetween>
    </>
  );
}
