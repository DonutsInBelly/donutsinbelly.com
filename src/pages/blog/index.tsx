import { SanityClient } from '@/clients/sanityClient';
import {
  Box,
  ColumnLayout,
  Container,
  Header,
  SpaceBetween,
} from '@cloudscape-design/components';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type BlogPostCard = {
  _id: string;
  _createdAt: string;
  shortDescription: string;
  title: string;
  heroImage: string;
  tags: Tag[];
};

type Tag = {
  name: string;
};

export default function BlogPage({ posts }: { posts: BlogPostCard[] }) {
  posts.sort((a, b) => {
    const aDate = new Date(a._createdAt);
    const bDate = new Date(b._createdAt);
    return aDate < bDate ? 1 : -1;
  });
  return (
    <SpaceBetween size="xl">
      <Box textAlign="left" margin="l">
        <Header>{"Here's the Latest"}</Header>
        <ColumnLayout columns={3}>
          {posts.map((post) => {
            return (
              <Link
                key={`link-${post._id}`}
                href={`/blog/${post._id}`}
                style={{ textDecoration: 'none' }}
              >
                <Container
                  key={`postCard-${post._id}`}
                  header={
                    <Header variant="h2" description={post.shortDescription}>
                      {post.title}
                    </Header>
                  }
                >
                  <SpaceBetween size="m" alignItems="center">
                    <Image
                      src={post.heroImage}
                      alt={''}
                      width="300"
                      height="150"
                    />
                  </SpaceBetween>
                </Container>
              </Link>
            );
          })}
        </ColumnLayout>
      </Box>
    </SpaceBetween>
  );
}

export async function getStaticProps() {
  const posts =
    await SanityClient.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] {
      _id, _createdAt, title, shortDescription, "heroImage": heroImage.asset->url, tags[]->{name}
    }`);
  return {
    props: {
      posts,
    },
  };
}
