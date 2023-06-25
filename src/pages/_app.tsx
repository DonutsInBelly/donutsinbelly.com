import '@cloudscape-design/global-styles/index.css';
import type { AppProps } from 'next/app';
import { SpaceBetween } from '@cloudscape-design/components';
import { NavBar } from '@/components/layout/navbar';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SpaceBetween size="m">
      <NavBar />
      <Component {...pageProps} />
    </SpaceBetween>
  );
}
