import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  //projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
  projectId: 'ohvkbwbb',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'sku35r21ymCavhoG5DqUzU1Gl8OlHWCkdqk0qQXfecYAktJW0VMNJkwWur3vFvfqrleRq4S4OgW96fiZgsrP8kqEOTCPfeTNps9QCqCv0QiMMMwh1bH5XvImOM4GI8iM4OyAkcRJKOxdHi2Rn79oJS2pvYrD6GZQ9S30YAqtHMZmzWUQz28o',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);