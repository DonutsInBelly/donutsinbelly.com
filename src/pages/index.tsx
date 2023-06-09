import SpaceBetween from '@cloudscape-design/components/space-between';
import Button from '@cloudscape-design/components/button';
import Image from 'next/image';
import { Box, Grid, TextContent } from '@cloudscape-design/components';
import Link from 'next/link';

export default function App() {
  return (
    <Grid
      gridDefinition={[
        { colspan: { default: 12, s: 3 } },
        { colspan: { default: 12, s: 9 } },
      ]}
      disableGutters
    >
      <div style={{ marginTop: 300, marginBottom: 50 }}>
        <TextContent>
          <Box
            textAlign="center"
            margin={{ horizontal: 'xxl', top: 'xxxl', bottom: 'm' }}
          >
            <SpaceBetween direction="vertical" size="l" alignItems="center">
              <h1>{"Hey! 👋 I'm Carlin"}</h1>
              <h2>I write about software, gaming, and food here.</h2>
              <Link href={'/blog'}>
                <Button variant="primary">Take me to the blog</Button>
              </Link>
            </SpaceBetween>
          </Box>
        </TextContent>
      </div>
      <div style={{ width: '65vw', height: '95vh' }}>
        <Image
          src="/coding@1x.svg"
          alt={''}
          fill={true}
          sizes="(min-width: 688px) 100vw, 66.67vw"
        />
      </div>
    </Grid>
  );
}
