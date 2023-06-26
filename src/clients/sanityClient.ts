import { createClient } from 'next-sanity';

export const SanityClient = createClient({
  projectId: '91efs7mg',
  dataset: 'production',
  useCdn: false,
});
