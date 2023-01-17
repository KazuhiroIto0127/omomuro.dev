import { GraphQLClient } from 'graphql-request';
import { graphql } from '@/lib/graphql/codegen/gql';
import { GetAllWorksQueryQuery } from '@/lib/graphql/codegen/graphql';

const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

const query = graphql(`
  query GetAllWorksQuery {
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
`);

export async function getAllWorks() {
  const data = await graphQLClient.request<GetAllWorksQueryQuery>(query);
  return data;
}

export default getAllWorks;
