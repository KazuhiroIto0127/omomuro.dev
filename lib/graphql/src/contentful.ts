import { request } from 'graphql-request';
// import useSWR from "swr";
import { graphql } from '@/lib/graphql/codegen/gql';
import { GetAllWorksQueryQuery } from '@/lib/graphql/codegen/graphql';

// import apolloClient from '@/lib/apollo-client';
const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

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
        body
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
  const data = await request<GetAllWorksQueryQuery>({
    url: URL,
    document: query,
    requestHeaders: { Authorization: `Bearer ${TOKEN}` },
  });
  return data;
}

export default getAllWorks;
