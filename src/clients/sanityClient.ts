import { createClient } from 'next-sanity';

export const SanityClient = createClient({
  projectId: '91efs7mg',
  dataset: 'production',
  apiVersion: 'v2021-10-21',
  useCdn: false,
});
