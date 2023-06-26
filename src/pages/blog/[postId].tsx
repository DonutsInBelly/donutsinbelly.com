import { SanityClient } from '@/clients/sanityClient';
import { portableTextComponents } from '@/components/portableText/components';
import { formatDate } from '@/utils/dateUtils';
import {
  Box,
  Button,
  ColumnLayout,
  Header,
  Icon,
  TextContent,
} from '@cloudscape-design/components';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { ParsedUrlQuery } from 'querystring';

type BlogPost = {
  _createdAt: string;
  _updatedAt: string;
  title: string;
  shortDescription: string;
  content: any[];
  heroImage: string;
};

export default function BlogPost({ post }: { post: BlogPost }) {
  if (!post) {
    return <div></div>;
  } else {
    return (
      <Box margin={{ horizontal: 'xl' }}>
        <Link href="/blog">
          <Button>
            <Icon name="arrow-left" />
            Back
          </Button>
        </Link>
        <TextContent>
          <ColumnLayout columns={2}>
            <Box margin="xl">
              <Header>{post.title}</Header>
              <p>
                <i>{post.shortDescription}</i>
              </p>
              <p>
                <i>Posted on: {formatDate(new Date(post._createdAt))}</i>
              </p>
              <p>
                <i>Last updated on: {formatDate(new Date(post._updatedAt))}</i>
              </p>
            </Box>
            <Box>
              <Image src={post.heroImage} alt={''} width="300" height="200" />
            </Box>
          </ColumnLayout>
          <Box margin="xxxl">
            <PortableText
              value={post.content}
              components={portableTextComponents}
            />
          </Box>
        </TextContent>
      </Box>
    );
  }
}

export async function getStaticProps({ params }: { params: ParsedUrlQuery }) {
  const post = await SanityClient.fetch(
    `*[_type == "post" && _id == '${params.postId}'] {
      _createdAt, _updatedAt, title, content, tags[]->{name}, "heroImage": heroImage.asset->url, shortDescription
    }`
  );

  return {
    props: {
      post: post[0],
    },
  };
}

export async function getStaticPaths() {
  const postIds =
    await SanityClient.fetch(`*[_type == "post" && !(_id in path("drafts.**"))] {
    _id
  }`);
  const blogPaths = postIds.map((post: { _id: string }) => {
    return `/blog/${post._id}`;
  });

  return {
    paths: blogPaths,
    fallback: true,
  };
}
