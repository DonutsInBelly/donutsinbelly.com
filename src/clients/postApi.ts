import { SanityClient } from './sanityClient';

export const getPostById = async (id: string) => {
  const post = await SanityClient.fetch(`*[_type == "post" && _id == '${id}'] {
    _createdAt, _updatedAt, title, content, tags[]->{name}, "heroImage": heroImage.asset->url, shortDescription
  }`);

  return post;
};
