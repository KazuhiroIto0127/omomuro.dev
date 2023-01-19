import { GraphQLClient } from 'graphql-request';
import { graphql } from '@/lib/graphql/codegen/gql';
import { GetAllWorksQueryQuery, GetAllSlugQuery, GetWorksQuery } from '@/lib/graphql/codegen/graphql';

const TOKEN = process.env.CONTENTFUL_DELIVERY_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const graphQLClient = new GraphQLClient(ENDPOINT, {
  headers: {
    authorization: `Bearer ${TOKEN}`,
  },
});

export async function getAllWorks() {
  const query = graphql(`
    query GetAllWorksQuery {
      worksCollection(limit: 100) {
        items {
          sys {
            id
            publishedAt
            firstPublishedAt
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          slug
          title
          description
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
  const data = await graphQLClient.request<GetAllWorksQueryQuery>(query);
  return data;
}

export async function GetWorkData(slug) {
  const query = graphql(`
    query GetWorks($slug: String!) {
      worksCollection(where: { slug: $slug }, limit: 1) {
        items {
          sys {
            id
            publishedAt
            firstPublishedAt
          }
          contentfulMetadata {
            tags {
              id
              name
            }
          }
          slug
          title
          description
          body
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

  const variables = {
    slug: slug,
  };
  const data = await graphQLClient.request<GetWorksQuery>(query, variables);
  return data;
}

export async function GetAllSlugIds() {
  const query = graphql(`
    query GetAllSlug {
      worksCollection(limit: 100) {
        items {
          slug
        }
      }
    }
  `);
  const data = await graphQLClient.request<GetAllSlugQuery>(query);
  const items = data.worksCollection.items;
  return items.map((item) => {
    return {
      params: {
        id: item.slug,
      },
    };
  });
}
