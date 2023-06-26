import { Box, Header } from '@cloudscape-design/components';

type BlogPost = {
  _createdAt: string;
  _updatedAt: string;
  title: string;
  shortDescription: string;
};

export default function BlogPost({ post }: { post: BlogPost }) {
  return (
    <Box margin={{ horizontal: 'xl' }}>
      <Header>Test</Header>
    </Box>
  );
}
