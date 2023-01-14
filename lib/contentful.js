import { gql } from '@apollo/client';
import apolloClient from '@/lib/apollo-client';

export async function getAllWorks() {
  const { data } = await apolloClient.query({
    query: gql`
      query GetAllWorks {
        worksCollection(limit: 100) {
          items {
            sys {
              id
              publishedAt
              firstPublishedAt
            }
            title
            slug
            thumbnail {
              fileName
              width
              height
              url
            }
          }
        }
      }
    `,
  });
  return data.worksCollection.items;
}

export default getAllWorks;
